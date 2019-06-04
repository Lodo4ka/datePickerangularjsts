export class LoadingIndicatorBarDirective implements ng.IDirective {

  public controller: any = "LoadingIndicatorBarController";
  public controllerAs: string = "loadingIndicatorBarController";
  public restrict: string = "E";

  /**
   * The link function is responsible for registering DOM listeners as well as updating the DOM.
   *
   * @class LoadingIndicatorBarDirective
   * @method link
   * @param $scope {ng.IScope} The scope for this directive
   * @param $element {ng.IAugmentedJQuery} The JQuery instance members object.
   * @param $attributes {ng.IAttributes} An object containing normalized DOM element attributes.
   * @param loadingIndicatorBarController {LoadingIndicatorBarController} A new instance of the controller.
   */
  public link: ng.IDirectiveLinkFn = (
    scope: ng.IScope,
    element: ng.IAugmentedJQuery,
    attributes: ng.IAttributes,
    loadingIndicatorBarController: LoadingIndicatorBarController
  ) => {
    loadingIndicatorBarController.init(element);
  };

  /**
   * Create the directive.
   *
   * @class LoadingIndicatorBarDirective
   * @method Factory
   * @static
   * @return {ng.IDirectiveFactory} A function to create the directive.
   */
  public static Factory(): ng.IDirectiveFactory {
    return () => new LoadingIndicatorBarDirective();
  }
}