import React from 'react';

import {
  DetailInfoList,
  DetailInfoItem,
  Parameter,
  Value,
} from './DetailInfoStyles';

const DetailInfo = ({ planetInfo }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
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
        <Value>{planetInfo.rotation}</Value>
      </DetailInfoItem>
      <DetailInfoItem>
        <Parameter>Revolution Time</Parameter>
        <Value>{planetInfo.revolution}</Value>
      </DetailInfoItem>
      <DetailInfoItem>
        <Parameter>Radius</Parameter>
        <Value>{planetInfo.radius}</Value>
      </DetailInfoItem>
      <DetailInfoItem>
        <Parameter>Average temp</Parameter>
        <Value>{planetInfo.temperature}</Value>
      </DetailInfoItem>
    </DetailInfoList>
  );
};

export default DetailInfo;
