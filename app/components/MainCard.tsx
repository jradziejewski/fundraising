import { Speech, Coins } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const features = [
  {
    title: "Fuel Positive Change",
    description:
      "Join a community dedicated to making a difference. Your support amplifies our ability to create positive impacts that resonate beyond boundaries.",
  },
  {
    title: "Interactive Q&A Experience",
    description:
      "Engage with our initiatives through interactive Q&A dropdowns. Learn more about the goals, challenges, and the impact your donation can make.",
  },
  {
    title: "Exclusive Rewards",
    description:
      "Unlock exciting rewards based on donation tiers. Your generosity deserves recognition, and we're excited to offer special incentives as a token of our gratitude.",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function MainCard(props: CardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ChangeMakers Fund</CardTitle>
        <CardDescription>created by John Doe 2 days ago</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Speech />
        <div className="flex-1 space-y-1">
          <p className="font-medium leading-none">
            Join us in making difference!
          </p>
          <p className="text-sm p-2">
            ChangeMakers Fund is a dynamic initiative where your support fuels
            impactful projects, ranging from hiring talented personnel to
            launching compelling ad campaigns and implementing innovative
            features. Every donation brings us closer to creating positive
            change. Be a part of the change, be a ChangeMaker!
          </p>
        </div>
        <div>
          {features.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Coins className="mr-2 h-6 w-6" /> Donate now
        </Button>
      </CardFooter>
    </Card>
  );
}
