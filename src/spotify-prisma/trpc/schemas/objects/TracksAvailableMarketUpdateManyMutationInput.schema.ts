import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksAvailableMarketUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TracksAvailableMarketUpdateManyMutationInputObjectSchema = Schema;
