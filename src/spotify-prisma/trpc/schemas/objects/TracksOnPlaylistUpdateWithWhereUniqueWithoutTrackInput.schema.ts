import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistUpdateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUpdateWithoutTrackInput.schema';
import { TracksOnPlaylistUncheckedUpdateWithoutTrackInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateWithoutTrackInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksOnPlaylistUpdateWithoutTrackInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedUpdateWithoutTrackInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInputObjectSchema =
  Schema;
