import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUpdateManyMutationInput> = z
  .object({})
  .strict();

export const AlbumAvailableMarketUpdateManyMutationInputObjectSchema = Schema;
