import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
      {config.map((configItem,index)=>{
        return <th key={Math.random()*index}>{configItem.title}</th>
      })}
    </tr>
    </thead>
    <tbody>
        {data.map((dataItem,index)=>{
          return <tr key={Math.random()*index}>{config.map(configItem=>{
            if(configItem.component==undefined)
            return <td key={dataItem[configItem.field]}> {dataItem[configItem.field]}</td>
            else
            return <td key={Math.random()*index}><configItem.component data={dataItem}></configItem.component></td>

            })}
            </tr>
          })}
   
    </tbody>
  </table>
);

export default Grid;