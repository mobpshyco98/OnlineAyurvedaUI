import { Category } from "./category";

export class Medicine {
    medicineId:number;
    medicineName:string;
    medicineCost:number;
    mfd:string;
    expiryDate:string;
    stock:number;
    cat:Category = new Category();
}
