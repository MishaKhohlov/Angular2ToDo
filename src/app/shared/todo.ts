/*
 interface ITodo {
 name: string;
 completed: boolean;
 }
 */
export class Todo {
    constructor(public name: string, public completed = false) {}
}
