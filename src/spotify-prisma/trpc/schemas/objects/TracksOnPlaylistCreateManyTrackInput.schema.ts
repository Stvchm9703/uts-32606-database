import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateManyTrackInput> = z
  .object({
    playlistId: z.number(),
  })
  .strict();

export const TracksOnPlaylistCreateManyTrackInputObjectSchema = Schema;
