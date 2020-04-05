import TriviaApp from './components/TriviaApp';
import Chuck from './components/Chuck';


export const routes = [
  { path:'/', name: 'trivia-app', component: TriviaApp},
  { path:'/chuck', name: 'chuck', component: Chuck},
  { path: '*', redirect:'/'}
];