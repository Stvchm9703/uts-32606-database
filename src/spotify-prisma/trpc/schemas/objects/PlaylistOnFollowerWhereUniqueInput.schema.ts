import { z } from 'zod';
import { PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInputObjectSchema } from './PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerWhereUniqueInput> = z
  .object({
    playlistId_userId: z
      .lazy(
        () => PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistOnFollowerWhereUniqueInputObjectSchema = Schema;
