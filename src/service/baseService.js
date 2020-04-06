import axios from 'axios';

const HTTP = axios.create({
  baseURL: "https://opentdb.com/"//since in the baseurl we use baseURL: "https://opentdb.com/", which is for the trivia project, for the chuck project we had to use a separate baseURL, and in order to do this succesfully, beside the trivia project, we had to do this in this class constructor. So, the "https://opentdb.com/" is for the trivia project only.

  //the chuck project doesn't need an axios, because I think that is all incorporated into the chuck thingy somewhere. But, the trivia does need axios, so we have to install axios for the trivia!
});

export default HTTP;