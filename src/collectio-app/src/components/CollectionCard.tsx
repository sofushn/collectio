import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./CollectionCard.css";

export interface CardProps {
  title: string;
  description: string;
}

const CollectionCard = (props: CardProps) => {
  return (
    <Card className="collection-card">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>{" "}
      </CardHeader>
      <CardContent>
        <Button variant="outline">Open collection</Button>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
