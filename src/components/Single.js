import React  from 'react';
import Photo from './Photo';
import Comments from './Comments';

import { Container, Grid, Form } from 'semantic-ui-react';

class Single extends React.Component{
    constructor(props) {
        super(props);

        this.onSummit = this.onSummit.bind(this);
    }

    onSummit(e){
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
    }

    render(){

        const postId = this.props.params.postId;
        const index = this.props.posts.findIndex((post)=> post.code = postId);
        const post = this.props.posts[index];
        const postComments = this.props.comments[postId] || [];

        return (
            <Container>
                <Grid>
                    <Grid.Column width="10">
                        <Photo {...this.props} key={index} i={index} post={post} />
                    </Grid.Column>
                    <Grid.Column width="6">
                        <Comments {...this.props} postComments = {postComments} />

                        <Form onSubmit={this.onSummit}>
                            <input  type="text" placeholder="author" ref="author" />
                            <input  type="text" placeholder="comment" ref="comment" />
                            <Form.Button type="submit" value="test" />
                        </Form>
                    </Grid.Column>
                </Grid>

            </Container>
        );
    }
}

export default Single;