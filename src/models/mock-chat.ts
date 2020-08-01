import Chat from './Chat';

export const CHATS: Chat[] = [
    {
        id: 1,
        name: "tigrou",
        hp: 25,
        cp: 5,
        picture: "https://www.wanimo.com/veterinaire/wp-content/uploads/2011/05/images_articles_chat_chaton-diarrhee@2x.jpg",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Caramel",
        hp: 28,
        cp: 6,
        picture: "https://www.18h39.fr/wp-content/uploads/2019/04/chat-trop-chou-600x420.jpg",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 3,
        name: "Felix",
        hp: 21,
        cp: 4,
        picture: "data:image/jpeg;base64,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",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 4,
        name: "Simba",
        hp: 16,
        cp: 2,
        picture: "https://lh3.googleusercontent.com/proxy/vMia8wcHHFoziNfutgBp_ea5uQS6mj8KDo8X2fzS8EuF1n2en8KidhkYh4vmiLooYa8NWlTb79xne99b8uQFSuu_yvYBEN3jmhue6ptzVHHO",
        types: ["Insecte", "Poison"],
        created: new Date()
    },
    {
        id: 5,
        name: "Gribouille",
        hp: 30,
        cp: 7,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpRAGBKKeWeonLNCem9D_8WST2cUheeinc1A&usqp=CAU",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 6,
        name: "Filou",
        hp: 18,
        cp: 6,
        picture: "https://www.pngkit.com/png/detail/133-1336900_share-this-image-chaton.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 7,
        name: "Minou",
        hp: 14,
        cp: 5,
        picture: "https://www.lechatpacha.fr/wp-content/uploads/2016/03/chartreux3_02.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 8,
        name: "Pacha",
        hp: 16,
        cp: 4,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfO-Et_yyWYqA0wfMEH3lJFwbQEiN_SBoUaQ&usqp=CAU",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 9,
        name: "Pika",
        hp: 21,
        cp: 7,
        picture: "https://aws-cf.imdoc.fr/prod/photos/4/8/0/8239480/22337617/img-22337617de7.png?v=5",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 10,
        name: "Jack",
        hp: 19,
        cp: 3,
        picture: "https://cliniquevetobb.com/wp-content/uploads/2018/01/chaton.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 11,
        name: "Flocon",
        hp: 25,
        cp: 5,
        picture: "https://assets.afcdn.com/story/20150511/661351_w980h638c1cx1858cy867.jpg",
        types: ["Fée"],
        created: new Date()
    },
    {
        id: 12,
        name: "Oscar",
        hp: 17,
        cp: 8,
        picture: "https://img.20mn.fr/nX-cHNfGTH2_FqN2FPfbag/768x492_chaton-illustration.jpg",
        types: ["Feu"],
        created: new Date()
    }
];

export default CHATS;