import React from 'react';
import { createStore } from 'redux';

const ReduxTutorial = () => {

  const speakAction = (text) => {
    return {
      type: 'SPEAK',
      text
    }
  };

  const speakReducer = (state={}, action) => {
    switch(action.type){
      case 'SPEAK':
        return {text:action.text};
      default:
        return state;
    }
  }

  const store = createStore(speakReducer);

  store.subscribe(() => {
    console.log("State changed");
    console.log(store.getState());
  })

  store.dispatch(speakAction("hello"));
  store.dispatch(speakAction("hi"));

  return (
    <div>ReduxTutorial</div>
  )
}

export default ReduxTutorial;