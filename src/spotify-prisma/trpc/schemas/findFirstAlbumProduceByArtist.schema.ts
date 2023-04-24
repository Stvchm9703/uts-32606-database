import { z } from 'zod';
import { AlbumProduceByArtistOrderByWithRelationInputObjectSchema } from './objects/AlbumProduceByArtistOrderByWithRelationInput.schema';
import { AlbumProduceByArtistWhereInputObjectSchema } from './objects/AlbumProduceByArtistWhereInput.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './objects/AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistScalarFieldEnumSchema } from './enums/AlbumProduceByArtistScalarFieldEnum.schema';

export const AlbumProduceByArtistFindFirstSchema = z.object({
  orderBy: z
    .union([
      AlbumProduceByArtistOrderByWithRelationInputObjectSchema,
      AlbumProduceByArtistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumProduceByArtistWhereInputObjectSchema.optional(),
  cursor: AlbumProduceByArtistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AlbumProduceByArtistScalarFieldEnumSchema).optional(),
});
