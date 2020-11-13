import React, {useState, useEffect} from 'react';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import {makeStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

// https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component
function ScrollToTop(props) {
  const [show, setShow] = useState(false);
  const classes = useStyles();


  useEffect(() => {
    let active = true;
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        if (active) {
          setShow(true);
        }
      } else {
        if (active) {
          setShow(false);
        }
      }
    };
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
    return () => {
      active = false;
      document.removeEventListener("scroll", function (e) {
        toggleVisibility();
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <> {
      show &&
      (
        <Fab className={props.className ? props.className : classes.fab}
             color="inherit"
             aria-label="up"
             onClick={scrollToTop}>
          <UpIcon/>
        </Fab>
      )
    }
    </>
  )
}


export default ScrollToTop

