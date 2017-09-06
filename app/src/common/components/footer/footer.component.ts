import { Component } from '@angular/core';

import { Navigation as NavigationService } from '../../../services/navigation';

@Component({
  selector: 'm-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  constructor(public navigation: NavigationService) {}
}
