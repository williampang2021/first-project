declare const Gtest:any;

interface Window {
  __historyPush: (param:{ page:string, search?:string })=>void;
}
