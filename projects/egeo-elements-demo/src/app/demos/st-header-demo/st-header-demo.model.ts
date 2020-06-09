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
import { StHeaderMenuOption, StLauncherGroup } from '@stratio/egeo';

export const HEADER_MENU: Array<StHeaderMenuOption> = [
   {
      icon: 'icon-head',
      label: 'Sources',
      link: '/header-demo/test1',
      subMenus: [{
         label: 'Users',
         link: '/header-demo/test1/subtest1'
      },
      {
         label: 'Groups',
         link: '/header-demo/test1/subtest2'
      }]
   },
   {
      icon: 'icon-puzzle',
      label: 'Datasets',
      link: '/header-demo',
      subMenus: []
   },
   {
      icon: 'icon-layers',
      label: 'Security',
      link: 'http://www.google.es',
      external: true,
      openInNewPage: false,
      subMenus: []
   },
   {
      icon: 'icon-layers',
      label: 'Glossaries',
      link: 'http://www.stratio.com',
      external: true,
      openInNewPage: true,
      subMenus: []
   }
];

// tslint:disable:max-line-length
export const LONG_CONTENT: string = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu vestibulum dolor. Fusce justo mauris, egestas non odio sed, tempus vestibulum ligula. Vivamus ex lacus, aliquet non neque a, posuere luctus ligula. Vestibulum ut ligula et dolor lobortis pulvinar vitae non massa. Donec consectetur sem et quam aliquam molestie. Ut sollicitudin venenatis convallis. Integer consectetur dolor volutpat, scelerisque sem vitae, maximus ligula. Morbi vel eros quis magna posuere laoreet scelerisque non turpis. Quisque lectus odio, fringilla vel venenatis sed, molestie sit amet leo. Maecenas augue justo, placerat sit amet quam nec, fermentum hendrerit lacus. Quisque vel tortor vitae urna egestas venenatis.</p>
<br><p>Cras vel odio tellus. In eu eros in justo efficitur ornare a eu diam. Ut metus augue, maximus sit amet nisl id, blandit sollicitudin diam. Duis nibh arcu, cursus ac tincidunt nec, bibendum nec metus. Sed sed laoreet dolor, ut dapibus tortor. Vivamus sit amet porttitor purus. Curabitur lobortis egestas eros, a vestibulum enim sollicitudin vel. Vestibulum sodales dui elit, vel rhoncus dui scelerisque sed. Quisque non lorem pellentesque, fermentum lacus sagittis, mollis justo. Proin est ex, pulvinar non nisi in, malesuada pellentesque justo.</p>
<br><p>Praesent interdum nisi eu elit ultricies, in pellentesque arcu pharetra. Morbi varius purus tincidunt velit bibendum consectetur. Mauris sit amet odio a mauris euismod euismod non sed ipsum. Quisque auctor ipsum ipsum, ut scelerisque eros auctor ut. Suspendisse egestas a purus at pretium. Etiam mattis magna ipsum, nec egestas nulla vestibulum eu. Mauris maximus maximus nisi scelerisque sagittis. Aenean odio ex, aliquam vel euismod ac, luctus non dolor. Curabitur malesuada ipsum eget sem congue luctus. Donec in porta risus, non pharetra velit. Vivamus commodo leo non dignissim rhoncus. Vivamus dapibus, ligula vitae auctor consectetur, leo odio tincidunt nunc, vel sagittis est eros sagittis nisi. Vivamus scelerisque metus ac neque volutpat rhoncus. Nam ornare elementum elit, eget faucibus ante ultricies non. Morbi massa odio, ultricies eget sapien vel, dictum auctor ante.</p>
<br><p>Phasellus nec congue ex. Maecenas vulputate tincidunt augue a maximus. Nullam sit amet molestie neque, cursus vehicula lorem. Aenean varius nisi a ipsum egestas, nec fringilla libero sagittis. Phasellus pulvinar lorem ornare dui commodo, eu pharetra dui posuere. Cras venenatis augue lorem, quis mattis orci varius non. Vivamus eu risus vitae felis accumsan luctus. Duis tincidunt quis est a placerat.</p>
<br><p>Nulla suscipit ac eros non porttitor. In erat magna, luctus at dolor non, auctor porttitor felis. Sed eget lacus vehicula nunc convallis sagittis. Nulla vel metus auctor lectus eleifend laoreet. Vestibulum efficitur ipsum in dolor tincidunt, nec porttitor nisi fringilla. Integer porta est at rutrum tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet enim lacinia, elementum mi a, congue eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut et eleifend nibh. Phasellus elit purus, tempor quis ligula in, tristique pellentesque sapien. Phasellus ac arcu eget velit tincidunt dapibus. Vivamus vel rhoncus felis. Etiam id purus ac velit imperdiet euismod non interdum lectus. Vestibulum diam metus, facilisis at nibh eu, tempor viverra lectus. Quisque suscipit dui vitae augue maximus mollis.</p>
<br><p>Nulla facilisis lectus id tortor fringilla euismod blandit ut leo. Nam condimentum mi vitae sodales lacinia. Praesent interdum consectetur elit vel feugiat. Donec porta leo nec euismod maximus. Aliquam convallis nunc ipsum, ac dignissim orci auctor eu. Quisque placerat blandit feugiat. Mauris consectetur mollis diam, eget malesuada dolor euismod eget. Donec sit amet massa sapien. Vivamus eget luctus ipsum. Morbi velit libero, venenatis quis nibh eu, volutpat vulputate ex. Curabitur in diam justo. Morbi et rhoncus elit. Vestibulum odio velit, mattis ac hendrerit ac, finibus nec justo. In dictum vehicula diam id dignissim. Aenean non nisl ligula. Donec nec suscipit leo, id vulputate libero.</p>
<br><p>Phasellus facilisis nulla eu diam euismod tincidunt. In convallis nulla mauris. Aenean at ante mauris. Maecenas ullamcorper blandit ultrices. Suspendisse vestibulum ullamcorper augue id hendrerit. Mauris accumsan ante nec venenatis egestas. Duis sit amet rhoncus neque. Nullam interdum elit quis tellus rutrum fermentum. Suspendisse consectetur at sem id sodales.</p>
<br><p>Duis arcu felis, fermentum sit amet odio vitae, accumsan varius orci. Donec tincidunt mauris at nunc blandit imperdiet. Nulla elementum vitae tellus ac dictum. Nullam est magna, tincidunt quis dolor et, sodales rhoncus ex. Cras auctor ornare volutpat. Nullam tristique lacus in pellentesque suscipit. Praesent finibus laoreet leo molestie placerat. Nulla ante risus, eleifend id pretium sit amet, bibendum ut ex. Cras ut neque dictum odio condimentum sodales nec quis turpis. Quisque laoreet dui elit, at fermentum diam tincidunt nec. Phasellus accumsan sodales ultricies. Mauris rutrum libero a hendrerit condimentum. Vivamus aliquam vitae purus vel sollicitudin. Integer ac est quis felis auctor eleifend.</p>
<br><p>Morbi et lectus venenatis, hendrerit nulla vitae, tempus nisl. Ut posuere velit sed lorem tincidunt, nec vestibulum mauris ullamcorper. Ut auctor nisl non hendrerit sagittis. Morbi tristique quis sem nec sagittis. Proin ornare, purus nec iaculis congue, tortor nunc pharetra elit, sit amet consectetur nisl lorem ullamcorper tortor. Integer tincidunt sodales mollis. Fusce a tincidunt arcu, porttitor cursus est.</p>
<br><p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla lobortis fringilla justo a tincidunt. Quisque ut aliquam nibh. Curabitur consequat euismod enim. Vivamus pretium augue non placerat scelerisque. Suspendisse blandit dolor vitae arcu vestibulum, quis pellentesque quam lobortis. Quisque sapien turpis, dignissim vitae tellus at, luctus facilisis magna. Nulla pretium condimentum luctus.</p>
`;

export const LAUNCHER_ITEMS: StLauncherGroup[] = [
   {
      label: 'Egeo',
      items: [{
         label: 'Egeo',
         url: 'https://github.com/Stratio/egeo'
      },
      {
         label: 'Egeo Web (Esta web esta deprecada por lo que ya no tiene mantenimiento)',
         url: 'https://github.com/Stratio/egeo-web'
      },
      {
         label: 'Egeo.Starter.asdasdas.asdasd.asd.asd.asgfg.df.gdf.gdf.gtw.rtwefds',
         url: 'https://github.com/Stratio/egeo-starter'
      }]
   },
   {
      label: 'Angular',
      items: [{
         label: 'Docs',
         url: 'https://angular.io/docs'
      },
      {
         label: 'Github',
         url: 'https://github.com/angular/angular'
      }]
   },
   {
      label: 'Stratio',
      items: [{
         label: 'Stratio',
         url: 'http://www.stratio.com/'
      },
      {
         label: 'Linkedn',
         url: 'https://www.linkedin.com/company/5122962/'
      },
      {
         label: 'Twitter',
         url: 'https://twitter.com/stratiobd'
      },
      {
         label: 'Youtube',
         url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw'
      },
      {
         label: 'Paradigma Digital',
         url: 'https://www.paradigmadigital.com'
      }]
   }
];
