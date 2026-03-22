import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Communication } from '../../communication';

@Component({
  selector: 'app-producer',
  imports: [ReactiveFormsModule],
  templateUrl: './producer.html',
  styleUrls: ['./producer.css']
})
export class Producer implements OnInit {

    formGroup: FormGroup
    dataCtrl: FormControl<string>

    constructor(private communicationService: Communication) {
      this.dataCtrl = new FormControl<string>('', { nonNullable: true })
      this.formGroup = new FormGroup({
        data: this.dataCtrl
      })
    }

    ngOnInit(): void {
    }

    onSubmit() {
      this.communicationService.pushData(this.dataCtrl.value)
    }
}
