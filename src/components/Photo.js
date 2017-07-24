import React from 'react';
import {Card, Image, Icon, Grid} from 'semantic-ui-react';
import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {


    
    render(){
        

        const { post, i , comments} = this.props;

        const caption = post.caption,
        code = post.code,
        display_src = this.props.post.display_src,
        id = post.id,
        likes = post.likes,
        commentsLabel = comments[code] ?  comments[code].length : 0 ;
      
        
        return(
          
            <Card fluid >
              <Link to={`/view/${code}`}>
                <Image src={display_src}/>
                </Link>
                <Card.Content>
                    <Grid columns={2} verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column className='test' >
                            <Card.Description>
                            <Link to={`/view/${code}`}>
                               <Icon name="comments"/>{commentsLabel + ' Comments'}
                            </Link>
                            </Card.Description>
                        </Grid.Column>
                        <Grid.Column textAlign='right' >
                        <Card.Description onClick={this.props.increment.bind(null, i)}>
                             <Icon  name="heart outline like"/>{' '+likes + ' Likes'}
                             </Card.Description>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>  
                </Card.Content>
            </Card> 
            
        )
    }

}

export default Photo;