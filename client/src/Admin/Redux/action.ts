import axios, { AxiosResponse } from "axios";
import * as types from "./actionTypes";
import { Payload } from "./reducer";

export interface userData {
  data: object[];
  status: string;
}

export interface options {
  opt1: string;
  check: boolean;
}
export interface questions {
  _id?: string;
  questionName: string;
  category: string;
  level: string;
  options: options[];
  marks: number;
}
export interface QuestionsPayload {
  data: questions[];
  status: string;
  userId?: string;
  totalCount?: number;
}
export let userDataRequest = () => {
  return {
    type: types.GET_DATA_REQ,
  };
};

export let useDataSuc = (user: userData) => {
  return {
    type: types.GET_DATA_SUC,
    payload: user,
  };
};

export let useDataErr = () => {
  return {
    type: types.GET_DATA_ERR,
  };
};

let getDataUser = async () => {
  const response: AxiosResponse<Payload> = await axios.get(
    "https://lazy-tan-shrimp-tux.cyclic.app/user/all-users"
  );

  return response.data;
};

let getQuestionData = async (page: number = 0) => {
  const response: AxiosResponse<QuestionsPayload> = await axios(
    `https://lazy-tan-shrimp-tux.cyclic.app/questions?page=${page}&limit=5`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return response.data;
};

export interface addQuestion {
  data: string;
  status: string;
}

const addQuestions = async (payload: questions) => {
  const response: AxiosResponse<addQuestion> = await axios.post(
    `https://lazy-tan-shrimp-tux.cyclic.app/questions/add`,
    payload,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return response.data;
};

export interface QuestionsPayloadById {
  data: questions[];
  status: string;

  totalCount?: number;
}
let getQuestionDataById = async (id: string | undefined) => {
  const response: AxiosResponse<QuestionsPayloadById> = await axios.get(
    `https://lazy-tan-shrimp-tux.cyclic.app/questions/${id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return response.data;
};

export interface updateQ {
  message: string;
  status: string;
}

let updateQuestion = async (id: string | undefined, payload: questions) => {
  const response: AxiosResponse<updateQ> = await axios.patch(
    `https://lazy-tan-shrimp-tux.cyclic.app/questions/update/${id}`,
    payload,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return response.data;
};

interface points {
  points: number;
}
const updatedUser = async (id: string | null, payload: points) => {
  const response: AxiosResponse<updateQ> = await axios.patch(
    `https://lazy-tan-shrimp-tux.cyclic.app/user/update/${id}`,
    payload
  );
  return response.data;
};

const getUserById = async (id: string | null) => {
  const response: AxiosResponse<addQuestion> = await axios.get(
    `https://lazy-tan-shrimp-tux.cyclic.app/user/all-users/${id}`
  );
  return response.data;
};

export {
  updatedUser,
  getUserById,
  getDataUser,
  getQuestionData,
  addQuestions,
  getQuestionDataById,
  updateQuestion,
};
