import { z } from 'zod';
import { ArtistInGenresOrderByWithRelationInputObjectSchema } from './objects/ArtistInGenresOrderByWithRelationInput.schema';
import { ArtistInGenresWhereInputObjectSchema } from './objects/ArtistInGenresWhereInput.schema';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './objects/ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresCountAggregateInputObjectSchema } from './objects/ArtistInGenresCountAggregateInput.schema';
import { ArtistInGenresMinAggregateInputObjectSchema } from './objects/ArtistInGenresMinAggregateInput.schema';
import { ArtistInGenresMaxAggregateInputObjectSchema } from './objects/ArtistInGenresMaxAggregateInput.schema';
import { ArtistInGenresAvgAggregateInputObjectSchema } from './objects/ArtistInGenresAvgAggregateInput.schema';
import { ArtistInGenresSumAggregateInputObjectSchema } from './objects/ArtistInGenresSumAggregateInput.schema';

export const ArtistInGenresAggregateSchema = z.object({
  orderBy: z
    .union([
      ArtistInGenresOrderByWithRelationInputObjectSchema,
      ArtistInGenresOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ArtistInGenresWhereInputObjectSchema.optional(),
  cursor: ArtistInGenresWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ArtistInGenresCountAggregateInputObjectSchema])
    .optional(),
  _min: ArtistInGenresMinAggregateInputObjectSchema.optional(),
  _max: ArtistInGenresMaxAggregateInputObjectSchema.optional(),
  _avg: ArtistInGenresAvgAggregateInputObjectSchema.optional(),
  _sum: ArtistInGenresSumAggregateInputObjectSchema.optional(),
});
