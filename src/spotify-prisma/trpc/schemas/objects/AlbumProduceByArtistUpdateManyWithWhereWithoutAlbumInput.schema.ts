import { z } from 'zod';
import { AlbumProduceByArtistScalarWhereInputObjectSchema } from './AlbumProduceByArtistScalarWhereInput.schema';
import { AlbumProduceByArtistUpdateManyMutationInputObjectSchema } from './AlbumProduceByArtistUpdateManyMutationInput.schema';
import { AlbumProduceByArtistUncheckedUpdateManyWithoutArtistsInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateManyWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumProduceByArtistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateManyWithoutArtistsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInputObjectSchema =
  Schema;
