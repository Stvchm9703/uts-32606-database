import { z } from 'zod';

export const ArtistInGenresScalarFieldEnumSchema = z.enum([
  'artistId',
  'tagId',
]);
