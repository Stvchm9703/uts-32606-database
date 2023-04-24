import { z } from 'zod';
import { AlbumProduceByArtistScalarWhereInputObjectSchema } from './AlbumProduceByArtistScalarWhereInput.schema';
import { AlbumProduceByArtistUpdateManyMutationInputObjectSchema } from './AlbumProduceByArtistUpdateManyMutationInput.schema';
import { AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumProduceByArtistInputObjectSchema } from './AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => AlbumProduceByArtistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumProduceByArtistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumProduceByArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInputObjectSchema =
  Schema;
