import TriviaApp from './components/TriviaApp';


export const routes = [
  { path:'/', name: 'trivia-app', component: TriviaApp},
  { path: '*', redirect:'/'}
];