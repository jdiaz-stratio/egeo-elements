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
export const TWO_INPUTS_JSON_SCHEMA: any = {
   '$schema': 'http://json-schema.org/schema#',
   'properties': {
      'genericNumberInput': {
         'title': 'Generic number',
         'description': 'Generic input description',
         'type': 'number',
         'default': 5,
         'minimum': 6,
         'maximum': 10,
         'exclusiveMinimum': false,
         'exclusiveMaximum': false
      },
      'genericTextInput': {
         'title': 'Required text',
         'description': 'This is a generic text',
         'type': 'string',
         'default': 'Generic text',
         'minLength': 2,
         'maxLength': 6,
         'pattern': '(a)+'
      }
   },
   'required': [
      'genericNumberInput'
   ]
};
