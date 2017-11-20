import React       from 'react'
import gql         from 'graphql-tag'
import { graphql } from 'react-apollo'

const GET_TODOS = gql`
query {
  allItems {
    edges {
      node {
        id
        body
      }
    }
  }
}
`

const App = ({ data }) => {
	const { loading } = data
	
	if (loading) return <div>...loading</div>
	
	const { allItems: { edges: items } } = data
	
	return (
		<ul>
			{items.map(({ node: { id, body } }) =>
				<li key={id}>{body}</li>
			)}
		</ul>
	)
}

export default graphql(GET_TODOS)(App)
