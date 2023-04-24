import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackUpdateWithoutAlbumInputObjectSchema } from './TrackUpdateWithoutAlbumInput.schema';
import { TrackUncheckedUpdateWithoutAlbumInputObjectSchema } from './TrackUncheckedUpdateWithoutAlbumInput.schema';
import { TrackCreateWithoutAlbumInputObjectSchema } from './TrackCreateWithoutAlbumInput.schema';
import { TrackUncheckedCreateWithoutAlbumInputObjectSchema } from './TrackUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpsertWithWhereUniqueWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TrackWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TrackUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => TrackUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TrackCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => TrackUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const TrackUpsertWithWhereUniqueWithoutAlbumInputObjectSchema = Schema;
