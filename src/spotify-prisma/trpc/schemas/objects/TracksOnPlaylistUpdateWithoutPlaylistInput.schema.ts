import { z } from 'zod';
import { TrackUpdateOneRequiredWithoutInPlaylistNestedInputObjectSchema } from './TrackUpdateOneRequiredWithoutInPlaylistNestedInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateWithoutPlaylistInput> = z
  .object({
    Track: z
      .lazy(
        () => TrackUpdateOneRequiredWithoutInPlaylistNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TracksOnPlaylistUpdateWithoutPlaylistInputObjectSchema = Schema;
