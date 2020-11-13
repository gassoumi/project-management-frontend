export default function (store) {
  return (next) => action => {
    if (process.env.NODE_ENV !== 'production') {
      // console.group(action.type);
      console.groupCollapsed(action.type);
      console.info('dispatching', action);
      // next = store.dispatch
      let result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    } else {
      return next(action);
    }
  };
}




