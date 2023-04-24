import { z } from 'zod';
import { PlaylistCreateManyOwnerInputObjectSchema } from './PlaylistCreateManyOwnerInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistCreateManyOwnerInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PlaylistCreateManyOwnerInputObjectSchema),
      z.lazy(() => PlaylistCreateManyOwnerInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PlaylistCreateManyOwnerInputEnvelopeObjectSchema = Schema;
