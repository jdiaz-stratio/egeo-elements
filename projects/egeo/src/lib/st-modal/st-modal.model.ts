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
import { ComponentRef } from '@angular/core';

import { StModalComponent } from './st-modal.component';

export enum StModalResponse { YES, NO, CLOSE }
export enum StModalBasicType { DELETE, CONFIRM, INFO }

export class StModalButton {
   response?: Function;
   responseValue?: StModalResponse;
   leftIcon?: string;
   rightIcon?: string;
   classes?: string;
   closeOnClick?: boolean;
   label: string;
}

export class StModalConfig {
   fullscreen?: boolean;
   modalTitle?: string;
   messageTitle?: string;
   message?: string;
   html?: string;
   inputs?: Object;
   outputs?: Object;
   buttons?: StModalButton[];
   maxWidth?: number;
   minWidth?: number;
   empty?: boolean;
   showCloseBtn?: boolean;
}

export class StModalButtonResponse {
   response: StModalResponse;
   close: boolean;
}
