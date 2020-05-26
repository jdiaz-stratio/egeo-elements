import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'egeo-elements-demo';

  valueInput = 'Peter';

  public size: number = 50;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
   // this.cd.markForCheck();
  }

  onChangeButton(): void {
    this.valueInput = 'Jorge';
  }
}
