import { z } from 'zod';
import { ArtistOnFollowingWhereUniqueInputObjectSchema } from './objects/ArtistOnFollowingWhereUniqueInput.schema';

export const ArtistOnFollowingDeleteOneSchema = z.object({
  where: ArtistOnFollowingWhereUniqueInputObjectSchema,
});
