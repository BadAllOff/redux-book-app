import axios from "axios";
export const API_CALL = "API_CALL";
const ROOT_URL = "https://books-afdc.restdb.io/rest";
const API_KEY = "5fbd32b94af3f9656800ce48";

const APICall = ({ method, endpoint }) =>
  axios({
    url: `${ROOT_URL}${endpoint}`,
    method,
    headers: { "x-apikey": API_KEY },
  }).then((res) => res.data);

const APIMiddleware = store => next => action => {
  if (!action[API_CALL]) return next(action);

  const { [API_CALL]: apiCall, ...nextAction } = action;

  const [requestType, successType, failureType] = apiCall.types;

  store.dispatch({
    type: requestType,
    ...nextAction,
  });

  return APICall(apiCall)
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
