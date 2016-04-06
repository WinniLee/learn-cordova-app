namespace lab1.Models {
    export class Product {
        constructor(productId: string, productName: string, inventoryQuantity :number) {
            this.productId = productId;
            this.productName = productName;
            this.inventoryQuantity = inventoryQuantity;

        }

        public productId: string;
        public productName: string;
        public inventoryQuantity: number;

    }
}
