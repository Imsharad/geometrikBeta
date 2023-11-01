import React from "react";

// All the font definitions can be found in @/styles/config/_typography.scss

export type FontFamily = "red-hat-display" | "red-hat-text";

export type FontSize =
	| "xxs"
	| "xs"
	| "sm"
	| "s"
	| "md"
	| "lg"
	| "xl"
	| "xxl"
	| "xxxl";

export type FontWeight = "regular" | "medium" | "semi-bold" | "bold";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	/** The font family to use */
	family?: FontFamily;
	/** The font size to use */
	size?: FontSize;
	/** The font weight to use */
	weight?: FontWeight;
	/** The text to display */
	children: React.ReactNode;
	/** Node to use **/
	as?: React.ElementType;
}
