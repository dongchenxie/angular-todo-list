import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDirectDirective } from './input-direct.directive';
import { BtnDirectDirective } from './btn-direct.directive';



@NgModule({
  declarations: [
    AppComponent,
    InputDirectDirective,
    BtnDirectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
