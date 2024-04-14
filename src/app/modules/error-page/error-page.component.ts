import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit(): void { }

  public toTheHomePage() {
    this._router.navigate(['']);
  }
}
