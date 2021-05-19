import React from 'react';
import { Grid, Cell } from 'react-mdl';

const About = () => {
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
            <h1>
              I am Bachelor's of IT graduate, creative curious and looking
              forward for a role of web developer. My thirst to learn more and
              expand my skill set has motivated me to learn new skills.
            </h1>
            <p></p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default About;
