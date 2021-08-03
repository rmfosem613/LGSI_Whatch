import React from 'react'
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react'
import CastItem from '../Item/'

const CastSection = (props) => (
  <Grid>

    {props.slice(0, 8).map((person, index) => <CastItem key={index + "-item"} person={person} /> )}
    <Container textAlign='center'>
    </Container>
  </Grid>
)

export default CastSection

CastSection.propTypes = {
  cast: PropTypes.array.isRequired
}