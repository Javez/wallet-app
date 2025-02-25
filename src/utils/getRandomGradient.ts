const getRandomGradient = () => {
  const gradients = [
    "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    "linear-gradient(45deg, #a18cd1, #fbc2eb)",
    "linear-gradient(45deg, #8fd3f4, #84fab0)",
    "linear-gradient(45deg, #ffecd2, #fcb69f)",
    "linear-gradient(45deg, #cfd9df, #e2ebf0)",
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
};

export default getRandomGradient;
