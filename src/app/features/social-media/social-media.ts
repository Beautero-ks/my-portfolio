import { Component, Input } from '@angular/core';
import { socialMediaLinks } from '../../../data';

@Component({
  selector: 'app-social-media',
  imports: [],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss'
})
export class SocialMedia {
  @Input() platform: string = '';
  @Input() url: string = '';

  socialMediaLinks = socialMediaLinks;
}
