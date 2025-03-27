import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-producer',
  imports: [ReactiveFormsModule],
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {

    formGroup: UntypedFormGroup
    dataCtrl: FormControl<string>

    constructor(private communicationService: CommunicationService) {
      this.dataCtrl = new FormControl<string>('', { nonNullable: true })
      this.formGroup = new UntypedFormGroup({
        data: this.dataCtrl
      })
    }

    ngOnInit(): void {
    }

    onSubmit() {
      this.communicationService.pushData(this.dataCtrl.value)
    }
}
