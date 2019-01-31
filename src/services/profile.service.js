export const logout = () => {
  localStorage.clear();
};

export const parseJwt = token => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export const isAuthenticated = () => {
  localStorage.setItem(
    "TOKEN",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1pY2hlbGxlQGxvY2FsaG9zdC5jb20iLCJ1c2VybmFtZSI6Im1pY2hlbGxlIiwiZXhwIjoxNTUwMzAyMDMyfQ.JC_Ci2fzamdFWX7dWxgxaFmKWXX4yWCoIaHq5ptF7Ww"
    // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imxlb25hcmQubmp1cmFAYW5kZWxhLmNvbSIsInVzZXJuYW1lIjoibGVvbiIsImV4cCI6MTU1MDQwNjQ5OH0.-FyYb8Jd2l0CVpNcpRKc8MaiLZKgNHlqcRmaZsqmOnA"
  );
};

localStorage.setItem(
  "TOKEN",
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1pY2hlbGxlQGxvY2FsaG9zdC5jb20iLCJ1c2VybmFtZSI6Im1pY2hlbGxlIiwiZXhwIjoxNTUwMzAyMDMyfQ.JC_Ci2fzamdFWX7dWxgxaFmKWXX4yWCoIaHq5ptF7Ww"
  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imxlb25hcmQubmp1cmFAYW5kZWxhLmNvbSIsInVzZXJuYW1lIjoibGVvbiIsImV4cCI6MTU1MDQwNjQ5OH0.-FyYb8Jd2l0CVpNcpRKc8MaiLZKgNHlqcRmaZsqmOnA"
);

const token = localStorage.getItem("TOKEN");
const decodedToken = parseJwt(token);
export const username = decodedToken.username;
console.log(username, "in service!");
export const firstname = localStorage.getItem("firstname");
export const lastname = localStorage.getItem("lastname");
export const birthday = localStorage.getItem("birthday");
export const followers = localStorage.getItem("followers");
export const bio = localStorage.getItem("bio");
export const image = localStorage.getItem("image");



