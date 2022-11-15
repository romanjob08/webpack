export default class Post {
    // title: string;
    // date: Date;
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
}