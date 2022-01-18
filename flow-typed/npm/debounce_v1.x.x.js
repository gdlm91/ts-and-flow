// flow-typed signature: c602d0bccb25bc7427a169e859fb2bd1
// flow-typed version: c532298848/debounce_v1.x.x/flow_>=v0.83.x

declare module 'debounce' {
  declare type Cancelable = {|
    clear: () => void,
    flush: () => void
  |};

  declare type Debounce = <T>(func: T, wait: number, immediate?: boolean) => T & Cancelable;

  declare var debounce: Debounce;

  declare module.exports: {|
    <T>(func: T, wait: number, immediate?: boolean): T & Cancelable,
    debounce: Debounce,
  |};
}
