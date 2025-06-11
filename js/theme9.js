// ==UserScript==
// @name         injx v1.9
// @version      1.9
// @description  A ss theme made by injx
// @author       injx
// @match        https://*.shellshock.io/*
// @match        https://algebra.best/*
// @match        https://algebra.vip/*
// @match        https://biologyclass.club/*
// @match        https://deadlyegg.com/*
// @match        https://deathegg.world/*
// @match        https://egg.dance/*
// @match        https://eggboy.club/*
// @match        https://eggboy.xyz/*
// @match        https://eggcombat.com/*
// @match        https://eggfacts.fun/*
// @match        https://egghead.institute/*
// @match        https://eggisthenewblack.com/*
// @match        https://eggsarecool.com/*
// @match        https://eggshooter.best/*
// @match        https://geometry.best/*
// @match        https://geometry.monster/*
// @match        https://geometry.pw/*
// @match        https://geometry.report/*
// @match        https://hardboiled.life/*
// @match        https://hardshell.life/*
// @match        https://humanorganising.org/*
// @match        https://mathactivity.xyz/*
// @match        https://mathdrills.info/*
// @match        https://mathdrills.life/*
// @match        https://mathfun.rocks/*
// @match        https://mathgames.world/*
// @match        https://math.international/*
// @match        https://mathlete.fun/*
// @match        https://mathlete.pro/*
// @match        https://overeasy.club/*
// @match        https://scrambled.best/*
// @match        https://scrambled.tech/*
// @match        https://scrambled.today/*
// @match        https://scrambled.us/*
// @match        https://scrambled.world/*
// @match        https://shellsocks.com/*
// @match        https://shellshockers.club/*
// @match        https://shellshockers.site/*
// @match        https://shellshockers.us/*
// @match        https://shellshockers.world/*
// @match        https://shellshockers.xyz/*
// @match        https://softboiled.club/*
// @match        https://urbanegger.com/*
// @match        https://violentegg.club/*
// @match        https://violentegg.fun/*
// @match        https://yolk.best/*
// @match        https://yolk.life/*
// @match        https://yolk.quest/*
// @match        https://yolk.rocks/*
// @match        https://yolk.tech/*
// @match        https://yolk.today/*
// @match        https://zygote.cafe/*
// ==/UserScript==

!function(){const n=document.createElement("style");document.body.appendChild(n).textContent="\n/*--------------DO NOT EDIT ANYTHING OR IT WILL BE UR PROBLEM--------------------------------------------------*/\n\n:root {\n--select-border: #777;\n    --select-focus: blue;\n    --select-arrow: var(--select-border);\n    --ss-transparent: #00000000;\n    --ss-black: #000;\n    --ss-adblocker-text: #003449;\n    --ss-white: #FFFFFF;\n    --ss-offwhite: #FFF3E4;\n    --ss-yellow0: #F7FFC1;\n    --ss-yellow: #FAF179;\n    --ss-yolk0: #351382;\n    --ss-yolk: #211353;\n    --ss-yolk2: #351382;\n    --ss-red0: #e29092;\n    --ss-red: #d15354;\n    --ss-red2: #801919;\n    --ss-egg-org: #EE2524;\n    --ss-red-bright: #EF3C39;\n    --ss-pink: #EC008C;\n    --ss-pink1: #b9006e;\n    --ss-pink-light: #ff3aaf;\n    --ss-pink-dark: #a7098c;\n    --ss-brown: #7e0761e0;\n    --ss-blue00: #351f6b;\n    --ss-blue0: #211353;\n    --ss-blue1: #351382ba;\n    --ss-blue2: #211353;\n    --ss-blue3: #7134bd;\n    --ss-blue4: #62065dd9;\n    --ss-blue5: #211353;\n    --ss-blue6: #b603ae40;\n    --ss-blue7: #b603ae40;\n    --ss-blue8: #ce98ee;\n    --ss-green0: #b603ae40;\n    --ss-green1: #b603ae40;\n    --ss-green2: #2110;\n    --ss-box-shadow-1: ;\n    }\n\t\t/* root */\n\t\t:root {\n\t\t\t--ss-lightoverlay: url('https://tinyurl.com/3dux2a5z');\n\t\t\t--ss-popupbackground: url('https://tinyurl.com/3dux2a5z');\n\t\t\t--ss-me-player-bg: url('https://tinyurl.com/3dux2a5z');\n    }\n    .text_blue5 {\n    color: #ebebeb !important;\n    }\n\n    .main-menu-button svg path:nth-child(1) {\n    fill: #211353 !important;\n    }\n\n.current-screen .main-nav-item-bg, .main-menu-button:hover .main-nav-item-bg {\n    fill: #8f44d2;\n    }\n\n\n.weapon_img {\n    background-color: #130533;\n    border: var(--ss-common-border-width) solid #ce98ee;\n    fill: #ffffff;\n}\n\n.egg-color-select {\n    border: .2em solid #130533;\n}\n\n.ss_button {\n    border-color: #cd97ee;\n}\n\n.btn_blue_light {\n    border-color: #cd97ee;\n}\n\n   .main-menu-button {\n   color: #b603ae;\n   }\n\n   .btn_game_mode .open-close i {\n    color: #b603ae99;\n   }\n\n   .media-item {\n    color: #ffffff;\n   }\n\n   .label {\n    color: #ffffffd9;\n    }\n\n    .text_blue4 {\n    color: #ffffffd9 !important;\n    }\n\n    #settingsPopup h2, #settingsPopup h3, #settingsPopup h4 {\n    color: #ffffff;\n    }\n\n\n    .egg-color-select {\n    border: .2em solid #b603ae5c;\n\n   }\n\n   .stream_item a {\n    color: #ffffff;\n   }\n   .menu-item {\n    box-shadow: 3px 3px 10px rgba(255, 0, 0, 0.5); /* Changed to red shadow */\n   }\n\n.main-nav-item-bg {\n    fill: #cd97ee;\n    stroke: #340a57;\n}\n\n.main-menu-button {\n    color: #300146;\n    fill-rule: evenodd;\n    fill: rgb(145 1 1);\n   }\n\n#equip_grid .grid-item:not(.morestuff) {\n    background: radial-gradient(circle, #d499f8, #581084db);\n}\n\n.giveStuffPopup-content .equip_icon,.primary .equip_icon,.secondary .equip_icon {\n    filter: drop-shadow(0 2mm 0 rgb(14 7 49))\n}\n\n\n\n.stat-wrapper .stat:nth-child(2n)>div {\n    background-color: #7134bd;\n}\n.stat-wrapper .stat:nth-child(odd)>div {\n    background-color: #7134bd !important;\n}\n\n     .player-challenges-container {\n        width: X%;\n        background: rgb(33, 19, 83);\n    }\n    .is-paused .pause-ui-element {\n    background-color: #211353;\n    }\n    \n    .is-paused .pause-ui-element {\n    background-color: #211353;\n    }\n\n  "}();
