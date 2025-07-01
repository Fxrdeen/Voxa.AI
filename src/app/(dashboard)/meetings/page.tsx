import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { auth } from "@/lib/auth";
import { ListHeader } from "@/modules/meetings/ui/components/list-header";
import { MeetingsView } from "@/modules/meetings/ui/views/meeting-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { loadSearchParams } from "@/modules/meetings/params";
import type { SearchParams } from "nuqs/server";

interface Props {
  searchParams: Promise<SearchParams>;
}

const MeetingsPage = async ({ searchParams }: Props) => {
  const filters = await loadSearchParams(searchParams);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters,
    })
  );
  return (
    <>
      <ListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense
          fallback={
            <LoadingState
              title="Loading Meetings"
              description="This may take a few seconds..."
            />
          }
        >
          <ErrorBoundary
            fallback={
              <ErrorState
                title="Failed to load meetings."
                description="Some error occured. Please try again."
              />
            }
          >
            <MeetingsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default MeetingsPage;
