import  'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from './errors/AppError'

const app = express()

app.use(express.json())

app.use(routes)

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if(err instanceof AppError){
            return res.status(err.status).json({ message: err.message})
        }

        return res.status(500).json({
            status: "error",
            message: `Internal Server error - ${err.message}`
        })
    }
)

app.listen(5000, () => console.log("Server running!"))