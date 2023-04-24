import { z } from 'zod';
import { ArtistCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateWithoutTrackProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutTrackProduceByArtistInput.schema';
import { ArtistCreateOrConnectWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateOrConnectWithoutTrackProduceByArtistInput.schema';
import { ArtistUpsertWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUpsertWithoutTrackProduceByArtistInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUpdateWithoutTrackProduceByArtistInput.schema';
import { ArtistUncheckedUpdateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUncheckedUpdateWithoutTrackProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ArtistCreateWithoutTrackProduceByArtistInputObjectSchema,
          ),
          z.lazy(
            () =>
              ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ArtistCreateOrConnectWithoutTrackProduceByArtistInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ArtistUpsertWithoutTrackProduceByArtistInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ArtistUpdateWithoutTrackProduceByArtistInputObjectSchema,
          ),
          z.lazy(
            () =>
              ArtistUncheckedUpdateWithoutTrackProduceByArtistInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInputObjectSchema =
  Schema;
