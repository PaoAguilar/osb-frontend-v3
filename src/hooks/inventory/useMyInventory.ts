import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";

interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  type: string;
  rarity?: string;
  level?: number;
  image?: string;
  equipped?: boolean;
  // Add more properties as needed based on your API response
}

interface InventoryResponse {
  items: InventoryItem[];
  // Add more properties as needed based on your API response
}

// Mock data for development/testing
const mockInventoryItems: InventoryItem[] = [
  {
    id: "1",
    name: "BLUE ORB",
    description: "50% extra power",
    type: "weapon",
    rarity: "rare",
    level: 5,
    image: "/img/gun.svg",
    equipped: true,
  },
  {
    id: "2",
    name: "BLUE SHIELD",
    description: "40% damage resistance",
    type: "shield",
    rarity: "common",
    level: 3,
    image: "/img/gun.svg",
    equipped: false,
  },
];

const fetchMyInventory = async (): Promise<InventoryResponse> => {
  const response = await axios.get<InventoryResponse>(
    `${process.env.NEXT_PUBLIC_API_URL}/inventory`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // This will automatically include the HTTP-only session cookie
    }
  );

  // If API returns empty items, use mock data
  if (!response.data.items || response.data.items.length === 0) {
    console.log("API returned empty inventory, using mock data");
    return { items: mockInventoryItems };
  }

  return response.data;
};

export const useMyInventory = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  console.log({ isAuthenticated, authLoading });

  return useQuery({
    queryKey: ["myInventory"],
    queryFn: fetchMyInventory,
    enabled: isAuthenticated && !authLoading, // Only run query when authenticated
  });
};
