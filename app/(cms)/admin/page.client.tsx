"use client";

import { useEffect } from "react";

let loaded = 0;

async function loadDecapCms() {
  if (!loaded) {
    const decapCms = await (import("decap-cms").then(m => m.default));

    decapCms.DecapCMSApp.init();

    loaded++;
    // import("./preview-templates.js").catch((e) =>
    //   console.error("Preview error", e)
    // );
  }
}

export function CMS() {
  useEffect(() => {
    loadDecapCms();
  }, []);

  return <></>;
}
