
export type BlogType = {id : number, title : string, description : string};

export type BlogInput = {title : string, description : string};

const initBlogState : BlogType[] = //[];
[
    {
        "id": 1,
        "title": "Angular 16",
        "description": "Angular 16 is an opensource powered by google"
    },
    {
        "id": 2,
        "title": "React",
        "description": "React is an opensource powered by META"
    },
    {
        "id": 3,
        "title": "Java",
        "description": "Java Tech"
    }
];

export default initBlogState;
