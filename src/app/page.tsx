'use client'
import 'react-toastify/dist/ReactToastify.css';

import { getTasks } from '@/api/getTask';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export interface Tasks {
  id: string;
  description: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([])

  useEffect(() => {
    getTasks().then((data) => setTasks(data))
  }, [])

  return (
    <>
      <div className='max-w-6xl px-4 py-12 mx-auto'>
        {tasks.map((task) =>
          <div className="card bg-base-200 shadow-xl mb-5">
            <div className="card-body p-5">
              <div className="card-actions justify-between items-center">
                {/* <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox bg-base-100 disabled"
                      onChange={() => console.log('changed')}
                      checked={task.completed}
                    />
                    <span className={`ml-2 text-md break-all ${task.completed && 'line-through'}`}>{task.description}</span>
                  </label>
                </div> */}

                {task.description}

                {/* <div className="flex">
                  <button className="btn btn-square btn-ghost">
                    Edit
                  </button>
                  <button className="btn btn-square btn-ghost">
                    Delete
                  </button>
                </div> */}
              </div>
            </div>
          </div>)}
      </div>
      <ToastContainer />
    </>
  );
}
