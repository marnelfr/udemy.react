export default class Todo {
    id: number
    text: string

    constructor(todoText: string) {
        this.id = (new Date()).getTime()
        this.text = todoText
    }
}