import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent implements OnInit {

    current: string = '(vide)'
    sub: Subscription | null = null
    stoooooop: Subject<string> = new Subject<string>()

    constructor() { }

    ngOnInit(): void {
    }

    start() {
        this.sub = interval(500).pipe(
            takeUntil(this.stoooooop),
            map( val => val * 10),
            filter( val => val >= 30),
            map( val => 'Value ' + val)
        ).subscribe(
            val => this.current = val
        )
    }

    stop() {
        this.stoooooop.next('Stop petit lapin')
    }
}
