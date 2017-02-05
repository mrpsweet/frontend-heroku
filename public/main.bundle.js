webpackJsonp([0,3],{

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DiagramsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiagramsComponent = (function () {
    function DiagramsComponent() {
    }
    DiagramsComponent.prototype.ngOnInit = function () {
        this.diagrams = [
            { name: 'CodeEtch/design' },
            { name: 'CodeEtch/api' },
            { name: 'CodeEtch/frontend' }
        ];
    };
    DiagramsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-diagrams',
            template: __webpack_require__(722),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], DiagramsComponent);
    return DiagramsComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/diagrams.component.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_github_service__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = (function () {
    function NewComponent(route, githubServie) {
        var _this = this;
        this.route = route;
        this.githubServie = githubServie;
        this.route
            .queryParams
            .subscribe(function (params) {
            var code = params['code'];
            _this.githubServie
                .getRepositories(code)
                .subscribe(function (result) {
                console.log(result);
            });
        });
    }
    NewComponent.prototype.ngOnInit = function () {
        this.repositories = [
            { name: 'CodeEtch/design' },
            { name: 'CodeEtch/api' },
            { name: 'CodeEtch/frontend' }
        ];
    };
    NewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-new',
            template: __webpack_require__(723),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */]) === 'function' && _b) || Object])
    ], NewComponent);
    return NewComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/new.component.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClassService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassService = (function () {
    function ClassService(http) {
        this.http = http;
    }
    ClassService.prototype.getClasses = function (repoUUID) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_api_url + "/classes/" + repoUUID)
            .map(this.extractData);
    };
    ClassService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ClassService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ClassService);
    return ClassService;
    var _a;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/class.service.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
    }
    GithubService.prototype.getRepositories = function (code) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http
            .post('https://github.com/login/oauth/access_token', "client_id=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].client_id + "&client_secret=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].client_secret + "&code=" + code, {
            headers: headers
        })
            .map(function (res) { return res.text(); })
            .map(this.parseParams);
    };
    GithubService.prototype.parseParams = function (queryString) {
        var params = {};
        queryString.split('&')
            .forEach(function (pair) {
            var kv = pair.split('=');
            params[kv[0]] = kv[1];
        });
        return params;
    };
    GithubService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    GithubService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GithubService);
    return GithubService;
    var _a;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/github.service.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MethodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MethodService = (function () {
    function MethodService(http) {
        this.http = http;
    }
    MethodService.prototype.getMethods = function (classId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].base_api_url + "/classes/" + classId + "/methods")
            .map(this.extractData);
    };
    MethodService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    MethodService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MethodService);
    return MethodService;
    var _a;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/method.service.js.map

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReferenceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferenceService = (function () {
    function ReferenceService(http) {
        this.http = http;
    }
    ReferenceService.prototype.getReferences = function (methodId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].base_api_url + "/methods/" + methodId + "/classrefs")
            .map(this.extractData);
    };
    ReferenceService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ReferenceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ReferenceService);
    return ReferenceService;
    var _a;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/reference.service.js.map

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RepositoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepositoryService = (function () {
    function RepositoryService(http) {
        this.http = http;
    }
    RepositoryService.prototype.getRepository = function (userName, repoName) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].base_api_url + "/repositories/" + userName + "/" + repoName + "/master")
            .map(this.extractData);
    };
    RepositoryService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RepositoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RepositoryService);
    return RepositoryService;
    var _a;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/repository.service.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_repository_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_class_service__ = __webpack_require__(363);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(el, repositoryService, classService) {
        this.el = el;
        this.repositoryService = repositoryService;
        this.classService = classService;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refInfos = [];
        // this.classInfos = [
        //   {
        //     "name": "HelloWorld",
        //     "path": "/test/main",
        //     "file_name": "main",
        //     "uuid": "7a7c0c30-eb80-11e6-9ae0-4d981379eb9f",
        //     "createdAt": "2017-02-05T08:52:52.467Z",
        //     "updatedAt": "2017-02-05T08:52:52.467Z",
        //     "repo_uuid": "7a534e80-eb80-11e6-9ae0-4d981379eb9f"
        //   },
        //   {
        //     "name": "Test1",
        //     "path": "/test/Test1",
        //     "file_name": "Test1",
        //     "uuid": "7a7d1da0-eb80-11e6-9ae0-4d981379eb9f",
        //     "createdAt": "2017-02-05T08:52:52.474Z",
        //     "updatedAt": "2017-02-05T08:52:52.474Z",
        //     "repo_uuid": "7a534e80-eb80-11e6-9ae0-4d981379eb9f"
        //   }
        // ];
        //
        // this.refInfos = [
        //   {
        //     "uuid": "7a940100-eb80-11e6-9ae0-4d981379eb9f",
        //     "createdAt": "2017-02-05T08:52:52.624Z",
        //     "updatedAt": "2017-02-05T08:52:52.624Z",
        //     "class_uuid": "7a7d1da0-eb80-11e6-9ae0-4d981379eb9f",
        //     "method_uuid": "7a8f4610-eb80-11e6-9ae0-4d981379eb9f"
        //   }
        // ];
        this.repositoryService.getRepository('codeetch', 'backend')
            .subscribe(function (repository) {
            var repoId = repository['uuid'];
            console.log(repoId);
            _this.classService
                .getClasses(repoId)
                .subscribe(function (infos) {
                _this.classInfos = infos;
            });
        });
    };
    ShowComponent.prototype.getMethodAndClassEl = function (refInfo) {
        var classId = refInfo.class_uuid, methodId = refInfo.method_uuid;
        var methodEl = this.el.nativeElement.querySelector("[data-method-id=\"" + methodId + "\"]"), classEl = this.el.nativeElement.querySelector("[data-class-id=\"" + classId + "\"]");
        return { methodEl: methodEl, classEl: classEl };
    };
    ShowComponent.prototype.isToLeft = function (els) {
        return els.methodEl.offsetLeft + els.methodEl.offsetWidth < els.classEl.offsetLeft;
    };
    ShowComponent.prototype.getStartX = function (refInfo) {
        var els = this.getMethodAndClassEl(refInfo);
        var clientRect = els.methodEl.getBoundingClientRect();
        return this.isToLeft(els) ?
            clientRect.right + 5 :
            clientRect.left - 5;
    };
    ShowComponent.prototype.getStartY = function (refInfo) {
        var els = this.getMethodAndClassEl(refInfo);
        var clientRect = els.methodEl.getBoundingClientRect();
        return clientRect.bottom + 17;
    };
    ShowComponent.prototype.getEndX = function (refInfo) {
        var els = this.getMethodAndClassEl(refInfo);
        var clientRect = els.classEl.getBoundingClientRect();
        return this.isToLeft(els) ?
            (clientRect.left - 11) :
            (clientRect.right + 11);
    };
    ShowComponent.prototype.getEndY = function (refInfo) {
        var els = this.getMethodAndClassEl(refInfo);
        var clientRect = els.classEl.getBoundingClientRect();
        return (clientRect.top + clientRect.bottom) / 2.0;
    };
    ShowComponent.prototype.appendNewInfos = function (infos) {
        this.refInfos = this.refInfos.concat(infos);
    };
    ShowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-show',
            template: __webpack_require__(726),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_repository_service__["a" /* RepositoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_repository_service__["a" /* RepositoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_class_service__["a" /* ClassService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_class_service__["a" /* ClassService */]) === 'function' && _c) || Object])
    ], ShowComponent);
    return ShowComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/show.component.js.map

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__(727),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomepageComponent);
    return HomepageComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/homepage.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 434;


