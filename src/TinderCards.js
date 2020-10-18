import React, {useState, useEffect} from 'react'
import TinderCard from "react-tinder-card";
//import GithubWidget from "./github-widget/github-widget.min.js";
import "./github-widget/github-widget.css";
import "./TinderCards.css"; 
import database from './firebase';
//  import storage from './firebase'; 
//import Firebase from "./firebaseupload";

export default function TinderCards() {
    
    //importing github widget script
    /* const script = document.createElement("script");
    script.async = true;
    script.src = "./github-widget/github-widget.min.js";
    document.head.appendChild(script); */

    const [cards, setCards] = useState([]);
    
    //code that runs based on condition (reading form Firebase)

    useEffect(()  => {

        database
        .collection("people")
        .onSnapshot((snapshot) =>  //get me a snapshot of the firebase collection
            setCards(snapshot.docs.map((doc) => doc.data()))            //doc.data is the fields from the collection. Anytime the database changes, take a snapshot of it and put it in the cards array
        ); //pulls from Firebase people collection
        //This will run ONCE when the TinderCards component loads 
    }, []); 

    
    
    
    
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
            <h1>Happy hunting!</h1>
            <div className="tinderCards__cardContainer"></div>
            {/* <div class="github-widget" data-user="ibmo96" ></div> */}
            {cards.map((card) => (
                <TinderCard
                    className="swipe"
                    key={card.name}
                    preventSwipe={["up", "down"]}
                >
                    <div 
                        style={{ backgroundImage: `url(${card.skills})` }}
                        className="Tcard"
                    >
                        <h3>{card.name}</h3>
                    </div>
                </TinderCard>
                
            ))}
            
        </div>
    )
}

