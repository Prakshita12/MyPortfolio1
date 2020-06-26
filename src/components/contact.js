import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell cols={6}>
                        <h2>Prakshita Nag</h2>
                    
                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQE4DWLnmgNbDg/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=G49jpo8UoJKWJgwlW2sAYXMyYnD71jgu9o6c2TVXYJA" style={{height:'250px',borderRadius:'10px'}}/>
                    <br/><p style={{width:'75%',margin:'auto',paddingTop:'1em'}}> 
                    I am a hard-working individual looking for opportunities in the Software Engineering or Web development field.With pursuing Master’s degree in Computer Science,and hands-on experience in building Web Technologies like Javascript,Jquery,React.js,HTML,CSS ,ES6,Redux.I have also various certifications in ReactJS and Git.

I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set.

                    </p>
                    </Cell>
                    <Cell cols={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div classNaame="contact-list">
                        <List>
  <ListItem>
    <ListItemContent  style={{fontSize:'25px',fontFamily:'Anton'}}>
    <i className="fa fa-phone-square" aria-hidden="true"/>
        (469)-878-7946</ListItemContent>
    
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
    <i className="fa fa-envelope" aria-hidden="true"/>
        
        prkshtng74@gmail.com</ListItemContent>
   
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton',color:'black'}} >
    <i className="fa fa-envelope" aria-hidden="true"/>
        
       pxn180029@utdallas.edu</ListItemContent>
  
  </ListItem>
</List>
</div>
                    </Cell>
                </Grid>
            </div>
       
        )
    }
}

export default Contact;