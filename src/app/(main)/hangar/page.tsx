"use client";

import Hangar from "@/components/hangar/Hangar";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

type Stat = { label: string; value: number };

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2.5 w-full rounded-full bg-white/10">
      <div
        className="h-2.5 rounded-full bg-cyan-400 transition-[width]"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

export default function HangarPage() {
  const [showHangar, setShowHangar] = useState(false);

  const level = 5;
  const nextLevel = level + 1;
  const xp = 230;
  const xpMax = 600;
  const stats: Stat[] = useMemo(
    () => [
      { label: "Energy", value: 100 },
      { label: "Ammo", value: 100 },
      { label: "Shields", value: 100 },
      { label: "Difficulty", value: 100 },
      { label: "Planet", value: 100 },
      { label: "Mission", value: 100 },
      { label: "Points", value: 100 },
    ],
    []
  );

  if (showHangar) return <Hangar />;

  return (
    <div className="relative">
      <div className="relative mx-auto flex">
        <div className="w-full max-w-[315px] text-white md:mt-0">
          <div className="rounded-xl border-1 border-primary-orange bg-orange-24 text-orange-100 p-4">
            <h2 className="text-[22px] font-extrabold tracking-wider text-cyan-300">
              SHIP CONTROL
            </h2>
            <p className="mt-1 text-sm text-white/80">
              You have your ship at 100% speed.
            </p>

            {/* Weapon level */}
            <div className="mt-6">
              <p className="text-[13px] font-bold tracking-widest text-white/90">
                WEAPON LEVEL
              </p>

              <div className="flex items-center justify-between text-[11px] text-white/70">
                <span className="tabular-nums">LVL {level}</span>
                <span className="text-white/60">›</span>
                <span className="tabular-nums">LVL {nextLevel}</span>
                <span className="ml-auto tabular-nums">
                  {xp}/{xpMax} XP
                </span>
              </div>

              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-1.5 bg-orange-400"
                  style={{ width: `${(xp / xpMax) * 100}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 space-y-3">
              {stats.map((s) => (
                <div key={s.label} className="grid grid-cols-[1fr_auto] gap-x-3">
                  <div className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-[13px] font-semibold text-white/90">
                      {s.label}
                    </span>
                    <ProgressBar value={s.value} />
                  </div>
                  <span className="text-right text-[12px] tabular-nums text-white/70">
                    {s.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Play grande */}
          <Button
            variant="secondary"
            onClick={() => setShowHangar(true)}
            className="mt-6 w-full rounded-full py-6 text-base font-semibold tracking-wide shadow-[0_10px_30px_rgba(0,255,255,0.25)]"
          >
            Play
          </Button>
        </div>
      </div>
    </div>
  );
}