/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(553);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/main.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagrams_diagrams_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__diagrams_new_new_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diagrams_show_show_component__ = __webpack_require__(368);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'diagrams', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__diagrams_diagrams_component__["a" /* DiagramsComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__diagrams_new_new_component__["a" /* NewComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__diagrams_show_show_component__["a" /* ShowComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/app-routing.module.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(721),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/app.component.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_topbar_topbar_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__diagrams_diagrams_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_card_card_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__diagrams_new_new_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__diagrams_show_show_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__diagrams_shared_class_diagram_class_diagram_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__diagrams_shared_connector_connector_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__diagrams_shared_repository_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__diagrams_shared_class_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__diagrams_shared_method_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__diagrams_shared_reference_service__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__diagrams_shared_github_service__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_topbar_topbar_component__["a" /* TopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__diagrams_diagrams_component__["a" /* DiagramsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__diagrams_new_new_component__["a" /* NewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__diagrams_show_show_component__["a" /* ShowComponent */],
                __WEBPACK_IMPORTED_MODULE_12__diagrams_shared_class_diagram_class_diagram_component__["a" /* ClassDiagramComponent */],
                __WEBPACK_IMPORTED_MODULE_13__diagrams_shared_connector_connector_component__["a" /* ConnectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__diagrams_shared_repository_service__["a" /* RepositoryService */], __WEBPACK_IMPORTED_MODULE_15__diagrams_shared_class_service__["a" /* ClassService */], __WEBPACK_IMPORTED_MODULE_16__diagrams_shared_method_service__["a" /* MethodService */], __WEBPACK_IMPORTED_MODULE_17__diagrams_shared_reference_service__["a" /* ReferenceService */], __WEBPACK_IMPORTED_MODULE_18__diagrams_shared_github_service__["a" /* GithubService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/app.module.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_info_model__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_info_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__class_info_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__method_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reference_service__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClassDiagramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassDiagramComponent = (function () {
    function ClassDiagramComponent(methodService, refinfoService) {
        this.methodService = methodService;
        this.refinfoService = refinfoService;
        this.newInfoEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    ClassDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.methodService
            .getMethods(this.classInfo.uuid)
            .subscribe(function (methodInfos) {
            _this.methodInfos = methodInfos;
            methodInfos.forEach(function (methodInfo) {
                _this.refinfoService
                    .getReferences(methodInfo.uuid)
                    .subscribe(function (refInfos) {
                    _this.newInfoEmmiter.emit(refInfos);
                });
            });
        });
        this.attributeInfos = [
            {
                "name": "String name"
            },
            {
                "name": "String description"
            }
        ];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__class_info_model__["ClassInfo"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__class_info_model__["ClassInfo"]) === 'function' && _a) || Object)
    ], ClassDiagramComponent.prototype, "classInfo", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]) === 'function' && _b) || Object)
    ], ClassDiagramComponent.prototype, "newInfoEmmiter", void 0);
    ClassDiagramComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-class-diagram',
            template: __webpack_require__(724),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__method_service__["a" /* MethodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__method_service__["a" /* MethodService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__reference_service__["a" /* ReferenceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__reference_service__["a" /* ReferenceService */]) === 'function' && _d) || Object])
    ], ClassDiagramComponent);
    return ClassDiagramComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/class-diagram.component.js.map

