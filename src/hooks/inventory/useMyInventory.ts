import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/axios";

export const useMyInventory = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  return useQuery({
    queryKey: ["inventory-items"],
    queryFn: async () => {
      const { data } = await api.get("/inventory");
      return data;
    },
    enabled: isAuthenticated && !authLoading, // Only run query when authenticated
  });
};
