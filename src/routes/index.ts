import { Router } from 'express'
import { generateRouter } from './generateNewCode.routes'
import { userRoutes } from './users.routes'
import { verifyRoutes } from './verifyCode.routes'

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/verify", verifyRoutes)
routes.use("/generatenewcode", generateRouter)

export { routes }