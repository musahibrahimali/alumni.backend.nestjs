import { Document } from "mongoose";

interface ITroll extends Document{
    readonly _id?: string;
    readonly post?: string;
    readonly userId?: string;
    readonly images?: string[];
    readonly videos?: string[];
    readonly likes?: any[];
    readonly comments?: any[];
    readonly shares?: any[];
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}

export default ITroll;