import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  date: yup.date().required(),
  meal_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
