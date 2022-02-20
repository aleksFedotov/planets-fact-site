import React from 'react';

import {
  DetailInfoList,
  DetailInfoItem,
  Parameter,
  Value,
} from './DetailInfoStyles';

const DetailInfo = (props) => {
  return (
    <DetailInfoList>
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
