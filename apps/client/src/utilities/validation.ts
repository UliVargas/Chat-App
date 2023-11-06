import { TypeWithKey } from '../interfaces/type-with-keys'

export const getValidationSuccess = (endpointName: string): string => {
  const codeMatcher: TypeWithKey<string> = {
    createUser: 'El usuario se creo correctamente',
    login: 'Se inició sesión correctamente'
  }
  return codeMatcher[endpointName]
}

export const getValidationError = (errorCode: string): string => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Se rompió la red',
    ERR_TIMEOUT: 'Se acabó el tiempo',
    ERR_CANCEL: 'Se canceló la petición',
    ERR_UNKNOWN: 'Error desconocido',
    ERR_400: 'Error 400',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
    NO_PERMISSIONS: 'No tienes permisos'
  }

  return codeMatcher[errorCode]
}