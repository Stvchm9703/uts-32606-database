import { z } from 'zod';
import { ArtistOnFollowingCreateManyUserInputObjectSchema } from './ArtistOnFollowingCreateManyUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ArtistOnFollowingCreateManyUserInputObjectSchema),
      z.lazy(() => ArtistOnFollowingCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtistOnFollowingCreateManyUserInputEnvelopeObjectSchema = Schema;
