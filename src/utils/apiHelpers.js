exports.apiRes = (res, result) => {
  const response = {
    result,
    errors: [],
    stack: "",
  };
  res.status(200).json(response);
};
