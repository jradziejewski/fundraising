import type { MetaFunction } from "@remix-run/node";
import { MainCard } from "../components/MainCard";
import { ProgressCard } from "~/components/ProgressCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="content-grid">
      <div className="breakout text-center">
        <h1 className="font-semibold text-3xl py-6">
          Ignite Change: Transforming Visions into Reality with ChangeMakers
          Fund!
        </h1>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-3 p-4">
          <MainCard />
        </div>
        <div className="col-span-2 p-4">
          <ProgressCard />
        </div>
      </div>
    </div>
  );
}
