/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { ChangeDetectorRef, Component } from '@angular/core';
import { StDropDownMenuGroup, StDropDownMenuItem, StDropDownVisualMode } from '@stratio/egeo';

import { StDemoLoggerService } from '../shared/st-demo-logger/st-demo-logger.service';

@Component({
   selector: 'st-dropdown-menu-demo',
   templateUrl: 'st-dropdown-menu-demo.html',
   styleUrls: ['./st-dropdown-menu-demo.component.scss']
})
export class StDropdownMenuDemoComponent {

   public configDoc: any = {
      html: 'demo/st-dropdown-menu-demo/st-dropdown-menu-demo.html',
      ts: 'demo/st-dropdown-menu-demo/st-dropdown-menu-demo.ts',
      component: 'lib/st-dropdown-menu/st-dropdown-menu.component.ts'
   };
   public titles: string[] = [];
   public menus: ((StDropDownMenuItem | StDropDownMenuGroup)[])[] = [];
   public active: boolean[] = [];
   public selectedValue: (StDropDownMenuItem | undefined)[] = [];
   public visualMode: StDropDownVisualMode = StDropDownVisualMode.MENU_LIST;
   public isLoading: boolean = false;

   constructor(private _logger: StDemoLoggerService, private _cd: ChangeDetectorRef) {
      const menus: number = 6;
      this.active = Array.from(Array<boolean>(menus)).map(() => false);
      this.selectedValue = Array.from(Array<StDropDownMenuItem>(menus)).map(() => undefined);

      this.titles = ['Normal', 'With Scroll', 'Large Text', 'Group', 'Group With Scroll'];

      this.menus.push(this.generateNormal());
      this.menus.push(this.generateWithScroll());
      this.menus.push(this.generateLargeText());
      this.menus.push(this.generateGroup());
      this.menus.push(this.generateGroupWithScroll());
      this.menus.push(this.generateWithScroll());
   }

   changeActive(position: number): void {
      this.active[position] = !this.active[position];
      this._logger.log('click button and active is: ', this.active[position]);
   }

   onChange(selected: StDropDownMenuItem, position: number): void {
      this.active[position] = false;
      this.selectedValue[position] = selected;
      this._logger.log('select value and hide menu', JSON.stringify(selected));
   }

   getVisualMode(menuId: number): StDropDownVisualMode {
      return menuId % 2 ? StDropDownVisualMode.OPTION_LIST : StDropDownVisualMode.MENU_LIST;
   }

   onScrollAtBottom(): void {
      this.isLoading = true;
      setTimeout(() => {
         this.menus[1].push.apply(this.menus[5], this.generateWithScroll(this.menus[5].length));
         this.isLoading = false;
         this._cd.markForCheck();
      }, 2000);
   }

   private generateNormal(): StDropDownMenuItem[] {
      return [
         {
            label: 'Edit',
            value: 'edit',
            icon: 'icon-cogs'
         },
         {
            label: 'Rename',
            value: 'rename',
            icon: 'icon-cogs'
         },
         {
            label: 'Schedule',
            value: 'schedule',
            icon: 'icon-eye',
            topSeparator: true,
            bottomSeparator: true
         },
         {
            label: 'Security',
            value: 'security',
            icon: 'icon-lock',
            disabled: true
         },
         {
            label: 'Archived',
            value: 'archived',
            iconColor: 'gray',
            icon: 'icon-grid-2',
            textInfo: 'This is an optional text'
         },
         {
            label: 'Publish',
            value: 'published',
            iconColor: 'blue',
            icon: 'icon-cloud-upload',
            disabled: true
         },
         {
            label: 'province of birth',
            value: 'fk',
            iconColor: '#000000',
            icon: 'icon-arrow-up',
            extraIcon: 'icon-info',
            extraIconColor: '#8898a7',
            extraIconBubble: 'To connect this table you have to set “Province” as root',
            textInfo: 'This is an optional text'
         },
         {
            label: 'Delete',
            value: 'delete',
            iconColor: 'red',
            labelColor: 'red',
            icon: 'icon-trash',
            topSeparator: true
         }
      ];
   }

   private generateWithScroll(length: number = 0): StDropDownMenuItem[] {
      return Array.from(Array<StDropDownMenuItem>(20)).map((_value, i) => ({
         label: `Option ${length + i}`,
         value: `option-${length + i}`
      }));
   }

   private generateLargeText(): StDropDownMenuItem[] {
      return Array.from(Array<StDropDownMenuItem>(10)).map((_value, i) => ({
         label: i === 3 ? `Option ${i} with large text that not fit in button size` : `Option ${i}`,
         value: `option-${i}`
      }));
   }

   private generateGroup(): StDropDownMenuGroup[] {
      return [
         {
            title: 'Severity', items: [
               { label: 'Critical Error', value: 'critical' },
               { label: 'Warning', value: 'Warning' }
            ]
         },
         {
            title: 'Status', items: [
               { label: 'Active', value: 'active' },
               { label: 'Inactive', value: 'inactive' }
            ]
         }
      ];
   }

   private generateGroupWithScroll(): StDropDownMenuGroup[] {
      return [
         {
            title: 'Severity', items: [
               { label: 'Critical Error', value: 'critical' },
               { label: 'Warning', value: 'Warning' }
            ]
         },
         {
            title: 'Status', items: [
               { label: 'Active', value: 'active' },
               { label: 'Inactive', value: 'inactive' },
               { label: 'Paused', value: 'paused' },
               { label: 'Stopped', value: 'stopped' },
               { label: 'Running', value: 'running' },
               { label: 'Waiting', value: 'waiting' },
               { label: 'Delayed', value: 'delayed' },
               { label: 'Unknown', value: 'unknown' }
            ]
         }
      ];
   }
}
