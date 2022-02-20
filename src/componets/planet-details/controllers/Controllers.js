import React from 'react';

import {
  ContollersContainer,
  Controller,
  Number,
} from '../controllers/ControllersStyles';

const Controllers = (props) => {
  const { changeView, currentView } = props;
  const changeViewHandler = (e) => {
    changeView(e.target.dataset.type);
  };
  return (
    <ContollersContainer>
      <Controller
        data-type="overview"
        onClick={changeViewHandler}
        isActive={currentView === 'overview' && true}
        planet={props.planet}
      >
        <Number>01</Number>
        overview
      </Controller>
      <Controller
        data-type="structure"
        onClick={changeViewHandler}
        isActive={currentView === 'structure' && true}
        planet={props.planet}
      >
        <Number>02</Number>
        internal structure
      </Controller>
      <Controller
        data-type="geology"
        onClick={changeViewHandler}
        isActive={currentView === 'geology' && true}
        planet={props.planet}
      >
        <Number>03</Number>
        surface geology
      </Controller>
    </ContollersContainer>
  );
};

export default Controllers;
