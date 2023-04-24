import { z } from 'zod';
import { ArtistCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateWithoutTrackProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutTrackProduceByArtistInput.schema';
import { ArtistCreateOrConnectWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateOrConnectWithoutTrackProduceByArtistInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutTrackProduceByArtistInput> =
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
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ArtistCreateNestedOneWithoutTrackProduceByArtistInputObjectSchema =
  Schema;
