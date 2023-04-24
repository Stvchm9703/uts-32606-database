import { z } from 'zod';
import { ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateWithoutAlbumProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumProduceByArtistInput.schema';
import { ArtistCreateOrConnectWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateOrConnectWithoutAlbumProduceByArtistInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutAlbumProduceByArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema,
          ),
          z.lazy(
            () =>
              ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            ArtistCreateOrConnectWithoutAlbumProduceByArtistInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ArtistCreateNestedOneWithoutAlbumProduceByArtistInputObjectSchema =
  Schema;
