export const logout = () => {
  localStorage.clear();
};

export const parseJwt = token => JSON.parse(atob(token.split('.')[1]));

export const isAuthenticated = () => {
  localStorage.setItem('TOKEN', '..');
};

export const token = localStorage.getItem('Token');
let decodedToken;
if (token === null) {
  decodedToken = { username: 'leon' };
} else {
  decodedToken = parseJwt(token);
}

export const { username } = decodedToken;
console.log(username, 'in comment service!');
export const slug = localStorage.getItem('slug');
