import { createFileRoute, redirect } from "@tanstack/react-router";

// This page was merged into /fit-beyond-performance — testing and coaching
// now live on one page instead of competing top-level tabs. Kept as a
// redirect so any existing links/bookmarks/search results don't break.
export const Route = createFileRoute("/athletic-performance")({
  beforeLoad: () => {
    throw redirect({ to: "/fit-beyond-performance" });
  },
});
