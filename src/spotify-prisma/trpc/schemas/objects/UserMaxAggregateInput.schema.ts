import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    uid: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    authType: z.literal(true).optional(),
    type: z.literal(true).optional(),
    country: z.literal(true).optional(),
    explicitContentFilterEnabled: z.literal(true).optional(),
    explicitContentFilterLocked: z.literal(true).optional(),
    imagesId: z.literal(true).optional(),
    product: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;
