import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MergeComponent } from './shared/components/merge/merge.component';
import { MergeMapComponent } from './shared/components/merge-map/merge-map.component';
import { MermapProductsComponent } from './shared/components/mermap-products/mermap-products.component';


@NgModule({
  declarations: [
    AppComponent,
    MergeComponent,
    MergeMapComponent,
    MermapProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
