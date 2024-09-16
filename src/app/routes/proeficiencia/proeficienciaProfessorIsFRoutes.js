import { Router } from "express"
import AuthMiddleware from '../../middlewares/auth'
import ProeficienciaProfessorIsFController from "../../controllers/proeficiencia/proeficienciaProfessorIsFController"

const router = new Router()

router.post('/', AuthMiddleware, ProeficienciaProfessorIsFController.post)

export default router