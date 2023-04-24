import { z } from 'zod';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateWithoutAlbumProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutAlbumProduceByArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema),
        z.lazy(
          () =>
            ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistCreateOrConnectWithoutAlbumProduceByArtistInputObjectSchema =
  Schema;
