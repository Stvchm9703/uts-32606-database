import { z } from 'zod';
import { TagCreateWithoutArtistInGenresInputObjectSchema } from './TagCreateWithoutArtistInGenresInput.schema';
import { TagUncheckedCreateWithoutArtistInGenresInputObjectSchema } from './TagUncheckedCreateWithoutArtistInGenresInput.schema';
import { TagCreateOrConnectWithoutArtistInGenresInputObjectSchema } from './TagCreateOrConnectWithoutArtistInGenresInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutArtistInGenresInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutArtistInGenresInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutArtistInGenresInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TagCreateOrConnectWithoutArtistInGenresInputObjectSchema)
      .optional(),
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateNestedOneWithoutArtistInGenresInputObjectSchema = Schema;
