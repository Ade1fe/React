import React from 'react'
import CreateOne from './CreateOne'
import CreateTwo from './CreateTwo'

import ArticleTwo from './ArticleTwo'
import CreateThree from './CreateThree'
import Footer from './Footer'


const ArticleOne = () => {
  return (
    <div >
        <CreateThree title="Create Fill in the Blanks Games" 
         text="Create your own online Fill in the 
        Blanks Game or search among the thousands 
        of Fill in the Blanks Games that other 
        Educaplay users have created. 
        You can also generate Fill in the
         Blanks Games for print."
         
         />

         <ArticleTwo />
        
        <CreateTwo />


        

        <CreateOne title="How does it work..." 
        textTwo="The Fill in the Blanks Game activity consists of filling in the missing words of a given text. The text can be phrases, sentences, or even full paragraphs.
            There are two methods to fill in the blanks:"    
            textThree="Clicking on the missing words from an jumbled list in the sidebar. The words must be chosen in the order they appear in the text. If you make a mistake, click on the incorrect word to return it to the word list.
            Typing each word into the blanks."
            textFour="The difficulty level of the activity will vary depending on how many words are missing from the text. Some activities will only be missing a few words and will be relatively easy to complete. Other activities will present more of a challenge by requiring you to completely rewrite the sentence from the mixed up words.
             This activity is often used in language courses and children's classes."
             textFive="It is an interesting activity to strengthen concepts and their meanings, with a greater difficulty if the answer has to be whole written (and not clicked on)."
        />

        <Footer />

    </div>
  )
}

export default ArticleOne