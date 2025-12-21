import {
  ItemSchema
} from "./chunk-ICP4KZNS.js";
import {
  SetupSchema
} from "./chunk-KEWLX44Q.js";

// src/schemas/registry-schema.ts
import { z } from "zod";
var RegistrySchema = z.object({
  name: z.string(),
  homepage: z.url().optional(),
  items: z.array(ItemSchema),
  setup: z.union([SetupSchema, z.string()]).optional()
});

export {
  RegistrySchema
};
//# sourceMappingURL=chunk-UCAIUO4I.js.map