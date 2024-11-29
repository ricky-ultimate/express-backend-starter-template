import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import { ENV } from "./constants/env"
import logger from "./utils/logger.utils"

dotenv.config()

const app = express();

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))


app.listen(ENV.PORT, () => {
    logger("Welcome to AnimeNexa 🚀🚀🚀")
} )