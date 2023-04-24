import { z } from 'zod';
import { PlaylistOnFollowerCreateManyPlaylistInputObjectSchema } from './PlaylistOnFollowerCreateManyPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistOnFollowerCreateManyPlaylistInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PlaylistOnFollowerCreateManyPlaylistInputObjectSchema),
        z
          .lazy(() => PlaylistOnFollowerCreateManyPlaylistInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PlaylistOnFollowerCreateManyPlaylistInputEnvelopeObjectSchema =
  Schema;
