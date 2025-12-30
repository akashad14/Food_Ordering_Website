export const isLoggedIn = () => {
  return (
    localStorage.getItem("token") &&
    localStorage.getItem("user")
  );
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
