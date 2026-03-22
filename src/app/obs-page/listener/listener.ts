import { Component, OnInit } from '@angular/core';
import { Communication } from '../../communication';

@Component({
    selector: 'app-listener',
    imports: [],
    templateUrl: './listener.html',
    styleUrls: ['./listener.css']
})
export class Listener implements OnInit {

    data: string = ''
    constructor(private communicationService: Communication) { }

    ngOnInit(): void {
        this.communicationService.onData().subscribe(
            (val: any) => this.data = val
        )
    }

}
