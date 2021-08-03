import React from 'react'
import { Grid, List, Image } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload';
import genericPhoto from '../../../App/logo.png'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export default (props) => (

  <LazyLoad height={200}>
    <Grid.Column textAlign='center' mobile={4} tablet={4} computer={4}>
    {console.log("props: ", this.props)}
      <List>
        <List.Item>
          <Image
            rounded
            src={props.cast.profile_path ? (`${IMAGE_URL}/${props.cast.profile_path}`) : (genericPhoto)} />
          <List.Content style={{margin: '10px 0 0 0'}}>
            <List.Header>{props.cast.name}</List.Header>
            <List.Description>
              as {props.cast.character}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Grid.Column>
  </LazyLoad>
)
