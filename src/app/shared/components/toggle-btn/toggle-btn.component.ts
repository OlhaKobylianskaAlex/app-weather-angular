import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectThemeDarkMode } from 'src/app/store/app-settings-store/store/selectors/app-settings.selectors';


@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.scss'],
})
export class ToggleBtnComponent implements OnInit {
  @Input('toggleValue') toggleValue: boolean = true;
  @Input('toolTip') toolTip: any;
  @Input('toggleIconTrue') toggleIconTrue: string;
  @Input('toggleIconFalse') toggleIconFalse: string;
  @Input('changeColor') changeColor: boolean = true;
  @Output() toggleEmitter = new EventEmitter<boolean>();

  public darkModeTheme$: Observable<boolean> = this._store.pipe(select(selectThemeDarkMode));

  constructor(private _store: Store) { }

  ngOnInit(): void { }

  public toggleBtn(value: boolean) {
    this.toggleEmitter.emit(value);
  }
}
