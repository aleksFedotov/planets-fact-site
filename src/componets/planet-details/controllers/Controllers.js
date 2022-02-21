import React from 'react';

import {
  ContollersContainer,
  Controller,
  Number,
} from '../controllers/ControllersStyles';

const Controllers = (props) => {
  const { changeView, currentView, width } = props;
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
        role="button"
      >
        <Number>01</Number>
        {'overview'}
      </Controller>
      <Controller
        data-type="structure"
        onClick={changeViewHandler}
        isActive={currentView === 'structure' && true}
        planet={props.planet}
        role="button"
      >
        <Number>02</Number>
        {width >= 700 ? 'internal structure' : 'structure'}
      </Controller>
      <Controller
        data-type="geology"
        onClick={changeViewHandler}
        isActive={currentView === 'geology' && true}
        planet={props.planet}
        role="button"
      >
        <Number>03</Number>
        {width >= 700 ? 'surface geology' : 'surface'}
      </Controller>
    </ContollersContainer>
  );
};

export default Controllers;
