import { z } from 'zod';
import { ArtistUpdateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUpdateWithoutAlbumProduceByArtistInput.schema';
import { ArtistUncheckedUpdateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput.schema';
import { ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistCreateWithoutAlbumProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutAlbumProduceByArtistInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutAlbumProduceByArtistInputObjectSchema),
      z.lazy(
        () => ArtistUncheckedUpdateWithoutAlbumProduceByArtistInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutAlbumProduceByArtistInputObjectSchema),
      z.lazy(
        () => ArtistUncheckedCreateWithoutAlbumProduceByArtistInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutAlbumProduceByArtistInputObjectSchema = Schema;
