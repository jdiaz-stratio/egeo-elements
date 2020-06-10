import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChangelogService } from './changelog.service';

@Component({
  selector: 'changelog-demo',
  templateUrl: './changelog.html',
  styleUrls: ['./changelog.scss']
})

export class ChangelogComponent implements OnInit, OnDestroy {

   public changelog: string = '';

   private sub: Subscription;

   constructor(private service: ChangelogService) { }

   ngOnInit(): void {
      this.sub = this.service.getChangelog().subscribe(response => this.changelog = response);
   }

   ngOnDestroy(): void {
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

}
