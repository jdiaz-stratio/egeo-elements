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
export function copyToClipboard(value: string): boolean {
   let success = true;
   let range = document.createRange();
   let selection;

   // For IE.
   if ((window as any).clipboardData) {
      (window as any).clipboardData.setData('Text', value);
      return true;
   } else {
      // Create a temporary element off screen.
      const tmpElem = document.createElement('div');
      tmpElem.style.position = 'fixed';
      tmpElem.style.left = '-1000px';
      tmpElem.style.top = '-1000px';
      // Add the input value to the temp element.
      tmpElem.textContent = value;
      document.body.appendChild(tmpElem);
      // Select temp element.
      range.selectNodeContents(tmpElem);

      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      // Lets copy.
      try {
         success = document.execCommand('copy', false, null);
      } catch (e) {
         console.error('Error on copy: ', e);
      }
      tmpElem.remove();
      return success;
   }
}
