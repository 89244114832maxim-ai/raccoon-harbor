var bd=Object.defineProperty;var Md=(n,e,t)=>e in n?bd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var F=(n,e,t)=>Md(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var aa={exports:{}},Ol;function Sd(){return Ol||(Ol=1,(function(n){var e=(function(){var t=String.fromCharCode,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function a(l,c){if(!r[l]){r[l]={};for(var u=0;u<l.length;u++)r[l][l.charAt(u)]=u}return r[l][c]}var o={compressToBase64:function(l){if(l==null)return"";var c=o._compress(l,6,function(u){return i.charAt(u)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(l){return l==null?"":l==""?null:o._decompress(l.length,32,function(c){return a(i,l.charAt(c))})},compressToUTF16:function(l){return l==null?"":o._compress(l,15,function(c){return t(c+32)})+" "},decompressFromUTF16:function(l){return l==null?"":l==""?null:o._decompress(l.length,16384,function(c){return l.charCodeAt(c)-32})},compressToUint8Array:function(l){for(var c=o.compress(l),u=new Uint8Array(c.length*2),h=0,d=c.length;h<d;h++){var f=c.charCodeAt(h);u[h*2]=f>>>8,u[h*2+1]=f%256}return u},decompressFromUint8Array:function(l){if(l==null)return o.decompress(l);for(var c=new Array(l.length/2),u=0,h=c.length;u<h;u++)c[u]=l[u*2]*256+l[u*2+1];var d=[];return c.forEach(function(f){d.push(t(f))}),o.decompress(d.join(""))},compressToEncodedURIComponent:function(l){return l==null?"":o._compress(l,6,function(c){return s.charAt(c)})},decompressFromEncodedURIComponent:function(l){return l==null?"":l==""?null:(l=l.replace(/ /g,"+"),o._decompress(l.length,32,function(c){return a(s,l.charAt(c))}))},compress:function(l){return o._compress(l,16,function(c){return t(c)})},_compress:function(l,c,u){if(l==null)return"";var h,d,f={},g={},v="",m="",p="",x=2,S=3,_=2,I=[],E=0,T=0,C;for(C=0;C<l.length;C+=1)if(v=l.charAt(C),Object.prototype.hasOwnProperty.call(f,v)||(f[v]=S++,g[v]=!0),m=p+v,Object.prototype.hasOwnProperty.call(f,m))p=m;else{if(Object.prototype.hasOwnProperty.call(g,p)){if(p.charCodeAt(0)<256){for(h=0;h<_;h++)E=E<<1,T==c-1?(T=0,I.push(u(E)),E=0):T++;for(d=p.charCodeAt(0),h=0;h<8;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1}else{for(d=1,h=0;h<_;h++)E=E<<1|d,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=0;for(d=p.charCodeAt(0),h=0;h<16;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1}x--,x==0&&(x=Math.pow(2,_),_++),delete g[p]}else for(d=f[p],h=0;h<_;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1;x--,x==0&&(x=Math.pow(2,_),_++),f[m]=S++,p=String(v)}if(p!==""){if(Object.prototype.hasOwnProperty.call(g,p)){if(p.charCodeAt(0)<256){for(h=0;h<_;h++)E=E<<1,T==c-1?(T=0,I.push(u(E)),E=0):T++;for(d=p.charCodeAt(0),h=0;h<8;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1}else{for(d=1,h=0;h<_;h++)E=E<<1|d,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=0;for(d=p.charCodeAt(0),h=0;h<16;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1}x--,x==0&&(x=Math.pow(2,_),_++),delete g[p]}else for(d=f[p],h=0;h<_;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1;x--,x==0&&(x=Math.pow(2,_),_++)}for(d=2,h=0;h<_;h++)E=E<<1|d&1,T==c-1?(T=0,I.push(u(E)),E=0):T++,d=d>>1;for(;;)if(E=E<<1,T==c-1){I.push(u(E));break}else T++;return I.join("")},decompress:function(l){return l==null?"":l==""?null:o._decompress(l.length,32768,function(c){return l.charCodeAt(c)})},_decompress:function(l,c,u){var h=[],d=4,f=4,g=3,v="",m=[],p,x,S,_,I,E,T,C={val:u(0),position:c,index:1};for(p=0;p<3;p+=1)h[p]=p;for(S=0,I=Math.pow(2,2),E=1;E!=I;)_=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=u(C.index++)),S|=(_>0?1:0)*E,E<<=1;switch(S){case 0:for(S=0,I=Math.pow(2,8),E=1;E!=I;)_=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=u(C.index++)),S|=(_>0?1:0)*E,E<<=1;T=t(S);break;case 1:for(S=0,I=Math.pow(2,16),E=1;E!=I;)_=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=u(C.index++)),S|=(_>0?1:0)*E,E<<=1;T=t(S);break;case 2:return""}for(h[3]=T,x=T,m.push(T);;){if(C.index>l)return"";for(S=0,I=Math.pow(2,g),E=1;E!=I;)_=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=u(C.index++)),S|=(_>0?1:0)*E,E<<=1;switch(T=S){case 0:for(S=0,I=Math.pow(2,8),E=1;E!=I;)_=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=u(C.index++)),S|=(_>0?1:0)*E,E<<=1;h[f++]=t(S),T=f-1,d--;break;case 1:for(S=0,I=Math.pow(2,16),E=1;E!=I;)_=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=u(C.index++)),S|=(_>0?1:0)*E,E<<=1;h[f++]=t(S),T=f-1,d--;break;case 2:return m.join("")}if(d==0&&(d=Math.pow(2,g),g++),h[T])v=h[T];else if(T===f)v=x+x.charAt(0);else return null;m.push(v),h[f++]=x+v.charAt(0),d--,x=v,d==0&&(d=Math.pow(2,g),g++)}}};return o})();n!=null?n.exports=e:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})})(aa)),aa.exports}var Bl=Sd();function wd(n){if(!n.ctx||!n.musicGain||!n.musicOn||n.muted)return;const e=[261.63,293.66,329.63,392,440,523.25,587.33,659.25],t=[0,2,4,7,4,2,5,4,0,4,5,2,4,0,2,7],i=[[0,2,4],[0,4,7],[5,7,2],[3,5,7]];for(;n.nextNote<n.ctx.currentTime+.28;){const s=n.step%t.length,r=e[t[s]%e.length];if(n.pluck(n.nextNote,r,.34,"sine"),n.pluck(n.nextNote,r*2,.14,"triangle"),s%4===0){const a=i[(n.step>>2)%i.length];for(const o of a)n.pluck(n.nextNote,e[o%e.length]/2,.46,"triangle")}n.nextNote+=.42,n.step++}}const Ed="rh.slot",zl="rh";function Td(n){return`rh.save.${n}`}const Ad={"poly:pumpkin-5f977e":{h:.36},"poly:pumpkin-crop-7de137":{h:.95},"poly:croissant-758d69":{h:.28},"poly:coffee-cup-90be67":{h:.32},"poly:layer-cake-45d142":{h:.34},"poly:bread-loaf-0e0ab5":{h:.26},"poly:wooden-fence-section-d72055":{h:1.05},"poly:curbside-mailbox-0e0736":{h:1.25},"poly:pier-deck-section-7047d7":{max:2.35},"poly:pier-deck-corner-c56248":{max:2.15},"poly:pier-rope-railing-616f5d":{max:2.1},"poly:mooring-post-2b83a4":{h:1.15},"poly:rowboat-c42d85":{max:2.5},"poly:sailboat-3ee283":{max:2.7},"poly:dock-lantern-post-5e58a4":{h:2.15},"poly:drying-net-rack-93ec3b":{h:1.55},"poly:treasure-chest-c2ac4f":{h:.85},"poly:market-stall-94937d":{h:2.15},"poly:wooden-crate-e46521":{h:.62},"poly:barrel-8d63c4":{h:.78},"poly:apple-tree-ef0ba0":{h:3.5},"poly:wheat-crop-7e08e6":{h:.85},"poly:beehive-2e70bf":{h:1.05},"poly:milk-churn-895735":{h:.85},"poly:red-barn-d41683":{h:3.3},"poly:hay-bale-079e8c":{max:1.15},"poly:berry-bush-ee4812":{h:1.15},"poly:tall-pine-tree-ab4108":{h:4.1},"poly:lean-to-shelter-f0709f":{h:2.15},"poly:snow-laden-spruce-36716e":{h:4.3},"poly:deep-powder-tile-1fcec9":{max:1.7},"poly:brain-coral-head-7db21a":{max:1.25},"poly:table-coral-193fa6":{max:1.35},"poly:staghorn-coral-422d23":{h:1.2},"poly:sea-fan-bafd49":{h:1.45},"poly:palm-tree-a307da":{h:4.1},"poly:beach-parasol-fd4530":{h:2.2},"poly:dive-marker-buoy-21beb7":{h:1.05},"poly:bistro-table-877a6d":{h:.78},"poly:bistro-chair-7c354d":{h:.9},"poly:young-pine-0d7695":{h:2.5},"poly:roadside-farm-stand-e218ca":{h:2.05}},oa={pumpkin:"poly:pumpkin-crop-7de137",bun:"poly:roadside-farm-stand-e218ca",tea:"poly:bistro-table-877a6d",mooncake:"poly:layer-cake-45d142",starfruit:"glb:good_star_trophy"},Qa={pumpkin:"poly:pumpkin-5f977e",bun:"poly:croissant-758d69",tea:"poly:coffee-cup-90be67",mooncake:"poly:layer-cake-45d142"},Cd={carrot:"🥕",cabbage:"🥬",pumpkin:"🎃",fish:"🐟",smoked:"🍢",apple:"🍎",juice:"🧃",pie:"🥧",milk:"🥛",cheese:"🧀",honey:"🍯",candle:"🕯️",wheat:"🌾",flour:"🥣",bread:"🍞",coffee:"☕",cup:"☕",bun:"🥐",berry:"🫐",jam:"🍓",snow:"❄️",ice:"🍦",sorbet:"🍧",coconut:"🥥",cocktail:"🍹",cotton:"🍭",ticket:"🎟️",starfruit:"⭐",mooncake:"🍰",tea:"🍵"},Hl=["glb:raccoon_hero","glb:customer_bunny","glb:customer_fox","glb:customer_bear","glb:helper_beaver","glb:helper_squirrel","glb:helper_otter","glb:station_carrot_bed","glb:stall","glb:till","glb:coin","glb:good_carrot","glb:good_cabbage","poly:palm-tree-a307da","poly:pier-deck-section-7047d7","poly:treasure-chest-c2ac4f","poly:wooden-fence-section-d72055","poly:curbside-mailbox-0e0736"],Xt=n=>[{asset:"poly:pier-deck-section-7047d7",x:0,z:8.15,rot:Math.PI/2,y:.02},{asset:"poly:pier-deck-section-7047d7",x:0,z:10.35,rot:Math.PI/2,y:.02},{asset:"poly:pier-deck-section-7047d7",x:0,z:12.55,rot:Math.PI/2,y:.02},{asset:"poly:pier-deck-corner-c56248",x:0,z:14.55,rot:0,y:.02},{asset:"poly:pier-rope-railing-616f5d",x:-1.35,z:10.2,rot:Math.PI/2,y:.05},{asset:"poly:pier-rope-railing-616f5d",x:1.35,z:10.2,rot:Math.PI/2,y:.05},{asset:"poly:mooring-post-2b83a4",x:-1.7,z:8.4,y:0},{asset:"poly:mooring-post-2b83a4",x:1.7,z:13.2,y:0},{asset:"poly:dock-lantern-post-5e58a4",x:-2.15,z:7.55,y:0},{asset:"poly:dock-lantern-post-5e58a4",x:2.15,z:7.55,rot:Math.PI,y:0},{asset:"poly:curbside-mailbox-0e0736",x:.9,z:8.6,rot:-.4,y:0},{asset:"poly:treasure-chest-c2ac4f",x:-1.15,z:9.2,rot:.4,y:.02},{asset:"poly:rowboat-c42d85",x:2.55,z:12.4,rot:.6,y:-.05,bob:!0},{asset:"poly:sailboat-3ee283",x:8.4,z:6.5,rot:-.5,y:-.35,bob:!0},{asset:"poly:wooden-fence-section-d72055",x:-2.4,z:-7.35,rot:.05},{asset:"poly:wooden-fence-section-d72055",x:.1,z:-7.45},{asset:"poly:wooden-fence-section-d72055",x:2.6,z:-7.3,rot:-.08},{asset:"poly:barrel-8d63c4",x:4.4,z:6.6,rot:.2},{asset:"poly:wooden-crate-e46521",x:-4.6,z:6.4,rot:.4},{asset:n,x:-7.3,z:-1.6,rot:.2},{asset:n,x:7.1,z:-2.8,rot:1.1},{asset:n,x:-6.4,z:3.4,rot:-.4}],Vl={1:[...Xt("poly:palm-tree-a307da"),{asset:"glb:flower_patch",x:5.4,z:-4.2},{asset:"glb:bush",x:-5.6,z:-4.6},{asset:"poly:market-stall-94937d",x:6.2,z:1.2,rot:-.6}],2:[...Xt("poly:palm-tree-a307da"),{asset:"poly:drying-net-rack-93ec3b",x:-6.2,z:2.2,rot:.4},{asset:"poly:dive-marker-buoy-21beb7",x:6.6,z:4.2,y:-.2,bob:!0},{asset:"poly:barrel-8d63c4",x:-5.2,z:-3.4},{asset:"glb:prop_buoy",x:-7.4,z:5.2,y:-.15,bob:!0}],3:[...Xt("poly:apple-tree-ef0ba0"),{asset:"poly:apple-tree-ef0ba0",x:-6.6,z:-3.2,rot:.5},{asset:"poly:apple-tree-ef0ba0",x:5.8,z:2.4,rot:1},{asset:"glb:prop_apple_cart",x:6.3,z:-1.2,rot:-.5},{asset:"poly:wooden-crate-e46521",x:4.8,z:-4.4}],4:[...Xt("poly:tall-pine-tree-ab4108"),{asset:"poly:red-barn-d41683",x:-6.5,z:-3.6,rot:.5},{asset:"poly:hay-bale-079e8c",x:5.6,z:-4.2,rot:.3},{asset:"poly:hay-bale-079e8c",x:6.5,z:-3.2,rot:1},{asset:"poly:milk-churn-895735",x:4.2,z:-5.2},{asset:"glb:animal_cow",x:-5.2,z:1.6,rot:.8}],5:[...Xt("poly:tall-pine-tree-ab4108"),{asset:"poly:beehive-2e70bf",x:-6.2,z:1.4,rot:.2},{asset:"poly:beehive-2e70bf",x:5.8,z:-3.6,rot:1},{asset:"glb:prop_sunflower",x:-5.4,z:-4.2},{asset:"glb:prop_sunflower",x:4.6,z:-5.4},{asset:"glb:flower_patch",x:6.2,z:1.5}],6:[...Xt("poly:young-pine-0d7695"),{asset:"poly:wheat-crop-7e08e6",x:-6.4,z:-2.2},{asset:"poly:wheat-crop-7e08e6",x:-6.2,z:1.2},{asset:"poly:bread-loaf-0e0ab5",x:5.4,z:-4.6},{asset:"glb:barrel",x:6.2,z:-3.2}],7:[...Xt("poly:palm-tree-a307da"),{asset:"poly:bistro-table-877a6d",x:2.2,z:2.4,rot:.2},{asset:"poly:bistro-chair-7c354d",x:3.15,z:2.2,rot:-1.2},{asset:"poly:bistro-table-877a6d",x:2.2,z:-1.2},{asset:"poly:bistro-chair-7c354d",x:1.25,z:-1.35,rot:1.4},{asset:"poly:bistro-table-877a6d",x:2.2,z:-4.5},{asset:"poly:coffee-cup-90be67",x:2.2,z:2.4,y:.78}],8:[...Xt("poly:young-pine-0d7695"),{asset:"poly:berry-bush-ee4812",x:-6.4,z:-2.4},{asset:"poly:berry-bush-ee4812",x:6.1,z:-3.8,rot:1},{asset:"poly:berry-bush-ee4812",x:-5.2,z:3.2,rot:.4},{asset:"glb:prop_cattails",x:5.4,z:3.6},{asset:"glb:prop_lily_pad",x:-7.2,z:5.5,y:-.28,bob:!0}],9:[...Xt("poly:snow-laden-spruce-36716e"),{asset:"poly:snow-laden-spruce-36716e",x:6.4,z:-3.4},{asset:"poly:young-pine-0d7695",x:-6.6,z:2.2},{asset:"poly:deep-powder-tile-1fcec9",x:4.8,z:2.4},{asset:"poly:deep-powder-tile-1fcec9",x:-4.4,z:-5.2},{asset:"glb:prop_igloo",x:-6.2,z:-3.6,rot:.6},{asset:"glb:prop_ice_floe",x:7.6,z:5.4,y:-.3,bob:!0}],10:[...Xt("poly:palm-tree-a307da"),{asset:"poly:brain-coral-head-7db21a",x:-6.8,z:3.6,y:-.05},{asset:"poly:table-coral-193fa6",x:6.6,z:3.2,y:-.1},{asset:"poly:staghorn-coral-422d23",x:-5.4,z:-5.2},{asset:"poly:sea-fan-bafd49",x:5.2,z:-5.4,rot:.8},{asset:"poly:beach-parasol-fd4530",x:4.6,z:-1.4,rot:.3},{asset:"poly:dive-marker-buoy-21beb7",x:8.2,z:2.2,y:-.25,bob:!0}],11:[...Xt("poly:palm-tree-a307da"),{asset:"glb:prop_fair_tent",x:-6.2,z:-3.2,rot:.4},{asset:"glb:prop_balloon_bundle",x:6.2,z:-1.2},{asset:"glb:prop_balloon_bundle",x:-4.8,z:3.4},{asset:"poly:market-stall-94937d",x:6.4,z:2.6,rot:-.8}],12:[...Xt("poly:palm-tree-a307da"),{asset:"glb:lighthouse",x:-6.4,z:-4.2,rot:.4},{asset:"glb:prop_star_statue",x:6.1,z:-3.6,rot:-.4},{asset:"glb:prop_firework_crate",x:5.2,z:3.2},{asset:"poly:lean-to-shelter-f0709f",x:-5.6,z:2.8,rot:.8},{asset:"glb:station_grand_fair",x:.2,z:-5.6,rot:Math.PI}]},Rd={1:"leaves",2:"spark",3:"petals",4:"dust",5:"bees",6:"flour",7:"steam",8:"fireflies",9:"snow",10:"bubbles",11:"confetti",12:"stars"},Id=[["Wooden Fence Section","wooden-fence-section-d72055","cozy-farm"],["Curbside Mailbox","curbside-mailbox-0e0736","neighborhood-pathways"],["Pumpkin","pumpkin-5f977e","ultra"],["Pumpkin Crop","pumpkin-crop-7de137","cozy-farm"],["Croissant","croissant-758d69","ultra"],["Coffee Cup","coffee-cup-90be67","ultra"],["Layer Cake","layer-cake-45d142","ultra"],["Pier Deck Section","pier-deck-section-7047d7","pirate-cove"],["Pier Deck Corner","pier-deck-corner-c56248","pirate-cove"],["Pier Rope Railing","pier-rope-railing-616f5d","pirate-cove"],["Mooring Post","mooring-post-2b83a4","pirate-cove"],["Rowboat","rowboat-c42d85","pirate-cove"],["Sailboat","sailboat-3ee283","ultra"],["Dock Lantern Post","dock-lantern-post-5e58a4","pirate-cove"],["Drying Net Rack","drying-net-rack-93ec3b","pirate-cove"],["Treasure Chest","treasure-chest-c2ac4f","pirate-cove"],["Market Stall","market-stall-94937d","medieval-village"],["Wooden Crate","wooden-crate-e46521","cozy-farm"],["Barrel","barrel-8d63c4","pirate-cove"],["Apple Tree","apple-tree-ef0ba0","cozy-farm"],["Wheat Crop","wheat-crop-7e08e6","cozy-farm"],["Beehive","beehive-2e70bf","cozy-farm"],["Milk Churn","milk-churn-895735","cozy-farm"],["Red Barn","red-barn-d41683","cozy-farm"],["Hay Bale","hay-bale-079e8c","cozy-farm"],["Berry Bush","berry-bush-ee4812","cozy-farm"],["Tall Pine Tree","tall-pine-tree-ab4108","nature-forest"],["Lean-To Shelter","lean-to-shelter-f0709f","nature-forest"],["Snow-Laden Spruce","snow-laden-spruce-36716e","alpine-and-snow"],["Deep Powder Tile","deep-powder-tile-1fcec9","alpine-and-snow"],["Brain Coral Head","brain-coral-head-7db21a","coral-reef"],["Table Coral","table-coral-193fa6","coral-reef"],["Staghorn Coral","staghorn-coral-422d23","coral-reef"],["Sea Fan","sea-fan-bafd49","coral-reef"],["Palm Tree","palm-tree-a307da","pirate-cove"],["Beach Parasol","beach-parasol-fd4530","pirate-cove"],["Dive Marker Buoy","dive-marker-buoy-21beb7","pirate-cove"],["Bread Loaf","bread-loaf-0e0ab5","ultra"],["Bistro Table","bistro-table-877a6d","cafe"],["Bistro Chair","bistro-chair-7c354d","cafe"],["Young Pine","young-pine-0d7695","nature-forest"],["Roadside Farm Stand","roadside-farm-stand-e218ca","cozy-farm"]],Pd={compressToUTF16:Bl.compressToUTF16,decompressFromUTF16:Bl.decompressFromUTF16};let qh=null;function Ld(n){qh=n}function Gl(n){return{carrot:"🥕",cabbage:"🥬",pumpkin:"🎃",fish:"🐟",smoked:"🍢",apple:"🍎",juice:"🧃",pie:"🥧",milk:"🥛",cheese:"🧀",honey:"🍯",candle:"🕯️",wheat:"🌾",flour:"🥣",bread:"🍞",coffee:"☕",cup:"☕",bun:"🥐",berry:"🫐",jam:"🍓",snow:"❄️",ice:"🍦",sorbet:"🍧",coconut:"🥥",cocktail:"🍹",cotton:"🍭",ticket:"🎟️",starfruit:"⭐",mooncake:"🍰",tea:"🍵"}[n]||"✨"}function kd(n){const e=n==="ru"?"Низкополигональные пропы Polyfork (polyfork.dev) — лицензия CC BY 4.0 или Polyfork без обязательной атрибуции. Коммерческое использование разрешено; файлы не перепродаются как набор ассетов. Персонажи, касса и грядки нарисованы для Енотовой Гавани.":"Low-poly props from Polyfork (polyfork.dev) are CC BY 4.0 or Polyfork no-attribution. Commercial use is allowed; the files are not resold as an asset pack. Characters, the till and the beds were made for Raccoon Harbor.",t=n==="ru"?"Авторы моделей":"Model credits",i=Id.map(([s,r])=>`<li>${s} <span class="muted">${r}</span></li>`).join("");return`<h3>${t}</h3><p class="body">${e}</p><ul class="credits">${i}</ul>`}var ee={P0:2,priceIsland:1.9,priceStation:.35,t0:2.5,tDecay:.93,tCapLevel:25,stackBase:4,stackPerLevel:2,stackMax:20,B0:50,buildIsland:2.1,buildStation:1.6,upgradeFactor:.25,upgradeGrowth:1.17,maxLevel:25,idleFactor:.6,offlineFactor:.5,hireBase:120,hireIsland:2.1,hireIndex:2.4,lambdaBase:.4,lambdaPerStall:.08,lambdaPerDecor:.05,lighthouseBase:25,lighthouseGrowth:1.25,helperLevelBase:10,helperLevelGrowth:1.5,boatFactor:3,decorBase:40,decorGrowth:1.45,tutorialLambda:2,tutorialWindow:150,pickupInterval:.16,dropInterval:.14,serviceBase:.58,magnetRadius:4.2,magnetDelay:.32,zoneRadius:1.48,queueCap:16,stallMaxBase:8,stockMaxBase:8,chestPeriod:480,chestIncomeSeconds:180,turboSeconds:300,turboShellCost:20,internSeconds:600,freeInternPeriod:7200,happyHours:[12,19],passOverflowXp:500,starTokensToUnlock:20,eventTicketToShells:10,collectionBonus:.04,prestigeBonus:.5,festivalIncome:1.25,helperIncomeLevel:.08,carrierInterval:.72,attractionPeriod:3.2,deliveryBatch:8,deliverySeconds:22,deliveryBonus:1.8,timerIsland:7,vipDuration:180,vipReward:8,offlineCapSteps:[2,2,2,3,3,4,4,6,6,8,8],saveEvery:15,simHz:10},Dd=["poki","crazy"],Xh=class{constructor(){F(this,"buffer",[])}track(n,e={}){let t={event:n,params:e,t:Date.now()};this.buffer.push(t),this.buffer.length>200&&this.buffer.shift()}},Nd=class{constructor(){F(this,"ctx",null);F(this,"master",null);F(this,"musicGain",null);F(this,"sfxGain",null);F(this,"nextNote",0);F(this,"step",0);F(this,"muted",!1);F(this,"musicOn",!0);F(this,"sfxOn",!0)}unlock(){let n=this.ensure();n.state==="suspended"&&n.resume()}ensure(){if(this.ctx)return this.ctx;let n=new AudioContext;return this.ctx=n,this.master=n.createGain(),this.master.gain.value=.9,this.master.connect(n.destination),this.musicGain=n.createGain(),this.musicGain.gain.value=.07,this.musicGain.connect(this.master),this.sfxGain=n.createGain(),this.sfxGain.gain.value=.22,this.sfxGain.connect(this.master),this.nextNote=n.currentTime+.1,n}setMusic(n){this.musicOn=n,this.musicGain&&(this.musicGain.gain.value=n?.07:0)}setSfx(n){this.sfxOn=n,this.sfxGain&&(this.sfxGain.gain.value=n?.22:0)}suspendForAd(n){this.muted=n,this.master&&(this.master.gain.value=n?0:.9)}tick(){wd(this)}pluck(n,e,t,i){if(!this.ctx||!this.musicGain)return;let s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type=i,s.frequency.setValueAtTime(e,n),r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(.6,n+.02),r.gain.exponentialRampToValueAtTime(1e-4,n+t),s.connect(r),r.connect(this.musicGain),s.start(n),s.stop(n+t+.02)}tone(n,e,t,i=.4,s=0){if(!this.sfxOn||this.muted)return;let r=this.ensure();if(!this.sfxGain)return;let a=r.currentTime,o=r.createOscillator(),l=r.createGain();o.type=t,o.frequency.setValueAtTime(n,a),s&&o.frequency.exponentialRampToValueAtTime(Math.max(40,n+s),a+e),l.gain.setValueAtTime(i,a),l.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l),l.connect(this.sfxGain),o.start(a),o.stop(a+e+.02)}pop(n=1){this.tone(320+Math.min(12,n)*40,.08,"square",.18,80)}drop(){this.tone(220,.07,"triangle",.16,-40)}coin(){this.tone(880,.09,"sine",.2,200)}ding(){this.tone(1320,.12,"triangle",.22)}build(){this.tone(180,.18,"sawtooth",.16,220),this.tone(520,.2,"square",.08)}fanfare(){this.tone(523,.12,"triangle",.2),setTimeout(()=>this.tone(659,.12,"triangle",.2),90),setTimeout(()=>this.tone(784,.2,"triangle",.22),180)}click(){this.tone(640,.04,"square",.1)}error(){this.tone(140,.14,"sawtooth",.12,-40)}chest(){this.tone(400,.1,"triangle",.2,300)}splash(){this.tone(190,.16,"sine",.16,-120),this.tone(520,.09,"triangle",.1,80)}},Wl={ru:{"boot.title":"Енотова Гавань","boot.sub":"Пристань просыпается…","boot.needwebgl":"Нужен WebGL, чтобы открыть гавань.","hud.coins":"Монеты","hud.shells":"Ракушки","hud.stars":"Звёзды","nav.map":"Карта","nav.crew":"Команда","nav.island":"Остров","nav.light":"Маяк","nav.pass":"Пропуск","goal.move":"Тяни, чтобы идти","goal.pickup":"Собери {item}","goal.drop":"Выложи {item}","goal.till":"Пробей на кассе","goal.build":"Построй {name} — {cost} 🪙","goal.upgrade":"Улучши {name} до {level} — {cost} 🪙","goal.hire":"Найми помощника — {cost} 🪙","goal.chest":"Открой сундук на пристани","goal.turbo":"Турбо удвоит выручку","goal.quests":"Задания уже ждут","goal.sail":"Отплыви дальше — {cost} 🪙","goal.play":"Обслужи гостей","goal.decor":"Поставь украшение — {cost} 🪙","kind.producer":"грядка","kind.processor":"станок","kind.stall":"прилавок","kind.till":"Касса","kind.house":"Дом помощников","kind.decor":"Украшение","kind.hire":"Найм","kind.backpack":"Рюкзак","kind.delivery":"Доставка","kind.attraction":"Карусель","sheet.map":"Архипелаг","sheet.crew":"Помощники","sheet.island":"Остров","sheet.light":"Маяк","sheet.pass":"Гаванский пропуск","sheet.quests":"Задания","sheet.calendar":"Календарь","sheet.event":"Событие","sheet.ach":"Достижения","sheet.cards":"Коллекции","sheet.pause":"Пауза","sheet.profile":"Профиль","sheet.offline":"Пока тебя не было","sheet.mail":"Почтовый ящик","sheet.wheel":"Колесо удачи","sheet.chest":"Сундук","sheet.expedition":"Экспедиции","sheet.policy":"О игре","sheet.fish":"Рыбалка","sheet.vip":"Заказ VIP","sheet.league":"Лига гаваней",back:"Назад",close:"Закрыть",claim:"Забрать","claim.x2":"Забрать ×2","no.ads":"Без рекламы",later:"Позже",sail:"Отплыть",locked:"Закрыто","not.enough":"Пока не хватает","ad.fail":"Реклама недоступна, попробуй позже","ad.mock":"Тестовая реклама","ad.mock.sub":"На площадке здесь будет ролик",turbo:"Турбо ×2","turbo.shells":"Турбо за 20 🐚","turbo.ticket":"Турбо-талон",intern:"Стажёр","intern.free":"Бесплатный стажёр","intern.wait":"Стажёр через {time}",mail:"Почта",quests:"Задания",calendar:"Календарь",event:"Событие",pause:"Пауза",resume:"Дальше играть",settings:"Настройки",sound:"Звуки",music:"Музыка",language:"Язык",quality:"Графика","quality.auto":"Авто","quality.low":"Низкая","quality.medium":"Средняя","quality.high":"Высокая",daily:"Сегодня",weekly:"Неделя",mayor:"Заказы мэра","bonus.chest":"Сундук за все три",reroll:"Другое задание","reroll.shells":"Обновить за 10 🐚",ready:"Готово","stars.1":"Все станции открыты","stars.2":"Все станции 10 уровня","stars.3":"Заказ мэра выполнен",prestige:"Фестиваль острова","prestige.do":"Начать фестиваль","prestige.warn":"Уровни станций станут 1. Доход острова навсегда ×{mult}.","pass.star":"Звёздная дорожка","pass.rocket":"Ракета прогресса","pass.need":"Ещё {n} жетонов","pass.overflow":"Сундук за 500 XP","wheel.free":"Бесплатное вращение","wheel.ad":"Ещё вращение","chest.open":"Открыть","chest.key":"Открыть ключом","chest.ad":"Открыть и забрать награду","offline.total":"Накопилось за {time}",welcome:"С возвращением! +30 🐚 и турбо.","expedition.go":"Отправить","expedition.claim":"Забрать груз","expedition.skip":"Ускорить на час","fish.cast":"Подсечь!","fish.result":"Улов: {score}","policy.body":"Енотова Гавань — одиночная игра. Сохранение лежит на устройстве и, если площадка умеет, в её облаке. Реклама опциональна: награда только после просмотра, рядом всегда есть путь без ролика. Мы не просим личных данных.","role.cashier":"Кассир","role.carrier":"Носильщик","role.farmer":"Фермер","role.general":"Помощник","rarity.common":"Обычный","rarity.rare":"Редкий","rarity.epic":"Эпический","rarity.legendary":"Легендарный",assign:"Назначить",unassign:"Снять",levelup:"Прокачать",level:"Ур. {n}",slots:"Места: {used}/{max}",buy:"Купить",equip:"Надеть",equipped:"Надето","node.buy":"Открыть узел","hour.happy":"Счастливый час ×2","event.soon":"Следующий фестиваль через {time}","event.live":"Идёт ещё {time}",join:"Участвую",tickets:"Билеты",rank:"Место {n}",you:"Ты","card.play":"Открытка: {island}","card.sell":"Товар: {island}","card.guest":"Редкий гость: {island}","card.expedition":"Вид с моря: {island}","card.chest":"Клад: {island}","card.mayor":"Печать мэра: {island}","set.bonus":"Набор готов: +4% к доходу навсегда","quest.sell":"Продай {n} товаров","quest.sell_item":"Продай {item} ×{n}","quest.serve":"Обслужи {n} гостей","quest.upgrade":"Улучши станции {n} раз","quest.offline":"Собери офлайн-доход","quest.minigame":"Сыграй в мини-игру","quest.chest":"Открой сундуки ×{n}","quest.hire":"Найми или прокачай помощника","quest.earn":"Заработай {n} монет","quest.vip":"Выполни заказ VIP","quest.playtime":"Побудь на острове {n} мин","quest.build":"Построй станцию","quest.decor":"Поставь украшения ×{n}","quest.daily":"Выполни {n} ежедневных заданий","quest.expedition":"Отправь {n} экспедиций","quest.card":"Собери {n} открыток","chip.upgrade":"Ур. {level} · {cost}","chip.build":"{cost} 🪙","mayor.sell":"Продай {n} товаров","mayor.sell_item":"Продай {item} ×{n}","mayor.serve":"Обслужи {n} гостей","mayor.build":"Построй новую станцию","mayor.hire":"Найми помощника","mayor.upgrade":"Улучши станции {n} раз","mayor.decor":"Поставь {n} украшения","mayor.earn":"Заработай {n} монет","sail.confirm":"Потратить {cost} монет и открыть «{name}»?","sail.needstar":"Сначала звезда этого острова","timer.skip":"Пропустить стройку","timer.shells":"Ускорить за {n} 🐚","timer.left":"Строится ещё {time}","vip.need":"Принеси {item} ×{n}","vip.double":"Удвоить награду","ach.unlocked":"{name}","star.toast":"Звезда острова ×{n}!","empty.mail":"Пока пусто — острова копят, когда на них есть команда.","empty.exp":"Выбери помощника и срок: 1, 4 или 8 часов.","fish.hint":"Жми, когда рыба в зелёной зоне","legend.fish":"Легендарная рыба!","pass.level":"Уровень {n}/30","free.track":"Бесплатная","star.track":"Звёздная",cosmetic:"Косметика",album:"Месячный альбом",day:"День {n}",claimed:"Получено",today:"Сегодня","profile.play":"В игре","profile.sales":"Продажи","profile.islands":"Острова",rename:"Имя","league.hint":"Недельный счёт — монеты всех островов. Соседи посчитаны на этом устройстве.","build.all":"Станции","crew.none":"Карточка ещё не найдена. Сундуки и задания приносят новых.","need.slot":"Нет свободного места. Построй дом помощников.",max:"Максимум",on:"Вкл",off:"Выкл","loading.travel":"Плывём на {name}…","first.star":"Первая звезда! Лодка ждёт.","to.boat":"К лодке","got.it":"Понятно",key:"Ключ",keys:"Ключи",shells:"Ракушки","coins.word":"монеты","helper.new":"Новый помощник: {name}","card.new":"Новая открытка",lucky:"Джекпот!","reward.ok":"Награда у тебя","event.tickets":"{n} 🎟",cap:"Рюкзак {n}",prod:"Запас {n}",queue:"Очередь {n}",fps:"{n} FPS","stat.playtime":"Время","stat.sales":"Продажи","stat.shells":"Ракушки","stat.days":"Дней входа","offline.line":"{name}: {coins} 🪙","no.crew.idle":"Без помощников остров спит","prestige.lock":"Фестиваль открывается с 6-го острова","vip.lock":"VIP-гости появятся на кофейных холмах","exp.busy":"Этот помощник уже в пути","exp.hours":"{n} ч",spin:"Крутить",again:"Ещё раз",perfect:"Точно!",good:"Хорошо",miss:"Мимо",casts:"Броски: {n}","extra.cast":"Ещё бросок",tier:"Награда {n}",contribute:"Твой вклад","race.board":"Гонка недели","claim.rank":"Забрать награду за место",place:"{n}-е место",owned:"Уже есть",cost:"{n} 🐚","income.offline":"Офлайн",mult:"Множитель ×{n}","tutorial.hand":"Тяни, чтобы идти"},en:{"boot.title":"Raccoon Harbor","boot.sub":"The pier is waking up…","boot.needwebgl":"WebGL is needed to open the harbor.","hud.coins":"Coins","hud.shells":"Shells","hud.stars":"Stars","nav.map":"Map","nav.crew":"Crew","nav.island":"Island","nav.light":"Beacon","nav.pass":"Pass","goal.move":"Drag to walk","goal.pickup":"Pick up {item}","goal.drop":"Stock the stall","goal.till":"Ring the till","goal.build":"Build {name} — {cost} 🪙","goal.upgrade":"Upgrade {name} to {level} — {cost} 🪙","goal.hire":"Hire a helper — {cost} 🪙","goal.chest":"Open the dock chest","goal.turbo":"Turbo doubles sales","goal.quests":"Quests are waiting","goal.sail":"Sail onward — {cost} 🪙","goal.play":"Serve the guests","goal.decor":"Place a decoration — {cost} 🪙","kind.producer":"bed","kind.processor":"machine","kind.stall":"stall","kind.till":"Till","kind.house":"Helper house","kind.decor":"Decoration","kind.hire":"Hiring","kind.backpack":"Backpack","kind.delivery":"Delivery","kind.attraction":"Carousel","sheet.map":"Archipelago","sheet.crew":"Helpers","sheet.island":"Island","sheet.light":"Lighthouse","sheet.pass":"Harbor pass","sheet.quests":"Quests","sheet.calendar":"Calendar","sheet.event":"Event","sheet.ach":"Achievements","sheet.cards":"Collections","sheet.pause":"Pause","sheet.profile":"Profile","sheet.offline":"While you were away","sheet.mail":"Mailbox","sheet.wheel":"Lucky wheel","sheet.chest":"Chest","sheet.expedition":"Expeditions","sheet.policy":"About","sheet.fish":"Fishing","sheet.vip":"VIP order","sheet.league":"Harbor league",back:"Back",close:"Close",claim:"Collect","claim.x2":"Collect ×2","no.ads":"No ad",later:"Later",sail:"Set sail",locked:"Locked","not.enough":"Not enough yet","ad.fail":"Ad unavailable, try again later","ad.mock":"Test ad","ad.mock.sub":"A real video plays on the portal",turbo:"Turbo ×2","turbo.shells":"Turbo for 20 🐚","turbo.ticket":"Turbo ticket",intern:"Intern","intern.free":"Free intern","intern.wait":"Intern in {time}",mail:"Mail",quests:"Quests",calendar:"Calendar",event:"Event",pause:"Pause",resume:"Keep playing",settings:"Settings",sound:"Sound",music:"Music",language:"Language",quality:"Graphics","quality.auto":"Auto","quality.low":"Low","quality.medium":"Medium","quality.high":"High",daily:"Today",weekly:"Week",mayor:"Mayor's orders","bonus.chest":"Chest for all three",reroll:"Another quest","reroll.shells":"Reroll for 10 🐚",ready:"Ready","stars.1":"Every station is open","stars.2":"Every station is level 10","stars.3":"The mayor's order is done",prestige:"Island festival","prestige.do":"Start the festival","prestige.warn":"Station levels return to 1. This island's income stays ×{mult}.","pass.star":"Star track","pass.rocket":"Progress rocket","pass.need":"{n} more tokens","pass.overflow":"Chest per 500 XP","wheel.free":"Free spin","wheel.ad":"Another spin","chest.open":"Open","chest.key":"Open with a key","chest.ad":"Open and take the reward","offline.total":"Saved over {time}",welcome:"Welcome back! +30 🐚 and a turbo.","expedition.go":"Send","expedition.claim":"Collect cargo","expedition.skip":"Skip one hour","fish.cast":"Hook!","fish.result":"Catch: {score}","policy.body":"Raccoon Harbor is a single-player game. Saves live on this device and, when the portal supports it, in that portal's cloud. Ads are optional: a reward is granted only after a completed view, and a no-ad path is always beside it. We don't ask for personal data.","role.cashier":"Cashier","role.carrier":"Carrier","role.farmer":"Farmer","role.general":"Helper","rarity.common":"Common","rarity.rare":"Rare","rarity.epic":"Epic","rarity.legendary":"Legendary",assign:"Assign",unassign:"Remove",levelup:"Level up",level:"Lv. {n}",slots:"Slots: {used}/{max}",buy:"Buy",equip:"Equip",equipped:"Equipped","node.buy":"Unlock node","hour.happy":"Happy hour ×2","event.soon":"Next festival in {time}","event.live":"{time} left",join:"I'm in",tickets:"Tickets",rank:"Rank {n}",you:"You","card.play":"Postcard: {island}","card.sell":"Goods: {island}","card.guest":"Rare guest: {island}","card.expedition":"Sea view: {island}","card.chest":"Treasure: {island}","card.mayor":"Mayor's seal: {island}","set.bonus":"Set complete: +4% income forever","quest.sell":"Sell {n} items","quest.sell_item":"Sell {item} ×{n}","quest.serve":"Serve {n} guests","quest.upgrade":"Upgrade stations {n} times","quest.offline":"Collect offline income","quest.minigame":"Play the minigame","quest.chest":"Open chests ×{n}","quest.hire":"Hire or level a helper","quest.earn":"Earn {n} coins","quest.vip":"Finish a VIP order","quest.playtime":"Stay on the island {n} min","quest.build":"Build a station","quest.decor":"Place decorations ×{n}","quest.daily":"Finish {n} daily quests","quest.expedition":"Send {n} expeditions","quest.card":"Collect {n} postcards","chip.upgrade":"Lv. {level} · {cost}","chip.build":"{cost} 🪙","mayor.sell":"Sell {n} items","mayor.sell_item":"Sell {item} ×{n}","mayor.serve":"Serve {n} guests","mayor.build":"Build a new station","mayor.hire":"Hire a helper","mayor.upgrade":"Upgrade stations {n} times","mayor.decor":"Place {n} decorations","mayor.earn":"Earn {n} coins","sail.confirm":"Spend {cost} coins and open “{name}”?","sail.needstar":"This island needs a star first","timer.skip":"Skip construction","timer.shells":"Speed up for {n} 🐚","timer.left":"Building for {time}","vip.need":"Bring {item} ×{n}","vip.double":"Double the reward","ach.unlocked":"{name}","star.toast":"Island star ×{n}!","empty.mail":"Nothing yet — islands save up once a crew is hired.","empty.exp":"Pick a helper and a length: 1, 4 or 8 hours.","fish.hint":"Tap when the fish is in the green","legend.fish":"A legendary fish!","pass.level":"Level {n}/30","free.track":"Free","star.track":"Star",cosmetic:"Cosmetics",album:"Month album",day:"Day {n}",claimed:"Claimed",today:"Today","profile.play":"Played","profile.sales":"Sales","profile.islands":"Islands",rename:"Name","league.hint":"Weekly score is coins from every island. Neighbors are simulated on this device.","build.all":"Stations","crew.none":"No card yet. Chests and quests bring new helpers.","need.slot":"No free slot. Build the helper house.",max:"Max",on:"On",off:"Off","loading.travel":"Sailing to {name}…","first.star":"First star! The boat is waiting.","to.boat":"To the boat","got.it":"Got it",key:"Key",keys:"Keys",shells:"Shells","coins.word":"coins","helper.new":"New helper: {name}","card.new":"New postcard",lucky:"Jackpot!","reward.ok":"Reward collected","event.tickets":"{n} 🎟",cap:"Pack {n}",prod:"Stock {n}",queue:"Queue {n}",fps:"{n} FPS","stat.playtime":"Time","stat.sales":"Sales","stat.shells":"Shells","stat.days":"Login days","offline.line":"{name}: {coins} 🪙","no.crew.idle":"Without a crew the island sleeps","prestige.lock":"Festivals open from island 6","vip.lock":"VIP guests arrive on the coffee hills","exp.busy":"This helper is already away","exp.hours":"{n} h",spin:"Spin",again:"Again",perfect:"Perfect!",good:"Good",miss:"Miss",casts:"Casts: {n}","extra.cast":"Extra cast",tier:"Reward {n}",contribute:"Your share","race.board":"Race of the week","claim.rank":"Collect place reward",place:"Place {n}",owned:"Owned",cost:"{n} 🐚","income.offline":"Offline",mult:"Multiplier ×{n}","tutorial.hand":"Drag to walk"}};function L(n,e,t){let i=Wl[n][e]??Wl.ru[e]??e;if(t)for(let[s,r]of Object.entries(t))i=i.split(`{${s}}`).join(String(r));return i}function Pt(n,e){let t=Math.floor(Math.abs(n)),i=n<0?"-":"";if(t<1e4)return i+t.toLocaleString(e==="ru"?"ru-RU":"en-US");if(t<1e6){let r=t/1e3;return i+(r>=100?r.toFixed(0):r.toFixed(1).replace(/\.0$/,""))+(e==="ru"?" тыс.":"k")}let s=t/1e6;return i+s.toFixed(s>=10?0:1).replace(/\.0$/,"")+(e==="ru"?" млн":"M")}function Un(n,e){let t=Math.max(0,Math.floor(n)),i=Math.floor(t/3600),s=Math.floor(t%3600/60);if(i>48){let r=Math.floor(i/24);return e==="ru"?`${r} д`:`${r}d`}return i>0?`${i}${e==="ru"?" ч":"h"} ${s}${e==="ru"?" м":"m"}`:s>0?`${s}${e==="ru"?" м":"m"} ${t%60}${e==="ru"?" с":"s"}`:`${t}${e==="ru"?" с":"s"}`}var Ud=class{constructor(){F(this,"sx",0);F(this,"sy",0);F(this,"esc",!1);F(this,"zoom",0);F(this,"joy",{active:!1,x:0,y:0,px:0,py:0});F(this,"keys",new Set);F(this,"origin",null);F(this,"pointers",new Map);F(this,"pinchDist",0)}attach(n){n.addEventListener("pointerdown",e=>this.down(e)),window.addEventListener("pointermove",e=>this.move(e)),window.addEventListener("pointerup",e=>this.up(e)),window.addEventListener("pointercancel",e=>this.up(e)),window.addEventListener("keydown",e=>{Fd()||(this.keys.add(e.code),e.code==="Escape"&&(this.esc=!0),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),n.addEventListener("wheel",e=>{this.zoom+=Math.sign(e.deltaY)*.6},{passive:!0}),n.addEventListener("contextmenu",e=>e.preventDefault())}endFrame(){this.esc=!1,this.zoom=0}blocked(n){return n instanceof Element&&!!n.closest("[data-block]")}down(n){if(!this.blocked(n.target)){if(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),!this.origin)this.origin={x:n.clientX,y:n.clientY,id:n.pointerId},this.joy.active=!0,this.joy.px=n.clientX,this.joy.py=n.clientY,this.joy.x=0,this.joy.y=0;else if(this.pointers.size===2){let[e,t]=[...this.pointers.values()];this.pinchDist=Math.hypot(e.x-t.x,e.y-t.y)}}}move(n){if(!this.pointers.has(n.pointerId))return;if(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.pointers.size>=2&&this.pinchDist>0){let[r,a]=[...this.pointers.values()],o=Math.hypot(r.x-a.x,r.y-a.y);this.zoom+=(this.pinchDist-o)*.02,this.pinchDist=o;return}if(!this.origin||n.pointerId!==this.origin.id)return;let e=n.clientX-this.origin.x,t=n.clientY-this.origin.y,i=Math.hypot(e,t)||1,s=Math.min(64,i);this.joy.x=e/i*s,this.joy.y=t/i*s,this.sx=this.joy.x/64,this.sy=this.joy.y/64}up(n){this.pointers.delete(n.pointerId),this.origin&&n.pointerId===this.origin.id&&(this.origin=null,this.joy.active=!1,this.joy.x=0,this.joy.y=0,this.sx=0,this.sy=0),this.pointers.size<2&&(this.pinchDist=0)}axis(){let n=0,e=0;if((this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&--n,(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&--e,(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e+=1),n!==0||e!==0){let t=Math.hypot(n,e)||1;return{x:n/t,y:e/t}}return{x:this.sx,y:this.sy}}};function Fd(){let n=document.activeElement;return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement}var Od=new Set(["island_travel","event_end","pause_resume","offline_return"]);function Jo(n){return Dd.includes(n)}function Bd(n,e,t){if(!Od.has(t)||n.midgameThisPause&&n.rewardedThisPause||n.rewardedThisPause)return!1;if(Jo(n.platform))return!0;if(n.playtime<90||n.firstSession&&n.playtime<300||!n.firstSession&&n.playtime<180||n.lastMidgame>0&&e-n.lastMidgame<18e4||n.lastRewarded>0&&e-n.lastRewarded<24e4)return!1;let i=n.dayAge<2;return!(n.midgamesThisHour>=(i?4:8)||n.midgamesToday>=(i?12:25))}var zd={minigame_extra:3,reroll_quest:1,expedition_skip:3,wheel:3,pass_rocket:2,login_x2:1},Hd={turbo:3e5,intern:9e5};function $l(n,e,t){if(Jo(n.platform))return!0;let i=zd[t];if(i!==void 0&&(n.rewardedCounts[t]??0)>=i)return!1;let s=Hd[t];if(s!==void 0){let r=Number(n.rewardedCounts[`t:${t}`]??0);if(r&&e-r<s)return!1}return!0}function Vd(n,e){n.lastMidgame=e,n.midgamesToday+=1,e-n.hourStart>36e5&&(n.hourStart=e,n.midgamesThisHour=0),n.midgamesThisHour+=1,n.midgameThisPause=!0}function Gd(n,e,t){n.lastRewarded=e,n.rewardedCounts[t]=(n.rewardedCounts[t]??0)+1,n.rewardedCounts[`t:${t}`]=e,n.rewardedThisPause=!0}function Wd(n,e){return n==="yandex"?new Xd(e):n==="crazy"?new jd(e):n==="poki"?new Yd(e):n==="gamedistribution"?new Kd(e):n==="google"?new Jd(e):n==="telegram"?new Zd(e):new qd(e)}var $d=class{constructor(n,e,t){F(this,"provider");F(this,"save");F(this,"hooks");F(this,"memory");F(this,"busy",!1);this.provider=n,this.save=e,this.hooks=t;let i=(Date.now()-e.profile.createdAt)/864e5;this.memory={platform:n.id,sessionStart:Date.now(),playtime:0,firstSession:e.profile.sessions<=1,dayAge:i,lastMidgame:e.ads.lastMidgameAt,lastRewarded:e.ads.lastRewardedAt,midgamesToday:e.ads.midgamesToday,midgamesThisHour:e.ads.midgamesHour,hourStart:e.ads.hourStamp||Date.now(),rewardedCounts:{...e.ads.rewarded},rewardedThisPause:!1,midgameThisPause:!1}}get platform(){return this.provider.id}async init(){await this.provider.init()}gameplayStart(){this.provider.gameplayStart()}gameplayStop(){this.provider.gameplayStop()}loadingStart(){this.provider.loadingStart()}loadingStop(){this.provider.loadingStop()}tick(n){this.memory.playtime+=n}canOffer(n){return $l(this.memory,Date.now(),n)}async showRewarded(n){if(this.busy||!$l(this.memory,Date.now(),n))return!1;this.busy=!0,this.hooks.pause();let e=!1;try{e=await this.provider.showRewarded(n)}catch{e=!1}return this.hooks.resume(),this.busy=!1,e?(Gd(this.memory,Date.now(),n),this.persist()):!Jo(this.provider.id)&&this.provider.id!=="poki"&&this.hooks.toast("ad.fail"),e}async midgame(n){if(!this.busy&&Bd(this.memory,Date.now(),n)){this.busy=!0,this.hooks.pause();try{await this.provider.requestMidgame(n),Vd(this.memory,Date.now()),this.persist()}catch{}this.hooks.resume(),this.busy=!1}}beginPause(){this.memory.rewardedThisPause=!1,this.memory.midgameThisPause=!1}persist(){this.save.ads.lastMidgameAt=this.memory.lastMidgame,this.save.ads.lastRewardedAt=this.memory.lastRewarded,this.save.ads.midgamesToday=this.memory.midgamesToday,this.save.ads.midgamesHour=this.memory.midgamesThisHour,this.save.ads.hourStamp=this.memory.hourStart;let n={};for(let[e,t]of Object.entries(this.memory.rewardedCounts))e.startsWith("t:")||(n[e]=t);this.save.ads.rewarded=n}async serverNow(){try{if(this.provider.serverTime)return await this.provider.serverTime()}catch{}return Date.now()}},qd=class{constructor(n){F(this,"hooks");F(this,"id","web");this.hooks=n}async init(){}gameplayStart(){}gameplayStop(){}loadingStart(){}loadingStop(){}hasAdblock(){return!1}async requestMidgame(){await this.play(!1)}async showRewarded(){let n=new URLSearchParams(location.search).get("adfail")==="1";return await this.play(!0),!n}play(n){this.hooks.onOpen();let e=document.createElement("div");return e.className="mock-ad",e.innerHTML=`<div class="mock-card"><b>${n?"🎬":""} Тестовая реклама</b><p>На площадке здесь будет ролик</p><div class="mock-bar"></div></div>`,document.body.appendChild(e),new Promise(t=>{setTimeout(()=>{e.remove(),this.hooks.onClose(),t()},1600)})}},Xd=class{constructor(n){F(this,"hooks");F(this,"id","yandex");F(this,"ysdk",null);F(this,"cloudSave",{pull:async()=>{var n,e,t;return await((t=(e=await((n=this.ysdk)==null?void 0:n.getPlayer({signed:!1})))==null?void 0:e.getData)==null?void 0:t.call(e))??null},push:async n=>{var e,t,i;await((i=(t=await((e=this.ysdk)==null?void 0:e.getPlayer({signed:!1})))==null?void 0:t.setData)==null?void 0:i.call(t,n,!0))}});this.hooks=n}async init(){let n=window.YaGames;n&&(this.ysdk=await n.init())}gameplayStart(){}gameplayStop(){}loadingStart(){}loadingStop(){var n,e,t,i;(i=(t=(e=(n=this.ysdk)==null?void 0:n.features)==null?void 0:e.LoadingAPI)==null?void 0:t.ready)==null||i.call(t)}hasAdblock(){return!1}async serverTime(){var n,e;return((e=(n=this.ysdk)==null?void 0:n.serverTime)==null?void 0:e.call(n))??Date.now()}async requestMidgame(){this.ysdk&&await new Promise(n=>{this.ysdk.adv.showFullscreenAdv({callbacks:{onOpen:()=>this.hooks.onOpen(),onClose:()=>{this.hooks.onClose(),n()},onError:()=>{this.hooks.onClose(),n()}}})})}async showRewarded(){return this.ysdk?new Promise(n=>{let e=!1;this.ysdk.adv.showRewardedVideo({callbacks:{onOpen:()=>this.hooks.onOpen(),onRewarded:()=>{e=!0},onClose:()=>{this.hooks.onClose(),n(e)},onError:()=>{this.hooks.onClose(),n(!1)}}})}):!1}},jd=class{constructor(n){F(this,"hooks");F(this,"id","crazy");F(this,"cloudSave",{pull:async()=>{var e,t;let n=(t=(e=window.CrazyGames)==null?void 0:e.SDK.data)==null?void 0:t.get(zl);if(!n)return null;try{return JSON.parse(n)}catch{return null}},push:async n=>{var e,t;(t=(e=window.CrazyGames)==null?void 0:e.SDK.data)==null||t.set(zl,JSON.stringify(n))}});this.hooks=n}async init(){var n;await((n=window.CrazyGames)==null?void 0:n.SDK.init())}gameplayStart(){var n;(n=window.CrazyGames)==null||n.SDK.game.gameplayStart()}gameplayStop(){var n;(n=window.CrazyGames)==null||n.SDK.game.gameplayStop()}loadingStart(){var n;(n=window.CrazyGames)==null||n.SDK.game.loadingStart()}loadingStop(){var n;(n=window.CrazyGames)==null||n.SDK.game.loadingStop()}hasAdblock(){return!1}async requestMidgame(){await this.request("midgame")}async showRewarded(){var e;let n=(e=window.CrazyGames)==null?void 0:e.SDK;return n?new Promise(t=>{n.ad.requestAd("rewarded",{adStarted:()=>this.hooks.onOpen(),adFinished:()=>{this.hooks.onClose(),t(!0)},adError:()=>{this.hooks.onClose(),t(!1)}}),setTimeout(()=>{},1e3)}):!1}request(n){var t;let e=(t=window.CrazyGames)==null?void 0:t.SDK;return e?new Promise(i=>{e.ad.requestAd(n,{adStarted:()=>this.hooks.onOpen(),adFinished:()=>{this.hooks.onClose(),i()},adError:()=>{this.hooks.onClose(),i()}})}):Promise.resolve()}},Yd=class{constructor(n){F(this,"hooks");F(this,"id","poki");this.hooks=n}async init(){var n,e,t;(e=(n=window.PokiSDK)==null?void 0:n.setDebug)==null||e.call(n,!1),await((t=window.PokiSDK)==null?void 0:t.init())}gameplayStart(){var n;(n=window.PokiSDK)==null||n.gameplayStart()}gameplayStop(){var n;(n=window.PokiSDK)==null||n.gameplayStop()}loadingStart(){var n,e;(e=(n=window.PokiSDK)==null?void 0:n.gameLoadingStart)==null||e.call(n)}loadingStop(){var n,e;(e=(n=window.PokiSDK)==null?void 0:n.gameLoadingFinished)==null||e.call(n)}hasAdblock(){return!1}async requestMidgame(){var n;this.hooks.onOpen();try{await((n=window.PokiSDK)==null?void 0:n.commercialBreak())}catch{}this.hooks.onClose()}async showRewarded(){if(!window.PokiSDK)return!1;this.hooks.onOpen();let n=!1;try{n=await window.PokiSDK.rewardedBreak()}catch{n=!1}return this.hooks.onClose(),!!n}},Kd=class{constructor(n){F(this,"hooks");F(this,"id","gamedistribution");this.hooks=n}async init(){}gameplayStart(){}gameplayStop(){}loadingStart(){}loadingStop(){}hasAdblock(){return!1}async requestMidgame(){var n;if(window.gdsdk){this.hooks.onOpen();try{await window.gdsdk.showAd((n=window.gdsdk.AdType)==null?void 0:n.Interstitial)}catch{}this.hooks.onClose()}}async showRewarded(){var n;if(!window.gdsdk)return!1;this.hooks.onOpen();try{return await window.gdsdk.showAd((n=window.gdsdk.AdType)==null?void 0:n.Rewarded),this.hooks.onClose(),!0}catch{return this.hooks.onClose(),!1}}},Jd=class{constructor(n){F(this,"hooks");F(this,"id","google");this.hooks=n}async init(){}gameplayStart(){}gameplayStop(){}loadingStart(){}loadingStop(){}hasAdblock(){return!1}async requestMidgame(){await this.break("next")}async showRewarded(n){return window.adBreak?new Promise(e=>{let t=!1;window.adBreak({type:"reward",name:n,beforeReward:i=>{this.hooks.onOpen(),i()},adViewed:()=>{t=!0},adDismissed:()=>{},adBreakDone:()=>{this.hooks.onClose(),e(t)}})}):!1}break(n){return window.adBreak?new Promise(e=>{window.adBreak({type:n,beforeAd:()=>this.hooks.onOpen(),adBreakDone:()=>{this.hooks.onClose(),e()}})}):Promise.resolve()}},Zd=class{constructor(n){F(this,"hooks");F(this,"id","telegram");F(this,"cloudSave",{pull:()=>new Promise(n=>{var t,i;let e=(i=(t=window.Telegram)==null?void 0:t.WebApp)==null?void 0:i.CloudStorage;if(!e)return n(null);e.getItem("rh",(s,r)=>{try{n(r?JSON.parse(r):null)}catch{n(null)}})}),push:n=>new Promise(e=>{var t,i,s,r,a;(s=(i=(t=window.Telegram)==null?void 0:t.WebApp)==null?void 0:i.CloudStorage)==null||s.setItem("rh",JSON.stringify(n),()=>e()),(a=(r=window.Telegram)==null?void 0:r.WebApp)!=null&&a.CloudStorage||e()})});this.hooks=n}async init(){var n,e,t,i,s,r;(t=(e=(n=window.Telegram)==null?void 0:n.WebApp)==null?void 0:e.ready)==null||t.call(e),(r=(s=(i=window.Telegram)==null?void 0:i.WebApp)==null?void 0:s.expand)==null||r.call(s)}gameplayStart(){}gameplayStop(){}loadingStart(){}loadingStop(){}hasAdblock(){return!1}async requestMidgame(){await this.show()}async showRewarded(){return this.show()}async show(){let n=window.__TELEGRAM_BLOCK_ID;if(!window.Adsgram||!n)return!1;this.hooks.onOpen();try{return await window.Adsgram.init({blockId:n}).show(),this.hooks.onClose(),!0}catch{return this.hooks.onClose(),!1}}};function Ir(n,e){return n*n/(9.05*9.05)+e*e/76.5625<=1||Math.abs(n)<=1.65&&e>=7.2&&e<=15.4}function Qd(n,e,t,i){return Ir(n,e)?{x:n,z:e}:Ir(n,i)?{x:n,z:i}:Ir(t,e)?{x:t,z:e}:{x:t,z:i}}var Hi=[{id:"harvest",mechanic:"harvest",name:{ru:"Ярмарка урожая",en:"Harvest fair"},blurb:{ru:"Каждая продажа приносит билет ярмарки.",en:"Every sale earns a fair ticket."}},{id:"fishing",mechanic:"fishing",name:{ru:"Рыбалка",en:"Fishing"},blurb:{ru:"Подсекай на пирсе — билеты за точный бросок.",en:"Hook the pier in time — tickets for a clean cast."}},{id:"race",mechanic:"race",name:{ru:"Гонка лодок",en:"Boat race"},blurb:{ru:"Продажи этой недели — твой ход в гонке из 30 гаваней.",en:"This week's sales are your move in a 30-harbor race."}},{id:"beacon",mechanic:"beacon",name:{ru:"Стройка маяка",en:"Lighthouse raising"},blurb:{ru:"Тащи материалы продажами — шкала праздника растёт.",en:"Sales haul materials and fill the festival bar."}}],ef=["play","sell","guest","expedition","chest","mayor"],tf=[{id:1,name:{ru:"Морковная пристань",en:"Carrot Pier"},blurb:{ru:"Грядки, прилавки и первая касса.",en:"Beds, stalls and your first till."},ground:"#7BD35A",sand:"#F6DFA4",sky:"#8FD4F5",water:"#3EC5E0",tree:"#4FA845",accent:"#FF7A59",customers:["bunny","fox","bear","cat"],goods:[{id:"carrot",name:{ru:"Морковь",en:"Carrot"},color:"#FF8A3D"},{id:"cabbage",name:{ru:"Капуста",en:"Cabbage"},color:"#8ED15A"},{id:"pumpkin",name:{ru:"Тыква",en:"Pumpkin"},color:"#FF9F1C"}],extra:1},{id:2,name:{ru:"Рыбацкая бухта",en:"Fisher Bay"},blurb:{ru:"Улов и коптильня на причале.",en:"A catch and a smokehouse on the pier."},ground:"#B7D36A",sand:"#F3D7A0",sky:"#8EC8EE",water:"#2E9CC0",tree:"#3E8E74",accent:"#E08A4F",customers:["bird","cat","fox","crab"],goods:[{id:"fish",name:{ru:"Рыба",en:"Fish"},color:"#5EC8E6"},{id:"smoked",name:{ru:"Копчёная рыба",en:"Smoked fish"},color:"#E08A4F",input:"fish"}],extra:2},{id:3,name:{ru:"Яблоневый склон",en:"Apple Slope"},blurb:{ru:"Яблоки становятся соком, сок — пирожками.",en:"Apples become juice, juice becomes pies."},ground:"#8ED36A",sand:"#F6DFA4",sky:"#A9D9F6",water:"#3EC5E0",tree:"#E25B57",accent:"#F2C14E",customers:["goat","bunny","bear","bird"],goods:[{id:"apple",name:{ru:"Яблоко",en:"Apple"},color:"#E23B3B",sell:!1},{id:"juice",name:{ru:"Сок",en:"Juice"},color:"#F2C14E",input:"apple"},{id:"pie",name:{ru:"Пирожок",en:"Pie"},color:"#D4A574",input:"juice"}],extra:1},{id:4,name:{ru:"Молочная ферма",en:"Dairy Farm"},blurb:{ru:"Коровы, молоко и сыр.",en:"Cows, milk and cheese."},ground:"#6FCB62",sand:"#F6DFA4",sky:"#B7E3F8",water:"#3EC5E0",tree:"#4FA845",accent:"#FFE38A",customers:["sheep","pig","cat","bunny"],goods:[{id:"milk",name:{ru:"Молоко",en:"Milk"},color:"#FFF6E4"},{id:"cheese",name:{ru:"Сыр",en:"Cheese"},color:"#FFD15C",input:"milk"}],extra:2},{id:5,name:{ru:"Пчелиный луг",en:"Bee Meadow"},blurb:{ru:"Мёд и свечи с пасеки.",en:"Honey and candles from the hives."},ground:"#C6D85A",sand:"#F6DFA4",sky:"#B9E4F8",water:"#3EC5E0",tree:"#8FBF4A",accent:"#F5B942",customers:["bear","bunny","fox","owl"],goods:[{id:"honey",name:{ru:"Мёд",en:"Honey"},color:"#F5B942"},{id:"candle",name:{ru:"Свеча",en:"Candle"},color:"#FFE7A3",input:"honey"}],extra:2},{id:6,name:{ru:"Пекарня-мельница",en:"Mill Bakery"},blurb:{ru:"Зерно, мука и хлеб — цепочка из трёх шагов.",en:"Grain, flour and bread — a three-step chain."},ground:"#C9D36A",sand:"#F3D7A0",sky:"#F2E2B8",water:"#3AAFC8",tree:"#C68642",accent:"#E0A15A",customers:["pig","cat","goat","bunny"],goods:[{id:"wheat",name:{ru:"Зерно",en:"Grain"},color:"#E6C56A",sell:!1},{id:"flour",name:{ru:"Мука",en:"Flour"},color:"#F4F0E6",input:"wheat"},{id:"bread",name:{ru:"Хлеб",en:"Bread"},color:"#C68642",input:"flour"}],extra:2},{id:7,name:{ru:"Кофейные холмы",en:"Coffee Hills"},blurb:{ru:"Кофе и столики: гости задерживаются.",en:"Coffee and tables — guests stay a while."},ground:"#7FBF6A",sand:"#E7C48A",sky:"#E7D3B5",water:"#3AAFC8",tree:"#6F4E37",accent:"#8D6E63",customers:["cat","owl","fox","bear"],seated:!0,goods:[{id:"coffee",name:{ru:"Кофе",en:"Coffee"},color:"#6F4E37",sell:!1},{id:"cup",name:{ru:"Чашка кофе",en:"Coffee cup"},color:"#C4A484",input:"coffee"},{id:"bun",name:{ru:"Булочка",en:"Bun"},color:"#E2B07A"}],extra:2},{id:8,name:{ru:"Ягодное болото",en:"Berry Bog"},blurb:{ru:"Ягоды, варенье и гости-лягушки.",en:"Berries, jam and frog guests."},ground:"#5EBF78",sand:"#E7D7A4",sky:"#B7E0C8",water:"#2E8F78",tree:"#3E8E55",accent:"#C43B6E",customers:["frog","bird","capybara","bunny"],goods:[{id:"berry",name:{ru:"Ягода",en:"Berry"},color:"#E85D8C"},{id:"jam",name:{ru:"Варенье",en:"Jam"},color:"#C43B6E",input:"berry"}],extra:3},{id:9,name:{ru:"Ледяной фьорд",en:"Ice Fjord"},blurb:{ru:"Мороженое и пингвины.",en:"Ice cream and penguins."},ground:"#D5EDE8",sand:"#F4EFE4",sky:"#D5EEF8",water:"#7EC8E0",tree:"#E7F4F6",accent:"#F2F7FF",customers:["penguin","owl","fox","bear"],goods:[{id:"snow",name:{ru:"Снег",en:"Snow"},color:"#F4FBFF",sell:!1},{id:"ice",name:{ru:"Мороженое",en:"Ice cream"},color:"#C8F4FF",input:"snow"},{id:"sorbet",name:{ru:"Сорбет",en:"Sorbet"},color:"#FFB7D5",input:"ice"}],extra:2},{id:10,name:{ru:"Тропический риф",en:"Tropic Reef"},blurb:{ru:"Кокосы, коктейли и лодочная доставка.",en:"Coconuts, cocktails and a delivery boat."},ground:"#3FCB7A",sand:"#F6DFA4",sky:"#7ED0F5",water:"#1E8FB8",tree:"#2E8F4A",accent:"#FF6B8A",customers:["crab","bird","cat","fox"],delivery:!0,goods:[{id:"coconut",name:{ru:"Кокос",en:"Coconut"},color:"#F5E6C8"},{id:"cocktail",name:{ru:"Коктейль",en:"Cocktail"},color:"#FF6B8A",input:"coconut"}],extra:3},{id:11,name:{ru:"Ярмарочная гора",en:"Fair Mountain"},blurb:{ru:"Сладкая вата и карусель.",en:"Cotton candy and a carousel."},ground:"#8ED36A",sand:"#F6DFA4",sky:"#F7D2E4",water:"#3EC5E0",tree:"#4FA845",accent:"#FF7AB6",customers:["bunny","bear","pig","fox"],attraction:!0,goods:[{id:"cotton",name:{ru:"Сладкая вата",en:"Cotton candy"},color:"#FFB7D5"},{id:"ticket",name:{ru:"Билетик",en:"Ticket"},color:"#FFE38A"}],extra:3},{id:12,name:{ru:"Звёздный маяк",en:"Star Beacon"},blurb:{ru:"Финал архипелага: великая ярмарка.",en:"The end of the archipelago: the great fair."},ground:"#6EBE9A",sand:"#F6DFA4",sky:"#9EC9F5",water:"#2E8FBF",tree:"#C9A6FF",accent:"#FFE38A",customers:["raccoon","owl","fox","penguin","bunny","crab"],goods:[{id:"starfruit",name:{ru:"Звездоплод",en:"Starfruit"},color:"#C9A6FF"},{id:"mooncake",name:{ru:"Лунный пряник",en:"Moon cake"},color:"#F2E2FF",input:"starfruit"},{id:"tea",name:{ru:"Маячный чай",en:"Beacon tea"},color:"#9EE0C8"}],extra:4,seated:!0}];function ql(n,e){return e==="stall"?"stall":e==="till"?"till":e==="house"?"house":e==="decor"?"decor":e==="hire"?"hire":e==="backpack"?"pack":e==="delivery"?"delivery":e==="attraction"?"attraction":e==="processor"?"machine":{fish:"pier",milk:"cow",honey:"hive",wheat:"mill",apple:"tree",coffee:"bush",berry:"bog",snow:"freezer",coconut:"palm",cotton:"machine",tea:"kettle",starfruit:"crystal"}[n]??"crop"}function nf(n,e){var r;let t=new Set,i=e,s=new Set;for(;i&&!s.has(i);)s.add(i),t.add(i),i=(r=n.find(a=>a.id===i))==null?void 0:r.input;return t}function sf(n){let e=n.filter(t=>t.kind!=="till");for(let t=0;t<10;t++){for(let i=0;i<e.length;i++)for(let s=i+1;s<e.length;s++){let r=e[i],a=e[s],o=a.x-r.x,l=a.z-r.z,c=Math.hypot(o,l),u=3.15;if(c<.001&&(o=1,l=0,c=1),c<u){let h=(u-c)/2;o/=c,l/=c,r.x-=o*h,r.z-=l*h,a.x+=o*h,a.z+=l*h}}for(let i of e)Ir(i.x,i.z)||(i.x*=.9,i.z*=.9)}}function rf(n){let e=n.goods.map((d,f)=>({id:d.id,name:d.name,color:d.color,k:f+1,input:d.input,sell:d.sell!==!1})),t=e.find(d=>d.sell)??e[0],i=nf(n.goods,t.id),s=[],r=1,a=e.length,o=d=>a<=1?.2:2.6-d*(6.4/(a-1));e.forEach((d,f)=>{let g=o(f),v=!!d.input,m=v?`proc_${d.id}`:`field_${d.id}`,p=i.has(d.id);if(s.push({id:m,kind:v?"processor":"producer",k:r++,item:d.id,input:d.input,x:v?-.4:-3.8,z:g,built:p,star:!0,scale:!0,visual:ql(d.id,v?"processor":"producer")}),d.sell){let x=i.has(d.id);s.push({id:`stall_${d.id}`,kind:"stall",k:r++,item:d.id,x:3.15,z:g,built:x,star:!0,scale:!0,visual:"stall"})}});let l=e.find(d=>!d.input)??e[0];for(let d=0;d<n.extra;d++)s.push({id:`extra_${l.id}_${d}`,kind:"producer",k:r++,item:l.id,x:-6.3+d%2*1.6,z:5.4-d*1.7,built:!1,star:!0,scale:!0,visual:ql(l.id,"producer")});s.push({id:"till",kind:"till",k:1,x:2.5,z:6.15,built:!0,star:!0,scale:!0,visual:"till"}),s.push({id:"house",kind:"house",k:r++,x:-.4,z:-6.3,built:!1,star:!0,scale:!1,visual:"house"}),s.push({id:"hire",kind:"hire",k:1,x:-3.3,z:6.15,built:!0,star:!1,scale:!1,visual:"hire"}),s.push({id:"pack",kind:"backpack",k:2,x:5.6,z:5.5,built:!0,star:!1,scale:!1,visual:"pack"}),n.delivery&&s.push({id:"delivery",kind:"delivery",k:r++,item:l.id,x:-5.4,z:5.8,built:!1,star:!0,scale:!1,visual:"delivery"}),n.attraction&&s.push({id:"attraction",kind:"attraction",k:r++,x:-5.2,z:4.6,built:!1,star:!0,scale:!1,visual:"attraction"});for(let d=0;d<5;d++)s.push({id:`decor_${d}`,kind:"decor",k:d+1,x:d<3?6.6:-6.8,z:d<3?3.4-d*3.1:2.2-(d-3)*3.4,built:!1,star:!1,scale:!1,visual:["bench","flowers","lamp","flowers","bench"][d]??"bench"});sf(s);let c=af(n.id,e,s),u=ef.map(d=>({id:`${n.id}:${d}`,source:d,rarity:d==="mayor"||d==="chest"?"epic":d==="guest"||d==="expedition"?"rare":"common"})),h=n.seated?[{x:2.2,z:2.4},{x:2.2,z:-1.2},{x:2.2,z:-4.6}]:[];return{id:n.id,name:n.name,blurb:n.blurb,ground:n.ground,sand:n.sand,sky:n.sky,water:n.water,tree:n.tree,accent:n.accent,goods:e,stations:s,customers:n.customers,seated:!!n.seated,cards:u,mayor:c,seats:h}}function af(n,e,t){let i=e.filter(l=>l.sell),s=i[0]??e[0],r=i[1]??s,a=t.find(l=>l.star&&!l.built),o=400*n*n;return[{id:"m_sell",type:"sell_item",item:s.id,count:20+n*5},{id:"m_build",type:"build",stationId:a==null?void 0:a.id,count:1},{id:"m_serve",type:"serve",count:25+n*8},{id:"m_hire",type:"hire",count:1},{id:"m_sell2",type:"sell_item",item:r.id,count:30+n*6},{id:"m_up",type:"upgrade",count:3},{id:"m_decor",type:"decor",count:2},{id:"m_earn",type:"earn",count:o}]}var Dn=tf.map(rf);function gt(n){let e=Dn.find(t=>t.id===n);if(!e)throw Error(`island ${n}`);return e}function jr(n,e){return n.goods.find(t=>t.id===e)}var Zo=[ut("stepa",{ru:"Заяц Стёпа",en:"Stepa the hare"},"common","cashier","bunny","#F4E6D4","#F2A3B5",{serve:.22},{ru:"Быстрее пробивает кассу",en:"Checks customers out faster"}),ut("alisa",{ru:"Лиса Алиса",en:"Alisa the fox"},"common","carrier","fox","#F08A3C","#FFE1C4",{speed:.1},{ru:"Носит товары на прилавок",en:"Carries goods to the stall"}),ut("misha",{ru:"Медведь Миша",en:"Misha the bear"},"common","farmer","bear","#A56A3A","#F0C9A0",{prod:.28,cap:1},{ru:"Ускоряет грядки и тащит больше",en:"Speeds the beds and carries more"}),ut("krya",{ru:"Утка Кря",en:"Krya the duck"},"common","general","bird","#F2F4F6","#F5C542",{lambda:.08},{ru:"Зовёт больше гостей",en:"Draws more guests"}),ut("tosha",{ru:"Ёжик Тоша",en:"Tosha the hedgehog"},"common","farmer","bear","#8A6A4A","#E8D2B0",{offline:.12},{ru:"Острова лучше работают без тебя",en:"Islands work harder while you are away"}),ut("vaska",{ru:"Кот Вася",en:"Vaska the cat"},"common","general","cat","#F0A050","#FFE8C8",{income:.07},{ru:"Чуть щедрее чек",en:"A slightly richer receipt"}),ut("rita",{ru:"Енот Рита",en:"Rita the raccoon"},"rare","carrier","raccoon","#8D8278","#F4E2C8",{speed:.12,cap:2},{ru:"Быстрые лапы и большой стек",en:"Quick paws and a bigger stack"}),ut("mudra",{ru:"Сова Мудра",en:"Mudra the owl"},"rare","general","owl","#C8B48A","#F2E2B0",{income:.12},{ru:"Знает, почём товар",en:"Knows what a good is worth"}),ut("pip",{ru:"Пингвин Пип",en:"Pip the penguin"},"rare","cashier","penguin","#2E3340","#F4F7FA",{serve:.3},{ru:"Касса почти не простаивает",en:"The till barely idles"}),ut("zorka",{ru:"Коза Зорька",en:"Zorka the goat"},"rare","farmer","goat","#E6E0D6","#F2C14E",{prod:.36},{ru:"Грядки спеют быстрее",en:"Beds ripen faster"}),ut("hryu",{ru:"Свин Хрю",en:"Hryu the pig"},"rare","general","pig","#F2A3B0","#FFD0D6",{income:.14},{ru:"Гости оставляют больше",en:"Guests leave a little more"}),ut("kira",{ru:"Белка Кира",en:"Kira the squirrel"},"rare","carrier","fox","#E07A3A","#F8D7B0",{speed:.16},{ru:"Носится между станциями",en:"Darts between stations"}),ut("borya",{ru:"Капибара Боря",en:"Borya the capybara"},"epic","carrier","capybara","#B88858","#F0D2B0",{cap:4,income:.08},{ru:"Стек как плот",en:"A stack like a raft"}),ut("grisha",{ru:"Журавль Гриша",en:"Grisha the crane"},"epic","general","bird","#F4F6F8","#E23B3B",{lambda:.14},{ru:"Очередь сама находится",en:"The queue finds you"}),ut("lada",{ru:"Выдра Лада",en:"Lada the otter"},"epic","farmer","fox","#6AA8C8","#F4E2C8",{offline:.22},{ru:"Офлайн течёт ровнее",en:"Offline income flows smoother"}),ut("luna",{ru:"Панда Луна",en:"Luna the panda"},"epic","cashier","bear","#F7F7F7","#2A2A2A",{income:.18,serve:.15},{ru:"Спокойная касса, жирный чек",en:"A calm till and a fat receipt"}),ut("fenya",{ru:"Фенек Феня",en:"Fenya the fennec"},"epic","carrier","fox","#F6C56A","#FFF0D0",{speed:.22},{ru:"Самые быстрые уши в гавани",en:"The fastest ears in the harbor"}),ut("dyoma",{ru:"Бобёр Дёма",en:"Dyoma the beaver"},"epic","farmer","bear","#8C5A32","#E8C49A",{prod:.42},{ru:"Строит темп производства",en:"Builds the production pace"}),ut("tuchka",{ru:"Тучка",en:"Tuchka"},"legendary","general","bird","#D7E6F5","#FFFFFF",{income:.25,offline:.16},{ru:"Доход и офлайн с облаков",en:"Income and offline from the clouds"}),ut("yara",{ru:"Феникс Яра",en:"Yara the phoenix"},"legendary","farmer","bird","#FF7A59","#FFD15C",{speed:.22,prod:.24},{ru:"Всё вокруг вспыхивает темпом",en:"Everything around picks up the pace"}),ut("iskra",{ru:"Дракончик Искра",en:"Iskra the dragon"},"legendary","general","bird","#FF8A3D","#FFE38A",{income:.22,prod:.22},{ru:"Маленький огонь, большой чек",en:"A small flame and a big receipt"}),ut("myata",{ru:"Единорог Мята",en:"Myata the unicorn"},"legendary","cashier","goat","#F7F4FF","#E7D2FF",{income:.2,lambda:.12},{ru:"Гости идут на свет рога",en:"Guests follow the horn's glow"}),ut("osya",{ru:"Осьминог Ося",en:"Osya the octopus"},"legendary","carrier","crab","#8E6CFF","#E4D8FF",{cap:5,serve:.28},{ru:"Хватает всё сразу",en:"Grabs everything at once"}),ut("nova",{ru:"Звёздный енот Нова",en:"Nova the star raccoon"},"legendary","general","raccoon","#C9A6FF","#FFF6C8",{income:.3,speed:.16,prod:.16},{ru:"Сезонный талисман гавани",en:"The harbor's seasonal charm"})];function ut(n,e,t,i,s,r,a,o,l){return{id:n,name:e,rarity:t,role:i,look:s,color:r,accent:a,perk:o,blurb:l}}function vn(n){return Zo.find(e=>e.id===n)}var jh=[{id:"hat_straw",slot:"hat",cost:50,name:{ru:"Соломенная шляпа",en:"Straw hat"}},{id:"hat_sailor",slot:"hat",cost:80,name:{ru:"Бескозырка",en:"Sailor cap"}},{id:"hat_flower",slot:"hat",cost:120,name:{ru:"Венок",en:"Flower crown"}},{id:"trail_bubbles",slot:"trail",cost:90,name:{ru:"Пузырьки",en:"Bubbles"}},{id:"trail_stars",slot:"trail",cost:160,name:{ru:"Звёздный след",en:"Star trail"}},{id:"frame_wood",slot:"frame",cost:70,name:{ru:"Деревянная рамка",en:"Wooden frame"}},{id:"frame_gold",slot:"frame",cost:240,name:{ru:"Золотая рамка",en:"Gold frame"}},{id:"hat_crown",slot:"hat",cost:400,name:{ru:"Корона гавани",en:"Harbor crown"}}],Yh=[10,25,50,90,140,200],Ps=[{kind:"coins",weight:28,label:{ru:"Монеты",en:"Coins"}},{kind:"shells",amount:5,weight:18,label:{ru:"5 ракушек",en:"5 shells"}},{kind:"coins",weight:16,label:{ru:"Горсть монет",en:"A handful"}},{kind:"shells",amount:12,weight:12,label:{ru:"12 ракушек",en:"12 shells"}},{kind:"key",weight:8,label:{ru:"Ключ",en:"Key"}},{kind:"turbo",weight:8,label:{ru:"Турбо",en:"Turbo"}},{kind:"shells",amount:20,weight:6,label:{ru:"20 ракушек",en:"20 shells"}},{kind:"jackpot",weight:4,label:{ru:"Джекпот",en:"Jackpot"}}],Kh=[{kind:"coins",amount:200,label:{ru:"200 монет",en:"200 coins"}},{kind:"shells",amount:10,label:{ru:"10 ракушек",en:"10 shells"}},{kind:"key",amount:1,label:{ru:"Ключ",en:"A key"}},{kind:"shells",amount:20,label:{ru:"20 ракушек",en:"20 shells"}},{kind:"turbo",amount:1,label:{ru:"Турбо-талон",en:"Turbo ticket"}},{kind:"shells",amount:30,label:{ru:"30 ракушек",en:"30 shells"}},{kind:"helper",label:{ru:"Редкий помощник",en:"A rare helper"}}],Br="Бухта Ухи.Причал Кита.Гавань Совы.Остров Пышек.Маяк Фенека.Река Сыра.Пляж Крабов.Сад Репы.Док Утки.Холм Мёда.Пирс Хрю.Залив Пирога.Коса Травни.Форт Варенья.Риф Кокоса.Склон Яблок.Фьорд Пломбира.Ярмарка Хлопка.Дом Бобра.Тихая Касса.Шумный Прилавок.Северная Сеть.Южный Лот.Енотовый Мыс.Звёздный Док.Лунная Печь.Тихий Улей.Быстрый Паром.Старая Верфь.Новая Верфь".split(".");function eo(n,e){return e?n===30?{kind:"helper",amount:1,rarity:"legendary"}:n===15?{kind:"helper",amount:1,rarity:"epic"}:n%8==0?{kind:"cosmetic",amount:1,cosmetic:n===8?"hat_pirate":n===16?"hat_winter":"trail_season"}:n%5==0?{kind:"key",amount:1}:{kind:"shells",amount:8+n}:n===30?{kind:"helper",amount:1,rarity:"epic"}:n===20||n===10?{kind:"helper",amount:1,rarity:n===20?"rare":"common"}:n===8?{kind:"cosmetic",amount:1,cosmetic:"hat_bloom"}:n===16?{kind:"cosmetic",amount:1,cosmetic:"hat_space"}:n===24?{kind:"cosmetic",amount:1,cosmetic:"frame_album"}:n%5==0?{kind:"key",amount:1}:{kind:"shells",amount:4+Math.floor(n/2)}}var Xl={x:3.15,z:11.6},jl={x:-1.15,z:9.2},zr={x:.2,z:3.6};function of(n,e){return ee.P0*ee.priceIsland**(n-1)*(1+ee.priceStation*(e-1))}function cs(n,e){return Math.max(1,Math.round(of(n,e)))}function Hr(n){let e=Math.max(0,Math.min(ee.tCapLevel,n));return ee.t0*ee.tDecay**+e}function Jh(n,e=0){return Math.min(ee.stackMax,Math.max(1,ee.stackBase+ee.stackPerLevel*n+e))}function Zh(n,e){return ee.B0*ee.buildIsland**(n-1)*ee.buildStation**(e-1)}function Qh(n,e){return Math.max(1,Math.round(Zh(n,e)))}function lf(n,e,t){return Zh(n,e)*ee.upgradeFactor*ee.upgradeGrowth**+t}function Yl(n,e,t){return Math.max(1,Math.round(lf(n,e,t)))}function cf(n,e,t,i){let s=Hr(t);return s<=0?0:cs(n,e)*(1/s)*ee.idleFactor*i}function hf(n,e){return ee.hireBase*ee.hireIsland**(n-1)*ee.hireIndex**(e-1)}function Yi(n,e){return Math.max(1,Math.round(hf(n,e)))}function uf(n,e){return ee.lambdaBase+ee.lambdaPerStall*n+ee.lambdaPerDecor*e}function eu(n){return Qh(n+1,1)*ee.boatFactor}function tu(n,e){return Math.max(1,Math.round(ee.decorBase*ee.buildIsland**(n-1)*ee.decorGrowth**(e-1)))}function nu(n){return Math.max(1,Math.round(ee.lighthouseBase*ee.lighthouseGrowth**+n))}function iu(n){return Math.max(1,Math.round(ee.helperLevelBase*ee.helperLevelGrowth**+Math.max(0,n-1)))}function df(n,e,t,i){return i||e<=0||n<=0||t<=0?0:n*Math.min(e,t)*ee.offlineFactor}function Kl(n){if(n<ee.timerIsland)return 0;let e=90*1.8**(n-ee.timerIsland);return Math.min(1800,Math.round(e))}function to(n){return 60+5*(n+1)}var ff=[0,1,8,14,17,19,19,20,19,20,19,19,12];function Yr(n){return ff[n]??1}function su(n){return Math.min(ee.maxLevel,Math.max(10,Yr(n)+3))}var Qo=class{constructor(n){F(this,"s");this.s=n,Number.isFinite(this.s)||(this.s=1)}next(){this.s|=0,this.s=this.s+1831565813|0;let n=Math.imul(this.s^this.s>>>15,1|this.s);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}int(n){return n<=1?0:Math.floor(this.next()*n)}pick(n){return n[this.int(n.length)]}chance(n){return this.next()<n}};function ru(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function au(n){return ru(n).toString(16)}var Jl={carrot:"station_carrot_bed",cabbage:"station_cabbage_bed",fish:"station_fishing_pier",smoked:"station_smokehouse",apple:"station_apple_tree",juice:"station_juice_press",pie:"station_pie_oven",milk:"station_cow_pen",cheese:"station_cheese_press",honey:"station_beehive",candle:"station_candle_maker",wheat:"station_wheat_field",flour:"station_windmill",bread:"station_bakery_oven",coffee:"station_coffee_bush",cup:"station_coffee_machine",berry:"station_berry_bush",jam:"station_jam_cauldron",snow:"station_freezer",ice:"station_ice_cream_machine",sorbet:"station_ice_cream_machine",coconut:"station_coconut_palm",cocktail:"station_cocktail_bar",cotton:"station_cotton_candy",ticket:"station_carousel"};function Zl(n,e,t,i=0){return n==="stall"?"stall":n==="till"?"till":n==="house"?"helper_house":n==="hire"?"signpost":n==="backpack"||n==="build"?"build_pad":n==="delivery"?"prop_delivery_boat":n==="attraction"?"station_ferris_wheel":n==="decor"?["bench","flower_patch","lamp_post","flower_patch","bench"][i]??"bench":(n==="producer"||n==="processor")&&e&&Jl[e]?Jl[e]:null}function Ql(n){return{bunny:"customer_bunny",fox:"customer_fox",cat:"customer_fox",bear:"customer_bear",bird:"customer_duck",duck:"customer_duck",owl:"customer_duck",frog:"customer_frog",penguin:"customer_penguin",pig:"customer_pig",sheep:"customer_sheep",goat:"customer_sheep",crab:"customer_frog",capybara:"customer_bear",raccoon:"raccoon_hero"}[n]??null}function pf(n,e){return n==="lada"||n==="osya"||e==="bird"||e==="owl"||e==="crab"||e==="penguin"||e==="frog"?"helper_otter":n==="alisa"||n==="kira"||n==="fenya"||e==="fox"||e==="cat"?"helper_squirrel":"helper_beaver"}function mf(n){return{carrot:"good_carrot",cabbage:"good_cabbage",fish:"good_fish",smoked:"good_smoked_fish",apple:"good_apple",juice:"good_juice",pie:"good_pie",cheese:"good_cheese",milk:"good_milk",candle:"good_candle",honey:"good_honey",bread:"good_bread",flour:"good_flour",wheat:"good_wheat",coffee:"good_coffee_beans",cup:"good_coffee_cup",berry:"good_berries",jam:"good_jam",ice:"good_ice_cream",sorbet:"good_popsicle",coconut:"good_coconut",cocktail:"good_cocktail",cotton:"good_cotton_candy",ticket:"good_ticket",starfruit:"good_star_trophy",mooncake:"good_gift_box",tea:"good_coffee_cup"}[n]??null}var ou=Pd,el=[{id:"first_carrot",group:"sales",shells:5,name:{ru:"Первая морковка",en:"First carrot"},desc:{ru:"Продай 1 товар",en:"Sell 1 item"},test:n=>n.sales>=1},{id:"business",group:"sales",shells:5,name:{ru:"Бизнес-енот",en:"Business raccoon"},desc:{ru:"Заработай 1 000 монет",en:"Earn 1,000 coins"},test:n=>n.earned>=1e3},{id:"thousand",group:"sales",shells:15,name:{ru:"Тысячник",en:"Thousandaire"},desc:{ru:"Продай 1 000 товаров",en:"Sell 1,000 items"},test:n=>n.sales>=1e3},{id:"ten_thousand",group:"sales",shells:30,name:{ru:"Десятитысячник",en:"Ten thousand deals"},desc:{ru:"Продай 10 000 товаров",en:"Sell 10,000 items"},test:n=>n.sales>=1e4},{id:"hundred_thousand",group:"sales",shells:80,name:{ru:"Сто тысяч сделок",en:"A hundred thousand"},desc:{ru:"Продай 100 000 товаров",en:"Sell 100,000 items"},test:n=>n.sales>=1e5},{id:"wolf",group:"islands",shells:10,name:{ru:"Морской волк",en:"Sea wolf"},desc:{ru:"Открой остров 2",en:"Unlock island 2"},test:n=>n.highestIsland>=2},{id:"captain",group:"islands",shells:30,name:{ru:"Капитан",en:"Captain"},desc:{ru:"Открой остров 6",en:"Unlock island 6"},test:n=>n.highestIsland>=6},{id:"admiral",group:"islands",shells:100,name:{ru:"Адмирал",en:"Admiral"},desc:{ru:"Открой остров 12",en:"Unlock island 12"},test:n=>n.highestIsland>=12},{id:"star",group:"islands",shells:15,name:{ru:"Звёздочка",en:"Little star"},desc:{ru:"Получи первую ⭐⭐⭐",en:"Earn a first 3-star island"},test:n=>n.stars3>=1},{id:"constellation",group:"islands",shells:60,name:{ru:"Созвездие",en:"Constellation"},desc:{ru:"⭐⭐⭐ на 6 островах",en:"3 stars on 6 islands"},test:n=>n.stars3>=6},{id:"sky",group:"islands",shells:150,name:{ru:"Небосвод",en:"Night sky"},desc:{ru:"⭐⭐⭐ на всех 12",en:"3 stars on all 12"},test:n=>n.stars3>=12},{id:"first_hire",group:"crew",shells:5,name:{ru:"Первый найм",en:"First hire"},desc:{ru:"Найми помощника",en:"Hire a helper"},test:n=>n.hires>=1},{id:"team",group:"crew",shells:20,name:{ru:"Дружная команда",en:"A full crew"},desc:{ru:"10 помощников одновременно",en:"10 helpers at once"},test:n=>n.crew>=10},{id:"legend_crew",group:"crew",shells:50,name:{ru:"Звёздный состав",en:"Star lineup"},desc:{ru:"Получи легендарного помощника",en:"Own a legendary helper"},test:n=>n.legendary},{id:"trainer",group:"crew",shells:25,name:{ru:"Тренер",en:"Coach"},desc:{ru:"Помощник 10 уровня",en:"A helper reaches level 10"},test:n=>n.helperLevel>=10},{id:"master_station",group:"world",shells:20,name:{ru:"Мастер-станция",en:"Master station"},desc:{ru:"Станция 25 уровня",en:"A station reaches level 25"},test:n=>n.stationLevel>=25},{id:"industrial",group:"world",shells:40,name:{ru:"Индустриализация",en:"Industrialised"},desc:{ru:"Построй 50 станций",en:"Build 50 stations"},test:n=>n.stationsBuilt>=50},{id:"heavy",group:"world",shells:15,name:{ru:"Тяжеловес",en:"Heavy lifter"},desc:{ru:"Стек на 20 предметов",en:"Carry a stack of 20"},test:n=>n.stackCap>=20},{id:"early_bird",group:"habits",shells:20,name:{ru:"Ранняя пташка",en:"Early bird"},desc:{ru:"Зайди 7 дней подряд",en:"Log in 7 days in a row"},test:n=>n.streak>=7},{id:"regular",group:"habits",shells:50,name:{ru:"Завсегдатай",en:"Regular"},desc:{ru:"Зайди 30 дней",en:"Log in on 30 days"},test:n=>n.loginDays>=30},{id:"veteran",group:"habits",shells:150,name:{ru:"Ветеран Гавани",en:"Harbor veteran"},desc:{ru:"Зайди 90 дней",en:"Log in on 90 days"},test:n=>n.loginDays>=90},{id:"executive",group:"habits",shells:30,name:{ru:"Исполнительный",en:"Doer"},desc:{ru:"50 ежедневных заданий",en:"Finish 50 daily quests"},test:n=>n.dailyDone>=50},{id:"workaholic",group:"habits",shells:60,name:{ru:"Трудоголик",en:"Workaholic"},desc:{ru:"20 недельных наборов",en:"Finish 20 weekly sets"},test:n=>n.weeklySets>=20},{id:"festival",group:"habits",shells:10,name:{ru:"Фестивальщик",en:"Festival goer"},desc:{ru:"Поучаствуй в событии",en:"Join an event"},test:n=>n.eventsJoined>=1},{id:"race_king",group:"habits",shells:40,name:{ru:"Король ярмарки",en:"Fair king"},desc:{ru:"1-е место в гонке лодок",en:"Finish 1st in a boat race"},test:n=>n.boatRaceWins>=1},{id:"collector",group:"world",shells:15,name:{ru:"Коллекционер",en:"Collector"},desc:{ru:"Собери 1 коллекцию",en:"Complete 1 collection"},test:n=>n.sets>=1},{id:"museum",group:"world",shells:120,name:{ru:"Музей",en:"Museum"},desc:{ru:"Собери все 12 коллекций",en:"Complete all 12 collections"},test:n=>n.sets>=12},{id:"lighthouse_20",group:"world",shells:40,name:{ru:"Маячник",en:"Keeper"},desc:{ru:"Открой 20 узлов Маяка",en:"Unlock 20 Lighthouse nodes"},test:n=>n.lighthouse>=20},{id:"lighthouse_40",group:"world",shells:120,name:{ru:"Светоч",en:"Beacon"},desc:{ru:"Все 40 узлов Маяка",en:"Unlock all 40 nodes"},test:n=>n.lighthouse>=40},{id:"fashion",group:"world",shells:25,name:{ru:"Модник",en:"Dressed up"},desc:{ru:"10 предметов косметики",en:"Own 10 cosmetics"},test:n=>n.cosmetics>=10},{id:"designer",group:"world",shells:30,name:{ru:"Дизайнер",en:"Designer"},desc:{ru:"Поставь 50 украшений",en:"Place 50 decorations"},test:n=>n.decor>=50},{id:"queue",group:"sales",shells:10,name:{ru:"Очередь до горизонта",en:"Queue to the horizon"},desc:{ru:"15 покупателей в очереди",en:"15 customers waiting at once"},test:n=>n.bestQueue>=15},{id:"sprinter",group:"sales",shells:25,name:{ru:"Спринтер",en:"Sprinter"},desc:{ru:"100 покупателей за 5 минут",en:"Serve 100 customers in 5 minutes"},test:n=>n.sprint},{id:"night_watch",group:"habits",shells:15,name:{ru:"Ночной сторож",en:"Night watch"},desc:{ru:"Собери офлайн за полные 8 часов",en:"Collect an 8-hour offline cap"},test:n=>n.nightWatch},{id:"rebirth",group:"islands",shells:40,name:{ru:"Возрождение",en:"Rebirth"},desc:{ru:"Первый фестиваль престижа",en:"Hold a first prestige festival"},test:n=>n.prestiges>=1},{id:"eternal",group:"islands",shells:100,name:{ru:"Вечный праздник",en:"Eternal fair"},desc:{ru:"10 престижей",en:"10 prestiges"},test:n=>n.prestiges>=10},{id:"vip",group:"sales",shells:40,name:{ru:"VIP-сервис",en:"VIP service"},desc:{ru:"100 заказов VIP",en:"Complete 100 VIP orders"},test:n=>n.vip>=100},{id:"lucky",group:"habits",shells:15,name:{ru:"Удачливый",en:"Lucky"},desc:{ru:"Джекпот колеса",en:"Hit the wheel jackpot"},test:n=>n.jackpot},{id:"expeditor",group:"world",shells:30,name:{ru:"Экспедитор",en:"Expeditor"},desc:{ru:"50 экспедиций",en:"Finish 50 expeditions"},test:n=>n.expeditions>=50},{id:"season",group:"habits",shells:50,name:{ru:"Сезонник",en:"Seasoned"},desc:{ru:"Пройди сезон до 30 уровня",en:"Reach pass level 30"},test:n=>n.passLevel>=30},{id:"fisher",group:"world",shells:25,name:{ru:"Рыболов",en:"Angler"},desc:{ru:"Поймай легендарную рыбу",en:"Catch a legendary fish"},test:n=>n.legendaryFish},{id:"magnate",group:"islands",shells:200,name:{ru:"Енот-магнат",en:"Raccoon magnate"},desc:{ru:"Заверши финальный заказ архипелага",en:"Finish the archipelago's final order"},test:n=>n.magnate}],Ce={Move:0,Pick:1,Drop:2,Till:3,Build:4,Stall2:5,Hire:6,Chest:7,Turbo:8,Free:9,Quests:10,Done:11};function Jn(n){let e=new Date(n);return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`}function Kr(n){let e=new Date(n),t=(e.getDay()+6)%7,i=new Date(e);return i.setDate(e.getDate()-t),i.setHours(0,0,0,0),Jn(i.getTime())}function lu(n){return Math.max(0,Math.floor((n-Date.UTC(2026,0,5))/24192e5))}function gf(n){let e=new Date(n).getHours();return ee.happyHours.includes(e)}function ni(n){let e=new Date(n),t=(e.getUTCDay()-5+7)%7,i=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()-t,7,0,0,0);n<i&&(i-=6048e5);let s=i+2592e5;if(n<i||n>=s)return null;let r=Hi[(Math.floor(i/6048e5)%Hi.length%Hi.length+Hi.length)%Hi.length];return{def:r,key:`${r.id}:${i}`,start:i,end:s}}function vf(n){ni(n);let e=new Date(n),t=(5-e.getUTCDay()+7)%7,i=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()+t,7,0,0,0);return i<=n&&(i+=6048e5),i}function _f(n,e){return{built:n,level:1,progress:0,stock:n&&e?6:0,inputStock:0,invested:0,timer:0,timerTotal:0,pending:null}}function cu(n=Date.now()){let e=Dn.map(i=>{let s={};for(let r of i.stations){let a=r.kind==="producer"||r.kind==="processor";s[r.id]=_f(r.built,a)}return{id:i.id,unlocked:i.id===1,coins:0,stations:s,crew:[],prestige:0,mayorClaimed:[],mayorProgress:{},playtime:0,pendingOffline:0,lifetimeEarned:0,sales:{},celebrated:0,decorColors:{}}}),t={v:1,t:n,profile:{name:"Енот",createdAt:n,lastSeen:n,totalPlaytime:0,sessions:1,shells:0,keys:0,turboTickets:0,currentIsland:1,tutorialStep:Ce.Move,backpack:0,playerX:zr.x,playerZ:zr.z,playerYaw:Math.PI,turboUntil:0,internUntil:0,freeInternAt:0,welcomeShown:0,nightWatch:!1,sprint:!1,magnate:!1,raceClaimedWeek:"",eventJoinedWeek:""},islands:e,lighthouse:[],helpers:["stepa","alisa","misha","krya"].map(i=>({id:i,level:1,islandId:null})),quests:{day:"",daily:[],dailyBonusClaimed:!1,week:"",weekly:[],weeklyBonusClaimed:!1},pass:{season:lu(n),xp:0,level:0,claimed:[],starClaimed:[],starTokens:0,starUnlocked:!1,overflowChests:0},events:{weekKey:"",tickets:0,progress:0,claimedTiers:[],raceScore:0,fishingBest:0},achievements:[],collections:[],expeditions:[],cosmetics:[],equipped:{hat:null,trail:null,frame:null},settings:{lang:"ru",music:!0,sfx:!0,quality:"auto"},ads:{day:Jn(n),midgamesToday:0,midgamesHour:0,hourStamp:n,rewarded:{},lastMidgameAt:0,lastRewardedAt:0},stats:{sales:0,customers:0,earned:0,hires:0,upgrades:0,stationsBuilt:0,chests:0,expeditions:0,prestiges:0,dailyDone:0,weeklySets:0,eventsJoined:0,boatRaceWins:0,decorPlaced:0,bestQueue:0,loginDays:1,loginStreak:1,lastLoginDay:Jn(n),vipDone:0,wheelJackpot:!1,legendaryFish:!1,seasonMaxLevel:0,weekCoins:0,weekKey:Kr(n),serveTimes:[],shellsEarned:0},wheel:{day:Jn(n),freeUsed:!1,adUsed:0},chest:{nextAt:n+ee.chestPeriod*1e3,spawned:!1,openedOnce:!1},login:{cycle:0,lastClaimDay:"",albumDay:0,albumClaimed:[]},vip:null};return du(t,n),t}function Nt(n,e){let t=gt(e),i=n.islands[e-1];if(!i||!t.stations.filter(c=>c.star).every(c=>{var u;return(u=i.stations[c.id])==null?void 0:u.built}))return 0;let s=t.stations.filter(c=>c.scale),r=Yr(e);if(!s.every(c=>{var u;return(((u=i.stations[c.id])==null?void 0:u.level)??1)>=r}))return 0;let a=su(e),o=s.every(c=>{var u;return(((u=i.stations[c.id])==null?void 0:u.level)??1)>=a}),l=t.mayor.every(c=>i.mayorClaimed.includes(c.id));return o&&l?3:o?2:1}function no(n,e=2){let t=n.profile.currentIsland,i=gt(t),s=n.islands[t-1];if(!s)return[];let r=Yr(t),a=[];for(let o of i.stations){if(!o.star&&!o.scale)continue;let l=s.stations[o.id];l&&(o.star&&!l.built&&o.kind!=="hire"?a.push({stationId:o.id,x:o.x,z:o.z,cost:Zn(n,i,o).cost,kind:"build",level:1}):o.scale&&l.built&&l.level<r&&a.push({stationId:o.id,x:o.x,z:o.z,cost:Zn(n,i,o).cost,kind:"upgrade",level:l.level+1}))}return a.sort((o,l)=>o.cost-l.cost),a.slice(0,e)}function qs(n){let e=1;for(let t of n.islands)t.unlocked&&(e=Math.max(e,t.id));return e}function tl(n,e){var i;let t=n.islands[e-1];return t?1+((i=t.stations.house)!=null&&i.built?2:0)+Math.min(2,t.prestige):1}function nl(n){let e=0;for(let t of Dn)t.cards.every(i=>n.collections.includes(i.id))&&e++;return e}function io(n,e){return n.lighthouse.filter(t=>Math.floor(t/10)===e).length}function hu(n){let e=io(n,1),t=ee.offlineCapSteps;return(t[Math.min(e,t.length-1)]??2)*3600}function Ki(n,e,t){let i=n.islands[e-1],s=io(n,0),r=n.lighthouse.filter(P=>Math.floor(P/10)===2),a=io(n,3),o=0,l=0,c=0,u=0,h=0,d=0,f=0,g=0,v=0,m=0;if(i)for(let P of i.crew){let V=n.helpers.find(q=>q.id===P),O=vn(P);if(!V||!O)continue;let G=1+ee.helperIncomeLevel*(V.level-1),X=O.perk;o+=(X.income??0)*G,l+=(X.speed??0)*G,c+=Math.round((X.cap??0)*G),u+=(X.offline??0)*G,h+=(X.lambda??0)*G,d+=(X.prod??0)*G,f+=(X.serve??0)*G,O.role==="cashier"?g++:O.role==="carrier"?v++:O.role==="farmer"?m++:h+=.04*G}t<n.profile.internUntil&&(g===0&&(g=1),v===0&&(v=1),d+=.12);for(let P of r){let V=P%10;(V===3||V===6||V===9)&&(c+=1)}let p=i?1+ee.prestigeBonus*i.prestige:1,x=1+ee.collectionBonus*nl(n),S=1+.05*s,_=ni(t)?ee.festivalIncome:1,I=1+o,E=1+u,T=p*x*S*_*I*E,C=t<n.profile.turboUntil?2:1,w=gf(t)?2:1,b=n.profile.tutorialStep<Ce.Hire&&n.profile.totalPlaytime<ee.tutorialWindow;return{M:T,active:T*C*w,speed:(1+.03*r.length)*(1+l),capBonus:c,lambda:(1+.03*a)*(1+h)*(b?ee.tutorialLambda:1),prod:(1+d)*(m>0?1+.2*m:1),serve:1/(1+f),offlineCap:hu(n),cashiers:g,carriers:v,farmers:m}}function ec(n,e){return Jh(n.profile.backpack,e.capBonus)}function yf(n,e,t){var l;let i=n.islands[e-1],s=gt(e);if(!(i!=null&&i.unlocked))return 0;let r=Ki(n,e,t),a=i.crew.length+ +(t<n.profile.internUntil);if(a<=0)return 0;let o=0;for(let c of s.stations){if(c.kind!=="producer"&&c.kind!=="processor")continue;let u=i.stations[c.id];if(!(u!=null&&u.built))continue;let h=((l=c.item?jr(s,c.item):void 0)==null?void 0:l.k)??c.k;o+=cf(e,h,u.level,r.M)*r.prod}return o*=1+.15*Math.max(0,a-1),o}function uu(n,e,t){let i=gt(e),s=n.islands[e-1];if(!s)return 0;let r=Ki(n,e,t),a=0,o=0,l=[];for(let f of i.stations){let g=s.stations[f.id];if(g!=null&&g.built&&((f.kind==="producer"||f.kind==="processor")&&(a+=1/Hr(g.level)*r.prod),f.kind==="stall"&&f.item)){o++;let v=jr(i,f.item);l.push(cs(e,(v==null?void 0:v.k)??1))}}if(!l.length||a<=0)return .2;let c=uf(o,xf(s))*r.lambda,u=l.reduce((f,g)=>f+g,0)/l.length,h=r.cashiers>0?1:.62,d=r.carriers>0?1:.8;return Math.min(a,c)*u*h*d*r.active}function xf(n){return Object.entries(n.stations).filter(([e,t])=>e.startsWith("decor_")&&t.built).length}function tc(n,e,t){let i=t??e,s=n.profile.lastSeen||i,r=(i-s)/1e3,a=r<-30;(a||r<0)&&(r=0);let o=hu(n),l=[];for(let u of Dn){let h=n.islands[u.id-1];if(!h.unlocked)continue;let d=df(yf(n,u.id,i),r,o,a);d>0&&(h.pendingOffline+=d,l.push({islandId:u.id,coins:d,seconds:Math.min(r,o)}))}let c=r>259200&&n.profile.welcomeShown<s;return c&&(n.profile.shells+=30,n.profile.turboTickets+=1,n.stats.shellsEarned+=30,n.profile.welcomeShown=i),r>=o&&o>=28799&&(n.profile.nightWatch=!0),n.profile.lastSeen=i,{seconds:r,rolledBack:a,lines:l,welcome:c,cap:o}}function nc(n,e){let t=0;for(let i of n.islands){let s=i.pendingOffline*(e?2:1);s<=0||(i.coins+=s,i.lifetimeEarned+=s,i.pendingOffline=0,t+=s)}return n.stats.earned+=t,n.stats.weekCoins+=t,t}function du(n,e){var a;let t=Jn(e),i=Kr(e);if(n.stats.lastLoginDay!==t){let o=new Date(n.stats.lastLoginDay),l=(new Date(t).getTime()-o.getTime())/864e5;n.stats.loginDays+=1,n.stats.loginStreak=l>0&&l<2.5?n.stats.loginStreak+1:1,n.stats.lastLoginDay=t}n.ads.day!==t&&(n.ads.day=t,n.ads.midgamesToday=0,n.ads.rewarded={},n.wheel.day=t,n.wheel.freeUsed=!1,n.wheel.adUsed=0),n.quests.day!==t&&(n.quests.day=t,n.quests.daily=bf(n,e),n.quests.dailyBonusClaimed=!1),n.quests.week!==i&&(n.quests.week=i,n.quests.weekly=Mf(n),n.quests.weeklyBonusClaimed=!1,n.stats.weekKey=i,n.stats.weekCoins=0);let s=((a=ni(e))==null?void 0:a.key)??"";if(n.events.weekKey!==s){if(n.events.tickets>=10){let o=Math.floor(n.events.tickets/ee.eventTicketToShells);n.profile.shells+=o,n.stats.shellsEarned+=o}n.events={weekKey:s,tickets:0,progress:0,claimedTiers:[],raceScore:0,fishingBest:n.events.fishingBest}}let r=lu(e);n.pass.season!==r&&(n.pass={season:r,xp:0,level:0,claimed:[],starClaimed:[],starTokens:n.pass.starTokens,starUnlocked:!1,overflowChests:0});for(let o of n.expeditions)!o.claimed&&o.endsAt}function ii(n){return new Qo(ru(n)||1)}var so=[{id:"sell",type:"sell",base:18},{id:"serve",type:"serve",base:16},{id:"upgrade",type:"upgrade",base:2},{id:"earn",type:"earn",base:80},{id:"chest",type:"chest",base:1},{id:"hire",type:"hire",base:1},{id:"play",type:"playtime",base:8},{id:"offline",type:"offline",base:1},{id:"decor",type:"decor",base:1}];function bf(n,e){let t=ii("daily"+Jn(e)+n.profile.createdAt),i=qs(n),s=[...so],r=[];for(;r.length<3&&s.length;){let a=t.int(s.length),o=s.splice(a,1)[0],l=o.base;o.type==="sell"&&(l=12+i*8),o.type==="serve"&&(l=10+i*6),o.type==="earn"&&(l=Math.round(cs(i,1)*(40+i*20))),o.type==="playtime"&&(l=8),r.push({template:o.id,type:o.type,target:l,progress:0,claimed:!1})}return r}function Mf(n){let e=qs(n);return[{template:"w_sell",type:"sell",target:200*e,progress:0,claimed:!1},{template:"w_earn",type:"earn",target:Math.round(cs(e,1)*500),progress:0,claimed:!1},{template:"w_daily",type:"daily",target:8,progress:0,claimed:!1},{template:"w_up",type:"upgrade",target:8,progress:0,claimed:!1},{template:"w_chest",type:"chest",target:3,progress:0,claimed:!1},{template:"w_exp",type:"expedition",target:1,progress:0,claimed:!1},{template:"w_card",type:"card",target:1,progress:0,claimed:!1}]}function Jt(n,e,t){var a;let i=[],s=(o,l)=>{o.claimed||(o.type==="sell"&&e.type==="sale"||o.type==="sell_item"&&e.type==="sale"&&o.item===e.item||o.type==="serve"&&e.type==="serve"?o.progress+=l:o.type==="upgrade"&&e.type==="upgrade"?o.progress+=1:o.type==="earn"&&e.type==="sale"?o.progress+=e.coins:o.type==="chest"&&e.type==="chest"||o.type==="hire"&&(e.type==="hire"||e.type==="helperlevel")?o.progress+=1:o.type==="playtime"&&e.type==="play"?o.progress+=e.dt/60:o.type==="offline"&&e.type==="offline"||o.type==="minigame"&&e.type==="minigame"||o.type==="vip"&&e.type==="vip"||o.type==="decor"&&e.type==="decor"||o.type==="build"&&e.type==="build"||o.type==="expedition"&&e.type==="expedition"||o.type==="card"&&e.type==="card"?o.progress+=1:o.type==="daily"&&e.type==="sale"&&(o.progress+=0))};if(e.type==="sale"){n.stats.sales+=1,n.stats.customers+=0;let o=n.islands[e.island-1];o&&(o.sales[e.item]=(o.sales[e.item]??0)+1,Object.values(o.sales).reduce((l,c)=>l+c,0)>=30&&Pr(n,e.island,"sell",i),o.playtime>=180&&Pr(n,e.island,"play",i)),n.stats.sales%10==0&&Jr(n,1),ni(t)&&(n.events.tickets+=1,n.events.progress+=1,n.events.raceScore+=e.coins),n.vip&&t<n.vip.expires&&n.vip.item===e.item&&n.profile.currentIsland>=7&&(n.vip.have+=1)}if(e.type==="serve"){n.stats.customers+=e.n,n.stats.bestQueue=Math.max(n.stats.bestQueue,e.queue),n.stats.serveTimes.push(t);let o=t-3e5;n.stats.serveTimes=n.stats.serveTimes.filter(l=>l>=o).slice(-130),n.stats.serveTimes.length>=100&&(n.profile.sprint=!0)}if(e.type==="build"){n.stats.stationsBuilt+=1;let o=n.islands[e.island-1];o&&((a=o.stations[e.station])==null||a.built)}if(e.type==="upgrade"&&(n.stats.upgrades+=1),e.type==="hire"&&(n.stats.hires+=1),e.type==="decor"&&(n.stats.decorPlaced+=1),e.type==="play"){let o=n.islands[e.island-1];o&&(o.playtime+=e.dt,o.playtime>=180&&Pr(n,e.island,"play",i))}for(let o of n.quests.daily)s(o,(e.type==="sale"||e.type==="serve")&&e.type==="serve"?e.n:1);for(let o of n.quests.weekly)s(o,e.type==="sale"?1:e.type==="serve"?e.n:1);(e.type==="sale"||e.type==="serve"||e.type==="build"||e.type==="upgrade"||e.type==="hire"||e.type==="decor")&&Sf(n,e,i);let r=e.type==="build"||e.type==="upgrade"?Nt(n,"island"in e?e.island:n.profile.currentIsland):null;if(i.push(...pn(n)),r!==null&&"island"in e){let o=Nt(n,e.island);o>r&&(i.push({kind:"star",island:e.island,stars:o}),e.island===12&&o===3&&(n.profile.magnate=!0))}return i}function Sf(n,e,t){if(!("island"in e))return;let i=gt(e.island),s=n.islands[e.island-1];if(s)for(let r of i.mayor){if(s.mayorClaimed.includes(r.id))continue;let a=0;r.type==="sell"&&e.type==="sale"&&(a=1),r.type==="sell_item"&&e.type==="sale"&&r.item===e.item&&(a=1),r.type==="serve"&&e.type==="serve"&&(a=e.n),r.type!=="build"||e.type!=="build"||r.stationId&&r.stationId!==e.station||(a=1),r.type==="hire"&&e.type==="hire"&&(a=1),r.type==="upgrade"&&e.type==="upgrade"&&(a=1),r.type==="decor"&&e.type==="decor"&&(a=1),r.type==="earn"&&e.type==="sale"&&(a=e.coins),a&&(s.mayorProgress[r.id]=(s.mayorProgress[r.id]??0)+a,s.mayorProgress[r.id]>=r.count&&(s.mayorClaimed.push(r.id),n.profile.shells+=3,n.stats.shellsEarned+=3,t.push({kind:"mayor",id:r.id,island:e.island}),i.mayor.every(o=>s.mayorClaimed.includes(o.id))&&Pr(n,e.island,"mayor",t)))}}function Pr(n,e,t,i){let s=`${e}:${t}`;n.collections.includes(s)||gt(e).cards.some(r=>r.id===s)&&(n.collections.push(s),i.push({kind:"card",id:s}),Jt(n,{type:"card"},Date.now()))}function wf(n){var a;let e=1,t=0;for(let o of n.islands){t+=o.crew.length;for(let l of Object.values(o.stations))e=Math.max(e,l.level)}let i=1,s=!1;for(let o of n.helpers)i=Math.max(i,o.level),((a=vn(o.id))==null?void 0:a.rarity)==="legendary"&&(s=!0);let r=0;for(let o of Dn)Nt(n,o.id)>=3&&r++;return{sales:n.stats.sales,earned:n.stats.earned,highestIsland:qs(n),stars3:r,crew:t,hires:n.stats.hires,legendary:s,helperLevel:i,stationLevel:e,stationsBuilt:n.stats.stationsBuilt,stackCap:Jh(n.profile.backpack,0),streak:n.stats.loginStreak,loginDays:n.stats.loginDays,dailyDone:n.stats.dailyDone,weeklySets:n.stats.weeklySets,eventsJoined:n.stats.eventsJoined,boatRaceWins:n.stats.boatRaceWins,sets:nl(n),lighthouse:n.lighthouse.length,cosmetics:n.cosmetics.length,decor:n.stats.decorPlaced,bestQueue:n.stats.bestQueue,sprint:n.profile.sprint,nightWatch:n.profile.nightWatch,prestiges:n.stats.prestiges,vip:n.stats.vipDone,jackpot:n.stats.wheelJackpot,expeditions:n.stats.expeditions,passLevel:Math.max(n.pass.level,n.stats.seasonMaxLevel),legendaryFish:n.stats.legendaryFish,magnate:n.profile.magnate}}function pn(n){let e=wf(n),t=[];for(let i of el)n.achievements.includes(i.id)||i.test(e)&&(n.achievements.push(i.id),n.profile.shells+=i.shells,n.stats.shellsEarned+=i.shells,t.push({kind:"achievement",id:i.id}));return t}function Jr(n,e){if(!(e<=0))if(n.pass.level>=30)for(n.pass.xp+=e;n.pass.xp>=ee.passOverflowXp;)n.pass.xp-=ee.passOverflowXp,n.pass.overflowChests++;else for(n.pass.xp+=e;n.pass.level<30&&n.pass.xp>=to(n.pass.level);)n.pass.xp-=to(n.pass.level),n.pass.level++,n.stats.seasonMaxLevel=Math.max(n.stats.seasonMaxLevel,n.pass.level)}function Ef(n,e,t){let i=(e==="daily"?n.quests.daily:n.quests.weekly)[t];if(!i||i.claimed||i.progress<i.target)return!1;i.claimed=!0;let s=e==="daily"?10:15,r=e==="daily"?40:80;return n.profile.shells+=s,n.stats.shellsEarned+=s,Jr(n,r),e==="daily"&&(n.stats.dailyDone+=1),!0}function Tf(n){if(n.quests.dailyBonusClaimed||!n.quests.daily.every(e=>e.claimed))return!1;n.quests.dailyBonusClaimed=!0,n.profile.shells+=20,n.profile.keys+=1,n.stats.shellsEarned+=20,Jr(n,30);for(let e of n.quests.weekly)e.type==="daily"&&(e.progress+=3);return!0}function Af(n,e){return n.quests.weeklyBonusClaimed||!n.quests.weekly.every(t=>t.claimed)?!1:(n.quests.weeklyBonusClaimed=!0,n.profile.shells+=45,n.stats.shellsEarned+=45,n.stats.weeklySets+=1,n.pass.starTokens+=3,n.pass.starTokens>=ee.starTokensToUnlock&&(n.pass.starUnlocked=!0),hs(n,"rare",e),Jr(n,100),!0)}function ic(n,e,t){let i=n.quests.daily[e];if(!i||i.claimed)return!1;let s=ii("reroll"+t+e+n.stats.dailyDone),r=qs(n),a=so[s.int(so.length)],o=a.base;return a.type==="sell"&&(o=12+r*8),a.type==="serve"&&(o=10+r*6),a.type==="earn"&&(o=Math.round(cs(r,1)*50)),n.quests.daily[e]={template:a.id+"r",type:a.type,target:o,progress:0,claimed:!1},!0}function sc(n,e,t){let i=Jn(e);if(n.login.lastClaimDay===i)return!1;let s=Kh[n.login.cycle%7],r=t?2:1;s.kind==="coins"&&(n.islands[n.profile.currentIsland-1].coins+=(s.amount??0)*r),s.kind==="shells"&&(n.profile.shells+=(s.amount??0)*r,n.stats.shellsEarned+=(s.amount??0)*r),s.kind==="key"&&(n.profile.keys+=r),s.kind==="turbo"&&(n.profile.turboTickets+=r),s.kind==="helper"&&(hs(n,"rare",ii("login"+i)),n.pass.starTokens+=1,n.pass.starTokens>=ee.starTokensToUnlock&&(n.pass.starUnlocked=!0)),n.login.lastClaimDay=i,n.login.cycle=(n.login.cycle+1)%7,n.login.albumDay=Math.min(28,n.login.albumDay+1);let a=n.login.albumDay;if([7,14,21,28].includes(a)&&!n.login.albumClaimed.includes(a)){n.login.albumClaimed.push(a);let o=a===7?"hat_flower":a===14?"frame_album":a===21?"trail_bubbles":"hat_crown";n.cosmetics.includes(o)||n.cosmetics.push(o)}return!0}function hs(n,e,t){let i=Zo.filter(r=>r.rarity===e&&!n.helpers.some(a=>a.id===r.id));if(!i.length){let r=e==="legendary"?40:e==="epic"?20:e==="rare"?12:8;return n.profile.shells+=r,n.stats.shellsEarned+=r,null}let s=i[t.int(i.length)];return n.helpers.push({id:s.id,level:1,islandId:null}),s.id}function Cf(n,e,t){let i=n.helpers.find(a=>a.id===e),s=n.islands[t-1];if(!i||!(s!=null&&s.unlocked)||i.islandId===t||s.crew.length>=tl(n,t)||n.expeditions.some(a=>a.helperId===e&&!a.claimed))return!1;let r=Yi(t,s.crew.length+1);if(s.coins<r)return!1;if(s.coins-=r,i.islandId){let a=n.islands[i.islandId-1];a&&(a.crew=a.crew.filter(o=>o!==e))}return i.islandId=t,s.crew.push(e),n.stats.hires+=1,!0}function Rf(n,e){let t=n.helpers.find(s=>s.id===e);if(!(t!=null&&t.islandId))return;let i=n.islands[t.islandId-1];i&&(i.crew=i.crew.filter(s=>s!==e)),t.islandId=null}function If(n,e){let t=n.helpers.find(s=>s.id===e);if(!t)return!1;let i=iu(t.level);return n.profile.shells<i?!1:(n.profile.shells-=i,t.level+=1,!0)}function Pf(n,e){if(n.lighthouse.includes(e)||e<0||e>=40||e%10>0&&!n.lighthouse.includes(e-1))return!1;let t=nu(n.lighthouse.length);return n.profile.shells<t?!1:(n.profile.shells-=t,n.lighthouse.push(e),!0)}function Lf(n,e){if(n.cosmetics.includes(e))return!1;let t=jh.find(i=>i.id===e);return!t||n.profile.shells<t.cost?!1:(n.profile.shells-=t.cost,n.cosmetics.push(e),!0)}function rc(n,e,t){if(e<1||e>n.pass.level||t&&!n.pass.starUnlocked)return!1;let i=t?n.pass.starClaimed:n.pass.claimed;if(i.includes(e))return!1;let s=eo(e,t);return kf(n,s.kind,s.amount,s.rarity,s.cosmetic),i.push(e),!0}function kf(n,e,t,i,s){e==="shells"?(n.profile.shells+=t,n.stats.shellsEarned+=t):e==="key"?n.profile.keys+=t:e==="coins"?n.islands[n.profile.currentIsland-1].coins+=t*20:e==="helper"&&i?hs(n,i,ii("reward"+n.profile.shells+n.helpers.length)):e==="cosmetic"&&s&&!n.cosmetics.includes(s)&&n.cosmetics.push(s)}function Df(n){return n.pass.level>=30?n.pass.overflowChests+=1:(n.pass.level+=1,n.pass.xp=0,n.stats.seasonMaxLevel=Math.max(n.stats.seasonMaxLevel,n.pass.level)),n.pass.starTokens+=1,n.pass.starTokens>=ee.starTokensToUnlock&&(n.pass.starUnlocked=!0),!0}function Nf(n){return n.pass.overflowChests<=0?!1:(n.pass.overflowChests--,n.profile.shells+=8,n.profile.keys+=1,n.stats.shellsEarned+=8,!0)}function Zn(n,e,t){let i=n.islands[e.id-1].stations[t.id];return t.kind==="backpack"?n.profile.backpack>=8?{kind:"max",cost:0}:{kind:"upgrade",cost:Yl(e.id,t.k,n.profile.backpack)}:i.built?t.kind==="decor"||t.kind==="house"||t.kind==="hire"||t.kind==="delivery"||t.kind==="attraction"||!t.scale||i.level>=ee.maxLevel?{kind:"max",cost:0}:{kind:"upgrade",cost:Yl(e.id,t.k,i.level)}:t.kind==="decor"?{kind:"build",cost:tu(e.id,t.k)}:t.kind==="hire"?{kind:"max",cost:0}:{kind:"build",cost:Qh(e.id,t.k)}}function Uf(n,e,t,i){let s=gt(e).stations.find(d=>d.id===t),r=n.islands[e-1];if(!s||!r)return[];let a=r.stations[t],o=Nt(n,e);if(s.kind==="backpack")return n.profile.backpack=Math.min(8,n.profile.backpack+1),a.invested=0,pn(n);if(a.built){let d=Kl(e);if(d>0&&s.scale)return a.timer=Math.round(d*.55),a.timerTotal=a.timer,a.pending="upgrade",a.invested=0,[];a.level=Math.min(ee.maxLevel,a.level+1),a.invested=0}else{let d=Kl(e);if(d>0)return a.timer=d,a.timerTotal=d,a.pending="build",a.invested=0,[];a.built=!0,a.level=1,a.invested=0}let l=!a.pending&&a.built&&a.level===1?"build":"upgrade",c=s.kind==="decor"&&a.level===1?"decor":l,u=Jt(n,c==="upgrade"?{type:"upgrade",island:e,station:t,level:a.level}:c==="decor"?{type:"decor",island:e}:{type:"build",island:e,station:t},i),h=Nt(n,e);return h>o&&u.push({kind:"star",island:e,stars:h}),e===12&&h===3&&(n.profile.magnate=!0),u}function fu(n,e,t,i){var u;let s=(u=n.islands[e-1])==null?void 0:u.stations[t];if(!s||s.timer>0||!s.pending)return[];let r=s.pending;s.pending=null;let a=Nt(n,e),o=gt(e).stations.find(h=>h.id===t);r==="build"?(s.built=!0,s.level=1):s.level=Math.min(ee.maxLevel,s.level+1);let l=Jt(n,r==="upgrade"?{type:"upgrade",island:e,station:t,level:s.level}:(o==null?void 0:o.kind)==="decor"?{type:"decor",island:e}:{type:"build",island:e,station:t},i),c=Nt(n,e);return c>a&&l.push({kind:"star",island:e,stars:c}),l}function Ff(n,e,t,i,s){var a;let r=(a=n.islands[e-1])==null?void 0:a.stations[t];return!r||r.timer<=0?[]:(r.timer=0,fu(n,e,t,s))}function pu(n,e){let t=e>=12?0:eu(e);return e>=12?{ok:!1,cost:0,reason:"end"}:Nt(n,e)<1?{ok:!1,cost:t,reason:"star"}:n.islands[e-1].coins<t?{ok:!1,cost:t,reason:"coins"}:{ok:!0,cost:t}}function Of(n,e){let t=pu(n,e);if(!t.ok)return!1;n.islands[e-1].coins-=t.cost;let i=n.islands[e];return i&&(i.unlocked=!0),n.profile.currentIsland=e+1,n.profile.playerX=zr.x,n.profile.playerZ=zr.z,!0}function Bf(n,e){if(e<6)return!1;let t=n.islands[e-1];if(!t||Nt(n,e)<1)return!1;for(let s of Object.values(t.stations))s.built&&(s.level=1),s.progress=0,s.invested=0,s.timer=0,s.pending=null;t.prestige+=1,n.stats.prestiges+=1;let i="hat_prestige";return n.cosmetics.includes(i)||n.cosmetics.push(i),!0}function mu(n){let e=n.profile.currentIsland,t=gt(e),i=n.islands[e-1],s=n.profile.tutorialStep,r=t.stations.find(d=>d.kind==="producer"&&d.built)??t.stations[0],a=t.stations.find(d=>d.kind==="stall"&&d.item===r.item)??t.stations.find(d=>d.kind==="stall"),o=t.stations.find(d=>d.kind==="till");if(s===Ce.Move)return{kind:"move",x:r.x,z:r.z};if(s===Ce.Pick)return{kind:"pickup",x:r.x,z:r.z,itemId:r.item,stationId:r.id};if(s===Ce.Drop)return{kind:"drop",x:a.x,z:a.z,itemId:a.item,stationId:a.id};if(s===Ce.Till)return{kind:"till",x:o.x,z:o.z,stationId:o.id};if(s===Ce.Chest||n.chest.spawned&&s<Ce.Done&&s>=Ce.Chest)return{kind:"chest",x:jl.x,z:jl.z};if(s===Ce.Turbo)return{kind:"turbo",x:0,z:0};if(s===Ce.Quests)return{kind:"quests",x:0,z:0};let l=t.stations.filter(d=>{var f;return d.star&&!((f=i.stations[d.id])!=null&&f.built)&&d.kind!=="hire"}).map(d=>({s:d,cost:Zn(n,t,d).cost})).sort((d,f)=>d.cost-f.cost);if(s===Ce.Build||s===Ce.Stall2){let d=s===Ce.Build?l.find(f=>f.s.kind==="producer")??l[0]:l.find(f=>f.s.kind==="stall")??l[0];if(d)return{kind:"build",x:d.s.x,z:d.s.z,cost:d.cost,stationId:d.s.id}}if(s===Ce.Hire){let d=t.stations.find(f=>f.kind==="hire");return{kind:"hire",x:d.x,z:d.z,cost:Yi(e,i.crew.length+1),stationId:d.id}}if(l.length&&Nt(n,e)<1){let d=l[0];return{kind:"build",x:d.s.x,z:d.s.z,cost:d.cost,stationId:d.s.id}}let c=t.stations.filter(d=>{var f,g;return d.scale&&((f=i.stations[d.id])==null?void 0:f.built)&&(((g=i.stations[d.id])==null?void 0:g.level)??1)<Yr(e)}).map(d=>{var f;return{s:d,cost:Zn(n,t,d).cost,level:(((f=i.stations[d.id])==null?void 0:f.level)??1)+1}}).sort((d,f)=>d.cost-f.cost);if(c[0]&&Nt(n,e)<1)return{kind:"upgrade",x:c[0].s.x,z:c[0].s.z,cost:c[0].cost,stationId:c[0].s.id,level:c[0].level};if(i.crew.length===0){let d=t.stations.find(f=>f.kind==="hire");return{kind:"hire",x:d.x,z:d.z,cost:Yi(e,1),stationId:d.id}}let u=Nt(n,e);if(u<2){let d=su(e),f=t.stations.filter(g=>{var v,m;return g.scale&&((v=i.stations[g.id])==null?void 0:v.built)&&(((m=i.stations[g.id])==null?void 0:m.level)??1)<d}).map(g=>{var v;return{s:g,cost:Zn(n,t,g).cost,level:(((v=i.stations[g.id])==null?void 0:v.level)??1)+1}}).sort((g,v)=>g.cost-v.cost);if(f[0])return{kind:"upgrade",x:f[0].s.x,z:f[0].s.z,cost:f[0].cost,stationId:f[0].s.id,level:f[0].level}}if(u>=1&&e<12)return{kind:"sail",x:Xl.x,z:Xl.z,cost:eu(e)};let h=t.stations.find(d=>{var f;return d.kind==="decor"&&!((f=i.stations[d.id])!=null&&f.built)});return h?{kind:"decor",x:h.x,z:h.z,cost:tu(e,h.k),stationId:h.id}:{kind:"play",x:r.x,z:r.z,stationId:r.id}}function ac(n,e){var s,r;let t=!1,i=a=>{n.profile.tutorialStep!==a&&(n.profile.tutorialStep=a,t=!0)};for(let a=0;a<12;a++){let o=n.profile.tutorialStep,l=n.islands[0],c=(s=l.stations.field_cabbage)==null?void 0:s.built,u=(r=l.stations.stall_cabbage)==null?void 0:r.built;if(o===Ce.Move&&e.moved)i(Ce.Pick);else if(o===Ce.Pick&&e.stack>0)i(Ce.Drop);else if(o===Ce.Drop&&e.dropped)i(Ce.Till);else if(o===Ce.Till&&e.served)i(Ce.Build);else if(o===Ce.Build&&c)i(Ce.Stall2);else if(o===Ce.Stall2&&u)i(Ce.Hire);else if(o===Ce.Hire&&(e.hired||l.crew.length>0))i(Ce.Chest);else if(o===Ce.Chest&&(e.chestOpened||n.chest.openedOnce))i(Ce.Turbo);else if(o===Ce.Turbo&&e.turboDismissed)i(Ce.Free);else if(o===Ce.Free&&n.profile.totalPlaytime>=900)i(Ce.Quests);else break}return n.profile.tutorialStep===Ce.Chest&&(n.chest.spawned=!0),t}function zf(n,e,t){let i=Ps.reduce((c,u)=>c+u.weight,0),s=e.next()*i,r=0;for(let c=0;c<Ps.length;c++)if(s-=Ps[c].weight,s<=0){r=c;break}let a=Ps[r],o=uu(n,n.profile.currentIsland,t);a.kind==="coins"&&(n.islands[n.profile.currentIsland-1].coins+=Math.max(20,Math.round(o*(r===0?30:90)))),a.kind==="shells"&&(n.profile.shells+=a.amount??5,n.stats.shellsEarned+=a.amount??5),a.kind==="key"&&(n.profile.keys+=1),a.kind==="turbo"&&(n.profile.turboUntil=Math.max(n.profile.turboUntil,t)+ee.turboSeconds*1e3);let l=!1;return a.kind==="jackpot"&&(l=!0,n.stats.wheelJackpot=!0,hs(n,"rare",e),n.profile.shells+=25,n.stats.shellsEarned+=25),{index:r,jackpot:l}}function Hf(n,e,t){let i=uu(n,n.profile.currentIsland,t),s=e.chance(.45),r=s?0:Math.max(30,Math.round(i*ee.chestIncomeSeconds)),a=s?5+e.int(16):0;r&&(n.islands[n.profile.currentIsland-1].coins+=r),a&&(n.profile.shells+=a,n.stats.shellsEarned+=a);let o=null;e.chance(.35)&&(o=hs(n,e.chance(.15)?"rare":"common",e));let l=!1;if(e.chance(.4)){let c=n.profile.currentIsland;n.collections.includes(`${c}:chest`)||(n.collections.push(`${c}:chest`),l=!0)}return n.stats.chests+=1,n.chest.openedOnce=!0,n.chest.spawned=!1,n.chest.nextAt=t+ee.chestPeriod*1e3,{coins:r,shells:a,helper:o,card:l}}function Vf(n,e,t,i){if(!n.helpers.find(l=>l.id===e)||n.expeditions.some(l=>!l.claimed&&l.helperId===e)||n.expeditions.filter(l=>!l.claimed).length>=2)return!1;let s=ii("exp"+i+e),r=(t===1?4:t===4?10:18)+s.int(4),a=+(t===8),o=s.chance(.4)?`${n.profile.currentIsland}:expedition`:void 0;return n.expeditions.push({id:`e${i.toString(36)}`,islandId:n.profile.currentIsland,helperId:e,hours:t,startedAt:i,endsAt:i+t*3600*1e3,claimed:!1,shells:r,keys:a,card:o}),!0}function Gf(n,e,t){let i=n.expeditions.find(s=>s.id===e);return!i||i.claimed||i.endsAt>t?!1:(i.claimed=!0,n.profile.shells+=i.shells,n.stats.shellsEarned+=i.shells,n.profile.keys+=i.keys,n.stats.expeditions+=1,i.card&&!n.collections.includes(i.card)&&n.collections.push(i.card),Jt(n,{type:"expedition"},t),!0)}function Wf(n,e){let t=n.expeditions.find(i=>i.id===e);return!t||t.claimed?!1:(t.endsAt=Math.max(t.startedAt,t.endsAt-36e5),!0)}function $f(n,e,t){n.events.tickets+=Math.max(1,Math.round(e)),n.events.fishingBest=Math.max(n.events.fishingBest,e),t>=3&&(n.stats.legendaryFish=!0),Jt(n,{type:"minigame"},Date.now())}function qf(n,e){if(n.events.claimedTiers.includes(e))return!1;let t=Yh[e];if(t===void 0||n.events.tickets<t)return!1;n.events.claimedTiers.push(e);let i=[5,10,0,20,0,30][e]??10;return i&&(n.profile.shells+=i,n.stats.shellsEarned+=i),e===2&&(n.profile.keys+=1),e===4&&!n.cosmetics.includes("trail_stars")&&n.cosmetics.push("trail_stars"),e===5&&hs(n,"rare",ii("event"+e+n.events.weekKey)),!0}function gu(n,e){var s;let t=ii("race"+(((s=ni(e))==null?void 0:s.key)??Kr(e))),i=[];for(let r=0;r<29;r++){let a=Math.round(t.next()**.65*(900+qs(n)*400));i.push({name:Br[r%Br.length],score:a,you:!1})}return i.push({name:n.profile.name,score:Math.floor(n.events.raceScore),you:!0}),i.sort((r,a)=>a.score-r.score),i}function Xf(n,e){var s;let t=((s=ni(e))==null?void 0:s.key)??"";if(!t||n.profile.raceClaimedWeek===t)return-1;let i=gu(n,e).findIndex(r=>r.you);return n.profile.raceClaimedWeek=t,i===0?(n.stats.boatRaceWins+=1,n.cosmetics.includes("frame_race")||n.cosmetics.push("frame_race"),n.profile.shells+=40,n.stats.shellsEarned+=40):i<3?(n.cosmetics.includes("frame_race")||n.cosmetics.push("frame_race"),n.profile.shells+=20,n.stats.shellsEarned+=20):i<10&&(n.profile.shells+=8,n.stats.shellsEarned+=8),i}function jf(n,e){let t=ii("league"+Kr(e)),i=[];for(let s=0;s<19;s++)i.push({name:Br[s*3%Br.length],score:Math.round(t.next()**.7*(2e3+n.stats.weekCoins*.8+500)),you:!1});return i.push({name:n.profile.name,score:Math.floor(n.stats.weekCoins),you:!0}),i.sort((s,r)=>r.score-s.score),i}function Zr(n,e,t){if(!e)return"";let i=jr(n,e);return i?i.name[t]:e}function la(n,e){let t=jr(n,e);return cs(n.id,(t==null?void 0:t.k)??1)}function Yf(n,e){let t=n.islands[e-1];if(!t||t.crew.length>=tl(n,e))return null;let i=n.helpers.filter(r=>!r.islandId&&!n.expeditions.some(a=>a.helperId===r.id&&!a.claimed));if(!i.length)return null;let s=new Set(t.crew.map(r=>{var a;return(a=vn(r))==null?void 0:a.role}));for(let r of["cashier","carrier","farmer","general"]){if(s.has(r))continue;let a=i.find(o=>{var l;return((l=vn(o.id))==null?void 0:l.role)===r});if(a)return a}return i[0]??null}function ca(n,e){n.profile.turboUntil=Math.max(e,n.profile.turboUntil)+ee.turboSeconds*1e3}function oc(n,e,t){n.profile.internUntil=Math.max(e,n.profile.internUntil)+ee.internSeconds*1e3,t&&(n.profile.freeInternAt=e)}function vu(n,e){return!n.profile.freeInternAt||e-n.profile.freeInternAt>=ee.freeInternPeriod*1e3}function Kf(n,e,t){if(n.profile.currentIsland<7||n.vip)return;let i=gt(n.profile.currentIsland).goods.filter(s=>s.sell);i.length&&(n.vip={item:i[t.int(i.length)].id,count:4+t.int(4),have:0,expires:e+ee.vipDuration*1e3,reward:ee.vipReward+n.profile.currentIsland})}function lc(n,e){if(!n.vip||n.vip.have<n.vip.count)return!1;let t=n.vip.reward*(e?2:1);return n.profile.shells+=t,n.stats.shellsEarned+=t,n.stats.vipDone+=1,n.vip=null,Jt(n,{type:"vip"},Date.now()),!0}function _u(n){return n.islands.filter(e=>e.pendingOffline>1).map(e=>({islandId:e.id,coins:e.pendingOffline}))}function Jf(){return{get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}},remove(n){try{localStorage.removeItem(n)}catch{}}}}function Zf(n){let e=JSON.stringify(n);return(0,ou.compressToUTF16)(JSON.stringify({v:n.v,json:e,sum:au(e)}))}function cc(n){if(!n)return null;try{let e=(0,ou.decompressFromUTF16)(n)??n,t=JSON.parse(e);if(!t.json||!t.sum||au(t.json)!==t.sum)return null;let i=JSON.parse(t.json);return!i||typeof i.v!="number"?null:i}catch{return null}}function hc(n,e){return n?e?n.profile.totalPlaytime===e.profile.totalPlaytime?n.t>=e.t?n:e:n.profile.totalPlaytime>e.profile.totalPlaytime?n:e:n:e}var ha=Ed,ua=n=>Td(n),Qf=class{constructor(n,e){F(this,"storage");F(this,"cloud");this.storage=n,this.cloud=e}readLocal(){let n=this.storage.get(ha)||"A",e=n==="A"?"B":"A";return hc(cc(this.storage.get(ua(n))),cc(this.storage.get(ua(e))))}write(n){n.v=n.v||1,n.t=Date.now();let e=(this.storage.get(ha)||"A")==="A"?"B":"A";this.storage.set(ua(e),Zf(n)),this.storage.set(ha,e)}async load(){let n=this.readLocal(),e=null;if(this.cloud)try{e=await Promise.race([this.cloud.pull(),new Promise(t=>setTimeout(()=>t(null),1200))])}catch{e=null}return hc(n,e)??cu()}async push(n){if(this.write(n),this.cloud)try{await this.cloud.push(n)}catch{}}},uc=class{constructor(n,e,t=1){F(this,"save");F(this,"islandId");F(this,"rng");F(this,"px");F(this,"pz");F(this,"yaw");F(this,"moving",!1);F(this,"stackItem",null);F(this,"stackCount",0);F(this,"customers",[]);F(this,"coins",[]);F(this,"fx",[]);F(this,"notes",[]);F(this,"helpers",[]);F(this,"queueLen",0);F(this,"time",0);F(this,"order",1);F(this,"cid",1);F(this,"coinId",1);F(this,"pickupCd",0);F(this,"dropCd",0);F(this,"serveCd",0);F(this,"carryCd",0);F(this,"spawnAcc",0);F(this,"attractAcc",0);F(this,"playAcc",0);F(this,"vipAcc",0);F(this,"combo",0);F(this,"comboT",0);F(this,"mods");this.save=n,this.islandId=e,this.rng=new Qo(t),this.px=n.profile.playerX,this.pz=n.profile.playerZ,this.yaw=n.profile.playerYaw,this.mods=Ki(n,e,Date.now())}get def(){return gt(this.islandId)}get island(){return this.save.islands[this.islandId-1]}tick(n,e,t,i,s){if(s!=="pause"){if(this.mods=Ki(this.save,this.islandId,i),this.time+=n,this.fx.length=0,s==="play"?this.move(n,e,t):this.moving=!1,this.tickStations(n),this.tickTimers(n,i),s==="play"&&(this.tickHands(n,i),this.tickPads(n,i)),this.tickHelpers(n),this.tickCustomers(n,i),this.tickServe(n,i),this.tickCoins(n,i),this.tickSpecial(n,i),this.comboT-=n,this.comboT<=0&&(this.combo=0),this.playAcc+=n,this.playAcc>=5){let r=this.playAcc;this.playAcc=0,this.save.profile.totalPlaytime+=r,this.notes.push(...Jt(this.save,{type:"play",island:this.islandId,dt:r},i))}this.persist()}}persist(){this.save.profile.playerX=this.px,this.save.profile.playerZ=this.pz,this.save.profile.playerYaw=this.yaw,this.save.profile.currentIsland=this.islandId}move(n,e,t){let i=Math.hypot(e,t);i>1&&(e/=i,t/=i,i=1);let s=5*this.mods.speed*(this.stackCount>0?.92:1),r=Qd(this.px+e*s*n,this.pz+t*s*n,this.px,this.pz);this.px=r.x,this.pz=r.z,this.moving=i>.12,this.moving&&(this.yaw=Math.atan2(e,t))}station(n){return this.def.stations.find(e=>e.id===n)}tickStations(n){for(let e of this.def.stations){let t=this.island.stations[e.id];if(t!=null&&t.built){if(e.kind==="producer"){let i=ee.stockMaxBase+t.level;if(t.stock>=i)continue;t.progress+=n*this.mods.prod;let s=Hr(t.level);t.progress>=s&&(t.progress=0,t.stock++,this.fx.push({type:"pop",x:e.x,z:e.z}))}else if(e.kind==="processor"){let i=ee.stockMaxBase+t.level;if(t.inputStock<=0||t.stock>=i)continue;t.progress+=n*this.mods.prod,t.progress>=Hr(t.level)&&(t.progress=0,t.inputStock--,t.stock++,this.fx.push({type:"pop",x:e.x,z:e.z}))}}}}tickTimers(n,e){for(let t of this.def.stations){if(t.kind==="delivery")continue;let i=this.island.stations[t.id];!i||i.timer<=0||!i.pending||(i.timer=Math.max(0,i.timer-n),i.timer===0&&this.notes.push(...fu(this.save,this.islandId,t.id,e)))}}canCarry(n){return this.def.stations.some(e=>{var t;return(t=this.island.stations[e.id])!=null&&t.built?e.kind==="stall"&&e.item===n||e.kind==="processor"&&e.input===n||e.kind==="delivery"&&e.item===n:!1})}nearest(n){let e=null,t=ee.zoneRadius;for(let i of this.def.stations){let s=this.island.stations[i.id];if(!(s!=null&&s.built))continue;let r=Math.hypot(this.px-i.x,this.pz-i.z);if(!(r>t))if(n==="pick"){if((i.kind==="producer"||i.kind==="processor")&&s.stock>0){if(i.item&&!this.canCarry(i.item)||this.stackCount>0&&this.stackItem!==i.item||this.stackCount>=ec(this.save,this.mods))continue;e=i,t=r}}else this.stackCount>0&&this.stackItem&&(i.kind==="stall"&&i.item===this.stackItem&&s.stock<ee.stallMaxBase+s.level||i.kind==="processor"&&i.input===this.stackItem&&s.inputStock<8||i.kind==="delivery"&&i.item===this.stackItem&&s.stock<ee.deliveryBatch)&&(e=i,t=r)}return e}tickHands(n,e){this.pickupCd-=n,this.dropCd-=n;let t=this.nearest("drop");if(t&&this.dropCd<=0){let s=this.island.stations[t.id];t.kind==="stall"||t.kind==="delivery"?s.stock++:s.inputStock++,this.stackCount--,this.stackCount<=0&&(this.stackCount=0,this.stackItem=null),this.dropCd=ee.dropInterval,this.combo++,this.comboT=.7,this.fx.push({type:"drop",x:t.x,z:t.z,amount:this.combo});return}let i=this.nearest("pick");if(i&&this.pickupCd<=0&&!t){let s=this.island.stations[i.id];s.stock--,this.stackItem=i.item??this.stackItem,this.stackCount++,this.pickupCd=ee.pickupInterval,this.combo++,this.comboT=.7,this.fx.push({type:"pop",x:i.x,z:i.z,amount:this.combo})}}tickPads(n,e){var u;if(this.nearest("pick")||this.nearest("drop"))return;let t=new Set(no(this.save,2).map(h=>h.stationId)),i=null,s=ee.zoneRadius;for(let h of this.def.stations){let d=Math.hypot(this.px-h.x,this.pz-h.z);d<s&&(i=h,s=d)}if(!i||i.kind!=="hire"&&!t.has(i.id))return;let r=this.island.stations[i.id];if(r.timer>0)return;if(i.kind==="hire"){this.tickHire(n);return}let a=Zn(this.save,this.def,i);if(a.kind==="max"||a.cost<=0)return;let o=a.cost-r.invested;if(o<=0&&(r.invested=a.cost),this.island.coins<=0)return;let l=Math.max(40,o/.85),c=Math.min(this.island.coins,l*n,Math.max(0,a.cost-r.invested));if(!(c<=0)&&(this.island.coins-=c,r.invested+=c,Math.random()<n*8&&this.fx.push({type:"coin",x:i.x,z:i.z}),r.invested>=a.cost-.01)){r.invested=0;let h=Uf(this.save,this.islandId,i.id,e);this.notes.push(...h);let d=(u=this.island.stations[i.id])==null?void 0:u.built;this.fx.push({type:d?"build":"text",x:i.x,z:i.z,text:d?"+1":"…"}),h.some(f=>f.kind==="star")?this.fx.push({type:"fanfare",x:this.px,z:this.pz}):this.fx.push({type:"confetti",x:i.x,z:i.z})}}tickHire(n){let e=Yf(this.save,this.islandId);if(!e)return;let t=Yi(this.islandId,this.island.crew.length+1),i=this.station("hire");if(!i)return;let s=this.island.stations.hire,r=t-s.invested;this.island.coins<=0||r<=0&&s.invested;let a=Math.max(40,r/.85),o=Math.min(this.island.coins,a*n,Math.max(0,t-s.invested));o<=0||(this.island.coins-=o,s.invested+=o,s.invested>=t-.01&&(s.invested=0,e.islandId=this.islandId,this.island.crew.push(e.id),this.notes.push(...Jt(this.save,{type:"hire",island:this.islandId},Date.now())),this.fx.push({type:"confetti",x:i.x,z:i.z,text:"+"})))}tickHelpers(n){this.carryCd-=n;let e=[],t=this.def.stations.find(r=>r.kind==="till"),i=0,s=this.island.crew.map(r=>{var a;return{id:r,role:((a=vn(r))==null?void 0:a.role)??"general"}});for(let r of s)if(r.role==="cashier")e.push({id:r.id,x:t.x,z:t.z+.85,moving:!1,carry:!1});else if(r.role==="carrier"||r.role==="general"){i++;let a=(this.time*.45+i*.37)%1,o=this.def.stations.find(d=>{var f;return(d.kind==="producer"||d.kind==="processor")&&((f=this.island.stations[d.id])==null?void 0:f.built)}),l=this.def.stations.find(d=>{var f;return d.kind==="stall"&&((f=this.island.stations[d.id])==null?void 0:f.built)}),c=o??t,u=l??t,h=a<.5?a*2:(1-a)*2;e.push({id:r.id,x:c.x+(u.x-c.x)*h,z:c.z+(u.z-c.z)*h,moving:!0,carry:a<.5})}else{let a=this.def.stations.find(o=>{var l;return o.kind==="producer"&&((l=this.island.stations[o.id])==null?void 0:l.built)})??t;e.push({id:r.id,x:a.x+1.1,z:a.z+.4,moving:!1,carry:!1})}if(this.mods.carriers>0&&this.carryCd<=0){let r=Math.max(1,this.mods.carriers);for(let a=0;a<r;a++)this.autoCarry();this.carryCd=ee.carrierInterval/Math.max(1,this.mods.speed)}this.helpers=e}autoCarry(){for(let n of this.def.stations){let e=this.island.stations[n.id];if(!(e!=null&&e.built)||e.stock<=0||n.kind!=="producer"&&n.kind!=="processor")continue;let t=n.item;if(!t)continue;let i=this.def.stations.find(r=>{let a=this.island.stations[r.id];return a!=null&&a.built?r.kind==="processor"&&r.input===t&&a.inputStock<8||r.kind==="stall"&&r.item===t&&a.stock<ee.stallMaxBase+a.level:!1});if(!i)continue;let s=this.island.stations[i.id];e.stock--,i.kind==="processor"?s.inputStock++:s.stock++;return}}tickCustomers(n,e){var o;let t=this.def.stations.filter(l=>{var c;return l.kind==="stall"&&((c=this.island.stations[l.id])==null?void 0:c.built)}),i=t.filter(l=>{var c;return(((c=this.island.stations[l.id])==null?void 0:c.stock)??0)>0}),s=(.4+.08*t.length+.05*this.def.stations.filter(l=>{var c;return l.kind==="decor"&&((c=this.island.stations[l.id])==null?void 0:c.built)}).length)*this.mods.lambda;this.spawnAcc+=n*s;let r=this.def.stations.find(l=>l.kind==="till");if(this.spawnAcc>=1&&this.customers.length<ee.queueCap&&i.length){--this.spawnAcc;let l=i[this.rng.int(i.length)],c=ep(this.save,this.islandId)>=1&&this.rng.chance(.08);this.customers.push({id:this.cid++,kind:this.def.customers[this.rng.int(this.def.customers.length)],x:(this.rng.next()-.5)*1.2,z:10.5,state:"toStall",stallId:l.id,item:null,order:this.order++,timer:0,rare:c})}else this.spawnAcc>2&&(this.spawnAcc=2);let a=1.85;for(let l of this.customers)if(l.state==="toStall"||l.state==="wait"){let c=l.stallId?this.station(l.stallId):null;if(!c){l.state="leave";continue}let u=((o=this.island.stations[c.id])==null?void 0:o.stock)??0;u<=0&&l.state==="toStall"&&(l.state="wait",l.timer=2.2);let h=c.x-1.25,d=c.z;this.stepToward(l,h,d,a*n)&&l.state==="toStall"&&u>0&&(this.island.stations[c.id].stock--,l.item=c.item??null,l.state="toTill",this.fx.push({type:"pop",x:l.x,z:l.z})),l.state==="wait"&&(l.timer-=n,u>0?l.state="toStall":l.timer<=0&&(l.state="leave"))}else if(l.state==="toTill"){let c=this.queueIndex(l),u=r.x,h=r.z+1.35+c*.78;this.stepToward(l,u,h,a*n)&&(l.state="queue")}else if(l.state==="queue"){let c=this.queueIndex(l),u=r.x,h=r.z+1.35+c*.78;this.stepToward(l,u,h,a*n)}else l.state==="sit"?(l.timer-=n,l.timer<=0&&(l.state="leave")):l.state==="leave"&&this.stepToward(l,0,13.5,a*n)&&(l.state="leave");this.customers=this.customers.filter(l=>!(l.state==="leave"&&l.z>12.6&&Math.abs(l.x)<1.8)),this.queueLen=this.customers.filter(l=>l.state==="queue"||l.state==="toTill").length,this.queueLen>this.save.stats.bestQueue&&(this.save.stats.bestQueue=this.queueLen)}queueIndex(n){return this.customers.filter(e=>(e.state==="queue"||e.state==="toTill")&&e.order<n.order).length}stepToward(n,e,t,i){let s=e-n.x,r=t-n.z,a=Math.hypot(s,r);return a<=i||a<.12?(n.x=e,n.z=t,!0):(n.x+=s/a*i,n.z+=r/a*i,!1)}tickServe(n,e){let t=this.def.stations.find(c=>c.kind==="till");if(!t)return;let i=this.island.stations.till,s=Math.hypot(this.px-t.x,this.pz-t.z)<ee.zoneRadius+.2||this.mods.cashiers>0,r=this.customers.filter(c=>c.state==="queue").sort((c,u)=>c.order-u.order)[0];if(!r||!s||!i){this.serveCd=0;return}this.serveCd+=n;let a=ee.serviceBase*.96**(i.level-1)*this.mods.serve;if(this.serveCd<a)return;this.serveCd=0;let o=r.item??"carrot",l=Math.max(1,Math.round(la(this.def,o)*this.mods.active));if(this.burstCoins(t.x,t.z+.4,l),r.rare){let c=`${this.islandId}:guest`;this.save.collections.includes(c)||(this.save.collections.push(c),this.notes.push({kind:"card",id:c}))}if(this.notes.push(...Jt(this.save,{type:"serve",island:this.islandId,n:1,queue:this.queueLen},e)),this.notes.push(...Jt(this.save,{type:"sale",island:this.islandId,item:o,coins:l},e)),this.fx.push({type:"ding",x:t.x,z:t.z,text:`+${l}`,amount:l}),this.def.seated&&this.def.seats.length){let c=this.def.seats[r.id%this.def.seats.length];r.state="sit",r.x=c.x,r.z=c.z,r.timer=2.4,r.item=null}else r.state="leave",r.item=null}burstCoins(n,e,t){let i=Math.min(6,Math.max(1,Math.round(Math.sqrt(t)))),s=t;for(let r=0;r<i;r++){let a=r===i-1?s:Math.max(1,Math.round(t/i));s-=a;let o=this.rng.next()*Math.PI*2;this.coins.push({id:this.coinId++,x:n,z:e,vx:Math.cos(o)*(1.4+this.rng.next()),vz:Math.sin(o)*(1.4+this.rng.next()),value:Math.max(1,a),age:0})}}tickCoins(n,e){let t=[];for(let i of this.coins){if(i.age+=n,i.age<ee.magnetDelay){i.x+=i.vx*n,i.z+=i.vz*n,i.vx*=.92,i.vz*=.92,t.push(i);continue}let s=this.px-i.x,r=this.pz-i.z,a=Math.hypot(s,r);if(a<ee.magnetRadius||i.age>2.4){if(a<.45){this.island.coins+=i.value,this.island.lifetimeEarned+=i.value,this.save.stats.earned+=i.value,this.save.stats.weekCoins+=i.value,this.fx.push({type:"text",x:this.px,z:this.pz,text:`+${i.value}`});continue}i.x+=s/(a||1)*12*n,i.z+=r/(a||1)*12*n}i.age<12&&t.push(i)}this.coins=t}tickSpecial(n,e){var s,r;e>=this.save.chest.nextAt&&(this.save.chest.spawned=!0);let t=this.def.stations.find(a=>a.kind==="attraction");t&&((s=this.island.stations.attraction)!=null&&s.built)&&(this.island.crew.length>0||Math.hypot(this.px-t.x,this.pz-t.z)<2)&&(this.attractAcc+=n,this.attractAcc>=ee.attractionPeriod&&(this.attractAcc=0,this.burstCoins(t.x,t.z,Math.max(2,Math.round(la(this.def,((r=this.def.goods[0])==null?void 0:r.id)??"carrot"))))));let i=this.def.stations.find(a=>a.kind==="delivery");if(i){let a=this.island.stations.delivery;if(a!=null&&a.built&&a.stock>=ee.deliveryBatch&&a.timer<=0&&(a.timer=ee.deliverySeconds,a.timerTotal=ee.deliverySeconds),(a==null?void 0:a.built)&&a.timer>0&&a.stock>=ee.deliveryBatch&&(a.timer=Math.max(0,a.timer-n),a.timer<=0)){let o=Math.round(la(this.def,i.item??"coconut")*a.stock*ee.deliveryBonus);a.stock=0,a.timer=0,this.burstCoins(i.x,i.z,o),this.fx.push({type:"fanfare",x:i.x,z:i.z,text:`+${o}`})}}this.vipAcc+=n,this.vipAcc>25&&(this.vipAcc=0,!this.save.vip&&this.rng.chance(.4)&&Kf(this.save,e,this.rng)),this.save.vip&&e>this.save.vip.expires&&this.save.vip.have<this.save.vip.count&&(this.save.vip=null)}suggestTarget(){let n=this.def.stations.find(o=>o.kind==="till");if(this.stackCount>0&&this.stackItem){let o=this.def.stations.find(u=>{var h;return u.kind==="stall"&&u.item===this.stackItem&&((h=this.island.stations[u.id])==null?void 0:h.built)}),l=this.def.stations.find(u=>{var h;return u.kind==="processor"&&u.input===this.stackItem&&((h=this.island.stations[u.id])==null?void 0:h.built)}),c=o??l;if(c)return{x:c.x,z:c.z}}let e=this.customers.some(o=>o.state==="queue"),t=this.def.stations.some(o=>{var l;return o.kind==="stall"&&(((l=this.island.stations[o.id])==null?void 0:l.stock)??0)>2});if(e&&this.mods.cashiers===0&&t)return{x:n.x,z:n.z};let i=no(this.save,1)[0];if(i&&this.stackCount===0&&this.island.coins>=i.cost)return{x:i.x,z:i.z};let s=null,r=-1;for(let o of this.def.stations){if(o.kind!=="producer"&&o.kind!=="processor")continue;let l=this.island.stations[o.id];if(!(l!=null&&l.built)||l.stock<=0||o.item&&!this.canCarry(o.item)||this.stackItem&&this.stackItem!==o.item)continue;let c=l.stock-Math.hypot(this.px-o.x,this.pz-o.z)*.15;c>r&&(r=c,s=o)}if(s&&this.stackCount<ec(this.save,this.mods))return{x:s.x,z:s.z};let a=this.def.stations.find(o=>{var l;return o.kind==="producer"&&((l=this.island.stations[o.id])==null?void 0:l.built)});return a?{x:a.x,z:a.z}:{x:n.x,z:n.z}}};function ep(n,e){let t=gt(e),i=n.islands[e-1];return i?+!!t.stations.filter(s=>s.star).every(s=>{var r;return(r=i.stations[s.id])==null?void 0:r.built}):0}var ht="#3B2414";function tp(n){return`<svg class="ico" viewBox="0 0 32 32" aria-hidden="true">${n}</svg>`}var dc={coin:`<circle cx="16" cy="16" r="11" fill="#FFD15C" stroke="${ht}" stroke-width="2.4"/><circle cx="16" cy="16" r="6" fill="none" stroke="${ht}" stroke-width="2"/>`,shell:`<path d="M8 20c2-8 14-10 16-2 1 6-4 10-8 8-3 2-8 0-8-6z" fill="#FF8A6A" stroke="${ht}" stroke-width="2.2"/>`,gear:`<circle cx="16" cy="16" r="5" fill="#FFF6E0" stroke="${ht}" stroke-width="2.2"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4M7 7l3 3M22 22l3 3M7 25l3-3M22 10l3-3" stroke="${ht}" stroke-width="2.2" stroke-linecap="round"/>`,gift:`<rect x="6" y="14" width="20" height="12" rx="2" fill="#FF7A59" stroke="${ht}" stroke-width="2.2"/><path d="M8 14h16v-3H8zM16 8v18" stroke="${ht}" stroke-width="2.2"/><path d="M16 11c-3-4-7-1-4 1h4c3-2-1-5-4-1" fill="#FFD15C" stroke="${ht}" stroke-width="1.6"/>`,cal:`<rect x="6" y="8" width="20" height="18" rx="3" fill="#FFF6E0" stroke="${ht}" stroke-width="2.2"/><path d="M6 14h20M11 6v4M21 6v4" stroke="${ht}" stroke-width="2.2" stroke-linecap="round"/>`,mail:`<rect x="5" y="9" width="22" height="15" rx="2" fill="#8E6CFF" stroke="${ht}" stroke-width="2.2"/><path d="M6 11l10 7 10-7" fill="none" stroke="#fff" stroke-width="2"/>`,event:`<path d="M16 5l2.4 6.2H25l-5 4 2 6.3L16 18l-6 3.5 2-6.3-5-4h6.6z" fill="#FFB938" stroke="${ht}" stroke-width="2"/>`,map:`<path d="M6 8l7 3 6-3 7 3v14l-7-3-6 3-7-3z" fill="#7ED0F5" stroke="${ht}" stroke-width="2"/><circle cx="16" cy="15" r="2.2" fill="#E8574A"/>`,crew:`<circle cx="11" cy="13" r="4" fill="#F4E6D4" stroke="${ht}" stroke-width="2"/><circle cx="21" cy="13" r="4" fill="#F08A3C" stroke="${ht}" stroke-width="2"/><path d="M4 25c1-5 6-6 8-6s6 2 7 6M17 25c1-4 4-5 7-5 3 0 6 1 7 5" fill="none" stroke="${ht}" stroke-width="2" stroke-linecap="round"/>`,island:`<path d="M4 22c3-1 5-6 8-6 2 4 6 3 8 0 3 1 6 5 8 6" fill="#6CCB3C" stroke="${ht}" stroke-width="2"/><path d="M16 16v-6" stroke="${ht}" stroke-width="2"/><circle cx="16" cy="8" r="2.4" fill="#E8574A"/>`,light:`<path d="M12 28V14h8v14" fill="#F7D98B" stroke="${ht}" stroke-width="2"/><path d="M10 14h12l-2-6H12z" fill="#E8574A" stroke="${ht}" stroke-width="2"/><circle cx="16" cy="6" r="2" fill="#FFD15C" stroke="${ht}" stroke-width="1.6"/>`,pass:`<rect x="6" y="10" width="20" height="14" rx="3" fill="#8E6CFF" stroke="${ht}" stroke-width="2"/><path d="M6 15h20" stroke="#fff" stroke-width="2"/>`,play:`<circle cx="16" cy="16" r="11" fill="#8E6CFF" stroke="${ht}" stroke-width="2"/><path d="M13 11l9 5-9 5z" fill="#fff"/>`,close:`<circle cx="16" cy="16" r="12" fill="#E8574A" stroke="${ht}" stroke-width="2"/><path d="M11 11l10 10M21 11L11 21" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`,glove:`<path d="M10 18v-6a2 2 0 0 1 4 0v5M14 12V8a2 2 0 0 1 4 0v6M18 13V9a2 2 0 0 1 4 0v8c0 5-3 8-8 8h-2c-4 0-6-3-6-6v-3a2 2 0 0 1 4 0" fill="#FFF6E0" stroke="${ht}" stroke-width="2" stroke-linejoin="round"/>`};function mt(n){return tp(dc[n]??dc.coin)}function fc(n){return n.replace(new RegExp("\\p{Extended_Pictographic}","gu"),"").replace(/\uFE0F/g,"").replace(/\s{2,}/g," ").trim()}var np=class{constructor(n,e){F(this,"game");F(this,"root");F(this,"sheetKey","");F(this,"built",!1);F(this,"hudBound",!1);this.game=n,this.root=document.createElement("div"),this.root.id="ui",e.appendChild(this.root)}mount(){this.root.innerHTML=`
      <div class="joy-catch" id="joy-catch"></div>
      <div class="hud" id="hud"></div>
      <div class="joy" id="joy"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="sheet-wrap" id="sheet-wrap"></div>
      <div class="toasts" id="toasts"></div>
      <div class="floaters" id="floaters"></div>
      <div class="travel" id="travel" hidden></div>
      <div class="hand" id="hand">${L(this.game.lang,"tutorial.hand")}</div>
    `,this.root.querySelector("#sheet-wrap").addEventListener("click",n=>{let e=n.target.closest("[data-act]");e&&(n.preventDefault(),n.stopPropagation(),this.game.act(e.dataset.act||"",e.dataset.id??null))}),this.root.addEventListener("change",n=>{let e=n.target;e.id==="pname"&&this.game.act("rename",e.value)}),this.built=!0,this.paintSheet(!0)}update(){if(!this.built)return;let n=this.game,e=n.lang,t=this.root.querySelector("#hud");this.hudBound||(this.hudBound=!0,t.innerHTML=`
        <div class="top" data-block>
          <div class="chip" id="coin-chip"></div>
          <div class="chip" id="shell-chip"></div>
          <div class="starbar" id="star-chip"></div>
          <button class="icon-btn" data-act="nav" data-id="pause" aria-label="settings">${mt("gear")}</button>
        </div>
        <div class="side left" data-block>
          <button class="round" data-act="nav" data-id="quests" id="btn-quests" aria-label="quests">${mt("gift")}<small id="lbl-q"></small></button>
          <button class="round" data-act="nav" data-id="calendar" id="btn-cal" aria-label="calendar">${mt("cal")}<small id="lbl-cal"></small></button>
        </div>
        <div class="side right" data-block>
          <button class="round" data-act="nav" data-id="event" id="btn-event" aria-label="event">${mt("event")}<small id="lbl-ev"></small></button>
          <button class="round" data-act="nav" data-id="mail" id="btn-mail" aria-label="mail">${mt("mail")}<small id="lbl-mail"></small></button>
        </div>
        <div class="tray" id="tray" data-block hidden>
          <button class="round reward-round" data-act="turbo-open" aria-label="turbo">${mt("play")}</button>
          <button class="round reward-round" data-act="intern-open" aria-label="intern">${mt("crew")}</button>
        </div>
        <div class="goal" data-block id="goal"><b></b></div>
        <nav class="nav" data-block id="nav"></nav>
      `,t.addEventListener("click",O=>{let G=O.target.closest("[data-act]");G&&(O.preventDefault(),O.stopPropagation(),n.act(G.dataset.act||"",G.dataset.id??null))}));let i=Nt(n.save,n.save.profile.currentIsland),s=gt(n.save.profile.currentIsland),r=_u(n.save).length,a=n.save.quests.daily.some(O=>!O.claimed&&O.progress>=O.target),o=n.save.login.lastClaimDay!==n.dayKey,l=ni(n.now),c=fc(ip(e,mu(n.save),s)),u=!!n.sheet,h=new Date(n.now).getHours(),d=h===12||h===19;this.root.querySelector("#coin-chip").innerHTML=`${mt("coin")}<b>${Pt(n.runtime.island.coins,e)}</b>${d?'<i class="happy-badge">×2</i>':""}`,this.root.querySelector("#shell-chip").innerHTML=`${mt("shell")}<b>${Pt(n.save.profile.shells,e)}</b>`;let f=this.root.querySelector("#star-chip");f.innerHTML=`<span style="width:${i/3*100}%"></span>`,f.title=`${i}/3`;let g=this.root.querySelector("#goal");g.hidden=u,g.querySelector("b").textContent=c,this.root.classList.toggle("sheet-open",u);let v=this.root.querySelector("#tray");v.hidden=u,this.root.querySelector("#btn-quests").classList.toggle("badge",a),this.root.querySelector("#btn-cal").classList.toggle("badge",o),this.root.querySelector("#btn-mail").classList.toggle("badge",r>0),this.root.querySelector("#btn-event").classList.toggle("live",!!l);let m=this.root.querySelector("#nav"),p=`${n.sheet}|${e}`;m.dataset.key!==p&&(m.dataset.key=p,m.innerHTML=[vs("map",mt("map"),L(e,"nav.map"),n.sheet),vs("crew",mt("crew"),L(e,"nav.crew"),n.sheet),vs("island",mt("island"),L(e,"nav.island"),n.sheet),vs("light",mt("light"),L(e,"nav.light"),n.sheet),vs("pass",mt("pass"),L(e,"nav.pass"),n.sheet)].join(""));let x=e==="ru"?["Квесты","Календарь","Событие","Почта"]:["Quests","Calendar","Event","Mail"],S=this.root.querySelector("#lbl-q");S&&(S.textContent=x[0]);let _=this.root.querySelector("#lbl-cal");_&&(_.textContent=x[1]);let I=this.root.querySelector("#lbl-ev");I&&(I.textContent=x[2]);let E=this.root.querySelector("#lbl-mail");E&&(E.textContent=x[3]);let T=this.root.querySelector("#joy"),C=this.root.querySelector("#joy-knob"),w=n.input.joy;T.classList.toggle("on",w.active&&!u),T.style.left=`${w.px}px`,T.style.top=`${w.py}px`,C.style.transform=`translate(${w.x}px, ${w.y}px)`;let b=this.root.querySelector("#hand"),P=n.save.profile.tutorialStep===0&&n.movedMs<1500&&!u;b.classList.toggle("on",P),b.innerHTML=mt("glove"),w.active?(b.style.left=`${w.px+w.x}px`,b.style.top=`${w.py+w.y}px`):(b.style.left="62%",b.style.top="68%");let V=this.root.querySelector("#joy-catch");V.style.pointerEvents=u?"none":"auto",this.paintSheet(!1),this.paintToasts()}setSmall(n,e){var i;let t=(i=this.root.querySelector(n))==null?void 0:i.querySelector("small");t&&(t.textContent=e)}setTravel(n){let e=this.root.querySelector("#travel");n?(e.hidden=!1,e.innerHTML=`<div class="travel-card"><div class="boat">${mt("island")}</div><p>${n}</p></div>`):e.hidden=!0}floater(n,e){let t=this.root.querySelector("#floaters");if(!t)return;let i=document.createElement("div");i.className="floater",i.textContent=n,e?(i.style.left=`${e.x}px`,i.style.top=`${e.y}px`):(i.style.left=`${42+Math.random()*16}%`,i.style.top=`${46+Math.random()*8}%`),t.appendChild(i),setTimeout(()=>i.remove(),900)}flyCoin(n){let e=this.root.querySelector("#coin-chip"),t=this.root.querySelector("#floaters");if(!e||!t||!n)return;let i=e.getBoundingClientRect(),s=document.createElement("div");s.className="fly-coin",s.innerHTML=mt("coin"),s.style.left=`${n.x}px`,s.style.top=`${n.y}px`,t.appendChild(s);let r=i.left+i.width/2-n.x,a=i.top+i.height/2-n.y;s.animate([{transform:"translate(0,0) scale(1)"},{transform:`translate(${r}px, ${a}px) scale(0.4)`}],{duration:520,easing:"cubic-bezier(.2,.7,.2,1)"}),setTimeout(()=>s.remove(),540)}setLabels(n){let e=this.root.querySelector("#labels");e||(e=document.createElement("div"),e.id="labels",this.root.appendChild(e)),e.innerHTML=n.map(t=>`<div class="wlab ${t.kind}" style="left:${t.x}px;top:${t.y}px">${fc(t.text)}</div>`).join("")}paintToasts(){let n=this.root.querySelector("#toasts"),e=performance.now();this.game.toasts=this.game.toasts.filter(t=>e-t.at<2800),n.innerHTML=this.game.toasts.map(t=>`<div class="toast"><span class="toast-ico">${t.icon??"✨"}</span><div><b>${t.title}</b>${t.detail?`<small>${t.detail}</small>`:""}</div></div>`).join("")}paintSheet(n){let e=`${this.game.sheet}|${this.game.sheetArg}|${this.game.revision}`;if(!n&&e===this.sheetKey)return;this.sheetKey=e;let t=this.root.querySelector("#sheet-wrap");if(!this.game.sheet){t.innerHTML="";return}t.innerHTML=`<div class="sheet" data-block role="dialog">${this.sheetHtml().replace(/🪙/g,mt("coin")).replace(/🐚/g,mt("shell")).replace(/🎬/g,mt("play")).replace(/🎟/g,mt("pass"))}</div>`;let i=t.querySelector("#pname");i==null||i.addEventListener("change",()=>void this.game.act("rename",i.value))}sheetHtml(){let n=this.game,e=n.lang,t=n.sheet,i=s=>`<header class="sheet-h"><h2>${s}</h2><button class="close" data-act="close" aria-label="close">${mt("close")}</button></header>`;return t==="map"?i(L(e,"sheet.map"))+sp(n):t==="crew"?i(L(e,"sheet.crew"))+rp(n):t==="island"?i(L(e,"sheet.island"))+ap(n):t==="light"?i(L(e,"sheet.light"))+op(n):t==="pass"?i(L(e,"sheet.pass"))+lp(n):t==="quests"?i(L(e,"sheet.quests"))+cp(n):t==="calendar"?i(L(e,"sheet.calendar"))+hp(n):t==="event"?i(L(e,"sheet.event"))+up(n):t==="ach"?i(L(e,"sheet.ach"))+dp(n):t==="cards"?i(L(e,"sheet.cards"))+fp(n):t==="pause"?i(L(e,"sheet.pause"))+pp(n):t==="profile"?i(L(e,"sheet.profile"))+mp(n):t==="offline"?i(L(e,"sheet.offline"))+xu(n):t==="mail"?i(L(e,"sheet.mail"))+gp(n):t==="wheel"?i(L(e,"sheet.wheel"))+vp(n):t==="chest"?i(L(e,"sheet.chest"))+_p(n):t==="expedition"?i(L(e,"sheet.expedition"))+yp(n):t==="policy"?i(L(e,"sheet.policy"))+`<p class="body">${L(e,"policy.body")}</p>${kd(e)}`:t==="fish"?i(L(e,"sheet.fish"))+xp(n):t==="vip"?i(L(e,"sheet.vip"))+bp(n):t==="league"?i(L(e,"sheet.league"))+Mp(n):t==="sail"?i(L(e,"sail"))+Sp(n):t==="turbo"?i(L(e,"turbo"))+wp(n):t==="intern"?i(L(e,"intern"))+Ep(n):t==="cosmetic"?i(L(e,"cosmetic"))+Tp(n):i(t||"")+""}};function vs(n,e,t,i){return`<button class="nav-btn ${i===n?"on":""}" data-act="${n==="island"&&i==="island"?"close":"nav"}" data-id="${n}">${e}<small>${t}</small></button>`}function ip(n,e,t){let i=e.stationId?t.stations.find(a=>a.id===e.stationId):void 0,s=i?yu(n,i.kind,i.item,t):"",r=Zr(t,e.itemId,n);return e.kind==="move"?L(n,"goal.move"):e.kind==="pickup"?L(n,"goal.pickup",{item:r}):e.kind==="drop"?L(n,"goal.drop",{item:r}):e.kind==="till"?L(n,"goal.till"):e.kind==="build"?L(n,"goal.build",{name:s,cost:Pt(e.cost??0,n)}):e.kind==="upgrade"?L(n,"goal.upgrade",{name:s,cost:Pt(e.cost??0,n),level:e.level??2}):e.kind==="hire"?L(n,"goal.hire",{cost:Pt(e.cost??0,n)}):e.kind==="chest"?L(n,"goal.chest"):e.kind==="turbo"?L(n,"goal.turbo"):e.kind==="quests"?L(n,"goal.quests"):e.kind==="sail"?L(n,"goal.sail",{cost:Pt(e.cost??0,n)}):e.kind==="decor"?L(n,"goal.decor",{cost:Pt(e.cost??0,n)}):L(n,"goal.play")}function yu(n,e,t,i){return t&&(e==="producer"||e==="processor"||e==="stall")?`${Zr(i,t,n)} · ${L(n,"kind."+e)}`:L(n,"kind."+e)}function sp(n){let e=n.lang,t="";for(let i=0;i<Dn.length;i++){let s=22+Math.sin(i*.9)*18,r=36+i*78;t+=(i?" L ":"M ")+s+" "+r}return`<div class="archipelago"><svg class="arch-path" viewBox="0 0 100 ${Dn.length*78}" preserveAspectRatio="none"><path d="${t}" /></svg>${Dn.map((i,s)=>{let r=n.save.islands[i.id-1],a=Nt(n.save,i.id),o=n.save.profile.currentIsland===i.id,l=22+Math.sin(s*.9)*18,c=12+s*78,u=r.unlocked?"★".repeat(a)+"☆".repeat(3-a):e==="ru"?"Закрыто":"Locked",h=r.unlocked?o?"nav":"travel":"sail-ask",d=r.unlocked&&o?"island":String(i.id);return`<button class="isle ${o?"here":""} ${r.unlocked?"":"locked"}" style="left:${l}%;top:${c}px" data-act="${h}" data-id="${d}">
      <span class="isle-blob" style="background:${i.ground}"></span>
      <span><b>${i.name[e]}</b><small>${u}</small></span>
      ${o?'<i class="isle-boat">⛵</i>':""}
    </button>`}).join("")}</div>`}function rp(n){let e=n.lang,t=n.save.profile.currentIsland,i=tl(n.save,t),s=n.save.islands[t-1].crew.length,r={bunny:"🐰",fox:"🦊",cat:"🐱",bear:"🐻",bird:"🦆",owl:"🦉",penguin:"🐧",pig:"🐷",goat:"🐐",crab:"🦀",capybara:"🐹",raccoon:"🦝"},a=(c,u)=>{let h=1+.08*(u-1),d=c.perk,f=[],g=v=>Math.round(v*h*100);return d.serve&&f.push("+"+g(d.serve)+"% "+(e==="ru"?"скорость кассы":"till speed")),d.speed&&f.push("+"+g(d.speed)+"% "+(e==="ru"?"скорость":"speed")),d.prod&&f.push("+"+g(d.prod)+"% "+(e==="ru"?"производство":"production")),d.income&&f.push("+"+g(d.income)+"% "+(e==="ru"?"доход":"income")),d.lambda&&f.push("+"+g(d.lambda)+"% "+(e==="ru"?"гости":"guests")),d.offline&&f.push("+"+g(d.offline)+"% "+(e==="ru"?"офлайн":"offline")),d.cap&&f.push("+"+Math.max(1,Math.round((d.cap||0)*h))+" "+(e==="ru"?"к рюкзаку":"pack")),f.join(" · ")},o=n.save.helpers.map(c=>{let u=vn(c.id);if(!u)return"";let h=c.islandId===t?e==="ru"?"На этом острове":"On this island":c.islandId?(e==="ru"?"Другой остров":"Another island")+" · "+gt(c.islandId).name[e]:e==="ru"?"Свободный слот":"Open slot";return`<article class="card crew-card rarity-${u.rarity}">
      <div class="crew-top">
        <span class="avatar" style="background:${u.color};border-color:${u.accent}">${r[u.look]||"✨"}</span>
        <div>
          <h3>${u.name[e]}</h3>
          <p class="tags"><em class="badge rarity">${L(e,"rarity."+u.rarity)}</em> <em class="badge role">${L(e,"role."+u.role)}</em></p>
        </div>
      </div>
      <p class="perk">${a(u,c.level)}</p>
      <p class="muted">${u.blurb[e]}</p>
      <p class="slot">${h} · ${L(e,"level",{n:c.level})}</p>
      <div class="row">
        ${c.islandId===t?`<button class="btn ghost" data-act="unassign" data-id="${c.id}">${L(e,"unassign")}</button>`:`<button class="btn" data-act="assign" data-id="${c.id}">${L(e,"assign")} · ${Pt(Yi(t,s+1),e)} 🪙</button>`}
        <button class="btn ghost" data-act="level-helper" data-id="${c.id}">${L(e,"levelup")} · ${iu(c.level)} 🐚</button>
      </div>
    </article>`}).join(""),l=Zo.filter(c=>!n.save.helpers.some(u=>u.id===c.id)).slice(0,8).map(c=>`<p class="muted crew-locked"><span class="avatar mini" style="background:${c.color}">${r[c.look]||"✨"}</span> ${c.name[e]} · ${L(e,"rarity."+c.rarity)} · ${a(c,1)}</p>`).join("");return`<p class="slot-line">${L(e,"slots",{used:s,max:i})}</p>${o}<h3>${L(e,"crew.none")}</h3>${l}`}function ap(n){let e=n.lang,t=n.save.profile.currentIsland,i=gt(t),s=n.save.islands[t-1],r=Nt(n.save,t);Ki(n.save,t,n.now);let a=i.stations.filter(l=>l.kind!=="hire").map(l=>{let c=s.stations[l.id],u=Zn(n.save,i,l),h=yu(e,l.kind,l.item,i),d=c.timer>0?L(e,"timer.left",{time:Un(c.timer,e)}):"";return`<article class="card">
      <h3>${h}</h3>
      <p>${c.built?L(e,"level",{n:c.level}):L(e,"locked")} ${c.built?"· "+L(e,"prod",{n:c.stock}):""} ${d}</p>
      ${c.timer>0?`<div class="row">
        <button class="btn" data-act="wait">${L(e,"no.ads")}</button>
        <button class="btn reward" data-act="skip-ad" data-id="${l.id}">🎬 ${L(e,"timer.skip")}</button>
      </div>`:""}
      ${!c.built&&u.kind!=="max"?`<p>${Pt(u.cost,e)} 🪙</p>`:""}
    </article>`}).join(""),o=(1+.5*s.prestige).toFixed(1);return`<p>${i.name[e]}</p>
    <div class="pips" aria-label="${r}/3">${"●".repeat(r)}${"○".repeat(3-r)}</div>
    ${a}
    <button class="btn ghost" data-act="nav" data-id="cosmetic">${L(e,"cosmetic")}</button>
    ${t>=6?`<button class="btn" data-act="prestige">${L(e,"prestige.do")}</button><p class="muted">${L(e,"prestige.warn",{mult:o})}</p>`:`<p class="muted">${L(e,"prestige.lock")}</p>`}`}function op(n){let e=n.lang;return L(e,"nav.light"),[{name:e==="ru"?"Касса":"Till",desc:e==="ru"?"+5% к доходу":"+5% income"},{name:e==="ru"?"Прилив":"Tide",desc:e==="ru"?"Дольше офлайн":"Longer offline"},{name:e==="ru"?"Ветер":"Wind",desc:e==="ru"?"+скорость и рюкзак":"+speed and pack"},{name:e==="ru"?"Гости":"Guests",desc:e==="ru"?"+поток гостей":"+guests"}].map((t,i)=>{let s=Array.from({length:10},(l,c)=>n.save.lighthouse.includes(i*10+c)).filter(Boolean).length,r=s<10?i*10+s:-1,a=nu(n.save.lighthouse.length),o=Array.from({length:10},(l,c)=>`<i class="${c<s?"on":""}"></i>`).join("");return`<section class="card light-row">
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <div class="pips">${o}</div>
      ${r>=0?`<button class="btn" data-act="light" data-id="${r}">${Pt(a,e)}</button>`:`<p>${e==="ru"?"Готово":"Maxed"}</p>`}
    </section>`}).join("")+`<p>${L(e,"income.offline")}: ${Un(Ki(n.save,1,n.now).offlineCap,e)}</p>`}function lp(n){let e=n.lang,t=n.save.pass,i=t.level>=30?0:to(t.level),s=Array.from({length:30},(a,o)=>{let l=o+1,c=t.level>=l,u=eo(l,!1),h=eo(l,!0);return`<article class="pass-card ${c?"open":""}">
      <b>${l}</b>
      <button class="btn tiny" ${c&&!t.claimed.includes(l)?"":"disabled"} data-act="pass" data-id="${l}">${pc(u)}</button>
      <button class="btn tiny reward" ${c&&t.starUnlocked&&!t.starClaimed.includes(l)?"":"disabled"} data-act="pass-star" data-id="${l}">${pc(h)}</button>
    </article>`}).join(""),r=`${t.starTokens}/${ee.starTokensToUnlock}`;return`<p>${L(e,"pass.level",{n:t.level})} · XP ${t.xp}${i?"/"+i:""}</p>
    <p>${L(e,"pass.star")}: ${r} ${t.starUnlocked?"✓":L(e,"pass.need",{n:Math.max(0,ee.starTokensToUnlock-t.starTokens)})}</p>
    <div class="row">
      <button class="btn">${L(e,"no.ads")}</button>
      <button class="btn reward" data-act="rocket">🎬 ${L(e,"pass.rocket")}</button>
    </div>
    ${t.overflowChests?`<button class="btn" data-act="overflow">${L(e,"pass.overflow")} ×${t.overflowChests}</button>`:""}
    <div class="pass-track">${s}</div>`}function pc(n){return n.kind==="shells"?`×${n.amount}`:n.kind==="key"?"Key":n.kind==="helper"?"Friend":n.kind==="cosmetic"?"Hat":`×${n.amount}`}function cp(n){let e=n.lang,t=(a,o)=>{let l=a==="daily"?n.save.quests.daily:n.save.quests.weekly;return`<h3>${o}</h3>`+l.map((c,u)=>{let h=c.progress>=c.target&&!c.claimed;return`<article class="card">
        <p>${L(e,"quest."+c.type,{n:Math.round(c.target),item:c.item??""})}</p>
        <div class="bar"><span style="width:${Math.min(100,c.progress/c.target*100)}%"></span></div>
        <p>${Math.floor(c.progress)}/${Math.round(c.target)}</p>
        ${h?`<button class="btn" data-act="claim-quest" data-id="${a}:${u}">${L(e,"claim")}</button>`:""}
        ${c.claimed?`<p>${L(e,"claimed")}</p>`:""}
        ${a==="daily"&&!c.claimed?`<div class="row"><button class="btn ghost" data-act="reroll-shells" data-id="${u}">${L(e,"reroll.shells")}</button><button class="btn reward" data-act="reroll-ad" data-id="${u}">🎬 ${L(e,"reroll")}</button></div>`:""}
      </article>`}).join("")},i=n.save.quests.daily.every(a=>a.claimed)&&!n.save.quests.dailyBonusClaimed?`<button class="btn" data-act="daily-bonus">${L(e,"bonus.chest")}</button>`:"",s=n.save.quests.weekly.every(a=>a.claimed)&&!n.save.quests.weeklyBonusClaimed?`<button class="btn" data-act="weekly-bonus">${L(e,"bonus.chest")}</button>`:"",r=gt(n.save.profile.currentIsland).mayor.map(a=>{let o=n.save.islands[n.save.profile.currentIsland-1],l=o.mayorProgress[a.id]??0,c=o.mayorClaimed.includes(a.id),u=a.item?Zr(gt(n.save.profile.currentIsland),a.item,e):"";return`<p>${c?"✓":""} ${L(e,"mayor."+a.type,{n:a.count,item:u})} · ${Math.min(a.count,Math.floor(l))}/${a.count}</p>`}).join("");return t("daily",L(e,"daily"))+i+t("weekly",L(e,"weekly"))+s+`<h3>${L(e,"mayor")}</h3>${r}`}function hp(n){let e=n.lang,t=n.save.login.lastClaimDay===n.dayKey;return`<div class="days">${Kh.map((i,s)=>{let r=n.save.login.cycle===s&&!t,a=s<n.save.login.cycle||s===n.save.login.cycle&&t,o=i.amount?`×${i.amount}`:i.label[e];return`<div class="day ${r?"today":""} ${a?"done":""} ${s===6?"wide":""}">
      <div class="day-h">${e==="ru"?"День":"Day"} ${s+1}</div>
      <div class="day-amt">${o}</div>
    </div>`}).join("")}</div>
    ${t?`<p>${L(e,"claimed")}</p>`:`<div class="row">
      <button class="btn" data-act="login">${L(e,"claim")}</button>
      <button class="btn reward" data-act="login-x2">🎬 ${L(e,"claim.x2")}</button>
    </div>`}
    <h3>${L(e,"album")}</h3>
    <p>${L(e,"day",{n:n.save.login.albumDay})} / 28</p>
    <div class="album">${Array.from({length:28},(i,s)=>`<i class="${n.save.login.albumDay>s?"on":""}"></i>`).join("")}</div>`}function up(n){let e=n.lang,t=ni(n.now);if(!t){let a=(vf(n.now)-n.now)/1e3,o=Hi[0];return`<p>${L(e,"event.soon",{time:Un(a,e)})}</p><article class="card"><h3>${o.name[e]}</h3><p>${o.blurb[e]}</p></article>`}let i=Yh.map((a,o)=>{let l=n.save.events.claimedTiers.includes(o);return`<button class="btn tiny" ${n.save.events.tickets>=a&&!l?"":"disabled"} data-act="event-tier" data-id="${o}">${L(e,"tier",{n:o+1})} · ${a} 🎟 ${l?"✓":""}</button>`}).join(""),s=t.def.mechanic==="fishing"?`<button class="btn" data-act="nav" data-id="fish">${L(e,"sheet.fish")}</button>`:"",r=t.def.mechanic==="race"?`<button class="btn ghost" data-act="race-claim">${L(e,"claim.rank")}</button>`+gu(n.save,n.now).slice(0,8).map((a,o)=>`<p class="${a.you?"you":""}">${o+1}. ${a.you?L(e,"you"):a.name} · ${Pt(a.score,e)}</p>`).join(""):"";return`<article class="card"><h3>${t.def.name[e]}</h3><p>${t.def.blurb[e]}</p>
    <p>${L(e,"event.live",{time:Un((t.end-n.now)/1e3,e)})} · ${L(e,"event.tickets",{n:n.save.events.tickets})}</p></article>
    ${i}${s}${r}
    <button class="btn ghost" data-act="event-join">${L(e,"join")}</button>`}function dp(n){let e=n.lang;return el.map(t=>{let i=n.save.achievements.includes(t.id);return`<article class="card ${i?"here":""}"><h3>${i?"✓ ":""}${t.name[e]}</h3><p>${t.desc[e]} · ${t.shells} 🐚</p></article>`}).join("")}function fp(n){let e=n.lang,t=nl(n.save);return`<p>${L(e,"set.bonus")} · ${t}/12</p>`+Dn.map(i=>{let s=i.cards.map(r=>{let a=n.save.collections.includes(r.id);return`<div class="post ${a?"on":""}">${a?L(e,"card."+r.source,{island:i.name[e]}):"?"}</div>`}).join("");return`<section class="card"><h3>${i.name[e]}</h3><div class="posts">${s}</div></section>`}).join("")}function pp(n){var i;let e=n.lang,t=n.save.settings;return`<button class="btn" data-act="resume">${L(e,"resume")}</button>
    <div class="card">
      <p>${L(e,"sound")}</p><button class="btn ghost" data-act="toggle" data-id="sfx">${t.sfx?L(e,"on"):L(e,"off")}</button>
      <p>${L(e,"music")}</p><button class="btn ghost" data-act="toggle" data-id="music">${t.music?L(e,"on"):L(e,"off")}</button>
      <p>${L(e,"language")}</p>
      <div class="row"><button class="btn ${e==="ru"?"":"ghost"}" data-act="lang" data-id="ru">Русский</button><button class="btn ${e==="en"?"":"ghost"}" data-act="lang" data-id="en">English</button></div>
      <p>${L(e,"quality")}</p>
      <div class="row wrap">
        ${["auto","low","medium","high"].map(s=>`<button class="btn tiny ${t.quality===s?"":"ghost"}" data-act="quality" data-id="${s}">${L(e,"quality."+s)}</button>`).join("")}
      </div>
      <p class="muted">${L(e,"fps",{n:Math.round(((i=n.view)==null?void 0:i.fps())??0)})}</p>
    </div>
    <button class="btn ghost" data-act="nav" data-id="profile">${L(e,"sheet.profile")}</button>
    <button class="btn ghost" data-act="nav" data-id="ach">${L(e,"sheet.ach")}</button>
    <button class="btn ghost" data-act="nav" data-id="cards">${L(e,"sheet.cards")}</button>
    <button class="btn ghost" data-act="nav" data-id="policy">${L(e,"sheet.policy")}</button>`}function mp(n){let e=n.lang,t=n.save.equipped.hat;return`<label>${L(e,"rename")}<input id="pname" data-block value="${Ap(n.save.profile.name)}" maxlength="16"></label>
    <p>${L(e,"stat.playtime")}: ${Un(n.save.profile.totalPlaytime,e)}</p>
    <p>${L(e,"stat.sales")}: ${Pt(n.save.stats.sales,e)}</p>
    <p>${L(e,"stat.shells")}: ${Pt(n.save.profile.shells,e)}</p>
    <p>${L(e,"stat.days")}: ${n.save.stats.loginDays}</p>
    <p>${t?"🎩 "+t:""}</p>`}function xu(n){let e=n.lang,t=_u(n.save).map(s=>`<p>${L(e,"offline.line",{name:gt(s.islandId).name[e],coins:Pt(s.coins,e)})}</p>`).join(""),i=n.welcome?`<p class="banner">${L(e,"welcome")}</p>`:"";return t?`${i}${t}<div class="row">
    <button class="btn" data-act="offline">${L(e,"claim")}</button>
    <button class="btn reward" data-act="offline-x2">🎬 ${L(e,"claim.x2")}</button>
  </div>`:`<p>${L(e,"empty.mail")}</p>`}function gp(n){return xu(n)}function vp(n){let e=n.lang,t=Ps.map(i=>`<li>${i.label[e]}</li>`).join("");return`<div class="wheel" style="transform:rotate(${n.wheelAngle}deg)"><ul>${t}</ul></div>
    <div class="row">
      <button class="btn" ${n.save.wheel.freeUsed?"disabled":""} data-act="spin-free">${L(e,"wheel.free")}</button>
      <button class="btn reward" data-act="spin-ad">🎬 ${L(e,"wheel.ad")}</button>
    </div>`}function _p(n){let e=n.lang;return!n.save.chest.openedOnce&&n.save.profile.tutorialStep<=8?`<p>${L(e,"goal.chest")}</p><button class="btn" data-act="chest-free">${L(e,"chest.open")}</button>`:`<p>${L(e,"goal.chest")}</p>
    <div class="row">
      <button class="btn" ${n.save.profile.keys<=0?"disabled":""} data-act="chest-key">${L(e,"chest.key")} · ${n.save.profile.keys}</button>
      <button class="btn reward" data-act="chest-ad">🎬 ${L(e,"chest.ad")}</button>
    </div>`}function yp(n){let e=n.lang,t=n.save.expeditions.filter(s=>!s.claimed).map(s=>{let r=Math.max(0,(s.endsAt-n.now)/1e3),a=vn(s.helperId),o=r<=0;return`<article class="card"><h3>${(a==null?void 0:a.name[e])??s.helperId}</h3>
      <p>${o?L(e,"ready"):Un(r,e)} · ${s.shells} 🐚</p>
      ${o?`<button class="btn" data-act="exp-claim" data-id="${s.id}">${L(e,"expedition.claim")}</button>`:`<button class="btn reward" data-act="exp-skip" data-id="${s.id}">🎬 ${L(e,"expedition.skip")}</button>`}
    </article>`}).join(""),i=n.save.helpers.filter(s=>!n.save.expeditions.some(r=>!r.claimed&&r.helperId===s.id)).map(s=>{var r;return`<article class="card"><h3>${(r=vn(s.id))==null?void 0:r.name[e]}</h3>
      <div class="row">
        <button class="btn tiny" data-act="exp-go" data-id="${s.id}:1">1${e==="ru"?"ч":"h"}</button>
        <button class="btn tiny" data-act="exp-go" data-id="${s.id}:4">4${e==="ru"?"ч":"h"}</button>
        <button class="btn tiny" data-act="exp-go" data-id="${s.id}:8">8${e==="ru"?"ч":"h"}</button>
      </div></article>`}).join("");return(t||`<p>${L(e,"empty.exp")}</p>`)+i}function xp(n){let e=n.lang,t=8+n.fishT*70%84;return`<p>${L(e,"fish.hint")}</p>
    <div class="track"><div class="zone"></div><div class="fish" style="left:${t}%"></div></div>
    <button class="btn" data-act="fish-cast">${L(e,"fish.cast")}</button>
    <p>${L(e,"casts",{n:n.fishCasts})} · ${L(e,"fish.result",{score:n.fishScore})}</p>
    <button class="btn reward" data-act="fish-extra">🎬 ${L(e,"extra.cast")}</button>`}function bp(n){let e=n.lang,t=n.save.vip;if(!t)return`<p>${L(e,"vip.lock")}</p>`;let i=gt(n.save.profile.currentIsland),s=t.have>=t.count;return`<p>${L(e,"vip.need",{item:Zr(i,t.item,e),n:t.count})}</p>
    <p>${t.have}/${t.count} · ${Un(Math.max(0,(t.expires-n.now)/1e3),e)}</p>
    ${s?`<div class="row"><button class="btn" data-act="vip">${L(e,"claim")}</button><button class="btn reward" data-act="vip-x2">🎬 ${L(e,"vip.double")}</button></div>`:""}`}function Mp(n){let e=n.lang,t=jf(n.save,n.now).slice(0,10).map((i,s)=>`<p class="${i.you?"you":""}">${s+1}. ${i.you?L(e,"you"):i.name} · ${Pt(i.score,e)}</p>`).join("");return`<p class="muted">${L(e,"league.hint")}</p>${t}`}function Sp(n){let e=n.lang,t=Number(n.sheetArg||n.save.profile.currentIsland+1),i=t-1,s=pu(n.save,i),r=gt(t).name[e];return`<p>${L(e,"sail.confirm",{cost:Pt(s.cost,e),name:r})}</p>
    ${s.reason==="star"?`<p>${L(e,"sail.needstar")}</p>`:""}
    <div class="row">
      <button class="btn ghost" data-act="close">${L(e,"back")}</button>
      <button class="btn" ${s.ok?"":"disabled"} data-act="sail-yes" data-id="${i}">${L(e,"sail")}</button>
    </div>`}function wp(n){let e=n.lang,t=Math.max(0,(n.save.profile.turboUntil-n.now)/1e3);return`<p>${t>0?Un(t,e):L(e,"goal.turbo")}</p>
    <div class="row">
      <button class="btn" data-act="turbo-shells">${L(e,"turbo.shells")}</button>
      <button class="btn reward" data-act="turbo-ad">🎬 ${L(e,"turbo")}</button>
    </div>
    ${n.save.profile.turboTickets?`<button class="btn ghost" data-act="turbo-ticket">${L(e,"turbo.ticket")} · ${n.save.profile.turboTickets}</button>`:""}
    <button class="btn ghost" data-act="turbo-later">${L(e,"later")}</button>`}function Ep(n){let e=n.lang,t=vu(n.save,n.now),i=n.save.profile.freeInternAt?ee.freeInternPeriod-(n.now-n.save.profile.freeInternAt)/1e3:0;return`<p>${L(e,"intern")}</p>
    <div class="row">
      <button class="btn" ${t?"":"disabled"} data-act="intern-free">${t?L(e,"intern.free"):L(e,"intern.wait",{time:Un(i,e)})}</button>
      <button class="btn reward" data-act="intern-ad">🎬 ${L(e,"intern")}</button>
    </div>`}function Tp(n){let e=n.lang;return jh.map(t=>{let i=n.save.cosmetics.includes(t.id),s=n.save.equipped[t.slot]===t.id;return`<article class="card"><h3>${t.name[e]}</h3>
      ${i?`<button class="btn tiny" data-act="equip" data-id="${t.slot}:${t.id}">${s?L(e,"equipped"):L(e,"equip")}</button>`:`<button class="btn tiny" data-act="buy-cos" data-id="${t.id}">${L(e,"buy")} · ${t.cost} 🐚</button>`}
    </article>`}).join("")}function Ap(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Cp(){return new URLSearchParams(location.search).get("platform")||(window.YaGames?"yandex":window.CrazyGames?"crazy":window.PokiSDK?"poki":window.gdsdk?"gamedistribution":"web")}var Rp=class{constructor(n,e,t){F(this,"save");F(this,"runtime");F(this,"view",null);F(this,"ui",null);F(this,"input",new Ud);F(this,"audio",new Nd);F(this,"analytics",new Xh);F(this,"ads");F(this,"sheet",null);F(this,"sheetArg",null);F(this,"revision",0);F(this,"toasts",[]);F(this,"wheelAngle",0);F(this,"fishT",0);F(this,"fishCasts",3);F(this,"fishScore",0);F(this,"fishPerfects",0);F(this,"welcome",!1);F(this,"autoplay",!1);F(this,"started",!1);F(this,"acc",0);F(this,"saveAcc",0);F(this,"last",0);F(this,"paused",!1);F(this,"hiddenAt",0);F(this,"rng");F(this,"saves");F(this,"boatLatch",!1);F(this,"chestLatch",!1);F(this,"gestured",!1);F(this,"movedMs",0);F(this,"debug",{addCoins:n=>{this.runtime.island.coins+=n,this.revision++},addShells:n=>{this.save.profile.shells+=n},skipTutorial:()=>{this.save.profile.tutorialStep=Ce.Done,this.revision++},open:n=>this.open(n),close:()=>this.close(),autoplay:n=>{this.autoplay=n},unlockAll:()=>{for(let n of this.save.islands)n.unlocked=!0;this.revision++},island:async n=>{let e=this.save.islands[n-1];e&&(e.unlocked=!0),this.save.profile.tutorialStep=11,await this.travel(n,!1);for(let i of this.runtime.def.stations){let s=this.runtime.island.stations[i.id];s&&i.kind!=="decor"&&i.kind!=="hire"&&i.kind!=="backpack"&&(s.built=!0,(i.kind==="producer"||i.kind==="stall"||i.kind==="processor")&&(s.stock=6))}this.runtime.px=.2,this.runtime.pz=.6;let t=this.runtime.def.customers;this.runtime.customers.push({id:700+n,kind:t[0],x:1.4,z:1.8,state:"toStall",stallId:"",item:null,order:1,timer:0,rare:!1},{id:720+n,kind:t[1]??t[0],x:-1.2,z:2.6,state:"toStall",stallId:"",item:null,order:2,timer:0,rare:!1}),this.revision++},prep:n=>{this.save.profile.tutorialStep=11;let e=this.runtime.island,t=e.stations.stall_carrot,i=e.stations.field_carrot;if(i&&(i.stock=8),t&&(t.stock=5),n==="early")e.coins=48,this.runtime.px=1.35,this.runtime.pz=2.15,this.runtime.yaw=Math.atan2(3.15-1.35,2.6-2.15),this.runtime.customers.push({id:901,kind:"bunny",x:2.2,z:1.3,state:"toStall",stallId:"stall_carrot",item:null,order:1,timer:0,rare:!1},{id:902,kind:"fox",x:2.5,z:4.4,state:"queue",stallId:"stall_carrot",item:"carrot",order:2,timer:0,rare:!1});else{for(let s of this.runtime.def.stations)if(s.item==="carrot"||s.item==="cabbage"||s.kind==="till"){let r=e.stations[s.id];if(!r)continue;r.built=!0,r.level=Math.max(r.level,3),s.kind==="stall"&&(r.stock=6)}e.coins=640;for(let s of["stepa","alisa"]){let r=this.save.helpers.find(a=>a.id===s);r&&!e.crew.includes(s)&&(r.islandId=this.save.profile.currentIsland,e.crew.push(s))}this.runtime.px=.4,this.runtime.pz=.4,this.runtime.yaw=.4,this.runtime.customers.push({id:911,kind:"bunny",x:1.6,z:-.2,state:"toStall",stallId:"stall_cabbage",item:null,order:1,timer:0,rare:!1},{id:912,kind:"bear",x:2.4,z:1.6,state:"queue",stallId:"stall_carrot",item:"carrot",order:2,timer:0,rare:!1},{id:913,kind:"fox",x:2.6,z:3.4,state:"toTill",stallId:"stall_carrot",item:"carrot",order:3,timer:0,rare:!0})}this.revision++},rehearse:(n=90)=>{var i;let e=[],t=()=>{var a;let s=this.runtime.def.stations.find(o=>o.id==="field_cabbage"),r=this.runtime.def.stations.find(o=>o.kind==="hire");return s&&!((a=this.runtime.island.stations.field_cabbage)!=null&&a.built)&&this.runtime.island.coins>=120?s:r&&this.save.profile.tutorialStep>=6&&this.runtime.island.crew.length===0&&this.runtime.island.coins>=100?r:this.runtime.suggestTarget()};for(let s=0;s<n;s+=.1){let r=t(),a=r.x-this.runtime.px,o=r.z-this.runtime.pz,l=Math.hypot(a,o)||1,c=l<.3?0:a/l,u=l<.3?0:o/l;this.runtime.tick(.1,c,u,Date.now(),"play"),ac(this.save,{moved:c!==0,stack:this.runtime.stackCount,dropped:this.runtime.fx.some(h=>h.type==="drop"),served:this.runtime.fx.some(h=>h.type==="ding"),hired:this.runtime.island.crew.length>0,chestOpened:this.save.chest.openedOnce,turboDismissed:!1}),this.runtime.fx.length=0,this.runtime.notes.length=0}return e.push(`step ${this.save.profile.tutorialStep} coins ${Math.floor(this.runtime.island.coins)} crew ${this.runtime.island.crew.join(",")||"-"} cabbage ${(i=this.runtime.island.stations.field_cabbage)==null?void 0:i.built}`),e.join(" | ")},forceBuild:()=>{var e;let n=this.runtime.island;for(let t of this.runtime.def.stations)t.star&&(n.stations[t.id].built=!0);this.revision++,(e=this.view)==null||e.loadIsland(this.save)}});this.save=n,this.saves=t,this.rng=new Qo((n.profile.createdAt^Date.now())>>>0),this.runtime=new uc(n,n.profile.currentIsland,this.rng.next()*1e9),this.ads=new $d(Wd(e,{onOpen:()=>{var i;this.audio.suspendForAd(!0),(i=this.view)==null||i.engine.stopRenderLoop()},onClose:()=>{this.audio.suspendForAd(!1),this.view&&!this.paused&&this.view.engine.runRenderLoop(()=>this.frame())}}),n,{pause:()=>{this.paused=!0},resume:()=>{this.paused=!1},toast:i=>this.toast(L(this.lang,i))})}get lang(){return this.save.settings.lang}get now(){return Date.now()}get dayKey(){return Jn(this.now)}async start(n,e){this.ads.loadingStart(),await this.ads.init();let t=tc(this.save,this.now,await this.ads.serverNow());this.welcome=t.welcome,du(this.save,this.now),this.save.profile.sessions+=1,this.analytics.track("session_start",{platform:this.ads.platform,day:Math.floor((this.now-this.save.profile.createdAt)/864e5)}),this.view=await qh.create(n,this.save.settings.quality),await this.view.preload(e),await this.view.loadIsland(this.save),this.ui=new np(this,document.body),this.ui.mount(),this.input.attach(this.ui.root.querySelector("#joy-catch")),this.audio.setMusic(this.save.settings.music),this.audio.setSfx(this.save.settings.sfx),this.ads.loadingStop(),this.last=performance.now(),this.view.engine.runRenderLoop(()=>this.frame()),window.addEventListener("resize",()=>{var i;return(i=this.view)==null?void 0:i.resize()}),document.addEventListener("visibilitychange",()=>this.onHide()),window.addEventListener("pointerdown",()=>{this.gestured=!0,this.firstGesture()},{once:!1}),window.addEventListener("keydown",i=>{i.code==="Escape"&&this.sheet&&this.close()}),t.seconds>50&&t.lines.some(i=>i.coins>1)&&this.open("offline"),this.analytics.track("perf_sample",{dpr:Math.min(window.devicePixelRatio||1,1.5)})}firstGesture(){this.audio.unlock(),this.started||(this.started=!0,this.ads.gameplayStart())}frame(){var u;let n=performance.now(),e=(n-this.last)/1e3;this.last=n,e>.25&&(e=.25);let t=this.view;if(!t)return;t.sampleFps(e);let i=this.paused||this.sheet==="pause"?"pause":this.sheet?"menu":"play",s=0,r=0;if(i==="play"){let h=this.input.axis();if(this.autoplay){let f=this.runtime.suggestTarget(),g=f.x-this.runtime.px,v=f.z-this.runtime.pz,m=Math.hypot(g,v)||1;if(m>.35){let p=t.axes(),x=g/m,S=v/m;h={x:x*p.rx+S*p.rz,y:-(x*p.fx+S*p.fz)}}else h={x:0,y:0}}let d=t.axes();s=d.rx*h.x+d.fx*-h.y,r=d.rz*h.x+d.fz*-h.y,s*s+r*r>.04&&(this.movedMs+=e*1e3)}this.input.zoom&&t.zoom(this.input.zoom),this.acc+=e;let a=1/ee.simHz,o=!1;for(;this.acc>=a;){let h=this.runtime.px;this.runtime.tick(a,s,r,this.now,i==="pause"?"pause":i==="menu"?"menu":"play"),Math.hypot(this.runtime.px-h,this.runtime.pz-this.runtime.pz)>.01&&(o=!0),this.acc-=a}this.consumeSim(o),this.runtime.moving&&this.runtime.pz>7.2&&Math.abs(this.runtime.px)<2.1&&(this.splashAcc=(this.splashAcc||0)+e,this.splashAcc>.62&&(this.splashAcc=0,this.audio.splash()));let l=mu(this.save),c=no(this.save,2);t.sync(this.runtime,e,l,c),this.paintLabels(c),t.render(e),(u=this.ui)==null||u.update(),this.audio.tick(),i==="play"&&this.ads.tick(e),this.saveAcc+=e,this.saveAcc>ee.saveEvery&&(this.saveAcc=0,this.save.profile.lastSeen=this.now,this.saves.write(this.save)),this.input.esc&&this.sheet&&this.close(),this.input.endFrame(),this.fishT+=e}consumeSim(n){var o,l,c,u;let e=this.runtime.fx.some(h=>h.type==="drop"),t=this.runtime.notes.some(h=>h.kind==="toast")||this.save.stats.customers>0&&this.runtime.fx.some(h=>h.type==="ding");for(let h of this.runtime.fx){if(h.type==="pop"&&this.audio.pop(h.amount??1),h.type==="drop"&&this.audio.drop(),(h.type==="ding"||h.type==="text")&&(this.audio.coin(),h.text)){let d=(o=this.view)==null?void 0:o.project(h.x,1.1,h.z);(l=this.ui)==null||l.floater(h.text,d??void 0),(c=this.ui)==null||c.flyCoin(d??void 0),this.buzz(12)}h.type==="pop"&&this.buzz(8),(h.type==="build"||h.type==="confetti")&&(this.audio.build(),(u=this.view)==null||u.shake(.15),this.buzz(24)),h.type==="fanfare"&&this.audio.fanfare()}let i=this.runtime.notes.splice(0);this.showNotes(i);let s=this.runtime.island.crew.length>0;ac(this.save,{moved:n,stack:this.runtime.stackCount,dropped:e,served:this.runtime.fx.some(h=>h.type==="ding")||t,hired:s,chestOpened:this.save.chest.openedOnce,turboDismissed:this.save.profile.tutorialStep!==Ce.Turbo})&&(this.analytics.track("tutorial_step",{step_id:this.save.profile.tutorialStep,time_from_start:this.save.profile.totalPlaytime}),this.save.profile.tutorialStep===Ce.Done&&this.analytics.track("tutorial_complete",{total_time:this.save.profile.totalPlaytime}),this.revision++),this.save.profile.tutorialStep===Ce.Free&&this.save.profile.totalPlaytime>=900&&(this.save.profile.tutorialStep=Ce.Quests,this.toast(L(this.lang,"goal.quests")),this.revision++);let r=Math.hypot(this.runtime.px-3.15,this.runtime.pz-11.6)<1.6;r&&!this.boatLatch&&!this.sheet&&this.save.profile.tutorialStep>=Ce.Done&&(this.boatLatch=!0,this.open("map")),r||(this.boatLatch=!1);let a=Math.hypot(this.runtime.px- -1.15,this.runtime.pz-9.2)<1.5;a&&this.save.chest.spawned&&!this.chestLatch&&!this.sheet&&(this.chestLatch=!0,this.open("chest")),a||(this.chestLatch=!1),i.some(h=>h.kind==="star"&&h.stars===1)&&(this.toast(L(this.lang,"first.star")),this.analytics.track("island_star",{island_id:this.save.profile.currentIsland,stars:1,playtime_total:this.save.profile.totalPlaytime}))}showNotes(n){var e;for(let t of n){if(t.kind==="achievement"&&t.id){let i=el.find(r=>r.id===t.id),s=i?i.name[this.lang]:L(this.lang,"sheet.ach");this.toast(s,{icon:"🏆",detail:i?`+${i.shells} 🐚`:void 0}),this.analytics.track("achievement_unlock",{id:t.id}),this.audio.fanfare()}t.kind==="star"&&(this.toast(L(this.lang,"star.toast",{n:t.stars??1})),(e=this.view)==null||e.cheer()),t.kind==="card"&&this.toast(L(this.lang,"card.new")),t.kind==="mayor"&&this.toast(L(this.lang,"mayor"))}}toast(n,e){this.toasts.push({title:n,icon:e==null?void 0:e.icon,detail:e==null?void 0:e.detail,at:performance.now()})}islandStock(n){var e;return((e=this.runtime.island.stations[n])==null?void 0:e.stock)??0}labelBlocked(n,e){let t=window.innerWidth,i=window.innerHeight;return e<78||e>i-148||n<74&&e<300||n>t-74&&e<300}buzz(n){var e;if(this.gestured)try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}paintLabels(n){let e=this.view;if(!e||!this.ui)return;let t=[];if(this.sheet){this.ui.setLabels(t);return}for(let s of n);for(let s of this.runtime.customers.slice(0,8)){let r=e.project(s.x,1.45,s.z);r&&!this.labelBlocked(r.x,r.y)&&t.push({...r,text:s.item?Gl(s.item):"💭",kind:"bubble"})}let i=this.runtime.def.stations.find(s=>s.kind==="till");if(i){let s=e.project(i.x,1.7,i.z);s&&!this.labelBlocked(s.x,s.y)&&t.push({...s,text:"💳",kind:"icon"})}for(let s of this.runtime.def.stations){if(!s.item||s.kind!=="producer"&&s.kind!=="stall")continue;let r=this.runtime.island.stations[s.id];if(!(r!=null&&r.built))continue;let a=e.project(s.x,s.kind==="stall"?2.15:1.15,s.z);if(!a||this.labelBlocked(a.x,a.y))continue;let o=Gl(s.item);t.push({...a,text:`${o} ${r.stock}`,kind:"icon"})}this.ui.setLabels(t)}open(n,e=null){if(n==="pause"&&this.ads.beginPause(),this.sheet=n,this.sheetArg=e,this.revision++,n==="quests"&&this.save.profile.tutorialStep===Ce.Quests&&(this.save.profile.tutorialStep=Ce.Done),n==="event"){let t=this.save.events.weekKey;t&&this.save.profile.eventJoinedWeek!==t&&(this.save.profile.eventJoinedWeek=t,this.save.stats.eventsJoined+=1,this.analytics.track("event_join",{event_id:t}),this.showNotes(pn(this.save)))}}close(){var e;let n=this.sheet;this.sheet=null,this.sheetArg=null,this.revision++,(e=this.ui)==null||e.update(),n==="pause"&&this.ads.midgame("pause_resume"),(n==="fish"||n==="event")&&this.ads.midgame("event_end")}async act(n,e){var i,s;this.audio.click();let t=this.now;if(n==="close")return this.close();if(n==="nav"){if(e==="island"&&this.sheet==="island")return this.close();if(!e)return;this.open(e)}else if(n==="resume")this.close();else if(n==="lang"&&(e==="ru"||e==="en"))this.save.settings.lang=e,this.analytics.track("settings_change",{key:"lang",value:e}),this.revision++;else if(n==="quality"&&e)this.save.settings.quality=e,(i=this.view)==null||i.setQuality(e),this.analytics.track("settings_change",{key:"quality",value:e}),this.revision++;else if(n==="toggle"&&e)e==="music"&&(this.save.settings.music=!this.save.settings.music,this.audio.setMusic(this.save.settings.music)),e==="sfx"&&(this.save.settings.sfx=!this.save.settings.sfx,this.audio.setSfx(this.save.settings.sfx)),this.revision++;else if(n==="rename"&&e)this.save.profile.name=e.slice(0,16);else if(n==="sail-ask"&&e)this.open("sail",e);else if(n==="sail-yes"&&e){let r=Number(e);if(!Of(this.save,r)){this.toast(L(this.lang,"not.enough"));return}this.analytics.track("island_unlock",{island_id:r+1,playtime_total:this.save.profile.totalPlaytime}),await this.travel(r+1,!0)}else if(n==="travel"&&e)await this.travel(Number(e),!1);else if(n==="assign"&&e)Cf(this.save,e,this.save.profile.currentIsland)?(this.analytics.track("helper_hire",{helper_id:e}),this.showNotes(pn(this.save))):this.toast(L(this.lang,"not.enough")),this.revision++;else if(n==="unassign"&&e)Rf(this.save,e),this.revision++;else if(n==="level-helper"&&e)If(this.save,e)?this.showNotes(Jt(this.save,{type:"helperlevel"},t)):this.toast(L(this.lang,"not.enough")),this.revision++;else if(n==="light"&&e)Pf(this.save,Number(e))?this.showNotes(pn(this.save)):this.toast(L(this.lang,"not.enough")),this.revision++;else if(n==="claim-quest"&&e){let[r,a]=e.split(":");(r==="daily"||r==="weekly")&&Ef(this.save,r,Number(a))&&(this.audio.fanfare(),this.analytics.track("quest_complete",{type:r,quest_id:e})),this.revision++}else if(n==="daily-bonus")Tf(this.save)&&this.audio.chest(),this.revision++;else if(n==="weekly-bonus")Af(this.save,this.rng)&&this.audio.fanfare(),this.revision++;else if(n==="reroll-shells"&&e)this.save.profile.shells<10?this.toast(L(this.lang,"not.enough")):(this.save.profile.shells-=10,ic(this.save,Number(e),t)),this.revision++;else if(n==="reroll-ad"&&e)await this.reward("reroll_quest")&&ic(this.save,Number(e),t),this.revision++;else if(n==="login")sc(this.save,t,!1)&&(this.analytics.track("login_reward_claim",{day_index:this.save.login.cycle,doubled:!1}),this.audio.fanfare()),this.revision++;else if(n==="login-x2")await this.reward("login_x2")&&(sc(this.save,t,!0),this.analytics.track("login_reward_claim",{day_index:this.save.login.cycle,doubled:!0})),this.revision++;else if(n==="pass"&&e)rc(this.save,Number(e),!1)&&this.audio.fanfare(),this.revision++;else if(n==="pass-star"&&e)rc(this.save,Number(e),!0)&&this.audio.fanfare(),this.revision++;else if(n==="rocket")await this.reward("pass_rocket")&&(Df(this.save),this.analytics.track("pass_level",{season:this.save.pass.season,level:this.save.pass.level,via_ad:!0})),this.revision++;else if(n==="overflow")Nf(this.save)&&this.audio.chest(),this.revision++;else if(n==="offline"){let r=nc(this.save,!1);this.analytics.track("offline_collect",{minutes:0,amount:r,doubled:!1}),this.audio.coin(),this.close(),await this.ads.midgame("offline_return")}else if(n==="offline-x2"){if(await this.reward("offline_x2")){let r=nc(this.save,!0);this.analytics.track("offline_collect",{minutes:0,amount:r,doubled:!0}),this.audio.fanfare(),this.close()}}else{if(n==="turbo-open")return this.open("turbo");if(n==="intern-open")return this.open("intern");if(n==="turbo-later")this.save.profile.tutorialStep===Ce.Turbo&&(this.save.profile.tutorialStep=Ce.Free),this.close();else if(n==="turbo-ad")await this.reward("turbo")&&ca(this.save,t),this.revision++;else if(n==="turbo-shells")this.save.profile.shells<ee.turboShellCost?this.toast(L(this.lang,"not.enough")):(this.save.profile.shells-=ee.turboShellCost,ca(this.save,t)),this.revision++;else if(n==="turbo-ticket")this.save.profile.turboTickets>0&&(this.save.profile.turboTickets--,ca(this.save,t)),this.revision++;else if(n==="intern-ad")await this.reward("intern")&&oc(this.save,t,!1),this.revision++;else if(n==="intern-free")vu(this.save,t)&&oc(this.save,t,!0),this.revision++;else if(n==="chest-free"||n==="chest-key"||n==="chest-ad"){if(n==="chest-key"){if(this.save.profile.keys<=0)return;this.save.profile.keys--}if(n==="chest-ad"&&!await this.reward("chest"))return;let r=Hf(this.save,this.rng,t);if(this.showNotes(Jt(this.save,{type:"chest"},t)),this.audio.chest(),this.toast(`${r.coins?r.coins+" 🪙 ":""}${r.shells?r.shells+" 🐚":""}`),r.helper){let a=vn(r.helper);a&&this.toast(L(this.lang,"helper.new",{name:a.name[this.lang]}))}this.save.profile.tutorialStep===Ce.Chest&&(this.save.profile.tutorialStep=Ce.Turbo),this.close()}else if(n==="spin-free"||n==="spin-ad"){if(n==="spin-free"&&this.save.wheel.freeUsed||n==="spin-ad"&&!await this.reward("wheel"))return;n==="spin-free"&&(this.save.wheel.freeUsed=!0);let{index:r,jackpot:a}=zf(this.save,this.rng,t);this.wheelAngle+=1080+r*45,a&&(this.toast(L(this.lang,"lucky")),this.showNotes(pn(this.save))),this.audio.fanfare(),this.revision++}else if(n==="exp-go"&&e){let[r,a]=e.split(":"),o=Number(a);Vf(this.save,r,o,t)||this.toast(L(this.lang,"exp.busy")),this.revision++}else if(n==="exp-claim"&&e)Gf(this.save,e,t)&&this.audio.fanfare(),this.revision++;else if(n==="exp-skip"&&e)await this.reward("expedition_skip")&&Wf(this.save,e),this.revision++;else if(n==="event-tier"&&e)qf(this.save,Number(e))&&(this.audio.fanfare(),this.analytics.track("event_reward",{event_id:this.save.events.weekKey,tier:Number(e)})),this.revision++;else if(n==="event-join")this.revision++;else if(n==="race-claim"){let r=Xf(this.save,t);r>=0&&(this.toast(L(this.lang,"place",{n:r+1})),this.showNotes(pn(this.save))),this.revision++}else if(n==="fish-cast"){if(this.fishCasts<=0)return;this.fishCasts--;let r=8+this.fishT*70%84,a=r>42&&r<52,o=r>34&&r<62,l=a?8:o?4:1;a&&this.fishPerfects++,this.fishScore+=l,this.toast(L(this.lang,a?"perfect":o?"good":"miss")),this.fishCasts===0&&($f(this.save,this.fishScore,this.fishPerfects),this.showNotes(pn(this.save)),this.fishCasts=3,this.fishScore=0,this.fishPerfects=0),this.revision++}else if(n==="fish-extra")await this.reward("minigame_extra")&&this.fishCasts++,this.revision++;else if(n==="vip")lc(this.save,!1)&&this.audio.fanfare(),this.revision++;else if(n==="vip-x2")await this.reward("vip_x2")&&lc(this.save,!0),this.revision++;else if(n==="skip-ad"&&e)await this.reward("skip_timer")&&this.showNotes(Ff(this.save,this.save.profile.currentIsland,e,"ad",t)),this.revision++;else if(n==="prestige")Bf(this.save,this.save.profile.currentIsland)&&(this.analytics.track("prestige",{island:this.save.profile.currentIsland,count:this.save.stats.prestiges}),this.showNotes(pn(this.save)),this.audio.fanfare(),await((s=this.view)==null?void 0:s.loadIsland(this.save))),this.revision++;else if(n==="buy-cos"&&e)Lf(this.save,e)?this.showNotes(pn(this.save)):this.toast(L(this.lang,"not.enough")),this.revision++;else if(n==="equip"&&e){let[r,a]=e.split(":");(r==="hat"||r==="trail"||r==="frame")&&(this.save.equipped[r]=a??null),this.revision++}}}async reward(n){this.analytics.track("ad_rewarded_offer",{placement:n,island:this.save.profile.currentIsland}),this.analytics.track("ad_rewarded_start",{placement:n});let e=await this.ads.showRewarded(n);return this.analytics.track(e?"ad_rewarded_complete":"ad_rewarded_fail",{placement:n}),e&&this.audio.fanfare(),e}async travel(n,e){var i,s,r;let t=gt(n);this.close(),(i=this.ui)==null||i.setTravel(L(this.lang,"loading.travel",{name:t.name[this.lang]})),this.ads.gameplayStop(),e&&(this.analytics.track("ad_midgame_request",{reason:"island_travel"}),await this.ads.midgame("island_travel")),this.save.profile.currentIsland=n,this.save.profile.playerX=.2,this.save.profile.playerZ=3.6,this.runtime=new uc(this.save,n,this.rng.next()*1e9),await((s=this.view)==null?void 0:s.loadIsland(this.save)),(r=this.ui)==null||r.setTravel(null),this.ads.gameplayStart()}onHide(){var n,e;document.hidden?(this.hiddenAt=Date.now(),(n=this.view)==null||n.engine.stopRenderLoop(),this.audio.suspendForAd(!0),this.save.profile.lastSeen=this.now,this.saves.write(this.save),this.analytics.track("session_end",{session_len:this.ads.memory.playtime})):(this.audio.suspendForAd(!1),this.last=performance.now(),(e=this.view)==null||e.engine.runRenderLoop(()=>this.frame()),Date.now()-this.hiddenAt>8e3&&tc(this.save,this.now).lines.some(t=>t.coins>1)&&this.open("offline"))}};async function Ip(){var c;let n=Cp(),e=new Qf(Jf(),void 0),t;try{t=await e.load()}catch{t=cu()}let i=new Rp(t,n,e),s=document.querySelector("#c"),r=document.querySelector("#boot-bar"),a=performance.now();await i.start(s,u=>{r&&(r.style.width=`${Math.round(u*100)}%`)});let o=680-(performance.now()-a);o>0&&await new Promise(u=>setTimeout(u,o)),(c=document.querySelector("#boot"))==null||c.classList.add("hide");let l=window;l.__HARBOR__=i}var Pp=new Xh;window.addEventListener("error",n=>{Pp.track("error",{message:String(n.message||"error")})});function Lp(){return Ip().catch(n=>{console.error(n);let e=document.querySelector("#boot p");e&&(e.textContent=n instanceof Error?n.message:String(n))})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="170",kp=0,mc=1,Dp=2,bu=1,Mu=2,In=3,Fn=0,Ut=1,gn=2,Qn=0,$i=1,gc=2,vc=3,_c=4,Np=5,pi=100,Up=101,Fp=102,Op=103,Bp=104,zp=200,Hp=201,Vp=202,Gp=203,ro=204,ao=205,Wp=206,$p=207,qp=208,Xp=209,jp=210,Yp=211,Kp=212,Jp=213,Zp=214,oo=0,lo=1,co=2,Ji=3,ho=4,uo=5,fo=6,po=7,sl=0,Qp=1,em=2,ei=0,tm=1,nm=2,im=3,Su=4,sm=5,rm=6,am=7,yc="attached",om="detached",wu=300,Zi=301,Qi=302,mo=303,go=304,Qr=306,es=1e3,Yn=1001,Vr=1002,Ft=1003,Eu=1004,Ls=1005,Gt=1006,Lr=1007,Ln=1008,On=1009,Tu=1010,Au=1011,zs=1012,rl=1013,gi=1014,cn=1015,Xs=1016,al=1017,ol=1018,ts=1020,Cu=35902,Ru=1021,Iu=1022,Zt=1023,Pu=1024,Lu=1025,qi=1026,ns=1027,ll=1028,cl=1029,ku=1030,hl=1031,ul=1033,kr=33776,Dr=33777,Nr=33778,Ur=33779,vo=35840,_o=35841,yo=35842,xo=35843,bo=36196,Mo=37492,So=37496,wo=37808,Eo=37809,To=37810,Ao=37811,Co=37812,Ro=37813,Io=37814,Po=37815,Lo=37816,ko=37817,Do=37818,No=37819,Uo=37820,Fo=37821,Fr=36492,Oo=36494,Bo=36495,Du=36283,zo=36284,Ho=36285,Vo=36286,lm=2200,cm=2201,hm=2202,Hs=2300,Vs=2301,da=2302,Vi=2400,Gi=2401,Gr=2402,dl=2500,um=2501,dm=0,Nu=1,Go=2,fm=3200,pm=3201,fl=0,mm=1,jn="",yt="srgb",Ot="srgb-linear",ea="linear",nt="srgb",bi=7680,xc=519,gm=512,vm=513,_m=514,Uu=515,ym=516,xm=517,bm=518,Mm=519,Wo=35044,bc="300 es",kn=2e3,Wr=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const Ns=Math.PI/180,is=180/Math.PI;function hn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function xt(n,e,t){return Math.max(e,Math.min(t,n))}function pl(n,e){return(n%e+e)%e}function Sm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wm(n,e,t){return n!==e?(t-n)/(e-n):0}function Us(n,e,t){return(1-t)*n+t*e}function Em(n,e,t,i){return Us(n,e,1-Math.exp(-t*i))}function Tm(n,e=1){return e-Math.abs(pl(n,e*2)-e)}function Am(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Im(n,e){return n+Math.random()*(e-n)}function Pm(n){return n*(.5-Math.random())}function Lm(n){n!==void 0&&(Mc=n);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function km(n){return n*Ns}function Dm(n){return n*is}function Nm(n){return(n&n-1)===0&&n!==0}function Um(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bm={DEG2RAD:Ns,RAD2DEG:is,generateUUID:hn,clamp:xt,euclideanModulo:pl,mapLinear:Sm,inverseLerp:wm,lerp:Us,damp:Em,pingpong:Tm,smoothstep:Am,smootherstep:Cm,randInt:Rm,randFloat:Im,randFloatSpread:Pm,seededRandom:Lm,degToRad:km,radToDeg:Dm,isPowerOfTwo:Nm,ceilPowerOfTwo:Um,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:Om,normalize:tt,denormalize:ln};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,i,s,r,a,o,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],x=s[1],S=s[4],_=s[7],I=s[2],E=s[5],T=s[8];return r[0]=a*v+o*x+l*I,r[3]=a*m+o*S+l*E,r[6]=a*p+o*_+l*T,r[1]=c*v+u*x+h*I,r[4]=c*m+u*S+h*E,r[7]=c*p+u*_+h*T,r[2]=d*v+f*x+g*I,r[5]=d*m+f*S+g*E,r[8]=d*p+f*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Ue;function Fu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zm(){const n=Gs("canvas");return n.style.display="block",n}const Sc={};function ks(n){n in Sc||(Sc[n]=!0,console.warn(n))}function Hm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Vm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ve={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(n.r=Nn(n.r),n.g=Nn(n.g),n.b=Nn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(n.r=Xi(n.r),n.g=Xi(n.g),n.b=Xi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===jn?ea:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const wc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ve.define({[Ot]:{primaries:wc,whitePoint:Tc,transfer:ea,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:wc,whitePoint:Tc,transfer:nt,toXYZ:Ac,fromXYZ:Cc,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});let Mi;class Wm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Gs("canvas")),Mi.width=e.width,Mi.height=e.height;const i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nn(t[i]/255)*255):t[i]=Nn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $m=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pa(s[a].image)):r.push(pa(s[a]))}else r=pa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function pa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qm=0;class bt extends yi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=Yn,s=Yn,r=Gt,a=Ln,o=Zt,l=On,c=bt.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=hn(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=wu;bt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,s=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(f+1)/2,I=(p+1)/2,E=(u+d)/4,T=(h+v)/4,C=(g+m)/4;return S>_&&S>I?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=T/i):_>I?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=C/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=T/r,s=C/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Xm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bu extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jm extends bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*v,x=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),E=Math.atan2(I,p*x);m=Math.sin(m*E)/I,o=Math.sin(o*E)/I}const _=o*x;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+v*_,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new R,Rc=new un;class Qt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),er.subVectors(this.max,_s),Si.subVectors(e.a,_s),wi.subVectors(e.b,_s),Ei.subVectors(e.c,_s),Hn.subVectors(wi,Si),Vn.subVectors(Ei,wi),ri.subVectors(Si,Ei);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ri.z,ri.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ri.z,0,-ri.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ri.y,ri.x,0];return!ga(t,Si,wi,Ei,er)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Si,wi,Ei,er))?!1:(tr.crossVectors(Hn,Vn),t=[tr.x,tr.y,tr.z],ga(t,Si,wi,Ei,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new R,new R,new R,new R,new R,new R,new R,new R],rn=new R,Qs=new Qt,Si=new R,wi=new R,Ei=new R,Hn=new R,Vn=new R,ri=new R,_s=new R,er=new R,tr=new R,ai=new R;function ga(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ai.fromArray(n,r);const o=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ym=new Qt,ys=new R,va=new R;class _n{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ym.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(va)),this.expandByPoint(ys.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new R,_a=new R,nr=new R,Gn=new R,ya=new R,ir=new R,xa=new R;class ta{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_a.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,a=-this.direction.dot(nr),o=Gn.dot(this.direction),l=-Gn.dot(nr),c=Gn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_a).addScaledVector(nr,d),f}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,s,r){ya.subVectors(t,e),ir.subVectors(i,e),xa.crossVectors(ya,ir);let a=this.direction.dot(xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(ir.crossVectors(Gn,ir));if(l<0)return null;const c=o*this.direction.dot(ya.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(xa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,g,v,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,g,v,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Km,e,Jm)}lookAt(e,t,i){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Wn.crossVectors(i,Ht),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Wn.crossVectors(i,Ht)),Wn.normalize(),sr.crossVectors(Ht,Wn),s[0]=Wn.x,s[4]=sr.x,s[8]=Ht.x,s[1]=Wn.y,s[5]=sr.y,s[9]=Ht.y,s[2]=Wn.z,s[6]=sr.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],S=i[7],_=i[11],I=i[15],E=s[0],T=s[4],C=s[8],w=s[12],b=s[1],P=s[5],V=s[9],O=s[13],G=s[2],X=s[6],q=s[10],Z=s[14],$=s[3],le=s[7],pe=s[11],we=s[15];return r[0]=a*E+o*b+l*G+c*$,r[4]=a*T+o*P+l*X+c*le,r[8]=a*C+o*V+l*q+c*pe,r[12]=a*w+o*O+l*Z+c*we,r[1]=u*E+h*b+d*G+f*$,r[5]=u*T+h*P+d*X+f*le,r[9]=u*C+h*V+d*q+f*pe,r[13]=u*w+h*O+d*Z+f*we,r[2]=g*E+v*b+m*G+p*$,r[6]=g*T+v*P+m*X+p*le,r[10]=g*C+v*V+m*q+p*pe,r[14]=g*w+v*O+m*Z+p*we,r[3]=x*E+S*b+_*G+I*$,r[7]=x*T+S*P+_*X+I*le,r[11]=x*C+S*V+_*q+I*pe,r[15]=x*w+S*O+_*Z+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=h*m*c-v*d*c+v*l*f-o*m*f-h*l*p+o*d*p,S=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,_=u*v*c-g*h*c+g*o*f-a*v*f-u*o*p+a*h*p,I=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,E=t*x+i*S+s*_+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=x*T,e[1]=(v*d*r-h*m*r-v*s*f+i*m*f+h*s*p-i*d*p)*T,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*T,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*T,e[4]=S*T,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*T,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*T,e[8]=_*T,e[9]=(g*h*r-u*v*r-g*i*f+t*v*f+u*i*p-t*h*p)*T,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*T,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*T,e[12]=I*T,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*m+t*h*m)*T,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*T,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,v=a*u,m=a*h,p=o*h,x=l*c,S=l*u,_=l*h,I=i.x,E=i.y,T=i.z;return s[0]=(1-(v+p))*I,s[1]=(f+_)*I,s[2]=(g-S)*I,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+S)*T,s[9]=(m-x)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ti.set(s[0],s[1],s[2]).length();const a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,u=1/a,h=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,t.setFromRotationMatrix(an),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=kn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(o===kn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=kn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),d=(t+e)*c,f=(i+s)*u;let g,v;if(o===kn)g=(a+r)*h,v=-2*h;else if(o===Wr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ti=new R,an=new Pe,Km=new R(0,0,0),Jm=new R(1,1,1),Wn=new R,sr=new R,Ht=new R,Ic=new Pe,Pc=new un;class dn{constructor(e=0,t=0,i=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zm=0;const Lc=new R,Ai=new un,Tn=new Pe,rr=new R,xs=new R,Qm=new R,eg=new un,kc=new R(1,0,0),Dc=new R(0,1,0),Nc=new R(0,0,1),Uc={type:"added"},tg={type:"removed"},Ci={type:"childadded",child:null},ba={type:"childremoved",child:null};class at extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new R,t=new dn,i=new un,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ue}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?rr.copy(e):rr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(xs,rr,this.up):Tn.lookAt(rr,xs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tg),ba.child=e,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}at.DEFAULT_UP=new R(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new R,An=new R,Ma=new R,Cn=new R,Ri=new R,Ii=new R,Fc=new R,Sa=new R,wa=new R,Ea=new R,Ta=new Ke,Aa=new Ke,Ca=new Ke;class Kt{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){on.subVectors(s,t),An.subVectors(i,t),Ma.subVectors(e,t);const a=on.dot(on),o=on.dot(An),l=on.dot(Ma),c=An.dot(An),u=An.dot(Ma),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ta.setScalar(0),Aa.setScalar(0),Ca.setScalar(0),Ta.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,i),Ca.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(Aa,r.y),a.addScaledVector(Ca,r.z),a}static isFrontFacing(e,t,i,s){return on.subVectors(i,t),An.subVectors(e,t),on.cross(An).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),An.subVectors(this.a,this.b),on.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ri.subVectors(s,i),Ii.subVectors(r,i),Sa.subVectors(e,i);const l=Ri.dot(Sa),c=Ii.dot(Sa);if(l<=0&&c<=0)return t.copy(i);wa.subVectors(e,s);const u=Ri.dot(wa),h=Ii.dot(wa);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ri,a);Ea.subVectors(e,r);const f=Ri.dot(Ea),g=Ii.dot(Ea);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ii,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Fc.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Fc,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Ri,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Ra(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ve.workingColorSpace){if(e=pl(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ra(a,r,e+1/3),this.g=Ra(a,r,e),this.b=Ra(a,r,e-1/3)}return Ve.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=Hu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ve.fromWorkingColorSpace(It.copy(this),e),Math.round(xt(It.r*255,0,255))*65536+Math.round(xt(It.g*255,0,255))*256+Math.round(xt(It.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(It.copy(this),t);const i=It.r,s=It.g,r=It.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=yt){Ve.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,s=It.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ar);const i=Us($n.h,ar.h,t),s=Us($n.s,ar.s,t),r=Us($n.l,ar.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new re;re.NAMES=Hu;let ng=0;class en extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=hn(),this.name="",this.blending=$i,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=ao,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ro&&(i.blendSrc=this.blendSrc),this.blendDst!==ao&&(i.blendDst=this.blendDst),this.blendEquation!==pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends en{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new R,or=new ae;class Tt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wo,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}}class Vu extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gu extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ig=0;const jt=new Pe,Ia=new at,Pi=new R,Vt=new Qt,bs=new Qt,wt=new R;class At extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Gu:Vu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,bs.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,bs.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(bs.min),Vt.expandByPoint(bs.max))}Vt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),wt.add(Pi)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new R,l[C]=new R;const c=new R,u=new R,h=new R,d=new ae,f=new ae,g=new ae,v=new R,m=new R;function p(C,w,b){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,b),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(v),o[w].add(v),o[b].add(v),l[C].add(m),l[w].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,w=x.length;C<w;++C){const b=x[C],P=b.start,V=b.count;for(let O=P,G=P+V;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new R,_=new R,I=new R,E=new R;function T(C){I.fromBufferAttribute(s,C),E.copy(I);const w=o[C];S.copy(w),S.sub(I.multiplyScalar(I.dot(w))).normalize(),_.crossVectors(E,w);const P=_.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,w=x.length;C<w;++C){const b=x[C],P=b.start,V=b.count;for(let O=P,G=P+V;O<G;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Tt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new Pe,oi=new ta,lr=new _n,Bc=new R,cr=new R,hr=new R,ur=new R,Pa=new R,dr=new R,zc=new R,fr=new R;class Ye extends at{constructor(e=new At,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Pa.fromBufferAttribute(h,e),a?dr.addScaledVector(Pa,u):dr.addScaledVector(Pa.sub(t),u))}t.add(dr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(r),oi.copy(e.ray).recast(e.near),!(lr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(lr,Bc)===null||oi.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Oc.copy(r).invert(),oi.copy(e.ray).applyMatrix4(Oc),!(i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,I=S;_<I;_+=3){const E=o.getX(_),T=o.getX(_+1),C=o.getX(_+2);s=pr(this,p,e,i,c,u,h,E,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=pr(this,a,e,i,c,u,h,x,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,I=S;_<I;_+=3){const E=_,T=_+1,C=_+2;s=pr(this,p,e,i,c,u,h,E,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,S=m+1,_=m+2;s=pr(this,a,e,i,c,u,h,x,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function sg(n,e,t,i,s,r,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Fn,o),l===null)return null;fr.copy(o),fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:n}}function pr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,cr),n.getVertexPosition(l,hr),n.getVertexPosition(c,ur);const u=sg(n,e,t,i,cr,hr,ur,zc);if(u){const h=new R;Kt.getBarycoord(zc,cr,hr,ur,h),s&&(u.uv=Kt.getInterpolatedAttribute(s,o,l,c,h,new ae)),r&&(u.uv1=Kt.getInterpolatedAttribute(r,o,l,c,h,new ae)),a&&(u.normal=Kt.getInterpolatedAttribute(a,o,l,c,h,new R),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new R,materialIndex:0};Kt.getNormal(cr,hr,ur,d.normal),u.face=d,u.barycoord=h}return u}class ti extends At{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(v,m,p,x,S,_,I,E,T,C,w){const b=_/T,P=I/C,V=_/2,O=I/2,G=E/2,X=T+1,q=C+1;let Z=0,$=0;const le=new R;for(let pe=0;pe<q;pe++){const we=pe*P-O;for(let Be=0;Be<X;Be++){const it=Be*b-V;le[v]=it*x,le[m]=we*S,le[p]=G,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=E>0?1:-1,u.push(le.x,le.y,le.z),h.push(Be/T),h.push(1-pe/C),Z+=1}}for(let pe=0;pe<C;pe++)for(let we=0;we<T;we++){const Be=d+we+X*pe,it=d+we+X*(pe+1),Y=d+(we+1)+X*(pe+1),ie=d+(we+1)+X*pe;l.push(Be,it,ie),l.push(it,Y,ie),$+=6}o.addGroup(f,$,w),f+=$,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const s in i)e[s]=i[s]}return e}function rg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const ag={clone:ss,merge:kt};var og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends en{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=og,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $u extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new R,Hc=new ae,Vc=new ae;class Dt extends $u{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Vc),t.subVectors(Vc,Hc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,ki=1;class cg extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dt(Li,ki,e,t);s.layers=this.layers,this.add(s);const r=new Dt(Li,ki,e,t);r.layers=this.layers,this.add(r);const a=new Dt(Li,ki,e,t);a.layers=this.layers,this.add(a);const o=new Dt(Li,ki,e,t);o.layers=this.layers,this.add(o);const l=new Dt(Li,ki,e,t);l.layers=this.layers,this.add(l);const c=new Dt(Li,ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qu extends bt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hg extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ti(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Qn});r.uniforms.tEquirect.value=t;const a=new Ye(s,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Gt),new cg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const La=new R,ug=new R,dg=new Ue;class di{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=La.subVectors(i,t).cross(ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(La),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dg.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new _n,mr=new R;class ml{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,a=new di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],S=s[14],_=s[15];if(i[0].setComponents(l-r,d-c,m-f,_-p).normalize(),i[1].setComponents(l+r,d+c,m+f,_+p).normalize(),i[2].setComponents(l+a,d+u,m+g,_+x).normalize(),i[3].setComponents(l-a,d-u,m-g,_-x).normalize(),i[4].setComponents(l-o,d-h,m-v,_-S).normalize(),t===kn)i[5].setComponents(l+o,d+h,m+v,_+S).normalize();else if(t===Wr)i[5].setComponents(o,h,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fg(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class js extends At{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*d-a;for(let S=0;S<c;S++){const _=S*h-r;g.push(_,-x,0),v.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const S=x+c*p,_=x+c*(p+1),I=x+1+c*(p+1),E=x+1+c*p;f.push(S,_,E),f.push(_,I,E)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:vg,alphatest_fragment:_g,alphatest_pars_fragment:yg,aomap_fragment:xg,aomap_pars_fragment:bg,batching_pars_vertex:Mg,batching_vertex:Sg,begin_vertex:wg,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:Ag,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:kg,color_pars_fragment:Dg,color_pars_vertex:Ng,color_vertex:Ug,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:zg,displacementmap_vertex:Hg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:$g,envmap_fragment:qg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:jg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:a0,envmap_vertex:Kg,fog_vertex:Jg,fog_pars_vertex:Zg,fog_fragment:Qg,fog_pars_fragment:e0,gradientmap_pars_fragment:t0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:v0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:y0,map_fragment:x0,map_pars_fragment:b0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:E0,morphinstance_vertex:T0,morphcolor_vertex:A0,morphnormal_vertex:C0,morphtarget_pars_vertex:R0,morphtarget_vertex:I0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:k0,normal_pars_vertex:D0,normal_vertex:N0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:H0,packing:V0,premultiplied_alpha_fragment:G0,project_vertex:W0,dithering_fragment:$0,dithering_pars_fragment:q0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:K0,shadowmap_vertex:J0,shadowmask_pars_fragment:Z0,skinbase_vertex:Q0,skinning_pars_vertex:ev,skinning_vertex:tv,skinnormal_vertex:nv,specularmap_fragment:iv,specularmap_pars_fragment:sv,tonemapping_fragment:rv,tonemapping_pars_fragment:av,transmission_fragment:ov,transmission_pars_fragment:lv,uv_pars_fragment:cv,uv_pars_vertex:hv,uv_vertex:uv,worldpos_vertex:dv,background_vert:fv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:vv,cube_frag:_v,depth_vert:yv,depth_frag:xv,distanceRGBA_vert:bv,distanceRGBA_frag:Mv,equirect_vert:Sv,equirect_frag:wv,linedashed_vert:Ev,linedashed_frag:Tv,meshbasic_vert:Av,meshbasic_frag:Cv,meshlambert_vert:Rv,meshlambert_frag:Iv,meshmatcap_vert:Pv,meshmatcap_frag:Lv,meshnormal_vert:kv,meshnormal_frag:Dv,meshphong_vert:Nv,meshphong_frag:Uv,meshphysical_vert:Fv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:zv,points_vert:Hv,points_frag:Vv,shadow_vert:Gv,shadow_frag:Wv,sprite_vert:$v,sprite_frag:qv},se={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},mn={basic:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new re(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:kt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:kt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:kt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new re(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:kt([se.points,se.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:kt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:kt([se.common,se.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:kt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:kt([se.sprite,se.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:kt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:kt([se.lights,se.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mn.physical={uniforms:kt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const gr={r:0,b:0,g:0},ci=new dn,Xv=new Pe;function jv(n,e,t,i,s,r,a){const o=new re(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function v(x){let S=!1;const _=g(x);_===null?p(o,l):_&&_.isColor&&(p(_,1),S=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===Qr)?(u===void 0&&(u=new Ye(new ti(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ss(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ci.copy(S.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(ci)),u.material.toneMapped=Ve.getTransfer(_.colorSpace)!==nt,(h!==_||d!==_.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ye(new js(2,2),new tn({name:"BackgroundMaterial",uniforms:ss(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,S){x.getRGB(gr,Wu(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:m}}function Yv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(b,P,V,O,G){let X=!1;const q=h(O,V,P);r!==q&&(r=q,c(r.object)),X=f(b,O,V,G),X&&g(b,O,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(b,P,V,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function u(b){return n.deleteVertexArray(b)}function h(b,P,V){const O=V.wireframe===!0;let G=i[b.id];G===void 0&&(G={},i[b.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let q=X[O];return q===void 0&&(q=d(l()),X[O]=q),q}function d(b){const P=[],V=[],O=[];for(let G=0;G<t;G++)P[G]=0,V[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,P,V,O){const G=r.attributes,X=P.attributes;let q=0;const Z=V.getAttributes();for(const $ in Z)if(Z[$].location>=0){const pe=G[$];let we=X[$];if(we===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(we=b.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function g(b,P,V,O){const G={},X=P.attributes;let q=0;const Z=V.getAttributes();for(const $ in Z)if(Z[$].location>=0){let pe=X[$];pe===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),G[$]=we,q++}r.attributes=G,r.attributesNum=q,r.index=O}function v(){const b=r.newAttributes;for(let P=0,V=b.length;P<V;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const V=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;V[b]=1,O[b]===0&&(n.enableVertexAttribArray(b),O[b]=1),G[b]!==P&&(n.vertexAttribDivisor(b,P),G[b]=P)}function x(){const b=r.newAttributes,P=r.enabledAttributes;for(let V=0,O=P.length;V<O;V++)P[V]!==b[V]&&(n.disableVertexAttribArray(V),P[V]=0)}function S(b,P,V,O,G,X,q){q===!0?n.vertexAttribIPointer(b,P,V,G,X):n.vertexAttribPointer(b,P,V,O,G,X)}function _(b,P,V,O){v();const G=O.attributes,X=V.getAttributes(),q=P.defaultAttributeValues;for(const Z in X){const $=X[Z];if($.location>=0){let le=G[Z];if(le===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const pe=le.normalized,we=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const it=Be.buffer,Y=Be.type,ie=Be.bytesPerElement,be=Y===n.INT||Y===n.UNSIGNED_INT||le.gpuType===rl;if(le.isInterleavedBufferAttribute){const ce=le.data,Re=ce.stride,ke=le.offset;if(ce.isInstancedInterleavedBuffer){for(let ze=0;ze<$.locationSize;ze++)p($.location+ze,ce.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<$.locationSize;ze++)m($.location+ze);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ze=0;ze<$.locationSize;ze++)S($.location+ze,we/$.locationSize,Y,pe,Re*ie,(ke+we/$.locationSize*ze)*ie,be)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<$.locationSize;ce++)p($.location+ce,le.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<$.locationSize;ce++)m($.location+ce);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ce=0;ce<$.locationSize;ce++)S($.location+ce,we/$.locationSize,Y,pe,we*ie,we/$.locationSize*ce*ie,be)}}else if(q!==void 0){const pe=q[Z];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv($.location,pe);break;case 3:n.vertexAttrib3fv($.location,pe);break;case 4:n.vertexAttrib4fv($.location,pe);break;default:n.vertexAttrib1fv($.location,pe)}}}}x()}function I(){C();for(const b in i){const P=i[b];for(const V in P){const O=P[V];for(const G in O)u(O[G].object),delete O[G];delete P[V]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const V in P){const O=P[V];for(const G in O)u(O[G].object),delete O[G];delete P[V]}delete i[b.id]}function T(b){for(const P in i){const V=i[P];if(V[b.id]===void 0)continue;const O=V[b.id];for(const G in O)u(O[G].object),delete O[G];delete V[b.id]}}function C(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Kv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Zt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==On&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:I,maxSamples:E}}function Zv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new di,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,S=x*4;let _=p.clippingState||null;l.value=_,_=u(g,d,S,f);for(let I=0;I!==S;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==v;++S,_+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Qv(n){let e=new WeakMap;function t(a,o){return o===mo?a.mapping=Zi:o===go&&(a.mapping=Qi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===mo||o===go)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hg(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class gl extends $u{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,Gc=[.125,.215,.35,.446,.526,.582],mi=20,ka=new gl,Wc=new re;let Da=null,Na=0,Ua=0,Fa=!1;const fi=(1+Math.sqrt(5))/2,Di=1/fi,$c=[new R(-fi,Di,0),new R(fi,Di,0),new R(-Di,0,fi),new R(Di,0,fi),new R(0,fi,-Di),new R(0,fi,Di),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Na,Ua),this._renderer.xr.enabled=Fa,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Xs,format:Zt,colorSpace:Ot,depthBuffer:!1},s=Xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e_(r)),this._blurMaterial=t_(r,e,t)}return s}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,i,s){const o=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Wc),u.toneMapping=ei,u.autoClear=!1;const f=new Wt({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new Ye(new ti,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Wc),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;vr(s,x*S,p>2?S:0,S,S),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zi||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$c[(s-r-1)%$c.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let x=0;for(let T=0;T<mi;++T){const C=T/v,w=Math.exp(-C*C/2);p.push(w),T===0?x+=w:T<m&&(x+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const _=this._sizeLods[s],I=3*_*(s>S-Wi?s-S+Wi:0),E=4*(this._cubeSize-_);vr(t,I,E,3*_,2*_),l.setRenderTarget(t),l.render(h,ka)}}function e_(n){const e=[],t=[],i=[];let s=n;const r=n-Wi+1+Gc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Wi?l=Gc[a-n+Wi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(w,v*g*E),S.set(d,m*g*E);const b=[E,E,E,E,E,E];_.set(b,p*g*E)}const I=new At;I.setAttribute("position",new Tt(x,v)),I.setAttribute("uv",new Tt(S,m)),I.setAttribute("faceIndex",new Tt(_,p)),e.push(I),s>Wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xc(n,e,t){const i=new vi(n,e,t);return i.texture.mapping=Qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function t_(n,e,t){const i=new Float32Array(mi),s=new R(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Yc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mo||l===go,u=l===Zi||l===Qi;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new qc(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new qc(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function i_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ks("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function s_(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let S=0,_=x.length;S<_;S+=3){const I=x[S+0],E=x[S+1],T=x[S+2];d.push(I,E,E,T,T,I)}}else if(g!==void 0){const x=g.array;v=g.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const I=S+0,E=S+1,T=S+2;d.push(I,E,E,T,T,I)}}else return;const m=new(Fu(d)?Gu:Vu)(d,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function r_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*v[x];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function a_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function o_(n,e,t){const i=new WeakMap,s=new Ke;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let b=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let I=o.attributes.position.count*_,E=1;I>e.maxTextureSize&&(E=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const T=new Float32Array(I*E*4*h),C=new Bu(T,I,E,h);C.type=cn,C.needsUpdate=!0;const w=_*4;for(let P=0;P<h;P++){const V=p[P],O=x[P],G=S[P],X=I*E*4*P;for(let q=0;q<V.count;q++){const Z=q*w;g===!0&&(s.fromBufferAttribute(V,q),T[X+Z+0]=s.x,T[X+Z+1]=s.y,T[X+Z+2]=s.z,T[X+Z+3]=0),v===!0&&(s.fromBufferAttribute(O,q),T[X+Z+4]=s.x,T[X+Z+5]=s.y,T[X+Z+6]=s.z,T[X+Z+7]=0),m===!0&&(s.fromBufferAttribute(G,q),T[X+Z+8]=s.x,T[X+Z+9]=s.y,T[X+Z+10]=s.z,T[X+Z+11]=G.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new ae(I,E)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function l_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class ju extends bt{constructor(e,t,i,s,r,a,o,l,c,u=qi){if(u!==qi&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qi&&(i=gi),i===void 0&&u===ns&&(i=ts),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yu=new bt,Kc=new ju(1,1),Ku=new Bu,Ju=new jm,Zu=new qu,Jc=[],Zc=[],Qc=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function na(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;th.set(i),n.uniformMatrix2fv(this.addr,!1,th),St(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;eh.set(i),n.uniformMatrix3fv(this.addr,!1,eh),St(t,i)}}function m_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),St(t,i)}}function g_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function x_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function w_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kc.compareFunction=Uu,r=Kc):r=Yu,t.setTexture2D(e||r,s)}function E_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ju,s)}function T_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zu,s)}function A_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ku,s)}function C_(n){switch(n){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return v_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return x_;case 36294:return b_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(n,e){n.uniform1fv(this.addr,e)}function I_(n,e){const t=us(e,this.size,2);n.uniform2fv(this.addr,t)}function P_(n,e){const t=us(e,this.size,3);n.uniform3fv(this.addr,t)}function L_(n,e){const t=us(e,this.size,4);n.uniform4fv(this.addr,t)}function k_(n,e){const t=us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D_(n,e){const t=us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N_(n,e){const t=us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U_(n,e){n.uniform1iv(this.addr,e)}function F_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function B_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function H_(n,e){n.uniform2uiv(this.addr,e)}function V_(n,e){n.uniform3uiv(this.addr,e)}function G_(n,e){n.uniform4uiv(this.addr,e)}function W_(n,e,t){const i=this.cache,s=e.length,r=na(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Yu,r[a])}function $_(n,e,t){const i=this.cache,s=e.length,r=na(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ju,r[a])}function q_(n,e,t){const i=this.cache,s=e.length,r=na(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zu,r[a])}function X_(n,e,t){const i=this.cache,s=e.length,r=na(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ku,r[a])}function j_(n){switch(n){case 5126:return R_;case 35664:return I_;case 35665:return P_;case 35666:return L_;case 35674:return k_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return X_}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}}class K_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j_(t.type)}}class J_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function nh(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const r=Oa.exec(i),a=Oa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nh(t,c===void 0?new Y_(o,n,e):new K_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new J_(o),nh(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Z_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let ey=0;function ty(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sh=new Ue;function ny(n){Ve._getMatrix(sh,Ve.workingColorSpace,n);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ty(n.getShaderSource(e),a)}else return s}function iy(n,e){const t=ny(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sy(n,e){let t;switch(e){case tm:t="Linear";break;case nm:t="Reinhard";break;case im:t="Cineon";break;case Su:t="ACESFilmic";break;case rm:t="AgX";break;case am:t="Neutral";break;case sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new R;function ry(){Ve.getLuminanceCoefficients(_r);const n=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ay(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function oy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ly(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ds(n){return n!==""}function ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(cy,uy)}const hy=new Map;function uy(n,e){let t=Oe[e];if(t===void 0){const i=hy.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}const dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(n){return n.replace(dy,fy)}function fy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function my(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zi:case Qi:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case Qp:e="ENVMAP_BLENDING_MIX";break;case em:e="ENVMAP_BLENDING_ADD";break}return e}function _y(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yy(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=py(t),c=my(t),u=gy(t),h=vy(t),d=_y(t),f=ay(t),g=oy(r),v=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(m=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ei?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,iy("linearToOutputTexel",t.outputColorSpace),ry(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=$o(a),a=ah(a,t),a=oh(a,t),o=$o(o),o=ah(o,t),o=oh(o,t),a=lh(a),o=lh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+a,_=x+p+o,I=ih(s,s.VERTEX_SHADER,S),E=ih(s,s.FRAGMENT_SHADER,_);s.attachShader(v,I),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(P){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(E).trim();let X=!0,q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,E);else{const Z=rh(s,I,"vertex"),$=rh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+Z+`
`+$)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||G==="")&&(q=!1);q&&(P.diagnostics={runnable:X,programLog:V,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(I),s.deleteShader(E),C=new Or(s,v),w=ly(s,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Q_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=E,this}let xy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new My(e),t.set(e,i)),i}}class My{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}}function Sy(n,e,t,i,s,r,a){const o=new zu,l=new by,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,V,O){const G=V.fog,X=O.geometry,q=w.isMeshStandardMaterial?V.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||q),$=Z&&Z.mapping===Qr?Z.image.height:null,le=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,we=pe!==void 0?pe.length:0;let Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let it,Y,ie,be;if(le){const et=mn[le];it=et.vertexShader,Y=et.fragmentShader}else it=w.vertexShader,Y=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const ce=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),ke=O.isInstancedMesh===!0,ze=O.isBatchedMesh===!0,ft=!!w.map,qe=!!w.matcap,vt=!!Z,U=!!w.aoMap,$t=!!w.lightMap,Ge=!!w.bumpMap,We=!!w.normalMap,Te=!!w.displacementMap,ot=!!w.emissiveMap,Ee=!!w.metalnessMap,A=!!w.roughnessMap,y=w.anisotropy>0,B=w.clearcoat>0,K=w.dispersion>0,Q=w.iridescence>0,j=w.sheen>0,Me=w.transmission>0,he=y&&!!w.anisotropyMap,me=B&&!!w.clearcoatMap,Xe=B&&!!w.clearcoatNormalMap,te=B&&!!w.clearcoatRoughnessMap,ge=Q&&!!w.iridescenceMap,Ae=Q&&!!w.iridescenceThicknessMap,Ie=j&&!!w.sheenColorMap,ve=j&&!!w.sheenRoughnessMap,$e=!!w.specularMap,Fe=!!w.specularColorMap,st=!!w.specularIntensityMap,k=Me&&!!w.transmissionMap,oe=Me&&!!w.thicknessMap,W=!!w.gradientMap,J=!!w.alphaMap,fe=w.alphaTest>0,ue=!!w.alphaHash,De=!!w.extensions;let pt=ei;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Ct={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:Y,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ze,batchingColor:ze&&O._colorsTexture!==null,instancing:ke,instancingColor:ke&&O.instanceColor!==null,instancingMorph:ke&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ot,alphaToCoverage:!!w.alphaToCoverage,map:ft,matcap:qe,envMap:vt,envMapMode:vt&&Z.mapping,envMapCubeUVHeight:$,aoMap:U,lightMap:$t,bumpMap:Ge,normalMap:We,displacementMap:d&&Te,emissiveMap:ot,normalMapObjectSpace:We&&w.normalMapType===mm,normalMapTangentSpace:We&&w.normalMapType===fl,metalnessMap:Ee,roughnessMap:A,anisotropy:y,anisotropyMap:he,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:Xe,clearcoatRoughnessMap:te,dispersion:K,iridescence:Q,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:j,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:$e,specularColorMap:Fe,specularIntensityMap:st,transmission:Me,transmissionMap:k,thicknessMap:oe,gradientMap:W,opaque:w.transparent===!1&&w.blending===$i&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:ue,combine:w.combine,mapUv:ft&&v(w.map.channel),aoMapUv:U&&v(w.aoMap.channel),lightMapUv:$t&&v(w.lightMap.channel),bumpMapUv:Ge&&v(w.bumpMap.channel),normalMapUv:We&&v(w.normalMap.channel),displacementMapUv:Te&&v(w.displacementMap.channel),emissiveMapUv:ot&&v(w.emissiveMap.channel),metalnessMapUv:Ee&&v(w.metalnessMap.channel),roughnessMapUv:A&&v(w.roughnessMap.channel),anisotropyMapUv:he&&v(w.anisotropyMap.channel),clearcoatMapUv:me&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(w.sheenRoughnessMap.channel),specularMapUv:$e&&v(w.specularMap.channel),specularColorMapUv:Fe&&v(w.specularColorMap.channel),specularIntensityMapUv:st&&v(w.specularIntensityMap.channel),transmissionMapUv:k&&v(w.transmissionMap.channel),thicknessMapUv:oe&&v(w.thicknessMap.channel),alphaMapUv:J&&v(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(We||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ft||J),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:ft&&w.map.isVideoTexture===!0&&Ve.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gn,flipSided:w.side===Ut,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(b,w),S(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const b=g[w.type];let P;if(b){const V=mn[b];P=ag.clone(V.uniforms)}else P=w.uniforms;return P}function I(w,b){let P;for(let V=0,O=u.length;V<O;V++){const G=u[V];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new yy(n,b,w,r),u.push(P)),P}function E(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function wy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,g,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Ey),i.length>1&&i.sort(d||hh),s.length>1&&s.sort(d||hh)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ty(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new uh,n.set(i,[a])):s>=r.length?(a=new uh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new re};break;case"SpotLight":t={position:new R,direction:new R,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ry=0;function Iy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Py(n){const e=new Ay,t=Cy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,r=new Pe,a=new Pe;function o(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,S=0,_=0,I=0,E=0,T=0;c.sort(Iy);for(let w=0,b=c.length;w<b;w++){const P=c[w],V=P.color,O=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=V.r*O,h+=V.g*O,d+=V.b*O;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],O);T++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,$=t.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=P.shadow.matrix,x++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(V).multiplyScalar(O),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[v]=q;const Z=P.shadow;if(P.map&&(i.spotLightMap[I]=P.map,I++,Z.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=Z.matrix,P.castShadow){const $=t.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=X,_++}v++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(V).multiplyScalar(O),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Z=P.shadow,$=t.get(P);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(O),q.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==S||C.numSpotShadows!==_||C.numSpotMaps!==I||C.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+I-E,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=S,C.numSpotShadows=_,C.numSpotMaps=I,C.numLightProbes=T,i.version=Ry++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const S=c[p];if(S.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(S.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function dh(n){const e=new Py(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ly(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new dh(n),e.set(s,[o])):r>=a.length?(o=new dh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class ky extends en{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dy extends en{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fy(n,e,t){let i=new ml;const s=new ae,r=new ae,a=new Ke,o=new ky({depthPacking:pm}),l=new Dy,c={},u=t.maxTextureSize,h={[Fn]:Ut,[Ut]:Fn,[gn]:gn},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Ny,fragmentShader:Uy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ye(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Qn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=p!==In&&this.type===In,G=p===In&&this.type!==In;for(let X=0,q=E.length;X<q;X++){const Z=E[X],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const le=$.getFrameExtents();if(s.multiply(le),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/le.x),s.x=r.x*le.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/le.y),s.y=r.y*le.y,$.mapSize.y=r.y)),$.map===null||O===!0||G===!0){const we=this.type!==In?{minFilter:Ft,magFilter:Ft}:{};$.map!==null&&$.map.dispose(),$.map=new vi(s.x,s.y,we),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const pe=$.getViewportCount();for(let we=0;we<pe;we++){const Be=$.getViewport(we);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),V.viewport(a),$.updateMatrices(Z,we),i=$.getFrustum(),_(T,C,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===In&&x($,C),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,P)};function x(E,T){const C=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,C,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,C,f,v,null)}function S(E,T,C,w){let b=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=b.uuid,O=T.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let X=G[O];X===void 0&&(X=b.clone(),G[O]=X,T.addEventListener("dispose",I)),b=X}if(b.visible=T.visible,b.wireframe=T.wireframe,w===In?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:h[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=n.properties.get(b);V.light=C}return b}function _(E,T,C,w,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===In)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const O=e.update(E),G=E.material;if(Array.isArray(G)){const X=O.groups;for(let q=0,Z=X.length;q<Z;q++){const $=X[q],le=G[$.materialIndex];if(le&&le.visible){const pe=S(E,le,w,b);E.onBeforeShadow(n,E,T,C,O,pe,$),n.renderBufferDirect(C,null,O,pe,E,$),E.onAfterShadow(n,E,T,C,O,pe,$)}}}else if(G.visible){const X=S(E,G,w,b);E.onBeforeShadow(n,E,T,C,O,X,null),n.renderBufferDirect(C,null,O,X,E,null),E.onAfterShadow(n,E,T,C,O,X,null)}}const V=E.children;for(let O=0,G=V.length;O<G;O++)_(V[O],T,C,w,b)}function I(E){E.target.removeEventListener("dispose",I);for(const C in c){const w=c[C],b=E.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const Oy={[oo]:lo,[co]:fo,[ho]:po,[Ji]:uo,[lo]:oo,[fo]:co,[po]:ho,[uo]:Ji};function By(n,e){function t(){let k=!1;const oe=new Ke;let W=null;const J=new Ke(0,0,0,0);return{setMask:function(fe){W!==fe&&!k&&(n.colorMask(fe,fe,fe,fe),W=fe)},setLocked:function(fe){k=fe},setClear:function(fe,ue,De,pt,Ct){Ct===!0&&(fe*=pt,ue*=pt,De*=pt),oe.set(fe,ue,De,pt),J.equals(oe)===!1&&(n.clearColor(fe,ue,De,pt),J.copy(oe))},reset:function(){k=!1,W=null,J.set(-1,0,0,0)}}}function i(){let k=!1,oe=!1,W=null,J=null,fe=null;return{setReversed:function(ue){if(oe!==ue){const De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const pt=fe;fe=null,this.setClear(pt)}oe=ue},getReversed:function(){return oe},setTest:function(ue){ue?ce(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ue){W!==ue&&!k&&(n.depthMask(ue),W=ue)},setFunc:function(ue){if(oe&&(ue=Oy[ue]),J!==ue){switch(ue){case oo:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case co:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case ho:n.depthFunc(n.EQUAL);break;case uo:n.depthFunc(n.GEQUAL);break;case fo:n.depthFunc(n.GREATER);break;case po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ue}},setLocked:function(ue){k=ue},setClear:function(ue){fe!==ue&&(oe&&(ue=1-ue),n.clearDepth(ue),fe=ue)},reset:function(){k=!1,W=null,J=null,fe=null,oe=!1}}}function s(){let k=!1,oe=null,W=null,J=null,fe=null,ue=null,De=null,pt=null,Ct=null;return{setTest:function(et){k||(et?ce(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(et){oe!==et&&!k&&(n.stencilMask(et),oe=et)},setFunc:function(et,nn,Mn){(W!==et||J!==nn||fe!==Mn)&&(n.stencilFunc(et,nn,Mn),W=et,J=nn,fe=Mn)},setOp:function(et,nn,Mn){(ue!==et||De!==nn||pt!==Mn)&&(n.stencilOp(et,nn,Mn),ue=et,De=nn,pt=Mn)},setLocked:function(et){k=et},setClear:function(et){Ct!==et&&(n.clearStencil(et),Ct=et)},reset:function(){k=!1,oe=null,W=null,J=null,fe=null,ue=null,De=null,pt=null,Ct=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,S=null,_=null,I=null,E=null,T=new re(0,0,0),C=0,w=!1,b=null,P=null,V=null,O=null,G=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),q=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=Z>=2);let le=null,pe={};const we=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),it=new Ke().fromArray(we),Y=new Ke().fromArray(Be);function ie(k,oe,W,J){const fe=new Uint8Array(4),ue=n.createTexture();n.bindTexture(k,ue),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<W;De++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(oe+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return ue}const be={};be[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(n.DEPTH_TEST),a.setFunc(Ji),Ge(!1),We(mc),ce(n.CULL_FACE),U(Qn);function ce(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Re(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ke(k,oe){return h[k]!==oe?(n.bindFramebuffer(k,oe),h[k]=oe,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=oe),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function ze(k,oe){let W=f,J=!1;if(k){W=d.get(oe),W===void 0&&(W=[],d.set(oe,W));const fe=k.textures;if(W.length!==fe.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,De=fe.length;ue<De;ue++)W[ue]=n.COLOR_ATTACHMENT0+ue;W.length=fe.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function ft(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const qe={[pi]:n.FUNC_ADD,[Up]:n.FUNC_SUBTRACT,[Fp]:n.FUNC_REVERSE_SUBTRACT};qe[Op]=n.MIN,qe[Bp]=n.MAX;const vt={[zp]:n.ZERO,[Hp]:n.ONE,[Vp]:n.SRC_COLOR,[ro]:n.SRC_ALPHA,[jp]:n.SRC_ALPHA_SATURATE,[qp]:n.DST_COLOR,[Wp]:n.DST_ALPHA,[Gp]:n.ONE_MINUS_SRC_COLOR,[ao]:n.ONE_MINUS_SRC_ALPHA,[Xp]:n.ONE_MINUS_DST_COLOR,[$p]:n.ONE_MINUS_DST_ALPHA,[Yp]:n.CONSTANT_COLOR,[Kp]:n.ONE_MINUS_CONSTANT_COLOR,[Jp]:n.CONSTANT_ALPHA,[Zp]:n.ONE_MINUS_CONSTANT_ALPHA};function U(k,oe,W,J,fe,ue,De,pt,Ct,et){if(k===Qn){v===!0&&(Re(n.BLEND),v=!1);return}if(v===!1&&(ce(n.BLEND),v=!0),k!==Np){if(k!==m||et!==w){if((p!==pi||_!==pi)&&(n.blendEquation(n.FUNC_ADD),p=pi,_=pi),et)switch(k){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,S=null,I=null,E=null,T.set(0,0,0),C=0,m=k,w=et}return}fe=fe||oe,ue=ue||W,De=De||J,(oe!==p||fe!==_)&&(n.blendEquationSeparate(qe[oe],qe[fe]),p=oe,_=fe),(W!==x||J!==S||ue!==I||De!==E)&&(n.blendFuncSeparate(vt[W],vt[J],vt[ue],vt[De]),x=W,S=J,I=ue,E=De),(pt.equals(T)===!1||Ct!==C)&&(n.blendColor(pt.r,pt.g,pt.b,Ct),T.copy(pt),C=Ct),m=k,w=!1}function $t(k,oe){k.side===gn?Re(n.CULL_FACE):ce(n.CULL_FACE);let W=k.side===Ut;oe&&(W=!W),Ge(W),k.blending===$i&&k.transparent===!1?U(Qn):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const J=k.stencilWrite;o.setTest(J),J&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(k){b!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),b=k)}function We(k){k!==kp?(ce(n.CULL_FACE),k!==P&&(k===mc?n.cullFace(n.BACK):k===Dp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),P=k}function Te(k){k!==V&&(q&&n.lineWidth(k),V=k)}function ot(k,oe,W){k?(ce(n.POLYGON_OFFSET_FILL),(O!==oe||G!==W)&&(n.polygonOffset(oe,W),O=oe,G=W)):Re(n.POLYGON_OFFSET_FILL)}function Ee(k){k?ce(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function A(k){k===void 0&&(k=n.TEXTURE0+X-1),le!==k&&(n.activeTexture(k),le=k)}function y(k,oe,W){W===void 0&&(le===null?W=n.TEXTURE0+X-1:W=le);let J=pe[W];J===void 0&&(J={type:void 0,texture:void 0},pe[W]=J),(J.type!==k||J.texture!==oe)&&(le!==W&&(n.activeTexture(W),le=W),n.bindTexture(k,oe||be[k]),J.type=k,J.texture=oe)}function B(){const k=pe[le];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(k){it.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),it.copy(k))}function ve(k){Y.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Y.copy(k))}function $e(k,oe){let W=c.get(oe);W===void 0&&(W=new WeakMap,c.set(oe,W));let J=W.get(k);J===void 0&&(J=n.getUniformBlockIndex(oe,k.name),W.set(k,J))}function Fe(k,oe){const J=c.get(oe).get(k);l.get(oe)!==J&&(n.uniformBlockBinding(oe,J,k.__bindingPointIndex),l.set(oe,J))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},le=null,pe={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,x=null,S=null,_=null,I=null,E=null,T=new re(0,0,0),C=0,w=!1,b=null,P=null,V=null,O=null,G=null,it.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Re,bindFramebuffer:ke,drawBuffers:ze,useProgram:ft,setBlending:U,setMaterial:$t,setFlipSided:Ge,setCullFace:We,setLineWidth:Te,setPolygonOffset:ot,setScissorTest:Ee,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:ge,texImage3D:Ae,updateUBOMapping:$e,uniformBlockBinding:Fe,texStorage2D:Xe,texStorage3D:te,texSubImage2D:j,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:me,scissor:Ie,viewport:ve,reset:st}}function fh(n,e,t,i){const s=zy(i);switch(t){case Ru:return n*e;case Pu:return n*e;case Lu:return n*e*2;case ll:return n*e/s.components*s.byteLength;case cl:return n*e/s.components*s.byteLength;case ku:return n*e*2/s.components*s.byteLength;case hl:return n*e*2/s.components*s.byteLength;case Iu:return n*e*3/s.components*s.byteLength;case Zt:return n*e*4/s.components*s.byteLength;case ul:return n*e*4/s.components*s.byteLength;case kr:case Dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _o:case xo:return Math.max(n,16)*Math.max(e,8)/4;case vo:case yo:return Math.max(n,8)*Math.max(e,8)/2;case bo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fr:case Oo:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Du:case zo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ho:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zy(n){switch(n){case On:case Tu:return{byteLength:1,components:1};case zs:case Au:case Xs:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case gi:case rl:case cn:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Hy(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):Gs("canvas")}function v(A,y,B){let K=1;const Q=Ee(A);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*Q.width),Me=Math.floor(K*Q.height);h===void 0&&(h=g(j,Me));const he=y?g(j,Me):h;return he.width=j,he.height=Me,he.getContext("2d").drawImage(A,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Me+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,y,B,K,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=y;if(y===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),y===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),y===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const Me=Q?ea:Ve.getTransfer(K);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=Me===nt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(A,y){let B;return A?y===null||y===gi||y===ts?B=n.DEPTH24_STENCIL8:y===cn?B=n.DEPTH32F_STENCIL8:y===zs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===gi||y===ts?B=n.DEPTH_COMPONENT24:y===cn?B=n.DEPTH_COMPONENT32F:y===zs&&(B=n.DEPTH_COMPONENT16),B}function I(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Gt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){const y=A.target;y.removeEventListener("dispose",E),C(y),y.isVideoTexture&&u.delete(y)}function T(A){const y=A.target;y.removeEventListener("dispose",T),b(y)}function C(A){const y=i.get(A);if(y.__webglInit===void 0)return;const B=A.source,K=d.get(B);if(K){const Q=K[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(A),Object.keys(K).length===0&&d.delete(B)}i.remove(A)}function w(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const B=A.source,K=d.get(B);delete K[y.__cacheKey],a.memory.textures--}function b(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let Q=0;Q<y.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,Q=B.length;K<Q;K++){const j=i.get(B[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(B[K])}i.remove(A)}let P=0;function V(){P=0}function O(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function G(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const B=i.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,A,y);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function q(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function Z(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function $(A,y){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ie(B,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}const le={[es]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[Vr]:n.MIRRORED_REPEAT},pe={[Ft]:n.NEAREST,[Eu]:n.NEAREST_MIPMAP_NEAREST,[Ls]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[Lr]:n.LINEAR_MIPMAP_NEAREST,[Ln]:n.LINEAR_MIPMAP_LINEAR},we={[gm]:n.NEVER,[Mm]:n.ALWAYS,[vm]:n.LESS,[Uu]:n.LEQUAL,[_m]:n.EQUAL,[bm]:n.GEQUAL,[ym]:n.GREATER,[xm]:n.NOTEQUAL};function Be(A,y){if(y.type===cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gt||y.magFilter===Lr||y.magFilter===Ls||y.magFilter===Ln||y.minFilter===Gt||y.minFilter===Lr||y.minFilter===Ls||y.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,le[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,le[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,le[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,pe[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,pe[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ft||y.minFilter!==Ls&&y.minFilter!==Ln||y.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",E));const K=y.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const j=G(y);if(j!==A.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[j].usedTimes++;const Me=Q[A.__cacheKey];Me!==void 0&&(Q[A.__cacheKey].usedTimes--,Me.usedTimes===0&&w(y)),A.__cacheKey=j,A.__webglTexture=Q[j].texture}return B}function Y(A,y,B){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const Q=it(A,y),j=y.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+B);const Me=i.get(j);if(j.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const he=Ve.getPrimaries(Ve.workingColorSpace),me=y.colorSpace===jn?null:Ve.getPrimaries(y.colorSpace),Xe=y.colorSpace===jn||he===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let te=v(y.image,!1,s.maxTextureSize);te=ot(y,te);const ge=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type);let Ie=S(y.internalFormat,ge,Ae,y.colorSpace,y.isVideoTexture);Be(K,y);let ve;const $e=y.mipmaps,Fe=y.isVideoTexture!==!0,st=Me.__version===void 0||Q===!0,k=j.dataReady,oe=I(y,te);if(y.isDepthTexture)Ie=_(y.format===ns,y.type),st&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Ie,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Ie,te.width,te.height,0,ge,Ae,null));else if(y.isDataTexture)if($e.length>0){Fe&&st&&t.texStorage2D(n.TEXTURE_2D,oe,Ie,$e[0].width,$e[0].height);for(let W=0,J=$e.length;W<J;W++)ve=$e[W],Fe?k&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,W,Ie,ve.width,ve.height,0,ge,Ae,ve.data);y.generateMipmaps=!1}else Fe?(st&&t.texStorage2D(n.TEXTURE_2D,oe,Ie,te.width,te.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ge,Ae,te.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,te.width,te.height,0,ge,Ae,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ie,$e[0].width,$e[0].height,te.depth);for(let W=0,J=$e.length;W<J;W++)if(ve=$e[W],y.format!==Zt)if(ge!==null)if(Fe){if(k)if(y.layerUpdates.size>0){const fe=fh(ve.width,ve.height,y.format,y.type);for(const ue of y.layerUpdates){const De=ve.data.subarray(ue*fe/ve.data.BYTES_PER_ELEMENT,(ue+1)*fe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ue,ve.width,ve.height,1,ge,De)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,te.depth,ge,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Ie,ve.width,ve.height,te.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,te.depth,ge,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Ie,ve.width,ve.height,te.depth,0,ge,Ae,ve.data)}else{Fe&&st&&t.texStorage2D(n.TEXTURE_2D,oe,Ie,$e[0].width,$e[0].height);for(let W=0,J=$e.length;W<J;W++)ve=$e[W],y.format!==Zt?ge!==null?Fe?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,W,Ie,ve.width,ve.height,0,ge,Ae,ve.data)}else if(y.isDataArrayTexture)if(Fe){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Ie,te.width,te.height,te.depth),k)if(y.layerUpdates.size>0){const W=fh(te.width,te.height,y.format,y.type);for(const J of y.layerUpdates){const fe=te.data.subarray(J*W/te.data.BYTES_PER_ELEMENT,(J+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,ge,Ae,fe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ge,Ae,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,te.width,te.height,te.depth,0,ge,Ae,te.data);else if(y.isData3DTexture)Fe?(st&&t.texStorage3D(n.TEXTURE_3D,oe,Ie,te.width,te.height,te.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ge,Ae,te.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,te.width,te.height,te.depth,0,ge,Ae,te.data);else if(y.isFramebufferTexture){if(st)if(Fe)t.texStorage2D(n.TEXTURE_2D,oe,Ie,te.width,te.height);else{let W=te.width,J=te.height;for(let fe=0;fe<oe;fe++)t.texImage2D(n.TEXTURE_2D,fe,Ie,W,J,0,ge,Ae,null),W>>=1,J>>=1}}else if($e.length>0){if(Fe&&st){const W=Ee($e[0]);t.texStorage2D(n.TEXTURE_2D,oe,Ie,W.width,W.height)}for(let W=0,J=$e.length;W<J;W++)ve=$e[W],Fe?k&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ge,Ae,ve):t.texImage2D(n.TEXTURE_2D,W,Ie,ge,Ae,ve);y.generateMipmaps=!1}else if(Fe){if(st){const W=Ee(te);t.texStorage2D(n.TEXTURE_2D,oe,Ie,W.width,W.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ae,te)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ge,Ae,te);m(y)&&p(K),Me.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ie(A,y,B){if(y.image.length!==6)return;const K=it(A,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const j=i.get(Q);if(Q.version!==j.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const Me=Ve.getPrimaries(Ve.workingColorSpace),he=y.colorSpace===jn?null:Ve.getPrimaries(y.colorSpace),me=y.colorSpace===jn||Me===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Xe=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!Xe&&!te?ge[J]=v(y.image[J],!0,s.maxCubemapSize):ge[J]=te?y.image[J].image:y.image[J],ge[J]=ot(y,ge[J]);const Ae=ge[0],Ie=r.convert(y.format,y.colorSpace),ve=r.convert(y.type),$e=S(y.internalFormat,Ie,ve,y.colorSpace),Fe=y.isVideoTexture!==!0,st=j.__version===void 0||K===!0,k=Q.dataReady;let oe=I(y,Ae);Be(n.TEXTURE_CUBE_MAP,y);let W;if(Xe){Fe&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,$e,Ae.width,Ae.height);for(let J=0;J<6;J++){W=ge[J].mipmaps;for(let fe=0;fe<W.length;fe++){const ue=W[fe];y.format!==Zt?Ie!==null?Fe?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ue.width,ue.height,Ie,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,ue.width,ue.height,Ie,ve,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,$e,ue.width,ue.height,0,Ie,ve,ue.data)}}}else{if(W=y.mipmaps,Fe&&st){W.length>0&&oe++;const J=Ee(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,$e,J.width,J.height)}for(let J=0;J<6;J++)if(te){Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ie,ve,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,ge[J].width,ge[J].height,0,Ie,ve,ge[J].data);for(let fe=0;fe<W.length;fe++){const De=W[fe].image[J].image;Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,De.width,De.height,Ie,ve,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,$e,De.width,De.height,0,Ie,ve,De.data)}}else{Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,ve,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$e,Ie,ve,ge[J]);for(let fe=0;fe<W.length;fe++){const ue=W[fe];Fe?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ie,ve,ue.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,$e,Ie,ve,ue.image[J])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function be(A,y,B,K,Q,j){const Me=r.convert(B.format,B.colorSpace),he=r.convert(B.type),me=S(B.internalFormat,Me,he,B.colorSpace),Xe=i.get(y),te=i.get(B);if(te.__renderTarget=y,!Xe.__hasExternalTextures){const ge=Math.max(1,y.width>>j),Ae=Math.max(1,y.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,me,ge,Ae,y.depth,0,Me,he,null):t.texImage2D(Q,j,me,ge,Ae,0,Me,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,te.__webglTexture,0,Ge(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,te.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(A,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const K=y.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=_(y.stencilBuffer,Q),Me=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Ge(y);We(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,j,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,A)}else{const K=y.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],Me=r.convert(j.format,j.colorSpace),he=r.convert(j.type),me=S(j.internalFormat,Me,he,j.colorSpace),Xe=Ge(y);B&&We(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,me,y.width,y.height):We(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const Q=K.__webglTexture,j=Ge(y);if(y.depthTexture.format===qi)We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===ns)We(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(A){const y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=K}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Re(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),ce(y.__webglDepthbuffer[K],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ce(y.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(A,y,B){const K=i.get(A);y!==void 0&&be(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ke(A)}function ft(A){const y=A.texture,B=i.get(A),K=i.get(y);A.addEventListener("dispose",T);const Q=A.textures,j=A.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,a.memory.textures++),j){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let me=0;me<y.mipmaps.length;me++)B.__webglFramebuffer[he][me]=n.createFramebuffer()}else B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let he=0,me=Q.length;he<me;he++){const Xe=i.get(Q[he]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&We(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){const me=Q[he];B.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Xe=r.convert(me.format,me.colorSpace),te=r.convert(me.type),ge=S(me.internalFormat,Xe,te,me.colorSpace,A.isXRRenderTarget===!0),Ae=Ge(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ge,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,B.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Be(n.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)be(B.__webglFramebuffer[he][me],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,me);else be(B.__webglFramebuffer[he],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let he=0,me=Q.length;he<me;he++){const Xe=Q[he],te=i.get(Xe);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),Be(n.TEXTURE_2D,Xe),be(B.__webglFramebuffer,A,Xe,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Xe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),Be(he,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)be(B.__webglFramebuffer[me],A,y,n.COLOR_ATTACHMENT0,he,me);else be(B.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,he,0);m(y)&&p(he),t.unbindTexture()}A.depthBuffer&&ke(A)}function qe(A){const y=A.textures;for(let B=0,K=y.length;B<K;B++){const Q=y[B];if(m(Q)){const j=x(A),Me=i.get(Q).__webglTexture;t.bindTexture(j,Me),p(j),t.unbindTexture()}}}const vt=[],U=[];function $t(A){if(A.samples>0){if(We(A)===!1){const y=A.textures,B=A.width,K=A.height;let Q=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),he=y.length>1;if(he)for(let me=0;me<y.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<y.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const Xe=i.get(y[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,Q,n.NEAREST),l===!0&&(vt.length=0,U.length=0,vt.push(n.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(j),U.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let me=0;me<y.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const Xe=i.get(y[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ge(A){return Math.min(s.maxSamples,A.samples)}function We(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function ot(A,y){const B=A.colorSpace,K=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ot&&B!==jn&&(Ve.getTransfer(B)===nt?(K!==Zt||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=ze,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=We}function Vy(n,e){function t(i,s=jn){let r;const a=Ve.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.BYTE;if(i===Au)return n.SHORT;if(i===zs)return n.UNSIGNED_SHORT;if(i===rl)return n.INT;if(i===gi)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===Xs)return n.HALF_FLOAT;if(i===Ru)return n.ALPHA;if(i===Iu)return n.RGB;if(i===Zt)return n.RGBA;if(i===Pu)return n.LUMINANCE;if(i===Lu)return n.LUMINANCE_ALPHA;if(i===qi)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===ll)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===ku)return n.RG;if(i===hl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===kr||i===Dr||i===Nr||i===Ur)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vo||i===_o||i===yo||i===xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bo||i===Mo||i===So)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bo||i===Mo)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===So)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wo||i===Eo||i===To||i===Ao||i===Co||i===Ro||i===Io||i===Po||i===Lo||i===ko||i===Do||i===No||i===Uo||i===Fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ao)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Co)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ro)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Io)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Po)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Do)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===No)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fo)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fr||i===Oo||i===Bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fr)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Du||i===zo||i===Ho||i===Vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Gy extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new tn({vertexShader:$y,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new js(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jy extends yi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new Xy,m=t.getContextAttributes();let p=null,x=null;const S=[],_=[],I=new ae;let E=null;const T=new Dt;T.viewport=new Ke;const C=new Dt;C.viewport=new Ke;const w=[T,C],b=new Gy;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Ba,S[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Ba,S[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Ba,S[Y]=ie),ie.getHandSpace()};function O(Y){const ie=_.indexOf(Y.inputSource);if(ie===-1)return;const be=S[ie];be!==void 0&&(be.update(Y.inputSource,Y.frame,c||a),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<S.length;Y++){const ie=_[Y];ie!==null&&(_[Y]=null,S[Y].disconnect(ie))}P=null,V=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,x=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new vi(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,be=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ns:qi,be=m.stencil?ts:gi);const Re={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new vi(d.textureWidth,d.textureHeight,{format:Zt,type:On,depthTexture:new ju(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Y){for(let ie=0;ie<Y.removed.length;ie++){const be=Y.removed[ie],ce=_.indexOf(be);ce>=0&&(_[ce]=null,S[ce].disconnect(be))}for(let ie=0;ie<Y.added.length;ie++){const be=Y.added[ie];let ce=_.indexOf(be);if(ce===-1){for(let ke=0;ke<S.length;ke++)if(ke>=_.length){_.push(be),ce=ke;break}else if(_[ke]===null){_[ke]=be,ce=ke;break}if(ce===-1)break}const Re=S[ce];Re&&Re.connect(be)}}const q=new R,Z=new R;function $(Y,ie,be){q.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const ce=q.distanceTo(Z),Re=ie.projectionMatrix.elements,ke=be.projectionMatrix.elements,ze=Re[14]/(Re[10]-1),ft=Re[14]/(Re[10]+1),qe=(Re[9]+1)/Re[5],vt=(Re[9]-1)/Re[5],U=(Re[8]-1)/Re[0],$t=(ke[8]+1)/ke[0],Ge=ze*U,We=ze*$t,Te=ce/(-U+$t),ot=Te*-U;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ot),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=ze+Te,A=ft+Te,y=Ge-ot,B=We+(ce-ot),K=qe*ft/A*Ee,Q=vt*ft/A*Ee;Y.projectionMatrix.makePerspective(y,B,K,Q,Ee,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function le(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ie=Y.near,be=Y.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(be=v.depthFar)),b.near=C.near=T.near=ie,b.far=C.far=T.far=be,(P!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,V=b.far),T.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,b.layers.mask=T.layers.mask|C.layers.mask;const ce=Y.parent,Re=b.cameras;le(b,ce);for(let ke=0;ke<Re.length;ke++)le(Re[ke],ce);Re.length===2?$(b,T,C):b.projectionMatrix.copy(T.projectionMatrix),pe(Y,b,ce)};function pe(Y,ie,be){be===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let we=null;function Be(Y,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ce=!1;be.length!==b.cameras.length&&(b.cameras.length=0,ce=!0);for(let ke=0;ke<be.length;ke++){const ze=be[ke];let ft=null;if(f!==null)ft=f.getViewport(ze);else{const vt=h.getViewSubImage(d,ze);ft=vt.viewport,ke===0&&(e.setRenderTargetTextures(x,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(x))}let qe=w[ke];qe===void 0&&(qe=new Dt,qe.layers.enable(ke),qe.viewport=new Ke,w[ke]=qe),qe.matrix.fromArray(ze.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ze.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ft.x,ft.y,ft.width,ft.height),ke===0&&(b.matrix.copy(qe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ce===!0&&b.cameras.push(qe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const ke=h.getDepthInformation(be[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,s.renderState)}}for(let be=0;be<S.length;be++){const ce=_[be],Re=S[be];ce!==null&&Re!==void 0&&Re.update(ce,ie,c||a)}we&&we(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const it=new Xu;it.setAnimationLoop(Be),this.setAnimationLoop=function(Y){we=Y},this.dispose=function(){}}}const hi=new dn,Yy=new Pe;function Ky(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),S=x.envMap,_=x.envMapRotation;S&&(m.envMap.value=S,hi.copy(_),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(hi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jy(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const _=S.program;i.uniformBlockBinding(x,_)}function c(x,S){let _=s[x.id];_===void 0&&(g(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",m));const I=S.program;i.updateUBOMapping(x,I);const E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function u(x){const S=h();x.__bindingPointIndex=S;const _=n.createBuffer(),I=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,I,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const S=s[x.id],_=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,T=_.length;E<T;E++){const C=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,b=C.length;w<b;w++){const P=C[w];if(f(P,E,w,I)===!0){const V=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let X=0;X<O.length;X++){const q=O[X],Z=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,V+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,S,_,I){const E=x.value,T=S+"_"+_;if(I[T]===void 0)return typeof E=="number"||typeof E=="boolean"?I[T]=E:I[T]=E.clone(),!0;{const C=I[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return I[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const S=x.uniforms;let _=0;const I=16;for(let T=0,C=S.length;T<C;T++){const w=Array.isArray(S[T])?S[T]:[S[T]];for(let b=0,P=w.length;b<P;b++){const V=w[b],O=Array.isArray(V.value)?V.value:[V.value];for(let G=0,X=O.length;G<X;G++){const q=O[G],Z=v(q),$=_%I,le=$%Z.boundary,pe=$+le;_+=le,pe!==0&&I-pe<Z.storage&&(_+=I-pe),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=Z.storage}}}const E=_%I;return E>0&&(_+=I-E),x.__size=_,x.__cache={},this}function v(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Zy{constructor(e={}){const{canvas:t=zm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=ei,this.toneMappingExposure=1;const _=this;let I=!1,E=0,T=0,C=null,w=-1,b=null;const P=new Ke,V=new Ke;let O=null;const G=new re(0);let X=0,q=t.width,Z=t.height,$=1,le=null,pe=null;const we=new Ke(0,0,q,Z),Be=new Ke(0,0,q,Z);let it=!1;const Y=new ml;let ie=!1,be=!1;const ce=new Pe,Re=new Pe,ke=new R,ze=new Ke,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function vt(){return C===null?$:1}let U=i;function $t(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),U===null){const D="webgl2";if(U=$t(D,M),U===null)throw $t(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ge,We,Te,ot,Ee,A,y,B,K,Q,j,Me,he,me,Xe,te,ge,Ae,Ie,ve,$e,Fe,st,k;function oe(){Ge=new i_(U),Ge.init(),Fe=new Vy(U,Ge),We=new Jv(U,Ge,e,Fe),Te=new By(U,Ge),We.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),ot=new a_(U),Ee=new wy,A=new Hy(U,Ge,Te,Ee,We,Fe,ot),y=new Qv(_),B=new n_(_),K=new fg(U),st=new Yv(U,K),Q=new s_(U,K,ot,st),j=new l_(U,Q,K,ot),Ie=new o_(U,We,A),te=new Zv(Ee),Me=new Sy(_,y,B,Ge,We,st,te),he=new Ky(_,Ee),me=new Ty,Xe=new Ly(Ge),Ae=new jv(_,y,B,Te,j,f,l),ge=new Fy(_,j,We),k=new Jy(U,ot,We,Te),ve=new Kv(U,Ge,ot),$e=new r_(U,Ge,ot),ot.programs=Me.programs,_.capabilities=We,_.extensions=Ge,_.properties=Ee,_.renderLists=me,_.shadowMap=ge,_.state=Te,_.info=ot}oe();const W=new jy(_,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(q,Z,!1))},this.getSize=function(M){return M.set(q,Z)},this.setSize=function(M,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,Z=D,t.width=Math.floor(M*$),t.height=Math.floor(D*$),z===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(q*$,Z*$).floor()},this.setDrawingBufferSize=function(M,D,z){q=M,Z=D,$=z,t.width=Math.floor(M*z),t.height=Math.floor(D*z),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,D,z,H){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,D,z,H),Te.viewport(P.copy(we).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Be)},this.setScissor=function(M,D,z,H){M.isVector4?Be.set(M.x,M.y,M.z,M.w):Be.set(M,D,z,H),Te.scissor(V.copy(Be).multiplyScalar($).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(M){Te.setScissorTest(it=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){pe=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,D=!0,z=!0){let H=0;if(M){let N=!1;if(C!==null){const ne=C.texture.format;N=ne===ul||ne===hl||ne===cl}if(N){const ne=C.texture.type,de=ne===On||ne===gi||ne===zs||ne===ts||ne===al||ne===ol,_e=Ae.getClearColor(),ye=Ae.getClearAlpha(),Le=_e.r,Ne=_e.g,xe=_e.b;de?(g[0]=Le,g[1]=Ne,g[2]=xe,g[3]=ye,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Le,v[1]=Ne,v[2]=xe,v[3]=ye,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT),z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),Xe.dispose(),Ee.dispose(),y.dispose(),B.dispose(),j.dispose(),st.dispose(),k.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Il),W.removeEventListener("sessionend",Pl),si.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=ot.autoReset,D=ge.enabled,z=ge.autoUpdate,H=ge.needsUpdate,N=ge.type;oe(),ot.autoReset=M,ge.enabled=D,ge.autoUpdate=z,ge.needsUpdate=H,ge.type=N}function ue(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function De(M){const D=M.target;D.removeEventListener("dispose",De),pt(D)}function pt(M){Ct(M),Ee.remove(M)}function Ct(M){const D=Ee.get(M).programs;D!==void 0&&(D.forEach(function(z){Me.releaseProgram(z)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,z,H,N,ne){D===null&&(D=ft);const de=N.isMesh&&N.matrixWorld.determinant()<0,_e=_d(M,D,z,H,N);Te.setMaterial(H,de);let ye=z.index,Le=1;if(H.wireframe===!0){if(ye=Q.getWireframeAttribute(z),ye===void 0)return;Le=2}const Ne=z.drawRange,xe=z.attributes.position;let je=Ne.start*Le,rt=(Ne.start+Ne.count)*Le;ne!==null&&(je=Math.max(je,ne.start*Le),rt=Math.min(rt,(ne.start+ne.count)*Le)),ye!==null?(je=Math.max(je,0),rt=Math.min(rt,ye.count)):xe!=null&&(je=Math.max(je,0),rt=Math.min(rt,xe.count));const lt=rt-je;if(lt<0||lt===1/0)return;st.setup(N,H,_e,z,ye);let Bt,Je=ve;if(ye!==null&&(Bt=K.get(ye),Je=$e,Je.setIndex(Bt)),N.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*vt()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(N.isLine){let Se=H.linewidth;Se===void 0&&(Se=1),Te.setLineWidth(Se*vt()),N.isLineSegments?Je.setMode(U.LINES):N.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else N.isPoints?Je.setMode(U.POINTS):N.isSprite&&Je.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Se=N._multiDrawStarts,Sn=N._multiDrawCounts,Ze=N._multiDrawCount,sn=ye?K.get(ye).bytesPerElement:1,xi=Ee.get(H).currentProgram.getUniforms();for(let zt=0;zt<Ze;zt++)xi.setValue(U,"_gl_DrawID",zt),Je.render(Se[zt]/sn,Sn[zt])}else if(N.isInstancedMesh)Je.renderInstances(je,lt,N.count);else if(z.isInstancedBufferGeometry){const Se=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Sn=Math.min(z.instanceCount,Se);Je.renderInstances(je,lt,Sn)}else Je.render(je,lt)};function et(M,D,z){M.transparent===!0&&M.side===gn&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,Zs(M,D,z),M.side=Fn,M.needsUpdate=!0,Zs(M,D,z),M.side=gn):Zs(M,D,z)}this.compile=function(M,D,z=null){z===null&&(z=M),p=Xe.get(z),p.init(D),S.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const _e=ne[de];et(_e,z,N),H.add(_e)}else et(ne,z,N),H.add(ne)}),S.pop(),p=null,H},this.compileAsync=function(M,D,z=null){const H=this.compile(M,D,z);return new Promise(N=>{function ne(){if(H.forEach(function(de){Ee.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){N(M);return}setTimeout(ne,10)}Ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let nn=null;function Mn(M){nn&&nn(M)}function Il(){si.stop()}function Pl(){si.start()}const si=new Xu;si.setAnimationLoop(Mn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(M){nn=M,W.setAnimationLoop(M),M===null?si.stop():si.start()},W.addEventListener("sessionstart",Il),W.addEventListener("sessionend",Pl),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,D,C),p=Xe.get(M,S.length),p.init(D),S.push(p),Re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(Re),be=this.localClippingEnabled,ie=te.init(this.clippingPlanes,be),m=me.get(M,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&ra(ne,D,-1/0,_.sortObjects)}ra(M,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(le,pe),qe=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,qe&&Ae.addToRenderList(m,M),this.info.render.frame++,ie===!0&&te.beginShadows();const z=p.state.shadowsArray;ge.render(z,M,D),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const ne=D.cameras;if(N.length>0)for(let de=0,_e=ne.length;de<_e;de++){const ye=ne[de];kl(H,N,M,ye)}qe&&Ae.render(M);for(let de=0,_e=ne.length;de<_e;de++){const ye=ne[de];Ll(m,M,ye,ye.viewport)}}else N.length>0&&kl(H,N,M,D),qe&&Ae.render(M),Ll(m,M,D);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(_,M,D),st.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&te.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ra(M,D,z,H){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){H&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Re);const de=j.update(M),_e=M.material;_e.visible&&m.push(M,de,_e,z,ze.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){const de=j.update(M),_e=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ze.copy(de.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Re)),Array.isArray(_e)){const ye=de.groups;for(let Le=0,Ne=ye.length;Le<Ne;Le++){const xe=ye[Le],je=_e[xe.materialIndex];je&&je.visible&&m.push(M,de,je,z,ze.z,xe)}}else _e.visible&&m.push(M,de,_e,z,ze.z,null)}}const ne=M.children;for(let de=0,_e=ne.length;de<_e;de++)ra(ne[de],D,z,H)}function Ll(M,D,z,H){const N=M.opaque,ne=M.transmissive,de=M.transparent;p.setupLightsView(z),ie===!0&&te.setGlobalState(_.clippingPlanes,z),H&&Te.viewport(P.copy(H)),N.length>0&&Js(N,D,z),ne.length>0&&Js(ne,D,z),de.length>0&&Js(de,D,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function kl(M,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new vi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Xs:On,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const ne=p.state.transmissionRenderTarget[H.id],de=H.viewport||P;ne.setSize(de.z,de.w);const _e=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(G),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),qe&&Ae.render(z);const ye=_.toneMapping;_.toneMapping=ei;const Le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ie===!0&&te.setGlobalState(_.clippingPlanes,H),Js(M,z,H),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let xe=0,je=D.length;xe<je;xe++){const rt=D[xe],lt=rt.object,Bt=rt.geometry,Je=rt.material,Se=rt.group;if(Je.side===gn&&lt.layers.test(H.layers)){const Sn=Je.side;Je.side=Ut,Je.needsUpdate=!0,Dl(lt,z,H,Bt,Je,Se),Je.side=Sn,Je.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}_.setRenderTarget(_e),_.setClearColor(G,X),Le!==void 0&&(H.viewport=Le),_.toneMapping=ye}function Js(M,D,z){const H=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ne=M.length;N<ne;N++){const de=M[N],_e=de.object,ye=de.geometry,Le=H===null?de.material:H,Ne=de.group;_e.layers.test(z.layers)&&Dl(_e,D,z,ye,Le,Ne)}}function Dl(M,D,z,H,N,ne){M.onBeforeRender(_,D,z,H,N,ne),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(_,D,z,H,M,ne),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=Ut,N.needsUpdate=!0,_.renderBufferDirect(z,D,H,N,M,ne),N.side=Fn,N.needsUpdate=!0,_.renderBufferDirect(z,D,H,N,M,ne),N.side=gn):_.renderBufferDirect(z,D,H,N,M,ne),M.onAfterRender(_,D,z,H,N,ne)}function Zs(M,D,z){D.isScene!==!0&&(D=ft);const H=Ee.get(M),N=p.state.lights,ne=p.state.shadowsArray,de=N.state.version,_e=Me.getParameters(M,N.state,ne,D,z),ye=Me.getProgramCacheKey(_e);let Le=H.programs;H.environment=M.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(M.isMeshStandardMaterial?B:y).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",De),Le=new Map,H.programs=Le);let Ne=Le.get(ye);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===de)return Ul(M,_e),Ne}else _e.uniforms=Me.getUniforms(M),M.onBeforeCompile(_e,_),Ne=Me.acquireProgram(_e,ye),Le.set(ye,Ne),H.uniforms=_e.uniforms;const xe=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(xe.clippingPlanes=te.uniform),Ul(M,_e),H.needsLights=xd(M),H.lightsStateVersion=de,H.needsLights&&(xe.ambientLightColor.value=N.state.ambient,xe.lightProbe.value=N.state.probe,xe.directionalLights.value=N.state.directional,xe.directionalLightShadows.value=N.state.directionalShadow,xe.spotLights.value=N.state.spot,xe.spotLightShadows.value=N.state.spotShadow,xe.rectAreaLights.value=N.state.rectArea,xe.ltc_1.value=N.state.rectAreaLTC1,xe.ltc_2.value=N.state.rectAreaLTC2,xe.pointLights.value=N.state.point,xe.pointLightShadows.value=N.state.pointShadow,xe.hemisphereLights.value=N.state.hemi,xe.directionalShadowMap.value=N.state.directionalShadowMap,xe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,xe.spotShadowMap.value=N.state.spotShadowMap,xe.spotLightMatrix.value=N.state.spotLightMatrix,xe.spotLightMap.value=N.state.spotLightMap,xe.pointShadowMap.value=N.state.pointShadowMap,xe.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Nl(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Or.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Ul(M,D){const z=Ee.get(M);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function _d(M,D,z,H,N){D.isScene!==!0&&(D=ft),A.resetTextureUnits();const ne=D.fog,de=H.isMeshStandardMaterial?D.environment:null,_e=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ot,ye=(H.isMeshStandardMaterial?B:y).get(H.envMap||de),Le=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),xe=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let lt=ei;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(lt=_.toneMapping);const Bt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Bt!==void 0?Bt.length:0,Se=Ee.get(H),Sn=p.state.lights;if(ie===!0&&(be===!0||M!==b)){const qt=M===b&&H.id===w;te.setState(H,M,qt)}let Ze=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Sn.state.version||Se.outputColorSpace!==_e||N.isBatchedMesh&&Se.batching===!1||!N.isBatchedMesh&&Se.batching===!0||N.isBatchedMesh&&Se.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Se.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Se.instancing===!1||!N.isInstancedMesh&&Se.instancing===!0||N.isSkinnedMesh&&Se.skinning===!1||!N.isSkinnedMesh&&Se.skinning===!0||N.isInstancedMesh&&Se.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Se.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Se.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Se.instancingMorph===!1&&N.morphTexture!==null||Se.envMap!==ye||H.fog===!0&&Se.fog!==ne||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Le||Se.vertexTangents!==Ne||Se.morphTargets!==xe||Se.morphNormals!==je||Se.morphColors!==rt||Se.toneMapping!==lt||Se.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,Se.__version=H.version);let sn=Se.currentProgram;Ze===!0&&(sn=Zs(H,D,N));let xi=!1,zt=!1,ms=!1;const ct=sn.getUniforms(),fn=Se.uniforms;if(Te.useProgram(sn.program)&&(xi=!0,zt=!0,ms=!0),H.id!==w&&(w=H.id,zt=!0),xi||b!==M){Te.buffers.depth.getReversed()?(ce.copy(M.projectionMatrix),Vm(ce),Gm(ce),ct.setValue(U,"projectionMatrix",ce)):ct.setValue(U,"projectionMatrix",M.projectionMatrix),ct.setValue(U,"viewMatrix",M.matrixWorldInverse);const Bn=ct.map.cameraPosition;Bn!==void 0&&Bn.setValue(U,ke.setFromMatrixPosition(M.matrixWorld)),We.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,zt=!0,ms=!0)}if(N.isSkinnedMesh){ct.setOptional(U,N,"bindMatrix"),ct.setOptional(U,N,"bindMatrixInverse");const qt=N.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),ct.setValue(U,"boneTexture",qt.boneTexture,A))}N.isBatchedMesh&&(ct.setOptional(U,N,"batchingTexture"),ct.setValue(U,"batchingTexture",N._matricesTexture,A),ct.setOptional(U,N,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",N._indirectTexture,A),ct.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",N._colorsTexture,A));const gs=z.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&Ie.update(N,z,sn),(zt||Se.receiveShadow!==N.receiveShadow)&&(Se.receiveShadow=N.receiveShadow,ct.setValue(U,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fn.envMap.value=ye,fn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(fn.envMapIntensity.value=D.environmentIntensity),zt&&(ct.setValue(U,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&yd(fn,ms),ne&&H.fog===!0&&he.refreshFogUniforms(fn,ne),he.refreshMaterialUniforms(fn,H,$,Z,p.state.transmissionRenderTarget[M.id]),Or.upload(U,Nl(Se),fn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Or.upload(U,Nl(Se),fn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(U,"center",N.center),ct.setValue(U,"modelViewMatrix",N.modelViewMatrix),ct.setValue(U,"normalMatrix",N.normalMatrix),ct.setValue(U,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qt=H.uniformsGroups;for(let Bn=0,zn=qt.length;Bn<zn;Bn++){const Fl=qt[Bn];k.update(Fl,sn),k.bind(Fl,sn)}}return sn}function yd(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function xd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,z){Ee.get(M.texture).__webglTexture=D,Ee.get(M.depthTexture).__webglTexture=z;const H=Ee.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const z=Ee.get(M);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,z=0){C=M,E=D,T=z;let H=!0,N=null,ne=!1,de=!1;if(M){const ye=Ee.get(M);if(ye.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(ye.__hasExternalTextures)A.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const xe=M.depthTexture;if(ye.__boundDepthTexture!==xe){if(xe!==null&&Ee.has(xe)&&(M.width!==xe.image.width||M.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Ne=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?N=Ne[D][z]:N=Ne[D],ne=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?N=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[z]:N=Ne,P.copy(M.viewport),V.copy(M.scissor),O=M.scissorTest}else P.copy(we).multiplyScalar($).floor(),V.copy(Be).multiplyScalar($).floor(),O=it;if(Te.bindFramebuffer(U.FRAMEBUFFER,N)&&H&&Te.drawBuffers(M,N),Te.viewport(P),Te.scissor(V),Te.setScissorTest(O),ne){const ye=Ee.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ye.__webglTexture,z)}else if(de){const ye=Ee.get(M.texture),Le=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Le)}w=-1},this.readRenderTargetPixels=function(M,D,z,H,N,ne,de){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){Te.bindFramebuffer(U.FRAMEBUFFER,_e);try{const ye=M.texture,Le=ye.format,Ne=ye.type;if(!We.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-H&&z>=0&&z<=M.height-N&&U.readPixels(D,z,H,N,Fe.convert(Le),Fe.convert(Ne),ne)}finally{const ye=C!==null?Ee.get(C).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(M,D,z,H,N,ne,de){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(_e=_e[de]),_e){const ye=M.texture,Le=ye.format,Ne=ye.type;if(!We.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-H&&z>=0&&z<=M.height-N){Te.bindFramebuffer(U.FRAMEBUFFER,_e);const xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),U.readPixels(D,z,H,N,Fe.convert(Le),Fe.convert(Ne),0);const je=C!==null?Ee.get(C).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,je);const rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Hm(U,rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(xe),U.deleteSync(rt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,z=0){M.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-z),N=Math.floor(M.image.width*H),ne=Math.floor(M.image.height*H),de=D!==null?D.x:0,_e=D!==null?D.y:0;A.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,de,_e,N,ne),Te.unbindTexture()},this.copyTextureToTexture=function(M,D,z=null,H=null,N=0){M.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],D=arguments[2],N=arguments[3]||0,z=null);let ne,de,_e,ye,Le,Ne,xe,je,rt;const lt=M.isCompressedTexture?M.mipmaps[N]:M.image;z!==null?(ne=z.max.x-z.min.x,de=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,Le=z.min.y,Ne=z.isBox3?z.min.z:0):(ne=lt.width,de=lt.height,_e=lt.depth||1,ye=0,Le=0,Ne=0),H!==null?(xe=H.x,je=H.y,rt=H.z):(xe=0,je=0,rt=0);const Bt=Fe.convert(D.format),Je=Fe.convert(D.type);let Se;D.isData3DTexture?(A.setTexture3D(D,0),Se=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Se=U.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Se=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Sn=U.getParameter(U.UNPACK_ROW_LENGTH),Ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),xi=U.getParameter(U.UNPACK_SKIP_ROWS),zt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ne);const ms=M.isDataArrayTexture||M.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const fn=Ee.get(M),gs=Ee.get(D),qt=Ee.get(fn.__renderTarget),Bn=Ee.get(gs.__renderTarget);Te.bindFramebuffer(U.READ_FRAMEBUFFER,qt.__webglFramebuffer),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<_e;zn++)ms&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,N,Ne+zn),M.isDepthTexture?(ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,N,rt+zn),U.blitFramebuffer(ye,Le,ne,de,xe,je,ne,de,U.DEPTH_BUFFER_BIT,U.NEAREST)):ct?U.copyTexSubImage3D(Se,N,xe,je,rt+zn,ye,Le,ne,de):U.copyTexSubImage2D(Se,N,xe,je,rt+zn,ye,Le,ne,de);Te.bindFramebuffer(U.READ_FRAMEBUFFER,null),Te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Se,N,xe,je,rt,ne,de,_e,Bt,Je,lt.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Se,N,xe,je,rt,ne,de,_e,Bt,lt.data):U.texSubImage3D(Se,N,xe,je,rt,ne,de,_e,Bt,Je,lt):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,xe,je,ne,de,Bt,Je,lt.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,xe,je,lt.width,lt.height,Bt,lt.data):U.texSubImage2D(U.TEXTURE_2D,N,xe,je,ne,de,Bt,Je,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Sn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,xi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt),N===0&&D.generateMipmaps&&U.generateMipmap(Se),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,D,z=null,H=null,N=0){return M.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,M=arguments[2],D=arguments[3],N=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,z,H,N)},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,Te.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}class Qy extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new R;class Ws{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ln(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ln(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ed extends en{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ni;const Ms=new R,Ui=new R,Fi=new R,Oi=new ae,Ss=new ae,td=new Pe,yr=new R,ws=new R,xr=new R,ph=new ae,za=new ae,mh=new ae;class ex extends at{constructor(e=new ed){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qu(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Ws(i,3,0,!1)),Ni.setAttribute("uv",new Ws(i,2,3,!1))}this.geometry=Ni,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Fi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;br(yr.set(-.5,-.5,0),Fi,a,Ui,s,r),br(ws.set(.5,-.5,0),Fi,a,Ui,s,r),br(xr.set(.5,.5,0),Fi,a,Ui,s,r),ph.set(0,0),za.set(1,0),mh.set(1,1);let o=e.ray.intersectTriangle(yr,ws,xr,!1,Ms);if(o===null&&(br(ws.set(-.5,.5,0),Fi,a,Ui,s,r),za.set(0,1),o=e.ray.intersectTriangle(yr,xr,ws,!1,Ms),o===null))return;const l=e.ray.origin.distanceTo(Ms);l<e.near||l>e.far||t.push({distance:l,point:Ms.clone(),uv:Kt.getInterpolation(Ms,yr,ws,xr,ph,za,mh,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function br(n,e,t,i,s,r){Oi.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ss.x=r*Oi.x-s*Oi.y,Ss.y=s*Oi.x+r*Oi.y):Ss.copy(Oi),n.copy(e),n.x+=Ss.x,n.y+=Ss.y,n.applyMatrix4(td)}const gh=new R,vh=new Ke,_h=new Ke,tx=new R,yh=new Pe,Mr=new R,Ha=new _n,xh=new Pe,Va=new ta;class nx extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Mr),this.boundingBox.expandByPoint(Mr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Mr),this.boundingSphere.expandByPoint(Mr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(s),e.ray.intersectsSphere(Ha)!==!1&&(xh.copy(s).invert(),Va.copy(e.ray).applyMatrix4(xh),!(this.boundingBox!==null&&Va.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Va)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===om?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;vh.fromBufferAttribute(s.attributes.skinIndex,e),_h.fromBufferAttribute(s.attributes.skinWeight,e),gh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=_h.getComponent(r);if(a!==0){const o=vh.getComponent(r);yh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(tx.copy(gh).applyMatrix4(yh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nd extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class id extends bt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ft,u=Ft,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new Pe,ix=new Pe;class _l{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ix;bh.multiplyMatrices(o,t[r]),bh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new _l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new id(t,e,e,Zt,cn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new nd),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class qo extends Tt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bi=new Pe,Mh=new Pe,Sr=[],Sh=new Qt,sx=new Pe,Es=new Ye,Ts=new _n;class rx extends Ye{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bi),Sh.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Sh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Bi),Ts.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(i),e.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Bi),Mh.multiplyMatrices(i,Bi),Es.matrixWorld=Mh,Es.raycast(e,Sr);for(let a=0,o=Sr.length;a<o;a++){const l=Sr[a];l.instanceId=r,l.object=this,t.push(l)}Sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new id(new Float32Array(s*this.count),s,this.count,ll,cn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sd extends en{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $r=new R,qr=new R,wh=new Pe,As=new ta,wr=new _n,Ga=new R,Eh=new R;class yl extends at{constructor(e=new At,t=new sd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$r.fromBufferAttribute(t,s-1),qr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$r.distanceTo(qr);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;wh.copy(s).invert(),As.copy(e.ray).applyMatrix4(wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=u.getX(v),x=u.getX(v+1),S=Er(this,e,As,l,p,x);S&&t.push(S)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(f),p=Er(this,e,As,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=Er(this,e,As,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Er(this,e,As,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Er(n,e,t,i,s,r){const a=n.geometry.attributes.position;if($r.fromBufferAttribute(a,s),qr.fromBufferAttribute(a,r),t.distanceSqToSegment($r,qr,Ga,Eh)>i)return;Ga.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ga);if(!(l<e.near||l>e.far))return{distance:l,point:Eh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Th=new R,Ah=new R;class ax extends yl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Th.fromBufferAttribute(t,s),Ah.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Th.distanceTo(Ah);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ox extends yl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xl extends en{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ch=new Pe,Xo=new ta,Tr=new _n,Ar=new R;class rd extends at{constructor(e=new At,t=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Ch.copy(s).invert(),Xo.copy(e.ray).applyMatrix4(Ch);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Ar.fromBufferAttribute(h,m),Rh(Ar,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Ar.fromBufferAttribute(h,g),Rh(Ar,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rh(n,e,t,i,s,r,a){const o=Xo.distanceSqToPoint(n);if(o<t){const l=new R;Xo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class lx extends bt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],d=i[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,s=[],r=[],a=[],o=new R,l=new Pe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bl extends yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cx extends bl{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ml(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Cr=new R,Wa=new Ml,$a=new Ml,qa=new Ml;class hx extends yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),c=Cr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wa.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),$a.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),qa.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),$a.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),qa.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Wa.calc(l),$a.calc(l),qa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ih(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function ux(n,e){const t=1-n;return t*t*e}function dx(n,e){return 2*(1-n)*n*e}function fx(n,e){return n*n*e}function Fs(n,e,t,i){return ux(n,e)+dx(n,t)+fx(n,i)}function px(n,e){const t=1-n;return t*t*t*e}function mx(n,e){const t=1-n;return 3*t*t*n*e}function gx(n,e){return 3*(1-n)*n*n*e}function vx(n,e){return n*n*n*e}function Os(n,e,t,i,s){return px(n,e)+mx(n,t)+gx(n,i)+vx(n,s)}class ad extends yn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Os(e,s.x,r.x,a.x,o.x),Os(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _x extends yn{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Os(e,s.x,r.x,a.x,o.x),Os(e,s.y,r.y,a.y,o.y),Os(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class od extends yn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yx extends yn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends yn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Fs(e,s.x,r.x,a.x),Fs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xx extends yn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Fs(e,s.x,r.x,a.x),Fs(e,s.y,r.y,a.y),Fs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Ih(o,l.x,c.x,u.x,h.x),Ih(o,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var Ph=Object.freeze({__proto__:null,ArcCurve:cx,CatmullRomCurve3:hx,CubicBezierCurve:ad,CubicBezierCurve3:_x,EllipseCurve:bl,LineCurve:od,LineCurve3:yx,QuadraticBezierCurve:ld,QuadraticBezierCurve3:xx,SplineCurve:cd});class bx extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ph[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Ph[s.type]().fromJSON(s))}return this}}class Mx extends bx{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new od(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new ld(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new ad(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new cd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new bl(e,t,i,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Sl extends At{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new R,d=new ae,f=new R,g=new R,v=new R;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=t;x++){const S=i+x*u*s,_=Math.sin(S),I=Math.cos(S);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*_,h.y=e[E].y,h.z=e[E].x*I,a.push(h.x,h.y,h.z),d.x=x/t,d.y=E/(e.length-1),o.push(d.x,d.y);const T=l[3*E+0]*_,C=l[3*E+1],w=l[3*E+0]*I;c.push(T,C,w)}}for(let x=0;x<t;x++)for(let S=0;S<e.length-1;S++){const _=S+x*e.length,I=_,E=_+e.length,T=_+e.length+1,C=_+1;r.push(I,E,C),r.push(T,C,E)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.points,e.segments,e.phiStart,e.phiLength)}}class wl extends Sl{constructor(e=1,t=1,i=4,s=8){const r=new Mx;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new wl(e.radius,e.length,e.capSegments,e.radialSegments)}}class $s extends At{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new R,u=new ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class El extends At{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function x(){const _=new R,I=new R;let E=0;const T=(t-e)/i;for(let C=0;C<=r;C++){const w=[],b=C/r,P=b*(t-e)+e;for(let V=0;V<=s;V++){const O=V/s,G=O*l+o,X=Math.sin(G),q=Math.cos(G);I.x=P*X,I.y=-b*i+m,I.z=P*q,h.push(I.x,I.y,I.z),_.set(X,T,q).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-b),w.push(g++)}v.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){const b=v[w][C],P=v[w+1][C],V=v[w+1][C+1],O=v[w][C+1];(e>0||w!==0)&&(u.push(b,P,O),E+=3),(t>0||w!==r-1)&&(u.push(P,V,O),E+=3)}c.addGroup(p,E,0),p+=E}function S(_){const I=g,E=new ae,T=new R;let C=0;const w=_===!0?e:t,b=_===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let V=0;V<=s;V++){const G=V/s*l+o,X=Math.cos(G),q=Math.sin(G);T.x=w*q,T.y=m*b,T.z=w*X,h.push(T.x,T.y,T.z),d.push(0,b,0),E.x=X*.5+.5,E.y=q*.5*b+.5,f.push(E.x,E.y),g++}for(let V=0;V<s;V++){const O=I+V,G=P+V;_===!0?u.push(G,G+1,O):u.push(G+1,G,O),C+=3}c.addGroup(p,C,_===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends El{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ys(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _i extends At{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new R,d=new R,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],S=p/i;let _=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){const E=I/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+S*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-S),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const S=u[p][x+1],_=u[p][x],I=u[p+1][x],E=u[p+1][x+1];(p!==0||a>0)&&f.push(S,_,E),(p!==i-1||l<Math.PI)&&f.push(_,I,E)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xr extends At{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new R,h=new R,d=new R;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ia extends en{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xn extends ia{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rs extends en{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Rr(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Lh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function hd(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class Ks{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends Ks{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:r=e,o=2*t-i;break;case Gr:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gi:a=e,l=2*i-t;break;case Gr:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let I=0;I!==o;++I)r[I]=p*a[u+I]+x*a[c+I]+S*a[l+I]+_*a[h+I];return r}}class ud extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Tx extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rr(t,this.TimeBufferType),this.values=Rr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rr(e.times,Array),values:Rr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Sx(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let g=0;g!==i;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Vs;class ds extends bn{constructor(e,t,i){super(e,t,i)}}ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Hs;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class dd extends bn{}dd.prototype.ValueTypeName="color";class as extends bn{}as.prototype.ValueTypeName="number";class Ax extends Ks{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}}class os extends bn{InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends bn{constructor(e,t,i){super(e,t,i)}}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Hs;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends bn{}ls.prototype.ValueTypeName="vector";class jo{constructor(e="",t=-1,i=[],s=dl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Rx(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(bn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=wx(l);l=Lh(l,1,u),c=Lh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new as(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,g,v){if(f.length!==0){const m=[],p=[];hd(f,m,p,g),m.length!==0&&v.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const S=d[g];m.push(S.time),p.push(S.morphTarget===v?1:0)}s.push(new as(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";i(ls,f+".position",d,"pos",s),i(os,f+".quaternion",d,"rot",s),i(ls,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return as;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return dd;case"quaternion":return os;case"bool":case"boolean":return ds;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Rx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cx(n.type);if(n.times===void 0){const t=[],i=[];hd(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Kn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ix{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Px=new Ix;class ps{constructor(e){this.manager=e!==void 0?e:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class Lx extends Error{constructor(e,t){super(e),this.response=t}}class fd extends ps{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Kn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:i,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:S,value:_})=>{if(S)p.close();else{v+=_.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,T=u.length;E<T;E++){const C=u[E];C.onProgress&&C.onProgress(I)}p.enqueue(_),x()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Lx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Kn.add(e,c);const u=Rn[e];delete Rn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kx extends ps{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Kn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Gs("img");function l(){u(),Kn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Dx extends ps{constructor(e){super(e)}load(e,t,i,s){const r=new bt,a=new kx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class sa extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Nx extends sa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xa=new Pe,kh=new R,Dh=new R;class Tl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ux extends Tl{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fx extends sa{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ux}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nh=new Pe,Cs=new R,ja=new R;class Ox extends Tl{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),ja.copy(i.position),ja.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ja),i.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh)}}class Bx extends sa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zx extends Tl{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new zx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hx extends ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Kn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Kn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(e,l),r.manager.itemStart(e)}}class Vx{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){un.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;un.multiplyQuaternionsFlat(e,a,e,t,e,i),un.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const Al="\\[\\]\\.:\\/",Gx=new RegExp("["+Al+"]","g"),Cl="[^"+Al+"]",Wx="[^"+Al.replace("\\.","")+"]",$x=/((?:WC+[\/:])*)/.source.replace("WC",Cl),qx=/(WCOD+)?/.source.replace("WCOD",Wx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),Yx=new RegExp("^"+$x+qx+Xx+jx+"$"),Kx=["material","materials","bones","map"];class Jx{constructor(e,t,i){const s=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(e){const t=Yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Kx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Jx;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zx{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=cm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case um:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case dl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===hm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===lm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Gi,s.endingEnd=Gi):(e?s.endingStart=this.zeroSlopeAtStart?Gi:Vi:s.endingStart=Gr,t?s.endingEnd=this.zeroSlopeAtEnd?Gi:Vi:s.endingEnd=Gr)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Qx=new Float32Array(1);class eb extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new Vx(Qe.create(i,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new ud(new Float32Array(2),new Float32Array(2),1,Qx),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?jo.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=dl),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new Zx(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?jo.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);class tb extends at{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ae(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const zi=new R,Uh=new Pe,Fh=new Pe,Oh=new R,Bh=new R;class nb{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Uh.copy(v.matrixWorldInverse),Fh.multiplyMatrices(v.projectionMatrix,Uh),u(g,g,v),f(g)},this.setSize=function(g,v){i=g,s=v,r=i/2,a=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function u(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){zi.setFromMatrixPosition(g.matrixWorld),zi.applyMatrix4(Fh);const p=zi.z>=-1&&zi.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,v,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(zi.x*r+r)+"px,"+(-zi.y*a+a)+"px)",x.parentNode!==l&&l.appendChild(x),g.onAfterRender(t,v,m));const S={distanceToCameraSquared:h(m,g)};o.objects.set(g,S)}for(let p=0,x=g.children.length;p<x;p++)u(g.children[p],v,m)}function h(g,v){return Oh.setFromMatrixPosition(g.matrixWorld),Bh.setFromMatrixPosition(v.matrixWorld),Oh.distanceToSquared(Bh)}function d(g){const v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function f(g){const v=d(g).sort(function(p,x){if(p.renderOrder!==x.renderOrder)return x.renderOrder-p.renderOrder;const S=o.objects.get(p).distanceToCameraSquared,_=o.objects.get(x).distanceToCameraSquared;return S-_}),m=v.length;for(let p=0,x=v.length;p<x;p++)v[p].element.style.zIndex=m-p}}}function zh(n,e){if(e===dm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Go||e===Nu){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Go)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class ib extends ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Mb(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Bs.extractUrlBase(e);a=Bs.resolveURL(c,this.path)}else a=Bs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===md){try{a[He.KHR_BINARY_GLTF]=new Sb(e)}catch(h){s&&s(h);return}r=JSON.parse(a[He.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ub(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:a[h]=new ab;break;case He.KHR_DRACO_MESH_COMPRESSION:a[h]=new wb(r,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:a[h]=new Eb;break;case He.KHR_MESH_QUANTIZATION:a[h]=new Tb;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function sb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rb{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ot);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new pd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bx(u),c.distance=h;break;case"spot":c=new Fx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class ab{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,i){const s=[];e.color=new re(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ot),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}}class ob{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class lb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}}class cb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ot)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,yt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class db{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class fb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(o[0],o[1],o[2],Ot),Promise.all(r)}}class pb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class mb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(o[0],o[1],o[2],Ot),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,yt)),Promise.all(r)}}class gb{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class vb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class _b{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class yb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bb{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class Mb{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Yt.TRIANGLES&&c.mode!==Yt.TRIANGLE_STRIP&&c.mode!==Yt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const v=new Pe,m=new R,p=new un,x=new R(1,1,1),S=new rx(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),S.setMatrixAt(_,v.compose(m,p,x));for(const _ in l)if(_==="_COLOR_0"){const I=l[_];S.instanceColor=new qo(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);at.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const md="glTF",Rs=12,Hh={JSON:1313821514,BIN:5130562};class Sb{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==md)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Rs,r=new DataView(e,Rs);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Hh.JSON){const c=new Uint8Array(e,Rs+a,o);this.content=i.decode(c)}else if(l===Hh.BIN){const c=Rs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Yo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Yo[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=ji[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(f)},o,c,Ot,d)})})}}class Eb{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Tb{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class gd extends Ks{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,x=1-m,S=p-d+h;for(let _=0;_!==o;_++){const I=a[v+_+o],E=a[v+_+l]*u,T=a[g+_+o],C=a[g+_]*u;r[_]=x*I+S*E+m*T+p*C}return r}}const Ab=new un;class Cb extends gd{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Ab.fromArray(r).normalize().toArray(r),r}}const Yt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ji={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vh={9728:Ft,9729:Gt,9984:Eu,9985:Lr,9986:Ls,9987:Ln},Gh={33071:Yn,33648:Vr,10497:es},Ya={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rb={CUBICSPLINE:void 0,LINEAR:Vs,STEP:Hs},Ka={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ib(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),n.DefaultMaterial}function ui(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Pn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pb(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function Lb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kb(n){let e;const t=n.extensions&&n.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ja(t.attributes):e=n.indices+":"+Ja(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ja(n.targets[i]);return e}function Ja(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ko(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Db(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nb=new Pe;class Ub{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Dx(this.options.manager):this.textureLoader=new Hx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ui(r,o,s),Pn(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Bs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Ya[s.type],o=ji[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Tt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ya[s.type],c=ji[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=t.cache.get(x);S||(v=new c(o,p*f,s.count*f/u),S=new Qu(v,f/u),t.cache.add(x,S)),m=new Ws(S,l,d%f/u,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new Tt(v,l,g);if(s.sparse!==void 0){const p=Ya.SCALAR,x=ji[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new x(a[1],S,s.sparse.count*p),E=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=I.length;T<C;T++){const w=I[T];if(m.setX(w,E[T*l]),l>=2&&m.setY(w,E[T*l+1]),l>=3&&m.setZ(w,E[T*l+2]),l>=4&&m.setW(w,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Vh[d.magFilter]||Gt,u.minFilter=Vh[d.minFilter]||Ln,u.wrapS=Gh[d.wrapS]||es,u.wrapT=Gh[d.wrapT]||es,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ft&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new bt(v);m.needsUpdate=!0,d(m)}),t.load(Bs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Pn(h,a),h.userData.mimeType=a.mimeType||Db(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new xl,en.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new sd,en.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ia}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const h=s[He.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new re(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ot),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,yt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gn);const u=r.alphaMode||Ka.OPAQUE;if(u===Ka.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ka.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Wt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wt){const h=r.emissiveFactor;o.emissive=new re().setRGB(h[0],h[1],h[2],Ot)}return r.emissiveTexture!==void 0&&a!==Wt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Pn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ui(s,h,r),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=kb(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Wh(new At,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?Ib(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=a[f];let p;const x=c[f];if(m.mode===Yt.TRIANGLES||m.mode===Yt.TRIANGLE_STRIP||m.mode===Yt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new nx(v,x):new Ye(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Yt.TRIANGLE_STRIP?p.geometry=zh(p.geometry,Nu):m.mode===Yt.TRIANGLE_FAN&&(p.geometry=zh(p.geometry,Go));else if(m.mode===Yt.LINES)p=new ax(v,x);else if(m.mode===Yt.LINE_STRIP)p=new yl(v,x);else if(m.mode===Yt.LINE_LOOP)p=new ox(v,x);else if(m.mode===Yt.POINTS)p=new rd(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pn(p,r),m.extensions&&ui(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ui(s,h[0],r),h[0];const d=new Et;r.extensions&&ui(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Dt(Bm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new gl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Pn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new Pe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _l(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let x=0,S=d.length;x<S;x++){const _=d[x],I=f[x],E=g[x],T=v[x],C=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const w=i._createAnimationTracks(_,I,E,T,C);if(w)for(let b=0;b<w.length;b++)p.push(w[b])}return new jo(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Nb)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new nd:c.length>1?u=new Et:c.length===1?u=c[0]:u=new at,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Pn(u,r),r.extensions&&ui(i,u,r),r.matrix!==void 0){const h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Et;i.name&&(r.name=s.createUniqueName(i.name)),Pn(r,i),i.extensions&&ui(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof en||d instanceof bt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Xn[r.path]===Xn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Xn[r.path]){case Xn.weights:c=as;break;case Xn.rotation:c=os;break;case Xn.position:case Xn.scale:c=ls;break;default:switch(i.itemSize){case 1:c=as;break;case 2:case 3:default:c=ls;break}break}const u=s.interpolation!==void 0?Rb[s.interpolation]:Vs,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Xn[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ko(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof os?Cb:gd;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Fb(n,e,t){const i=e.attributes,s=new Qt;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const u=Ko(ji[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,l=new R;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Ko(ji[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new _n;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Wh(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Yo[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return Ve.workingColorSpace!==Ot&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),Pn(n,e),Fb(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Pb(n,e.targets,t):n})}function Ob(n){const e=new Map,t=new Map,i=n.clone();return vd(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function vd(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)vd(n.children[i],e.children[i],t)}function Bb(n){const e=n.startsWith("poly:")?`assets/polyfork/${n.slice(5)}.glb`:`assets/glb/${n.slice(4)}.glb`;return new URL(e,document.baseURI).href}function zb(n){n.traverse(e=>{const t=e;if(!t.isMesh)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const s of i){const r=s;!r||!r.color||(r.metalness=0,r.roughness=Math.min(1,(r.roughness??.6)*.35+.55),r.color.r=Math.min(1,r.color.r*1.06+.015),r.color.g=Math.min(1,r.color.g*1.03),r.color.b=Math.min(1,r.color.b*.95),r.map&&(r.map.colorSpace=yt),r.needsUpdate=!0)}t.castShadow=!0,t.receiveShadow=!0})}function Hb(n,e){const t=Ad[e];if(!t)return;n.updateMatrixWorld(!0);const s=new Qt().setFromObject(n).getSize(new R),r=t.h?t.h/Math.max(.001,s.y):(t.max??1.4)/Math.max(.001,s.x,s.y,s.z);n.scale.multiplyScalar(r),n.updateMatrixWorld(!0);const o=new Qt().setFromObject(n).getCenter(new R);n.position.x-=o.x,n.position.z-=o.z,n.updateMatrixWorld(!0);const l=new Qt().setFromObject(n);n.position.y-=l.min.y}class Vb{constructor(){F(this,"loader",new ib);F(this,"masters",new Map);F(this,"failed",new Set);F(this,"inflight",new Map)}async load(e){const t=this.masters.get(e);if(t)return t;if(this.failed.has(e))return null;const i=this.inflight.get(e);if(i)return i;const s=this.loader.loadAsync(Bb(e)).then(r=>{const a=r.scene;e.startsWith("poly:")&&(zb(a),Hb(a,e)),a.traverse(l=>{const c=l;c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)});const o={key:e,scene:a,clips:r.animations??[]};return this.masters.set(e,o),this.inflight.delete(e),o}).catch(r=>(console.warn("asset failed",e,r),this.failed.add(e),this.inflight.delete(e),null));return this.inflight.set(e,s),s}spawn(e){const t=this.masters.get(e);if(!t)return null;let i=!1;return t.scene.traverse(s=>{s.isSkinnedMesh&&(i=!0)}),i?Ob(t.scene):t.scene.clone(!0)}clips(e){var t;return((t=this.masters.get(e))==null?void 0:t.clips)??[]}has(e){return this.masters.has(e)}}const Gb=`
  varying vec3 vWorld;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vWorld = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,Wb=`
  uniform vec3 uGrass;
  uniform vec3 uShade;
  uniform vec3 uSand;
  varying vec3 vWorld;
  void main() {
    vec2 e = vWorld.xz / vec2(9.45, 9.05);
    float r = length(e);
    float n = sin(vWorld.x * 1.65) * sin(vWorld.z * 1.35);
    float m = sin(vWorld.x * 0.45 + vWorld.z * 0.7);
    vec3 col = mix(uGrass, uShade, smoothstep(-0.35, 0.9, n) * 0.38 + smoothstep(0.2, 1.0, m) * 0.12);
    col = mix(col, uSand, smoothstep(0.78, 1.02, r));
    if (r > 1.02) discard;
    gl_FragColor = vec4(col, 1.0);
  }
`;function Za(n,e,t,i,s,r,a){for(let o=0;o<=i;o++){const l=o/i*Math.PI*2;r.push(Math.cos(l)*n,t,Math.sin(l)*e),a.push(s.r,s.g,s.b)}}function $b(n,e){const t=new Et,i=new Ye(new $s(1,80),new tn({uniforms:{uGrass:{value:new re(n.ground)},uShade:{value:new re(n.tree)},uSand:{value:new re(n.sand)}},vertexShader:Gb,fragmentShader:Wb}));i.rotation.x=-Math.PI/2,i.scale.set(9.55,9.15,1),i.position.y=.04,i.receiveShadow=!0,t.add(i);const s=72,r=[],a=[],o=new re(n.sand),l=new re(n.tree).lerp(new re("#6a5344"),e===9?.15:.45);e===9&&l.set("#C5D5DE"),e===10&&l.set("#E7B089"),e===8&&l.set("#4E7A55");const c=o.clone().lerp(new re("#ffffff"),e===9?.35:.08);Za(9.45,9.12,.03,s,o,r,a),Za(10.55,10.15,-.12,s,c,r,a),Za(12.4,11.9,-1.65,s,l,r,a);const u=new At,h=new Float32Array(r),d=new Float32Array(a);u.setAttribute("position",new Tt(h,3)),u.setAttribute("color",new Tt(d,3));const f=[],g=s+1;for(let p=0;p<2;p++)for(let x=0;x<s;x++){const S=p*g+x,_=S+g;f.push(S,_,S+1,_,_+1,S+1)}u.setIndex(f),u.computeVertexNormals();const v=new Ye(u,new rs({vertexColors:!0}));v.receiveShadow=!0,v.castShadow=!0,t.add(v);const m=new rs({color:n.tree});for(let p=0;p<10;p++){const x=p/10*Math.PI*2+.3,S=6.4+p%3*.7,_=new Ye(new Ys(.18,.45,5),m);_.position.set(Math.cos(x)*S,.22,Math.sin(x)*S*.94),_.castShadow=!0,t.add(_)}return t}const qb=`
  uniform float uTime;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  float wave(vec2 p) {
    return sin(p.x * 0.34 + uTime * 1.25) * 0.12
      + cos(p.y * 0.27 - uTime * 0.95) * 0.09
      + sin(p.x * 0.62 + p.y * 0.41 + uTime * 1.55) * 0.04;
  }
  void main() {
    vec3 pos = position;
    float w = wave(pos.xz);
    float dx = wave(pos.xz + vec2(0.4, 0.0)) - w;
    float dz = wave(pos.xz + vec2(0.0, 0.4)) - w;
    pos.y += w;
    vec4 world = modelMatrix * vec4(pos, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * vec3(-dx, 0.4, -dz));
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Xb=`
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uFoam;
  uniform float uTime;
  varying vec3 vWorld;
  varying vec3 vNormalW;
  void main() {
    vec2 e = vWorld.xz / vec2(9.55, 9.2);
    float r = length(e);
    float shore = smoothstep(0.84, 0.98, r) * (1.0 - smoothstep(1.04, 1.22, r));
    float pier = smoothstep(2.4, 1.2, abs(vWorld.x))
      * smoothstep(6.4, 7.5, vWorld.z)
      * smoothstep(16.4, 14.0, vWorld.z);
    float lace = 0.5 + 0.5 * sin(vWorld.x * 0.85 + vWorld.z * 0.35 + uTime * 1.6);
    lace = smoothstep(0.15, 0.85, lace);
    float depth = smoothstep(0.05, 1.35, r);
    vec3 col = mix(uShallow, uDeep, depth);
    float foam = clamp(max(shore, pier * 0.85) * (0.72 + 0.28 * lace), 0.0, 1.0);
    col = mix(col, uFoam, foam);
    vec3 viewDir = normalize(cameraPosition - vWorld);
    vec3 lightDir = normalize(vec3(0.35, 0.9, 0.2));
    vec3 halfDir = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normalize(vNormalW), halfDir), 0.0), 6.0);
    col += vec3(1.0, 0.98, 0.92) * spec * 0.18;
    gl_FragColor = vec4(col, 1.0);
  }
`,jb=`
  varying float vH;
  void main() {
    vH = normalize(position).y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Yb=`
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uHor;
  varying float vH;
  void main() {
    float t = smoothstep(-0.15, 0.55, vH);
    vec3 col = mix(uHor, uMid, smoothstep(0.0, 0.42, t));
    col = mix(col, uTop, smoothstep(0.35, 1.0, t));
    gl_FragColor = vec4(col, 1.0);
  }
`;function Kb(){const n=new js(150,150,90,90);n.rotateX(-Math.PI/2);const e=new tn({uniforms:{uTime:{value:0},uShallow:{value:new re("#7EDEF0")},uDeep:{value:new re("#1478B0")},uFoam:{value:new re("#F4FBFF")}},vertexShader:qb,fragmentShader:Xb}),t=new Ye(n,e);return t.position.y=-.42,t.receiveShadow=!0,t.frustumCulled=!1,{mesh:t,mat:e}}function Jb(){const n=new _i(90,32,20),e=new tn({uniforms:{uTop:{value:new re("#5EB0EE")},uMid:{value:new re("#B7E4F8")},uHor:{value:new re("#FFE3B8")}},vertexShader:jb,fragmentShader:Yb,side:Ut,depthWrite:!1}),t=new Ye(n,e);return t.position.y=6,t.frustumCulled=!1,{mesh:t,mat:e}}function Zb(n){const e=new Et,t=new rs({color:16777215,transparent:!0,opacity:.92,depthWrite:!1});for(let i=0;i<7;i++){const s=new Et,r=3+i%3;for(let l=0;l<r;l++){const c=new Ye(new _i(1.1+l%2*.45,12,8),t);c.position.set((l-r/2)*1.15,Math.sin(l)*.25,l%2*.2),c.scale.y=.62,s.add(c)}const a=i/7*Math.PI*2,o=22+i%3*6;s.position.set(Math.cos(a)*o,11+i%4*1.4,Math.sin(a)*o),s.userData.spin=.015+i*.004,s.userData.base=s.position.clone(),e.add(s)}return n.add(e),e}function Qb(n){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),i=t.createRadialGradient(32,32,2,32,32,30);for(const[r,a]of n)i.addColorStop(r,a);t.fillStyle=i,t.fillRect(0,0,64,64);const s=new lx(e);return s.colorSpace=yt,s}class eM{constructor(){F(this,"group",new Et);F(this,"dustTex",Qb([[0,"rgba(255,255,255,0.9)"],[.45,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]));F(this,"dustMat");F(this,"puffs",[]);F(this,"bits",[]);F(this,"arcs",[]);F(this,"trail",[]);F(this,"arrow");F(this,"dustAcc",0);F(this,"tint",new re("#d8ec9a"));this.dustMat=new ed({map:this.dustTex,transparent:!0,depthWrite:!1,color:this.tint});const e=new Ys(.16,.42,4);e.rotateX(Math.PI/2),this.arrow=new Ye(e,new Wt({color:16773544})),this.arrow.visible=!1,this.group.add(this.arrow);const t=new _i(.07,6,6);for(let i=0;i<7;i++){const s=new Ye(t,new Wt({color:16774856,transparent:!0,opacity:.85}));s.visible=!1,this.trail.push(s),this.group.add(s)}}setGroundTint(e){this.tint.set(e)}spawnDust(e,t){var r;let i=(r=this.puffs.find(a=>a.life<=0))==null?void 0:r.sprite;i||(i=new ex(this.dustMat.clone()),this.group.add(i),this.puffs.push({sprite:i,life:0,max:.45}));const s=this.puffs.find(a=>a.sprite===i);s.life=.42,s.max=.42,i.position.set(e+(Math.random()-.5)*.2,.08,t+(Math.random()-.5)*.2),i.scale.setScalar(.18),i.material.color.copy(this.tint),i.material.opacity=.8,i.visible=!0}burst(e,t,i="#ffe38a"){for(let s=0;s<14;s++){const r=new Ye(new ti(.08,.08,.08),new Wt({color:s%2?i:"#ffffff"}));r.position.set(e,.8,t);const a=s/14*Math.PI*2,o=new R(Math.cos(a)*2.2,2.4+Math.random(),Math.sin(a)*2.2);this.group.add(r),this.bits.push({mesh:r,life:.7,vel:o,spin:Math.random()*6})}}heart(e,t){const i=new Ye(new _i(.09,8,6),new Wt({color:"#ff7a9a"}));i.scale.set(1,.85,.7),i.position.set(e,1.3,t),this.group.add(i),this.bits.push({mesh:i,life:.8,vel:new R((Math.random()-.5)*.4,1.6,(Math.random()-.5)*.4),spin:2})}coinArc(e,t,i){e.position.copy(t),this.group.add(e),this.arcs.push({mesh:e,t:0,from:t.clone(),to:i.clone()})}guide(e,t,i,s,r,a){const o=i-e,l=s-t,c=Math.hypot(o,l),u=r&&c>.55;this.arrow.visible=u;for(const f of this.trail)f.visible=u;if(!u)return;const h=Math.atan2(o,l);this.arrow.position.set(e+o/c*.72,.22+Math.sin(a*6)*.05,t+l/c*.72),this.arrow.rotation.set(0,h,0);const d=1+Math.sin(a*5)*.12;this.arrow.scale.setScalar(d);for(let f=0;f<this.trail.length;f++){const g=1.15+f*.48+a*1.4%.48,v=this.trail[f];if(g>c-.2){v.visible=!1;continue}v.visible=!0,v.position.set(e+o/c*g,.1,t+l/c*g);const m=v.material;m.opacity=.9-f*.1}}footstep(e,t,i,s){t&&(this.dustAcc+=e,this.dustAcc>.12&&(this.dustAcc=0,this.spawnDust(i,s)))}update(e){var t,i,s;for(const r of this.puffs){if(r.life<=0)continue;r.life-=e;const a=1-r.life/r.max;r.sprite.position.y+=e*.45,r.sprite.scale.setScalar(.18+a*.45),r.sprite.material.opacity=Math.max(0,.75*(1-a)),r.life<=0&&(r.sprite.visible=!1)}for(const r of this.bits)if(r.life-=e,r.vel.y-=e*6,r.mesh.position.addScaledVector(r.vel,e),r.mesh.rotation.y+=r.spin*e,r.life<=0){r.mesh.removeFromParent();const a=r.mesh;(t=a.geometry)==null||t.dispose(),(s=(i=a.material)==null?void 0:i.dispose)==null||s.call(i)}this.bits=this.bits.filter(r=>r.life>0);for(const r of this.arcs){r.t+=e/.48;const a=Math.min(1,r.t),o=Math.sin(a*Math.PI)*1.35;r.mesh.position.lerpVectors(r.from,r.to,a),r.mesh.position.y+=o,r.mesh.rotation.y+=e*8,a>=1&&r.mesh.removeFromParent()}this.arcs=this.arcs.filter(r=>r.t<1)}}const tM={idle:["idle"],run:["run","walk"],carry_run:["carry_run","walk_carry","run","walk"],carry_idle:["carry_idle","idle"],walk:["walk","run"],walk_carry:["walk_carry","carry_run","walk"],cheer:["cheer","idle"]},nM="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",iM=`
  uniform float u; uniform vec3 color; varying vec2 vUv;
  void main(){
    vec2 p = vUv - 0.5;
    float r = length(p);
    float ring = smoothstep(0.33, 0.38, r) * (1.0 - smoothstep(0.46, 0.5, r));
    float ang = atan(p.y, p.x);
    float a = fract((ang + 1.5708) / 6.28318);
    if (ring < 0.05 || a > u) discard;
    gl_FragColor = vec4(color, 0.95);
  }
`;function sM(n){return n?Cd[n]??"✨":"✨"}function rM(n){if(n.item&&oa[n.item]&&(n.kind==="producer"||n.kind==="processor")&&!Zl(n.kind,n.item,n.visual,Math.max(0,(n.k??1)-1)))return oa[n.item];if(n.kind==="stall")return"glb:stall";if(n.kind==="till")return"glb:till";if(n.kind==="house")return"glb:helper_house";if(n.kind==="hire")return"glb:signpost";if(n.kind==="backpack")return null;if(n.kind==="delivery")return"glb:prop_delivery_boat";if(n.kind==="attraction")return"glb:station_ferris_wheel";if(n.kind==="decor")return["glb:bench","glb:flower_patch","glb:lamp_post","glb:flower_patch","glb:bench"][Math.max(0,(n.k??1)-1)];const e=Zl(n.kind,n.item,n.visual,Math.max(0,(n.k??1)-1));return e?`glb:${e}`:n.item?oa[n.item]??null:null}function $h(n){if(Qa[n])return Qa[n];const e=mf(n);return e?`glb:${e}`:"glb:coin"}function Is(n){const e=new Ye(new wl(.28,.4,4,8),new rs({color:n}));return e.position.y=.5,e.castShadow=!0,e}class Rl{constructor(e,t){F(this,"engine");F(this,"renderer");F(this,"scene",new Qy);F(this,"camera");F(this,"css2d");F(this,"canvas");F(this,"lib",new Vb);F(this,"ocean");F(this,"sky");F(this,"clouds");F(this,"island",new Et);F(this,"juice",new eM);F(this,"hemi");F(this,"sun");F(this,"stations",new Map);F(this,"player",null);F(this,"customers",new Map);F(this,"helpers",new Map);F(this,"mixers",[]);F(this,"pending",new Set);F(this,"props",[]);F(this,"spinners",[]);F(this,"stacks",new Map);F(this,"quality");F(this,"look",new R(.2,.4,3));F(this,"zoomExtra",0);F(this,"sweep",0);F(this,"shakeT",0);F(this,"shakeMag",0);F(this,"cheerT",0);F(this,"fpsWindow",[]);F(this,"loopFn",null);F(this,"raf",0);F(this,"clock",0);F(this,"particles");F(this,"particleKind","leaves");F(this,"save",null);F(this,"def",null);F(this,"coinMaster",null);this.canvas=e,this.quality=t,this.renderer=new Zy({canvas:e,antialias:t!=="low",alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=yt,this.renderer.toneMapping=Su,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=t!=="low",this.renderer.shadowMap.type=Mu,this.camera=new Dt(38,1,.1,180),this.ocean=Kb(),this.sky=Jb(),this.scene.add(this.sky.mesh,this.ocean.mesh,this.island,this.juice.group),this.clouds=Zb(this.scene),this.hemi=new Nx("#fff6e4","#7fbf62",.78),this.sun=new pd("#ffe0b0",1.35),this.sun.position.set(14,20,8),this.sun.castShadow=t!=="low",this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=48;const i=16;this.sun.shadow.camera.left=-i,this.sun.shadow.camera.right=i,this.sun.shadow.camera.top=i,this.sun.shadow.camera.bottom=-i,this.sun.shadow.bias=-8e-4,this.scene.add(this.hemi,this.sun,this.sun.target),this.css2d=new nb,this.css2d.domElement.style.position="fixed",this.css2d.domElement.style.inset="0",this.css2d.domElement.style.pointerEvents="none",this.css2d.domElement.style.zIndex="2",document.body.appendChild(this.css2d.domElement),this.makeParticles(),this.resize(),this.engine={runRenderLoop:s=>{if(this.loopFn=s,this.raf)return;const r=()=>{if(!this.loopFn){this.raf=0;return}this.raf=requestAnimationFrame(r),this.loopFn()};this.raf=requestAnimationFrame(r)},stopRenderLoop:()=>{this.loopFn=null,this.raf&&cancelAnimationFrame(this.raf),this.raf=0}}}static async create(e,t){return new Rl(e,t||"auto")}async preload(e){let t=0;await Promise.all(Hl.map(async i=>{await this.lib.load(i),t++,e==null||e(t/Hl.length)})),this.coinMaster=this.lib.spawn("glb:coin")}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,i=e<t;this.renderer.setPixelRatio(this.pixelRatio()),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.fov=i?42:34,this.camera.updateProjectionMatrix(),this.css2d.setSize(e,t)}setQuality(e){this.quality=e,this.renderer.shadowMap.enabled=e!=="low",this.sun.castShadow=e!=="low",this.resize()}pixelRatio(){const e=window.devicePixelRatio||1;return this.quality==="low"?1:this.quality==="medium"?Math.min(e,1.25):this.quality==="high"?Math.min(e,1.75):Math.min(e,1.5)}fps(){return this.fpsWindow.length?this.fpsWindow.reduce((e,t)=>e+t,0)/this.fpsWindow.length:60}sampleFps(e){return e>0&&e<.5&&(this.fpsWindow.push(1/e),this.fpsWindow.length>90&&this.fpsWindow.shift()),this.fps()}axes(){const e=new R;this.camera.getWorldDirection(e),e.y=0,e.lengthSq()<1e-6&&e.set(0,0,1),e.normalize();const t=new R().crossVectors(new R(0,1,0),e).normalize();return{fx:e.x,fz:e.z,rx:t.x,rz:t.z}}zoom(e){this.zoomExtra=Math.max(-7,Math.min(9,this.zoomExtra+e))}shake(e=.2){this.shakeMag=e,this.shakeT=.28}cheer(){var e;this.cheerT=1.1,(e=this.player)==null||e.play("cheer")}project(e,t,i){const s=new R(e,t,i).project(this.camera);if(s.z>1)return null;const r=this.canvas.clientWidth||window.innerWidth,a=this.canvas.clientHeight||window.innerHeight;return{x:(s.x*.5+.5)*r,y:(-s.y*.5+.5)*a}}makeParticles(){const t=new At,i=new Float32Array(144);for(let s=0;s<48;s++)i[s*3]=(Math.random()-.5)*18,i[s*3+1]=1+Math.random()*6,i[s*3+2]=(Math.random()-.5)*16;t.setAttribute("position",new Tt(i,3)),this.particles=new rd(t,new xl({color:"#fff1c4",size:.12,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0})),this.scene.add(this.particles)}applyBiome(e){const t=new re(e.sky),i=new re(e.water),s=i.clone().lerp(new re("#0d4e78"),.55);this.ocean.mat.uniforms.uShallow.value.copy(i).lerp(new re("#ffffff"),.18),this.ocean.mat.uniforms.uDeep.value.copy(s),this.sky.mat.uniforms.uMid.value.copy(t),this.sky.mat.uniforms.uTop.value.copy(t).lerp(new re("#3a78c4"),.35),this.sky.mat.uniforms.uHor.value.set(e.id===9?"#e7f4ff":e.id===12?"#f3d2ff":"#ffe3b8"),this.renderer.setClearColor(t,1),this.hemi.groundColor.set(e.ground);const r=new re(e.ground);this.juice.setGroundTint("#"+r.clone().lerp(new re("#ffffff"),.35).getHexString());const a=this.particles.material,o=Rd[e.id]??"leaves";this.particleKind=o;const l={leaves:"#7dcc55",spark:"#fff6c8",petals:"#ffb7c8",dust:"#e7d2a4",bees:"#ffd15c",flour:"#fff8ee",steam:"#f4fbff",fireflies:"#d6ff7a",snow:"#ffffff",bubbles:"#d7f6ff",confetti:"#ff8ad4",stars:"#fff1a8"};a.color.set(l[o]??"#ffffff"),a.size=o==="bees"||o==="fireflies"?.16:.11}clearIsland(){for(const e of this.stations.values())e.pill.element.remove();this.stations.clear(),this.props=[],this.spinners=[],this.stacks.clear(),this.customers.clear(),this.helpers.clear(),this.player=null,this.mixers=[],this.island.clear()}async loadIsland(e){this.save=e;const t=gt(e.profile.currentIsland);this.def=t,this.clearIsland(),this.applyBiome(t),this.island.add($b(t,t.id));const i=[];for(const r of t.stations){const a=rM(r);i.push(this.mountStation(r,a))}for(const r of Vl[t.id]??Vl[1])i.push(this.mountProp(r));for(const r of t.goods)i.push(this.lib.load($h(r.id)).then(()=>{}));i.push(this.lib.load("glb:raccoon_hero").then(()=>{this.player=this.makeActor("glb:raccoon_hero","#c5ced6",!0),this.player&&(this.player.root.position.set(e.profile.playerX,0,e.profile.playerZ),this.island.add(this.player.root))}));const s=new Set([...t.customers,"bunny"]);for(const r of s){const a=Ql(r);a&&i.push(this.lib.load(`glb:${a}`).then(()=>{}))}await Promise.all(i),this.look.set(e.profile.playerX-.4,.4,e.profile.playerZ-.2),this.camera.position.set(e.profile.playerX+11,14,e.profile.playerZ+11),this.sweep=1.45,this.sun.target.position.set(0,0,0)}async mountStation(e,t){var g,v,m,p,x;const i=new Et;i.position.set(e.x,0,e.z);const s=this.itemColor(e.item)||((g=this.def)==null?void 0:g.accent)||"#ffb938";let r=null,a=null;t?(await this.lib.load(t),r=this.lib.spawn(t)??Is(s),a=this.lib.spawn(t)??Is(s)):e.kind==="backpack"?(r=new Et,a=new Et):(r=Is(s),a=Is(s)),this.paintHolo(a,s),e.item==="starfruit"&&r.scale.multiplyScalar(2.2);const o=new Et;o.add(r),i.add(o),a.position.y=.02,i.add(a),this.tagMovers(r);const l=(x=(p=(m=(v=this.save)==null?void 0:v.islands)==null?void 0:m[this.def.id-1])==null?void 0:p.stations)==null?void 0:x[e.id],c=!!(l!=null&&l.built)||e.kind==="hire"||e.kind==="till";r.visible=c,a.visible=!c;const u=this.makePad(s);i.add(u);const h=document.createElement("div");h.className="pad-pill",h.innerHTML='<i class="ring"></i><span class="emo"></span><b></b>';const d=new tb(h);d.position.set(0,1.85,0),i.add(d),this.island.add(i);const f=u.getObjectByName("fill").material;this.stations.set(e.id,{id:e.id,def:e,solid:r,holo:a,pad:u,fill:f,pill:d,squash:1,squashWrap:o,base:i})}tagMovers(e){e.traverse(t=>{const i=t.name.toLowerCase();if(i.includes("sail"))this.spinners.push({obj:t,axis:"y",speed:1.4});else if(i.includes("wheel"))this.spinners.push({obj:t,axis:"z",speed:.45});else if(i.includes("lamp")){const r=t.material;r!=null&&r.emissive&&(r.emissive=new re("#ffe38a"),r.emissiveIntensity=.8)}})}paintHolo(e,t){e.traverse(i=>{const s=i;s.isMesh&&(s.material=new ia({color:t,transparent:!0,opacity:.42,roughness:.2,metalness:0,depthWrite:!1,emissive:new re(t),emissiveIntensity:.55}),s.castShadow=!1)})}makePad(e){const t=new Et,i=new Ye(new Xr(1.05,.07,8,40),new Wt({color:16751135}));i.rotation.x=Math.PI/2,i.position.y=.06,i.name="border";const s=new Ye(new $s(.98,28),new Wt({color:e,transparent:!0,opacity:.18,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.04;const r=new Ye(new $s(.72,32),new tn({transparent:!0,depthWrite:!1,uniforms:{u:{value:0},color:{value:new re("#7BD35A")}},vertexShader:nM,fragmentShader:iM}));return r.rotation.x=-Math.PI/2,r.position.y=.07,r.name="fill",t.add(i,s,r),t}async mountProp(e){await this.lib.load(e.asset);const t=this.lib.spawn(e.asset);t&&(t.position.set(e.x,e.y??0,e.z),t.rotation.y=e.rot??0,this.island.add(t),this.props.push({obj:t,bob:!!e.bob,baseY:e.y??0,phase:e.x*.7+e.z}),this.tagMovers(t))}itemColor(e){var i,s;const t=(s=(i=this.def)==null?void 0:i.goods)==null?void 0:s.find(r=>r.id===e);return t==null?void 0:t.color}makeActor(e,t,i=!1){const s=this.lib.spawn(e)??Is(t),r=new Et;r.add(s);const a=this.lib.clips(e),o=a.length?new eb(s):null,l={};if(o){for(const h of a)l[h.name]=o.clipAction(h);this.mixers.push(o)}const c=s.getObjectByName("socket_stack")??r,u={root:r,model:s,mixer:o,actions:l,current:"",anchor:c,play:h=>{const f=(tM[h]??[h]).find(m=>l[m]);if(!f||u.current===f)return;const g=l[f],v=u.current?l[u.current]:null;g.reset().fadeIn(.12).play(),v==null||v.fadeOut(.12),u.current=f}};return u.play("idle"),u}tintHelper(e,t){const i=new re((t==null?void 0:t.color)||"#ffffff"),s=new re((t==null?void 0:t.accent)||"#ffd15c");e.model.traverse(l=>{const c=l;if(!c.isMesh)return;const u=c.material;if(!(u!=null&&u.color)||Array.isArray(c.material))return;const h=u.clone();h.color.lerp(i,.5),c.material=h});const r=(t==null?void 0:t.role)??"general";let a;const o=new rs({color:s});r==="farmer"||(t==null?void 0:t.rarity)==="legendary"?(a=new Ye(new Ys(.18,.26,8),o),a.position.set(0,1.12,0)):r==="cashier"?(a=new Ye(new ti(.34,.26,.08),o),a.position.set(0,.62,.2)):r==="carrier"?(a=new Ye(new ti(.2,.22,.14),o),a.position.set(0,.72,-.18)):(a=new Ye(new Xr(.14,.04,6,12),o),a.rotation.x=Math.PI/2,a.position.set(0,.78,.12)),e.root.add(a)}ensureCustomer(e){if(this.customers.has(e.id))return;const t=`c${e.id}`;if(this.pending.has(t))return;const i=Ql(e.kind),s=i?`glb:${i}`:"glb:customer_bunny";this.pending.add(t),this.lib.load(s).then(()=>{if(this.pending.delete(t),!this.def||this.customers.has(e.id))return;const r=this.makeActor(s,"#f4e6d4");r&&(r.root.position.set(e.x,0,e.z),this.island.add(r.root),this.customers.set(e.id,r))})}ensureHelper(e){if(this.helpers.has(e)||this.pending.has(e))return;const t=vn(e),s=`glb:${pf(e,(t==null?void 0:t.look)??"bear")}`;this.pending.add(e),this.lib.load(s).then(()=>{if(this.pending.delete(e),!this.def||this.helpers.has(e))return;const r=this.makeActor(s,(t==null?void 0:t.color)??"#b5774a");r&&(this.tintHelper(r,t),this.island.add(r.root),this.helpers.set(e,r))})}setStack(e,t,i,s,r){let a=this.stacks.get(t);a||(a=[],this.stacks.set(t,a));const o=Math.max(0,Math.min(6,s));for(let l=a.length;l<o;l++){const c=i?$h(i):"glb:coin",u=(this.lib.has(c)?this.lib.spawn(c):null)??new Ye(new _i(.12,8,6),new rs({color:this.itemColor(i??"")||"#ffb938"}));!this.lib.has(c)&&i&&this.lib.load(c),u.scale.setScalar(i&&Qa[i]?1:.85),e.add(u),a.push(u)}for(let l=0;l<a.length;l++){const c=a[l];c.visible=l<o&&!!i,c.position.set(Math.sin(l+r)*.04,.05+l*.22,0),c.rotation.z=r*.35}}sync(e,t,i,s=[]){var u;this.clock+=t,this.save=e.save;const r=new Set((s??[]).map(h=>h.stationId));if(this.player){this.player.root.position.set(e.px,0,e.pz),this.player.root.rotation.y=e.yaw;const h=e.stackCount>0;this.cheerT>0?this.cheerT-=t:e.moving&&h?this.player.play("carry_run"):e.moving?this.player.play("run"):h?this.player.play("carry_idle"):this.player.play("idle");const d=e.moving?1+Math.sin(this.clock*14)*.035:1;this.player.model.scale.set(1+(1-d)*.6,d,1+(1-d)*.6),this.setStack(this.player.anchor,"player",e.stackItem,e.stackCount,Math.sin(this.clock*8)*(e.moving?1:.2)),this.juice.footstep(t,!!e.moving,e.px,e.pz)}const a=new Set;for(const h of e.customers){a.add(h.id),this.ensureCustomer(h);const d=this.customers.get(h.id);if(!d)continue;const f=d.root.position.x,g=d.root.position.z;d.root.position.set(h.x,Math.abs(Math.sin(this.clock*8+h.id))*.04,h.z);const v=h.x-f,m=h.z-g;v*v+m*m>1e-6&&(d.root.rotation.y=Math.atan2(v,m));const p=v*v+m*m>4e-4;p&&h.item?d.play("walk_carry"):p?d.play("walk"):d.play("idle"),this.setStack(d.anchor,`c${h.id}`,h.item,h.item?1:0,0)}for(const[h,d]of this.customers)a.has(h)||(d.root.visible=!1);const o=new Set;for(const h of e.helpers){o.add(h.id),this.ensureHelper(h.id);const d=this.helpers.get(h.id);if(!d)continue;d.root.visible=!0;const f=h.x-d.root.position.x,g=h.z-d.root.position.z;d.root.position.set(h.x,h.moving?Math.abs(Math.sin(this.clock*10))*.04:0,h.z),h.moving&&f*f+g*g>1e-6&&(d.root.rotation.y=Math.atan2(f,g)),h.moving&&h.carry?d.play("carry_run"):h.moving?d.play("run"):d.play("idle")}for(const[h,d]of this.helpers)d.root.visible=o.has(h);const l=e.island;for(const h of e.def.stations){const d=this.stations.get(h.id),f=l.stations[h.id];if(!d||!f)continue;const g=h.kind==="hire"||h.kind==="till",v=!!f.built||g;d.solid&&(d.solid.visible=v),d.holo&&(d.holo.visible=!v);const m=h.kind==="hire"?{kind:"build",cost:Yi(e.islandId,(((u=l.crew)==null?void 0:u.length)??0)+1)}:Zn(e.save,e.def,h),p=h.kind!=="decor",x=m.kind!=="max"&&(h.kind==="hire"||!v&&p||f.invested>.4||r.has(h.id));d.pad.visible=x;const S=Math.max(0,Math.round(m.cost-(f.invested||0))),_=m.cost>0?Math.min(1,(f.invested||0)/m.cost):0;d.fill.uniforms.u.value=Math.max(.001,_);const I=d.pill.element,E=I.querySelector(".emo"),T=I.querySelector("b"),C=I.querySelector(".ring");E&&(E.textContent=sM(h.item)||(h.kind==="hire"?"🤝":"🏠")),T&&(T.textContent=S?String(S):"✓"),C&&C.style.setProperty("--p",String(Math.round(_*100)));const w=this.project(h.x,1.7,h.z),b=this.canvas.clientWidth||1,P=this.canvas.clientHeight||1,V=!!w&&w.x>28&&w.x<b-28&&w.y>64&&w.y<P-108;d.pill.visible=d.pad.visible&&V;const O=1+Math.sin(this.clock*3+h.x)*(r.has(h.id)?.06:.025);d.pad.scale.setScalar(O),d.squash+=(1-d.squash)*Math.min(1,t*8);const G=d.squash;d.squashWrap.scale.set(2-G,G,2-G),v&&(h.kind==="producer"||h.kind==="processor"||h.kind==="stall")&&(this.setStack(d.base,`st${h.id}`,h.item??null,Math.min(4,f.stock||0),0),(this.stacks.get(`st${h.id}`)??[]).forEach((q,Z)=>{q.position.set((Z-1)*.22,h.kind==="stall"?1.05:.85,.15)}))}for(const h of e.fx??[]){if(h.type==="pop"||h.type==="build"||h.type==="confetti"){const d=[...this.stations.values()].find(f=>Math.hypot(f.def.x-h.x,f.def.z-h.z)<1.2);d&&(d.squash=h.type==="build"?1.35:1.18),(h.type==="build"||h.type==="confetti")&&(this.juice.burst(h.x,h.z,h.type==="build"?"#ffe38a":"#ffffff"),this.shake(h.type==="build"?.16:.08))}if(h.type==="coin"&&this.coinMaster){const d=this.coinMaster.clone(!0);d.scale.setScalar(.55),this.juice.coinArc(d,new R(e.px,.9,e.pz),new R(h.x,.5,h.z))}h.type==="ding"&&this.juice.heart(h.x,h.z)}const c=i&&i.kind!=="turbo"&&i.kind!=="quests";this.juice.guide(e.px,e.pz,(i==null?void 0:i.x)??e.px,(i==null?void 0:i.z)??e.pz,!!c,this.clock),this.follow(e,t)}follow(e,t){const i=this.canvas.clientWidth||1,s=this.canvas.clientHeight||1,r=i<s;this.sweep>0&&(this.sweep=Math.max(0,this.sweep-t));const a=Math.PI/4+Math.sin(this.sweep)*this.sweep*.55,o=(r?19.2:21.4)+this.zoomExtra,l=r?15.6:14.2,c=e.px-.35,u=e.pz-.15,h=new R(c+Math.sin(a)*o*.72,l,u+Math.cos(a)*o*.72),d=1-Math.exp(-t*4.2);if(this.camera.position.lerp(h,this.sweep>0?1:d),this.look.lerp(new R(c,.35,u),d),this.shakeT>0){this.shakeT-=t;const f=this.shakeT/.28;this.look.x+=Math.sin(performance.now()*.05)*this.shakeMag*f,this.look.z+=Math.cos(performance.now()*.04)*this.shakeMag*f}this.camera.lookAt(this.look),this.sky.mesh.position.set(this.look.x,6,this.look.z)}render(e){this.ocean.mat.uniforms.uTime.value=this.clock;for(const t of this.mixers)t.update(e);for(const t of this.spinners)t.axis==="y"?t.obj.rotation.y+=e*t.speed:t.obj.rotation.z+=e*t.speed;for(const t of this.props)t.bob&&(t.obj.position.y=t.baseY+Math.sin(this.clock*1.6+t.phase)*.08);for(const t of this.clouds.children){const i=t.userData.base,s=this.clock*t.userData.spin;t.position.x=i.x+Math.sin(s)*1.4,t.position.z=i.z+Math.cos(s*.8)*1.1}this.driftParticles(e),this.juice.update(e),this.renderer.render(this.scene,this.camera),this.css2d.render(this.scene,this.camera)}driftParticles(e){const t=this.particles.geometry.attributes.position,i=t.array,s=this.particleKind==="steam"||this.particleKind==="bubbles"||this.particleKind==="fireflies";for(let r=0;r<i.length;r+=3)i[r]+=Math.sin(this.clock+r)*e*.15,i[r+2]+=e*.25,i[r+1]+=(s?.35:-.55)*e,(i[r+1]<1.4||i[r+1]>8)&&(i[r]=(Math.random()-.5)*16,i[r+1]=s?1.6:6.2,i[r+2]=(Math.random()-.5)*16);t.needsUpdate=!0}}function aM(){return Ld(Rl),Lp()}aM();
