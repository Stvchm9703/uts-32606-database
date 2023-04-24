import { z } from 'zod';
import { TrackScalarWhereInputObjectSchema } from './TrackScalarWhereInput.schema';
import { TrackUpdateManyMutationInputObjectSchema } from './TrackUpdateManyMutationInput.schema';
import { TrackUncheckedUpdateManyWithoutTracksInputObjectSchema } from './TrackUncheckedUpdateManyWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateManyWithWhereWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TrackScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TrackUpdateManyMutationInputObjectSchema),
      z.lazy(() => TrackUncheckedUpdateManyWithoutTracksInputObjectSchema),
    ]),
  })
  .strict();

export const TrackUpdateManyWithWhereWithoutAlbumInputObjectSchema = Schema;
