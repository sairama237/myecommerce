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
// import { RoutingmoduleModule } from './routingmodule/routingmodule.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ImageswithapiComponent } from './imageswithapi/imageswithapi.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ModeldrivenregComponent } from './modeldrivenreg/modeldrivenreg.component';
import { MoiveComponent } from './moive/moive.component';
import { MoviedetailslistComponent } from './moviedetailslist/moviedetailslist.component';
import { CustomroutingModule } from './customrouting/customrouting.module';
import { MainnavComponent } from './mainnav/mainnav.component';
import { AddingemplComponent } from './addingempl/addingempl.component';
import { CrudnavComponent } from './crudnav/crudnav.component';
import { CrudoperationModule } from './crudoperation/crudoperation.module';
import { GetproductComponent } from './getproduct/getproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CrudemplistdataComponent } from './crudemplistdata/crudemplistdata.component';
import { CrudempformComponent } from './crudempform/crudempform.component';
import { ProjectnavComponent } from './projectnav/projectnav.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ProjectModule } from './project/project.module';
import { PageslistComponent } from './pageslist/pageslist.component';
import { ProductsdataComponent } from './productsdata/productsdata.component';
import { AddingproducsdetailsComponent } from './addingproducsdetails/addingproducsdetails.component';
import { MensdetailsComponent } from './mensdetails/mensdetails.component';
import { WomensdetailsComponent } from './womensdetails/womensdetails.component';
import { MensdetailslistComponent } from './mensdetailslist/mensdetailslist.component';
import { CustomdireDirective } from './customdire.directive';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { MycartComponent } from './mycart/mycart.component';
import { Bootstarp4dropComponent } from './bootstarp4drop/bootstarp4drop.component';


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
    MoiveComponent,
    MoviedetailslistComponent,
    MainnavComponent,
    AddingemplComponent,
    CrudnavComponent,
    GetproductComponent,
    AddproductComponent,
    CrudemplistdataComponent,
    CrudempformComponent,
    ProjectnavComponent,
    UserdataComponent,
    PageslistComponent,
    ProductsdataComponent,
    AddingproducsdetailsComponent,
    MensdetailsComponent,
    WomensdetailsComponent,
    MensdetailslistComponent,
    CustomdireDirective,
    PaymentgatewayComponent,
    MycartComponent,
    Bootstarp4dropComponent,
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,ReactiveFormsModule,
    RouterModule,CrudoperationModule,
    // RoutingmoduleModule,
    // CustomroutingModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
