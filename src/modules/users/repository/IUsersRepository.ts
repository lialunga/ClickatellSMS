import { ICreateUserDTO } from "../DTO/ICreateUserDTO"
import { User } from '@prisma/client'



interface IUsersRepository {
    create({ nome, tel, ativa, senha }: ICreateUserDTO): Promise<User>
}

export { IUsersRepository }