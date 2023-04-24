import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUncheckedCreateInput> = z
  .object({
    albumId: z.number(),
    tagId: z.number(),
  })
  .strict();

export const AlbumAvailableMarketUncheckedCreateInputObjectSchema = Schema;
