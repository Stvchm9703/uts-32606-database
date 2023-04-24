import { z } from 'zod';
import { TracksOnPlaylistScalarWhereInputObjectSchema } from './TracksOnPlaylistScalarWhereInput.schema';
import { TracksOnPlaylistUpdateManyMutationInputObjectSchema } from './TracksOnPlaylistUpdateManyMutationInput.schema';
import { TracksOnPlaylistUncheckedUpdateManyWithoutTracksInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateManyWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksOnPlaylistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TracksOnPlaylistUncheckedUpdateManyWithoutTracksInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInputObjectSchema =
  Schema;
