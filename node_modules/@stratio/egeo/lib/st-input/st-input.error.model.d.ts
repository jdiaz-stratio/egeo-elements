import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export interface StError {
    generic?: string;
    required?: string;
}
export interface StInputError extends StError {
    minLength?: string;
    maxLength?: string;
    min?: string;
    max?: string;
    type?: string;
    pattern?: string;
}
export interface StInputErrorSchema {
    generic?: TranslateableElement;
    required?: TranslateableElement;
    minLength?: TranslateableElement;
    maxLength?: TranslateableElement;
    min?: TranslateableElement;
    max?: TranslateableElement;
    type?: TranslateableElement;
    pattern?: TranslateableElement;
}
