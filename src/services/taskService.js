import { getTaskById, updateTask } from '../repositories/taskRepository.js'

export async function updateTaskService({taskId, data}) {
    
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

    const updatedTask = await updateTask(taskId, data);

    return updatedTask;
}