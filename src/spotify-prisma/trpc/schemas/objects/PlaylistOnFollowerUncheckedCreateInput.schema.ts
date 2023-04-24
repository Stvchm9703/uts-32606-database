import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUncheckedCreateInput> = z
  .object({
    playlistId: z.number(),
    userId: z.number(),
  })
  .strict();

export const PlaylistOnFollowerUncheckedCreateInputObjectSchema = Schema;
