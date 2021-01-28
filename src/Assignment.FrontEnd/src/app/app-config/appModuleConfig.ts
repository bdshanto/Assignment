import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { EmployeeRoutingModule } from '../employee/employee/employee-routing.module';

export const appImport = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule
];

export const commonImports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  EmployeeRoutingModule,
  MatToolbarModule,
  MatButtonModule,
];



export const appExport = [];
export const appProvider = [];
export const appDeclarations = [AppComponent];

