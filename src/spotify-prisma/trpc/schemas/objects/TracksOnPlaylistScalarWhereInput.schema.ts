import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema),
        z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema),
        z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    playlistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    trackId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const TracksOnPlaylistScalarWhereInputObjectSchema = Schema;
