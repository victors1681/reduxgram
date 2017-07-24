import React  from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Photo from './Photo';

const PhotoGrid =(props) => (
        <Grid container columns={4}>
            {props.posts.map((post, i)=> <Grid.Column><Photo {...props} key={i} i={i} post={post}/></Grid.Column>)}
        </Grid>
);


export default PhotoGrid;