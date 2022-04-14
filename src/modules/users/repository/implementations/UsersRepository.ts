import { User } from "@prisma/client";
import prismaClient from "../../../../prisma/connection";
import { ICreateUserDTO } from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepository implements IUsersRepository{
    async create({ nome, tel, senha }: ICreateUserDTO): Promise<User> {
        const user = await prismaClient.user.create({ 
            data: {
                nome, 
                tel, 
                ativa: false, 
                senha
            }
        })

        return user;
    }

    async findByTel(tel: string): Promise<User> {
        const user = await prismaClient.user.findFirst({
            where: { tel }
        })

        return user as User;
    }

}

export { UsersRepository }