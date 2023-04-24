import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketCreateManyAlbumInput> = z
  .object({
    tagId: z.number(),
  })
  .strict();

export const AlbumAvailableMarketCreateManyAlbumInputObjectSchema = Schema;
