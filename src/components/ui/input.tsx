import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-2 border-ink bg-white px-4 font-sans text-[0.95rem] text-ink placeholder:text-mute focus-visible:outline-2 focus-visible:outline-oxblood disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-oxblood",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
