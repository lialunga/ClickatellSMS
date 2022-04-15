import { Request, Response } from "express";
import { UsersRepository } from "../../repository/implementations/UsersRepository";

const userRepository = new UsersRepository()

class ListUserController {
    async handle(req: Request, res: Response) {
        const users = await userRepository.findAll()

        return res.json(users)
    }
}

export { ListUserController }