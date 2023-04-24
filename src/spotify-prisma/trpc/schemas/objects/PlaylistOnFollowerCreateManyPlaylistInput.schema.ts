import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateManyPlaylistInput> = z
  .object({
    userId: z.number(),
  })
  .strict();

export const PlaylistOnFollowerCreateManyPlaylistInputObjectSchema = Schema;
