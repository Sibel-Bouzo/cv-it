import * as React from "react";

import { cn } from "@/lib/utils";

// eslint-disable-next-line react/prop-types
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full mb-3 bg-[#ebebeb49] border-none py-6 px-5 text-sm rounded",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
