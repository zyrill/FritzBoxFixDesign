// ==UserScript==
// @name        Freetz Design Fix
// @namespace   https://github.com/zyrill/FritzBoxFixDesign
// @description Adjust the Freetz design slightly
// @author      zyrill
// @include     http://fritz.box:81/*
// @include     http://localhost:81/*
// @encoding    utf-8
// @grant       none
// @run-at      document-idle
// @updateURL   https://openuserjs.org/meta/zyrill/Freetz_Design_Fix.meta.js
// @copyright   2018, zyrill (https://openuserjs.org/users/zyrill)
// @license     MIT
// @version     1.1.2
// ==/UserScript==

try { document.getElementById("world").style.maxWidth="900px"; }
catch(err) { console.log(err.message); }
