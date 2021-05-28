import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '../../components/button';
import Card from '../../components/card';
import UserLayout from '../../components/Layout/Userlayout';
import ClassService from '../../services/Class.service';
import { ClassContext } from '../../services/ClassContext';

const TaskList = () => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const [task, setTask] = useState({});
    const [taskMaterial, setTaskMaterial] = useState([]);
    const { lesson_id, task_id } = useParams();

    useEffect(() => {
        ClassService.getTask(task_id).then((res) => {
            setTask(res);
        });
        ClassService.getTaskList(lesson_id, task_id).then((res) => {
            setTaskMaterial(res);
        });
        console.log(taskMaterial);
    },[lesson_id, task_id]);

    const createTaskMaterial = () => {
        ClassService.createTaskMaterial(task_id);
    }

    const openTaskMaterial = (task_material_id) => {
        history.replace('/class/task/material/' + task_material_id);
    }
    
    return(
        <div>
            <UserLayout>
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">{ task.task_name }</div>
                    <div className="flex-row flex-center">
                        <Button
                            className="default-button mx-10"
                            onClick={ createTaskMaterial }
                        >
                            Tambah Baru
                        </Button>
                        <Button onClick={ () => history.goBack() }>
                            Kembali
                        </Button>
                    </div>
                </div>
                <Card className="default-card px-30 py-30">
                    <div className="flex-col justify-center my-10">
                    {
                        taskMaterial.map((material) => (
                            <Card
                                className={"violet-card white flex-row justify-between flex-center my-10 px-20 py-20"}
                                onClick={() => openTaskMaterial(material.task_material_id) }
                            >
                                <div>{ material.task_material_name }</div>
                            </Card>
                        ))
                    }
                    </div>
                </Card>
            </UserLayout>
        </div>
    );
}

export default TaskList;