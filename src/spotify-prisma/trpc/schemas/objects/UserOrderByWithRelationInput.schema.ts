import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaylistOrderByRelationAggregateInputObjectSchema } from './PlaylistOrderByRelationAggregateInput.schema';
import { PlaylistOnFollowerOrderByRelationAggregateInputObjectSchema } from './PlaylistOnFollowerOrderByRelationAggregateInput.schema';
import { ArtistOnFollowingOrderByRelationAggregateInputObjectSchema } from './ArtistOnFollowingOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    authType: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    explicitContentFilterEnabled: z.lazy(() => SortOrderSchema).optional(),
    explicitContentFilterLocked: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    product: z.lazy(() => SortOrderSchema).optional(),
    Playlist: z
      .lazy(() => PlaylistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    FollowPlaylists: z
      .lazy(() => PlaylistOnFollowerOrderByRelationAggregateInputObjectSchema)
      .optional(),
    FollowingArtists: z
      .lazy(() => ArtistOnFollowingOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
