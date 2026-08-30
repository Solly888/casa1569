import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-atlantic-ink text-casa-ivory" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">{children}</div>
    </section>
  );
}
