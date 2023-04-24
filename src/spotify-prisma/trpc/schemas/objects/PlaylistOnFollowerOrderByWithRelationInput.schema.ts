import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlaylistOrderByWithRelationInputObjectSchema } from './PlaylistOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerOrderByWithRelationInput> = z
  .object({
    playlistId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    Playlist: z
      .lazy(() => PlaylistOrderByWithRelationInputObjectSchema)
      .optional(),
    User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const PlaylistOnFollowerOrderByWithRelationInputObjectSchema = Schema;
