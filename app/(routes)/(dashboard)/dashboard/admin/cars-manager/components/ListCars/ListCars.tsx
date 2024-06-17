import { CardCar } from "./CardCar";
import { ListCarsProps } from "./ListCars.types";

export function ListCars(props: ListCarsProps) {
  const { cars } = props;

  return (
    <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
      {cars.map((car) => (
        <CardCar car={car} key={car.id} />
      ))}
    </div>
  );
}
