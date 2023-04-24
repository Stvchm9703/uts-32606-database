import { z } from 'zod';
import { TracksOnPlaylistCreateManyTrackInputObjectSchema } from './TracksOnPlaylistCreateManyTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateManyTrackInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TracksOnPlaylistCreateManyTrackInputObjectSchema),
      z.lazy(() => TracksOnPlaylistCreateManyTrackInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TracksOnPlaylistCreateManyTrackInputEnvelopeObjectSchema = Schema;
