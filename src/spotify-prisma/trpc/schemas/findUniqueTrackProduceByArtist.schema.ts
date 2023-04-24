import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './objects/TrackProduceByArtistWhereUniqueInput.schema';

export const TrackProduceByArtistFindUniqueSchema = z.object({
  where: TrackProduceByArtistWhereUniqueInputObjectSchema,
});
