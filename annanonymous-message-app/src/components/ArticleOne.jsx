import React from 'react'
import CreateOne from './CreateOne'
import CreateTwo from './CreateTwo'

import ArticleTwo from './ArticleTwo'
import CreateThree from './CreateThree'
import Footer from './Footer'


const ArticleOne = () => {
  return (
    <div >
        <CreateThree title="Dive into the World of Dad Jokes: A Comedic Tradition of Puns and Groans" 
         text="Dad jokes, also affectionately known as groaners, are a beloved form of humor that transcends generations. They are the cornerstone of corny humor, often delivered with impeccable timing and a straight face. Whether you're a seasoned dad joke enthusiast or just dipping your toes into the world of puns, Dad jokes offer a timeless and light-hearted comedic experience.."
         
         />

         <ArticleTwo />
        
        <CreateTwo />


        

        <CreateOne title="Quick Tips..." 
        textTwo="Start Your Collection: Begin by collecting your favorite dad jokes. You can jot them down in a notebook, save them on your computer, or even record them on your phone. The key is to gather a repertoire of jokes that you can share on various occasions."    
            textThree="Share the Laughter: Dad jokes are meant to be shared. Whether you're at a family gathering, chatting with friends, or simply need to lighten the mood, don't hesitate to unleash your best dad jokes. The beauty of dad jokes is that they're universally understood, and their cheesy charm can bring a smile to anyone's face."
            textFour="Online Dad Joke Communities: Join online communities and forums dedicated to dad jokes. Here, you can discover a wealth of jokes, share your own creations, and connect with like-minded jokesters. These communities often serve as a source of inspiration and a platform for spreading laughter."
             textFive="Social Media: Share your dad jokes on social media platforms like Twitter, Instagram, or Facebook. You can use hashtags like #DadJokes to connect with a broader audience and spread the joy of pun-filled humor."
        />

        <Footer />

    </div>
  )
}

export default ArticleOne
