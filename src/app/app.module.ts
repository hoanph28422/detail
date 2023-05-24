import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoments/header/header.component';
import { FooterComponent } from './compoments/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderAdminComponent } from './compoments/header-admin/header-admin.component';
import { FooterAdminComponent } from './compoments/footer-admin/footer-admin.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    LayoutAdminComponent,
    LayoutComponent,
    SidebarComponent,
    DashboardComponent,
    ProductsComponent,
    DetailProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
