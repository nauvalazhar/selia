import { z } from 'zod';

export const ConfigSchema = z.object({
  framework: z.string().optional(),
  paths: z.record(z.string(), z.string()),
  imports: z.record(z.string(), z.string()),
  registries: z
    .object({
      default: z.string().optional(),
      sources: z
        .record(
          z.string(),
          z.object({
            name: z.string(),
            url: z.url(),
            homepage: z.url().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
});

export type Config = z.infer<typeof ConfigSchema>;
