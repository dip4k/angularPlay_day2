import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MangeshComponent } from './mangesh/mangesh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table';
import { TestComponent } from './components/test/test.component'
import { HttpClientModule } from '@angular/common/http';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TestComponent, PropertyBindingComponent], // for component registration
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatTableModule, HttpClientModule, FormsModule], // for other module registration
  bootstrap: [PropertyBindingComponent], // statup component

})
export class AppModule {
}
