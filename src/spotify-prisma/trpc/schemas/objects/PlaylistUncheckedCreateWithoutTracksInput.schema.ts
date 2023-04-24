import { z } from 'zod';
import { PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUncheckedCreateWithoutTracksInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string().optional().nullable(),
    collaborative: z.boolean(),
    description: z.string(),
    name: z.string(),
    public: z.boolean(),
    snapshotId: z.string().optional().nullable(),
    primaryColor: z.string().optional().nullable(),
    tracksIds: z.number(),
    ownerId: z.number(),
    imagesId: z.string().optional().nullable(),
    followers: z
      .lazy(
        () =>
          PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistUncheckedCreateWithoutTracksInputObjectSchema = Schema;
