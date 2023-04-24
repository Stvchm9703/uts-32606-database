import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput> =
  z
    .object({
      playlistId: z.number(),
      trackId: z.number(),
    })
    .strict();

export const TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInputObjectSchema =
  Schema;
