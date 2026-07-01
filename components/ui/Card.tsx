import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-stone-200 bg-white p-7 shadow-soft transition-shadow duration-200 hover:shadow-soft-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
