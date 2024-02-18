import { environment } from "src/environments/environment"

const URLBASE = environment.UrlBase;

export const Endpoints = {
  LOGIN: '/seguridad/login',
  GENERA_CODIGO: '/seguridad/genera_codigo',
  PASS_RECOVER: '/seguridad/setUsuarioResetPassword',
  GET_SUBMENU: '/Opcion/GetSubMenu',
}
