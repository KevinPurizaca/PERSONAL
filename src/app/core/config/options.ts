export const ROWS_DEFAULT_REPORT = 1000;
export const ROWS_DEFAULT = 5;
export const ROWS_OPTIONS = [5,10, 25, 50];

export const TIME_RETURN_TRAY = 3000;

export enum PARAMS_AUXILIAR {
    ESTADO = '1',
    TIPO_DOCUMENTO ='2',
    TIPO_BANCO = '3',
    TIPO_MONEDA = '4',
    TIPO_CUESTIONARIO_GENERAL = '5',
    TIPO_CUESTONARIO_RESPONSABILIDAD = '6',
    TIPO_CARGO = '7',
    TIPO_AREA = '8',
    TIPO_EMPRESA= '9',
    NOMBRE_BANCO= '10',
    TIPO_TRABAJO = '11',
    CONDICION_PAGO= '12',
    TIPO_INVITACION= '13',
    TIPO_PREGUNTA_CUESTONARIO_SSOMA= '14',
    TIPO_ESTADO_PREGUNTA= '15',    
    TIPO_ESTADO_PROVEEDOR= '16',
    TIPO_ESTADO_HOMOLOGACION= '17',
    TIPO_INCIDENCIA= '18' 
}

export const PATTERNS = {
  Letras : '[a-zA-ZáéíóúÁÉÍÓÚ ]*',
  Letras_Numeros :'[a-zA-Z0-9 ]*',
  Numeros :'[0-9 ]*',
  Email : '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
}

export const MAX_LENGTH_FILES =  45 ;


  export const opcionesDeFormatoFecha: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',    
    
  };
  export enum Perfiles{
    Admin =1,
    Perfil_Consulta = 2,
    Proveedor = 3,
    Analista_Adm_Finanzas=4,
    Analista_SSOMA= 5
}



export const VALUE_MILLIONS = 1000000;

