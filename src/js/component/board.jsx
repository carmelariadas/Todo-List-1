import React, { useState } from "react";
import TaskForm from "./taskForm.jsx";
import Task from "./task.jsx";

const Board = () =>{

    const[tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        const tareasActualizadas = [tarea, ...tareas]
        setTareas(tareasActualizadas)
    };


    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    return (
        <div className="containerBoard">
            <h1>todos</h1>
                <TaskForm pasarFuncionAgregarTarea={agregarTarea} />
                <p className={tareas=="" ? "" : "d-none"}>No hay tareas, añadir tareas</p>
                <div>
                    {
                        tareas.map((tarea)=>
                            
                            <Task
                            texto={tarea.texto}
                            key={tarea.id}
                            id={tarea.id}
                            eliminarTarea={eliminarTarea}
                            />
                            
                        )

                    }{console.log("Estas son tus tareas", tareas)}
                </div>
        </div>
    );
};

export default Board;