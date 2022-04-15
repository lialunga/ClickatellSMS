import { AppError } from "../errors/AppError"
import api from "../services/angolaApi"

export default async function validateNumber(tel: string) {
    const response = await api
    .get(`/validate/phone/+244${tel}`)
    .then((res) => {
        return 200
    })
    .catch((err) => {
        return 400
    })

    return response;
}