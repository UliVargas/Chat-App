import { FC } from 'react'
import { useSnackbar, ProviderContext, VariantType } from 'notistack'

let useSnackbarRef: ProviderContext
export const SnackbarConfigurator: FC = () => {
  useSnackbarRef = useSnackbar()
  return null
}

export const SnackbarUtilities = {
  toast(msg: string, variant: VariantType = 'default') {
    if (msg) {
      useSnackbarRef.enqueueSnackbar(msg, {
        variant,
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom'
        },
        autoHideDuration: 3000
      })
    }
  },
  success(msg: string) {
    this.toast(msg, 'success')
  },
  error(msg: string) {
    this.toast(msg, 'error')
  }
}