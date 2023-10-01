import axios from 'axios';

const User = (username) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject(new Error('User not found'));
        }
      })
      .catch((error) => {
        reject(new Error('Error fetching data'));
      });
  });
};

export default  User ;