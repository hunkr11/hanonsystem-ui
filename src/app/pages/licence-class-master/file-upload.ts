import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

import { LicenceService } from '../../service/licence.service';

@Component({
    selector: 'file-upload',
    template: '<input type="file" [multiple]="multiple" #fileInput>'
})
export class FileUploadComponent {
    @Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;

    constructor(private licService: LicenceService) { }


    uploadStocksFile() {
        console.log('test upload');
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
            }

            this.licService.uploadStocksFileWithObservable(formData)
                .subscribe(res => {
                    //        this.licComponent.fetchLicClassList();
                    console.log('res : ', res);
                    this.downloadFile(res + "");

                    //     this.className = licClass.name;
                });

            // this.http
            //     .post('/homeport/employee/uploadFile', formData)
            // do whatever you do...
            // subscribe to observable to listen for response
        }
    }

    downloadFile(filename: string) {
        console.log("filename : ",filename);
        // this.licService.downloadStocksFileWithObservable(filename)
        // .subscribe(res => {
        //     //        this.licComponent.fetchLicClassList();
        //     console.log('res : ', res);         

        //     //     this.className = licClass.name;
        // });
        window.location.href = '/hanon/folder/'+filename;
    }


}