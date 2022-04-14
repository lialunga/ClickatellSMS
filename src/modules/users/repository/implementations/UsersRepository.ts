import { User } from "@prisma/client";
import prismaClient from "../../../../prisma/connection";
import { ICreateUserDTO } from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";



class UsersRepository implements IUsersRepository{
    async create({ nome, tel, ativa, senha }: ICreateUserDTO): Promise<User> {
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

}