import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './objects/TrackProduceByArtistWhereUniqueInput.schema';

export const TrackProduceByArtistDeleteOneSchema = z.object({
  where: TrackProduceByArtistWhereUniqueInputObjectSchema,
});
