class TodoModel {
    id: any;
    title: string;
    description: string;
    completed: boolean;

    constructor(title: string, description: string) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.completed = false;
    }
}

export default TodoModel;