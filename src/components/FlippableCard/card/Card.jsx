import React from 'react'
import "./Card.css";
import {one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen} from "../../../assets/index"

const card = (props) => {
  const onClick = props.onClick;
  let number = props.number;

  function background(){
    switch (number){
      case "1":
        return one;
      case "2":
        return two;
      case "3":
        return three;
      case "4":
        return four;
      case "5":
        return five;
      case "6":
        return six;
      case "7":
        return seven;
      case "8":
        return eight;
      case "9":
        return nine;
      case "10":
        return ten;
      case "11":
        return eleven;
      case "12":
        return twelve;
      case "13":
        return thirteen;
      case "14":
        return fourteen;
      case "15":
        return fifteen;
      case "16":
        return sixteen;
      default:
        break;
    }
  }

  const caseStudies = ["Case Study 1: Digital Marketing", "Case Study 2: Awareness on Insurance Product"]

  function caseStudy(){
    switch (number){
      case "1":
        return caseStudies[0];
      case "2":
        return caseStudies[1];
      case "3":
        return caseStudies[0];
      case "4":
        return caseStudies[1];
      case "5":
        return caseStudies[0];
      case "6":
        return caseStudies[0];
      case "7":
        return caseStudies[1];
      case "8":
        return caseStudies[1];
      case "9":
        return caseStudies[1];
      case "10":
        return caseStudies[1];
      case "11":
        return caseStudies[0];
      case "12":
        return caseStudies[1];
      case "13":
        return caseStudies[0];
      case "14":
        return caseStudies[0];
      case "15":
        return caseStudies[1];
      case "16":
        return caseStudies[0];
      default:
        break;
    }
  }
    
    return (
        <div className="card" onClick={onClick}>
          <div className="card-front" style={{backgroundImage: `url(${background()})`}}>Choice {number}</div>
          <div className="card-back">{caseStudy()}</div>
        </div>
      );
}

export default card

//TODO: Pass in parameters and create multiple cards with different answer behind