export default {
  key: "UserReport",
  options: {
    delay: 5000
  },
  handle({ data }) {
    const { user } = data;

    console.log(user);
  }
};
