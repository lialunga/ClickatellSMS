import { Request, Response } from 'express'
import api from '../../../../utils/validateNumber'
import { CodeRepository } from '../../../codes/repository/implementations/CodeRepository'
import { CreateCodeUseCase } from '../../../codes/useCases/CreateCodeUseCases'
import { UsersRepository } from '../../repository/implementations/UsersRepository'
import { CreateUserUseCase } from './createUserUseCases'
import { AppError } from '../../../../errors/AppError'

const usersRepository = new UsersRepository()
const codeRepository = new CodeRepository()

class CreateUserController {
    async handle(req: Request, res:Response){
        const { nome, tel, senha } = req.body

        const createUserUseCase = new CreateUserUseCase(usersRepository)

        const response = await api(tel)

        if(response === 400){
            throw new AppError("Número Inválido!")
        }

        const user = await createUserUseCase.execute({
            nome,
            tel,
            senha,
        })

        const createCodeUseCases = new CreateCodeUseCase(codeRepository)

        await createCodeUseCases.execute({user_id: user.id, tel: user.tel})

        return res.status(200).json(user)
    }
}

export { CreateUserController }