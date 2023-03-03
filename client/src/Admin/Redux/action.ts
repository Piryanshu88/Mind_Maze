import axios, { AxiosResponse } from "axios";
import * as types from "./actionTypes";
import { Payload } from "./reducer";

interface userData {
  data: object[];
  status: string;
}

interface options {
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
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDAwYTk3MWNjODA3OGQ2MmIzNTBjMzAiLCJpYXQiOjE2Nzc4NTM5MDh9.Z01xlf3efXY-dXwozcxHUyvIwGhDz13k-ZX2J22XTIs",
      },
    }
  );
  return response.data;
};

export { getDataUser, getQuestionData };
