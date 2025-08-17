// app/(hangar)/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PositionCard from "@/components/hangar/PositionCard";

const positions = [
  { id: 1, label: "Shooting Guard", img: "/img/positions/shooting-guard.svg" },
  { id: 2, label: "Point Guard", img: "/img/positions/point-guard.svg" },
  { id: 3, label: "Center", img: "/img/positions/center.svg" },
  { id: 4, label: "Small Forward", img: "/img/positions/small-forward.svg" },
  { id: 5, label: "Power Forward", img: "/img/positions/power-forward.svg" },
];

export default function HangarPage() {
  return (
    <>
      <Card className="h-full border-primary p-6 bg-orange-24 text-orange-100">
        <p className="text-[22px] text-secondary">Deployment base</p>
        <p className="text-card-bg">
          This is your starting point. Your role will determine the course of
          the galaxy.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {positions.map((position) => (
            <PositionCard
              key={position.id}
              srcUrl={position.img}
              alt={position.label}
              label={position.label}
            />
          ))}
        </div>
        <Card className="bg-orange-24 h-full border-primary">
          <CardContent>
            <p className="text-[22px] text-secondary">Choose your league</p>
            <p className="text-card-bg">
              Select a league that aligns and matches your strategy, style, and
              strength.
            </p>
          </CardContent>
        </Card>
      </Card>

      <div className="text-right mt-4">
        <p className="text-card-bg text-[16px] lowercase">
          Everything is at stake... the boldest will write history.
        </p>
        <Button disabled className="rounded-full mt-2 bg-orange-dark">
          Start mission
        </Button>
      </div>
    </>
  );
}
