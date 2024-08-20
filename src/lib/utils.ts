/** @format */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type OptionsProps = {
	currency?: "USD" | "EUR" | "GBP" | "BDT";
	notation?: Intl.NumberFormatOptions["notation"];
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(
	price: number | string,
	options: OptionsProps = {},
) {
	const { currency = "USD", notation = "compact" } = options;
	const numericPrice = typeof price === "string" ? parseFloat(price) : price;

	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice);
}
