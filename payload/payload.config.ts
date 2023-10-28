import path from 'path';
import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';

export default buildConfig({
  collections: [],
  globals: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
