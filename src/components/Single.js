import React  from 'react';
import Photo from './Photo';
import Comments from './Comments';

import { Container, Grid, Form, Divider } from 'semantic-ui-react';

class Single extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: '',
            authorError:' ',
            commentError:' '
        }
        this.onSummit = this.onSummit.bind(this);
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value});

    onSummit(e){
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.state.author;
        const comment = this.state.comment;

        if (!this.validate()) return;

        this.props.addComment(postId, author, comment);
        this.setState({author: '', comment: ''});
    }

    validate = () =>{
        var validation = true;
        ['author', 'comment'].forEach((field)=>{
           if(this.state[field] === ''){
               const state = `${field}Error`;
               this.setState({[state]: 'error'});
               validation = false;
           }
        });
        return validation;
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
                        <Divider/>
                        <Form onSubmit={this.onSummit} ref ={(form)=> this.commentForm = form }>
                            <Form.Input  type="text" placeholder="author" name ="author" value = {this.state.author} onChange ={this.handleChange}   />
                            <Form.Input  type="text" placeholder="comment" name ="comment" value = {this.state.comment} onChange = {this.handleChange}   />
                            <Form.Button type="submit">Add Comment</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>

            </Container>
        );
    }
}

export default Single;