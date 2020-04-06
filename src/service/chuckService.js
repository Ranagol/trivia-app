
class ChuckService {
  constructor(){
    const Chuck = require('chucknorris-io');
    this.client = new Chuck();
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



