export const getRepos = async () => {
  return await fetch("https://api.github.com/users/freeCodeCamp/repos");
};
