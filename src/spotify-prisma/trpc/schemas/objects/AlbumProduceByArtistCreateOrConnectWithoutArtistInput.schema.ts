import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateOrConnectWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AlbumProduceByArtistCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistCreateOrConnectWithoutArtistInputObjectSchema =
  Schema;
