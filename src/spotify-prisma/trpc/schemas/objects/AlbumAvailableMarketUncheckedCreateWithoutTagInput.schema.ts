import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumAvailableMarketUncheckedCreateWithoutTagInput> =
  z
    .object({
      albumId: z.number(),
    })
    .strict();

export const AlbumAvailableMarketUncheckedCreateWithoutTagInputObjectSchema =
  Schema;
