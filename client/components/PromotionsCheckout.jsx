import React, { Component } from 'react';
import { Segment, Grid, Image, Button, Icon, Form, Radio, Card, Header, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppBar from './AppBar.jsx';

const locationDetails = [
    {
        header: 'Aquaberry ',
        description: 'Plot No 1, Billi Graham Avenue, California',
        // meta: 'qusos@hybrid.com',
    }
]

export default class PromotionsCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            deliveryDate:false,
            dateValue:'',
            currentDateYear:'',
        }
    }

    componentWillMount() {
        var d = new Date();
        var currentDate = d.getDate();
        var currentDateYear = currentDate.toString().slice(4, 16);

        d.setDate(d.getDate() + 1);
        var x = d.toString().slice(4, 16);
        this.setState({
            currentDateYear,
            dateValue: x
        });
    }

    handleChange = (e, { value }) => this.setState({ value, deliveryDate:true})

    render() {
        return (
            <div style={{overflow:'hidden'}}>
            {/* <div className="bgImageSignin" style={{ overflow: "hidden",  backgroundImage: 'url(./client/assets/Images/signin4.jpeg)' }} > */}
                <AppBar />

                <Grid>
{/*
                    <Grid.Row only='mobile' className="card_smartStoreCheckout" style={{ marginTop: "15%" }}>
                        <Grid.Column width={16} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <span >
                               <center> <h2> Thank you </h2></center>
                            </span>
                            <center><h3> for shopping in Smart Store</h3></center>
                        </Grid.Column>
                    </Grid.Row> */}

                    <Grid.Row only='mobile' className="card_smartStoreCheckout" style={{ marginTop: "15%" }}>
                        <Grid.Column width={1} />
                        <Grid.Column width={14}>
                            <Header style={{fontFamily:'Raleway'}}> Select a preferred delivery method </Header>
                        </Grid.Column>
                        <Grid.Column width={1} />

                    </Grid.Row>

                    <Grid.Row only='mobile' style={{marginTop:"0%"}}>
                        <Grid.Column width={1} />
                        <Grid.Column width={7}  >
                            <Segment>
                                <Form>
                                    <Form.Field style={{fontWeight:"bold", textTransform:"uppercase"}}>
                                        <Radio label='Deliver' name='radioGroup' value='Deliver' checked={this.state.value === 'Deliver'} onChange={this.handleChange}/>
                                    </Form.Field>
                                </Form>
                            {/* You have selected <b>{this.state.value}</b> */}
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={7}  >
                            <Segment>
                                <Form>
                                    <Form.Field style={{ fontWeight: "bold", textTransform: "uppercase"}}>
                                        <Radio label='Collect' name='radioGroup' value='Collect' checked={this.state.value === 'Collect'} onChange={this.handleChange} />
                                    </Form.Field>
                                </Form>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={1} />
                    </Grid.Row>
                    {
                        this.state.deliveryDate?
                        (
                        <Grid>
                            <Grid.Row only='mobile' >
                                <Grid.Column width={1} />
                                <Grid.Column width={14} >
                                            <center><h3 style={{ fontFamily: 'Raleway'}}> Your can pickup your order on {this.state.dateValue}</h3></center>
                                </Grid.Column>
                                <Grid.Column width={1} />
                            </Grid.Row>

                            <Grid.Row only='mobile' className="card_orderDetails" style={{ marginTop: "0%" }}>
                                <Grid.Column width={16} style={{ fontWeight: "bold", textTransform: "capitalise", letterSpacing: "2px" }}>
                                    <p className="lightGreyText" style={{ fontSize: "85%" }}>ORDER NO: 01129821</p>
                                    {/* <p className="lightGreyText" style={{ position: 'right', fontSize: "75%" }}>Placed on {this.state.currentDateYear}</p> */}
                                    <Divider />
                                </Grid.Column>
                                {/* <Divider /> */}
                                <Grid.Column width={16} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                            <Image size='tiny' style={{ borderRadius: "10%", height: '100%' }} src='./client/assets/Images/Newistock/PromoCheckout/iStock-847389916.jpg' />
                                    <p style={{ marginLeft: "3%" }}>
                                                <h4 className="darkText" >White dress, Beige sandals & Red handbag, Beige Hat</h4>
                                        <p className="greyText" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "90%", color: "#9E9E9E" }}><span><Header>$70</Header></span>   <span><span style={{ fontWeight: "bold" }}>Quantity</span> 3 Items</span> </p>
                                        <p style={{leeterSpacing:"1px"}}><Icon color="orange" name="dot circle outline" />Processing</p>
                                    </p>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row only='mobile' >
                                <Grid.Column width={3} />
                                <Grid.Column width={10}>
                                            <center><h3 style={{ fontWeight: "bold", fontFamily:'Raleway' }}> You can collect it from </h3></center>
                                </Grid.Column>
                                <Grid.Column width={3} />
                            </Grid.Row>

                            <Grid.Row className='' style={{ marginTop: "-2%" }} only='mobile'>
                                <Grid.Column width={2} />
                                    <Grid.Column width={12} style={{ textAlign: "center", fontWeight: "normal", letterSpacing: "1px", fontFamily: "Raleway" }} >
                                        <Card.Group style={{fontFamily:'Raleway'}} items={locationDetails} />
                                    </Grid.Column>
                                    <Grid.Column width={2} />
                            </Grid.Row>

                            <Grid.Row only='mobile' >
                                <Grid.Column width={1} />
                                <Grid.Column width={14}>
                                    <center><h4 style={{ fontFamily:'Raleway'}}> Balance amount in your digi wallet is <h3>$32</h3> </h4></center>
                                </Grid.Column>
                                <Grid.Column width={1} />
                            </Grid.Row>
                        </Grid>
                        )
                        :null
                    }

                </Grid>
            </div>

        );
    }
}
