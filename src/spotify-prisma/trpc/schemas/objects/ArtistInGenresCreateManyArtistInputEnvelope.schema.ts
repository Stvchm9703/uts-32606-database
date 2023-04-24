import { z } from 'zod';
import { ArtistInGenresCreateManyArtistInputObjectSchema } from './ArtistInGenresCreateManyArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateManyArtistInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtistInGenresCreateManyArtistInputObjectSchema),
      z.lazy(() => ArtistInGenresCreateManyArtistInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtistInGenresCreateManyArtistInputEnvelopeObjectSchema = Schema;
