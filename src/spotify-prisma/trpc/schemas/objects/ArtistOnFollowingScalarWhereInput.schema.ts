import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistOnFollowingScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema),
        z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema),
        z.lazy(() => ArtistOnFollowingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    artistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const ArtistOnFollowingScalarWhereInputObjectSchema = Schema;
