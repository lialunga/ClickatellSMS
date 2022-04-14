import { Code } from "@prisma/client";
import { ICreateCodeDTO } from "../../DTO/ICreateCodeDTO";
import { ICodeRepository } from "../ICodeRepository";
import prismaClient from "../../../../prisma/connection";



class CodeRepository implements ICodeRepository {
    async create({ chave, user_id }: ICreateCodeDTO): Promise<Code> {
        const code = await prismaClient.code.create({
            data: {
                chave,
                user_id,
                usada: false
            }
        })

        return code;
    }
    async findCodeUsed(chave: string): Promise<Code> {
        const code = await prismaClient.code.findFirst({
            where: { chave, usada: false }
        })

        return code as Code;
    }
}

export { CodeRepository }