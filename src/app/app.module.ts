import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarMascotaComponent } from './components/agregar-mascota/agregar-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AfterViewInit, Component, ViewChild} from '@angular/core';

//Angular material
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AgregarMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    //MatTableDataSource,
    //MatSort,
    MatSortModule,
    MatPaginatorModule,
   //MatPaginator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
