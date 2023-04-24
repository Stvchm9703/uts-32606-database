import { z } from 'zod';
import { ArtistUpdateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUpdateWithoutTrackProduceByArtistInput.schema';
import { ArtistUncheckedUpdateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUncheckedUpdateWithoutTrackProduceByArtistInput.schema';
import { ArtistCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistCreateWithoutTrackProduceByArtistInput.schema';
import { ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema } from './ArtistUncheckedCreateWithoutTrackProduceByArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutTrackProduceByArtistInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutTrackProduceByArtistInputObjectSchema),
      z.lazy(
        () => ArtistUncheckedUpdateWithoutTrackProduceByArtistInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutTrackProduceByArtistInputObjectSchema),
      z.lazy(
        () => ArtistUncheckedCreateWithoutTrackProduceByArtistInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutTrackProduceByArtistInputObjectSchema = Schema;
