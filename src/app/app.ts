import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Body } from './body/body';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body, Footer],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cocktail';
}
