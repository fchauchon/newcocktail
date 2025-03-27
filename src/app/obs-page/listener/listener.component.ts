import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../communication.service';

@Component({
    selector: 'app-listener',
    imports: [],
    templateUrl: './listener.component.html',
    styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {

    data: string = ''
    constructor(private communicationService: CommunicationService) { }

    ngOnInit(): void {
        this.communicationService.onData().subscribe(
            (val: any) => this.data = val
        )
    }

}
