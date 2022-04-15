import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../users/repository/implementations/UsersRepository";
import { CodeRepository } from "../repository/implementations/CodeRepository";
import { CreateCodeUseCase } from "./CreateCodeUseCases";

const codeRepository = new CodeRepository
const userRepository = new UsersRepository


class GenerateNewCodeController {
    async handle(req: Request, res: Response) {
        const { tel } = req.body

        const existUser = await userRepository.findByTel(tel)

        if(!existUser)
            throw new AppError("Conctato não encontrado!")
        
        if(existUser.ativa)
            throw new AppError("Conta já activada!")

        const createCodeUseCase = new CreateCodeUseCase(codeRepository)

        createCodeUseCase.execute({ user_id: existUser.id, tel: existUser.tel })

        return res.json({ message: "Código enviado, verifica o sua sms" })
    }
}

export { GenerateNewCodeController }