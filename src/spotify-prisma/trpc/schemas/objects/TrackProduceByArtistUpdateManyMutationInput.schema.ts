import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackProduceByArtistUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TrackProduceByArtistUpdateManyMutationInputObjectSchema = Schema;
