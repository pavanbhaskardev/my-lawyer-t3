import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: false,
  fields: [
    {
      type: "text",
      name: "name",
      required: true,
    },
  ],
};
