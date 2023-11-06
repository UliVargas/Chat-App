import Cookies from 'js-cookie'

export class CookiesManager {
  static saveInCookies(key: string, value: string) {
    if (typeof window === 'undefined') return false
    Cookies.set(key, value, {
      expires: 30, // tiempo de vida de la cookie en días
      path: '/',
      sameSite: 'none', // especifica el valor "none" para el atributo SameSite
      secure: true // debe ser verdadero si se utiliza HTTPS
    })
  }

  static getInCookies(key: string) {
    return Cookies.get(key)
  }

  static clearCookie(key: string) {
    Cookies.remove(key)
  }
}
