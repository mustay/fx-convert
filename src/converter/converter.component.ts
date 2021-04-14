import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { ConverterService } from './converter.service';



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  firstOption: FormControl = new FormControl('GBP');
  secondOption: FormControl = new FormControl('AED');

  firstValue: FormControl = new FormControl(1);
  secondValue: FormControl = new FormControl({value: null, disabled: true});

  error: boolean = false;

  constructor(public converterService: ConverterService) { }

  ngOnInit() {
    this.converterService.hydrateLocalRates();
    this.convert();
  }

  convert() {
    this.error = false;
    const first = this.firstOption.value;
    const second = this.secondOption.value;

    const firstValue = this.firstValue.value;

    const getConversion = this.converterService.convertCurrency(firstValue, first, second);

    if (getConversion) {
      this.secondValue.setValue(getConversion);
    } else {
      this.error = true;
    }
  }

  flip() {
    const first = this.firstOption.value;
    const second = this.secondOption.value;

    this.firstOption.setValue(second);
    this.secondOption.setValue(first);

    this.convert();
  }
}