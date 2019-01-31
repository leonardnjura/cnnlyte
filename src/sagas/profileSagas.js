// import { delay } from "redux-saga";
import { put, takeLatest, call } from "redux-saga/effects";
import {
  GET_PROFILE,
  PROFILE_RECEIVED,
  UPDATE_PROFILE,
  PROFILE_UPDATED
} from "../actions/actionTypes";
import { parseJwt, isAuthenticated } from "../services/profile.service";

isAuthenticated();
const token = localStorage.getItem("TOKEN");
const decodedToken = parseJwt(token);
const username = decodedToken.username;
console.log(username);

const user = username;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const urlOnline =
  "https://ah-infinites-staging.herokuapp.com/api/profiles/" + user;
const url = proxyurl + urlOnline;

function* getProfile() {
  const data = yield fetch(url).then(res => res.json());
  yield put({ type: PROFILE_RECEIVED, payload: data.profile });
  console.log("WAITING FOR", data);
}

function* updateProfile(action) {
  // console.log(action.payload)
  const data = yield fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      authorization: token
    },
    body: JSON.stringify(action.payload)
  }).then(res => res.json());
  yield put({ type: PROFILE_UPDATED, payload: data.profile });
  // console.log("clientPost", postData);
  console.log("svrRes", data);
}

export function* watchProfile() {
  yield takeLatest(GET_PROFILE, getProfile);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
  // yield takeLatest(UPDATE_PROFILE, kamyaUpdateSaga);
}

// export const updateProfileX = (postData) => dispatch => {
//   console.log("Action updateProfile sagaless called!", postData);
//   fetch(url, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//       authorization: token
//     },
//     body: JSON.stringify(postData)
//   })
//     .then(res => res.json())
//     .then(data =>
//       dispatch({
//         type: UPDATE_PROFILE,
//         payload: data.profile
//       })
//     );
// };

// export async function kamyaUpdate(postData) {
//   try {
//     const response = await fetch(`${url}`, {
//       method: 'PUT',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: token,
//       },
//       body: JSON.stringify(postData),
//     });
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     return e;
//   }
// }

// export function* kamyaUpdateSaga(postData) {
//     const data = yield call(kamyaUpdate, postData);
//     yield put({ type: PROFILE_UPDATED, payload: data.profile });
//     console.log("Kamya", data);

//   }
