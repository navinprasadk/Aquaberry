import React from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AppBar from './AppBar.jsx';

const VirtualFitting = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <AppBar/>
      <Grid>
        <Grid.Row style={{marginTop:'10%'}}>
          <Grid.Column width={16}>
            <center>
              <Image src='./client/assets/Images/istock/vricon.png'/>
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <center>
              <span style={{fontFamily:'Raleway',fontWeight:'bold',fontSize:'18px'}}>Click here to experiece the virtual fitting room.</span>
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <center>
              <Link to='/wishList'>
                <Button style={{
                  backgroundColor: "#DF4B37",
                  color: "white",
                  boxShadow: "7px 16px 24px #eee",
                  letterSpacing: "2px"
                }} >Back</Button>
              </Link>
            </center>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default VirtualFitting;
