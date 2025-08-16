import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  fields: [
    {
      type: "text",
      name: "name",
      required: true,
    },
    {
      type: "text",
      name: "email",
      required: true,
    },
    {
      type: "checkbox",
      name: "emailVerified",
      required: true,
      defaultValue: false,
    },
    {
      type: "text",
      name: "image",
    },
    {
      type: "text",
      name: "role",
      required: true,
    },
  ],
};
