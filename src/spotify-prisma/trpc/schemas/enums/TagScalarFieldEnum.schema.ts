import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id', 'code', 'type', 'name']);
