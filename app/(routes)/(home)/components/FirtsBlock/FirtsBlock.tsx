import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export function FirtsBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal className="p-6 lg:pl-40" position="bottom">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
          Premium
          <span className="block">Rental Cars </span>
          in Spain
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Dont deny yourself pleasure of driving the best premium cars from
          around the world here and now
        </p>
      </Reveal>
      <Reveal className="flex justify-end" position="right">
        <Image
          src="/images/porsche.png"
          alt="Rent cars"
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </div>
  );
}
