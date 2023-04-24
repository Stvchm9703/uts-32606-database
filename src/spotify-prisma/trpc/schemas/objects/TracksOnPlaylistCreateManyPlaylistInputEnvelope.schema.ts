import { z } from 'zod';
import { TracksOnPlaylistCreateManyPlaylistInputObjectSchema } from './TracksOnPlaylistCreateManyPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateManyPlaylistInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => TracksOnPlaylistCreateManyPlaylistInputObjectSchema),
        z
          .lazy(() => TracksOnPlaylistCreateManyPlaylistInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const TracksOnPlaylistCreateManyPlaylistInputEnvelopeObjectSchema =
  Schema;
