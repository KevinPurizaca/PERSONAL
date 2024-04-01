export const Endpoints = {
  LOGIN: '/seguridad/login',
  GENERA_CODIGO: '/seguridad/genera_codigo',
  PASS_RECOVER: '/seguridad/setUsuarioResetPassword',
  GET_SUBMENU: '/Opcion/GetSubMenu',

  GetListTableHead  :'/Masters/AuxiliaryTables/GetListTableHead',
  RegisterTableHead :'/Masters/AuxiliaryTables/RegisterTableHead',
  DeleteTableHead   :'/Masters/AuxiliaryTables/DeleteTableHead?iid_table_headboard=',

  GetListTableDetail   :'/Masters/AuxiliaryTables/GetListTableDetail',
  RegisterTableDetail  :'/Masters/AuxiliaryTables/RegisterTableDetail',
  DeleteTableDetail    :'/Masters/AuxiliaryTables/DeleteTableDetail?iid_table_detail=', 
  GetListTableDetailCB :'/Masters/AuxiliaryTables/GetListTableDetailCB?iid_table_headboard=',

  GetListModule :'/Masters/ModuleOption/GetListModule',
  RegisterModule:'/Masters/ModuleOption/RegisterModule',
  DeleteModule  :'/Masters/ModuleOption/DeleteModule?iid_module=',

  GetListOption  :'/Masters/ModuleOption/GetListOption',
  RegisterOption :'/Masters/ModuleOption/RegisterOption',
  DeleteOption   :'/Masters/ModuleOption/DeleteOption?iid_option=',


  GetListOptionsByModulo :'/Masters/ModuleOption/GetListOptionsByModule',
}
