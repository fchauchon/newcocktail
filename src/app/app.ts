import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Intro } from './intro/intro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Intro, Footer],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cocktail';
}
