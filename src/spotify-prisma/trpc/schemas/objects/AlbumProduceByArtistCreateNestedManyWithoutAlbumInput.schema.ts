import { z } from 'zod';
import { AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateOrConnectWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateManyAlbumInputEnvelopeObjectSchema } from './AlbumProduceByArtistCreateManyAlbumInputEnvelope.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateNestedManyWithoutAlbumInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AlbumProduceByArtistCreateManyAlbumInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
          z
            .lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumProduceByArtistCreateNestedManyWithoutAlbumInputObjectSchema =
  Schema;
