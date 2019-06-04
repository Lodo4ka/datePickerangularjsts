"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
var LoadingIndicatorBarController = /** @class */ (function () {
    /**
     * Create the loading bar controller.
     *
     * @class LoadingIndicatorBarController
     * @param $timeout {ng.ITimeoutService} The $timeout service.
     * @constructor
     */
    function LoadingIndicatorBarController($timeout) {
        this.$timeout = $timeout;
    }
    /**
     * Initialize the controller.
     *
     * @class LoadingIndicatorBarController
     * @method init
     * @param $element {ng.IAugmentedJQuery} The JQuery instance members.
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    LoadingIndicatorBarController.prototype.init = function ($element) {
        //store reference the $element in this scope
        this.$element = $element;
        //create container element
        var container = angular_1.default.element("<div class=\"loading-container\">");
        //append loading indicator bar
        this.$loading = angular_1.default.element("<div class=\"loading\">");
        container.append(this.$loading);
        //append container
        this.$element.append(container);
        return this;
    };
    /**
     * Hide the loading bar.
     *
     * @class LoadingIndicatorBarController
     * @method hide
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    LoadingIndicatorBarController.prototype.hide = function () {
        var _this = this;
        this.$loading.css({
            opacity: 0
        });
        this.$timeout(function () {
            _this.$element.addClass("ng-hide");
        }, 500);
        return this;
    };
    /**
     * Set the width of the bar.
     *
     * @class LoadingIndicatorBarController
     * @method setWidth
     * @param width {number} The percentage width of the loading indicator bar.
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    LoadingIndicatorBarController.prototype.setWidth = function (width) {
        this.$loading.css({ width: width + "%" });
        return this;
    };
    /**
     * Show the loading indicator.
     *
     * @class LoadingIndicatorBarController
     * @method show
     * @return {ILoadingIndicatorController} Self for chaining.
     */
    LoadingIndicatorBarController.prototype.show = function () {
        this.$element.removeClass("ng-hide");
        this.$loading.css({ opacity: 1 });
        return this;
    };
    LoadingIndicatorBarController.$inject = ["$timeout"];
    return LoadingIndicatorBarController;
}());
exports.LoadingIndicatorBarController = LoadingIndicatorBarController;
//# sourceMappingURL=LoadingIndicatorBarController.js.map