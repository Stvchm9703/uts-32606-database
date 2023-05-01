import { z } from 'zod';

export const TrackMetaScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'uid',
  'durationMs',
]);
