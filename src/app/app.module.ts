import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleasesComponent } from './latestreleases/latestreleases.component';
import { MollywoodmoodComponent } from './mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './ahaoriginals/ahaoriginals.component';
import { CelebratingloveComponent } from './celebratinglove/celebratinglove.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
import { WatchbylanguageComponent } from './navigatingcomponent/watchbylanguage/watchbylanguage.component';
import { NavibarComponent } from './commoncomponent/navibar/navibar.component';
import { FooterComponent } from './commoncomponent/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LatestreleasesComponent,
    MollywoodmoodComponent,
    AhaoriginalsComponent,
    CelebratingloveComponent,
    WatchforfreeComponent,
    WatchbylanguageComponent,
    NavibarComponent,
    FooterComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
