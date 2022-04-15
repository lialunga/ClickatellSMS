import { Router } from "express";
import { VerifyCodeController } from "../modules/codes/useCases/VerifyCodeController";

const verifyRoutes = Router()
const verifyCodeController = new VerifyCodeController()

verifyRoutes.post("/", verifyCodeController.handle)

export { verifyRoutes }