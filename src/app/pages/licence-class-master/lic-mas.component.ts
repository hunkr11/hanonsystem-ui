import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'underscore';
import { LicenceService } from '../../service/licence.service';
import { Employee } from '../model/employee';
import { FileUploadComponent } from './file-upload';

@Component({
  selector: 'lic-mas',
  templateUrl: './lic-mas.component.html'

//  styleUrls: ['./app.component.css']
})
export class LicenceMasterComponent implements OnInit {

 //   constructor(private http:Http) { } 
    licList : Employee[];
 //    licList : Array<any> = [];
 //   private employees: Array<any> = [];
    errorMessage: String;
    emp = new Employee();
   

    constructor(private licService : LicenceService) { }

    ngOnInit() : void {
        // uncomment below to retrieve the list on load
      //  this.fetchLicClassList();
         console.log("values 1 : ",JSON.stringify(this.licList));
    }

    fetchLicClassList() : void {

         
        this.licService.getLicenceListWithObservable()
        // .subscribe(
        //      licList => this.licList = licList,
        //             error => this.errorMessage = <any>error);
    //         .subscribe((res) => {
    //             this.employees = res.json().employees;
        .subscribe((res) => {
                this.licList = res;
                console.log("values 2 : ",JSON.stringify(this.licList));
            });
 
                   
    }

    addLicClass() : void {

        console.log('AddLic Class');
        this.licService.addLicenceClassWithObservable(this.emp)        
        .subscribe( employee =>{
            this.fetchLicClassList();
            this.reset();
             console.log("values 3 : ",JSON.stringify(this.licList));
       //     this.className = licClass.name;
        } )
    }

  delEmployee(empId) : void {
        console.log("this",empId);
        this.reset();
        let currObj = {};
        currObj = _.find(this.licList, function (rw) {
                    return rw.empId == empId;
                });
                console.log("currObj",JSON.stringify(currObj));
            }
    editEmployee(empId) : void {
        console.log("this",empId);
        this.reset();
        let currObj = {};
        currObj = _.find(this.licList, function (rw) {
                    return rw.empId == empId;
                });
                console.log("currObj",JSON.stringify(currObj));
            }
 
    private assignValues (curEmp :Employee) {
        this.emp.empId = curEmp.empId;
        this.emp.firstName = curEmp.firstName;
        this.emp.lastName = curEmp.lastName; 
    }

    private reset() {
        this.emp.empId = null;
        this.emp.firstName = null;
        this.emp.lastName = null;
        this.emp.empType = null;        
        this.errorMessage = null;
   //     this.className = null;        
    }

    // ngOnInit() {
    //     this.http.get('https://raw.githubusercontent.com/MicroTamil-Haribabu/ng2-webpack/master/data.json')
    //         .subscribe((res) => {
    //             this.employees = res.json().employees;
    //             for(let x in this.employees) {
    //                 this.employees[x].doj = new Date();
    //             }
    //         })
    // }
  
}
