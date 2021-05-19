import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

const Contact = () => {
 return (
  <div className='contact-body'>
   <Grid className='contact-grid'>
    <Cell col={6}>
     <h2>Alisha Panday</h2>
     <img src='https://avatars.githubusercontent.com/u/72904217?v=4' alt='avatar' style={{ height: '250px' }} />
     <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
      
     </p>
    </Cell>
    <Cell col={6}>
     <h2>Get in touch</h2>
     <hr />
     <div className='contact-list'>
      <List>
       <ListItem>
        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
         <i className='fa fa-phone-square' aria-hidden='true' />
         (123) 456-7890
        </ListItemContent>
       </ListItem>

       <ListItem>
        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
         <i className='fa fa-fax' aria-hidden='true' />
         (123) 456-7890
        </ListItemContent>
       </ListItem>

       <ListItem>
        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
         <i className='fa fa-envelope' aria-hidden='true' />
         panday.alisha90@gmail.com
        </ListItemContent>
       </ListItem>

       {/* <ListItem>
        <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
         <i className='fa fa-skype' aria-hidden='true' />
         MySkypeID
        </ListItemContent>
       </ListItem> */}
      </List>
     </div>
    </Cell>
   </Grid>
  </div>
 );
};

export default Contact;
