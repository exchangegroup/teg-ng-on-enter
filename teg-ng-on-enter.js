(function() {
  angular.module('TegNgOnEnter', []).factory('tegNgOnEnter', function() {
    return {
      bindEnter: function(scope, element, attr, doApply) {
        return element.bind('keydown', (function(_this) {
          return function(event) {
            if (event.which !== 13) {
              return;
            }
            if (doApply) {
              return scope.$apply(function() {
                return _this.evalExpression(scope, element, attr, event);
              });
            } else {
              return _this.evalExpression(scope, element, attr, event);
            }
          };
        })(this));
      },
      evalExpression: function(scope, element, attr, event) {
        var result;
        result = scope.$eval(attr);
        if (result === false) {
          return;
        }
        event.preventDefault();
        return element.blur();
      }
    };
  }).directive('tegNgOnEnter', [
    'tegNgOnEnter', function(tegNgOnEnter) {
      return function(scope, element, attrs) {
        return tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnter, true);
      };
    }
  ]).directive('tegNgOnEnterNoApply', [
    'tegNgOnEnter', function(tegNgOnEnter) {
      return function(scope, element, attrs) {
        return tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnterNoApply, false);
      };
    }
  ]);

}).call(this);
