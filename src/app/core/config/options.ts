export const ROWS_DEFAULT_REPORT = 1000;
export const ROWS_DEFAULT = 5;
export const ROWS_OPTIONS = [5,10, 25, 50];

export const TIME_RETURN_TRAY = 3000;

export enum PARAMS_AUXILIAR {
    ESTADO = '1',
    TIPO_DOCUMENTO ='2',
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

