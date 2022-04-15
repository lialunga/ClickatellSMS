import voucher_codes from 'voucher-code-generator'
import { ICodeRepository } from "../repository/ICodeRepository";
import ClickatellSMS from "../../../services/ClickatellSMS"
import { ISendCodeDTO } from '../DTO/ISendCodeDTO';

class CreateCodeUseCase {
    constructor(
        private codeRepository: ICodeRepository
    ){}

    async execute({ user_id, tel }: ISendCodeDTO){
        const chave = voucher_codes.generate({
            length: 6,
            count: 1,
            charset: "0123456789"
        });

        const code = await this.codeRepository.create({
            chave: chave[0],
            user_id
        })

        const sms = new ClickatellSMS()
        sms.sendSMS(code.chave, tel)
    }
}

export { CreateCodeUseCase }