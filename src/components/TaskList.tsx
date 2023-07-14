import React from 'react'
import { ITask } from '../interface/ITask'
import { TaskCard } from './TaskCard'

interface Props {
    tasks: ITask[]
    deleteTask: (id: number) => void;
}

export function TaskList({ tasks, deleteTask }: Props) {
    return (
        <>
            {tasks.map((task) =>
                <div className='col-md-4 pb-3' key={task.id}>
                    <TaskCard task={task} deleteTask={deleteTask} />
                </div>
            )}
        </>
    )
}

