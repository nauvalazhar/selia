import { z } from 'zod';
import { ItemSchema } from './item-schema';
import { SetupSchema } from '~/schemas/setup-schema';

export const RegistrySchema = z.object({
  name: z.string(),
  homepage: z.url().optional(),
  items: z.array(ItemSchema),
  setup: z.union([SetupSchema, z.string()]).optional(),
});

export type Registry = z.infer<typeof RegistrySchema>;
