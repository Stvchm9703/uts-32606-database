import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateManyMutationInput> = z
  .object({})
  .strict();

export const ArtistInGenresUpdateManyMutationInputObjectSchema = Schema;
