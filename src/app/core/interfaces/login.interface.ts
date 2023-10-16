export interface ILoginUserData {
  iid_usuario: string;
  iid_perfil: string;
  perfil: string;
  iid_tipo_documento: string;
  vtipo_documento: string;
  vnro_documento: string;
  vnombres: string;
  vapellido_paterno: string;
  vapellido_materno: string;
  vcorreo_electronico: string;
  vnumero_telefonico: string;
  dfecha_caduca_clave: string;
  dfecha_ultimo_acceso: string;
  iid_empresa: string;
  empresa: string;
}

export interface ILoginResponse {
  isSuccess: boolean;
  message: string;
  messageExeption: string;
  informacion: string;
  data: ILoginUserData;
  menu: IMenuUser[];
  token: string;
}

export interface IMenuUser {
  iid_modulo: number;
  text: string;
  link: string;
  icon: string;
}

export interface IResponse {
  isSuccess: boolean;
  message: string;
  data: any[];
  messageExeption?: string;
  informacion?: string;
}