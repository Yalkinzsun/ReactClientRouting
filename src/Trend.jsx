import React from 'react';
import Trend from 'react-trend';

const Trendino = () => (

   <div><h2>Тренд</h2>
  <Trend
    smooth
    autoDraw
    autoDrawDuration={3000}
    autoDrawEasing="ease-out"
    data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
    gradient={['#f72047', '#ffd200', '#1feaea']}
    radius={5.5}
    strokeWidth={1.6}
    strokeLinecap={'round'}
  /></div> 
);

export default Trendino;