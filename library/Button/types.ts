import React from "react";

export interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode;
	className?: string;
	size?: "small" | "medium" | "large";
	theme?: "filled" | "outlined";
	loading?: boolean;
	icon?: React.ReactNode;
	iconPosition?: "left" | "right";
}
