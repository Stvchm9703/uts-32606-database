import { z } from 'zod';

export const ArtistDataMetaScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
]);
