(function() {
  angular.module('TegOnEnter', []).factory('tegOnEnter', function() {
    return {
      bindEnter: function(scope, element, attr, doApply) {
        var _this = this;
        element.bind('keydown', function(event) {
          if (event.which !== 13) {
            return;
          }
          if (doApply) {
            scope.$apply(function() {
              _this.evalExpression(scope, element, attr, event);
            });
          } else {
            _this.evalExpression(scope, element, attr, event);
          }
        });
      },
      evalExpression: function(scope, element, attr, event) {
        var result;
        result = scope.$eval(attr);
        if (result === false) {
          return;
        }
        event.preventDefault();
        element.blur();
      }
    };
  }).directive('tegOnEnter', [
    'tegOnEnter', function(tegOnEnter) {
      return function(scope, element, attrs) {
        tegOnEnter.bindEnter(scope, element, attrs.tegOnEnter, true);
      };
    }
  ]).directive('tegOnEnterNoApply', [
    'tegOnEnter', function(tegOnEnter) {
      return function(scope, element, attrs) {
        tegOnEnter.bindEnter(scope, element, attrs.tegOnEnterNoApply, false);
      };
    }
  ]);

}).call(this);