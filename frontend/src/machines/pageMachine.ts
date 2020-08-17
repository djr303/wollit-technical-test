import { Machine, actions, StateMachine } from "xstate"

import { PageContext, PageStateSchema, PageEvent } from './types/pageMachine'

const { assign } = actions

// const initalPageLoadComplete = (context: PageContext) => 
const initalPageLoadComplete = (context: any) => 
  context.loadingComplete && context.animationComplete && !context.refreshed

// const pageMachine = Machine<PageContext, PageStateSchema, PageEvent>({
const pageMachine = Machine<any, any, any>({
  id: 'page',
  initial: 'waiting',
  context: {
    animationComplete: false,
    loadingComplete: false,
    maxTreeDepth: 1
  },
  states: {
    refreshed: {},
    waiting: {
      on: {
        '': {
          target: 'complete',
          cond: initalPageLoadComplete,
        }
      }
    },
    complete: {},
  },
  on: {
    REFRESH: {
      target: 'refreshed',
      actions: assign({
        maxTreeDepth: (context, event) => context.maxTreeDepth = event.maxTreeDepth,
      })
    },
    LOADING_COMPLETE:
    {
      target: 'waiting',
      actions: assign({
        loadingComplete: context => context.loadingComplete = true
      })
    },
    ANIMATION_COMPLETE:
    {
      target: 'waiting',
      actions: assign({
        animationComplete: context => context.animationComplete = true
      })
    }
    ,
  }
});

export default pageMachine