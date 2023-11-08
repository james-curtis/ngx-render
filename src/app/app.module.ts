import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './page/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, HomeModule],
  bootstrap: [AppComponent],
  providers: [provideClientHydration()],
})
export class AppModule {}
