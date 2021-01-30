import axios from "axios";
export const API_CALL = "API_CALL";
const ROOT_URL = "https://chapters-7962.restdb.io/rest";
const API_KEY = "6011eda11346a1524ff12eca";

const APICallFn = ({ method, endpoint, payload={} }) =>
  axios({
    url: `${ROOT_URL}${endpoint}`,
    method,
    data: payload,
    headers: { "x-apikey": API_KEY },
  }).then((res) => {
    return res.data;
  });

const APIMiddleware = (store) => (next) => (action) => {
  if (!action[API_CALL]) return next(action);

  const { [API_CALL]: apiCall, ...nextAction } = action;

  const [requestType, successType, failureType] = apiCall.types;

  store.dispatch({
    type: requestType,
    ...nextAction,
  });

  return APICallFn(apiCall)
    .then((response) =>
      store.dispatch({
        type: successType,
        response,
        ...nextAction,
      })
    )
    .catch((error) =>
      store.dispatch({
        type: failureType,
        error,
        ...nextAction,
      })
    );
};

export default APIMiddleware;
