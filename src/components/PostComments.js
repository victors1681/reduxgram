import React  from 'react';
import { Container, Grid, Card } from 'semantic-ui-react';

class PostComments extends React.Component{

    render(){
        const user = this.props.comment.user;
        const text = this.props.comment.text;

        return (
            <Container>
                <strong>{user + ": "}</strong>
                {text}
            </Container>
        );
    }
}

export default PostComments;