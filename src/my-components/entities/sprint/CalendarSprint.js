import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar';
import 'react-big-calendar/lib/sass/styles.scss';
import moment from "moment";
import {connect} from "react-redux";
import {Selector} from '../index';
import SprintUpdate from './SprintUpdate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Loading from '../common/Loading';
import GreenButton from "../common/GreenButton";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {fetchSprints, deleteSprintById, fetchCalenderSprints, clearCacheSprint} from "../../../redux/actions";


let allViews = Object.keys(Views).map(k => Views[k]);

const ColoredDateCellWrapper = ({children}) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  });

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const getMinDate = (events) => {
  const dates = events.map(event => event.start);
  if (dates.length > 0)
    return new Date(Math.min.apply(null, dates));
  return new Date(2020, 1, 1);
};

const eventPropGetter = (event, start, end, isSelected) => {
  let newStyle = {
    color: 'white',
    borderRadius: "0px",
    border: "none"
  };

  const value = event.status;
  let classes = "badge badge-pill badge-";
  switch (value) {
    case "Planifiè":
      newStyle.backgroundColor = "#28a745";
      classes += "success";
      break;
    case "En Cours":
      newStyle.backgroundColor = "#6c757d";
      classes += "secondary";
      break;
    case "Cloturé":
      newStyle.backgroundColor = "#007bff";
      classes += "primary";
      break;
    case "Archivé":
      newStyle.backgroundColor = "#ffc107";
      classes += "warning";
      break;
    default:
      newStyle.backgroundColor = "#6c757d";
      classes += "secondary";
  }

  return {
    style: newStyle,
    // className : classes,
  };
};

const getEvents = sprints => {
  return sprints.map(sprint => {
    return {
      id: sprint.id,
      title: sprint.name,
      start: moment(sprint.desired_at).toDate(),
      end: moment(sprint.desired_at).add(1, 'h').toDate(),
      status: sprint.status
    }
  });
};

const myDefaultMessages = {
  date: 'Date',
  time: 'temps',
  event: 'Sprint',
  allDay: 'toute la journée',
  week: 'Semaine',
  work_week: 'Work Week',
  day: 'Journee',
  month: 'Mois',
  previous: 'Precedent',
  next: 'Suivant',
  yesterday: 'Hier',
  tomorrow: 'Demain',
  today: "Aujourd'hui",
  agenda: 'Agenda',
  noEventsInRange: 'Il n\'y a aucun sprint dans cette plage.',
  showMore: function showMore(total) {
    return "+" + total + " plus";
  }
};


const defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: function showMore(total) {
    return "+" + total + " more";
  }
};

