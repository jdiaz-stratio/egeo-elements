/**
 * @fileoverview added by tsickle
 * Generated from: lib/decorators/require-decorators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EgeoUtils } from '../utils/egeo-utils';
/** @type {?} */
const EGEO_METADATA = Symbol('EgeoLibraryMetadata');
/** @enum {number} */
const METADATA_TYPE = {
    PROPERTY: 0,
};
export { METADATA_TYPE };
/**
 * @record
 */
export function EgeoMetadata() { }
if (false) {
    /** @type {?} */
    EgeoMetadata.prototype.type;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.required;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.requireCondition;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.deprecated;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.initialValue;
}
// tslint:disable:only-arrow-functions
/**
 * @param {?=} condition
 * @return {?}
 */
export function StRequired(condition) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        /** @type {?} */
        const meta = Reflect.getOwnMetadata(EGEO_METADATA, target.constructor) || {};
        meta[name] = meta.hasOwnProperty(name) && meta[name] || { type: 0 /* PROPERTY */ };
        meta[name].required = true;
        if (condition !== undefined) {
            meta[name].requireCondition = condition;
        }
        Reflect.defineMetadata(EGEO_METADATA, meta, target.constructor);
    });
}
/**
 * @param {?=} initialValue
 * @return {?}
 */
export function StDeprecated(initialValue) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        /** @type {?} */
        const meta = Reflect.getOwnMetadata(EGEO_METADATA, target.constructor) || {};
        meta[name] = meta.hasOwnProperty(name) && meta[name] || { type: 0 /* PROPERTY */ };
        meta[name].deprecated = true;
        if (initialValue !== undefined) {
            meta[name].initialValue = initialValue;
        }
        Reflect.defineMetadata(EGEO_METADATA, meta, target.constructor);
    });
}
/**
 * @param {?=} params
 * @return {?}
 */
export function StEgeo(params) {
    return (/**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        let _onInit = target.prototype.ngOnInit;
        if (_onInit !== undefined) {
            target.prototype.ngOnInit = (/**
             * @param {...?} args
             * @return {?}
             */
            function (...args) {
                checkDeprecated(target, this);
                checkRequired(target, this);
                _onInit.apply(this, args);
            });
        }
        else {
            target.prototype.ngOnInit = (/**
             * @return {?}
             */
            function () {
                checkDeprecated(target, this);
                checkRequired(target, this);
            });
        }
    });
}
/**
 * @param {?} target
 * @param {?} scope
 * @return {?}
 */
function checkDeprecated(target, scope) {
    /** @type {?} */
    const meta = Reflect.getOwnMetadata(EGEO_METADATA, target);
    if (meta !== undefined) {
        Object.keys(meta).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (meta[key].deprecated) {
                if (scope[key] !== undefined) {
                    console.warn(`${EgeoUtils.toDash(target.name)}: field ${key} is a deprecated field`);
                }
                else if (meta[key].initialValue) {
                    scope[key] = meta[key].initialValue;
                }
            }
        }));
    }
}
/**
 * @param {?} target
 * @param {?} scope
 * @return {?}
 */
function checkRequired(target, scope) {
    /** @type {?} */
    const meta = Reflect.getOwnMetadata(EGEO_METADATA, target);
    if (meta !== undefined) {
        /** @type {?} */
        let inputs = getKeys(Object.keys(meta), meta, scope);
        EgeoUtils.validateInputs(scope, inputs, target.name);
    }
}
/**
 * @param {?} inputs
 * @param {?} metadata
 * @param {?} scope
 * @return {?}
 */
function getKeys(inputs, metadata, scope) {
    return inputs.reduce((/**
     * @param {?} prev
     * @param {?} curr
     * @return {?}
     */
    (prev, curr) => {
        if (metadata[curr].requireCondition !== undefined) {
            if (checkConditionMetadata(scope, metadata[curr].requireCondition)) {
                prev.push(curr);
            }
        }
        else if (metadata[curr].required) {
            prev.push(curr);
        }
        return prev;
    }), []);
}
/**
 * @param {?} scope
 * @param {?} key
 * @return {?}
 */
