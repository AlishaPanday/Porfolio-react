import React, { useState } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const Projects = () => {
 const [toggleState, setToggleState] = useState({
  toggleState: { activeTab: 0 },
 });

 const toggleCategories = () => {
  if (toggleState.activeTab === 0) {
   return (
    /* Project # 1*/
    <div className='projects-grid'>
     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
      <CardTitle
       style={{
        color: '#000',
        height: '176px',
        background:
         'url(https://www.pngitem.com/pimgs/m/23-237369_html5-and-css3-transparent-background-html-logo-hd.png) center / cover',
       }}
      >
  
      </CardTitle>
      <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</CardText>
      <CardActions border>
       <Button colored>GitHub</Button>
       <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{ color: '#fff' }}>
       <IconButton name='share' />
      </CardMenu>
     </Card>
     {/* Project #2*/}
     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
      <CardTitle
       style={{
        color: '#000',
        height: '176px',
        background:
         'url(https://www.pngitem.com/pimgs/m/23-237369_html5-and-css3-transparent-background-html-logo-hd.png) center / cover',
       }}
      >
  
      </CardTitle>
      <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</CardText>
      <CardActions border>
       <Button colored>GitHub</Button>
       <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{ color: '#fff' }}>
       <IconButton name='share' />
      </CardMenu>
     </Card>
     {/* Project #3*/}
     <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
      <CardTitle
       style={{
        color: '#000',
        height: '176px',
        background:
         'url(https://www.pngitem.com/pimgs/m/23-237369_html5-and-css3-transparent-background-html-logo-hd.png) center / cover',
       }}
      >
      
      </CardTitle>
      <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</CardText>
      <CardActions border>
       <Button colored>GitHub</Button>
       <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{ color: '#fff' }}>
       <IconButton name='share' />
      </CardMenu>
     </Card>
    </div>
   );
  } else if (toggleState.activeTab === 1) {
   return (
    <div>
     <h1>MongoDB</h1>
    </div>
   );
  } else if (toggleState.activeTab === 2) {
   return (
    <div>
     <h1>React</h1>
    </div>
   );
  }
 };

 return (
  <div className='category-tabs'>
   <Tabs active={toggleState.activeTab} onChange={(tabId) => setToggleState({ activeTab: tabId })} ripple>
    <Tab>HTML/CSS</Tab>
    <Tab>MongoDB</Tab>
    <Tab>React</Tab>
   </Tabs>

   <Grid>
    <Cell col={12}>
     <div className='content'>{toggleCategories()}</div>
    </Cell>
   </Grid>
  </div>
 );
};

export default Projects;
