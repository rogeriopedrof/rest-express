import { Router } from "express";
import { updateTaskController } from "../controllers/taskController.js";

const router = Router();

router.patch('/:taskId', (req, res)=>{updateTaskController});

export default router;