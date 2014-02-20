describe 'TegNgOnEnter directive', ->
  beforeEach -> module('TegNgOnEnter')

  beforeEach(inject((@$rootScope, @$compile, @$window) ->
    @scope = @$rootScope.$new()

    @compile = (markup, scope) ->
      el = $compile(markup)(scope)
      scope.$digest()
      el

    @compileHtml = (html = "<input teg-ng-on-enter='myVar=123' />") ->
      @html = @compile(html, @scope)
  ))

  it 'executes expressions when enter is pressed', ->
    @compileHtml()
    $(@html).trigger jQuery.Event('keydown', { which: 13 })
    expect(@scope.myVar).toBe 123


describe 'tegOnEnterNoApply directive', ->
  beforeEach -> module('TegNgOnEnter')

  beforeEach(inject((@$rootScope, @$compile, @$window) ->
    @scope = @$rootScope.$new()

    @compile = (markup, scope) ->
      el = $compile(markup)(scope)
      scope.$digest()
      el

    @compileHtml = (html = "<input teg-ng-on-enter-no-apply='myVar=123' />") ->
      @html = @compile(html, @scope)
  ))

  it 'executes expressions when enter is pressed', ->
    @compileHtml()
    $(@html).trigger jQuery.Event('keydown', { which: 13 })
    expect(@scope.myVar).toBe 123