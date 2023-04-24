import { z } from 'zod';
import { ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateWithoutAlbumProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumProduceByArtistInput.schema';
import { ArtistCreateOrConnectWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateOrConnectWithoutAlbumProduceByArtistInput.schema';
import { ArtistUpsertWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUpsertWithoutAlbumProduceByArtistInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUpdateWithoutAlbumProduceByArtistInput.schema';
import { ArtistUncheckedUpdateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema,
          ),
          z.lazy(
            () =>
              ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ArtistCreateOrConnectWithoutAlbumProduceByArtistInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ArtistUpsertWithoutAlbumProduceByArtistInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ArtistUpdateWithoutAlbumProduceByArtistInputObjectSchema,
          ),
          z.lazy(
            () =>
              ArtistUncheckedUpdateWithoutAlbumProduceByArtistInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInputObjectSchema =
  Schema;
