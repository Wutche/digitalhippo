/** @format */

import { z } from "zod";

export const AuthCredentialsValidators = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8, { message: "Password must be atleast 8 characters long" }),
});

export type TAuthCredentialsValidators = z.infer<typeof AuthCredentialsValidators>;
