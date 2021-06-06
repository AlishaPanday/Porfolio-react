import React, { useState } from 'react';
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

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
                  'url(https://user-images.githubusercontent.com/72904217/102491468-348a5b80-40ab-11eb-870c-d8ed45aca0d9.PNG) center / cover',
              }}
            ></CardTitle>

            <CardText>
              Weather Dashboard app which uses openweathr API to retrieve
              current and future weather forecast for multiple cities with the
              search functionality
            </CardText>
            <CardActions border>
              <Button
                href='https://github.com/AlishaPanday/Weather-Dashboard'
                target='_blank'
                colored
              >
                GitHub
              </Button>
              <Button
                href='https://alishapanday.github.io/Weather-Dashboard/'
                target='_blank'
                colored
              >
                Live Demo
              </Button>
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
                  'url(https://user-images.githubusercontent.com/72904217/100998538-9e2c4500-3596-11eb-9916-c84e977f0081.PNG) center / cover',
              }}
            ></CardTitle>

            <CardText>
              Timed coding quiz with multiple choice questions. This app will
              run in the browser, and will feature dynamically updated HTML,CSS
              powered by JavaScript code.
            </CardText>
            <CardActions border>
              <Button
                href='https://github.com/AlishaPanday/Code-Quiz'
                target='_blank'
                colored
              >
                GitHub
              </Button>
              <Button
                href='https://alishapanday.github.io/Code-Quiz/'
                target='_blank'
                colored
              >
                Live Demo
              </Button>
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
                  'url(https://user-images.githubusercontent.com/72904217/101713221-31eb9d00-3ad2-11eb-8715-653f88d1d309.PNG) center / cover',
              }}
            ></CardTitle>
            <CardText>
              A simple calendar application that allows a user to save events
              for each hour of the day
            </CardText>
            <CardActions border>
              <Button
                href='https://github.com/AlishaPanday/Work-Day-Scheduler'
                target='_blank'
                colored
              >
                GitHub
              </Button>
              <Button
                href='https://alishapanday.github.io/Work-Day-Scheduler/'
                target='_blank'
                colored
              >
                Live Demo
              </Button>
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
          {/* Project #1*/}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#000',
                height: '176px',
                background:
                  'url(https://user-images.githubusercontent.com/72904217/112841505-22b94b00-90d3-11eb-844c-e1e4a1d795b6.PNG) center / cover',
              }}
            ></CardTitle>
            <CardText>
              This workout tracker app will help you to keep track of your
              fitness goal..
            </CardText>
            <CardActions border>
              <Button
                href='https://github.com/AlishaPanday/Fitness-Tracker'
                target='_blank'
                colored
              >
                GitHub
              </Button>
              <Button
                href='https://fitness-tracker0017.herokuapp.com/?id=6061d09499d8f500156956e9'
                target='_blank'
                colored
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (toggleState.activeTab === 2) {
      return (
        <div>
          <h1>React</h1>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#000',
                height: '176px',
                background:
                  'url(https://user-images.githubusercontent.com/72904217/112841505-22b94b00-90d3-11eb-844c-e1e4a1d795b6.PNG) center / cover',
              }}
            ></CardTitle>
            <CardText>Employee Directory.</CardText>
            <CardActions border>
              <Button
                href='https://github.com/AlishaPanday/employee-directory'
                target='_blank'
                colored
              >
                GitHub
              </Button>
              <Button href='' target='_blank' colored>
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      );
    }
  };

  return (
    <div className='category-tabs'>
      <Tabs
        active={toggleState.activeTab}
        onChange={tabId => setToggleState({ activeTab: tabId })}
        ripple
      >
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
