import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutArtistInGenresInputObjectSchema } from './TagCreateWithoutArtistInGenresInput.schema';
import { TagUncheckedCreateWithoutArtistInGenresInputObjectSchema } from './TagUncheckedCreateWithoutArtistInGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutArtistInGenresInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutArtistInGenresInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutArtistInGenresInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutArtistInGenresInputObjectSchema = Schema;
