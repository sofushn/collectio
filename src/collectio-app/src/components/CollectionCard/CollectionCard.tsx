import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./CollectionCard.css";
import { Link } from "react-router";

export interface CardProps {
  title: string;
  description: string;
}

const CollectionCard = (props: CardProps) => {
  return (
    <Card className="w-[200px] collection-card collection-card-gradiant shadow ">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>{" "}
      </CardHeader>

      <CardContent>
        <Link to={"/collection"}>
          <Button className="collection-card-btn" variant="outline">
            Open
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
