import { z } from 'zod';
import { TracksOnPlaylistCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutTrackInput.schema';
import { TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateOrConnectWithoutTrackInput.schema';
import { TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInputObjectSchema } from './TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput.schema';
import { TracksOnPlaylistCreateManyTrackInputEnvelopeObjectSchema } from './TracksOnPlaylistCreateManyTrackInputEnvelope.schema';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInputObjectSchema } from './TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput.schema';
import { TracksOnPlaylistUpdateManyWithWhereWithoutTrackInputObjectSchema } from './TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput.schema';
import { TracksOnPlaylistScalarWhereInputObjectSchema } from './TracksOnPlaylistScalarWhereInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateManyWithoutTrackNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TracksOnPlaylistCreateWithoutTrackInputObjectSchema),
          z
            .lazy(() => TracksOnPlaylistCreateWithoutTrackInputObjectSchema)
            .array(),
          z.lazy(
            () => TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistCreateOrConnectWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TracksOnPlaylistCreateManyTrackInputEnvelopeObjectSchema)
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
              TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              TracksOnPlaylistUpdateManyWithWhereWithoutTrackInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TracksOnPlaylistUpdateManyWithWhereWithoutTrackInputObjectSchema,
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

export const TracksOnPlaylistUpdateManyWithoutTrackNestedInputObjectSchema =
  Schema;
