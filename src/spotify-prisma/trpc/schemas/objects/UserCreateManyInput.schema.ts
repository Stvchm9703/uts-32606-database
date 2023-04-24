import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string().optional().nullable(),
    name: z.string(),
    email: z.string().optional().nullable(),
    authType: z.string().optional(),
    type: z.string().optional(),
    country: z.string(),
    explicitContentFilterEnabled: z.boolean(),
    explicitContentFilterLocked: z.boolean(),
    imagesId: z.string().optional().nullable(),
    product: z.string(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
