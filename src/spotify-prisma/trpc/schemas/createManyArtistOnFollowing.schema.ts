import { z } from 'zod';
import { ArtistOnFollowingCreateManyInputObjectSchema } from './objects/ArtistOnFollowingCreateManyInput.schema';

export const ArtistOnFollowingCreateManySchema = z.object({
  data: z.union([
    ArtistOnFollowingCreateManyInputObjectSchema,
    z.array(ArtistOnFollowingCreateManyInputObjectSchema),
  ]),
});
