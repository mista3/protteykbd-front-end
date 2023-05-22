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
});
