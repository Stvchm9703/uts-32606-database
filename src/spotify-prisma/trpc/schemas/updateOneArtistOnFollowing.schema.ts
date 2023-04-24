import { z } from 'zod';
import { ArtistOnFollowingUpdateInputObjectSchema } from './objects/ArtistOnFollowingUpdateInput.schema';
import { ArtistOnFollowingUncheckedUpdateInputObjectSchema } from './objects/ArtistOnFollowingUncheckedUpdateInput.schema';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './objects/ArtistOnFollowingWhereUniqueInput.schema';

export const ArtistOnFollowingUpdateOneSchema = z.object({
  data: z.union([
    ArtistOnFollowingUpdateInputObjectSchema,
    ArtistOnFollowingUncheckedUpdateInputObjectSchema,
  ]),
  where: ArtistOnFollowingWhereUniqueInputObjectSchema,
});
