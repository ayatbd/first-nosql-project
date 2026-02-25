import { z } from 'zod';

export const UserValidationSchema = z.object({
    password: z.string().min(6, 'Password must be at least 6 characters').max(100, 'Password must be between 6 and 100 characters').optional(),
});

export const UserValidation = {
    UserValidationSchema
};