function checkConditionMetadata(scope, key) {
    if (typeof scope[key] === 'function') {
        return scope[key].apply(scope);
    }
    else {
        return scope[key];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS1kZWNvcmF0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7TUFFMUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzs7QUFFbkQsTUFBa0IsYUFBYTtJQUFHLFFBQVEsR0FBQTtFQUFFOzs7OztBQUU1QyxrQ0FNQzs7O0lBTEUsNEJBQW9COztJQUNwQixnQ0FBbUI7O0lBQ25CLHdDQUEwQjs7SUFDMUIsa0NBQXFCOztJQUNyQixvQ0FBbUI7Ozs7Ozs7QUFJdEIsTUFBTSxVQUFVLFVBQVUsQ0FBQyxTQUFrQjtJQUMxQzs7Ozs7SUFBTyxVQUFVLE1BQVcsRUFBRSxJQUFZOztjQUNqQyxJQUFJLEdBQVEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxrQkFBd0IsRUFBRSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDLEVBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsWUFB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QUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZEO0FBQ0osQ0FBQzs7Ozs7OztBQUVELFNBQVMsT0FBTyxDQUFDLE1BQWdCLEVBQUUsUUFBeUMsRUFBRSxLQUFVO0lBQ3JGLE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDakMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxFQUFFO1lBQ2hELElBQUksc0JBQXNCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCO1NBQ0g7YUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1YsQ0FBQzs7Ozs7O0FBRUQsU0FBUyxzQkFBc0IsQ0FBQyxLQUFVLEVBQUUsR0FBVztJQUNwRCxJQUFJLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNuQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7U0FBTTtRQUNKLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0ICogYXMgUmVmbGVjdE1ldGFkYXRhIGZyb20gJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBFZ2VvVXRpbHMgfSBmcm9tICcuLi91dGlscy9lZ2VvLXV0aWxzJztcblxuY29uc3QgRUdFT19NRVRBREFUQSA9IFN5bWJvbCgnRWdlb0xpYnJhcnlNZXRhZGF0YScpO1xuXG5leHBvcnQgY29uc3QgZW51bSBNRVRBREFUQV9UWVBFIHsgUFJPUEVSVFkgfVxuXG5leHBvcnQgaW50ZXJmYWNlIEVnZW9NZXRhZGF0YSB7XG4gICB0eXBlOiBNRVRBREFUQV9UWVBFO1xuICAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICAgcmVxdWlyZUNvbmRpdGlvbj86IHN0cmluZztcbiAgIGRlcHJlY2F0ZWQ/OiBib29sZWFuO1xuICAgaW5pdGlhbFZhbHVlPzogYW55O1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmx5LWFycm93LWZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIFN0UmVxdWlyZWQoY29uZGl0aW9uPzogc3RyaW5nKTogYW55IHtcbiAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICBjb25zdCBtZXRhOiBhbnkgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKEVHRU9fTUVUQURBVEEsIHRhcmdldC5jb25zdHJ1Y3RvcikgfHwge307XG4gICAgICBtZXRhW25hbWVdID0gbWV0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBtZXRhW25hbWVdIHx8IHsgdHlwZTogTUVUQURBVEFfVFlQRS5QUk9QRVJUWSB9O1xuICAgICAgbWV0YVtuYW1lXS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICBpZiAoY29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIG1ldGFbbmFtZV0ucmVxdWlyZUNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgIH1cblxuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShFR0VPX01FVEFEQVRBLCBtZXRhLCB0YXJnZXQuY29uc3RydWN0b3IpO1xuICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0RGVwcmVjYXRlZChpbml0aWFsVmFsdWU/OiBhbnkpOiBhbnkge1xuICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgIGNvbnN0IG1ldGE6IGFueSA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoRUdFT19NRVRBREFUQSwgdGFyZ2V0LmNvbnN0cnVjdG9yKSB8fCB7fTtcbiAgICAgIG1ldGFbbmFtZV0gPSBtZXRhLmhhc093blByb3BlcnR5KG5hbWUpICYmIG1ldGFbbmFtZV0gfHwgeyB0eXBlOiBNRVRBREFUQV9UWVBFLlBST1BFUlRZIH07XG4gICAgICBtZXRhW25hbWVdLmRlcHJlY2F0ZWQgPSB0cnVlO1xuICAgICAgaWYgKGluaXRpYWxWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICBtZXRhW25hbWVdLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShFR0VPX01FVEFEQVRBLCBtZXRhLCB0YXJnZXQuY29uc3RydWN0b3IpO1xuICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0RWdlbyhwYXJhbXM/OiAnJyk6IGFueSB7XG4gICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55KTogYW55IHtcbiAgICAgIGxldCBfb25Jbml0ID0gdGFyZ2V0LnByb3RvdHlwZS5uZ09uSW5pdDtcbiAgICAgIGlmIChfb25Jbml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRhcmdldC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgICAgIGNoZWNrRGVwcmVjYXRlZCh0YXJnZXQsIHRoaXMpO1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZCh0YXJnZXQsIHRoaXMpO1xuICAgICAgICAgICAgX29uSW5pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcbiAgICAgICAgICAgIGNoZWNrRGVwcmVjYXRlZCh0YXJnZXQsIHRoaXMpO1xuICAgICAgICAgICAgY2hlY2tSZXF1aXJlZCh0YXJnZXQsIHRoaXMpO1xuICAgICAgICAgfTtcbiAgICAgIH1cbiAgIH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrRGVwcmVjYXRlZCh0YXJnZXQ6IGFueSwgc2NvcGU6IGFueSk6IHZvaWQge1xuICAgY29uc3QgbWV0YTogYW55ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShFR0VPX01FVEFEQVRBLCB0YXJnZXQpO1xuICAgaWYgKG1ldGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmtleXMobWV0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICBpZiAobWV0YVtrZXldLmRlcHJlY2F0ZWQpIHtcbiAgICAgICAgICAgIGlmIChzY29wZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtFZ2VvVXRpbHMudG9EYXNoKHRhcmdldC5uYW1lKX06IGZpZWxkICR7a2V5fSBpcyBhIGRlcHJlY2F0ZWQgZmllbGRgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YVtrZXldLmluaXRpYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgc2NvcGVba2V5XSA9IG1ldGFba2V5XS5pbml0aWFsVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tSZXF1aXJlZCh0YXJnZXQ6IGFueSwgc2NvcGU6IGFueSk6IHZvaWQge1xuICAgY29uc3QgbWV0YTogYW55ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShFR0VPX01FVEFEQVRBLCB0YXJnZXQpO1xuICAgaWYgKG1ldGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IGlucHV0czogc3RyaW5nW10gPSBnZXRLZXlzKE9iamVjdC5rZXlzKG1ldGEpLCBtZXRhLCBzY29wZSk7XG4gICAgICBFZ2VvVXRpbHMudmFsaWRhdGVJbnB1dHMoc2NvcGUsIGlucHV0cywgdGFyZ2V0Lm5hbWUpO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRLZXlzKGlucHV0czogc3RyaW5nW10sIG1ldGFkYXRhOiB7IFtrZXk6IHN0cmluZ106IEVnZW9NZXRhZGF0YSB9LCBzY29wZTogYW55KTogc3RyaW5nW10ge1xuICAgcmV0dXJuIGlucHV0cy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIGlmIChtZXRhZGF0YVtjdXJyXS5yZXF1aXJlQ29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIGlmIChjaGVja0NvbmRpdGlvbk1ldGFkYXRhKHNjb3BlLCBtZXRhZGF0YVtjdXJyXS5yZXF1aXJlQ29uZGl0aW9uKSkge1xuICAgICAgICAgICAgcHJldi5wdXNoKGN1cnIpO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YVtjdXJyXS5yZXF1aXJlZCkge1xuICAgICAgICAgcHJldi5wdXNoKGN1cnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXY7XG4gICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uTWV0YWRhdGEoc2NvcGU6IGFueSwga2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgIGlmICh0eXBlb2Ygc2NvcGVba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNjb3BlW2tleV0uYXBwbHkoc2NvcGUpO1xuICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzY29wZVtrZXldO1xuICAgfVxufVxuXG4vLyB0c2xpbnQ6ZW5hYmxlZFxuIl19