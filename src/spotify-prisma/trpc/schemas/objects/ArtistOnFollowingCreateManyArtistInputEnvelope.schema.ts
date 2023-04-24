import { z } from 'zod';
import { ArtistOnFollowingCreateManyArtistInputObjectSchema } from './ArtistOnFollowingCreateManyArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateManyArtistInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ArtistOnFollowingCreateManyArtistInputObjectSchema),
        z
          .lazy(() => ArtistOnFollowingCreateManyArtistInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ArtistOnFollowingCreateManyArtistInputEnvelopeObjectSchema =
  Schema;
