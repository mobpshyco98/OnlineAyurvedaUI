import { Medicine } from "./medicine";

export class Medspec {
    specId: number;
    specName: string;
    specValue: string;
    medicine: Medicine = new Medicine();
    medicineId: number;
}
