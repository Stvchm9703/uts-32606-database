import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistUpdateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUpdateWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedUpdateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateWithoutArtistInput.schema';
import { AlbumProduceByArtistCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistCreateWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AlbumProduceByArtistUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AlbumProduceByArtistCreateWithoutArtistInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedCreateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
