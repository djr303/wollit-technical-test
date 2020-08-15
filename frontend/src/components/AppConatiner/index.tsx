import React, { useEffect } from "react"
import { useQuery } from "react-apollo"
import { useMachine } from '@xstate/react'
import pageMachine from '../../machines/pageMachine'
import Loading from '../Loading'
import { getCategories } from "../../graphql/query/categories"
import { Query, Category } from "../../types"
import App from '../App'
import "./index.scss";
import { ApolloError } from "apollo-boost"

const queryComplete = (loading: boolean, error: ApolloError | undefined, data: Query | undefined): boolean => 
  !loading && !error && !!data 

const AppContainer: React.FC = () => {

  const [state, send] = useMachine(pageMachine);
  const { value } = state
  const { loading, error, data } = useQuery<Query>(getCategories)

  useEffect(() => {
    if (queryComplete(loading, error, data)){
      send('LOADING_COMPLETE')
    }
  }, [send, loading, error, data])

  return (value === 'initial' || value === 'waiting') ? 
    <Loading wait={1000} onComplete={() => send('ANIMATION_COMPLETE')} />
    : (queryComplete(loading, error, data)) ? <App categories={data!.categories as Category[]} /> : null
};

export default AppContainer;
