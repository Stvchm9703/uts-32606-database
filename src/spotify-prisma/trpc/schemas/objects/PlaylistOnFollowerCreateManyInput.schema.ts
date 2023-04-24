import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateManyInput> = z
  .object({
    playlistId: z.number(),
    userId: z.number(),
  })
  .strict();

export const PlaylistOnFollowerCreateManyInputObjectSchema = Schema;
