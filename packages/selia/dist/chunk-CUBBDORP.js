// src/schemas/config-schema.ts
import { z } from "zod";
var ConfigSchema = z.object({
  framework: z.string().optional(),
  paths: z.record(z.string(), z.string()),
  imports: z.record(z.string(), z.string()),
  registries: z.object({
    default: z.string().optional(),
    sources: z.record(
      z.string(),
      z.object({
        name: z.string(),
        url: z.url(),
        homepage: z.url().optional()
      })
    ).optional()
  }).optional()
});

export {
  ConfigSchema
};
//# sourceMappingURL=chunk-CUBBDORP.js.map