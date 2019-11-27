import React from 'react'
import { Grid, Button, Input } from 'semantic-ui-react'

const handleClick = (props, event) => props.updateSortBy(event.target.name)
const SortBar = (props) => {
  return (
    <Grid columns={4}>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Button
            color={props.sortBy === 'all' ? 'green' : 'grey'}
            name='all'
            onClick={(event) => handleClick(props, event)}>
              Default
          </Button>
        </Grid.Column>

        <Grid.Column textAlign='center'>
          <Button
            color={props.sortBy === 'health' ? 'green' : 'grey'}
            name='health' onClick={(event) => handleClick(props, event)}>
            Best Health
          </Button>
        </Grid.Column>

        <Grid.Column textAlign='center'>
          <Button color={props.sortBy === 'damage' ? 'green' : 'grey'} name='damage' onClick={(event) => handleClick(props, event)}>Best Damage</Button>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button color={props.sortBy === 'armor' ? 'green' : 'grey'} name='armor' onClick={(event) => handleClick(props, event)}>Best Amor</Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Input type='text' value={props.filterBy} onChange={(event) => props.changeFilterBy(event.target.value)} />
      </Grid.Row>
    </Grid>
  )
}
export default SortBar
