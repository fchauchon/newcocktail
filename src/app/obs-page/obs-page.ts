import { Component, OnInit } from '@angular/core';
import { AutoComplete } from './auto-complete/auto-complete';
import { Listener } from './listener/listener';
import { Password } from './password/password';
import { Producer } from './producer/producer';
import { StartStop } from './start-stop/start-stop';

@Component({
    selector: 'app-obs-page',
    imports: [StartStop, Listener, Password, Producer, AutoComplete],
    templateUrl: './obs-page.html',
    styleUrls: ['./obs-page.css']
})
export class ObsPage implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}
