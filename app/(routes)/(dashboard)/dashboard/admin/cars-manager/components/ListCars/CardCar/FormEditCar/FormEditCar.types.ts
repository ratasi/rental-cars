import { Car } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type FormEditCarProps = {
  carData: Car;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
