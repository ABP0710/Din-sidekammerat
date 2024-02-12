import { Component } from '@angular/core';
import { HeadlinerComponent } from '../headliner/headliner.component';
import { PicComponent } from '../pic/pic.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-sidekammerat',
  standalone: true,
  imports: [HeadlinerComponent, PicComponent, NavBarComponent, RouterOutlet],
  templateUrl: './sidekammerat.component.html',
  styleUrl: './sidekammerat.component.css'
})


export class SidekammeratComponent {
  
}
