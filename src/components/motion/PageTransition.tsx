import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Re-keys its subtree on route change so the page fades and rises in,
 * giving the site a continuous editorial feel between navigations.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
}
