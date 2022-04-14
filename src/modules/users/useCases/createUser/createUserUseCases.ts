import { ICreateUserDTO } from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";


class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute({ nome, tel, senha }: ICreateUserDTO){
        const userAlreadExist = await this.usersRepository.findByTel(tel)

        if(userAlreadExist)
            throw new Error("Usuário já existe!")

        const user = await this.usersRepository.create({
            nome,
            tel,
            senha
        })

        return user;
    }
}

export { CreateUserUseCase }