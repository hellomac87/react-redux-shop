// thunk
const fetchProducts = (category, page, limit) => async dispatch => {
  // TODO: fetching 여부 판단. 로직 작성
  try {
    // Start. 글로벌 로딩 인디케이터 시작
    // disaptch(loadingStart());

    // 1. call api
    // 1-1. params options
    const params = {
      category: category || "",
      _page: page || 1,
      _limit: limit || ""
    };
    // 1-2. call
    const res = await api.get("/products", { params });
    // 1-3. response data에서 필요한 데이터 추출하기
    const response = res.data;
    const totalCount = res.headers["x-total-count"];

    // 2. (성공시)dispatch setProduct action
    disaptch(fetchProductsSuccess(response, category, page, totalCount));
  } catch (e) {
    // Error
    // 2. (실패시)dispatch setProduct action
    dispatch(fetchProductsFailure(e));
  } finally {
    // END. 글로벌 로딩 인디케이터 끝
    // disaptch(loadingEnd());
  }
};

// action creators
const fetchProductsSuccess = (response, category, page, totalCount) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    response,
    category,
    page,
    totalCount
  };
};
const fetchProductsFailure = e => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    message: e.message || "fetchProductsFailure"
  };
};
