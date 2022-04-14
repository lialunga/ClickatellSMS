import { Request, Response } from 'express'
import { UsersRepository } from '../../repository/implementations/UsersRepository'
import { CreateUserUseCase } from './createUserUseCases'

const usersRepository = new UsersRepository()

class CreateUserController {
    async handle(req: Request, res:Response){
        const { nome, tel, senha } = req.body

        const createUserUseCase = new CreateUserUseCase(usersRepository)

        const user = await createUserUseCase.execute({
            nome,
            tel,
            senha,
        })

        return res.status(200).json(user)
    }
}

export { CreateUserController }