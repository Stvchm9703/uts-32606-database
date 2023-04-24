import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistUpdateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUpdateWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedUpdateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateWithoutAlbumInput.schema';
import { AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AlbumProduceByArtistUpdateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateWithoutAlbumInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInputObjectSchema =
  Schema;
