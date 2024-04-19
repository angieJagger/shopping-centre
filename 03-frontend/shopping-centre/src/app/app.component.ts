import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { LoginStatusComponent } from "./components/login-status/login-status.component";
import { OktaAuthModule } from '@okta/okta-angular';
import { MembersPageComponent } from './components/members-page/members-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        NgbModule,
        OktaAuthModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        ProductListComponent,
        ProductCategoryMenuComponent,
        SearchComponent,
        ProductDetailsComponent,
        CartStatusComponent,
        LoginStatusComponent,
        MembersPageComponent
    ]
})
export class AppComponent {
  title = 'shopping-centre';
}
