import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerUpdateManyMutationInput> = z
  .object({})
  .strict();

export const PlaylistOnFollowerUpdateManyMutationInputObjectSchema = Schema;
