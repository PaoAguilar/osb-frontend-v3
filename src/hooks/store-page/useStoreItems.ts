import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";

export interface StoreItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
  // Add more properties as needed based on your API response
}

interface StoreItemsResponse {
  items: StoreItem[];
  // Add more properties as needed based on your API response
}

// Mock data for development/testing
const mockStoreItems: StoreItem[] = [
  {
    id: "1",
    name: "BLUE ORB",
    description: "50% extra power",
    price: 45,
    image: "/img/gun.svg",
    category: "weapon",
  },
  {
    id: "2",
    name: "RED SWORD",
    description: "60% critical hit chance",
    price: 75,
    image: "/img/gun.svg",
    category: "weapon",
  },
];

const fetchStoreItems = async (): Promise<StoreItemsResponse> => {
  const response = await axios.get<StoreItemsResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/items`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // This will automatically include the HTTP-only session cookie
    }
  );

  // If API returns empty items, use mock data
  if (!response.data.items || response.data.items.length === 0) {
    console.log("API returned empty items, using mock data");
    return { items: mockStoreItems };
  }

  return response.data;
};

export const useStoreItems = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  console.log({ isAuthenticated, authLoading });

  return useQuery({
    queryKey: ["storeItems"],
    queryFn: fetchStoreItems,
    enabled: isAuthenticated && !authLoading, // Only run query when authenticated
  });
};
