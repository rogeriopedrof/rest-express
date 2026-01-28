import { Router } from "express";
import { createTaskController, updateTaskController } from "../controllers/taskController.js";

const router = Router();

router.post('/', createTaskController);
router.patch('/:taskId', updateTaskController);

export default router;