const CalenderSprint = ({
                          sprints, canEdit, fetchSprints, fetchCalenderSprints,
                          deleteSprintById, isFetching, pageSize, clearCacheSprint
                        }) => {

  const [open, setOpen] = useState(false);
  // we must use useState because sprint have useEffect that reset the value
  // if we use regular varialble const sprint = {} and send it to sprintUpdate , we have a bug
  // the value will reset even sprint is not added to the server
  // see discussion component we don't have reset to see the difference
  // in sprintUpdate we need reset because in Sprint component we have (add and edit sptint) in the same component
  // not like Discussion vomponent
  const [sprint, setSprint] = useState({});

  const views = {
    MONTH: 'month',
    WEEK: 'week',
    WORK_WEEK: 'work_week',
    DAY: 'day',
    AGENDA: 'agenda'
  };

  const [view, setView] = useState(views.MONTH);

  useEffect(() => {
    // fetchSprints(1, pageSize);
    // .format("YYYY-MM-DDTHH:mm")
    // we must clone the data
    const startMouth = moment().startOf('month');
    const endMouth = moment().endOf('month');
    // console.log(startMouth);
    // console.log(endMouth);
    const startWeekMouth = moment(startMouth.startOf('week')).format("YYYY-MM-DDTHH:mm");
    const endWeekMouth = moment(endMouth.endOf('week')).format("YYYY-MM-DDTHH:mm");
    const dateQueryFilter = `desired_at__lte=${endWeekMouth}&desired_at__gte=${startWeekMouth}`;
    fetchCalenderSprints(dateQueryFilter);
    // console.log(startWeekMouth);
    // console.log(endWeekMouth);
    return () => {
      clearCacheSprint();
    }
  }, []);

  const createNewSprint = () => {
    setOpen(true);
  };

  const events = getEvents(sprints);

  const handleNavigate = (date, e, k, m) => {
    // console.log(date);
    // console.log(e);
    // console.log(k);
  };

  const handleOnView = (view) => {
    setView(view);
  };

  const handleRangeChange = (date, e, k, m) => {
    // console.log(date);
    let start = null;
    let end = null;
    if (Array.isArray(date)) {
      // trigger if the view is week or day
      // console.log("it is an array");
      if (date.length > 0) {
        start = date[0];
        end = date[date.length - 1];
      }
    } else {
      if ('start' in date && 'end' in date) {
        start = date.start;
        end = date.end;
      }
    }
    if (start && end) {
      const startFormat = moment(start).format("YYYY-MM-DDTHH:mm");
      const endFormat = moment(end).format("YYYY-MM-DDTHH:mm");
      const dateQueryFilter = `desired_at__lte=${endFormat}&desired_at__gte=${startFormat}`;
      fetchCalenderSprints(dateQueryFilter);
    }
  };


  return (
    <Grid container spacing={2}>
      <SprintUpdate
        fetchSprints={fetchSprints}
        isNew
        sprint={sprint}
        open={open}
        handleClose={() => setOpen(false)}/>
      <Grid container item spacing={2}>
        <Grid item xs={6} container justify={"flex-start"}>
        </Grid>
        <Grid xs={6} item container justify={"flex-end"}>
          {canEdit &&
          <GreenButton startIcon={<AddCircleOutlineIcon/>}
                       onClick={createNewSprint}
                       type="button"
                       variant="contained"
                       color={"primary"}
          >
            Ajouter un sprint
          </GreenButton>}
        </Grid>
      </Grid>
      {isFetching ? <Loading/> :
        <Grid item xs={12}>
          <Grid container item spacing={3}>
            <Grid item xs={10}>
              <Paper elevation={1}>
                <Calendar
                  style={{
                    width: "100%",
                    height: 500,
                  }}
                  events={events}
                  // views={allViews}
                  // ('month'|'week'|'work_week'|'day'|'agenda')
                  views={['month', 'week', 'day', 'agenda']}
                  step={60}
                  popup
                  showMultiDayTimes
                  view={view}
                  onView={handleOnView}
                  // max={dates.add(dates.endOf(new Date(2019, 17, 1), 'day'), -1, 'hours')}
                  // defaultDate={getMinDate(events)}
                  // components={{
                  //     timeSlotWrapper: ColoredDateCellWrapper,
                  // }}
                  localizer={localizer}
                  eventPropGetter={eventPropGetter}
                  messages={myDefaultMessages}
                  onNavigate={handleNavigate}
                  onRangeChange={handleRangeChange}
                />
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper elevation={1}>
                <List dense={true}>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{color: "#6c757d"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="En cours"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{color: "#28a745"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Planifié"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{color: "#007bff"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Cloturé"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecordIcon
                        style={{color: "#ffc107"}}/>
                    </ListItemIcon>
                    <ListItemText
                      primary="Archivé"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      }
    </Grid>
  );

};

/*
   Event {
     title: string,
     start: Date,
     end: Date,
     allDay?: boolean
     resource?: any,
   }
*/

const mapStateToProps = (state) => {
  const {
    pagination: {sprints},
  } = state;
  const listSprint = Selector.getSprintsPage(state);

  return {
    sprints: listSprint,
    nextPageUrl: sprints.nextPageUrl,
    page: sprints.page,
    isFetching: sprints.isFetching,
    canEdit: state.auth.user.is_staff,
    count: sprints.count,
    pageSize: sprints.pageSize,
  };
};

export default connect(mapStateToProps, {
  fetchSprints,
  deleteSprintById,
  clearCacheSprint,
  fetchCalenderSprints
})(CalenderSprint);
