import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema),
        z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema),
        z.lazy(() => PlaylistOnFollowerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    playlistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const PlaylistOnFollowerScalarWhereInputObjectSchema = Schema;
