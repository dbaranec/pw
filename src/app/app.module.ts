import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {HeaderComponent} from './components/header/header.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {AboutComponent} from './components/about/about.component';
import {AppComponent} from './app.component';
import {NasaComponent} from './components/nasa/nasa.component';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {PictureComponent} from './components/picture/picture.component';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {DetailComponent} from './components/detail/detail.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    AppComponent,
    NasaComponent,
    PictureComponent,
    MainContainerComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
