export interface User {
  id:        string
  name:      string
  last_name: string
  email:     string
  password:  string
  createdAt: string
}

export interface AuthToken extends User {
  token: string
}