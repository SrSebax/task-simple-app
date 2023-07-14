import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { ITask } from '../interface/ITask';

interface Props {
    onAddTask: (task: ITask) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const initialState = {
    title: '',
    description: '',
}

export function TaskForm({ onAddTask }: Props) {
    const [task, setTask] = useState<ITask>(initialState)
    const inputTitle = useRef<HTMLInputElement>(null)

    const handleInputChange = ({
        target: { name, value },
    }: HandleInputChange) => {
        setTask({ ...task, [name]: value });
    };

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (task.title.trim() === '' || task.description.trim() === '') {
            return; 
          }
        onAddTask(task)
        setTask(initialState)
        inputTitle.current?.focus()
    }

    return (
        <div className="card card-body bg-secondary">
            <h1 className="text-dark mx-3">Add Task</h1>
            <form onSubmit={handleNewTask}>
                <input
                    type="text"
                    placeholder="Write a title"
                    name="title"
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.title}
                    autoFocus
                    ref={inputTitle}
                />

                <textarea
                    name="description"
                    rows={2}
                    placeholder="Write a description"
                    className="form-control mb-3 shadow-none border-0"
                    onChange={handleInputChange}
                    value={task.description}
                ></textarea>

                <button className='btn btn-primary'>
                    <span className='mx-2'>Save</span>
                    <AiOutlineAppstoreAdd />
                </button>
            </form>
        </div>
    );
}
