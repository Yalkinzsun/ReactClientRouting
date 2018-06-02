/*

const Yalo = () =>
	(<div><h1>Галерея</h1><p>Рисунки</p></div>);

export default Gallery; */


import React from 'react';
import Gallery from 'react-photo-gallery';


class Sample extends React.Component {
    render() {

	return (
        <div> <h2>Галерея</h2>
	    <Gallery photos={PHOTO_SET} />
	    </div>
	);
    }
}
const PHOTO_SET = [
  {
    src: 'https://s8.hostingkartinok.com/uploads/images/2018/06/d66ad6142baf09303b72a02b9c0c1682.png',
    width: 1,
    height: 1
  },
  
  {
    src: './img/piter-js.png',
    width: 1,
    height: 1
  },

  {
    src: './img/piter-js.png',
    width: 1,
    height: 1
  }
];

export default Sample;
