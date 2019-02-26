import { combineReducers } from "redux";

// 자 여러분 createList 라는 `함수`가 있습니다.
// 이 함수의 역할은 전해진 인자값 (category)를 가지고 reducer를 create 하는 함수입니다.
const createList = category => {
  // ids reducer, 얘는 리듀서에요.
  const ids = (state = [], action) => {
    if (category !== action.category) {
      return state;
    }
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        // 액션의 products 에서 아이디만 쏙쏙 뽑아서 배열을 만들었어요.
        return action.response.map(product => product.id);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (category !== action.category) {
      return state;
    }
    switch (action.type) {
      case "FETCH_PRODUCTS_REQUEST":
        return true;
      case "FETCH_PRODUCTS_SUCCESS":
      case "FETCH_PRODUCTS_FAILURE":
        return false;
      default:
        return state;
    }
  };

  // const totalCount = (state = 0, action) => {
  //   switch (action.type) {
  //     case "FETCH_PRODUCTS_SUCCESS":
  //       return action.totalCount;
  //     default:
  //       return state;
  //   }
  // };

  return combineReducers({
    ids,
    isFetching
    // totalCount
  });
};

// 기본형으로 내보내줍시다.
export default createList;

// selectors
export const getIds = state => state.ids;
export const getTotalCount = state => state.totalCount;
// export const getIsFetching = state => state.isFetching;
