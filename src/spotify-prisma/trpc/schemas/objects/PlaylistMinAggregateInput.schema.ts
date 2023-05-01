import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    public: z.literal(true).optional(),
    primaryColor: z.literal(true).optional(),
    imagesId: z.literal(true).optional(),
  })
  .strict();

export const PlaylistMinAggregateInputObjectSchema = Schema;
