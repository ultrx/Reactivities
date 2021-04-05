export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: string;
}
//This file describes the structure of our Activity/Products
//We used an interface instead of a class because we use the interface just for type checking, code is shorter with interface.