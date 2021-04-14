import { Component } from '@angular/core';
import { ConverterService } from 'src/converter/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fx-app';

  constructor(private converterService: ConverterService) {

  }

  liveRatesToggle({ checked }) {
    if (checked) {
      this.converterService.hydrateRates();
    } else {
      this.converterService.hydrateLocalRates();
    }
  }
}

