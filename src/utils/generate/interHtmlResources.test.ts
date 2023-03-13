import { type GroupedRequest } from "@src/interfaces/Request";
import { TIMESTAMP_100_MS } from "@src/utils/generate/group";
import {
  entry1,
  entry10analytics,
  entry11faviconPng,
  entry12analytics,
  entry2bundle,
  entry3logoSvg,
  entry4logoSvg,
  entry5serliPng,
  entry6serli2Png,
  entry7serliJpg,
  entry8upPng,
  entry9upPng,
} from "@src/utils/generate/group.mocks";

import { getResourcesFromHtml, interResources } from "./inferHtmlResources";
import { DEVENIR_MEMBRE_BODY } from "./inferHtmlResources.mocks";

const BODY =
  '<html><head><meta name="robots" content="noindex, nofollow" /><title>Computers database</title><link rel="stylesheet" type="text/css" media="screen" href="/assets/css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" media="screen" href="/assets/css/main.css" /></head><body><header class="topbar"><h1 class="fill"><a class="fill" href="/computers">Computer database</a></h1></header><section id="main"><h1>Edit computer</h1><form action="/computers/381" method="POST"><fieldset><div class="clearfix "><label for="name">Computer name</label><div class="input"><input type="text" id="name" name="name" value="ACE" /> <span class="help-inline">Required</span></div></div><div class="clearfix "><label for="introduced">Introduced</label><div class="input"><input type="text" id="introduced" name="introduced" value="" /> <span class="help-inline">Date (\'yyyy-MM-dd\')</span></div></div><div class="clearfix "><label for="discontinued">Discontinued</label><div class="input"><input type="text" id="discontinued" name="discontinued" value="" /> <span class="help-inline">Date (\'yyyy-MM-dd\')</span></div></div><div class="clearfix"><label for="company">Company</label><div class="input"><select id="company" name="company"><option class="blank" value="">-- Choose a company --</option><option value="1">Apple Inc.</option><option value="2">Thinking Machines</option><option value="3">RCA</option><option value="4">Netronics</option><option value="5">Tandy Corporation</option><option value="6">Commodore International</option><option value="7">MOS Technology</option><option value="8">Micro Instrumentation and Telemetry Systems</option><option value="9">IMS Associates, Inc.</option><option value="10">Digital Equipment Corporation</option><option value="11">Lincoln Laboratory</option><option value="12">Moore School of Electrical Engineering</option><option value="13">IBM</option><option value="14">Amiga Corporation</option><option value="15">Canon</option><option value="16">Nokia</option><option value="17">Sony</option><option value="18">OQO</option><option value="19">NeXT</option><option value="20">Atari</option><option value="21">Acorn computer</option><option value="22">Timex Sinclair</option><option value="23">Nintendo</option><option value="24">Sinclair Research Ltd</option><option value="25">Xerox</option><option value="26">Hewlett-Packard</option><option value="27">Zemmix</option><option value="28">ACVS</option><option value="29">Sanyo</option><option value="30">Cray</option><option value="31">Evans &amp; Sutherland</option><option value="32">E.S.R. Inc.</option><option value="33">OMRON</option><option value="34">BBN Technologies</option><option value="35">Lenovo Group</option><option value="36">ASUS</option><option value="37">Amstrad</option><option value="38">Sun Microsystems</option><option value="39">Texas Instruments</option><option value="40">HTC Corporation</option><option value="41">Research In Motion</option><option value="42">Samsung Electronics</option></select></div></div></fieldset><div class="actions"><input type="submit" value="Save this computer" class="btn primary" /> or <a href="/computers" class="btn">Cancel</a></div></form><form class="topRight" action="/computers/381/delete" method="POST"><input type="submit" value="Delete this computer" class="btn danger" /></form></section></body></html>';

