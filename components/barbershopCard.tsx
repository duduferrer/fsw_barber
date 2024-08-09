import { Barbershop } from '@prisma/client';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

interface BarbershopItemProps {
  barberShop: Barbershop;
}

const BarbershopCard = ({ barberShop }: BarbershopItemProps) => {
  return (
    <Card className="max-w-[150px]">
      <CardContent className="p-0">
        <div className="relative h-[150px] w-[150px]">
          <Image
            src={barberShop.imageUrl}
            alt={barberShop.name}
            fill
            className="relative z-10 w-full rounded-md p-1"
          />
          <Badge
            className="absolute left-2 top-2 z-30 align-middle"
            variant="secondary"
          >
            <p className="text-xs"> 5.0</p>
            <Star size={10} className="fill-primary" />
          </Badge>
        </div>
        <div className="p-3">
          <h2 className="truncate text-lg font-bold">{barberShop.name}</h2>
          <p className="truncate text-xs">{barberShop.address}</p>
        </div>
        <div className="p-2 text-center">
          <Button className="m-auto w-full">Reservar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopCard;
