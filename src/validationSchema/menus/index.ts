import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  calories: yup.number().integer().required(),
  protein: yup.number().integer().required(),
  carbs: yup.number().integer().required(),
  fat: yup.number().integer().required(),
});
