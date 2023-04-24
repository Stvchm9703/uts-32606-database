import { z } from 'zod';
import { TracksOnPlaylistScalarWhereInputObjectSchema } from './TracksOnPlaylistScalarWhereInput.schema';
import { TracksOnPlaylistUpdateManyMutationInputObjectSchema } from './TracksOnPlaylistUpdateManyMutationInput.schema';
import { TracksOnPlaylistUncheckedUpdateManyWithoutInPlaylistInputObjectSchema } from './TracksOnPlaylistUncheckedUpdateManyWithoutInPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput> =
  z
    .object({
      where: z.lazy(() => TracksOnPlaylistScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TracksOnPlaylistUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TracksOnPlaylistUncheckedUpdateManyWithoutInPlaylistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TracksOnPlaylistUpdateManyWithWhereWithoutTrackInputObjectSchema =
  Schema;
