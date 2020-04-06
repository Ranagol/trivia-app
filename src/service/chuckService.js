
class ChuckService {
  //Chuch je kao axios instanca. Chuck vec ima axios instancu u sebi, i ta axios instanca dobija chuck vieceve od nekog apija na webu, koji je vec unapred namesten. Mozemo ladno iskopirate sve metode u chuckService.js. chuckService - tu  treba praviti klasu, konstruktor.


  constructor(){
    //since in the baseurl we use baseURL: "https://opentdb.com/", which is for the trivia project, for the chuck project we had to use a separate baseURL, and in order to do this succesfully, beside the trivia project, we had to do this in this class constructor.
    
    const Chuck = require('chucknorris-io');//here we set up the base url for the chuck project

    this.client = new Chuck();//yes, here we have in one step created a client property for this class, and we also gave this property an object.
  }

  async getRandomJoke(category){
    const response = await this.client.getRandomJoke(category);
    return response;
  }

  async getJokeCategories() {// Retrieve a list of available joke categories
    const response = await this.client.getJokeCategories();
    return response;
  }  
}

const chuckService = new ChuckService();
export default chuckService;