/***/ },

/***/ 555:
/***/ function(module, exports) {

//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/class-info.model.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConnectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectorComponent = (function () {
    function ConnectorComponent() {
    }
    ConnectorComponent.prototype.ngOnInit = function () {
        this.width = 4;
    };
    ConnectorComponent.prototype.isLeftToRight = function () {
        return this.endX > this.startX;
    };
    ConnectorComponent.prototype.isTopToBottom = function () {
        return this.endY > this.startY;
    };
    ConnectorComponent.prototype.isVertical = function () {
        return this.startX == this.endX;
    };
    ConnectorComponent.prototype.isHorizontal = function () {
        return this.startY == this.endY;
    };
    ConnectorComponent.prototype.getLeft = function () {
        return this.isLeftToRight() ? this.startX : this.endX;
    };
    ConnectorComponent.prototype.getWidth = function () {
        return this.isLeftToRight() ? this.endX - this.startX : this.startX - this.endX;
    };
    ConnectorComponent.prototype.getLeftTop = function () {
        return this.isLeftToRight() ? this.startY : this.endY;
    };
    ConnectorComponent.prototype.getRightTop = function () {
        return this.isLeftToRight() ? this.endY : this.startY;
    };
    ConnectorComponent.prototype.getHorizontalCenter = function () {
        return (this.endX + this.startX) / 2.0;
    };
    ConnectorComponent.prototype.getVerticalTop = function () {
        return this.isTopToBottom() ? this.startY : this.endY;
    };
    ConnectorComponent.prototype.getHeight = function () {
        return this.isTopToBottom() ? this.endY - this.startY : this.startY - this.endY;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], ConnectorComponent.prototype, "startX", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], ConnectorComponent.prototype, "startY", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], ConnectorComponent.prototype, "endX", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], ConnectorComponent.prototype, "endY", void 0);
    ConnectorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-connector',
            template: __webpack_require__(725),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], ConnectorComponent);
    return ConnectorComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/connector.component.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__(728),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/card.component.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarComponent = (function () {
    function TopbarComponent() {
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-topbar',
            template: __webpack_require__(729),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopbarComponent);
    return TopbarComponent;
}());
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/topbar.component.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/polyfills.js.map

