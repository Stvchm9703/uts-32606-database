import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateManyUserInput> = z
  .object({
    playlistId: z.number(),
  })
  .strict();

export const PlaylistOnFollowerCreateManyUserInputObjectSchema = Schema;
