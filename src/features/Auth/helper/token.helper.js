import * as jwt from 'jsonwebtoken';

export const decodeToken = () => {
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const tokenData = jwt.decode(accessToken);
  return tokenData;
}