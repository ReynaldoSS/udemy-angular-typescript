"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var cavalo = /** @class */ (function (_super) {
    __extends(cavalo, _super);
    function cavalo(nome) {
        return _super.call(this, nome) || this;
    }
    cavalo.prototype.mover = function (distanciaEmMetros) {
        console.log('Galopando...');
        _super.prototype.mover.call(this, distanciaEmMetros);
    };
    return cavalo;
}(animal_1.animal));
exports.cavalo = cavalo;
//# sourceMappingURL=cavalo.js.map