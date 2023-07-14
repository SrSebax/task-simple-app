import React from 'react'
import { ITask } from '../interface/ITask'

import { AiOutlineDelete } from "react-icons/ai";


interface Props {
    task: ITask;
    deleteTask: (id: number) => void;
}

export function TaskCard({ task, deleteTask }: Props) {
    return (
        <div className='card card-body bg-secondary rounded-0 text-dark'>
            <p>{task.id}</p>
            <h2 className='text-dark'>{task.title}</h2>
            <p>{task.description}</p>
            <button className='btn btn-danger' onClick={() => task.id && deleteTask(task.id)}>
                <span className='mx-2'>Delete</span>
                <AiOutlineDelete/>
            </button>
        </div>
    )
}
