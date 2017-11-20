import React              from 'react'
import ReactDOM           from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient }   from 'apollo-client'
import { HttpLink }       from 'apollo-link-http'
import { InMemoryCache }  from 'apollo-cache-inmemory'

const client = new ApolloClient({
	link: new HttpLink({
		uri: process.env.NODE_ENV === 'production'
			? `${process.env.ENDPOINT_ADDRESS}/graphql`
			: `http://localhost:5000/graphql`
	}),
	cache: new InMemoryCache()
});

import App from './src/components/App'

ReactDOM.render(
	<ApolloProvider {...{client}}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)



