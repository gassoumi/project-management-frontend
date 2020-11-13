import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollToTop = ({children, location}) => {
  // the old one
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return children || null;
};

export default withRouter(ScrollToTop);
