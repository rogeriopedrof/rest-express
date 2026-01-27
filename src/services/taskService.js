import { type } from 'os';
import { getTaskById, updatedTask } from '../repositories/taskRepository.js'

export async function updatedTaskService({taskId, data}) {
    
    const task = await getTaskById(taskId);

    if (!task) {
        throw {
            type: "NOT_FOUND",
            message: "Task not found",
        };
    }

    if (task.status === "COMPLETED") {
        throw {
            type: "INVALID_STATE",
            message: "Completed task cannot be edited",
        }
    }

    const updatedTask = await updatedTask(taskId, data);

    return updatedTask;
}