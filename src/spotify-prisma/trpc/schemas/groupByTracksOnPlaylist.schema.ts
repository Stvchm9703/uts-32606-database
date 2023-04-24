import { z } from 'zod';
import { TracksOnPlaylistWhereInputObjectSchema } from './objects/TracksOnPlaylistWhereInput.schema';
import { TracksOnPlaylistOrderByWithAggregationInputObjectSchema } from './objects/TracksOnPlaylistOrderByWithAggregationInput.schema';
import { TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema } from './objects/TracksOnPlaylistScalarWhereWithAggregatesInput.schema';
import { TracksOnPlaylistScalarFieldEnumSchema } from './enums/TracksOnPlaylistScalarFieldEnum.schema';

export const TracksOnPlaylistGroupBySchema = z.object({
  where: TracksOnPlaylistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TracksOnPlaylistOrderByWithAggregationInputObjectSchema,
      TracksOnPlaylistOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TracksOnPlaylistScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TracksOnPlaylistScalarFieldEnumSchema),
});
