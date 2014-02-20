# Overview

Evaluates code when `Enter` is pressed in the input element.

## Install

Include the JS script:

    <script src="/bower_components/teg-ng-on-enter/dist/teg-ng-on-enter.min.js"></script>

Add `TegNgOnEnter` module to your app's dependecies

    angular.module('YourApp', ['TegNgOnEnter'])

## Use

Evaluates the code inside `scope.$apply`

    <input teg-ng-on-enter='codeToRun()'>

or without `scope.$apply`

    <input teg-ng-on-enter-no-apply='codeToRun()'>

## Note

After running the code the input looses focus. This is needed to hide virtual keyboard.

If you do not want input to loose focuse - the code should evaluate to `false`.
