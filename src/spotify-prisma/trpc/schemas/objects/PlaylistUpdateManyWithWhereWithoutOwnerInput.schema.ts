import { z } from 'zod';
import { PlaylistScalarWhereInputObjectSchema } from './PlaylistScalarWhereInput.schema';
import { PlaylistUpdateManyMutationInputObjectSchema } from './PlaylistUpdateManyMutationInput.schema';
import { PlaylistUncheckedUpdateManyWithoutPlaylistInputObjectSchema } from './PlaylistUncheckedUpdateManyWithoutPlaylistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.PlaylistUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => PlaylistScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PlaylistUpdateManyMutationInputObjectSchema),
      z.lazy(() => PlaylistUncheckedUpdateManyWithoutPlaylistInputObjectSchema),
    ]),
  })
  .strict();

export const PlaylistUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
