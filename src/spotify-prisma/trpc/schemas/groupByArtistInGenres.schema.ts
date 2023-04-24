import { z } from 'zod';
import { ArtistInGenresWhereInputObjectSchema } from './objects/ArtistInGenresWhereInput.schema';
import { ArtistInGenresOrderByWithAggregationInputObjectSchema } from './objects/ArtistInGenresOrderByWithAggregationInput.schema';
import { ArtistInGenresScalarWhereWithAggregatesInputObjectSchema } from './objects/ArtistInGenresScalarWhereWithAggregatesInput.schema';
import { ArtistInGenresScalarFieldEnumSchema } from './enums/ArtistInGenresScalarFieldEnum.schema';

export const ArtistInGenresGroupBySchema = z.object({
  where: ArtistInGenresWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ArtistInGenresOrderByWithAggregationInputObjectSchema,
      ArtistInGenresOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ArtistInGenresScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ArtistInGenresScalarFieldEnumSchema),
});
