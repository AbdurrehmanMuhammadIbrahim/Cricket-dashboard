import React from "react";
import axios from 'axios';
import "./../../App.css"
import { baseUrl } from "./../../core";
import { useState, useEffect } from "react"
import io from 'socket.io-client';
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid'
import { Container } from 'react-bootstrap';

function UserPanel() {
  // let history = useHistory();
  // let { dispatch } = useContext(GlobalContext);
  const [score, setScore] = useState({});

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/data`, {
    })
      .then(res => {
        
        console.log(res.data);
      
        // setPosts(res.data)
        setScore(res.data)
        // console.log(arr)
      });

    // return () => {
    //   // console.log("post shown");
    // };
  }, []);

  useEffect(() => {
    // const socket = io("heroku path dedena");
    // to connect with locally running Socker.io server
     const socket = io("http://localhost:5000");
    socket.on('connect', function () {
      console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on('matchData', function (data) {
      console.log(data);
      // setPosts((prev) => [data, ...prev])
      setScore(data)
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <div className="background">
        <Container >
          <br /> <br />
          <div  className="background1">
            <h2 >Tournament ={score.tournament}</h2>
             <h2 >Run/Out =  {score.RunOut}</h2>
              <h2  >Overs  = {score.over}</h2><hr/>
              
                 
                    <h2 style={{ fontSize: "38px", fontFamily: "Times New Roman" }}>Player* = {score.Playerone}</h2>
                 
                
              
                  <h1 style={{ fontSize: "34px",   fontFamily: "Times New Roman" }}>Runs = {score.plyonerun}</h1><hr/>
               
              
              
                  <h1 style={{ fontFamily: "Times New Roman",fontSize: "38px", }}>Player = {score.playertwo}  </h1>
                
              
                  <h1 style={{ fontFamily: "Times New Roman" }}>Runs =  {score.plytworun}</h1><hr/>
             
              
                  <h1 style={{ fontSize: "34px",   fontFamily: "Times New Roman" }}>Runrate = {score.Runrate}</h1><hr/>
                
             
                  {/* <h1 style={{ fontFamily: "Times New Roman" }}>{posts.Runrate}  </h1> */}
                
                  <h1 style={{ fontFamily: "Times New Roman" }}>Baller* =  {score.baller1}</h1>
             
              
                  <h5 style={{ fontFamily: "Times New Roman" }}>BallerOvers= {score.balOneOver}</h5>
               
                  <h5 style={{ fontFamily: "Times New Roman" }}>Runs=  {score.balOneRun}</h5>
                
                  <hr/>
              
                  <h1 style={{ fontFamily: "Times New Roman" }}>Baller =  {score.baller2}</h1>
               
                  
                  <h5 style={{ fontFamily: "Times New Roman" }}>BallerOvers= {score.balTwoOver}</h5>
               
             
                  <h5 style={{ fontFamily: "Times New Roman" }}>Runs=  {score.balTwoRun} </h5><hr/>

               
                 
                    <h2 style={{ fontSize: "24px", fontFamily: "Times New Roman" }}>Target: {score.Targets}</h2>
                  
               
            
            
                  
              
           
          </div>
          <div>
            <br /><br /><br />
          </div>
        </Container>
      </div>
    </>
  );
}

export default UserPanel;