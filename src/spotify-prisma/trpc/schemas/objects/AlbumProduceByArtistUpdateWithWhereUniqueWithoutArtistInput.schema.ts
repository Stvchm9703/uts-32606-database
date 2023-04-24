import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistUpdateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUpdateWithoutArtistInput.schema';
import { AlbumProduceByArtistUncheckedUpdateWithoutArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumProduceByArtistUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
