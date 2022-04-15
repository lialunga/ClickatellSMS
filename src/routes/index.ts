import { Router } from 'express'
import { userRoutes } from './users.routes'
import { verifyRoutes } from './verifyCode.routes'

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/verify", verifyRoutes)

export { routes }