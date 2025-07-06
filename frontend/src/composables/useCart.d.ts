interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
declare function remove(id: number): void;
declare function total(): number;
export declare function useCart(): {
    cart: import("vue").Ref<{
        id: number;
        name: string;
        price: number;
        quantity: number;
    }[], CartItem[] | {
        id: number;
        name: string;
        price: number;
        quantity: number;
    }[]>;
    remove: typeof remove;
    total: typeof total;
};
export {};
