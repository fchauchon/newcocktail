import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, map } from 'rxjs';

@Component({
    selector: 'app-password',
    imports: [ReactiveFormsModule],
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

    form: UntypedFormGroup
    password: FormControl<string>
    confirmPassword: FormControl<string>
    percent = 0
    fail = false

    constructor() {
        this.password = new FormControl<string>('', { nonNullable: true })
        this.confirmPassword = new FormControl<string>('', { nonNullable: true })
        this.form = new UntypedFormGroup(
            {
                password: this.password,
                confirmPassword: this.confirmPassword
            }
        )
    }

    ngOnInit(): void {
        this.password.valueChanges.subscribe(
            data => this.percent = this.evaluate(data)
        )

        combineLatest([this.password.valueChanges, this.confirmPassword.valueChanges]).pipe(
        ).subscribe(
            ([data1, data2]) => {
                if (data1 === data2 && this.percent === 80) {
                    this.percent = 100

                    interval(1000).pipe(
                        map( (value: number) => value % 2 === 0)
                    ).subscribe(
                        (fail: boolean) => this.fail = fail
                    )
                }
            }
        )
    }

    evaluate(data: string): number {
        let resultat = 0;
        if (data.length >= 8) {
            resultat += 20;
        }
        if (data.indexOf('!') >= 0) {
            resultat += 20;
        }
        if (data.match(/[0-9]/)) {
            resultat += 20;
        }
        if (data.indexOf('&') >= 0) {
            resultat += 20;
        }
        return resultat;
    }

}
