import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// for pipes
import { HttpModule } from "@angular/http";

import { Employee } from '../pages/model/employee';

@Injectable()
export class LicenceService {
 //     return this.http.get('/discovery/userLogin?username='+username+'&passwd='+password);
    insertLicClassUrl = "/hanon/employee/addEmployee";
    getLicClassListUrl = "/hanon/employee/getEmployeeList";
    uploadStocksFileUrl = "/hanon/uploadStocksFile";
    downloadStocksFileUrl = "/hanon/folder/";
    uploadFileUrl = "/hanon/employee/uploadFile";
    constructor(private http:Http) { }

    getLicenceListWithObservable() : Observable<Employee[]> {
        // return this.http.get(this.getLicClassListUrl)
        // .map(this.extractData)
        // .catch(this.handleErrorObservable);
        return this.http.get(this.getLicClassListUrl)
    .map((res:Response) => res.json());
    }

    addLicenceClassWithObservable(licClassObj:Employee):Observable<Employee> {
        console.log('addLicenceClassWithObservable');
        let headers = new Headers({ 'Content-Type':'application/json' });
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.insertLicClassUrl,licClassObj,options)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    uploadAddEmpFilesWithObservable(formData : FormData ):Observable<FormData> {
        console.log('addLicenceClassWithObservable');
  //      let headers = new Headers({ 'Content-Type':'application/json' });
  //      let options = new RequestOptions({ headers:headers });
        return this.http.post(this.uploadFileUrl,formData)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    uploadStocksFileWithObservable(formData : FormData ):Observable<FormData> {
        console.log('uploadStocksFileWithObservable');
  //      let headers = new Headers({ 'Content-Type':'application/json' });
  //      let options = new RequestOptions({ headers:headers });
        return this.http.post(this.uploadStocksFileUrl,formData)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    downloadStocksFileWithObservable(fileName : String ):Observable<FormData> {
        console.log('uploadStocksFileWithObservable');
  //      let headers = new Headers({ 'Content-Type':'application/json' });
  //      let options = new RequestOptions({ headers:headers });
        return this.http.get(this.downloadStocksFileUrl+fileName)
       //     .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    private handleErrorObservable(error: Response | any){
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    
    private extractData(res : Response)  {
        
        // let body = res.json();
        
        // return body.data || {};
        let body = res.text();  // If response is a JSON use json()
    //    console.log("body ",body);


    
        if (body) {
            console.log('res :: '+body);
            let resp = JSON.parse(body);
            console.log('resources :: '+resp);
            let resources = resp["files"];
         //   console.log('resources :: '+resources);
            let resource = resources[0];
         //   console.log(resource["newFilename"]); 
            return resource["newFilename"] ;
         } else {
            return {};
         }
    }

    getLicenceListWithPromise() : Promise<Employee[]> {
        return this.http.get(this.getLicClassListUrl).toPromise()
        .then(this.extractData)
        .catch(this.handleErrorObservable);
    }

    addEmployeeWithPromise(licClassObj:Employee):Promise<Employee> {
        let headers = new Headers({ 'Content-Type':'application/json' });
        let options = new RequestOptions({ headers:headers });
        return this.http.post(this.insertLicClassUrl,licClassObj,options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorObservable);
    }
}