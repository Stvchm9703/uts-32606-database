import { z } from 'zod';
import { TracksOnPlaylistWhereUniqueInputObjectSchema } from './TracksOnPlaylistWhereUniqueInput.schema';
import { TracksOnPlaylistUpdateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUpdateWithoutPlaylistInput.schema';
import { TracksOnPlaylistUncheckedUpdateWithoutPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksOnPlaylistUpdateWithoutPlaylistInputObjectSchema),
        z.lazy(
          () => TracksOnPlaylistUncheckedUpdateWithoutPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInputObjectSchema =
  Schema;
