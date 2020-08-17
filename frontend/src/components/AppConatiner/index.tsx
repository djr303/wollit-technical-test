import React, { useEffect } from "react"
import { useQuery } from "react-apollo"
import { useMachine } from '@xstate/react'
import pageMachine from '../../machines/pageMachine'
import Loading from '../Loading'
import { Query, Category } from "../../types"
import { ApolloError } from "apollo-boost"
import "./index.scss";
import App from '../App'
import MachineContext from '../../contexts/machineContext';
import { getCategories } from '../../graphql/query/categories'

const queryComplete = (loading: boolean, error: ApolloError | undefined, data: Query | undefined): boolean => 
  !loading && !error && !!data

const AppContainer: React.FC = () => {

  const machine = useMachine(pageMachine, { devTools: true })
  const [state, send] = machine
  const { value, context: { maxTreeDepth } } = state
  const { loading, error, data } = useQuery<Query>(getCategories(maxTreeDepth))

  useEffect(() => {
    if (queryComplete(loading, error, data)) send('LOADING_COMPLETE')
  }, [send, loading, error, data])


  if (value === 'waiting') return (<Loading wait={1000} onComplete={() => send('ANIMATION_COMPLETE')} />)

  return (
      <MachineContext.Provider value={machine}>
        <App categories={data!.categories as Category[]} />
      </MachineContext.Provider>
    )
};

export default AppContainer;
