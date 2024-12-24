//import axios from 'axios';
// const follows = '/users/huaTJ0210/followers';

// export async function getFollows() {
//   return fetch('https://api.github.com/users/huaTJ0210/followers').then(
//     response => response.json(),
//   );
// }

export async function getFollows({pageSize, pageNumber, ...params}) {
  // const response = await axios.get(
  //   'https://api.github.com/users/24jieqi/followers',
  // );
  // if (response.status === 200) {
  //   return response.data;
  // } else {
  //   return Promise.reject(new Error(response.statusText));
  // }
  console.log('----pageNumber-----', pageNumber, params);
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push({
      login: `${i}-user`,
      id: i,
    });
  }
  const data = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
}
