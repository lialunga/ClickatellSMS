import { Router } from "express";
import { GenerateNewCodeController } from "../modules/codes/useCases/GenerateNewCodeController";


const generateRouter = Router()
const generateNewCodeController = new GenerateNewCodeController()

generateRouter.post("/", generateNewCodeController.handle)

export { generateRouter }