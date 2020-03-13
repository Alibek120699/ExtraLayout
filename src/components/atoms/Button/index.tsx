import React from "react";
import { ButtonTypes } from "./types";
import './index.scss';

export default function Button(props: ButtonTypes.IProps) {

  const { title, onClick, to } = props;
  console.log('asdf');

  return (
    <div>
      {
  to && onClick ? (
            <button onClick={onClick} className="button"> <a href={to}> {title} </a> </button>
          ) :
          to ? (
            <button  className="button"> <a href={to}> {title} </a> </button>
          ) : 
            <button onClick={onClick} className="button"> {title} </button>
      }

    </div>
  )

}
