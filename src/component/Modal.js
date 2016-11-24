import React from 'react';


export default function(props) {
 return (
   <div className="overlay" >
    <div className="modal">
      <h1> { props.header } </h1>
      {props.children}
      <footer> {props.footer} </footer>
    </div>
   </div>
 );
}