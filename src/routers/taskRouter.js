import { Router } from "express";
import { updateTaskController } from "../controllers/taskController.js";

const router = Router();

router.patch('/:taskId', (req, res)=>{updateTaskController(req, res)});

export default router;