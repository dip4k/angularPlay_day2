import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MangeshComponent } from './mangesh/mangesh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table';
import { TestComponent } from './components/test/test.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [TestComponent], // for component registration
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatTableModule, HttpClientModule], // for other module registration
  bootstrap: [TestComponent], // statup component

})
export class AppModule {
}
