/** @format */

import { ArrowDownToLine, CheckCircle, Leaf, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

type perksProps = {
	name: string;
	icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
	description: string;
}[];

export const perks: perksProps = [
	{
		name: "Instant Delivery",
		icon: ArrowDownToLine,
		description:
			"Get your assets delivered to your email in seconds and download them right away.",
	},

	{
		name: "Guaranteed Delivery",
		icon: CheckCircle,
		description:
			"Every assets on our platform is verified by our team to ensure our highest quality standards. Not happy? we offer a 30-day refund guarantee.",
	},

	{
		name: "For the Planets",
		icon: Leaf,
		description:
			"We've pledged 1% of sales to the preservation and restoration of the natural environment.  ",
	},
];
