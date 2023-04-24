import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput> =
  z
    .object({
      playlistId: z.number(),
      userId: z.number(),
    })
    .strict();

export const PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInputObjectSchema =
  Schema;
