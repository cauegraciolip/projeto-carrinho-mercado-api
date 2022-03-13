import { prisma } from "../../database/client";
import { User } from "../../entities/User";

class UserCreateService {
    async verify(username: string): Promise<boolean> {
        const userAlreadyExist = await prisma.user.findUnique({where: {username}});

        return !!userAlreadyExist;
    }

    async create({ username, email, password }: User): Promise<User> {
        const user = await prisma.user.create({
          data: {
            username,
            email,
            password
          },
        });
    
        return user;
    }

    async execute({username, email, password}) {
        const userExist = await this.verify(username);

        if(userExist) {
            throw new Error("Usuário já existe")
        }

        const createUser = User.create({username, email, password});
        const user = await this.create(createUser);
        return user;
    }
}

export { UserCreateService }