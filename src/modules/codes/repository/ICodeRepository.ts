import { ICreateCodeDTO } from "../DTO/ICreateCodeDTO";
import { Code } from '@prisma/client'



interface ICodeRepository {
    create({ chave, user_id }: ICreateCodeDTO): Promise<Code>;
    findCodeUsed(chave: string): Promise<Code>;
}

export { ICodeRepository }