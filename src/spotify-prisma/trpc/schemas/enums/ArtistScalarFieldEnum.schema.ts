import { z } from 'zod';

export const ArtistScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'name',
  'popularity',
  'imageUrl',
]);
