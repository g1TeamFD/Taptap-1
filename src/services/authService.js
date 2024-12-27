import loginData from '../data/loginData.json';

const authService = {
  getUser: () => {
    return JSON.parse(localStorage.getItem('user')) || null;
  },
  login: ({ email, password, sourcecode }) => {
    // Match by email + password or sourcecode + password
    const user = loginData.find(
      (u) =>
        (u.email === email && u.password === password) ||
        (u.sourcecode === sourcecode && u.password === password)
    );
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
  },
  logout: () => {
    localStorage.removeItem('user');
  },
};

export default authService;
