// storage-adapter-import-placeholder
import path from "path";
import { fileURLToPath } from "url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

// import { Media } from "./collections/Media";
import { Cases } from "./src/payload/collections/Cases";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default function getPayloadConfig(options: {
  databaseUrl: string;
  payloadSecret: string;
}) {
  return buildConfig({
    admin: {
      importMap: {
        baseDir: path.resolve(dirname),
      },
    },
    collections: [Cases],
    secret: options.payloadSecret,
    typescript: {
      outputFile: path.resolve(dirname, "payload-types.ts"),
    },
    db: mongooseAdapter({
      url: options.databaseUrl,
    }),
  });
}
