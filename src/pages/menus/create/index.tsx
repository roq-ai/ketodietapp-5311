import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createMenu } from 'apiSdk/menus';
import { menuValidationSchema } from 'validationSchema/menus';
import { MenuInterface } from 'interfaces/menu';

function MenuCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MenuInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMenu(values);
      resetForm();
      router.push('/menus');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MenuInterface>({
    initialValues: {
      name: '',
      description: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
    validationSchema: menuValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Menus',
              link: '/menus',
            },
            {
              label: 'Create Menu',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Menu
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.description}
            label={'Description'}
            props={{
              name: 'description',
              placeholder: 'Description',
              value: formik.values?.description,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Calories"
            formControlProps={{
              id: 'calories',
              isInvalid: !!formik.errors?.calories,
            }}
            name="calories"
            error={formik.errors?.calories}
            value={formik.values?.calories}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('calories', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Protein"
            formControlProps={{
              id: 'protein',
              isInvalid: !!formik.errors?.protein,
            }}
            name="protein"
            error={formik.errors?.protein}
            value={formik.values?.protein}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('protein', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Carbs"
            formControlProps={{
              id: 'carbs',
              isInvalid: !!formik.errors?.carbs,
            }}
            name="carbs"
            error={formik.errors?.carbs}
            value={formik.values?.carbs}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('carbs', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Fat"
            formControlProps={{
              id: 'fat',
              isInvalid: !!formik.errors?.fat,
            }}
            name="fat"
            error={formik.errors?.fat}
            value={formik.values?.fat}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('fat', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/menus')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'menu',
    operation: AccessOperationEnum.CREATE,
  }),
)(MenuCreatePage);
