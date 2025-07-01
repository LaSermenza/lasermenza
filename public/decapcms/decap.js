import { DecapCMSApp } from "decap-cms";

DecapCMSApp.init();

import("./preview-templates.js").catch((e) =>
  console.error("Preview error", e)
);
