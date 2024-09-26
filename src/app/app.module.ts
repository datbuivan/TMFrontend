import { NgModule } from '@angular/core';
import {
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { LayoutModule } from './layout/layout.module';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { ManagementModule } from './management/management.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './app.routing';

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled',
    // onSameUrlNavigation: 'reload',
};
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        LayoutModule,
        ManagementModule,
    ],
    providers: [
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
