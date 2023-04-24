import { z } from 'zod';
import { ArtistOnFollowingCreateInputObjectSchema } from './objects/ArtistOnFollowingCreateInput.schema';
import { ArtistOnFollowingUncheckedCreateInputObjectSchema } from './objects/ArtistOnFollowingUncheckedCreateInput.schema';

export const ArtistOnFollowingCreateOneSchema = z.object({
  data: z.union([
    ArtistOnFollowingCreateInputObjectSchema,
    ArtistOnFollowingUncheckedCreateInputObjectSchema,
  ]),
});
