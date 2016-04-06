/// <reference path="../models/product.ts" />
import Product = lab1.Models.Product;

namespace lab1.Controllers {
    export class ProductListController {
        constructor($scope) {
            var products = new Array<Product>();
            for (var i = 0; i < 10; i++) {
                products.push(new Product("A00" + i, "my phone" + i, i + 100));
            }
            $scope.products = products;
        }
    }
}
