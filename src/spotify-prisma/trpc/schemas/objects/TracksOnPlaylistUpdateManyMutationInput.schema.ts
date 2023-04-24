import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TracksOnPlaylistUpdateManyMutationInputObjectSchema = Schema;
