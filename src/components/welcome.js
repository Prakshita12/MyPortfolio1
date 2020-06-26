import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';


class Welcome extends Component{
    render(){
        return(
        <div style={{width:'100%',margin:'auto'}}>
            <Grid className="welcome-g">
                <Cell cols={12}>
                    <center><img 
                    src="https://media-exp1.licdn.com/dms/image/C5103AQE4DWLnmgNbDg/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=G49jpo8UoJKWJgwlW2sAYXMyYnD71jgu9o6c2TVXYJA"
                    className="avatar-img"/></center>
                    <div className="banner-t">
                        <h1><center> Graduate Student | Data Science  </center></h1>
                        <p className="head1">Interested in Front-End Development | Software Engineering</p>
                        
                        <p>HTML | CSS | Bootstrap | ReactJS | Javascript | Jquery | Ajax</p>
                        <div className="social-links">
                        <a href="https://www.linkedin.com/in/prakshita-nag123/" class="fa fa-linkedin"></a>
                         <a href="https://www.github.com/Prakshita12/" class="fa fa-github"></a>
                         <a href="https://www.gmail.com/" class="fa fa-google-plus"></a>
                         <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
                        </div>
                    </div>
                </Cell>

            </Grid>
            
        </div>
        )
    }
}

export default Welcome;