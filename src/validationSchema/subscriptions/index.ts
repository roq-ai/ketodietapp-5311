import * as yup from 'yup';

export const subscriptionValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  payment_status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
