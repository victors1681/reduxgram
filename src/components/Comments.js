import React  from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';
import PostComments  from './PostComments';

class Comments extends React.Component{

    render(){
        const comments = this.props.postComments;

        return (
            <Container>
                {comments.map((comment, i)=> <PostComments key={i} comment={comment} />)}
            </Container>
        );
    }
}

export default Comments;