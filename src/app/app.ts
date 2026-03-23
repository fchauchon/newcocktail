import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { Intro } from "./intro/intro";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Intro, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cocktail');
}
