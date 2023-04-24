import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackUpdateWithoutAlbumInputObjectSchema } from './TrackUpdateWithoutAlbumInput.schema';
import { TrackUncheckedUpdateWithoutAlbumInputObjectSchema } from './TrackUncheckedUpdateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateWithWhereUniqueWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TrackWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TrackUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => TrackUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const TrackUpdateWithWhereUniqueWithoutAlbumInputObjectSchema = Schema;
