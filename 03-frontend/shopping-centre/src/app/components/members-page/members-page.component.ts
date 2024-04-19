import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OktaAuthGuard, OktaAuthModule } from '@okta/okta-angular';
import { LoginStatusComponent } from '../login-status/login-status.component';

@Component({
  selector: 'app-members-page',
  standalone: true,
  imports: [RouterModule, CommonModule, OktaAuthModule, LoginStatusComponent],
  templateUrl: './members-page.component.html',
  styleUrl: './members-page.component.scss'
})
export class MembersPageComponent {

}

/// Okta login: angelika.pawluk94@gmail.com password: root-654321
