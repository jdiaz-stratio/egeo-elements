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
export enum CATEGORY { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT }

export class Font {
   category: CATEGORY;
   name: string;
   value: string;
   pixels?: string;
}

export const FONTS: Font[][] = [

   // Font family
   [
      { category: CATEGORY.FONT_FAMILY, name: '$egeo-nunito-sans', value: 'Nunito Sans' }
   ],

   // Font size
   [
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-32', value: '2rem', pixels: '32px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxxlarge', value: '1.813rem', pixels: '29px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxlarge', value: '1.563rem', pixels: '25px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xlarge', value: '1.375rem', pixels: '22px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-20', value: '1.25rem', pixels: '20px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-18', value: '1.125rem', pixels: '18px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-16', value: '1rem', pixels: '16px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xsmall', value: '0.938rem', pixels: '15px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-14', value: '0.875rem', pixels: '14px' },
      { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-12', value: '0.75rem', pixels: '12px' }
   ],

   // Line height:
   [
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-giant', value: '2.375rem', pixels: '38px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxxlarge', value: '2.125rem', pixels: '34px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxlarge', value: '1.875rem', pixels: '30px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-26', value: '1.625rem', pixels: '26px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-24', value: '1.5rem', pixels: '24px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-22', value: '1.375rem', pixels: '22px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-small', value: '1.313rem', pixels: '21px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-20', value: '1.25rem', pixels: '20px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-18', value: '1.125rem', pixels: '18px' },
      { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxxsmall', value: '1.063rem', pixels: '17px' }
   ]
];
