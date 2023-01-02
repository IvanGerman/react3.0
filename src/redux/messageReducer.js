import { deleteMessageRequest } from "../API/api";

const initialState = {};

export const messageReducer = (state = initialState) => {
  return state;
};

export const deleteMessageThunkCreator = (messageID) => {
  return (dispatch) => {
    deleteMessageRequest(messageID);
  };
};
