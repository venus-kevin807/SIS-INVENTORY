// header.component.ts
import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { AuthService } from '../../auth/services/authServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isProfileMenuOpen = false;

  constructor(
    public navService: NavigationService,
    public authService: AuthService,
    private router: Router
  ) {}

  toggleProfileMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const profileMenu = document.querySelector('.header_profile-menu');
    const profileImg = document.querySelector('.header_img');

    if (this.isProfileMenuOpen &&
        profileMenu && !profileMenu.contains(event.target as Node) &&
        profileImg && !profileImg.contains(event.target as Node)) {
      this.isProfileMenuOpen = false;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
