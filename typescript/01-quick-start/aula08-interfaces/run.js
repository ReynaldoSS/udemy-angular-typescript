"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("../aula07-classes/animal");
var dao = new animal_dao_1.AnimalDao();
var myAnimal = new animal_1.animal('Rex');
dao.insert(myAnimal);
//# sourceMappingURL=run.js.map