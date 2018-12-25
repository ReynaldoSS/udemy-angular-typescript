"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var animal_1 = require("../aula07-classes/animal");
var cavalo_1 = require("../aula07-classes/cavalo");
var dao = new dao_1.Dao();
var myAnimal = new animal_1.animal('Rex');
var myCavalo = new cavalo_1.cavalo('Titã');
dao.insert(myAnimal);
//# sourceMappingURL=run.js.map