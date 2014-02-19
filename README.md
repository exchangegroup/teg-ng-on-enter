# AngularJS directives

Evaluates code when `Enter` is pressed in the input element.

## Usage:

Evaluates the code inside `scope.$apply`

    <input teg-on-enter='codeToRun()'>

or evaluates the code without `scope.$apply`

    <input teg-on-enter-no-apply='codeToRun()'>

## Note

After running the code the input looses focus. This is needed to hide virtual keyboard.
Input will not loose focus if the code evaluates to false.
