/**
 * @fileoverview added by tsickle
 * Generated from: lib/decorators/require-decorators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EgeoUtils } from '../utils/egeo-utils';
/** @type {?} */
var EGEO_METADATA = Symbol('EgeoLibraryMetadata');
/** @enum {number} */
var METADATA_TYPE = {
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
        var meta = Reflect.getOwnMetadata(EGEO_METADATA, target.constructor) || {};
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
        var meta = Reflect.getOwnMetadata(EGEO_METADATA, target.constructor) || {};
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
        var _onInit = target.prototype.ngOnInit;
        if (_onInit !== undefined) {
            target.prototype.ngOnInit = (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
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
    var meta = Reflect.getOwnMetadata(EGEO_METADATA, target);
    if (meta !== undefined) {
        Object.keys(meta).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (meta[key].deprecated) {
                if (scope[key] !== undefined) {
                    console.warn(EgeoUtils.toDash(target.name) + ": field " + key + " is a deprecated field");
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
    var meta = Reflect.getOwnMetadata(EGEO_METADATA, target);
    if (meta !== undefined) {
        /** @type {?} */
        var inputs = getKeys(Object.keys(meta), meta, scope);
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
    function (prev, curr) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZS1kZWNvcmF0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQVlBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFMUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQzs7QUFFbkQsSUFBa0IsYUFBYTtJQUFHLFFBQVEsR0FBQTtFQUFFOzs7OztBQUU1QyxrQ0FNQzs7O0lBTEUsNEJBQW9COztJQUNwQixnQ0FBbUI7O0lBQ25CLHdDQUEwQjs7SUFDMUIsa0NBQXFCOztJQUNyQixvQ0FBbUI7Ozs7Ozs7QUFJdEIsTUFBTSxVQUFVLFVBQVUsQ0FBQyxTQUFrQjtJQUMxQzs7Ozs7SUFBTyxVQUFVLE1BQVcsRUFBRSxJQUFZOztZQUNqQyxJQUFJLEdBQVEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxrQkFBd0IsRUFBRSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDLEVBQUM7QUFDTCxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsWUFB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LENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZEO0FBQ0osQ0FBQzs7Ozs7OztBQUVELFNBQVMsT0FBTyxDQUFDLE1BQWdCLEVBQUUsUUFBeUMsRUFBRSxLQUFVO0lBQ3JGLE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxJQUFJLEVBQUUsSUFBSTtRQUM3QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLEVBQUU7WUFDaEQsSUFBSSxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7U0FDSDthQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7QUFDVixDQUFDOzs7Ozs7QUFFRCxTQUFTLHNCQUFzQixDQUFDLEtBQVUsRUFBRSxHQUFXO0lBQ3BELElBQUksT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO1FBQ25DLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQztTQUFNO1FBQ0osT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgKiBhcyBSZWZsZWN0TWV0YWRhdGEgZnJvbSAncmVmbGVjdC1tZXRhZGF0YSc7XG5cbmltcG9ydCB7IEVnZW9VdGlscyB9IGZyb20gJy4uL3V0aWxzL2VnZW8tdXRpbHMnO1xuXG5jb25zdCBFR0VPX01FVEFEQVRBID0gU3ltYm9sKCdFZ2VvTGlicmFyeU1ldGFkYXRhJyk7XG5cbmV4cG9ydCBjb25zdCBlbnVtIE1FVEFEQVRBX1RZUEUgeyBQUk9QRVJUWSB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWdlb01ldGFkYXRhIHtcbiAgIHR5cGU6IE1FVEFEQVRBX1RZUEU7XG4gICByZXF1aXJlZD86IGJvb2xlYW47XG4gICByZXF1aXJlQ29uZGl0aW9uPzogc3RyaW5nO1xuICAgZGVwcmVjYXRlZD86IGJvb2xlYW47XG4gICBpbml0aWFsVmFsdWU/OiBhbnk7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlOm9ubHktYXJyb3ctZnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gU3RSZXF1aXJlZChjb25kaXRpb24/OiBzdHJpbmcpOiBhbnkge1xuICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwgbmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgIGNvbnN0IG1ldGE6IGFueSA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoRUdFT19NRVRBREFUQSwgdGFyZ2V0LmNvbnN0cnVjdG9yKSB8fCB7fTtcbiAgICAgIG1ldGFbbmFtZV0gPSBtZXRhLmhhc093blByb3BlcnR5KG5hbWUpICYmIG1ldGFbbmFtZV0gfHwgeyB0eXBlOiBNRVRBREFUQV9UWVBFLlBST1BFUlRZIH07XG4gICAgICBtZXRhW25hbWVdLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgIGlmIChjb25kaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgbWV0YVtuYW1lXS5yZXF1aXJlQ29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgfVxuXG4gICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKEVHRU9fTUVUQURBVEEsIG1ldGEsIHRhcmdldC5jb25zdHJ1Y3Rvcik7XG4gICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3REZXByZWNhdGVkKGluaXRpYWxWYWx1ZT86IGFueSk6IGFueSB7XG4gICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgICAgY29uc3QgbWV0YTogYW55ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShFR0VPX01FVEFEQVRBLCB0YXJnZXQuY29uc3RydWN0b3IpIHx8IHt9O1xuICAgICAgbWV0YVtuYW1lXSA9IG1ldGEuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgbWV0YVtuYW1lXSB8fCB7IHR5cGU6IE1FVEFEQVRBX1RZUEUuUFJPUEVSVFkgfTtcbiAgICAgIG1ldGFbbmFtZV0uZGVwcmVjYXRlZCA9IHRydWU7XG4gICAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIG1ldGFbbmFtZV0uaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKEVHRU9fTUVUQURBVEEsIG1ldGEsIHRhcmdldC5jb25zdHJ1Y3Rvcik7XG4gICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RFZ2VvKHBhcmFtcz86ICcnKTogYW55IHtcbiAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpOiBhbnkge1xuICAgICAgbGV0IF9vbkluaXQgPSB0YXJnZXQucHJvdG90eXBlLm5nT25Jbml0O1xuICAgICAgaWYgKF9vbkluaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICAgICAgY2hlY2tEZXByZWNhdGVkKHRhcmdldCwgdGhpcyk7XG4gICAgICAgICAgICBjaGVja1JlcXVpcmVkKHRhcmdldCwgdGhpcyk7XG4gICAgICAgICAgICBfb25Jbml0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0YXJnZXQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCk6IHZvaWQge1xuICAgICAgICAgICAgY2hlY2tEZXByZWNhdGVkKHRhcmdldCwgdGhpcyk7XG4gICAgICAgICAgICBjaGVja1JlcXVpcmVkKHRhcmdldCwgdGhpcyk7XG4gICAgICAgICB9O1xuICAgICAgfVxuICAgfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tEZXByZWNhdGVkKHRhcmdldDogYW55LCBzY29wZTogYW55KTogdm9pZCB7XG4gICBjb25zdCBtZXRhOiBhbnkgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKEVHRU9fTUVUQURBVEEsIHRhcmdldCk7XG4gICBpZiAobWV0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3Qua2V5cyhtZXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgIGlmIChtZXRhW2tleV0uZGVwcmVjYXRlZCkge1xuICAgICAgICAgICAgaWYgKHNjb3BlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke0VnZW9VdGlscy50b0Rhc2godGFyZ2V0Lm5hbWUpfTogZmllbGQgJHtrZXl9IGlzIGEgZGVwcmVjYXRlZCBmaWVsZGApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhW2tleV0uaW5pdGlhbFZhbHVlKSB7XG4gICAgICAgICAgICAgICBzY29wZVtrZXldID0gbWV0YVtrZXldLmluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1JlcXVpcmVkKHRhcmdldDogYW55LCBzY29wZTogYW55KTogdm9pZCB7XG4gICBjb25zdCBtZXRhOiBhbnkgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKEVHRU9fTUVUQURBVEEsIHRhcmdldCk7XG4gICBpZiAobWV0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgaW5wdXRzOiBzdHJpbmdbXSA9IGdldEtleXMoT2JqZWN0LmtleXMobWV0YSksIG1ldGEsIHNjb3BlKTtcbiAgICAgIEVnZW9VdGlscy52YWxpZGF0ZUlucHV0cyhzY29wZSwgaW5wdXRzLCB0YXJnZXQubmFtZSk7XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldEtleXMoaW5wdXRzOiBzdHJpbmdbXSwgbWV0YWRhdGE6IHsgW2tleTogc3RyaW5nXTogRWdlb01ldGFkYXRhIH0sIHNjb3BlOiBhbnkpOiBzdHJpbmdbXSB7XG4gICByZXR1cm4gaW5wdXRzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgaWYgKG1ldGFkYXRhW2N1cnJdLnJlcXVpcmVDb25kaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgaWYgKGNoZWNrQ29uZGl0aW9uTWV0YWRhdGEoc2NvcGUsIG1ldGFkYXRhW2N1cnJdLnJlcXVpcmVDb25kaXRpb24pKSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goY3Vycik7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhW2N1cnJdLnJlcXVpcmVkKSB7XG4gICAgICAgICBwcmV2LnB1c2goY3Vycik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDb25kaXRpb25NZXRhZGF0YShzY29wZTogYW55LCBrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgaWYgKHR5cGVvZiBzY29wZVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2NvcGVba2V5XS5hcHBseShzY29wZSk7XG4gICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNjb3BlW2tleV07XG4gICB9XG59XG5cbi8vIHRzbGludDplbmFibGVkXG4iXX0=