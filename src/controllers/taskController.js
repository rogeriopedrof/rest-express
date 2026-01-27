import { updatedTaskService } from '../services/taskService';

export async function updatedTaskController (req, res) {
    const taskId = req.params;
    const data = req.body;

    if (!taskId) {
        return res.status(400).json({error: 'Missing Parameters'});
    }

    try {
        const updatedTask = await updatedTaskService({
            taskId,
            data,
        });

        return res.status(200).json(updatedTask)
        
    } catch (error) {
        if (error.type === "NOT_FOUND") {
            return res.status(404).json({error: error.message});
        }

        if (error.type === "FORIDDEN") {
            return res.status(403).json({error: error.message});
        }

        if (error.type === "INVALID_STATE") {
            return res.status(409).json({error: error.message});
        }

        return res.status(500).json({error: 'Internal server error'});
    }
}