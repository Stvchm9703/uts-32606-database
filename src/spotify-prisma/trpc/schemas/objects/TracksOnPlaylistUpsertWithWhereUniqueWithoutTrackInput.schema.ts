import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistUpdateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUpdateWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedUpdateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateWithoutTrackInput.schema';
import { TracksOnPlaylistCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistCreateWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedCreateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TracksOnPlaylistUpdateWithoutTrackInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedUpdateWithoutTrackInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => TracksOnPlaylistCreateWithoutTrackInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedCreateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInputObjectSchema =
  Schema;
