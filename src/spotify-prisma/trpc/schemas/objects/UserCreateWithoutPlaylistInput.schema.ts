import { z } from 'zod';
import { PlaylistOnFollowerCreateNestedManyWithoutUserInputObjectSchema } from './PlaylistOnFollowerCreateNestedManyWithoutUserInput.schema';
import { ArtistOnFollowingCreateNestedManyWithoutUserInputObjectSchema } from './ArtistOnFollowingCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserCreateWithoutPlaylistInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    uid: z.string().optional().nullable(),
    name: z.string(),
    email: z.string().optional().nullable(),
    authType: z.string().optional(),
    type: z.string().optional(),
    country: z.string(),
    explicitContentFilterEnabled: z.boolean(),
    explicitContentFilterLocked: z.boolean(),
    imagesId: z.string().optional().nullable(),
    product: z.string(),
    FollowPlaylists: z
      .lazy(
        () => PlaylistOnFollowerCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    FollowingArtists: z
      .lazy(() => ArtistOnFollowingCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutPlaylistInputObjectSchema = Schema;
