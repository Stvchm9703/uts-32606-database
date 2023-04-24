import { z } from 'zod';
import { UserCreateNestedOneWithoutPlaylistInputObjectSchema } from './UserCreateNestedOneWithoutPlaylistInput.schema';
import { PlaylistOnFollowerCreateNestedManyWithoutPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateWithoutTracksInput> = z
  .object({
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
    owner: z.lazy(() => UserCreateNestedOneWithoutPlaylistInputObjectSchema),
    followers: z
      .lazy(
        () =>
          PlaylistOnFollowerCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlaylistCreateWithoutTracksInputObjectSchema = Schema;
