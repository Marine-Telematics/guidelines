"use strict";(self.webpackChunkguidelines=self.webpackChunkguidelines||[]).push([[514],{3993:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=a(4848),i=a(8453);const l={sidebar_position:0},o="Naming and declaration.",r={id:"classes/naming_and_declaration",title:"Naming and declaration.",description:"All classes and structures must be declared in a .h file and defined in a relative .cpp file, in the same directory and with the same name.",source:"@site/docs/classes/naming_and_declaration.md",sourceDirName:"classes",slug:"/classes/naming_and_declaration",permalink:"/guidelines/docs/classes/naming_and_declaration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Names and Order of Includes",permalink:"/guidelines/docs/header_files/naming_and_order"},next:{title:"Constructors",permalink:"/guidelines/docs/classes/constructors"}},c={},d=[{value:"The file naming patter should follow:",id:"the-file-naming-patter-should-follow",level:5},{value:"For example, declaring a class <code>FooBar</code>, module of <code>core</code>:",id:"for-example-declaring-a-class-foobar-module-of-core",level:4}];function t(e){const n={code:"code",h1:"h1",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"naming-and-declaration",children:"Naming and declaration."})}),"\n",(0,s.jsxs)(n.p,{children:["All classes and structures must be declared in a ",(0,s.jsx)(n.code,{children:".h"})," file and defined in a relative ",(0,s.jsx)(n.code,{children:".cpp"})," file, in the same directory and with the same name."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["File names should be written in ",(0,s.jsx)(n.code,{children:"snake_case"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Type names should be written in ",(0,s.jsx)(n.code,{children:"CamelCase"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"File names should be the same name as the class/structure name."}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"the-file-naming-patter-should-follow",children:"The file naming patter should follow:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"class_name.h"})," With the class declaration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"class_name.cpp"})," With the class definition."]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"for-example-declaring-a-class-foobar-module-of-core",children:["For example, declaring a class ",(0,s.jsx)(n.code,{children:"FooBar"}),", module of ",(0,s.jsx)(n.code,{children:"core"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'// In core/foo_bar.h\n\nclass FooBar\n{\n  ...\n  FooBar();\n};\n\n// In core/foo_bar.cpp\n\n#include "core/foo_bar.h"\n\nFooBar::FooBar()\n{\n    ...\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var s=a(6540);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);