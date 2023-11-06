import { isFulfilled } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

import { SnackbarUtilities } from '../../snackbar'
import { getValidationSuccess } from '../../utilities/validation'

/**
 * Log an error and show a snackbar!
 */
export const rtkQuerySuccessLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    // RTK Query usa `createAsyncThunk` de redux-toolkit por debajo, ¡así que podemos utilizar estos comparadores!
    if (isFulfilled(action)) {
      SnackbarUtilities.success(
        getValidationSuccess(action.meta.arg.endpointName)
      )
    }

    return next(action)
  }