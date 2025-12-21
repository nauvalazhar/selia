import { ItemSchema } from '../src/schemas/item-schema';
import { RegistrySchema } from '../src/schemas/registry-schema';
import { SetupStepSchema } from '../src/schemas/setup-schema';
import { ConfigSchema } from '../src/schemas/config-schema';
import { z } from 'zod';

const schemas = {
  setup: SetupStepSchema,
  item: ItemSchema,
  registry: RegistrySchema,
  config: ConfigSchema,
};

for (const [name, schema] of Object.entries(schemas)) {
  await Bun.write(
    `../../public/schemas/${name}.v1.json`,
    JSON.stringify(
      z.toJSONSchema(schema, {
        target: 'draft-07',
      }),
      null,
      2,
    ),
  );
}
