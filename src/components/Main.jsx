import React, { useState, useEffect } from 'react';
import Game from './Game'
// import Running from './components/running'

export default function Main(){
    return(
        <div>
            {/* <h1>Lets Whack A Minion!</h1> */}
           
            <Game />
            {/* <Running /> */}
        </div>
    )
}