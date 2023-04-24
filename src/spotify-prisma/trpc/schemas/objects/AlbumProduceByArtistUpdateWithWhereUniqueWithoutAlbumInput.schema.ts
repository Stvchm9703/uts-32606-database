import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistUpdateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUpdateWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedUpdateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumProduceByArtistUpdateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateWithoutAlbumInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInputObjectSchema =
  Schema;
