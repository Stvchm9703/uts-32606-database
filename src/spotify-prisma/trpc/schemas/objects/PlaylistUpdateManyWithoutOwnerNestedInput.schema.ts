import { z } from 'zod';
import { PlaylistCreateWithoutOwnerInputObjectSchema } from './PlaylistCreateWithoutOwnerInput.schema';
import { PlaylistUncheckedCreateWithoutOwnerInputObjectSchema } from './PlaylistUncheckedCreateWithoutOwnerInput.schema';
import { PlaylistCreateOrConnectWithoutOwnerInputObjectSchema } from './PlaylistCreateOrConnectWithoutOwnerInput.schema';
import { PlaylistUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './PlaylistUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { PlaylistCreateManyOwnerInputEnvelopeObjectSchema } from './PlaylistCreateManyOwnerInputEnvelope.schema';
import { PlaylistWhereUniqueInputObjectSchema } from './PlaylistWhereUniqueInput.schema';
import { PlaylistUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './PlaylistUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { PlaylistUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './PlaylistUpdateManyWithWhereWithoutOwnerInput.schema';
import { PlaylistScalarWhereInputObjectSchema } from './PlaylistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpdateManyWithoutOwnerNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PlaylistCreateWithoutOwnerInputObjectSchema),
        z.lazy(() => PlaylistCreateWithoutOwnerInputObjectSchema).array(),
        z.lazy(() => PlaylistUncheckedCreateWithoutOwnerInputObjectSchema),
        z
          .lazy(() => PlaylistUncheckedCreateWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PlaylistCreateOrConnectWithoutOwnerInputObjectSchema),
        z
          .lazy(() => PlaylistCreateOrConnectWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PlaylistUpsertWithWhereUniqueWithoutOwnerInputObjectSchema,
        ),
        z
          .lazy(
            () => PlaylistUpsertWithWhereUniqueWithoutOwnerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PlaylistCreateManyOwnerInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema),
        z.lazy(() => PlaylistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => PlaylistUpdateWithWhereUniqueWithoutOwnerInputObjectSchema,
        ),
        z
          .lazy(
            () => PlaylistUpdateWithWhereUniqueWithoutOwnerInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PlaylistUpdateManyWithWhereWithoutOwnerInputObjectSchema),
        z
          .lazy(() => PlaylistUpdateManyWithWhereWithoutOwnerInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PlaylistScalarWhereInputObjectSchema),
        z.lazy(() => PlaylistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PlaylistUpdateManyWithoutOwnerNestedInputObjectSchema = Schema;
