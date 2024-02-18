import { Injectable } from "@angular/core";
import { HttpCoreService } from "../services/httpCore.service";
import { CommonService } from "../services/common.service";
import { environment } from "src/environments/environment";
// import * as CryptoJS from 'crypto-js';

@Injectable()
export class UtilService {
    // private secretKey = environment.secretKeyEncript;

    constructor(
        private httpCoreService: HttpCoreService,
        private commonService: CommonService,

    ) { }

    public base64ToArrayBuffer = (base64: any) => {
        let binaryString = window.atob(base64);
        let binaryLen = binaryString.length;
        let bytes = new Uint8Array(binaryLen);
        for (let i = 0; i < binaryLen; i++) {
            let ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };

    public formatDateUtil(date: Date) {
        let day = date.getDate();
        let month: any = date.getMonth();
        let year = date.getFullYear();
        return year + '-' + (month + 1) + '-' + day;
    }

    public base64ToArrayBufferService = async (vplantilla_nombre: any, vplantilla_original: any): Promise<any> => {

        let req = {
            vplantilla_nombre: vplantilla_nombre,
            vplantilla_orginal: vplantilla_original
        }
        this.httpCoreService.post(req, '/descargar/getDescargar').subscribe(res => {


            if (res.IsSuccess) {

                let base64: any = res.file;
                let binaryString = window.atob(base64);
                let binaryLen = binaryString.length;
                let bytes = new Uint8Array(binaryLen);
                for (let i = 0; i < binaryLen; i++) {
                    let ascii = binaryString.charCodeAt(i);
                    bytes[i] = ascii;
                }

                let blob = new Blob([bytes], {
                    type: 'application/vnd.ms-excel',
                });
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = vplantilla_original;
                link.click();


            }
            else{
                this.commonService.HanddleErrorMessage(res);        
            }
        })
    };    

    getSeguridad(router:any) {
        const menu =  this.getItemStorage('menu');

        if(menu){
            let sin_sub_menu:any = menu.find((x:any) => x.vurl === router);
            let opciones:any;
    
            if(sin_sub_menu ){
                const _opcion = sin_sub_menu.opciones[0];
                if(_opcion){
                    opciones =_opcion;
                 }
            }
            else{
                const modulo = '/'+router.split('/')[1];
                const opcion = '/'+router.split('/')[2];
                const permisos = menu.find((x:any) => x.vurl === modulo);
                opciones = permisos.opciones.find((x:any) => x.vurl === opcion); 
            }       
            return opciones; 
        }

    }

    getItemStorage(item:any):any{
        let _item = localStorage.getItem(item);
        if(_item){
            // const bytes = CryptoJS.AES.decrypt(_item, this.secretKey);
            // const valorDesencriptado = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))  ;
            return _item;
        }      
    }
    

    limpiarNombreArchivo(nombreOriginal: string): string {
        let nombreLimpio = nombreOriginal.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return nombreLimpio;
      }
 
}

