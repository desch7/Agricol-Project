import React, {useState, useEffect} from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Button,
Grid, Icon } from "@material-ui/core";

const Course = ({course,index,upvoteCourse,downvoteCourse})=>{
    
}

const Greet = () =>{
   const [courses,setCourses]= useState([
       {
        title:"React1",
        description:"Description of my first element",
        url:"www.google.com",
        courseImage:'img4.jpg',
        upvote:0,
        downvote:0
       },
       {
        title:"React2",
        description:"Description of my second element",
        url:"www.google.com",
        courseImage:'img6.jpg',
        upvote:0,
        downvote:0
       },
       {
        title:"React3",
        description:"Description of my third element",
        url:"www.google.com",
        courseImage:'img7.jpg',
        upvote:0,
        downvote:0
       }
   ]);

   const upvoteCount = (index) =>{
       const newCourses=[...courses];
       newCourses[index].upvote++;
       setCourses(newCourses);
   };

   const downvoteCount = (index) =>{
    const newCourses=[...courses];
    newCourses[index].downvote++;
    setCourses(newCourses);
    }

    return (
        <div>
            <Grid container spacing={24} style={{padding: 24}}>
                {courses.map((course, index)=>(
                    <Grid item xs={12} sm={12} lg={4} xl={3}>
                        
                    </Grid>
                ))}
            </Grid>
        </div>
    )
    
}

export default Greet;