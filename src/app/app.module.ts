import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderlineDirective } from './underline.directive';
import { ReversePipe } from './reverse.pipe';
import { DettagliComponentComponent } from './dettagli-component/dettagli-component.component';
import { DettagliPageComponent } from './dettagli-page/dettagli-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderlineDirective,
    ReversePipe,
    DettagliComponentComponent,
    DettagliPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
