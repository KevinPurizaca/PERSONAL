import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Portafolio', icon: 'pi pi-fw pi-home', routerLink: ['/Client/Portafolio'] }

                ]
            },
            {
                items: [
                    {
                        label: 'Maestras',//'Masters',
                        icon: 'pi pi-briefcase',
                        items: [
                            {
                                label: 'Usuarios',//'Users',
                                icon: 'pi pi-user',
                                routerLink: ['/Masters/Users']
                            },
                            {
                                label: 'Perfiles',//'Profiles',
                                icon: 'pi pi-building',
                                routerLink: ['/Masters/Profiles']
                            },
                            {
                                label: 'Tablas Auxiliares',//'Axiliary-Tables',
                                icon: 'pi pi-table',
                                routerLink: ['/Masters/Axiliary-Tables']
                            },
                            {
                                label: 'Productos',//'Products',
                                icon: 'pi pi-th-large',
                                routerLink: ['/Masters/Products']
                            },
                            {
                                label: 'Categorias',//'Categorys',
                                icon: 'pi pi-slack',
                                routerLink: ['/Masters/Categorys']
                            },
                            {
                                label: 'Marcas',//'Brands',
                                icon: 'pi pi-table',
                                routerLink: ['/Masters/Brands']
                            },
                            {
                                label: 'Opciones Menu',//'Options Menu',
                                icon: 'pi pi-wrench',
                                routerLink: ['/Masters/Options-Menu']
                            }
                        ]
                    },

                ]
            },

            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
             {
                label: 'Utilities',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/pages/timeline']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                ]
            },
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // }
        ];
    }
}













//#region MP_AvisosEmitidos


/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')   
=======================================================================================================================================================================
objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web


=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetAll
=======================================================================================================================================================================
strRutaPlantilla = New TablaDeTablasBL(Globales.cteCodEmp, "EMITIDOS","005").Lista.Item(0).TABLC_VALITE 
012	EMITIDOS  	005	\\10.4.50.48\webarchives\AvisosEmitidosCFP\Plantilla\




strArchivo = New TablaDeTablasBL(Globales.cteCodEmp, "EMITIDOS", "006").Lista.Item(0).TABLC_VALITE + lstTitulos.Item(0).Archivo + ".xls" 
012	EMITIDOS  	006	\\10.4.50.48\webarchives\AvisosEmitidosCFP\Generados\



*/

//#endregion


//#region MP_AvisosIbope


/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web



=======================================================================================================================================================================
[dbo].[upPUBLT_TABLADETABLASGetAll]

SELECT * FROM [dbo].[PUBLT_TABLADETABLAS] WITH(NOLOCK)
WHERE  [TABLC_CODTAB] = 'AVISIBOPE' AND [TABLC_CODITE] = '005'AND ([TABLC_EST] <> '0') 
=======================================================================================================================================================================
strRutaPlantilla = New TablaDeTablasBL(Globales.cteCodEmp, "AVISIBOPE", "005").Lista.Item(0).TABLC_VALITE
012	AVISIBOPE 	005	\\10.4.50.48\webarchives\AvisosIbopeCFP\Plantilla\	1

strArchivo = New TablaDeTablasBL(Globales.cteCodEmp, "AVISIBOPE", "006").Lista.Item(0).TABLC_VALITE + lstTitulos.Item(0).Archivo + ".xls"
012	AVISIBOPE 	006	\\10.4.50.48\webarchives\AvisosIbopeCFP\Generados\	1
*/

//#endregion


//#region Class MP_AvisosOmitidos


/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web
=======================================================================================================================================================================


*/





//#endregion 


//#region MP_CargaPlantillaProgramacion
/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetAllxValite

SELECT [TABLC_CODEMP]
      ,[TABLC_CODTAB]
      ,[TABLC_CODITE]
      ,[TABLC_VALITE]
      ,[TABLC_EST]
      ,[TABLC_USRMOD]
      ,[TABLC_FECMOD]
      ,[TABLC_PCMOD]
      ,rtrim(ltrim(TABLC_NEMONICO)) TABLC_NEMONICO
      ,CASE WHEN [TABLC_EST]=1 THEN 'ACTIVO' ELSE 'INACTIVO' END TABLC_ESTTexto 
  FROM [dbo].[PUBLT_TABLADETABLAS]
  WHERE [TABLC_CODTAB] = 'DIRPROGRAM' AND ([TABLC_EST] <> '0')
 ORDER BY [TABLC_VALITE]
=======================================================================================================================================================================


objTablaDeTablasBEList = New TablaDeTablasBL().ListarPorTab(Globales.cteCodEmp, "DIRPROGRAM")

012	DIRPROGRAM	001	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\
012	DIRPROGRAM	002	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Errores\
012	DIRPROGRAM	003	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Genericas\
012	DIRPROGRAM	004	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Procesados\
012	DIRPROGRAM	006	00
012	DIRPROGRAM	005	01
012	DIRPROGRAM	007	23
012	DIRPROGRAM	008	59
012	DIRPROGRAM	009	tgpesvlcli1175
012	DIRPROGRAM	010	USU003
=======================================================================================================================================================================

