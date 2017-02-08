# StrippedDecorators

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.


# Test Cases

Created an app using angular-cli. 
Added UI-Router
Added an `@Input()` to the `AppComponent`
Added a route with a resolve

UI-Router queries the data added by `@Input()` to map the resolve to the component input.

### JIT mode (Decorators intact)

This works: `ng serve`

### AoT mode (Decorators stripped by `ngc`)

This doesn't work: `ng serve --aot`

### Prod mode (Decorators stripped by `@ngtools/webpack`)

This doesn't work: `ng serve --prod`


