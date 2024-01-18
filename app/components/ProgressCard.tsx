import { Speech, Coins, Forward } from "lucide-react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {Donator} from "./Donator";

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

export function ProgressCard(props: CardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>$131,22</CardTitle>
        <Progress value={65} className="h-2" />
        <CardDescription>raised out of $200</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full">Donate now</Button>
        <Button variant="outline" className="w-full">
<Forward className="mr-2 w-4 h-4" />
        Share</Button>
      </CardContent>
      <CardFooter>
        <Donator />
      </CardFooter>
    </Card>
  );
}
