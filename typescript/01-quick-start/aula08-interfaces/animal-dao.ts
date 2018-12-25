import { DaoInterface } from "./dao.interface";
import { animal } from "./../aula07-classes/animal";

export class AnimalDao implements DaoInterface {
    tableName: string = '';
    insert(object: animal): boolean {
        console.log('inserindo ...');
        object.mover(50);
        return true;
    }
    update(object: animal): boolean {
        return true;
    }
    delete(id: number): animal {
        return null;
    }
    find(id: number): animal {
        return null;
    }
    findAll(): [animal]{
        return[new animal('Rex')];
    }
}