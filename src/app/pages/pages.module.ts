import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({

    declarations: [
        InicioComponent,
        PagesComponent
    ],

    exports: [
        InicioComponent
    ],

    imports: [
        SharedModule,
        PAGES_ROUTES
    ]



})

export class  PagesModule {}
