import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQE4DWLnmgNbDg/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=G49jpo8UoJKWJgwlW2sAYXMyYnD71jgu9o6c2TVXYJA"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Prakshita Nag</h2>
            <h4 style={{color: 'grey'}}>Front-End Developer | Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a hard-working individual looking for opportunities in the Software Engineering or Web development field.With pursuing Master’s degree in Computer Science, and hands-on experience in building Web Technologies like Javascript,Jquery,React.js,HTML,CSS ,ES6,Redux.I have also various certifications in ReactJS and Git.I have done Deloitte Technology Consulting Virtual Internship where I have learnt about Deloitte’s Cloud Engineering,tasks,strategies.

I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization.

Your listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom line are:
<br/>

1. Highly skilled in designing, testing, and developing software.<br/>
  2.  Thorough understanding of data structures and algorithms.<br/>
3.Knowledgeable Machine Learning algorithms.<br/>
4.Experience in front end technologies as well.

</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>7421,FrankFord Road.Dallas,Texas</p>
            <h5>Phone</h5>
            <p>(469)-878-7946</p>
            <h5>Email</h5>
            <p>prkshtng74@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2021}
              schoolName="The University of Texas at Dallas"
              major="Master's (Computer Science)"
               />

               <Education
                 startYear={2014}
                 endYear={2018}
                 schoolName="Jaipur Engineering College and Research Center"
                 major="Bachelor's(Computer Science)"
                 style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startMonth="September"
              startYear={2019}
              endMonth="Present"
              
              endYear={2020}
              jobName="Student Assistant"
              company="The University of Texas at Dallas"
              jobDescription="Tutored Students on Python,Javascript,MIT Scratch,Microbits,Code.org"
              />

              <Experience
                startYear={2020}
                startMonth="May"
                endYear={2020}
                endMonth="June"
                jobName="JP Morgan's Software Engineering Virtual Experience"
                jobDescription="Performed various tasks like Interfacing with stock price data feed, understanding of  JP Morgan’s frameworks and tools, display data visually to traders using graph. Technologies being used are Reactjs, Git.
        Helped in understanding of JP Morgans’s frameworks and tools used by the company for various trades and tasks. Project "
                />

              <Experience
                startYear={2017}
                startMonth="May"
                endYear={2017}
                endMonth="July"
                jobName="Project Trainee"
                jobDescription="Developed a website named ‘StreetWise’ using ASP.NET,ADO.NET and C# as server-side and MSSQL used as the database.  • The website help users to search for cafes, bakeries, and hotels based on various factors analyzed like prices, area etc. • The UI of the website was made using HTML,CSS and Bootsrap. • Implemented various queries to automate the process of the user search which made the search optimal and easier. "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="ReactJS"
                    progress={60}
                    />
                    <Skills
                      skill="C#"
                      progress={40}
                      />
                      <Skills
                      skill="Python"
                      progress={60}
                      />
                      <Skills
                      skill="Redux"
                      progress={50}
                      />

                     <Skills
                      skill="Git"
                      progress={90}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}
 export default Resume;