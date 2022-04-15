import axios, { AxiosInstance } from 'axios'

class SMSClikatell {
    private instanceApi: AxiosInstance;

    constructor() {
        this.instanceApi = axios.create({
            baseURL: 'https://platform.clickatell.com/v1',
            headers: {'Authorization': process.env.CLICKATELL_API_KEY || ''}
          })
    }

    async sendSMS(code: string, numero: string) {
        this.instanceApi.post('/message', {
            "messages": [
                {
                    "channel": "sms",
                    "to": "+244941967343",
                    "content": `Este é o código para verificar sua conta: ${code}`
                }
            ]
        }).then(() => {}).catch((err) => {
            console.log(err)
            throw new Error("Falha ao enviar SMS!")
        })
    }
}

export default SMSClikatell;