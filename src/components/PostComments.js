import React  from 'react';
import { Container, Icon, Divider } from 'semantic-ui-react';

class PostComments extends React.Component{

    removeComments = ()=>{
        const postId = this.props.postId;
        const index = this.props.index;

        this.props.removeComment(postId, index);
    }

    render(){
        const user = this.props.comment.user;
        const text = this.props.comment.text;

        return (
            <Container>
                <strong>{user + ": "}</strong>
                {text}
                <Icon name="delete" onClick={this.removeComments} color="red" link/>
                <Divider fitted hidden />
            </Container>
        );
    }
}

export default PostComments;