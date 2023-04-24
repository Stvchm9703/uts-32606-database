import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateManyTagInput> = z
  .object({
    albumId: z.number(),
  })
  .strict();

export const AlbumAvailableMarketCreateManyTagInputObjectSchema = Schema;
