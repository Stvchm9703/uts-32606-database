import { z } from 'zod';
import { ArtistInGenresScalarWhereInputObjectSchema } from './ArtistInGenresScalarWhereInput.schema';
import { ArtistInGenresUpdateManyMutationInputObjectSchema } from './ArtistInGenresUpdateManyMutationInput.schema';
import { ArtistInGenresUncheckedUpdateManyWithoutGenresInputObjectSchema } from './ArtistInGenresUncheckedUpdateManyWithoutGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateManyWithWhereWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistInGenresUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ArtistInGenresUncheckedUpdateManyWithoutGenresInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistInGenresUpdateManyWithWhereWithoutArtistInputObjectSchema =
  Schema;
