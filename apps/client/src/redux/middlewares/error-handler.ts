import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

import { SnackbarUtilities } from '../../snackbar'

/**
 * Log an error and show a snackbar!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      SnackbarUtilities.error(action.payload.data.message)
    }

    return next(action)
  }