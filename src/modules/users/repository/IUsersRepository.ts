import { ICreateUserDTO } from "../DTO/ICreateUserDTO"
import { User } from '@prisma/client'



interface IUsersRepository {
    create({ nome, tel, senha }: ICreateUserDTO): Promise<User>
    findByTel(tel: string): Promise<User>
}

export { IUsersRepository }