import { z } from 'zod';
import { TrackCreateWithoutInPlaylistInputObjectSchema } from './TrackCreateWithoutInPlaylistInput.schema';
import { TrackUncheckedCreateWithoutInPlaylistInputObjectSchema } from './TrackUncheckedCreateWithoutInPlaylistInput.schema';
import { TrackCreateOrConnectWithoutInPlaylistInputObjectSchema } from './TrackCreateOrConnectWithoutInPlaylistInput.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackCreateNestedOneWithoutInPlaylistInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TrackCreateWithoutInPlaylistInputObjectSchema),
        z.lazy(() => TrackUncheckedCreateWithoutInPlaylistInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TrackCreateOrConnectWithoutInPlaylistInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TrackWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TrackCreateNestedOneWithoutInPlaylistInputObjectSchema = Schema;
