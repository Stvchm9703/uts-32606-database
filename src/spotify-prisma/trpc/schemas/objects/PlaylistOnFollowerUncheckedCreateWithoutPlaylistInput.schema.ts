import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput> =
  z
    .object({
      userId: z.number(),
    })
    .strict();

export const PlaylistOnFollowerUncheckedCreateWithoutPlaylistInputObjectSchema =
  Schema;
