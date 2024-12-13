"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

// This cobineds all the providers in the application into a file
export default function ParentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NEXT_PUBLIC_ENV !== "development") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }

  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
