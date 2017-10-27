import React, { Component } from 'react';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.jpg';
import six from '../images/six.jpg';
import seven from '../images/seven.jpg';
import eight from '../images/eight.jpg';
import nine from '../images/nine.jpg';
import ten from '../images/ten.jpg';
import eleven from '../images/eleven.jpg';
import twelve from '../images/twelve.jpg';
import thirteen from '../images/thirteen.jpg';
import fourteen from '../images/fourteen.jpg';
import fifteen from '../images/fifteen.jpg';
import sixteen from '../images/sixteen.jpg';
import seventeen from '../images/seventeen.jpg';


var images = [one,
              two,
              three,
              four,
              five,
              six,
              seven,
              eight,
              nine,
              ten,
              eleven,
              twelve,
              thirteen,
              fourteen,
              fifteen,
              sixteen,
              seventeen
            ]

class Home extends Component {
    constructor(props){
        super(props)
    }

    randomizeBackground() {
        var randomNumber = Math.floor(Math.random() * images.length);
        return images[randomNumber];
        
    }
    
    render() {
    const style = {
        body: {
            backgroundImage: `url(${this.randomizeBackground()})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "91vh",
            overflow: "hidden"
        },
        div:{
            display:"flex",
            justifyContent:"center"
        },
        h1:{
            display:"flex",
            justifyContent:"center",
            marginTop: 0,
            color: "white",
            verticalAlign: "text-bottom"
        },
        h3: {
            textAlign: "center",
            color: "white",
        },

    }
    console.log(eight)
       return (
            <div style={style.body}> 
                <h1 style={style.h1}> Welcome to Real Deal. </h1>
                <h3 style={style.h3}> "You only get out what you put in - Anonymous"</h3>
            </div>
        );
    }
}

export default Home;
