import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import './CollectionCard.css';

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
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