*/
//#endregion


//#region  MP_CargaPlantillaProgramacionFueraDeHora
/*
=======================================================================================================================================================================
upPUBLT_TABLADETABLASGetByKey

SELECT 	*    FROM PUBLT_TABLADETABLAS nolock    
WHERE  (TABLC_CODTAB = 'WEBLOG')  AND (TABLC_CODITE = '001')  
=======================================================================================================================================================================

objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "WEBLOG", "001")strLOGCarpeta = objLOGBE.TABLC_VALITE
012	WEBLOG    	001	\\10.4.50.48\webarchives\ServiciosCFP\	     Esta es la ubicación donde se almacenará el log del app web


objLOGBE = objLOGDA.GetByKey(Globales.cteCodEmp, "ACTWEBLOG", "001")
012	ACTWEBLOG 	001	Activar el log del app web
=======================================================================================================================================================================


=======================================================================================================================================================================
[dbo].[upPUBLT_TABLADETABLASGetAll]
	SELECT *
	FROM [dbo].[PUBLT_TABLADETABLAS] WITH(NOLOCK)
	WHERE 
	[TABLC_CODTAB] = 'DIRPROGRAM' 
	
=======================================================================================================================================================================

objTablaDeTablasBEList = New TablaDeTablasBL().ListarPorTab(Globales.cteCodEmp, "DIRPROGRAM")
012	DIRPROGRAM	001	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\		            Servicio carga plantillas de programación: Ruta en donde se buscarán los archivos excel a cargar.
012	DIRPROGRAM	002	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Errores\		    Servicio carga plantillas de programación: Ruta en donde se colocaran los archivos excel procesados con error.
012	DIRPROGRAM	003	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Genericas\		Servicio carga plantillas de programación: Ruta en donde se colocaran los archivos excel genéricos a cargar.
012	DIRPROGRAM	004	\\10.4.50.48\WEBARCHIVES\PlantillasCargaDiaria\Procesados\		Servicio carga plantillas de programación: Ruta en donde se colocaran los archivos excel cargados correctamente.
012	DIRPROGRAM	005	01		                                                        Servicio carga plantillas de programación: Hora de inicio por defecto
012	DIRPROGRAM	006	00                                                          	Servicio carga plantillas de programación: Minuto de inicio por defecto
012	DIRPROGRAM	007	23	                                                        	Servicio carga plantillas de programación: Hora fin por defecto
012	DIRPROGRAM	008	59  	                                                    	Servicio carga plantillas de programación: Minuto fin por defecto
012	DIRPROGRAM	009	tgpesvlcli1175		                                            Servicio carga plantillas de programación: HostName del proceso
012	DIRPROGRAM	010	USU003		                                                    Servicio carga plantillas de programación: Usuario del proceso
=======================================================================================================================================================================

*/
//#endregion





//#region  MP_CargaPlantillaProgramacionyProgAut
/*
56  oTablaDeTablasBEList = New TablaDeTablasBL().ListarPorTab(sCodigoEmpresa, "RUTPLANPRG")

012	RUTPLANPRG	002	D:\WEBARCHIVES\PlantillasProgramacionCFP\Destino\	Carga automátidad de la Plantilla de Programación. Ruta Destino: Lugar donde el RPA almacenará los archivos formateados.
012	RUTPLANPRG	004	D:\WEBARCHIVES\PlantillasProgramacionCFP\Observados\	Carga automátidad de la Plantilla de Programación. Ruta Observados: Lugar donde el proceso MCI almacenará los archivos que no fueron observados por tener alguna observación.
012	RUTPLANPRG	001	D:\WEBARCHIVES\PlantillasProgramacionCFP\Origen\	Carga automátidad de la Plantilla de Programación. Ruta Origen: Lugar donde el usuario guardará sus archivos a ser procesados.
012	RUTPLANPRG	003	D:\WEBARCHIVES\PlantillasProgramacionCFP\Procesados\	Carga automátidad de la Plantilla de Programación. Ruta Procesado: Lugar donde el proceso MCI almacenará los archivos procesados.


*/
//#endregion





//#region MP_ContratosSobregirados
/*
 Dim strRuta As String = New TablaDeTablasBL(Globales.cteCodEmp, "ARLDIR", Nothing).Lista(0).TABLC_VALITE
reader = New StreamReader(strRuta & "\Correo\Plantillas\ContratoSobregirado.txt")

012	ARLDIR    	001	\\10.4.50.48\WEBARCHIVES
012	ARLDIR    	002	\\10.4.50.48\WEBARCHIVES\SERVICIOSCFP
\\10.4.50.48\WEBARCHIVES\SERVICIOSCFP\Correo\Plantillas\ContratoSobregirado.txt
\\10.4.50.48\WEBARCHIVES\ContratoSobregirado.txt
\SERVICIOS\PLANTILLAS\TemplateReporteEstadoCuenta.xls

\\10.4.50.48\WEBARCHIVES\SERVICIOS\PLANTILLAS\TemplateReporteEstadoCuenta.xls
*/
//#endregion


//#region 
/*

*/
//#endregion


//#region 
/*

*/
//#endregion
