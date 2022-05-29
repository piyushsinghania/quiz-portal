import axios from 'axios';

export const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
})

export const login = (data) => http.post('/auth/login/', data);

export const getProfileDetails = () => http.get('/auth/profile/')

export const getSubjects = () => http.get('/exams/subjects/');

export const getSubjectQuestions = (subjectId) => http.get(`/exams/subjects/${subjectId}/questions/`);

export const getSubjectQuestionDetail = (subjectId, order = 1) => http.get(`/exams/subjects/${subjectId}/questions/detail/`, {
  params: {
    order
  }
});

export const postResponse = (questionId, optionId) => http.get(`/exams/questions/${questionId}/response/`, {
  params: {
    option_id: optionId
  }
})