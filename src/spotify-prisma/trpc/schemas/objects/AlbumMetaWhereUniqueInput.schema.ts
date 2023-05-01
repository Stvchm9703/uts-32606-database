import { z } from 'zod';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumMetaWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
  })
  .strict();

export const AlbumMetaWhereUniqueInputObjectSchema = Schema;
