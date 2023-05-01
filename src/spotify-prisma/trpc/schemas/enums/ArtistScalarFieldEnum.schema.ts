import { z } from 'zod';

export const ArtistScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'popularity',
  'imageUrl',
]);
