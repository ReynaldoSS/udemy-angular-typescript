import { Dao } from "./dao";
import { animal } from "../aula07-classes/animal";
import { cavalo } from "../aula07-classes/cavalo";

let dao: Dao<animal> = new Dao<animal>();
let myAnimal: animal = new animal('Rex');
let myCavalo: cavalo = new cavalo('Titã');


dao.insert(myAnimal)