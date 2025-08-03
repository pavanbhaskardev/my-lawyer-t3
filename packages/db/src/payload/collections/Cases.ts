import type { CollectionConfig } from "payload";

export const Cases: CollectionConfig = {
  slug: "cases",
  fields: [
    {
      type: "text",
      name: "name",
      required: true,
    },
  ],
};
