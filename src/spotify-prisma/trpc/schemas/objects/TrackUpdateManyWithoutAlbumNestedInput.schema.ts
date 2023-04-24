import { z } from 'zod';
import { TrackCreateWithoutAlbumInputObjectSchema } from './TrackCreateWithoutAlbumInput.schema';
import { TrackUncheckedCreateWithoutAlbumInputObjectSchema } from './TrackUncheckedCreateWithoutAlbumInput.schema';
import { TrackCreateOrConnectWithoutAlbumInputObjectSchema } from './TrackCreateOrConnectWithoutAlbumInput.schema';
import { TrackUpsertWithWhereUniqueWithoutAlbumInputObjectSchema } from './TrackUpsertWithWhereUniqueWithoutAlbumInput.schema';
import { TrackCreateManyAlbumInputEnvelopeObjectSchema } from './TrackCreateManyAlbumInputEnvelope.schema';
import { TrackWhereUniqueInputObjectSchema } from './TrackWhereUniqueInput.schema';
import { TrackUpdateWithWhereUniqueWithoutAlbumInputObjectSchema } from './TrackUpdateWithWhereUniqueWithoutAlbumInput.schema';
import { TrackUpdateManyWithWhereWithoutAlbumInputObjectSchema } from './TrackUpdateManyWithWhereWithoutAlbumInput.schema';
import { TrackScalarWhereInputObjectSchema } from './TrackScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TrackUpdateManyWithoutAlbumNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TrackCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => TrackCreateWithoutAlbumInputObjectSchema).array(),
        z.lazy(() => TrackUncheckedCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => TrackUncheckedCreateWithoutAlbumInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TrackCreateOrConnectWithoutAlbumInputObjectSchema),
        z.lazy(() => TrackCreateOrConnectWithoutAlbumInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TrackUpsertWithWhereUniqueWithoutAlbumInputObjectSchema),
        z
          .lazy(() => TrackUpsertWithWhereUniqueWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TrackCreateManyAlbumInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TrackWhereUniqueInputObjectSchema),
        z.lazy(() => TrackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TrackWhereUniqueInputObjectSchema),
        z.lazy(() => TrackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TrackWhereUniqueInputObjectSchema),
        z.lazy(() => TrackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TrackWhereUniqueInputObjectSchema),
        z.lazy(() => TrackWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TrackUpdateWithWhereUniqueWithoutAlbumInputObjectSchema),
        z
          .lazy(() => TrackUpdateWithWhereUniqueWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TrackUpdateManyWithWhereWithoutAlbumInputObjectSchema),
        z
          .lazy(() => TrackUpdateManyWithWhereWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TrackScalarWhereInputObjectSchema),
        z.lazy(() => TrackScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TrackUpdateManyWithoutAlbumNestedInputObjectSchema = Schema;
