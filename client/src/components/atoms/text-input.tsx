import { FieldHookConfig, useField } from 'formik'
import { FormHelperText, TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

type Props = TextFieldProps & FieldHookConfig<string>

export const TextInput: FC<Props> = ({ ...props }) => {
  const [field, { error, touched }] = useField(props)
  
  return (
    <>
      <TextField {...field} {...props} fullWidth/>
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </>
  )
}