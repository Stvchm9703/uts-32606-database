import { z } from 'zod';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';
import { AlbumCreateOrConnectWithoutArtistsInputObjectSchema } from './AlbumCreateOrConnectWithoutArtistsInput.schema';
import { AlbumUpsertWithoutArtistsInputObjectSchema } from './AlbumUpsertWithoutArtistsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutArtistsInputObjectSchema } from './AlbumUpdateWithoutArtistsInput.schema';
import { AlbumUncheckedUpdateWithoutArtistsInputObjectSchema } from './AlbumUncheckedUpdateWithoutArtistsInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.AlbumUpdateOneRequiredWithoutArtistsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
          z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => AlbumUpsertWithoutArtistsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => AlbumWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => AlbumUpdateWithoutArtistsInputObjectSchema),
          z.lazy(() => AlbumUncheckedUpdateWithoutArtistsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const AlbumUpdateOneRequiredWithoutArtistsNestedInputObjectSchema =
  Schema;
