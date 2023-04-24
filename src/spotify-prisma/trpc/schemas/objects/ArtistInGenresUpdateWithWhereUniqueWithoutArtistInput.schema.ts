import { z } from 'zod';
import { ArtistInGenresWhereUniqueInputObjectSchema } from './ArtistInGenresWhereUniqueInput.schema';
import { ArtistInGenresUpdateWithoutArtistInputObjectSchema } from './ArtistInGenresUpdateWithoutArtistInput.schema';
import { ArtistInGenresUncheckedUpdateWithoutArtistInputObjectSchema } from './ArtistInGenresUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistInGenresUpdateWithoutArtistInputObjectSchema),
        z.lazy(
          () => ArtistInGenresUncheckedUpdateWithoutArtistInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistInGenresUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema;
