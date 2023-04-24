import { z } from 'zod';
import { AlbumCreateWithoutTracksInputObjectSchema } from './AlbumCreateWithoutTracksInput.schema';
import { AlbumUncheckedCreateWithoutTracksInputObjectSchema } from './AlbumUncheckedCreateWithoutTracksInput.schema';
import { AlbumCreateOrConnectWithoutTracksInputObjectSchema } from './AlbumCreateOrConnectWithoutTracksInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumCreateNestedOneWithoutTracksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutTracksInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutTracksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => AlbumCreateOrConnectWithoutTracksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const AlbumCreateNestedOneWithoutTracksInputObjectSchema = Schema;
