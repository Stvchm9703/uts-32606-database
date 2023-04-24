import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uid: z.string().optional(),
  })
  .strict();

export const AlbumWhereUniqueInputObjectSchema = Schema;
