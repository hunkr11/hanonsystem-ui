import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LicenceMasterComponent } from './pages/licence-class-master/lic-mas.component';
import { FileUploadComponent } from './pages/licence-class-master/file-upload';
import { FormsModule } from '@angular/forms';
import { LicenceService } from './service/licence.service';
import {HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,LicenceMasterComponent,FileUploadComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,HttpClientModule
  ],
  providers: [LicenceService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
