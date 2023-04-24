import { z } from 'zod';
import { TrackCreateNestedOneWithoutInPlaylistInputObjectSchema } from './TrackCreateNestedOneWithoutInPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistCreateWithoutPlaylistInput> = z
  .object({
    Track: z.lazy(() => TrackCreateNestedOneWithoutInPlaylistInputObjectSchema),
  })
  .strict();

export const TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema = Schema;
