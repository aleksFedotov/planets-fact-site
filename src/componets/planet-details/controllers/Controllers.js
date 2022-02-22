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

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1 },
    },
  };
  return (
    <ContollersContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
