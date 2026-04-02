import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-stitch font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[1px] active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-stitch-primary text-white hover:bg-stitch-primary/90 shadow-stitch",
        secondary: "bg-stitch-secondary text-white hover:bg-stitch-secondary/90 shadow-stitch",
        outline: "border border-stitch-border bg-transparent hover:bg-stitch-surface text-stitch-primary",
        ghost: "hover:bg-stitch-surface text-stitch-text-muted hover:text-stitch-text",
        accent: "bg-stitch-accent text-stitch-primary hover:bg-stitch-accent/90 shadow-stitch",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-8 text-sm",
        lg: "h-14 px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
