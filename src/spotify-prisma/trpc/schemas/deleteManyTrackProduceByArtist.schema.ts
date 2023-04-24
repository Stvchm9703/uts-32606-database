import { z } from 'zod';
import { TrackProduceByArtistWhereInputObjectSchema } from './objects/TrackProduceByArtistWhereInput.schema';

export const TrackProduceByArtistDeleteManySchema = z.object({
  where: TrackProduceByArtistWhereInputObjectSchema.optional(),
});
