import type { ComponentProps } from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      position="bottom-center"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex items-center gap-3 border-2 border-ink bg-paper px-4 py-3 font-sans text-sm text-ink shadow-[3px_3px_0_0_#2B211B] w-full",
          title: "font-semibold",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
