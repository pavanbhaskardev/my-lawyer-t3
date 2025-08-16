import type { ViewProps } from "react-native";
import * as React from "react";
import { View } from "react-native";

import { cn } from "~/utils/cn";

interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ className, children, ...props }: CardProps) {
  return (
    <View
      className={cn(
        "rounded-2xl border border-border bg-card p-4 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
}

function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <View
      className={cn(
        "mb-4 flex-row items-start justify-between gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
}

function CardTitle({ className, children, ...props }: CardProps) {
  return (
    <View className={cn("flex-shrink", className)} {...props}>
      {children}
    </View>
  );
}

function CardDescription({ className, children, ...props }: CardProps) {
  return (
    <View className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </View>
  );
}

function CardContent({ className, children, ...props }: CardProps) {
  return (
    <View className={cn("", className)} {...props}>
      {children}
    </View>
  );
}

function CardFooter({ className, children, ...props }: CardProps) {
  return (
    <View
      className={cn("mt-4 flex-row items-center justify-end gap-4", className)}
      {...props}
    >
      {children}
    </View>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
