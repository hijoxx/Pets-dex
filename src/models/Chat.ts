export default class Chat {
    id: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(
        id: number,
        name: string = 'name',
        picture: string = 'http://...',
        types: Array<string> = ['Normal'],
        created: Date = new Date()
    )
    {

        this.id = id;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}