// src/schemas/item-schema.ts
import { z } from "zod";
var ItemSchema = z.object({
  name: z.string(),
  type: z.union([
    z.enum(["component", "block", "hook", "util", "config"]),
    z.string()
  ]),
  dependencies: z.object({
    npm: z.record(z.string(), z.string()).optional(),
    items: z.array(z.string()).optional()
  }).optional(),
  files: z.array(
    z.object({
      name: z.string(),
      content: z.string().optional(),
      target: z.string(),
      path: z.string().optional(),
      type: z.union([
        z.enum(["component", "block", "hook", "util", "config"]),
        z.string()
      ]).optional()
    })
  )
});

export {
  ItemSchema
};
//# sourceMappingURL=chunk-ICP4KZNS.js.map