import { z } from 'zod';

export const TrackScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'discNumber',
  'popularity',
  'previewUrl',
  'trackNumber',
  'albumId',
]);
