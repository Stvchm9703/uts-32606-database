import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateManyInput> = z
  .object({
    albumId: z.number(),
    tagId: z.number(),
  })
  .strict();

export const AlbumAvailableMarketCreateManyInputObjectSchema = Schema;
