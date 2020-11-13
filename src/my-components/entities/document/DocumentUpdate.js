import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import DocumentForm from './DocumentForm';
import axios from "axios";
import {SuspenseLoading} from "../../../Routes";
import {Card, Divider} from "@material-ui/core";

// TODO
// handle not found
function DocumentUpdate(props) {


  const isNew = !props.match.params || !props.match.params.id;
  // create state that receive props instead of using the props directly
  // it is the same
  // const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);
  const [document, setDocument] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    let active = true;

    const fetchDocument = async (id) => {
      try {
        const responseDocument = await axios.get(`/api/documents/${id}/`);
        const taskId = responseDocument.data.task;
        let responseTask = null;
        if (taskId) {
          responseTask = await axios.get(`/api/tasks/${taskId}/`);
        }
        if (active) {
          const newDocument = {
            ...responseDocument.data,
            task: responseTask && responseTask.data,
          };
          setDocument(newDocument);
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
      fetchDocument(id);
    } else {
      setDocument({});
    }

    return () => {
      active = false;
    }
  }, [isNew]);


  const handleCancel = () => {
    props.history.push("/document" + props.location.search);
    //props.history.goBack();
  };

  return (
    <>
      {!isNew && !isLoaded ?
        <SuspenseLoading/> :
        <>
          <Grid container justify={"center"}>
            <Grid item xs={12} lg={9}>
              <Card className="mb-4">
                <div className="p-4 font-size-lg font-weight-bold">
                  {isNew ? "Ajouter un nouveau " : "Modifier le "} document
                </div>
                <Divider/>
                <DocumentForm
                  isNew={isNew}
                  document={document}
                  handleCancel={handleCancel}
                />
              </Card>
            </Grid>
          </Grid>
        </>
      }
    </>
  );
}

export default DocumentUpdate;
