import { z } from 'zod';
import { AlbumProduceByArtistCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateOrConnectWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateManyArtistInputEnvelopeObjectSchema } from './AlbumProduceByArtistCreateManyArtistInputEnvelope.schema';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => AlbumProduceByArtistCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () => AlbumProduceByArtistCreateWithoutArtistInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => AlbumProduceByArtistCreateManyArtistInputEnvelopeObjectSchema,
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

export const AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
