import { z } from 'zod';
import { TagCreateWithoutArtistInGenresInputObjectSchema } from './TagCreateWithoutArtistInGenresInput.schema';
import { TagUncheckedCreateWithoutArtistInGenresInputObjectSchema } from './TagUncheckedCreateWithoutArtistInGenresInput.schema';
import { TagCreateOrConnectWithoutArtistInGenresInputObjectSchema } from './TagCreateOrConnectWithoutArtistInGenresInput.schema';
import { TagUpsertWithoutArtistInGenresInputObjectSchema } from './TagUpsertWithoutArtistInGenresInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutArtistInGenresInputObjectSchema } from './TagUpdateWithoutArtistInGenresInput.schema';
import { TagUncheckedUpdateWithoutArtistInGenresInputObjectSchema } from './TagUncheckedUpdateWithoutArtistInGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutArtistInGenresNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutArtistInGenresInputObjectSchema),
          z.lazy(
            () => TagUncheckedCreateWithoutArtistInGenresInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TagCreateOrConnectWithoutArtistInGenresInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => TagUpsertWithoutArtistInGenresInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TagUpdateWithoutArtistInGenresInputObjectSchema),
          z.lazy(
            () => TagUncheckedUpdateWithoutArtistInGenresInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TagUpdateOneRequiredWithoutArtistInGenresNestedInputObjectSchema =
  Schema;
