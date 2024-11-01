import axios from 'axios';

const BASE_URL = 'http://localhost:8082/quiz'; // Replace with your actual backend URL

export const fetchQuestions = async (categoryName) => {
  await axios.post(`${BASE_URL}/create`, {
    "categoryName":categoryName,
    "numQuestions":3,
    "title": "Java Test"
  });

  const questionsResponse = await axios.get(`${BASE_URL}/get/1`);

  console.log(questionsResponse.data);

  return questionsResponse.data;
};

export const submitTest = async (answersReq) => {
  const response = await axios.post(`${BASE_URL}/submit/1`, answersReq);
  return response.data;
};