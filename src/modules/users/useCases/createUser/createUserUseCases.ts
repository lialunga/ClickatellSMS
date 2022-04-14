import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../DTO/ICreateUserDTO";
import { IUsersRepository } from "../../repository/IUsersRepository";
import { AppError } from "../../../../errors/AppError"


class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute({ nome, tel, senha }: ICreateUserDTO){
        const userAlreadExist = await this.usersRepository.findByTel(tel)

        if(userAlreadExist)
            throw new AppError("Usuário já existe!")

        const hashSenha = await hash(senha, 8)

        const user = await this.usersRepository.create({
            nome,
            tel,
            senha: hashSenha
        })

        return user;
    }
}

export { CreateUserUseCase }