import { z } from 'zod';
import { ArtistInGenresScalarWhereInputObjectSchema } from './ArtistInGenresScalarWhereInput.schema';
import { ArtistInGenresUpdateManyMutationInputObjectSchema } from './ArtistInGenresUpdateManyMutationInput.schema';
import { ArtistInGenresUncheckedUpdateManyWithoutArtistInGenresInputObjectSchema } from './ArtistInGenresUncheckedUpdateManyWithoutArtistInGenresInput.schema';

import type { Prisma } from '../../../prisma-client-js';

const Schema: z.ZodType<Prisma.ArtistInGenresUpdateManyWithWhereWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => ArtistInGenresScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArtistInGenresUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ArtistInGenresUncheckedUpdateManyWithoutArtistInGenresInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArtistInGenresUpdateManyWithWhereWithoutTagInputObjectSchema =
  Schema;
