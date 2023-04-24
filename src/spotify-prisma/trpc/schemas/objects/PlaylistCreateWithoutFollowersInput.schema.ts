import { z } from 'zod';
import { TracksOnPlaylistCreateNestedManyWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateNestedManyWithoutPlaylistInput.schema';
import { UserCreateNestedOneWithoutPlaylistInputObjectSchema } from './UserCreateNestedOneWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateWithoutFollowersInput> = z
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
    tracks: z
      .lazy(
        () => TracksOnPlaylistCreateNestedManyWithoutPlaylistInputObjectSchema,
      )
      .optional(),
    owner: z.lazy(() => UserCreateNestedOneWithoutPlaylistInputObjectSchema),
  })
  .strict();

export const PlaylistCreateWithoutFollowersInputObjectSchema = Schema;