/***/ },

/***/ 712:
/***/ function(module, exports) {

module.exports = "\nfooter {\n\twidth          : 1024px;\n\tmargin         : 26px auto;\n\tpadding-top    : 10px;\n\tfont-size      : 12px;\n\tborder-top     : 1px solid #E3E3E3;\n\t-webkit-box-orient : horizontal;\n\t-webkit-box-direction : normal;\n\t    -ms-flex-direction : row;\n\t        flex-direction : row;\n\tdisplay        : -webkit-box;\n\tdisplay        : -ms-flexbox;\n\tdisplay        : flex; }\n\nfooter .copyright {\n\tcolor : #999999; }\n\nfooter .links {\n\tbox-sizing : border-box;\n\t-webkit-box-flex       : 1;\n\t    -ms-flex       : 1;\n\t        flex       : 1;\n\tmargin     : 0 20px;\n\tpadding    : 0; }\n\nfooter .links > li {\n\tdisplay : inline;\n\tcolor   : #6E6E6E; }\n\nfooter .links .vertical-divider {\n\tdisplay     : inline;\n\tpadding     : 0 16px 0 0;\n\tmargin-left : 16px;\n\tborder-left : 1px solid #E3E3E3; }\n\nfooter .country {\n\tposition : relative;\n\tright    : 0;\n\tdisplay  : inline; }\n\nfooter .country .country-name {\n\tfont-size      : 12px;\n\tvertical-align : top;\n\tmargin-left    : 10px; }"

/***/ },

/***/ 713:
/***/ function(module, exports) {

module.exports = ":host {\n\tdisplay      : block;\n\tpadding      : 40px 0;\n\twidth        : 460px;\n\tmargin-left  : auto;\n\tmargin-right : auto;\n}\n\napp-card {\n\tbackground-color : white;\n}\n\napp-card h1 {\n\tpadding          : 14px 20px;\n\tfont-size        : 20px;\n\tmargin           : 0;\n\tfont-weight      : 300;\n\tcolor            : white;\n\tbackground-color : #4F4F4F;\n\tborder-radius    : 3px 3px 0 0;\n}\n\napp-card .diagrams {\n\tlist-style : none;\n\tmargin     : 0;\n\tpadding    : 0;\n}\n\napp-card .diagrams > li {\n\tdisplay     : -webkit-box;\n\tdisplay     : -ms-flexbox;\n\tdisplay     : flex;\n\tcolor       : #4F4F4F;\n\t-webkit-box-align : center;\n\t    -ms-flex-align : center;\n\t        align-items : center;\n\tpadding     : 20px;\n}\n\napp-card .diagrams > li:hover {\n\tbackground-color: #E8E8E8;\n\tcursor: pointer;\n}\n\napp-card .diagrams > li > span.link {\n\t-webkit-box-flex : 1;\n\t    -ms-flex : 1;\n\t        flex : 1;\n}\n\napp-card .diagrams > li > span:not(.link) {\n\tfont-size : 12px;\n\tcolor     : #838383;\n}"

/***/ },

