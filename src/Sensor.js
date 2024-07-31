import React from 'react';

const Sensor = ({ name, isOnline }) => {
  
    return !isOnline?null:// 如果感測器不在線，則不渲染該組件
        <tbody key={name}>
            <tr><td>{name}</td><td>在線</td></tr>
        </tbody>
};

export default Sensor;
