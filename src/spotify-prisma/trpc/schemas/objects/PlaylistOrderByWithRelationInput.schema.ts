import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TracksOnPlaylistOrderByRelationAggregateInputObjectSchema } from './TracksOnPlaylistOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PlaylistOnFollowerOrderByRelationAggregateInputObjectSchema } from './PlaylistOnFollowerOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    uid: z.lazy(() => SortOrderSchema).optional(),
    collaborative: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    public: z.lazy(() => SortOrderSchema).optional(),
    snapshotId: z.lazy(() => SortOrderSchema).optional(),
    primaryColor: z.lazy(() => SortOrderSchema).optional(),
    tracksIds: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    tracks: z
      .lazy(() => TracksOnPlaylistOrderByRelationAggregateInputObjectSchema)
      .optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    followers: z
      .lazy(() => PlaylistOnFollowerOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PlaylistOrderByWithRelationInputObjectSchema = Schema;