const BODY2 =
  '\n\n\n\n\n<!DOCTYPE html>\n<html lang="fr">\n\n\n\n<head>\n\n\t<meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1,requiresActiveX=true">\n\n\t\n\n\n\n\n\t<title>Présentation - pwn // poitiers web nerdz //</title>\n    <meta name="description" content="Présentation et objectif de Poitiers Web Nerdz">\n    <meta name="author" content="PWN" />\n\n    <meta property="og:locale" content="fr_FR" />\n    <meta property="og:title" content="Présentation | pwn // poitiers web nerdz //" />\n    <meta property="og:description" content="Présentation et objectif de Poitiers Web Nerdz" />\n    <meta property=”og:site_name” content="pwn // poitiers web nerdz //" />\n    <meta property="og:url" content="http://pwn-association.org/presentation/" />\n    <meta property="og:type" content="website" />\n    <meta property="og:image" content="http://pwn-association.org/static/core/img/img-share.jpg" />\n\n    <meta name="DC.Title" lang="fr" content="Présentation | pwn // poitiers web nerdz //" />\n\n    <!-- non odp -->\n    <meta name="robots" content="noodp" >\n    <meta name="robots" content="noodp" >\n    <meta name="Slurp" content="noodp" >\n    <meta name="bingbot" content="noodp" >\n    <meta name="robots" content="all" />\n\n\n\n\n\t<!-- /// Favicons ////////  -->\n\n\t<link rel="shortcut icon" href="/static/core/img/favicon.png">\n\n\t<!-- /// Template CSS ////////  -->\n\t<link rel="stylesheet" href="/static/core/css/app.css">\n\n\n\t\n\n\n</head>\n\n\n\n<body class="standard">\n    \n\n        <noscript>\n        <div class="alert warning">\n            You seem to have Javascript disabled. This website needs javascript in order to function properly!\n        </div>\n    </noscript>\n\n\t<!--[if lte IE 8]>\n     <div class="alert error">\n      Vous utilisez actuellement un navigateur <strong>obsolète</strong>.<br />\n      Afin d\'améliorer votre expérience sur ce site, merci de mettre à jour votre navigateur :\n      <ul>\n        <li><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Mettre à jour Internet Explorer</a></li>\n        <li><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Télécharger le navigateur Chrome</a></li>\n        <li><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Télécharger le navigateur Firefox</a></li>\n      </ul>\n\t\t\t</div>\n  <![endif]-->\n\n    <!-- HEADER  ################################################################################ -->\n    \t<header id="main-header">\n\t\t\t\t<div class="container">\n\t\t\t\t\t<div id="main-logo" class="left">\n\t\t\t\t\t\t<a href="/"><img src="/static/core/img/logo-pwn.svg" alt="PWN - Poitiers Web Nerdz" /></a>\n\n\t\t\t\t\t\t<span class="logo-url no-mobile">// poitiers web nerdz //</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type="button" id="toggle-menu-mobile" class="no-desktop">menu</button>\n\t\t\t\t\t<nav id="main-menu" role="navigation" class="right no-mobile">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\n\n\n<li class="child sibling">\n\t<a href="/devenir-membre/">S&#39;inscrire</a>\n\t\n</li>\n\n<li class="child selected">\n\t<a href="/presentation/">Présentation</a>\n\t\n</li>\n\n<li class="child sibling">\n\t<a href="/tous-les-evenements-pwn/">Événements</a>\n\t\n</li>\n\n<li class="child sibling">\n\t<a href="/faq/">F.A.Q.</a>\n\t\n</li>\n\n<li class="child sibling">\n\t<a href="/contact/">Contact</a>\n\t\n</li>\n\n<li class="child sibling">\n\t<a href="/covid-19/">COVID-19</a>\n\t\n</li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</nav>\n\n\t\t\t\t</div>\n    \t</header><!-- end #header -->\n    <!-- END HEADER  ################################################################################ -->\n\n\n\n\t<!-- CONTENT  ################################################################################### -->\n\t\t<section id="main-content" role="main">\n\t\t\t\n    <section id="standard-top-banner" class="block-text section-white">\n      <div class="container">\n\n\n        <h1>Qu\'est-ce que pwn ?</h1>\n\n<h2>En quelques mots.</h2>\n\n<p>PWN est une association venant enrichir le paysage numérique Pictave. Constituée d’étudiants et de professionnels du web, cette association a pour objectif de<strong> promouvoir le développement d’un web de qualité via différents événements</strong> tels que des rencontres, des conférences, etc. Plusieurs sujets sont ainsi traités par ces biais, <strong>de la gestion de projet à la conception, en passant par le design ou encore le développement</strong>.</p>\n\n<h2>L\'objectif de l\'association.</h2>\n\n<p>PWN n’a pas vocation à devenir un réseau professionnel mais plutôt de <strong>créer une émulation entre les différents acteurs du web Pictave autour d’événements ponctuels</strong>. Il s’agit avant tout d’une association indépendante, à but non lucratif, ayant une forte visée pédagogique. C\'est une structure offrant la possibilité d\'échanger sur la qualité, les nouveautés et les possibilités offertes par le web, soutenue par des professionnels et intervenants compétents venus des quatre coins de la France.</p>\n\n      </div>\n    </section>\n\n\n\n        \n    \t</section>\n\t<!-- END CONTENT  ############################################################################### -->\n\n\n\t<!-- SPONSORS  #################################################################################### -->\n\t\t<section id="main-sponsors" class="section-white">\n\t\t\t<p class="container align-center">Ils nous soutiennent</p>\n\t\t\t\t<ul class="container align-center">\n\t\t\t\t\t<li><a href="http://www.serli.com/" target="_blank"><img src="/static/core/img/serli.jpg" alt="Université de Poitiers"></a></li>\n\t\t\t\t\t<li><a href="http://www.univ-poitiers.fr/" target="_blank"><img src="/static/core/img/univ-poitiers.png" alt="Société SERLI"></a></li>\n\t\t\t\t</ul>\n\t\t</section>\n  <!-- END SPONSORS ################################################################################# -->\n\n\n\t<!-- FOOTER  #################################################################################### -->\n\t\t<footer id="main-footer">\n\t\t\t<p class="container align-center">\n\t\t\t\tSite créé avec ❤ par <a href="http://www.enguerranweiss.fr" target="_blank">Enguerran Weiss</a> et <a href="http://www.dwdlc.com" target="_blank">Samuel Sorin</a>\n\t\t\t</p>\n\t\t</footer><!-- end #footer -->\n    <!-- END FOOTER ################################################################################# -->\n\n\n\n\n\t<!-- SCRIPT  #################################################################################### -->\n\n\t<script src="/static/core/js/app.js"></script>\n\n\t\n\n\t<script>\n\t  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n\t  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\t  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\t  })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n\n\t  ga(\'create\', \'UA-84874571-1\', \'auto\');\n\t  ga(\'send\', \'pageview\');\n\n\t</script>\n</body>\n</html>\n';

