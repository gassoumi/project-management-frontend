import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProjectForm from './ProjectForm';
import Grid from "@material-ui/core/Grid";
import { Card, Divider } from "@material-ui/core";
import { SuspenseLoading } from "../../../Routes";

function ProjectUpdate(props) {

  const isNew = !props.match.params || !props.match.params.id;
  const [project, setProject] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    //console.log(isNewProject);
    let active = true;

    const fetchProject = async (id) => {
      try {
        const response = await axios.get(`/api/projects/${id}/`);
        if (active) {
          setProject(response.data);
        }
      } catch (e) {
        console.log(e);
      }
      if (active) {
        setIsLoaded(true);
      }
    };

    if (!isNew) {
      const id = props.match.params.id;
      fetchProject(id);
    } else {
      setProject({});
    }

    return () => {
      active = false;
    }
  }, [isNew]);

  const cancel = () => {
    props.history.goBack();
    // props.history.push("/project" + props.location.search)
  };

  return (
    <>
      {!isNew && !isLoaded ?
        <SuspenseLoading /> :
        <>
          <Grid container justify={"center"}>
            <Grid item xs={12} lg={9}>
              <Card className="mb-4">
                <div className="p-4 font-size-lg font-weight-bold">
                  {isNew ? "Add a new" : "Edit the "} project
                </div>
                <Divider />
                <ProjectForm
                  project={project}
                  isNew={isNew}
                  cancel={cancel} />
              </Card>
            </Grid>
          </Grid>
        </>
      }
    </>
  );
}


export default ProjectUpdate;
