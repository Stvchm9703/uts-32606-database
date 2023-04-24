import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateWithoutTrackProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutTrackProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutTrackProduceByArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutTrackProduceByArtistInputObjectSchema),
        z.lazy(
          () =>
            ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistCreateOrConnectWithoutTrackProduceByArtistInputObjectSchema =
  Schema;
