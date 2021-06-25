import { Category } from "./category";

export class Medicine {
    medicineId:number;
    medicineName:string;
    medicineCost:number;
    mfd:string;
    expiryDate:string;
    stock:number;
    image:string;
    companyName:string;
    category:Category = new Category();
}
