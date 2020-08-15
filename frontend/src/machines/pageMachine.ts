import { Machine, actions } from "xstate"

import { PageContext, PageStateSchema, PageEvent } from './types/pageMachine'

const { assign } = actions

const initalPageLoadComplete = (context: PageContext) => context.loadingComplete && context.animationComplete

const pageMachine = Machine<PageContext, PageStateSchema, PageEvent>({
  id: 'page',
  initial: 'initial',
  context: {
    animationComplete: false,
    loadingComplete: false,
  },
  states: {
    initial: {},
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