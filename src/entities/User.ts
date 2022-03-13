class User {
    id?: number;
    username: string;
    email: string;
    password: string;

    private constructor({username, email, password}: User) {
    return Object.assign(this, 
        {
            username, email, password
        })
    }

    static create({username, email, password}: User) {
        const user = new User({username, email, password})
        return user
    }
}

export { User }