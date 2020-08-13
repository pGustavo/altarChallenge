import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  goTo(path: string): void {
    this.route.navigate([path])
  }
  addClass(event) {
    document.querySelector('.gen').classList.add('slide')
  }
  removeClass(event) {
    document.querySelector('.gen').classList.remove('slide')
  }
}
