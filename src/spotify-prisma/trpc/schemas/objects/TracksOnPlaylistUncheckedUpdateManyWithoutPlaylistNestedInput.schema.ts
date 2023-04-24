import { z } from 'zod';
import { TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateWithoutPlaylistInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutPlaylistInput.schema';
import { TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistCreateOrConnectWithoutPlaylistInput.schema';
import { TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput.schema';
import { TracksOnPlaylistCreateManyPlaylistInputEnvelopeObjectSchema } from './TracksOnPlaylistCreateManyPlaylistInputEnvelope.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput.schema';
import { TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput.schema';
import { TracksOnPlaylistScalarWhereInputObjectSchema } from './TracksOnPlaylistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema),
          z
            .lazy(() => TracksOnPlaylistCreateWithoutPlaylistInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUncheckedCreateWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistCreateOrConnectWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TracksOnPlaylistCreateManyPlaylistInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
          z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema),
          z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInputObjectSchema =
  Schema;
