angular.module('TegNgOnEnter', [])
.factory('tegNgOnEnter', ->
  {
    bindEnter: (scope, element, attr, doApply) ->
      element.bind 'keydown', (event) =>
        keyCode = if event.keyCode? then event.keyCode else event.which
        return unless keyCode == 13
        if doApply
          scope.$apply => @evalExpression(scope, element, attr, event)
        else
          @evalExpression(scope, element, attr, event)

    evalExpression: (scope, element, attr, event) ->
      result = scope.$eval(attr)
      return if result == false
      event.preventDefault()
      element[0].blur()
  }
)
.directive('tegNgOnEnter', (tegNgOnEnter) ->
  (scope, element, attrs) -> tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnter, true)
)
.directive('tegNgOnEnterNoApply', (tegNgOnEnter) ->
  (scope, element, attrs) -> tegNgOnEnter.bindEnter(scope, element, attrs.tegNgOnEnterNoApply, false)
)