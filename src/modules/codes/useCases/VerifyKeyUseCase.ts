import { User } from "@prisma/client"
import { differenceInMinutes, parseISO } from "date-fns"
import { AppError } from "../../../errors/AppError"
import { IUsersRepository } from "../../users/repository/IUsersRepository"
import { ICodeRepository } from "../repository/ICodeRepository"


class VerifyKeyUseCase {
    constructor(
        private codeRepository: ICodeRepository,
        private userRepository: IUsersRepository
    ){}
    async execute(chave: string): Promise<User> {
        const existChave = await this.codeRepository.findCodeUsed(chave)

        if(!existChave)
            throw new AppError("Chave não verificada!")

        const diference = differenceInMinutes(parseISO(String(existChave.created_at)), new Date())

        if(diference > 30)
            throw new AppError("A sua chave expirou, gere uma nova!")
        
        const verifiedUser = await this.userRepository.validAccount(existChave.id)

        return verifiedUser;
    }
}

export { VerifyKeyUseCase }