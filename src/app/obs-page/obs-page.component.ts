import { Component, OnInit } from '@angular/core';
import { StartStopComponent } from './start-stop/start-stop.component';
import { ListenerComponent } from './listener/listener.component';
import { PasswordComponent } from './password/password.component';
import { ProducerComponent } from './producer/producer.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@Component({
    selector: 'app-obs-page',
    imports: [StartStopComponent, ListenerComponent, PasswordComponent, ProducerComponent, AutoCompleteComponent],
    templateUrl: './obs-page.component.html',
    styleUrls: ['./obs-page.component.css']
})
export class ObsPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}
