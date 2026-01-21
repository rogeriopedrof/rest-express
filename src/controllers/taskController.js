import e, { request, response } from "express";
import { updateTaskService } from '../services/taskService';

export async function updateTaskController (req: request, res: response) {
    const {taskId } = req.params;
    const data = req.body;

    if (!taskId) {
        return res.status(400).json({error: 'Missing Parameters'});
    }

    try {
        const updateTask = await updateTaskService({
            taskId,
            data,
        });
    } catch (error: any) {
        if (error.type === "NOT_FOUND") {
            return res.status(404).json({error: error.message});
        }

        if (error.type === "FORIDDEN") {
            return res.status(403).json({error: error.message});
        }

        return res.status(500).json({error: 'Internet server error'});
    }
}