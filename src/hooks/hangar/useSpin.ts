import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSpin = (leagueSlug: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: { username: string }) => {
      return await api.post(`/leagues/${leagueSlug}/draft/spin`, payload);
    },
  });
};
