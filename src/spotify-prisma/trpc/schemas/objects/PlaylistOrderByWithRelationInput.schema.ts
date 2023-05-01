import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TracksOnPlaylistOrderByRelationAggregateInputObjectSchema } from './TracksOnPlaylistOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    public: z.lazy(() => SortOrderSchema).optional(),
    primaryColor: z.lazy(() => SortOrderSchema).optional(),
    imagesId: z.lazy(() => SortOrderSchema).optional(),
    tracks: z
      .lazy(() => TracksOnPlaylistOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PlaylistOrderByWithRelationInputObjectSchema = Schema;
