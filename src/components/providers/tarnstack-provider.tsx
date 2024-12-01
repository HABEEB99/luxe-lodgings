"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const TarnstackProvider: React.FC<IProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
