import { z } from 'zod';

const ConditionAtomSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('file-exists'),
    path: z.string(),
  }),

  z.object({
    type: z.literal('file-contains'),
    path: z.string(),
    pattern: z.string(),
  }),

  z.object({
    type: z.literal('dependency'),
    name: z.string(),
  }),

  z.object({
    type: z.literal('env'),
    key: z.string(),
  }),

  z.object({
    type: z.literal('framework'),
    value: z.string(),
  }),
]);

const ConditionSchema: z.ZodType<any> = z.lazy(() =>
  z.union([
    ConditionAtomSchema,

    z.object({
      all: z.array(ConditionSchema),
    }),

    z.object({
      any: z.array(ConditionSchema),
    }),

    z.object({
      not: ConditionSchema,
    }),
  ]),
);

const BaseStepSchema = z.object({
  condition: z
    .object({
      if: ConditionSchema.optional(),
      unless: ConditionSchema.optional(),
    })
    .optional(),
});

export const SetupStepSchema = z.discriminatedUnion('type', [
  BaseStepSchema.extend({
    type: z.literal('dependencies'),
    packages: z.record(z.string(), z.string()),
  }),

  // Detect framework
  BaseStepSchema.extend({
    type: z.literal('detect-framework'),
    name: z.string(),
    saveAs: z.string().optional(),
  }),

  BaseStepSchema.extend({
    type: z.literal('assert'),
    name: z.string(),

    check: z.discriminatedUnion('type', [
      z.object({
        type: z.literal('dependency'),
        packages: z.array(z.string()),
      }),

      z.object({
        type: z.literal('file-exists'),
        path: z.string(),
      }),

      z.object({
        type: z.literal('framework'),
        value: z.array(z.string()),
      }),

      z.object({
        type: z.literal('env'),
        key: z.string(),
      }),
    ]),

    onFail: z.object({
      exit: z.boolean().default(true),
      message: z.union([z.string(), z.array(z.string())]),
    }),
  }),

  // Prompt
  BaseStepSchema.extend({
    type: z.literal('prompt'),
    name: z.string(),
    promptType: z.enum(['text', 'select', 'confirm', 'file-search']),
    message: z.string(),
    saveAs: z.string(), // where to save in config
    default: z.any().optional(),
    // For file-search
    pattern: z.string().optional(),
    exclude: z.array(z.string()).optional(),
    // For select
    options: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    // Validation
    validate: z
      .object({
        pattern: z.string().optional(),
        required: z.boolean().optional(),
      })
      .optional(),
  }),

  // File append
  BaseStepSchema.extend({
    type: z.literal('file-append'),
    target: z.string(), // supports {{variable}}
    content: z.string().optional(),
    contentPath: z.string().optional(), // from registry
  }),

  // File create
  BaseStepSchema.extend({
    type: z.literal('file-create'),
    target: z.string(),
    content: z.string().optional(),
    contentPath: z.string().optional(),
    overwrite: z.boolean().optional().default(false),
  }),

  // File update
  BaseStepSchema.extend({
    type: z.literal('file-update'),
    target: z.string(),
    search: z.string(), // regex pattern
    replace: z.string(), // replacement string
  }),

  // File update JSON
  BaseStepSchema.extend({
    type: z.literal('file-update-json'),
    target: z.string(),
    content: z.record(z.string(), z.any()),
    merge: z.enum(['shallow', 'deep']).optional().default('deep'),
  }),
]);

export const SetupSchema = z.object({
  steps: z.array(SetupStepSchema),
});

export type SetupStep = z.infer<typeof SetupStepSchema>;
export type Setup = z.infer<typeof SetupSchema>;
