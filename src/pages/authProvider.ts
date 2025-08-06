export const authProvider = {
  login: async ({ username, password }) => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("username", username);
      return Promise.resolve();
    }
    return Promise.reject(new Error("Invalid credentials"));
  },
  logout: async () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: async ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: async () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: async () => {
    return Promise.resolve(); // yoki role-based bo‘lsa, ro‘lni qaytaring
  },
  getIdentity: async () => {
    const username = localStorage.getItem("username");
    if (username) {
      return Promise.resolve({ id: username, fullName: username });
    }
    return Promise.reject();
  },
};
