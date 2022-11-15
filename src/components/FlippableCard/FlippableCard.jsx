import React, {useEffect, useState} from 'react';
import './FlippableCard.css';
import Card from './card/Card';
import {CSSTransition} from 'react-transition-group';


const FlippableCard = (props) => {
    const [flip, setFlip] = useState(true);
    const number = props.number;

  return (
    <div className="flippable-card-container">
            <CSSTransition
                in={flip}
                timeout={1000}
                classNames='flip'
            >
                <Card 
                    onClick={() => {
                        setFlip((v) => !v)
                    }}
                    number = {number}
                />

            </CSSTransition>
    </div>
  )
}

export default FlippableCard
