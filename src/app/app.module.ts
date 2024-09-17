import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { CustomDirectiveHoverHighlightDirective } from './directives/custom-directive-hover-highlight.directive';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent,
    LifecycleDemoComponent,
    CustomUppercasePipe,
    CustomDirectiveHoverHighlightDirective,
    GrandparentComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
