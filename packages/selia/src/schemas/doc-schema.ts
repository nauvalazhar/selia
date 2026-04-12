import { z } from 'zod';

export const DocSchema = z.object({
  name: z.string(),
  content: z.string(),
});

export type Doc = z.infer<typeof DocSchema>;

export const DocsIndexSchema = z.object({
  docs: z.array(
    z.object({
      name: z.string(),
    }),
  ),
});

export type DocsIndex = z.infer<typeof DocsIndexSchema>;
