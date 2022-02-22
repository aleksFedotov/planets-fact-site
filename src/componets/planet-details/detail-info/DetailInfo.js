import React from 'react';

import {
  DetailInfoList,
  DetailInfoItem,
  Parameter,
  Value,
} from './DetailInfoStyles';

const DetailInfo = (props) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      y: 25,
      transition: { duration: 1 },
    },
  };
  return (
    <DetailInfoList
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <DetailInfoItem>
        <Parameter>Rotation Time</Parameter>
        <Value>{props.planetInfo.rotation}</Value>
      </DetailInfoItem>
      <DetailInfoItem>
        <Parameter>Revolution Time</Parameter>
        <Value>{props.planetInfo.revolution}</Value>
      </DetailInfoItem>
      <DetailInfoItem>
        <Parameter>Radius</Parameter>
        <Value>{props.planetInfo.radius}</Value>
      </DetailInfoItem>
      <DetailInfoItem>
        <Parameter>Average temp</Parameter>
        <Value>{props.planetInfo.temperature}</Value>
      </DetailInfoItem>
    </DetailInfoList>
  );
};

export default DetailInfo;
