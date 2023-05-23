import ky from 'ky';

export const agent = ky.create({
  hooks: {
    beforeError: [
      (error) => {
        console.log(error);
        return error;
      },
    ],
  },
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
});
