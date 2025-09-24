import { Hero } from "@/widgets/hero";
import { Card } from "antd";
import { memo } from "react";

export const Home = memo(() => {
  return (
    <div>
      <Hero />
      <Card />
    </div>
  );
});
