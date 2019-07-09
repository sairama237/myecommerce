import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SaiComponent } from './sai/sai.component';
import { PropertyComponent } from './property/property.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwowaydataComponent } from './twowaydata/twowaydata.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ExesComponent } from './exes/exes.component';
import { CustomdirectivesDirective } from './customdirectives.directive';
import { CustompipesPipe } from './custompipes.pipe';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { MyemplyeedataComponent } from './myemplyeedata/myemplyeedata.component';
import { HttpClientModule } from '@angular/common/http';

import { ParentdataComponent } from './parentdata/parentdata.component';
import { ChilddataComponent } from './childdata/childdata.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RoutingmoduleModule } from './routingmodule/routingmodule.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ImageswithapiComponent } from './imageswithapi/imageswithapi.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ModeldrivenregComponent } from './modeldrivenreg/modeldrivenreg.component';
import { TestmethodComponent } from './testmethod/testmethod.component';

@NgModule({
  declarations: [
    AppComponent,
    SaiComponent,
    PropertyComponent,
    EventbindComponent,
    TwowaydataComponent,
    DirectivesComponent,
    ExesComponent,
    CustomdirectivesDirective,
    CustompipesPipe,
   
    RegistrationformComponent,
    MyemplyeedataComponent,
   
    ParentdataComponent,
    ChilddataComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ParentComponent,
    ImageswithapiComponent,
    ReactiveformsComponent,
    ModeldrivenregComponent,
    TestmethodComponent,
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,ReactiveFormsModule,RouterModule,RoutingmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
