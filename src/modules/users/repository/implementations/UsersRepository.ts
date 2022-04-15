import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
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

    async validAccount(code_id: string): Promise<User> {
        const code = await prismaClient.code.update({
            where: {
                id: code_id
            },
            data: {
                usada: true
            }
        })

        const user = await prismaClient.user.findFirst({
            where: {
                id: code.user_id
            }
        })

        if(!user)
            throw new AppError("Conta inexistente!")
        
        const update = await prismaClient.user.update({
            where: {
                id: user.id
            },
            data: {
                ativa: true
            }
        })

        return update
    }

}

export { UsersRepository }