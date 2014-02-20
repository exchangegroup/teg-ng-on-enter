angular.module('TegNgOnEnter', [])
.factory('tegNgOnEnter', ->
  {
    bindEnter: (scope, element, attr, doApply) ->
      element.bind 'keydown', (event) =>
        return unless event.which == 13
        if doApply
          scope.$apply => @evalExpression(scope, element, attr, event)
        else
          @evalExpression(scope, element, attr, event)

    evalExpression: (scope, element, attr, event) ->
      result = scope.$eval(attr)
      return if result == false
      event.preventDefault()
      element.blur()
  }
)
.directive('tegNgOnEnter', ['tegNgOnEnter', (tegNgOnEnter) ->
  (scope, element, attrs) -> tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnter, true)
])
.directive('tegNgOnEnterNoApply', ['tegNgOnEnter', (tegNgOnEnter) ->
  (scope, element, attrs) -> tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnterNoApply, false)
])