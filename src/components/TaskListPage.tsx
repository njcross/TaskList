// TaskListPage.tsx
import PageLayout from "./PageLayout";
import TaskList from "./TaskList";
import type { Task } from "../models/Task.model";
import { Stack } from "react-bootstrap";

const TaskListPage: React.FC = () =>{
    const tasks: Task[] = [
        { id: '1', title: 'Task 1', description: 'This is task 1', status: 'OPEN' },
        { id: '2', title: 'Task 2', status: 'IN_PROGRESS' },
        { id: '3', title: 'Task 3', description: 'This is task 3', status: 'DONE' },
      ]

      
    return(
        <PageLayout>
            <h1>Task List</h1>
            <Stack direction='horizontal'>
                {tasks.map((task) => (
                <TaskList {...task} />
                ))}
            </Stack>
        </PageLayout>
    )
}
export default TaskListPage;