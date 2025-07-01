export function createPreviewTemplate() {
  return ({ entry }) => {
    const data = entry.getIn(['data']);
    return `<h1>${data.getIn(['title', 'en'])}</h1><p>${data.get('body')}</p>`;
  };
}

// Only register actual i18n keys you're using
window.CMS.registerPreviewTemplate('posts-en', createPreviewTemplate());
window.CMS.registerPreviewTemplate('pages-en', createPreviewTemplate());
