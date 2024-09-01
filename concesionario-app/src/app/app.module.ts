import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgToyotaComponent } from './components/atoms/nav/img-toyota/img-toyota.component';
import { ImgAutoamericaComponent } from './components/atoms/nav/img-autoamerica/img-autoamerica.component';
import { ImgResponsComponent } from './components/atoms/nav/img-respons/img-respons.component';
import { LModelosComponent } from './components/atoms/nav/l-modelos/l-modelos.component';
import { LProventaComponent } from './components/atoms/nav/l-proventa/l-proventa.component';
import { LFinanciacionComponent } from './components/atoms/nav/l-financiacion/l-financiacion.component';
import { LConfToyotaComponent } from './components/atoms/nav/l-conf-toyota/l-conf-toyota.component';
import { LEntregaInmediataComponent } from './components/atoms/nav/l-entrega-inmediata/l-entrega-inmediata.component';
import { LFlotasComponent } from './components/atoms/nav/l-flotas/l-flotas.component';
import { LUsadosComponent } from './components/atoms/nav/l-usados/l-usados.component';
import { NavListComponent } from './components/molecules/nav-list/nav-list.component';
import { NavSectionComponent } from './components/molecules/nav-section/nav-section.component';
import { OptionsNavComponent } from './components/organisms/options-nav/options-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ImgToyotaComponent,
    ImgAutoamericaComponent,
    ImgResponsComponent,
    LModelosComponent,
    LProventaComponent,
    LFinanciacionComponent,
    LConfToyotaComponent,
    LEntregaInmediataComponent,
    LFlotasComponent,
    LUsadosComponent,
    NavListComponent,
    NavSectionComponent,
    OptionsNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
