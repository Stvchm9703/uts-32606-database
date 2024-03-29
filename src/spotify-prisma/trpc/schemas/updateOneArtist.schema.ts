import { z } from 'zod';
import { ArtistUpdateInputObjectSchema } from './objects/ArtistUpdateInput.schema';
import { ArtistUncheckedUpdateInputObjectSchema } from './objects/ArtistUncheckedUpdateInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './objects/ArtistWhereUniqueInput.schema';

export const ArtistUpdateOneSchema = z.object({
  data: z.union([
    ArtistUpdateInputObjectSchema,
    ArtistUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistWhereUniqueInputObjectSchema,
});
