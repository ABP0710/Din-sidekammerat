import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidekammeratComponent } from './sidekammerat/sidekammerat.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            SidekammeratComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Din-sidekammerat';
}
