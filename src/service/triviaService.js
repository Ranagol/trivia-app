import HTTP from './baseService';

class TriviaService {

  async getCategories(){
    const response = await HTTP.get('/api_category.php');
    return response.data;
  }

  async getQuestionsByCategory(id) {
    const response = await HTTP.get(`/api.php?amount=10&category=${id}`)
    return response.data;
  }

  async getQuestions(){
    const response = await HTTP.get(`/api.php?amount=10`)
    return response.data;
  }
}

const triviaService = new TriviaService();
export default triviaService;