import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderModule } from './modules/components/header/header.module';
import { DvButtonComponent } from './modules/components/header/dv-button/dv-button.component';
import { avNavbar } from './modules/components/av-navbar/av-navbar.module';
import { avFormModule } from './modules/components/av-form/av-form.module';
import { ContainerModule } from './modules/components/container/container.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HeaderModule,
    CommonModule,
    FormsModule,
    avNavbar,
    avFormModule,
    ContainerModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
