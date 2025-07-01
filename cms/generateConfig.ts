import fs from "fs";
import yaml from "js-yaml";

const LOCALES = ["it", "en", "fr"] as const;

const localizedField = (label: string, name: string, widget = "string") =>
  LOCALES.map((locale) => ({
    label: `${label} (${locale})`,
    name: `${name}.${locale}`,
    widget,
  }));

const localizedSlugField = () =>
  LOCALES.map((locale) => ({
    label: `Slug (${locale})`,
    name: `slug.${locale}`,
    widget: "string",
    required: false,
  }));

const baseFields = [
  ...localizedField("Title", "title"),
  ...localizedSlugField(),
  {
    label: "Featured Image",
    name: "image",
    widget: "image",
    required: false,
  },
  {
    label: "Gallery",
    name: "gallery",
    widget: "list",
    required: false,
    fields: [
      { label: "Image", name: "image", widget: "image" },
      { label: "Caption", name: "caption", widget: "string", required: false },
      { label: "Place", name: "place", widget: "string", required: false },
      { label: "Year", name: "year", widget: "number", required: false },
      { label: "Date", name: "date", widget: "datetime", required: false },
    ],
  },
  ...localizedField("Body", "body", "markdown"),
];

const i18nFolderCollections = (
  name: string,
  label: string,
  extraFields: any[] = []
): any => ({
  name,
  label,
  i18n: true,
  folder: `content/${name}`,
  create: true,
  slug: "{{slug}}",
  extension: "md",
  format: "frontmatter",
  fields: [...baseFields, ...extraFields],
});

const config = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  media_folder: "/public/uploads",
  public_folder: "/public",
  i18n: {
    structure: "multiple_folders",
    locales: LOCALES,
    default_locale: "it",
  },
  collections: [
    i18nFolderCollections("posts", "Blog Posts"),
    i18nFolderCollections("courses", "Courses", [
      ...localizedField("Location", "location"),
      { label: "Start Date", name: "start_date", widget: "datetime" },
      { label: "End Date", name: "end_date", widget: "datetime" },
    ]),
    i18nFolderCollections("schedule", "Schedule", [
      ...localizedField("Description", "description", "text"),
      { label: "Date", name: "date", widget: "date" },
      { label: "Start Time", name: "start_time", widget: "string" },
      { label: "End Time", name: "end_time", widget: "string" },
      {
        label: "Venue",
        name: "venue",
        widget: "relation",
        collection: "venues",
        search_fields: ["title.it"],
        value_field: "slug.it",
        display_fields: ["title.it"],
      },
      {
        label: "Speakers",
        name: "speakers",
        widget: "list",
        field: {
          label: "Speaker",
          name: "speaker",
          widget: "relation",
          collection: "speakers",
          search_fields: ["title.it"],
          value_field: "slug.it",
          display_fields: ["title.it"],
        },
      },
    ]),
    i18nFolderCollections("gallery", "Gallery", [
      {
        label: "Images",
        name: "images",
        widget: "list",
        fields: [
          { label: "Image", name: "image", widget: "image" },
          {
            label: "Caption",
            name: "caption",
            widget: "string",
            required: false,
          },
          { label: "Place", name: "place", widget: "string", required: false },
          { label: "Year", name: "year", widget: "number", required: false },
          { label: "Date", name: "date", widget: "datetime", required: false },
        ],
      },
    ]),
    i18nFolderCollections("speakers", "Speakers", [
      ...localizedField("Role", "role"),
    ]),
    i18nFolderCollections("venues", "Venues", [
      ...localizedField("Address", "address"),
    ]),
    i18nFolderCollections("pages", "Static Pages"),
  ],
};

const yamlStr = yaml.dump(config);
fs.writeFileSync("public/config.yml", yamlStr);
console.log("✅ config.yml generated in public/");
// fs.writeFileSync('public/admin/config.yml', yamlStr);
// console.log('✅ config.yml generated in public/admin/');
