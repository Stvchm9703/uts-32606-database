import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingUpdateManyMutationInput> = z
  .object({})
  .strict();

export const ArtistOnFollowingUpdateManyMutationInputObjectSchema = Schema;
