import React, {useState, useEffect} from 'react';
import TaskForm from './TaskForm';
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import {SuspenseLoading} from "../../../Routes";
import {Card, Divider} from "@material-ui/core";


function TaskUpdate(props) {

  const isNewTask = !props.match.params || !props.match.params.id;
  const [task, setTask] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
  useEffect(() => {
    let active = true;

    const fetchTask = async (id) => {
      try {
        const responseTask = await axios.get(`/api/tasks/${id}/`);
        const responseSprint = await axios.get(`/api/sprints/${responseTask.data.sprint}/`);
        const responseUser = await axios.get(`/api/auth/users/${responseTask.data.user}`);
        if (active) {
          const newTask = {
            ...responseTask.data,
            sprint: responseSprint.data, user: responseUser.data
          };
          setTask(newTask);
        }
      } catch (e) {
        console.log(e);
      }
      if (active) {
        setIsLoaded(true);
      }
    };

    if (!isNewTask) {
      const id = props.match.params.id;
      fetchTask(id);
    } else {
      setTask({});
    }

    return () => {
      active = false;
    }
  }, [isNewTask]);

  const handleCancel = () => {
    props.history.push("/task" + props.location.search);
    //props.history.goBack();
  };

  return (
    <>
      {!isNewTask && !isLoaded ?
        <SuspenseLoading/> :
        <Grid container justify={"center"}>
          <Grid item xs={12} lg={9}>
            <Card className="mb-4">
              <div className="p-4 font-size-lg font-weight-bold">
                {isNewTask ? "Ajouter une nouvelle " : "Modifier la "} tache
              </div>
              <Divider/>
              <TaskForm
                isNewTask={isNewTask}
                task={task}
                handleCancel={handleCancel}
              />
            </Card>
          </Grid>
        </Grid>
      }
    </>
  );
}

export default TaskUpdate;
