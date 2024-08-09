import Header from '@/components/header';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { db } from '@/lib/prisma';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import BarbershopCard from '@/components/barbershopCard';

const Home = async () => {
  const barberShops = await db.barbershop.findMany();
  console.log(barberShops);
  return (
    <>
      <Header />
      <div className="p-5">
        <div className="px-4 py-6">
          <h1 className="text-xl">
            Olá, <span className="font-bold">Eduardo</span>!
          </h1>
          <p>Terça, 6 de agosto</p>
        </div>
        <div className="flex p-2">
          <Input placeholder="Faça sua busca..." className="" />
          <Button className="ml-2 p-2" variant="secondary">
            <SearchIcon />
          </Button>
        </div>
        <div className="relative h-40">
          <Image
            src="/banner.svg"
            alt="Banner: Agende nos melhores "
            className="rounded-b-lg object-cover"
            fill
          />
        </div>
        <div className="mt-2">
          <h3 className="px-2 pt-4 text-xs font-bold text-gray-400">
            AGENDAMENTOS
          </h3>
          <Card>
            <CardContent className="flex columns-2 justify-between p-0">
              <div className="flex flex-col gap-2 p-6">
                <Badge variant="default" className="w-fit">
                  Confirmado
                </Badge>
                <h4 className="font-semibold">Corte de Cabelo</h4>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://s2-techtudo.glbimg.com/zAVzm6CbZ6VSmpDe76jhK7Qx73E=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/u/G/eQpsXGQB6xTlFlvJsUOw/avatar-a-lenda-de-aang.jpg" />
                  </Avatar>
                  <p className="text-sm">Barbearia do Zé</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-l-2 px-5">
                <p className="text-sm">Fevereiro</p>
                <p className="text-3xl font-semibold">06</p>
                <p className="text-md">09:45</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barberShops.map((barbershop) => (
            <BarbershopCard barberShop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
