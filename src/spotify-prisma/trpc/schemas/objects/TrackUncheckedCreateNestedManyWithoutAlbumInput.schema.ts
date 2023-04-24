import { z } from 'zod';
import { TrackCreateWithoutAlbumInputObjectSchema } from './TrackCreateWithoutAlbumInput.schema';
import { TrackUncheckedCreateWithoutAlbumInputObjectSchema } from './TrackUncheckedCreateWithoutAlbumInput.schema';
import { TrackCreateOrConnectWithoutAlbumInputObjectSchema } from './TrackCreateOrConnectWithoutAlbumInput.schema';
import { TrackCreateManyAlbumInputEnvelopeObjectSchema } from './TrackCreateManyAlbumInputEnvelope.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUncheckedCreateNestedManyWithoutAlbumInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TrackCreateWithoutAlbumInputObjectSchema),
          z.lazy(() => TrackCreateWithoutAlbumInputObjectSchema).array(),
          z.lazy(() => TrackUncheckedCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => TrackUncheckedCreateWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TrackCreateOrConnectWithoutAlbumInputObjectSchema),
          z
            .lazy(() => TrackCreateOrConnectWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TrackCreateManyAlbumInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TrackWhereUniqueInputObjectSchema),
          z.lazy(() => TrackWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema =
  Schema;
