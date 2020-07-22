# String interpollation
```html
    <p>{{name}}</p>
```
# Directives

## structural directive (*)
### ngFor
- add/remove html elements
- ngfor ==> *ngFor="let element of List"

### ngIf
- based on condition elemnt will be added to dom/removed
- ngIf ==> *ngIf="condition"

### property binding
- html attribute of html element value is passed from component
    [attribute]="atribute_value"

### data flow
- from component/js to html (service return something and want to bind/show it on ui)
     [attribute]="atribute_value"
- from html/template to component/js (sending value from ui to server) ex submitiing form
      (event)="eventHandler($event)"

- Dual data binding
  [(ngModel)]="variableName"

### attribute binding
  [nameOfattribute]="variableName/expression"
  [attr.data-info]="expression"

### classname binding
  [ngClass]="expression"

# Roadmap
- Modules
- Components
- Directives
- Decorators (add metadata at runtime)
- class models / interfaces
- Pipes
- Services (logging) and DI
- Routing with authentication
- RxJs --> observable
- Http api calls through services
- angular forms

# Advanced
- shared modules
- parent / child relation between component (@input @Output)
- custom pipes
- custom directives
- Dom manipulation through component.ts/directives (Viewchild Viewcontent renderer2 hostlistener)
- animations

- sate management store NgRx
- angular universal
- session management with localStorage/ cookies

- web worker
- deployment
- Unit testing
- Electron

## Angular 9 Features
Here is an overview of Angular 9.

- Built-in Angular Features
- Mature Development with Angular
- Understanding Angular View Engines
- Angular Ivy Solves Long-Standing Problems
- Angular Ivy and Mobile
- Selector-less Directives
- Angular Diagnostics Improvements
- Internationalization with Angular Ivy
- DI and Type-Safe in Angular 9
- Dependency Injection Changes in Angular Core

## angular 10 new features

- Ngtsc Compiler Interface
- Configure Async Timeouts
- Stale Lock File Reporting
- Lazy Computation of basePaths
- Merging Translation Files
- Explicit Mapping



## Other resources
- [awesome angular](https://github.com/PatrickJS/awesome-angular)
- [awesome angular2](https://github.com/DaanDeSmedt/awesome-angular)
- [component & libraries](https://github.com/brillout/awesome-angular-components)

