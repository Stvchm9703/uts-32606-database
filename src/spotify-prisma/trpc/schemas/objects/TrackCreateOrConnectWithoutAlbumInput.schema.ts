import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackCreateWithoutAlbumInputObjectSchema } from './TrackCreateWithoutAlbumInput.schema';
import { TrackUncheckedCreateWithoutAlbumInputObjectSchema } from './TrackUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateOrConnectWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TrackWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TrackCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => TrackUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const TrackCreateOrConnectWithoutAlbumInputObjectSchema = Schema;
