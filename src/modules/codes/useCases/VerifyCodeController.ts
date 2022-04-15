import { Request, Response } from "express";
import { UsersRepository } from "../../users/repository/implementations/UsersRepository";
import { CodeRepository } from "../repository/implementations/CodeRepository";
import { VerifyKeyUseCase } from "./VerifyKeyUseCase";

const codeRepository = new CodeRepository()
const userRepository = new UsersRepository()


class VerifyCodeController {
    async handle(req: Request, res: Response){
        const { chave } = req.body

        const verifyKeyUseCase = new VerifyKeyUseCase(codeRepository, userRepository)

        const user = await verifyKeyUseCase.execute(chave)

        return res.json(user)
    }
}

export { VerifyCodeController }