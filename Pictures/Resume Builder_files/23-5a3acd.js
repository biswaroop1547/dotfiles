webpackJsonp([23],{1778:function(e,n,o){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=o(8),l=(o.n(a),o(25)),c=(o.n(l),o(200)),u=o(1533),s=o(1779),f=o.n(s),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,o,t,i){var r=n&&n.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&r)for(var l in r)void 0===o[l]&&(o[l]=r[l]);else o||(o=r||{});if(1===a)o.children=i;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:n,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}(),d=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}(),y=function(e){function n(){return t(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),d(n,[{key:"render",value:function(){var e=this.props,n=e.header,o=e.showSkip,t=e.termsOfUseLink,i=e.privacyPolicyLink,r=e.handleClickFacebook,a=e.handleClickGoogle,l=e.handleClickSignUp,s=e.handleClickSignIn,d=e.handleClickSkip;return p("div",{className:f.a.container},void 0,n,p("div",{className:f.a.title},void 0,"Sign up to save your work, FREE!"),p("div",{className:f.a.buttons},void 0,p(u.a,{ssoType:"facebook",iconWidthType:"long",onClick:r},void 0,"Connect with Facebook"),p(u.a,{ssoType:"google",iconWidthType:"long",onClick:a},void 0,"Connect with Google"),p(c.a,{styleTypes:["secondary-3","icon-style-6"],iconType:"email",onClick:l},void 0,"Sign up with Email")),p("div",{className:f.a["terms-n-policy"]},void 0,"By signing up, you are indicating that you have read and agreed to ResumeGenius's ",p("a",{href:t,target:"_blank",className:f.a.link},void 0,"Terms of Use")," and ",p("a",{href:i,target:"_blank",className:f.a.link},void 0,"Privacy Policy"),"."),p("div",{className:f.a["account-n-skip"]},void 0,p(c.a,{styleTypes:["minimal-3"],onClick:s},void 0,"I already have an account"),o&&p(c.a,{styleTypes:["minimal-2"],onClick:d},void 0,"Skip")))}}]),n}(a.PureComponent);y.defaultProps={header:null,showSkip:!1,termsOfUseLink:"",privacyPolicyLink:"",handleClickFacebook:function(){},handleClickGoogle:function(){},handleClickSignUp:function(){},handleClickSignIn:function(){},handleClickSkip:function(){}},n.a=y},1779:function(e,n){e.exports={container:"auth-panel-container-7c5d5d",title:"auth-panel-title-6861e6",buttons:"auth-panel-buttons-0793e2","terms-n-policy":"auth-panel-terms-n-policy-b830f7",link:"auth-panel-link-ef0fa9","account-n-skip":"auth-panel-account-n-skip-865800"}},722:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(8),i=(o.n(t),o(60)),r=o(29),a=o(1778),l=o(1472),c=o(101),u=o(642),s=o(327),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,o,t,i){var r=n&&n.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&r)for(var l in r)void 0===o[l]&&(o[l]=r[l]);else o||(o=r||{});if(1===a)o.children=i;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:n,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}(),p=f(l.a,{}),d=function(e){return{header:p,showSkip:Object(u.a)(e),termsOfUseLink:c.l,privacyPolicyLink:c.g}},y=function(e){return{handleClickFacebook:function(){return e(Object(s.a)())},handleClickGoogle:function(){return e(Object(s.b)())},handleClickSignUp:function(){return e(Object(s.d)())},handleClickSignIn:function(){return e(Object(s.c)())},handleClickSkip:function(){return e(Object(s.e)())}}};n.default=Object(r.compose)(Object(i.b)(d,y))(a.a)}});