import React, {useState} from 'react'
import TinderCard from "react-tinder-card";
//import GithubWidget from "./github-widget/github-widget.min.js";
import "./github-widget/github-widget.css";
import "./TinderCards.css"; 

function TinderCards() {
    
    //importing github widget script
    /* const script = document.createElement("script");
    script.async = true;
    script.src = "./github-widget/github-widget.min.js";
    document.head.appendChild(script); */

    const [cards, setCards] = useState([
        {
            name: 'Ibra',
            skills: require('./images/skills_img.png'),
        },
        {
            name: 'Nick',
            skills: require('./images/skills_img.png'),
        },  
    ]);
    
    //<div class="github-widget" data-user="some-github-username"></div>
    //const cards = [];

    //BAD
        //const cards = [];
        //cards.push('a','b');
    
    //GOOD (REACT METHOD)
        //setCards([...cards, 'a', 'b'])        ...cards means that we retain whatever was in the array earlier (spread operator in ES6)
    
    //reason for this is that so React can dynamically adjust the components according to new data input into the array 

    /* 
    
    <GithubWidget>
                <div class="github-widget" data-user="ibra96" ></div>
            </GithubWidget>
    */

    return (
        <div>
            <h1>Hub cards</h1>
            <div className="tinderCards__cardContainer"></div>
            <div class="github-widget" data-user="ibmo96" ></div>
            {cards.map((card) => (
                <TinderCard
                    className="swipe"
                    key={card.name}
                    preventSwipe={["up", "down"]}
                >
                    <div 
                        style={{ backgroundImage: `url(${card.skills})` }}
                        className="card"
                    >
                        <h3>{card.name}</h3>
                    </div>
                </TinderCard>
                
            ))}
            
        </div>
    )
}


export default TinderCards
