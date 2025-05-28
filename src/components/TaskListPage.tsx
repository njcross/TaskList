// TaskListPage.tsx
import PageLayout from "./PageLayout";
import TaskList from "./TaskList";
import type { Task } from "../models/Task.model";
import { Stack } from "react-bootstrap";
import React, { useState } from "react";


const TaskListPage: React.FC = () =>{
    const [tasks, setTasks] = useState<Task[]>([]);


      
    return(
        <PageLayout>
            <h1>Task List</h1>
            <Stack direction='horizontal'>
                {tasks.map((tasks) => (
                <TaskList {...tasks} />
                ))}
            </Stack>
        </PageLayout>
    )
}
export default TaskListPage;