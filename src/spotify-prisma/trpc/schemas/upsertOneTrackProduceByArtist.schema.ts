import { z } from 'zod';
import { TrackProduceByArtistWhereUniqueInputObjectSchema } from './objects/TrackProduceByArtistWhereUniqueInput.schema';
import { TrackProduceByArtistCreateInputObjectSchema } from './objects/TrackProduceByArtistCreateInput.schema';
import { TrackProduceByArtistUncheckedCreateInputObjectSchema } from './objects/TrackProduceByArtistUncheckedCreateInput.schema';
import { TrackProduceByArtistUpdateInputObjectSchema } from './objects/TrackProduceByArtistUpdateInput.schema';
import { TrackProduceByArtistUncheckedUpdateInputObjectSchema } from './objects/TrackProduceByArtistUncheckedUpdateInput.schema';

export const TrackProduceByArtistUpsertSchema = z.object({
  where: TrackProduceByArtistWhereUniqueInputObjectSchema,
  create: z.union([
    TrackProduceByArtistCreateInputObjectSchema,
    TrackProduceByArtistUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TrackProduceByArtistUpdateInputObjectSchema,
    TrackProduceByArtistUncheckedUpdateInputObjectSchema,
  ]),
});
