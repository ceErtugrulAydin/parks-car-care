import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type React from "react"; // Added import for React

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>${price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href="/appointment">Şimdi Rezervasyon Yapın</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
