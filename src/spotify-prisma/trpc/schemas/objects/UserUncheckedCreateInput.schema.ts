import { z } from 'zod';
import { PlaylistUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './PlaylistUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInput.schema';
import { ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
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
    Playlist: z
      .lazy(
        () => PlaylistUncheckedCreateNestedManyWithoutOwnerInputObjectSchema,
      )
      .optional(),
    FollowPlaylists: z
      .lazy(
        () =>
          PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    FollowingArtists: z
      .lazy(
        () =>
          ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
