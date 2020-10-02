const handleHttpError = (err) => {
  const errorCodeLst = [409, 422, 401];
  const statusCode = err.response?.data.statusCode;

  if (errorCodeLst.includes(statusCode)) {
    throw new Error(err.response.data.message);
  }
  throw new Error('Đã có lỗi xảy ra!');
};

export default handleHttpError;