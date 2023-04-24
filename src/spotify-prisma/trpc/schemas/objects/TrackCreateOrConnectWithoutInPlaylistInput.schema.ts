import { z } from 'zod';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackCreateWithoutInPlaylistInputObjectSchema } from './TrackCreateWithoutInPlaylistInput.schema';
import { TrackUncheckedCreateWithoutInPlaylistInputObjectSchema } from './TrackUncheckedCreateWithoutInPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateOrConnectWithoutInPlaylistInput> = z
  .object({
    where: z.lazy(() => TrackWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TrackCreateWithoutInPlaylistInputObjectSchema),
      z.lazy(() => TrackUncheckedCreateWithoutInPlaylistInputObjectSchema),
    ]),
  })
  .strict();

export const TrackCreateOrConnectWithoutInPlaylistInputObjectSchema = Schema;
