import React from 'react'
import MainLayout from './../Layouts/MainLayout';
import MainContent from './../components/MainContent';
import BlMainContent from '../components/BlMainContent';
import Notification from '../components/Notification';


const BlogPage = () => {
  return (
   <MainLayout>
    <MainContent/>
    <BlMainContent />
   
<Notification />
   </MainLayout>
  )
}

export default BlogPage