/***/ 714:
/***/ function(module, exports) {

module.exports = ":host {\n\tdisplay      : block;\n\tpadding      : 40px 0;\n\twidth        : 460px;\n\tmargin-left  : auto;\n\tmargin-right : auto;\n}\n\napp-card {\n\tbackground-color : white;\n}\n\napp-card h1 {\n\tpadding          : 14px 20px;\n\tfont-size        : 20px;\n\tmargin           : 0;\n\tfont-weight      : 300;\n\tcolor            : white;\n\tbackground-color : #4F4F4F;\n\tborder-radius    : 3px 3px 0 0;\n}\n\napp-card .repositories {\n\tlist-style : none;\n\tmargin     : 0;\n\tpadding    : 0;\n}\n\napp-card .repositories > li {\n\tdisplay     : -webkit-box;\n\tdisplay     : -ms-flexbox;\n\tdisplay     : flex;\n\tcolor       : #4F4F4F;\n\t-webkit-box-align : center;\n\t    -ms-flex-align : center;\n\t        align-items : center;\n\tpadding     : 20px;\n\t-webkit-transition      : all 100ms ease-in-out;\n\ttransition  : all 100ms ease-in-out;\n}\n\napp-card .repositories > li:hover {\n\tbackground-color : #E8E8E8;\n\tcursor           : pointer;\n}\n\napp-card .repositories > li > span.link {\n\t-webkit-box-flex : 1;\n\t    -ms-flex : 1;\n\t        flex : 1;\n}\n\napp-card .repositories > li > span:not(.link) {\n\tfont-size  : 12px;\n\tcolor      : #838383;\n\t-webkit-transition      : all 100ms ease-in-out;\n\ttransition : all 100ms ease-in-out;\n}"

/***/ },

/***/ 715:
/***/ function(module, exports) {

module.exports = ":host {\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\napp-card {\n\tbackground-color: white;\n\tpadding: 12px 20px;\n}\n\napp-card > .name {\n\tcolor: #6A6A6A;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tmargin-bottom: 12px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\napp-card > .name > .class-icon {\n\twidth: 29px;\n\theight: 29px;\n\tmargin-right: 10px;\n}\n\napp-card > .divider {\n\tbackground-color: #E9E9E9;\n\theight: 2px;\n}\n\napp-card > .methods {\n\tlist-style: none;\n\tpadding: 8px 0 0 0;\n\tmargin: 0;\n}\n\napp-card > .methods > li, app-card > .attributes > li {\n\tfont-size: 14px;\n\tfont-weight: bold;\n\tcolor: #777777;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n}\n\napp-card > .methods > li > .function-icon {\n\tmargin-right: 6px;\n}\n\napp-card > .attributes {\n\tlist-style: none;\n\tpadding: 8px 0 0 0;\n\tmargin: 0 0 8px 0;\n}\n\napp-card > .attributes > li > .attribute-icon {\n\tdisplay: block;\n\tfloat: left;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: #D10000;\n\tmargin: 4px 8px 4px 4px;\n}\n\napp-card > .methods > li:not(:last-child) {\n\tmargin-bottom: 4px;\n}"

/***/ },

/***/ 716:
/***/ function(module, exports) {

module.exports = ".horizontal-piece, .vertical-piece, .arrow-right, .arrow-left, .arrow-down, .arrow-up{\n\tposition: absolute;\n\tfloat: left;\n}\n\n.horizontal-piece, .vertical-piece {\n\tbackground-color: #2096F3;\n}\n\n.horizontal-piece {\n\theight: 4px;\n}\n\n.vertical-piece {\n\twidth: 4px;\n}\n\n.arrow-right {\n\twidth: 0;\n\theight: 0;\n\tborder-top: 10px solid transparent;\n\tborder-bottom: 10px solid transparent;\n\tborder-left: 10px solid #2096F3;\n}\n\n.arrow-left {\n\twidth: 0;\n\theight: 0;\n\tborder-top: 10px solid transparent;\n\tborder-bottom: 10px solid transparent;\n\tborder-right:10px solid #2096F3;\n}\n\n.arrow-down {\n\twidth: 0;\n\theight: 0;\n\tborder-left: 10px solid transparent;\n\tborder-right: 10px solid transparent;\n\tborder-top: 10px solid #2096F3;\n}\n\n.arrow-up {\n\twidth: 0;\n\theight: 0;\n\tborder-left: 10px solid transparent;\n\tborder-right: 10px solid transparent;\n\tborder-bottom: 10px solid #2096F3;\n}"

/***/ },

