/// <reference path="../models/product.ts" />

namespace lab1.Controllers {
    export class MyController {
        constructor($scope) {
            var product = new lab1.Models.Product("CC01", "CCPhone", 5);
            $scope.name = product.productName;
        }
    }
}
