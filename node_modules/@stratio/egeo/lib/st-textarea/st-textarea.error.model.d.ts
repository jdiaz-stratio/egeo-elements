import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export interface StTextareaError {
    generic?: string;
    required?: string;
    minLength?: string;
    maxLength?: string;
    pattern?: string;
}
export interface StTextareaErrorSchema {
    generic?: TranslateableElement;
    required?: TranslateableElement;
}