/***/ 717:
/***/ function(module, exports) {

module.exports = ":host {\n\tdisplay: block;\n\theight: 1000px;\n\tpadding: 20px;\n}\n\napp-class-diagram {\n\tmargin-right: 100px;\n\tmargin-bottom: 100px;\n}"

/***/ },

/***/ 718:
/***/ function(module, exports) {

module.exports = ":host{\n\tpadding: 28px 0;\n\tbackground-color: #4F4F4F;\n\tdisplay: block;\n\ttext-align: center;\n\tcolor: white;\n}\n\nh1 {\n\tfont-weight: 300;\n\tpadding: 0;\n\tmargin: 0 0 8px 0;\n\tfont-size: 50px;\n}\n\nh2 {\n\tfont-weight: 300;\n\tpadding: 0;\n\tmargin: 0;\n\tfont-size: 20px;\n}"

/***/ },

/***/ 719:
/***/ function(module, exports) {

module.exports = ":host {\n\tdisplay: block;\n\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n\tborder-radius: 3px;\n}"

/***/ },

/***/ 720:
/***/ function(module, exports) {

module.exports = ":host {\n\tbackground-color: white;\n\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n\tdisplay: block;\n\tpadding: 10px 0;\n}\n\n.center {\n\twidth: 1024px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.logo:hover {\n\tcursor: pointer;\n}\n\n.search {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\tmargin: 0 20px;\n\tborder-bottom: 2px solid #4F4F4F;\n}\n\n.search > div {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: row;\n\t        flex-direction: row;\n}\n\n.search-icon {\n\tdisplay: inline;\n\twidth: 18px;\n\theight: 18px;\n\tmargin-top: 10px;\n\tbackground-image: url('/assets/images/search-icon.svg');\n\tcursor: pointer;\n}\n\n.search > div > input {\n\t-webkit-box-flex: 1;\n\t    -ms-flex: 1;\n\t        flex: 1;\n\toutline: none;\n\tborder: none;\n\tpadding: 10px 10px 10px 0;\n\tfont-size: 16px;\n\tcolor: #4F4F4F;\n\tletter-spacing: 2px;\n}\n\n\n.btn.github-login {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tborder-radius: 3px;\n\theight: 28px;\n\tpadding: 6px 30px;\n\tbackground-color: #4F4F4F;\n\tfont-size: 0;\n}\n\n.btn.github-login:hover {\n\topacity: 0.8;\n\tcursor: pointer;\n}\n\n.btn.github-login > img {\n\tdisplay: inline-block;\n}\n\n.btn.github-login > span {\n\tfont-size: 14px;\n\tmargin-left: 10px;\n\tdisplay: inline-block;\n\tcolor: white;\n}"

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "<app-topbar></app-topbar>\n<router-outlet></router-outlet>\n<footer>\n    <span class=\"copyright\">Copyright Yang & Lambert & Bianca. All rights reserved.</span>\n    <ul class=\"links\">\n        <li>Term of Use</li>\n        <div class=\"vertical-divider\"></div>\n        <li>About Us</li>\n    </ul>\n    <div class=\"country\">\n        <img src=\"/assets/images/flags/US.svg\">\n        <span class=\"country-name\">United State</span>\n    </div>\n</footer>"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "<app-card>\n    <h1>All diagrams</h1>\n    <ul class=\"diagrams\">\n        <li *ngFor=\"let diagram of diagrams\"><span class=\"link\">{{diagram.name}}</span><span>View source</span></li>\n    </ul>\n</app-card>"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = "<app-card>\n  <h1>Import repository</h1>\n  <ul class=\"repositories\">\n    <li *ngFor=\"let repository of repositories\" [routerLink]=\"['../CodeEtch-api']\"><span class=\"link\">{{repository.name}}</span><span>master</span></li>\n  </ul>\n</app-card>"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = "<app-card  [attr.data-class-id]=\"classInfo.uuid\">\n    <div class=\"name\">\n        <img class=\"class-icon\" src=\"/assets/images/icons/classIcon.svg\">\n        <span>{{classInfo.name}}</span>\n    </div>\n    <div class=\"divider\"></div>\n    <ul class=\"attributes\">\n        <li *ngFor=\"let attributeInfo of attributeInfos\"><span class=\"attribute-icon\"></span>{{attributeInfo.name}}\n        </li>\n    </ul>\n    <div class=\"divider\"></div>\n    <ul class=\"methods\">\n        <li *ngFor=\"let methodInfo of methodInfos\" [attr.data-method-id]=\"methodInfo.uuid\">\n            <img *ngIf=\"methodInfo.type!='Constructor'\" class=\"function-icon\" src=\"/assets/images/icons/functionIcon.svg\">\n            <img *ngIf=\"methodInfo.type=='Constructor'\" class=\"function-icon\" src=\"/assets/images/icons/constructorIcon.svg\">\n            {{methodInfo.type}}&nbsp;&nbsp;{{methodInfo.name}}&#40;&#41;\n        </li>\n    </ul>\n</app-card>"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = "<div class=\"horizontal-piece\"\n     [ngStyle]=\"{'left.px': getLeft(), 'width.px': getWidth() / 2.0, 'top.px': getLeftTop() - width / 2.0}\"></div>\n<div class=\"vertical-piece\"\n     [ngStyle]=\"{'left.px': getHorizontalCenter() - width / 2.0, 'top.px': getVerticalTop() - width / 2.0, 'height.px': getHeight() + width}\"></div>\n<div class=\"horizontal-piece\"\n     [ngStyle]=\"{'left.px':  getHorizontalCenter(), 'width.px': getWidth() / 2.0, 'top.px': getRightTop() - width / 2.0}\"></div>\n<div class=\"arrow-right\" *ngIf=\"!isVertical() && isLeftToRight()\" [ngStyle]=\"{'left.px':  endX - 5, 'top.px': endY - 10}\"></div>\n<div class=\"arrow-left\" *ngIf=\"!isVertical() && !isLeftToRight()\" [ngStyle]=\"{'left.px':  getLeft() - 5, 'top.px': getLeftTop() - 10}\"></div>\n<div class=\"arrow-down\" *ngIf=\"isVertical() && !isHorizontal() && isTopToBottom()\" [ngStyle]=\"{'left.px':  getHorizontalCenter() - 10, 'top.px': endY - width / 2.0}\"></div>\n<div class=\"arrow-up\" *ngIf=\"isVertical() && !isHorizontal() && !isTopToBottom()\" [ngStyle]=\"{'left.px':  getHorizontalCenter() - 10, 'top.px': endY - width}\"></div>\n"

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "<app-class-diagram *ngFor=\"let classInfo of classInfos\" [classInfo]=\"classInfo\" (newInfoEmmiter)=\"appendNewInfos($event)\"></app-class-diagram>\n\n<app-connector *ngFor=\"let refInfo of refInfos\" [startX]=\"getStartX(refInfo)\" [startY]=\"getStartY(refInfo)\"\n               [endX]=\"getEndX(refInfo)\" [endY]=\"getEndY(refInfo)\"></app-connector>"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<h1>Code Etch</h1>\n<h2>Project structure analyzer</h2>"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "<div class=\"center\">\n  <img class=\"logo\" src=\"/assets/images/logo.svg\" [routerLink]=\"['/']\">\n  <div class=\"search\">\n    <div>\n      <input>\n      <div class=\"search-icon\"></div>\n    </div>\n  </div>\n  <a href=\"https://github.com/login/oauth/authorize?client_id=5ea134479819fa62f739\">\n    <div class=\"btn github-login\">\n      <img src=\"/assets/images/github-icon.svg\">\n      <span>Github login</span>\n    </div>\n  </a>\n</div>"

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    base_api_url: 'http://boatmurdered.dyn.wpi.edu',
    client_id: '5ea134479819fa62f739',
    client_secret: 'a084f9bece56ab5150356a64df6c1332fe5115d4',
};
//# sourceMappingURL=/Users/harryliu/Documents/projects/codeEtch/frontend/src/environment.js.map

/***/ },

/***/ 996:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(435);


/***/ }

},[996]);
//# sourceMappingURL=main.bundle.map