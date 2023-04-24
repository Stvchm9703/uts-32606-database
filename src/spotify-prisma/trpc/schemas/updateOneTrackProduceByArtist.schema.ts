import { z } from 'zod';
import { TrackProduceByArtistUpdateInputObjectSchema } from './objects/TrackProduceByArtistUpdateInput.schema';
import { TrackProduceByArtistUncheckedUpdateInputObjectSchema } from './objects/TrackProduceByArtistUncheckedUpdateInput.schema';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './objects/TrackProduceByArtistWhereUniqueInput.schema';

export const TrackProduceByArtistUpdateOneSchema = z.object({
  data: z.union([
    TrackProduceByArtistUpdateInputObjectSchema,
    TrackProduceByArtistUncheckedUpdateInputObjectSchema,
  ]),
  where: TrackProduceByArtistWhereUniqueInputObjectSchema,
});