const EXPECTED = ["/assets/css/bootstrap.min.css", "/assets/css/main.css"];

const EXPECTED2 = [
  "/static/core/img/favicon.png",
  "/static/core/css/app.css",
  "/static/core/img/logo-pwn.svg",
  "/static/core/img/serli.jpg",
  "/static/core/img/univ-poitiers.png",
  "/static/core/js/app.js",
];

describe("getResourcesFromHtml", () => {
  it("should return 2 items", () => {
    expect(getResourcesFromHtml(BODY)).toEqual(EXPECTED);
    expect(getResourcesFromHtml(BODY2)).toEqual(EXPECTED2);
  });

  it("should return 6 items", () => {
    expect(getResourcesFromHtml(BODY)).toEqual(EXPECTED);
    expect(getResourcesFromHtml(BODY2)).toEqual(EXPECTED2);
  });
});

const GROUP1: GroupedRequest = {
  sendTime: new Date(entry1.startedDateTime).getTime(),
  arrivalTime:
    new Date(entry12analytics.startedDateTime).getTime() + TIMESTAMP_100_MS,
  root: {
    ...entry1,
    response: {
      ...entry1.response,
      content: { ...entry1.response.content, text: DEVENIR_MEMBRE_BODY },
    },
  },
  resources: [
    entry2bundle,
    entry3logoSvg,
    entry4logoSvg,
    entry5serliPng,
    entry6serli2Png,
    entry7serliJpg,
    entry8upPng,
    entry9upPng,
    entry10analytics,
    entry11faviconPng,
    entry12analytics,
  ],
};

const GROUPED_REQUESTS: GroupedRequest[] = [GROUP1];

const EXPECTED_FILTERED_REQUESTS: GroupedRequest[] = [
  {
    ...GROUP1,
    resources: [entry10analytics, entry12analytics],
  },
];

describe("interResources", () => {
  it("should filter all resources", () => {
    expect(interResources(GROUPED_REQUESTS)).toEqual(
      EXPECTED_FILTERED_REQUESTS
    );
  });
});
