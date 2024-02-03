"use client";

import { useState } from "react";
import { type getDictionary } from "@/get-dictionary";
import { Button } from "./button";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>This component is rendered on client:</p>
      <div className="flex flex-row gap-2 items-center">
        <Button onClick={() => setCount((n) => n - 1)}>
          {dictionary.decrement}
        </Button>
        <span className="text-lg">{count}</span>
        <Button onClick={() => setCount((n) => n + 1)}>
          {dictionary.increment}
        </Button>
      </div>
    </div>
  );
}
