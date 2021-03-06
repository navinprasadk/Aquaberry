import React, {Component} from 'react';
import { Grid, Image,Button , Icon, Dropdown, Modal, Label, Rating, List, Header} from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import Slider from 'react-slick';
import Appbar  from './AppBar.jsx';
import ProductRecommended from './ProductRecommended.jsx';
import { VoicePlayer } from 'react-voice-components';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddtoCart from './../../redux/actions/addItem.js';

const data=[{
  imageurl:'http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL250991001_Large_M_1.jpg',
  name:'black tops',
  cost:40
}]
// import Speech from 'react-speech';
class ProductDetails extends Component{
  constructor(props){
    super(props);
this.state={
  modalOpen:close,
  audioStatus:false,
  redirect: false,
  confirmationModal: false,
  addfavourite:false,
  activeIndex: 0
}
this.handleVoice = this.handleVoice.bind(this);
  }
  componentDidMount()
  {
    console.log(this.props.match.params.topName);
  }
  productInfo(){
    this.setState({modalOpen:true})
  }
  handleVoice(){
    this.setState({audioStatus:true});
    console.log('from voice')
  }
  addfav(){
    this.setState({addfavourite:true})
  }
  handleClick(e, titleProps) {
      if(titleProps == 0)
        this.setState({activeIndex:-1});
      else
      this.setState({activeIndex:0});

    }
  // selectsize(){
  //   this.setState({size:})
  // }
render(){
  var options = [{
        key: 'SIZE GUIDE',
        text: 'SIZE GUIDE',
        value: 'SIZE GUIDE'
      }, {
        key: 'US 6',
        text: 'US 6',
        value: 'US 6'
      }, {
        key: 'US 7',
        text: 'US 7',
        value: 'US 7'
      }, {
        key: 'US 8',
        text: 'US 8',
        value: 'US 8'
      },{
        key: 'US 9',
        text: 'US 9',
        value: 'US 9'
      }
    ]
  var settings = {
      dots: true,
      marginBottom:'19%'
    }
    // console.log('wish',this.state.wishList);
    var button_component=(<Link to='/infoPage'><Button className='buttonBackground' style={{ fontFamily:'Raleway', letterSpacing:"2px", boxShadow: "5px 10px 18px #eee", color:"white"}} fluid  size='large' >ADD TO BAG</Button></Link>);
    // if(cookies.get('flag')==1){
    //   button_component = (<Button style={{fontFamily:'Source Sans Pro, sans-serif'}} fluid color='green' size='big'>ADDED</Button>)
    // }
    var icon_component =(<Icon  name='empty heart' size='large' style={{position:'absolute',zIndex:'100',marginTop:'15%',left:'85%',color:'red'}} onClick={this.addfav.bind(this)}/>);
    // if(cookies.get('flag1') == 1){
    //   icon_component =(<Icon circular name='heart' size='large' style={{position:'absolute',zIndex:'100',marginTop:'15%',left:'85%',color:'red'}} onClick={this.updateIcon.bind(this)}/>);
    // }

    return(
      <div style={{overflow:'hidden'}}>
      <Grid>
        <Grid.Row/>
        <Grid.Row style={{width:'100%'}}>
          <Grid.Column width={16}>
            <Link to='/mWomenCategory/LACE'>
            <Icon name='left arrow' size='large' style={{position:'absolute',zIndex:'100',marginTop:'3%',left:'5%',color:'black'}}/>
          </Link>
            <Link to='/infoPage'>
            <Icon  name='info' size='large' style={{position:'absolute',zIndex:'100',marginTop:'3%',left:'85%',color:'#073682'}}/>
          </Link>
          <Link to='/signin'>
          {icon_component}
        </Link>

          <Slider {...settings} style={{height:'65vh'}}>
          <div><center><Image src='./client/assets/Images/Newistock/productDetail/iStock-535350451.jpg' size='medium' style={{height:'65vh'}} /></center></div>
            <div><center><Image src='./client/assets/Images/Newistock/productDetail/iStock-467870548.jpg' size='medium' style={{height:'65vh'}}/></center></div>
            {/* <div><center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL250391024_Zoom_D_1.jpg' size='medium'/></center></div>
            <div><center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL250391024_Zoom_P_1.jpg' size='medium'/></center></div>
            <div><center><Image src='http://media.wallis.co.uk/wcsstore/Wallis/images/catalog/WL250391024_Zoom_M_1.jpg' size='medium'/></center></div> */}
          </Slider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row/>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={10}>
            <h2 style={{fontSize:'18px',marginTop:'-10%',fontFamily: 'Raleway', textTransform:'capitalize'}}>Sia Dress w/ Pockets</h2>
          </Grid.Column>
          <Grid.Column width={5}/>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-6%'}}>
          <Grid.Column width={1}/>
        <Grid.Column width={7} >
          <h3 style={{color:'green',fontFamily: 'Raleway'}}>Special Price</h3>
        </Grid.Column>
        </Grid.Row>
          <Grid.Row style={{marginTop:'-6%'}}>
            <Grid.Column width={1}/>
          <Grid.Column width={4} >
            <h3 style={{fontSize:'20px'}}>$26.00</h3>
          </Grid.Column>
          <Grid.Column width={3} style={{textDecoration:'line-through',marginTop:'1%'}}>$33.00</Grid.Column>
          <Grid.Column width={4} style={{color:'green',marginTop:'1%',fontSize:'18px'}}>20% off</Grid.Column>
          </Grid.Row>

        <Grid.Row style={{marginTop:'-5%'}}>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>

          {button_component}

          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row style={{marginTop:'-4%'}}>
          <Grid.Column width={2}/>
          <Grid.Column width={14} style={{marginLeft:'7%'}}>
            <label style={{fontSize:'17px',fontFamily:'Raleway'}}>Overall Rating : </label><Rating maxRating={5} defaultRating={4} icon='star' size='large' disabled/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Header as='h4' style={{fontFamily:'Raleway'}}>
              REVIEWS
            </Header>


            <List>
              <List.Item>
                <Icon name='user outline' />
                <List.Content>
                  <List.Header as='a' style={{fontFamily:'Raleway'}}>Rachel</List.Header>
                  <List.Description style={{fontSize:'16px',fontFamily:'Raleway'}}>Good material and came as expected.</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name='user outline' />
                <List.Content>
                  <List.Header as='a' style={{fontFamily:'Raleway'}}>Lindsay</List.Header>
                  <List.Description style={{fontSize:'16px',fontFamily:'Raleway'}}>Very beautiful and very soft material. Loved the fitting . Really recommend it for formal meetings.</List.Description>
                </List.Content>
                </List.Item>
              </List>
              {/* <span style={{marginLeft:'80%',color:'#4183c4'}}>See All</span> */}
              <h4>Connect to <span><Icon color='blue' size='large' name='facebook' /></span>for live customer feedback. <span><a>click here</a></span>  </h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={10}>
          <h4 style={{fontFamily: 'Raleway '}}>LAST PURCHASE HISTORY</h4>
          </Grid.Column>
          {/* <Grid.Column width={2}/> */}
          <Grid.Column width={4}/>
        </Grid.Row>

        <Grid.Row/>
      </Grid>
<ProductRecommended/>
      {(
        this.state.audioStatus &&
        <VoicePlayer
          play
          text="Hey, based on your past purchasing history, we recommend some products for you"
          onEnd = {() => {
            this.setState({
              audioStatus: false,
              confirmationModal: true
            })
          }}
        />
      )}
      <Modal size="mini" dimmer="blurring" basic open={this.state.confirmationModal}>
              <div style={{ textAlign:'center'}}>
                <Modal.Content>
                 <h3>Want to browse the product list?</h3>
                </Modal.Content>
                 <Modal.Actions>
                  <Button size="mini" basic color='red' inverted onClick={() => {
                    this.setState({
                      confirmationModal: false
                    })
                  }}>
                    <Icon name='remove' /> No
                  </Button>
                  <Link to="/recommendation">
                    <Button size="mini" color='green' inverted>
                      <Icon name='checkmark' /> Yes
                    </Button>
                  </Link>
                </Modal.Actions>
              </div>

      </Modal>
    </div>
  );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    AddtoCart:AddtoCart
  },dispatch)
}

export default connect(null,matchDispatchToProps)(ProductDetails);
