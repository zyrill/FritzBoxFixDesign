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
// @license     MIT
// @version     1.1.1
// ==/UserScript==

try { document.getElementById("world").style.maxWidth="900px"; }
catch(err) { console.log(err.message); }
