import React from 'react';
import { Grid, Cell } from 'react-mdl';

const LandingPage = () => {
 return (
  <div style={{ width: '100', margin: 'auto' }}>
   <Grid className='landing-grid'>
    <Cell col={12}>
     <img
      src='https://avatars.githubusercontent.com/u/72904217?v=4'
      alt='avatar'
      className='avatar-img'
     />
     <div className='banner-text'>
      <h1>Full Stack Web Developer</h1>
      <hr />
      <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
      <div className='social-links'>
       {/* GitHub */}
       <a href='https://github.com/AlishaPanday' rel='noopener noreferrer' target='_blank'>
        <i className='fa fa-github' aria-hidden='true' />
       </a>

       {/* LinkedIn */}
       <a href='https://www.linkedin.com/in/alisha-panday-bbb940174/' rel='noopener noreferrer' target='_blank'>
        <i className='fa fa-linkedin-square' aria-hidden='true' />
       </a>
      </div>
     </div>
    </Cell>
   </Grid>
  </div>
 );
};

export default LandingPage;
