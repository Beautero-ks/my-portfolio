import { Component } from '@angular/core';
import { socialMediaLinks } from '../../../data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  socialLinks = socialMediaLinks;
  currentYear: number = new Date().getFullYear();
}
