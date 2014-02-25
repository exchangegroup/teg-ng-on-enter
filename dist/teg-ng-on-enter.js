(function () {
  angular.module('TegNgOnEnter', []).factory('tegNgOnEnter', function () {
    return {
      bindEnter: function (scope, element, attr, doApply) {
        return element.bind('keydown', function (_this) {
          return function (event) {
            var keyCode;
            keyCode = event.keyCode != null ? event.keyCode : event.which;
            if (keyCode !== 13) {
              return;
            }
            if (doApply) {
              return scope.$apply(function () {
                return _this.evalExpression(scope, element, attr, event);
              });
            } else {
              return _this.evalExpression(scope, element, attr, event);
            }
          };
        }(this));
      },
      evalExpression: function (scope, element, attr, event) {
        var result;
        result = scope.$eval(attr);
        if (result === false) {
          return;
        }
        event.preventDefault();
        return element[0].blur();
      }
    };
  }).directive('tegNgOnEnter', [
    'tegNgOnEnter',
    function (tegNgOnEnter) {
      return function (scope, element, attrs) {
        return tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnter, true);
      };
    }
  ]).directive('tegNgOnEnterNoApply', [
    'tegNgOnEnter',
    function (tegNgOnEnter) {
      return function (scope, element, attrs) {
        return tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnterNoApply, false);
      };
    }
  ]);
}.call(this));