import { z } from 'zod';
import { TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInputObjectSchema } from './TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistWhereUniqueInput> = z
  .object({
    playlistId_trackId: z
      .lazy(
        () => TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksOnPlaylistWhereUniqueInputObjectSchema = Schema;
