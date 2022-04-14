import { Request, Response } from 'express'
import { CodeRepository } from '../../../codes/repository/implementations/CodeRepository'
import { CreateCodeUseCase } from '../../../codes/useCases/CreateCodeUseCases'
import { UsersRepository } from '../../repository/implementations/UsersRepository'
import { CreateUserUseCase } from './createUserUseCases'

const usersRepository = new UsersRepository()
const codeRepository = new CodeRepository()

class CreateUserController {
    async handle(req: Request, res:Response){
        const { nome, tel, senha } = req.body

        const createUserUseCase = new CreateUserUseCase(usersRepository)

        const createCodeUseCase = new CreateCodeUseCase(codeRepository)

        const user = await createUserUseCase.execute({
            nome,
            tel,
            senha,
        })

        const chave = await createCodeUseCase.execute(user.id)

        return res.status(200).json(user)
    }
}

export { CreateUserController }