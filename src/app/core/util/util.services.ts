import { Injectable } from "@angular/core";


   @Injectable()
   export class UtilService {

    constructor() {}

   public  base64ToArrayBuffer = (base64: any) => {
        let binaryString = window.atob(base64);
        let binaryLen = binaryString.length;
        let bytes = new Uint8Array(binaryLen);
        for (let i = 0; i < binaryLen; i++) {
            let ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };

    public formatDateUtil(date:Date){
        let day = date.getDate();
        let month:any = date.getMonth();
        let year = date.getFullYear();
        return year+'-'+(month+1)+'-'+day;
    }

   }

