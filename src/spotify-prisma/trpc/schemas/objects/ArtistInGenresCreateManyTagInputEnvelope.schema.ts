import { z } from 'zod';
import { ArtistInGenresCreateManyTagInputObjectSchema } from './ArtistInGenresCreateManyTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresCreateManyTagInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtistInGenresCreateManyTagInputObjectSchema),
      z.lazy(() => ArtistInGenresCreateManyTagInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtistInGenresCreateManyTagInputEnvelopeObjectSchema = Schema;
