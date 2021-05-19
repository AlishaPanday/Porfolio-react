import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Resume = () => {
  return (
    <div>
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: 'center' }}>
            <img
              src='https://avatars.githubusercontent.com/u/72904217?v=4'
              alt='avatar'
              style={{ height: '200px' }}
            />
          </div>
          <h2 style={{ paddingTop: '2em' }}>Alilsha Panday</h2>
          <h4 style={{ color: 'grey' }}>Full stack developer</h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <p>
            Full-stack developer. Completed Bachelor's of IT from Edith Cowan
            University.
          </p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <h5>
            <p>Perth,Western Australia</p>
          </h5>
          <h5>Phone</h5>
          <p>(123) 456-7890</p>
          <h5>Email</h5>
          <p>panday.alisha90@gmail.com</p>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
        </Cell>
        <Cell className='resume-right-col' col={8}>
          <h2>Education</h2>
          <Education
            startYear={2014}
            endYear={2018}
            schoolName='Edith Cowan University'
            schoolDescription='Bachelor of IT'
          />

          <Education
            startYear={2020}
            endYear={2021}
            schoolName='University of WWestern Australia'
            schoolDescription='Full-flex Program'
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Experience</h2>
          <Experience
            startYear={2019}
            endYear={2019}
            jobName='Community Vision'
            jobDescription='System Administration Intern'
          />
          <Experience
            startYear={2012}
            endYear={2016}
            jobName='Fortis Consulting'
            jobDescription='Program Developer'
          />
          <hr style={{ borderTop: '3px solid #e22947' }} />
          <h2>Skills</h2>
          <Skills skills='HTML/CSS' progress={100} />
          <Skills skills='JavaScript' progress={100} />
          <Skills skills='NodeJS' progress={100} />
          <Skills skills='React' progress={75} />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
