import { DaoInterface } from "./dao.interface";
import { AnimalDao } from "./animal-dao";
import { animal } from "../aula07-classes/animal";

let dao: DaoInterface = new AnimalDao();

let myAnimal: animal = new animal('Rex');

dao.insert(myAnimal);