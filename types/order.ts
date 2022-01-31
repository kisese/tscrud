import { BasicCustomer, Customer } from "./customer";
import { BasicProduct, Product } from "./product";

export interface BasicOrder{
    product: BasicProduct,
    customer: BasicCustomer,
    productQuantity:number
}

export interface Order extends BasicOrder{
    orderId:number
}

export interface OrderWithDetails extends Order{
    product: Product,
    customer:Customer
}