import { z } from 'zod';
import { TrackProduceByArtistOrderByWithRelationInputObjectSchema } from './objects/TrackProduceByArtistOrderByWithRelationInput.schema';
import { TrackProduceByArtistWhereInputObjectSchema } from './objects/TrackProduceByArtistWhereInput.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './objects/TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistScalarFieldEnumSchema } from './enums/TrackProduceByArtistScalarFieldEnum.schema';

export const TrackProduceByArtistFindFirstSchema = z.object({
  orderBy: z
    .union([
      TrackProduceByArtistOrderByWithRelationInputObjectSchema,
      TrackProduceByArtistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TrackProduceByArtistWhereInputObjectSchema.optional(),
  cursor: TrackProduceByArtistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TrackProduceByArtistScalarFieldEnumSchema).optional(),
});
