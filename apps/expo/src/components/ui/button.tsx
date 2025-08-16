import type { VariantProps } from "class-variance-authority";
import type {
  PressableStateCallbackType,
  PressableProps as RNPressableProps,
  ViewStyle,
} from "react-native";
import * as React from "react";
import { Pressable, View } from "react-native";
import { cva } from "class-variance-authority";

import { cn } from "~/utils/cn";

export const buttonVariants = cva(
  "flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow dark:bg-primary dark:text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm dark:bg-destructive dark:text-destructive-foreground",
        outline: "border border-primary bg-primary/5 text-primary",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm dark:bg-secondary dark:text-secondary-foreground",
        ghost: "text-foreground dark:text-foreground",
        link: "text-primary underline dark:text-primary",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4",
        lg: "h-14 px-8",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<RNPressableProps, "style">,
    VariantProps<typeof buttonVariants> {
  className?: string;
  style?: ViewStyle;
  asChild?: boolean;
}

const Button = React.forwardRef<View, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <Pressable
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {(state: PressableStateCallbackType) => (
          <View
            className={`flex-row items-center justify-center gap-2 ${
              state.pressed ? "opacity-80" : ""
            }`}
          >
            {typeof children === "function" ? children(state) : children}
          </View>
        )}
      </Pressable>
    );
  },
);

Button.displayName = "Button";

export { Button };
