import * as yup from 'yup';

export const dietitianValidationSchema = yup.object().shape({
  qualification: yup.string().required(),
  experience: yup.number().integer().required(),
  specialization: yup.string().required(),
  availability: yup.date().required(),
  user_id: yup.string().nullable().required(),
});
