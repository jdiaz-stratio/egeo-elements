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


import { Component, OnInit } from '@angular/core';
import {
   StMenuModel,
   StMenuStatus
} from '@stratio/egeo';


enum Options {
   archive,
   save,
   saveAs,
   move,
   delete
}

@Component({
   selector: 'st-menu-demo',
   templateUrl: './st-menu-demo.component.html',
   styleUrls: ['./st-menu-demo.component.scss']
})
export class StMenuDemoComponent {

   public configDoc: any = {
      html: 'demo/st-menu-demo/st-menu-demo.component.html',
      ts: 'demo/st-menu-demo/st-menu-demo.component.ts',
      component: 'lib/st-menu/st-menu.component.ts'
   };

   public menuOptions1: StMenuModel<string>[] = [
      {
         name: 'Option1',
         value: 'option-1'
      },
      {
         name: 'Option2',
         value: 'option-2'
      },
      {
         name: 'Option3',
         value: 'option-3'
      }
   ];


   public menuOptions2: StMenuModel<Options | string>[] = [
      {
         name: 'Refresh',
         icon: 'icon-refresh',
         value: Options.saveAs
      },
      {
         name: 'Move',
         icon: 'icon-move-to-folder',
         value: Options.move
      },
      {
         name: 'Items',
         icon: 'icon-list',
         value: Options.save,
         subMenus: [
            {
               name: 'Item 1',
               value: 'item1'
            },
            {
               name: 'Item 2',
               value: 'item2'
            },
            {
               name: 'Item 3',
               value: 'item3',
               subMenus: [
                  {
                     name: 'Item 3 1',
                     value: 'item-3-1'
                  },
                  {
                     name: 'Item 3 2',
                     value: 'item-3-2'
                  },
                  {
                     name: 'Item 3 3',
                     value: 'item-3-3',
                     subMenus: [
                        {
                           name: 'Item 3 3 1',
                           value: 'item-3-3-1'
                        }
                     ]
                  }
               ]
            },
            {
               name: 'Item 4',
               value: 'item4'
            }
         ]
      },
      {
         name: 'Archive',
         icon: 'icon-archive',
         separator: true,
         value: Options.archive,
         status: StMenuStatus.warning
      },
      {
         name: 'Delete',
         icon: 'icon-trash',
         separator: true,
         value: Options.delete,
         status: StMenuStatus.critical
      }
   ];

   public longMenuOptions: Array<StMenuModel<string>> = [
      {
         name: 'Option1',
         value: 'value1',
         subMenus: Array.from(Array(100).keys()).map((item): StMenuModel<string> => ({
            name: 'item1-' + item,
            value: item.toString()
         }))
      },
      {
         name: 'Option2',
         value: 'option-2',
         subMenus: Array.from(Array(10).keys()).map((item): StMenuModel<string> => ({
            name: 'item2-' + item,
            value: item.toString(),
            subMenus: Array.from(Array(10).keys()).map((subitem): StMenuModel<string> => ({
               name: 'item-' + subitem,
               value: item.toString()
            }))
         }))
      },
      {
         name: 'Option3',
         value: 'option-3',
         subMenus: Array.from(Array(100).keys()).map((item): StMenuModel<string> => ({
            name: 'item3-' + item,
            value: item.toString()
         }))
      }
   ];


   public selectedOption(event: StMenuModel<string>): void {
      console.log(event);
   }
}
