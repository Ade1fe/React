import React from 'react'
import CreateOne from './CreateOne'
import CreateTwo from './CreateTwo'

import ArticleTwo from './ArticleTwo'
import CreateThree from './CreateThree'
import Footer from './Footer'


const ArticleOne = () => {
  return (
    <div >
        <CreateThree title="Create Tic Tac Toe  Games" 
         text="Create your own online Tic Tac Toe or search among the thousands 
        of Tic Tac Toe Games that other 
        Educaplay users have created. 
        You can also generate Tic Tac Toe  for print."
         
         />

         <ArticleTwo />
        
        <CreateTwo />


        

        <CreateOne title="How to Play..." 
        textTwo="Objective: The goal of this game is to win Tic Tac Toe by getting three of your marks (either X or O) in a row horizontally, vertically, or diagonally."    
            textThree="Game Board: The Tic Tac Toe board consists of a 3x3 grid where players take turns placing their X or O marks."
            textFour="Turns: Players take turns playing, with one as X and the other as O. The player who answers a question correctly gets to make their move on the board."
             textFive="Winning: The game can be won by either getting three marks in a row or by playing until the board is full. If you choose to play until the board is full, the player with the most marks in a row at the end wins."
        />

        <Footer />

    </div>
  )
}

export default ArticleOne
