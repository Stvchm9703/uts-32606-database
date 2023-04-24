import { z } from 'zod';
import { PlaylistOnFollowerCreateManyUserInputObjectSchema } from './PlaylistOnFollowerCreateManyUserInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PlaylistOnFollowerCreateManyUserInputObjectSchema),
        z.lazy(() => PlaylistOnFollowerCreateManyUserInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PlaylistOnFollowerCreateManyUserInputEnvelopeObjectSchema = Schema;
