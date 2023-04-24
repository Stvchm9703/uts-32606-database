import { z } from 'zod';
import { TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput.schema';
import { PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUncheckedCreateWithoutOwnerInput> = z
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
    imagesId: z.string().optional().nullable(),
    tracks: z
      .lazy(
        () =>
          TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
    followers: z
      .lazy(
        () =>
          PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistUncheckedCreateWithoutOwnerInputObjectSchema = Schema;
