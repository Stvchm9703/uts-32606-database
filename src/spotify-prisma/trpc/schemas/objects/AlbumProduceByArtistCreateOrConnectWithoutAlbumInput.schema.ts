import { z } from 'zod';
import { AlbumProduceByArtistWhereUniqueInputObjectSchema } from './AlbumProduceByArtistWhereUniqueInput.schema';
import { AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistCreateWithoutAlbumInput.schema';
import { AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema } from './AlbumProduceByArtistUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistCreateOrConnectWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AlbumProduceByArtistCreateWithoutAlbumInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedCreateWithoutAlbumInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistCreateOrConnectWithoutAlbumInputObjectSchema =
  Schema;
