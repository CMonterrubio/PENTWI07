System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "./component.app", "./component.contact-item", "./component.contact-details", "./pipe.search"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, component_app_1, component_contact_item_1, component_contact_details_1, pipe_search_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            },
            function (component_contact_item_1_1) {
                component_contact_item_1 = component_contact_item_1_1;
            },
            function (component_contact_details_1_1) {
                component_contact_details_1 = component_contact_details_1_1;
            },
            function (pipe_search_1_1) {
                pipe_search_1 = pipe_search_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule, forms_1.FormsModule
                    ],
                    declarations: [
                        component_app_1.AppComponent, component_contact_item_1.ContactItemComponent, component_contact_details_1.ContactDetailsComponent, pipe_search_1.SearchPipe
                    ],
                    bootstrap: [
                        component_app_1.AppComponent
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.modules.js.map