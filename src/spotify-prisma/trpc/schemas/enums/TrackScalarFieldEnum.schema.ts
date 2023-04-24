import { z } from 'zod';

export const TrackScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'name',
  'discNumber',
  'durationMs',
  'explicit',
  'popularity',
  'previewUrl',
  'trackNumber',
  'isLocal',
  'albumId',
]);
