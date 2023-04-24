import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUncheckedCreateWithoutPlaylistInput> =
  z
    .object({
      trackId: z.number(),
    })
    .strict();

export const TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema =
  Schema;
