import voucher_codes from 'voucher-code-generator'
import { ICodeRepository } from "../repository/ICodeRepository";


class CreateCodeUseCase {
    constructor(
        private codeRepository: ICodeRepository
    ){}

    async execute(user_id: string){
        const chave = voucher_codes.generate({
            length: 6,
            count: 1,
            charset: "0123456789"
        });

        const code = await this.codeRepository.create({
            chave: chave[0],
            user_id
        })

        return code;
    }
}

export { CreateCodeUseCase }