import { todos } from '../data';
import { Todo } from '../todo';


export class TodoServices {
    todos: Todo[] = todos;

    getTodos(): Todo[] {
        return this.todos;
    }

}
