import { z } from 'zod';
import { TrackProduceByArtistUpdateManyMutationInputObjectSchema } from './objects/TrackProduceByArtistUpdateManyMutationInput.schema';
import { TrackProduceByArtistWhereInputObjectSchema } from './objects/TrackProduceByArtistWhereInput.schema';

export const TrackProduceByArtistUpdateManySchema = z.object({
  data: TrackProduceByArtistUpdateManyMutationInputObjectSchema,
  where: TrackProduceByArtistWhereInputObjectSchema.optional(),
});
