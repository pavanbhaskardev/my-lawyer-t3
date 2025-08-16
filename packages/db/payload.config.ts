// storage-adapter-import-placeholder
import path from "path";
import { fileURLToPath } from "url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

// import { Media } from "./collections/Media";
import { Cases } from "./src/payload/collections/Cases";
import { Users } from "./src/payload/collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

if (!process.env.AUTH_SECRET) {
  throw new Error("Missing AUTH_SECRET");
}

const getPayloadConfig = buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: "users",
  },
  collections: [Cases, Users],
  secret: process.env.AUTH_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, "../api/payload-types.ts"),
    autoGenerate: false,
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL,
  }),
});

export default getPayloadConfig;
