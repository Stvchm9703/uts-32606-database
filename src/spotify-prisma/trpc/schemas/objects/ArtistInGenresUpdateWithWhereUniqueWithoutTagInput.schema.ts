import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresUpdateWithoutTagInputObjectSchema } from './ArtistInGenresUpdateWithoutTagInput.schema';
import { ArtistInGenresUncheckedUpdateWithoutTagInputObjectSchema } from './ArtistInGenresUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistInGenresUpdateWithoutTagInputObjectSchema),
        z.lazy(() => ArtistInGenresUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const ArtistInGenresUpdateWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
