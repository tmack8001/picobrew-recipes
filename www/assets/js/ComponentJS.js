/* Taken from: https://www.picobrew.com/Bundles/Scripts/ComponentJS?v=LT-QoH-DT2eAjuxRc4Mb0D2Bl5IgNdqDZF7N4ARvsGE1 */
function secondsToTimeStringColons(n){n=Number(n);var t=Math.floor(n/3600),i=Math.floor(n%3600/60),r=Math.floor(n%3600%60);return("0"+t).slice(-2)+":"+("0"+i).slice(-2)+":"+("0"+r).slice(-2)}function emailIsValid(n){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)}function isElementInViewport(n){typeof jQuery=="function"&&n instanceof jQuery&&(n=n[0]);var t=n.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function isElementYInViewport(n){var t=n.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}function addActivateClassToElement(n){return n==null?!1:(!n.classList.contains("activate")&&isElementInViewport(n)&&n.classList.add("activate"),n.classList.contains("activate"))}function addActivateForAnimation(n){var t=document.getElementById(n.id);return t==null?!1:(!t.classList.contains("activate")&&isElementInViewport(t)&&t.classList.add("activate"),t.classList.contains("activate"))}function checkHashLinkAndShift(){var n=document.getElementById("pico-nav-app"),t=-25,i=window.location.href.toLowerCase().includes("#");i&&(n!=null&&(t-=n.clientHeight),window.scrollBy(0,t))}function elementHeightFromId(n){var t=document.getElementById(n);return t==null?0:t.offsetHeight}function elementXFromId(n){var t=document.getElementById(n);return t==null?0:t.getBoundingClientRect().x}function RemoveClassFromElement(n,t){var i=document.getElementById(n);i!=null&&i.classList.contains(t)&&i.classList.remove(t)}function AddClassToElement(n,t){var i=document.getElementById(n);i==null||i.classList.contains(t)||i.classList.add(t)}function GetSmallSRMImage(n){var t;return t=n<2?1:n>70?80:n>60?70:n>50?60:n>40?50:n,"/assets/images/srm/200px/srm_"+t+".png"}function GetStarsImage(n){var t=n?""+n+".svg":"_none.svg";return"/assets/images/generic/stars/rating"+t}function beerDetailsRedirect(n,t){var i,r,u;typeof i=="undefined"&&(i=0);r="BeerDetails.cshtml?Beer="+t+"&ZKT="+i;u=n.ctrlKey||n.metaKey||n.shiftKey?"_blank":"_self";window.open(r,u)}function cartNotify(n){$("#cart-dropdown-caret").addClass("-activate");$("#cart-dropdown-box").addClass("-activate");setTimeout(function(){$("#cart-dropdown-caret").removeClass("-activate");$("#cart-dropdown-box").removeClass("-activate")},n)}function checkPicoNavPosition(){var n=elementHeightFromId("pico-nav-app"),t=$("#heroBanner"),i=elementHeightFromId("navControls")+"px",r=""+n+"px",u=t.height(),f=$(window).scrollTop();f>u?($("#navSpacer").css("height",i),$(".nav-container").css("position","fixed"),$(".nav-container").css("top",r)):($("#navSpacer").css("height","0px"),$(".nav-container").css("position","relative"),$(".nav-container").css("top","0px"))}function isNullOrEmpty(n){return n==null||n===""}function isNullOrWhitespace(n){return n==null||!/\S/.test(n)}function createRecipeCardVM(n,t,i){return{CardTitle:n.Style,RecipeSubtitle:n.Author,Stats:[{Title:"OG",Data:n.OG.toFixed(3)},{Title:"FG",Data:n.FG.toFixed(3)},{Title:"IBU",Data:n.IBU.toFixed(0)},{Title:"ABV",Data:n.ABV.toFixed(1)},{Title:"SRM",Data:n.SRM.toFixed(0)}],SRM:n.SRM.toFixed(0),RecipeTitle:n.Name,Image:i,Link:t,GUID:n.GUID,Event:isNullOrEmpty(t)}}function getPublicRecipeHref(n){return"/recipe.html?id="+n}Vue.directive("click-outside",{bind:function(n,t,i){n.clickOutsideEvent=function(r){n==r.target||n.contains(r.target)||i.context[t.expression](r)};document.body.addEventListener("click",n.clickOutsideEvent)},unbind:function(n){document.body.removeEventListener("click",n.clickOutsideEvent)}});const mainLayoutImage="/assets/images/mainlayout/",manualsPath="https://picobrewcontent.blob.core.windows.net",vm_footer={logo:mainLayoutImage+"footer/PicoBrew_logo_textonly_black.svg",links:[{title:"ABOUT",link:"/pr/about"},{title:"LEGAL",link:"/pr/legal"},{title:"PRESS",link:"/pr/media"},{title:"SUPPORT",link:"/About/ContactUs"},],copyright:"©"+(new Date).getFullYear()+" PicoBrew Inc. All Rights Reserved."},vm_nav={icons:{logo:{icon:mainLayoutImage+"nav/PicoBrew_logo_textonly_black.svg"},back:{icon:mainLayoutImage+"nav/icons/back_white.svg"},close:{icon:mainLayoutImage+"nav/icons/x_white.svg"},more:{icon:mainLayoutImage+"nav/icons/bars.svg",page:"top_level"},user:{icon:mainLayoutImage+"nav/icons/user.svg",page:"user_nonauth"},cart:{icon:mainLayoutImage+"nav/icons/cart_.svg",id:"cart-trigger"}},user:[],user_auth:[{title:"Orders",link:"/Members/User/OrderHistory",target:"_blank"},{title:"Settings",link:"/Members/User/EditSettings",target:"_blank"},{title:"Log Out",link:"/Account/LogOut"},],top_level:{links:[{title:"shop",page:"shop"},{title:"brew",page:"brew"},{title:"community",page:"community"},{title:"support",page:"support"},]},shop:{title:"shop",links:[{title:"BrewMarketplace",link:"/BrewMarketplace/Index",copy:"Brewing Kits",src:mainLayoutImage+"nav/icons/Products/brewmarketplace_grey.svg",detailItemClass:"-richdetail"},{title:"Z Series",link:"/Store/products/z",copy:"Advanced Brew Machine",src:mainLayoutImage+"nav/icons/Products/z_grey.svg",detailItemClass:"-richdetail"},{title:"Pico C",link:"/Store/products/picoc",copy:"Home Brew Machine",src:mainLayoutImage+"nav/icons/Products/picoc_grey.svg",detailItemClass:"-richdetail"},{title:"Pico Pro",link:"/Store/products/pico",copy:"Home Brew Machine",src:mainLayoutImage+"nav/icons/Products/picoc_grey.svg",detailItemClass:"-richdetail"},{title:"PicoStill",link:"/Store/products/picostill",copy:"Distilling Add-On",src:mainLayoutImage+"nav/icons/Products/picostill_grey.svg",detailItemClass:"-richdetail"},{title:"PicoFerm",link:"/Store/products/picoferm",copy:"Intelligent Fermentation",src:mainLayoutImage+"nav/icons/Products/picoferm_grey.svg",detailItemClass:"-richdetail"},{title:"BrewGear",link:"/Store/default",copy:"Homebrew Accessories",src:mainLayoutImage+"nav/icons/Products/brewgear_grey.svg",detailItemClass:"-richdetail"},]},brew:{title:"brew",links:[{title:"Public Recipes",link:"/publicrecipes/publicrecipes",copy:"Find Recipes To Brew"},{title:"Craft New Recipe",link:"/craft",copy:"Create or Edit Beer Recipes"},]},community:{title:"community",links:[{title:"BrewMarketplace",link:"/BrewMarketplace/Index",copy:"Brew The World With Us"},]},support:{title:"support",links:[{title:"Get Help",link:"/About/ContactUS",copy:"PicoBrew Customer Support"},{title:"Product Resources",link:"/About/ProductResources/default",copy:"Hardware Manuals and Guides"},]},admin:{links:[]},authorizedOnly:{admin_top:{title:"Admin",page:"admin"},admin_items:{dash:{title:"Dashboard",link:"/Admin/default.cshtml"},RPT:{title:"Reports",link:"/RedVelvet/index.html"},SQLRPT:{title:"SQL Reports",link:"/Admin/Reports/ViewReport.cshtml"},"BREW MAP":{title:"What's Brewing Now?",link:"/now",copy:"Brew The World With Us"}},brew_items:{brewhouse:{title:"BrewHouse",link:"/members/user/brewhouse.cshtml",copy:"Brew Session History"},myrecipes:{title:"My Recipes",link:"/z_crafter/z_recipes",copy:"Your Saved Recipes"},brewpub:{title:"BrewPub",link:"/Members/User/brewpub",copy:"KegSmarts On Tap"}},community_items:{forum:{title:"Forum",link:"/forum",target:"_blank",copy:"Share Ideas"}},pbn:{title:"PBN",link:"/PBN/Home.cshtml#/traffic"}},login:{event:"login"},username:"",cartadded:"Added To Cart!"};Vue.component("email-capture-modal",{data:function(){return{emailinput:""}},props:{vm:{},error:{}},template:'<div class="picoshared--modal-window">                  <div class="email-capture--container picoshared--modal-center" :style="backgroundColor">                    <button class="email-capture--close" v-on:click="closeEvent"><img :src="vm.Close" /><\/button>                    <div v-if="!isNullOrEmpty(vm.Logo)" class="email-capture--logo-contain"><img :src="vm.Logo" /><\/div>                    <div class="email-capture--content">{{ vm.Content }}<\/div>                    <div class="email-capture--error-wrap"><div v-if="error.show" class="email-capture--error">{{ error.message }}<\/div><\/div>                    <div>                        <input class="email-capture--input email-capture--box" v-on:click="clickInputEvent" v-on:keyup.enter="submitEvent" v-model="emailinput" :placeholder="vm.EmailPlaceholder" />                    <\/div>                    <button class="email-capture--box -black" v-on:click="submitEvent">{{ vm.ButtonText }}<\/button>                    <div class="email-capture--cancel" v-on:click="closeEvent">{{ vm.CancelText }}<\/div>                  <\/div>                <\/div>',methods:{closeEvent:function(){this.$emit("close-event")},clickInputEvent:function(){this.error.show&&this.$emit("clear-error")},submitEvent:function(){this.$emit("submit-event",this.emailinput)}},computed:{backgroundColor:function(){return"background-color:"+this.vm.BackgroundColor+";"}}});Vue.component("pico-footer",{data:function(){return{emailInput:""}},props:{vm:{}},template:'<div class="pico-footer">                    <img v-if="vm.logo" :src="vm.logo" class="pico-footer--logo" />                    <div class="pico-footer--links">                        <div class="pico-footer--link" v-for="item in vm.links" v-on:click="handleClick(item.link)">{{ item.title }}<\/div>                    <\/div>                    <div class="pico-footer--copyright">{{ vm.copyright }}<\/div>                <\/div>',methods:{handleClick:function(n){this.$emit("footer-click-event",n)}}});Vue.component("pico-nav",{data:function(){return{subActive:!1,subContent:[],detailActive:!1,detailContent:{},userContent:{},userActive:!1,backTarget:"",topLevelIndex:-1}},props:{vm:{},promoactive:!1,promovm:{}},template:'<div class="pico-nav--wrap" v-click-outside="clickOutside">                    <promo-text-strip v-if="showPromo" :vm="promovm"><\/promo-text-strip>                    <div id="pico-brew-navbar" class="pico-nav">                       <div class="pico-nav--contain">                           <div class="pico-nav--icon-wrap hamburger" v-on:click.stop="handleMore"><img class="pico-nav--icon" :src="vm.icons.more.icon"><\/div>                           <div class="pico-nav--icon-wrap logo" v-on:click.stop="handleLogo"><img class="pico-nav--icon" :src="vm.icons.logo.icon" /><\/div>                           <div class="pico-nav--top-items">                               <div class="pico-nav--top-item" v-for="(item, index) in vm.top_level.links" :class="{ \'-selected\': topLevelIndex == index }" v-on:click="handleTopLevelClick(index)">{{ item.title }}<\/div>                           <\/div>                           <div class="pico-nav--right">                               <div class="pico-nav--icon-wrap relpos -cart" :href="vm.icons.cart.link"><img class="pico-nav--icon" :src="vm.icons.cart.icon" /><\/div>                               <div v-if="vm.user.length > 0" class="pico-nav--icon-wrap -usermobile" v-on:click="handleUserClick"><img class="pico-nav--icon" :src="vm.icons.user.icon" /><\/div>                               <div v-if="vm.user.length > 0 && vm.username.length > 0" class="pico-nav--username" v-on:click="handleUserClick">{{ vm.username }}<\/div>                               <div v-else class="pico-nav--top-item -login" v-on:click="handleNavClick(vm.login)">SIGN IN<\/div>                           <\/div>                       <\/div>                    <\/div>                    <div id="pico-sub-nav" class="pico-nav--sub">                        <div class="pico-nav--close" v-on:click="handleBackEvent"><img class="pico-nav--close-icon" :src="vm.icons.close.icon"><\/div>                        <template v-for="item in subContent.links">                            <a v-if="item.link" :href="item.link" class="pico-nav--sub-item">{{ item.title }}<\/a>                            <div v-else v-on:click.stop="handleNavClick(item)" class="pico-nav--sub-item">{{ item.title }}<\/div>                        <\/template>                    <\/div>                    <div id="pico-sub-detail-nav" class="pico-nav--detail">                        <div class="pico-nav--close -back" v-on:click.stop="handleBackEvent"><img class="pico-nav--close-icon" :src="vm.icons.back.icon"><\/div>                        <div v-if="detailContent.title" class="pico-nav--detail-title">{{ detailContent.title }}<\/div>                        <div v-if="detailContent.subtitle" class="pico-nav--detail-subtitle">{{ detailContent.subtitle }}<\/div>                        <div class="pico-nav--detail-item-wrap">                            <template v-for="item in detailContent.links">                                 <a v-if="item.link" :href="item.link" class="pico-nav--detail-item" :class="item.detailItemClass">                                    <img v-if="item.src" :src="item.src" class="pico-nav--detail-item-image" />                                   <div class="pico-nav--detail-item-title">{{ item.title }}<\/div>                                    <div v-if="item.copy" class="pico-nav--detail-item-copy">{{ item.copy }}<\/div>                                <\/a>                                <div v-else v-on:click.stop="handleNavClick(item)" class="pico-nav--detail-item" :class="item.detailItemClass">                                    <img v-if="item.src" :src="item.src" class="pico-nav--detail-item-image" />                                   <div class="pico-nav--detail-item-title">{{ item.title }}<\/div>                                    <div v-if="item.copy" class="pico-nav--detail-item-copy">{{ item.copy }}<\/div>                                <\/div>                            <\/template>                        <\/div>                    <\/div>                    <div id="pico-user-nav" class="pico-nav--user">                        <template v-for="item in userContent">                            <a v-if="item.link" :href="item.link" class="pico-nav--sub-item -user">{{ item.title }}<\/a>                            <div v-else v-on:click="handleNavClick(item)" class="pico-nav--sub-item -user">{{ item.title }}<\/div>                        <\/template>                    <\/div>                <\/div>',methods:{closeAll:function(){this.userActive&&this.closeUser();this.subActive&&this.closeSub();this.detailActive&&this.closeDetail();this.topLevelIndex=-1},openSub:function(){var n=document.getElementById("pico-sub-nav");this.subContent=this.vm.top_level;n!=null&&n.classList.add("navactive");this.subActive=!0},closeSub:function(){var n=document.getElementById("pico-sub-nav");this.subContent={};n!=null&&n.classList.remove("navactive");this.subActive=!1},openDetail:function(n){var t=document.getElementById("pico-sub-detail-nav");this.detailContent=n;t!=null&&t.classList.add("navactive");this.detailActive=!0},closeDetail:function(){var n=document.getElementById("pico-sub-detail-nav");n!=null&&n.classList.remove("navactive");this.detailContent={};this.detailActive=!1},openUser:function(){var n=document.getElementById("pico-user-nav");this.userContent=this.vm.user;n!=null&&n.classList.add("navactive");this.userActive=!0},closeUser:function(){var n=document.getElementById("pico-user-nav");n!=null&&n.classList.remove("navactive");this.userContent=[];this.userActive=!1},handleMore:function(){this.subActive?(this.closeDetail(),this.closeSub()):(this.closeUser(),this.openSub())},handleLogo:function(){if(typeof onHomePage!="undefined"&&onHomePage){this.closeAll();return}this.$emit("nav-link-event","/","_self")},handleUserClick:function(){this.closeDetail();this.closeSub();this.userActive?this.closeUser():(this.closeAll(),this.openUser())},handleTopLevelClick:function(n){if(this.closeUser(),this.closeSub(),this.topLevelIndex==n)this.closeDetail(),this.topLevelIndex=-1;else{var t=this.vm.top_level.links[n];this.openDetail(this.vm[t.page],t.title);this.topLevelIndex=n}},handleBackEvent:function(){this.detailActive?this.closeDetail():this.subActive&&this.closeSub()},handleNavClick:function(n){n.page?this.openDetail(this.vm[n.page]):n.event&&(n.event==="login"?(this.closeAll(),showLoginModal()):n.event==="create"&&(this.closeAll(),showCreateAccountModal()))},clickOutside:function(){this.closeAll()}},computed:{showPromo:function(){return this.promoactive}},mounted:function(){var n=this;document.addEventListener("scroll",n.closeAll);window.addEventListener("resize",n.closeAll)}});Vue.component("promo-text-strip",{data:function(){return{activeIndex:0,func_tick:null,counter:0,cycleSteps:5}},props:{vm:{},preview:""},template:'<div id="promo-strip-active">                    <div class="promo-text-strip" ref="promo-text-strip" v-bind:class="{ \'promo-clickable\': currentIndexHasURL, \'fixed-override\': overrideFixed}"  v-on:click="clickEvent">                        <transition name="promofade" mode="out-in">                            <div class="text-strip-text" v-if="index == activeIndex" v-for="(item, index) in vm.items" :key="item.text">{{ currentText }}<\/div>                        <\/transition>                    <\/div>                <\/div>',methods:{clickEvent:function(){this.boundsCheck()&&this.vm.items[this.activeIndex].url&&this.vm.items[this.activeIndex].url.length>0&&(window.location=this.vm.items[this.activeIndex].url)},cycleItem:function(){this.activeIndex+=1;(!this.boundsCheck()||this.activeIndex>=this.vm.items[this.activeIndex].length)&&(this.activeIndex=0)},boundsCheck:function(){return this.vm&&this.vm.items&&this.vm.items[this.activeIndex]},tick:function(){this.counter--;this.counter<=0&&(this.cycleItem(),this.counter=this.cycleSteps)}},computed:{overrideFixed:function(){return this.preview&&this.preview.length>0},currentIndexHasURL:function(){return this.boundsCheck()&&this.vm.items[this.activeIndex].url&&this.vm.items[this.activeIndex].url.length>0},currentText:function(){return this.boundsCheck()?this.vm.items[this.activeIndex].text:""}},mounted:function(){var n=this;n.counter=n.cycleSteps;n.func_tick=setInterval(n.tick,1e3)},beforeDestroy:function(){clearInterval(this.func_tick)}});new Vue({el:"#pico-nav-app",data:function(){return{vm:vm_nav,nav_extra_tags:{},promovm:{},promoactive:!1,padheight:45}},methods:{handleNavLinkEvent:function(n,t){window.open(n,t)},setNavAuth:function(){const n=this.vm.authorizedOnly,t=this.nav_extra_tags;this.vm.username=this.$el.attributes.passedusername.value;this.vm.brew.links.unshift(n.brew_items.myrecipes);this.vm.user=this.vm.user_auth;t.has("pbn")&&this.vm.user_auth.push(n.pbn);(t.has("RPT")||t.has("admin_dash"))&&(this.vm.top_level.links.push(n.admin_top),t.has("admin_dash")&&(this.vm.admin.links.push(n.admin_items.dash),this.vm.admin.links.push(n.admin_items.SQLRPT)),t.has("RPT")&&this.vm.admin.links.push(n.admin_items.RPT));t.has("brewhouse")&&this.vm.brew.links.unshift(n.brew_items.brewhouse);t.has("brewpub")&&this.vm.brew.links.push(n.brew_items.brewpub)},setNavNonAuth:function(){this.vm.user=[]},setNavStructure:function(){this.nav_extra_tags.has("authenticated")?this.setNavAuth():this.setNavNonAuth()},paddingHeight:function(){this.padheight=elementHeightFromId("pico-brew-navbar");this.promoactive&&(this.padheight+=elementHeightFromId("promo-strip-active"))}},computed:{padStyle:function(){return"height:"+this.padheight+"px;"}},mounted:function(){var n=this;n.nav_extra_tags=new Set(JSON.parse(n.$el.attributes.navitems.value));n.setNavStructure();typeof promojson!="undefined"&&(this.promoactive=promojson.items&&promojson.items.length>0,this.promovm=promojson);window.addEventListener("resize",n.paddingHeight);document.addEventListener("DOMContentLoaded",n.paddingHeight)}});new Vue({el:"#pico-footer-app",data:function(){return{vm:vm_footer,emailCapVM:{},error:{show:!1,message:""},showEmailCap:!1}},methods:{handleFooterClick:function(n){window.open(n,"_blank")},handleFooterEmailSignup:function(n){subscribeUser(n)},handleEmailClose:function(){this.showEmailCap=!1},handleEmailSubmit:function(n){console.log("submit/join ("+n+")");this.joinUser(n)},handleEmailClearError:function(){this.error.show=!1},showEmailCapture:function(){var n=this;setTimeout(function(){n.showEmailCap=!0},8e3)},useDefaultEmailBackground:function(){this.emailCapVM.BackgroundColor="#999"},joinUser:function(n){var t=this;emailIsValid(n)?subscribeNewUser(n,"PopUp").done(function(){t.error.show=!1;t.emailCapVM.Content="Thank you for signing up to PicoBrew's mailing list!";t.emailCapVM.ButtonText="Thank you for signing up!";setTimeout(function(){t.showEmailCap=!1},300)}).fail(function(){t.error.message="error submitting email address";t.error.show=!0}):(t.error.message="invalid email format",t.error.show=!0)}},mounted:function(){}});Number.prototype.SecondsToHHMMSS=function(){seconds=this;var n=Math.floor(seconds/3600),t=Math.floor(seconds%3600/60),i=Math.floor(seconds%3600%60);return("0"+n).slice(-2)+":"+("0"+t).slice(-2)+":"+("0"+i).slice(-2)};Number.prototype.SecondsToDHMS=function(){seconds=this;var n=Math.floor(seconds/86400),t=Math.floor(seconds%86400/3600),i=Math.floor(seconds%3600/60),r=Math.floor(seconds%3600%60);return""+n+" Days "+t+" Hours "+("0"+i).slice(-2)+" Minutes "};String.prototype.includes||(String.prototype.includes=function(n,t){"use strict";return typeof t!="number"&&(t=0),t+n.length>this.length?!1:this.indexOf(n,t)!==-1});Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,value:function(n){var t=this.filter(function(t){return t==n});return t.length>0}});Array.prototype.forEach||(Array.prototype.forEach=function(n,t){for(var i=0,r=this.length;i<r;++i)n.call(t,this[i],i,this)});window.addEventListener("load",function(){checkHashLinkAndShift()})