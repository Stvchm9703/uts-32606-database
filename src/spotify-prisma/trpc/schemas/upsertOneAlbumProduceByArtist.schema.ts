import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './objects/AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistCreateInputObjectSchema } from './objects/AlbumProduceByArtistCreateInput.schema';
import { AlbumProduceByArtistUncheckedCreateInputObjectSchema } from './objects/AlbumProduceByArtistUncheckedCreateInput.schema';
import { AlbumProduceByArtistUpdateInputObjectSchema } from './objects/AlbumProduceByArtistUpdateInput.schema';
import { AlbumProduceByArtistUncheckedUpdateInputObjectSchema } from './objects/AlbumProduceByArtistUncheckedUpdateInput.schema';

export const AlbumProduceByArtistUpsertSchema = z.object({
  where: AlbumProduceByArtistWhereUniqueInputObjectSchema,
  create: z.union([
    AlbumProduceByArtistCreateInputObjectSchema,
    AlbumProduceByArtistUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    AlbumProduceByArtistUpdateInputObjectSchema,
    AlbumProduceByArtistUncheckedUpdateInputObjectSchema,
  ]),
});
