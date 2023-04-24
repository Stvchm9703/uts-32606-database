import { z } from 'zod';
import { AlbumCreateWithoutTracksInputObjectSchema } from './AlbumCreateWithoutTracksInput.schema';
import { AlbumUncheckedCreateWithoutTracksInputObjectSchema } from './AlbumUncheckedCreateWithoutTracksInput.schema';
import { AlbumCreateOrConnectWithoutTracksInputObjectSchema } from './AlbumCreateOrConnectWithoutTracksInput.schema';
import { AlbumUpsertWithoutTracksInputObjectSchema } from './AlbumUpsertWithoutTracksInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutTracksInputObjectSchema } from './AlbumUpdateWithoutTracksInput.schema';
import { AlbumUncheckedUpdateWithoutTracksInputObjectSchema } from './AlbumUncheckedUpdateWithoutTracksInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpdateOneWithoutTracksNestedInput> = z
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
    upsert: z.lazy(() => AlbumUpsertWithoutTracksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AlbumUpdateWithoutTracksInputObjectSchema),
        z.lazy(() => AlbumUncheckedUpdateWithoutTracksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateOneWithoutTracksNestedInputObjectSchema = Schema;
