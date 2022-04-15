import { Router } from "express";
import { ListUserController } from "../modules/users/useCases/listUser/ListUserController";


const listUserRoutes = Router()
const listUserController = new ListUserController()

listUserRoutes.get("/", listUserController.handle)

export { listUserRoutes }