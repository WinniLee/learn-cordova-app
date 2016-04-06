// 如需空白範本的簡介，請參閱下列文件: 
// http://go.microsoft.com/fwlink/?LinkID=397705
// 若要針對在 Ripple 或 Android 裝置/模擬器上載入的頁面，偵錯程式碼: 請啟動您的應用程式，設定中斷點，
// 然後在 JavaScript 主控台中執行 "window.location.reload()"。
var lab1;
(function (lab1) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // 處理 Cordova 暫停與繼續事件
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
            //var element = document.getElementById("deviceready");
            //element.innerHTML = 'Device Ready';
            //element.className += ' ready';
            //var product = new lab1.Models.Product("AA1", "AAProduct", 100);
            //alert(product.productName);
            //document.getElementById("test").innerHTML += product.productName;
            //var jsonArray = [
            //    { "user":{"id": 100, "screen_name": "d_linq" }, "text":"to objects"},
            //    { "user": { "id": 130, "screen_name": "e_linq" }, "text": "es" },
            //    { "user": { "id": 155, "screen_name": "f_linq" }, "text": "fs" },
            //    { "user": { "id": 301, "screen_name": "g_linq" }, "text": "gs" }
            //]
            //var queryResult = Enumerable.From(jsonArray)
            //    .Where(function (x) { return x.user.id < 200 })
            //    .OrderBy(function (x) { return x.user.screen_name })
            //    .Select(function (x) { return x.user.screen_name + ':' + x.text })
            //    .ToArray();
            //alert(queryResult.toString());
        }
        function onPause() {
            // TODO: 這個應用程式已暫停。請在這裡儲存應用程式狀態。
        }
        function onResume() {
            // TODO: 這個應用程式已重新啟動。請在這裡還原應用程式狀態。
        }
    })(Application = lab1.Application || (lab1.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(lab1 || (lab1 = {}));
var lab1;
(function (lab1) {
    var Models;
    (function (Models) {
        var Product = (function () {
            function Product(productId, productName, inventoryQuantity) {
                this.productId = productId;
                this.productName = productName;
                this.inventoryQuantity = inventoryQuantity;
            }
            return Product;
        }());
        Models.Product = Product;
    })(Models = lab1.Models || (lab1.Models = {}));
})(lab1 || (lab1 = {}));
/// <reference path="../models/product.ts" />
var lab1;
(function (lab1) {
    var Controllers;
    (function (Controllers) {
        var MyController = (function () {
            function MyController($scope) {
                var product = new lab1.Models.Product("CC01", "CCPhone", 5);
                $scope.name = product.productName;
            }
            return MyController;
        }());
        Controllers.MyController = MyController;
    })(Controllers = lab1.Controllers || (lab1.Controllers = {}));
})(lab1 || (lab1 = {}));
/// <reference path="../controllers/mycontroller.ts" />
var app = angular.module("app", []);
app.controller("MyController", lab1.Controllers.MyController);
//# sourceMappingURL=appBundle.js.map