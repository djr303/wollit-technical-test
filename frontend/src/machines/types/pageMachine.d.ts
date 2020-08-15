export declare type PageContext = {
  loadingComplete: boolean
  animationComplete: boolean
}

export declare interface PageStateSchema {
  states: {
    initial: {},
    waiting: {}
    complete: {}
  },
  on: {}
}

export declare type PageEvent =
  | { type: 'LOADING_COMPLETE' }
  | { type: 'ANIMATION_COMPLETE' }