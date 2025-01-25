var Ge=Object.defineProperty;var we=B=>{throw TypeError(B)};var Ue=(B,e,s)=>e in B?Ge(B,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):B[e]=s;var O=(B,e,s)=>Ue(B,typeof e!="symbol"?e+"":e,s),xe=(B,e,s)=>e.has(B)||we("Cannot "+s);var y=(B,e,s)=>(xe(B,e,"read from private field"),s?s.call(B):e.get(B)),L=(B,e,s)=>e.has(B)?we("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(B):e.set(B,s),q=(B,e,s,t)=>(xe(B,e,"write to private field"),t?t.call(B,s):e.set(B,s),s),ve=(B,e,s)=>(xe(B,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const A=1e-6,Be=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),I=class I extends Float32Array{constructor(...e){switch(e.length){case 16:super(e);break;case 2:super(e[0],e[1],16);break;case 1:const s=e[0];typeof s=="number"?super([s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s]):super(s,0,16);break;default:super(Be);break}}get str(){return I.str(this)}copy(e){return this.set(e),this}identity(){return this.set(Be),this}multiply(e){return I.multiply(this,this,e)}mul(e){return this}transpose(){return I.transpose(this,this)}invert(){return I.invert(this,this)}translate(e){return I.translate(this,this,e)}rotate(e,s){return I.rotate(this,this,e,s)}scale(e){return I.scale(this,this,e)}rotateX(e){return I.rotateX(this,this,e)}rotateY(e){return I.rotateY(this,this,e)}rotateZ(e){return I.rotateZ(this,this,e)}perspectiveNO(e,s,t,i){return I.perspectiveNO(this,e,s,t,i)}perspectiveZO(e,s,t,i){return I.perspectiveZO(this,e,s,t,i)}orthoNO(e,s,t,i,n,r){return I.orthoNO(this,e,s,t,i,n,r)}orthoZO(e,s,t,i,n,r){return I.orthoZO(this,e,s,t,i,n,r)}static create(){return new I}static clone(e){return new I(e)}static copy(e,s){return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],e}static fromValues(...e){return new I(...e)}static set(e,...s){return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],e}static identity(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static transpose(e,s){if(e===s){const t=s[1],i=s[2],n=s[3],r=s[6],c=s[7],a=s[11];e[1]=s[4],e[2]=s[8],e[3]=s[12],e[4]=t,e[6]=s[9],e[7]=s[13],e[8]=i,e[9]=r,e[11]=s[14],e[12]=n,e[13]=c,e[14]=a}else e[0]=s[0],e[1]=s[4],e[2]=s[8],e[3]=s[12],e[4]=s[1],e[5]=s[5],e[6]=s[9],e[7]=s[13],e[8]=s[2],e[9]=s[6],e[10]=s[10],e[11]=s[14],e[12]=s[3],e[13]=s[7],e[14]=s[11],e[15]=s[15];return e}static invert(e,s){const t=s[0],i=s[1],n=s[2],r=s[3],c=s[4],a=s[5],d=s[6],o=s[7],l=s[8],h=s[9],m=s[10],p=s[11],b=s[12],f=s[13],g=s[14],x=s[15],_=t*a-i*c,v=t*d-n*c,u=t*o-r*c,M=i*d-n*a,P=i*o-r*a,G=n*o-r*d,U=l*f-h*b,E=l*g-m*b,w=l*x-p*b,D=h*g-m*f,C=h*x-p*f,T=m*x-p*g;let z=_*T-v*C+u*D+M*w-P*E+G*U;return z?(z=1/z,e[0]=(a*T-d*C+o*D)*z,e[1]=(n*C-i*T-r*D)*z,e[2]=(f*G-g*P+x*M)*z,e[3]=(m*P-h*G-p*M)*z,e[4]=(d*w-c*T-o*E)*z,e[5]=(t*T-n*w+r*E)*z,e[6]=(g*u-b*G-x*v)*z,e[7]=(l*G-m*u+p*v)*z,e[8]=(c*C-a*w+o*U)*z,e[9]=(i*w-t*C-r*U)*z,e[10]=(b*P-f*u+x*_)*z,e[11]=(h*u-l*P-p*_)*z,e[12]=(a*E-c*D-d*U)*z,e[13]=(t*D-i*E+n*U)*z,e[14]=(f*v-b*M-g*_)*z,e[15]=(l*M-h*v+m*_)*z,e):null}static adjoint(e,s){const t=s[0],i=s[1],n=s[2],r=s[3],c=s[4],a=s[5],d=s[6],o=s[7],l=s[8],h=s[9],m=s[10],p=s[11],b=s[12],f=s[13],g=s[14],x=s[15],_=t*a-i*c,v=t*d-n*c,u=t*o-r*c,M=i*d-n*a,P=i*o-r*a,G=n*o-r*d,U=l*f-h*b,E=l*g-m*b,w=l*x-p*b,D=h*g-m*f,C=h*x-p*f,T=m*x-p*g;return e[0]=a*T-d*C+o*D,e[1]=n*C-i*T-r*D,e[2]=f*G-g*P+x*M,e[3]=m*P-h*G-p*M,e[4]=d*w-c*T-o*E,e[5]=t*T-n*w+r*E,e[6]=g*u-b*G-x*v,e[7]=l*G-m*u+p*v,e[8]=c*C-a*w+o*U,e[9]=i*w-t*C-r*U,e[10]=b*P-f*u+x*_,e[11]=h*u-l*P-p*_,e[12]=a*E-c*D-d*U,e[13]=t*D-i*E+n*U,e[14]=f*v-b*M-g*_,e[15]=l*M-h*v+m*_,e}static determinant(e){const s=e[0],t=e[1],i=e[2],n=e[3],r=e[4],c=e[5],a=e[6],d=e[7],o=e[8],l=e[9],h=e[10],m=e[11],p=e[12],b=e[13],f=e[14],g=e[15],x=s*c-t*r,_=s*a-i*r,v=t*a-i*c,u=o*b-l*p,M=o*f-h*p,P=l*f-h*b,G=s*P-t*M+i*u,U=r*P-c*M+a*u,E=o*v-l*_+h*x,w=p*v-b*_+f*x;return d*G-n*U+g*E-m*w}static multiply(e,s,t){const i=s[0],n=s[1],r=s[2],c=s[3],a=s[4],d=s[5],o=s[6],l=s[7],h=s[8],m=s[9],p=s[10],b=s[11],f=s[12],g=s[13],x=s[14],_=s[15];let v=t[0],u=t[1],M=t[2],P=t[3];return e[0]=v*i+u*a+M*h+P*f,e[1]=v*n+u*d+M*m+P*g,e[2]=v*r+u*o+M*p+P*x,e[3]=v*c+u*l+M*b+P*_,v=t[4],u=t[5],M=t[6],P=t[7],e[4]=v*i+u*a+M*h+P*f,e[5]=v*n+u*d+M*m+P*g,e[6]=v*r+u*o+M*p+P*x,e[7]=v*c+u*l+M*b+P*_,v=t[8],u=t[9],M=t[10],P=t[11],e[8]=v*i+u*a+M*h+P*f,e[9]=v*n+u*d+M*m+P*g,e[10]=v*r+u*o+M*p+P*x,e[11]=v*c+u*l+M*b+P*_,v=t[12],u=t[13],M=t[14],P=t[15],e[12]=v*i+u*a+M*h+P*f,e[13]=v*n+u*d+M*m+P*g,e[14]=v*r+u*o+M*p+P*x,e[15]=v*c+u*l+M*b+P*_,e}static mul(e,s,t){return e}static translate(e,s,t){const i=t[0],n=t[1],r=t[2];if(s===e)e[12]=s[0]*i+s[4]*n+s[8]*r+s[12],e[13]=s[1]*i+s[5]*n+s[9]*r+s[13],e[14]=s[2]*i+s[6]*n+s[10]*r+s[14],e[15]=s[3]*i+s[7]*n+s[11]*r+s[15];else{const c=s[0],a=s[1],d=s[2],o=s[3],l=s[4],h=s[5],m=s[6],p=s[7],b=s[8],f=s[9],g=s[10],x=s[11];e[0]=c,e[1]=a,e[2]=d,e[3]=o,e[4]=l,e[5]=h,e[6]=m,e[7]=p,e[8]=b,e[9]=f,e[10]=g,e[11]=x,e[12]=c*i+l*n+b*r+s[12],e[13]=a*i+h*n+f*r+s[13],e[14]=d*i+m*n+g*r+s[14],e[15]=o*i+p*n+x*r+s[15]}return e}static scale(e,s,t){const i=t[0],n=t[1],r=t[2];return e[0]=s[0]*i,e[1]=s[1]*i,e[2]=s[2]*i,e[3]=s[3]*i,e[4]=s[4]*n,e[5]=s[5]*n,e[6]=s[6]*n,e[7]=s[7]*n,e[8]=s[8]*r,e[9]=s[9]*r,e[10]=s[10]*r,e[11]=s[11]*r,e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],e}static rotate(e,s,t,i){let n=i[0],r=i[1],c=i[2],a=Math.sqrt(n*n+r*r+c*c);if(a<A)return null;a=1/a,n*=a,r*=a,c*=a;const d=Math.sin(t),o=Math.cos(t),l=1-o,h=s[0],m=s[1],p=s[2],b=s[3],f=s[4],g=s[5],x=s[6],_=s[7],v=s[8],u=s[9],M=s[10],P=s[11],G=n*n*l+o,U=r*n*l+c*d,E=c*n*l-r*d,w=n*r*l-c*d,D=r*r*l+o,C=c*r*l+n*d,T=n*c*l+r*d,z=r*c*l-n*d,k=c*c*l+o;return e[0]=h*G+f*U+v*E,e[1]=m*G+g*U+u*E,e[2]=p*G+x*U+M*E,e[3]=b*G+_*U+P*E,e[4]=h*w+f*D+v*C,e[5]=m*w+g*D+u*C,e[6]=p*w+x*D+M*C,e[7]=b*w+_*D+P*C,e[8]=h*T+f*z+v*k,e[9]=m*T+g*z+u*k,e[10]=p*T+x*z+M*k,e[11]=b*T+_*z+P*k,s!==e&&(e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15]),e}static rotateX(e,s,t){let i=Math.sin(t),n=Math.cos(t),r=s[4],c=s[5],a=s[6],d=s[7],o=s[8],l=s[9],h=s[10],m=s[11];return s!==e&&(e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15]),e[4]=r*n+o*i,e[5]=c*n+l*i,e[6]=a*n+h*i,e[7]=d*n+m*i,e[8]=o*n-r*i,e[9]=l*n-c*i,e[10]=h*n-a*i,e[11]=m*n-d*i,e}static rotateY(e,s,t){let i=Math.sin(t),n=Math.cos(t),r=s[0],c=s[1],a=s[2],d=s[3],o=s[8],l=s[9],h=s[10],m=s[11];return s!==e&&(e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15]),e[0]=r*n-o*i,e[1]=c*n-l*i,e[2]=a*n-h*i,e[3]=d*n-m*i,e[8]=r*i+o*n,e[9]=c*i+l*n,e[10]=a*i+h*n,e[11]=d*i+m*n,e}static rotateZ(e,s,t){let i=Math.sin(t),n=Math.cos(t),r=s[0],c=s[1],a=s[2],d=s[3],o=s[4],l=s[5],h=s[6],m=s[7];return s!==e&&(e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15]),e[0]=r*n+o*i,e[1]=c*n+l*i,e[2]=a*n+h*i,e[3]=d*n+m*i,e[4]=o*n-r*i,e[5]=l*n-c*i,e[6]=h*n-a*i,e[7]=m*n-d*i,e}static fromTranslation(e,s){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=s[0],e[13]=s[1],e[14]=s[2],e[15]=1,e}static fromScaling(e,s){return e[0]=s[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=s[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static fromRotation(e,s,t){let i=t[0],n=t[1],r=t[2],c=Math.sqrt(i*i+n*n+r*r);if(c<A)return null;c=1/c,i*=c,n*=c,r*=c;const a=Math.sin(s),d=Math.cos(s),o=1-d;return e[0]=i*i*o+d,e[1]=n*i*o+r*a,e[2]=r*i*o-n*a,e[3]=0,e[4]=i*n*o-r*a,e[5]=n*n*o+d,e[6]=r*n*o+i*a,e[7]=0,e[8]=i*r*o+n*a,e[9]=n*r*o-i*a,e[10]=r*r*o+d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static fromXRotation(e,s){let t=Math.sin(s),i=Math.cos(s);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=i,e[6]=t,e[7]=0,e[8]=0,e[9]=-t,e[10]=i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static fromYRotation(e,s){let t=Math.sin(s),i=Math.cos(s);return e[0]=i,e[1]=0,e[2]=-t,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=t,e[9]=0,e[10]=i,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static fromZRotation(e,s){const t=Math.sin(s),i=Math.cos(s);return e[0]=i,e[1]=t,e[2]=0,e[3]=0,e[4]=-t,e[5]=i,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static fromRotationTranslation(e,s,t){const i=s[0],n=s[1],r=s[2],c=s[3],a=i+i,d=n+n,o=r+r,l=i*a,h=i*d,m=i*o,p=n*d,b=n*o,f=r*o,g=c*a,x=c*d,_=c*o;return e[0]=1-(p+f),e[1]=h+_,e[2]=m-x,e[3]=0,e[4]=h-_,e[5]=1-(l+f),e[6]=b+g,e[7]=0,e[8]=m+x,e[9]=b-g,e[10]=1-(l+p),e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}static fromQuat2(e,s){const t=-s[0],i=-s[1],n=-s[2],r=s[3],c=s[4],a=s[5],d=s[6],o=s[7];let l=t*t+i*i+n*n+r*r;return l>0?(V[0]=(c*r+o*t+a*n-d*i)*2/l,V[1]=(a*r+o*i+d*t-c*n)*2/l,V[2]=(d*r+o*n+c*i-a*t)*2/l):(V[0]=(c*r+o*t+a*n-d*i)*2,V[1]=(a*r+o*i+d*t-c*n)*2,V[2]=(d*r+o*n+c*i-a*t)*2),I.fromRotationTranslation(e,s,V),e}static normalFromMat4(e,s){const t=s[0],i=s[1],n=s[2],r=s[3],c=s[4],a=s[5],d=s[6],o=s[7],l=s[8],h=s[9],m=s[10],p=s[11],b=s[12],f=s[13],g=s[14],x=s[15],_=t*a-i*c,v=t*d-n*c,u=t*o-r*c,M=i*d-n*a,P=i*o-r*a,G=n*o-r*d,U=l*f-h*b,E=l*g-m*b,w=l*x-p*b,D=h*g-m*f,C=h*x-p*f,T=m*x-p*g;let z=_*T-v*C+u*D+M*w-P*E+G*U;return z?(z=1/z,e[0]=(a*T-d*C+o*D)*z,e[1]=(d*w-c*T-o*E)*z,e[2]=(c*C-a*w+o*U)*z,e[3]=0,e[4]=(n*C-i*T-r*D)*z,e[5]=(t*T-n*w+r*E)*z,e[6]=(i*w-t*C-r*U)*z,e[7]=0,e[8]=(f*G-g*P+x*M)*z,e[9]=(g*u-b*G-x*v)*z,e[10]=(b*P-f*u+x*_)*z,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e):null}static normalFromMat4Fast(e,s){const t=s[0],i=s[1],n=s[2],r=s[4],c=s[5],a=s[6],d=s[8],o=s[9],l=s[10];return e[0]=c*l-l*o,e[1]=a*d-d*l,e[2]=r*o-o*d,e[3]=0,e[4]=o*n-l*i,e[5]=l*t-d*n,e[6]=d*i-o*t,e[7]=0,e[8]=i*a-n*c,e[9]=n*r-t*a,e[10]=t*c-i*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static getTranslation(e,s){return e[0]=s[12],e[1]=s[13],e[2]=s[14],e}static getScaling(e,s){const t=s[0],i=s[1],n=s[2],r=s[4],c=s[5],a=s[6],d=s[8],o=s[9],l=s[10];return e[0]=Math.sqrt(t*t+i*i+n*n),e[1]=Math.sqrt(r*r+c*c+a*a),e[2]=Math.sqrt(d*d+o*o+l*l),e}static getRotation(e,s){I.getScaling(V,s);const t=1/V[0],i=1/V[1],n=1/V[2],r=s[0]*t,c=s[1]*i,a=s[2]*n,d=s[4]*t,o=s[5]*i,l=s[6]*n,h=s[8]*t,m=s[9]*i,p=s[10]*n,b=r+o+p;let f=0;return b>0?(f=Math.sqrt(b+1)*2,e[3]=.25*f,e[0]=(l-m)/f,e[1]=(h-a)/f,e[2]=(c-d)/f):r>o&&r>p?(f=Math.sqrt(1+r-o-p)*2,e[3]=(l-m)/f,e[0]=.25*f,e[1]=(c+d)/f,e[2]=(h+a)/f):o>p?(f=Math.sqrt(1+o-r-p)*2,e[3]=(h-a)/f,e[0]=(c+d)/f,e[1]=.25*f,e[2]=(l+m)/f):(f=Math.sqrt(1+p-r-o)*2,e[3]=(c-d)/f,e[0]=(h+a)/f,e[1]=(l+m)/f,e[2]=.25*f),e}static decompose(e,s,t,i){s[0]=i[12],s[1]=i[13],s[2]=i[14];const n=i[0],r=i[1],c=i[2],a=i[4],d=i[5],o=i[6],l=i[8],h=i[9],m=i[10];t[0]=Math.sqrt(n*n+r*r+c*c),t[1]=Math.sqrt(a*a+d*d+o*o),t[2]=Math.sqrt(l*l+h*h+m*m);const p=1/t[0],b=1/t[1],f=1/t[2],g=n*p,x=r*b,_=c*f,v=a*p,u=d*b,M=o*f,P=l*p,G=h*b,U=m*f,E=g+u+U;let w=0;return E>0?(w=Math.sqrt(E+1)*2,e[3]=.25*w,e[0]=(M-G)/w,e[1]=(P-_)/w,e[2]=(x-v)/w):g>u&&g>U?(w=Math.sqrt(1+g-u-U)*2,e[3]=(M-G)/w,e[0]=.25*w,e[1]=(x+v)/w,e[2]=(P+_)/w):u>U?(w=Math.sqrt(1+u-g-U)*2,e[3]=(P-_)/w,e[0]=(x+v)/w,e[1]=.25*w,e[2]=(M+G)/w):(w=Math.sqrt(1+U-g-u)*2,e[3]=(x-v)/w,e[0]=(P+_)/w,e[1]=(M+G)/w,e[2]=.25*w),e}static fromRotationTranslationScale(e,s,t,i){const n=s[0],r=s[1],c=s[2],a=s[3],d=n+n,o=r+r,l=c+c,h=n*d,m=n*o,p=n*l,b=r*o,f=r*l,g=c*l,x=a*d,_=a*o,v=a*l,u=i[0],M=i[1],P=i[2];return e[0]=(1-(b+g))*u,e[1]=(m+v)*u,e[2]=(p-_)*u,e[3]=0,e[4]=(m-v)*M,e[5]=(1-(h+g))*M,e[6]=(f+x)*M,e[7]=0,e[8]=(p+_)*P,e[9]=(f-x)*P,e[10]=(1-(h+b))*P,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}static fromRotationTranslationScaleOrigin(e,s,t,i,n){const r=s[0],c=s[1],a=s[2],d=s[3],o=r+r,l=c+c,h=a+a,m=r*o,p=r*l,b=r*h,f=c*l,g=c*h,x=a*h,_=d*o,v=d*l,u=d*h,M=i[0],P=i[1],G=i[2],U=n[0],E=n[1],w=n[2],D=(1-(f+x))*M,C=(p+u)*M,T=(b-v)*M,z=(p-u)*P,k=(1-(m+x))*P,oe=(g+_)*P,de=(b+v)*G,Pe=(g-_)*G,_e=(1-(m+f))*G;return e[0]=D,e[1]=C,e[2]=T,e[3]=0,e[4]=z,e[5]=k,e[6]=oe,e[7]=0,e[8]=de,e[9]=Pe,e[10]=_e,e[11]=0,e[12]=t[0]+U-(D*U+z*E+de*w),e[13]=t[1]+E-(C*U+k*E+Pe*w),e[14]=t[2]+w-(T*U+oe*E+_e*w),e[15]=1,e}static fromQuat(e,s){const t=s[0],i=s[1],n=s[2],r=s[3],c=t+t,a=i+i,d=n+n,o=t*c,l=i*c,h=i*a,m=n*c,p=n*a,b=n*d,f=r*c,g=r*a,x=r*d;return e[0]=1-h-b,e[1]=l+x,e[2]=m-g,e[3]=0,e[4]=l-x,e[5]=1-o-b,e[6]=p+f,e[7]=0,e[8]=m+g,e[9]=p-f,e[10]=1-o-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}static frustumNO(e,s,t,i,n,r,c=1/0){const a=1/(t-s),d=1/(n-i);if(e[0]=r*2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r*2*d,e[6]=0,e[7]=0,e[8]=(t+s)*a,e[9]=(n+i)*d,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,c!=null&&c!==1/0){const o=1/(r-c);e[10]=(c+r)*o,e[14]=2*c*r*o}else e[10]=-1,e[14]=-2*r;return e}static frustum(e,s,t,i,n,r,c=1/0){return e}static frustumZO(e,s,t,i,n,r,c=1/0){const a=1/(t-s),d=1/(n-i);if(e[0]=r*2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r*2*d,e[6]=0,e[7]=0,e[8]=(t+s)*a,e[9]=(n+i)*d,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,c!=null&&c!==1/0){const o=1/(r-c);e[10]=c*o,e[14]=c*r*o}else e[10]=-1,e[14]=-r;return e}static perspectiveNO(e,s,t,i,n=1/0){const r=1/Math.tan(s/2);if(e[0]=r/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,n!=null&&n!==1/0){const c=1/(i-n);e[10]=(n+i)*c,e[14]=2*n*i*c}else e[10]=-1,e[14]=-2*i;return e}static perspective(e,s,t,i,n=1/0){return e}static perspectiveZO(e,s,t,i,n=1/0){const r=1/Math.tan(s/2);if(e[0]=r/t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,n!=null&&n!==1/0){const c=1/(i-n);e[10]=n*c,e[14]=n*i*c}else e[10]=-1,e[14]=-i;return e}static perspectiveFromFieldOfView(e,s,t,i){const n=Math.tan(s.upDegrees*Math.PI/180),r=Math.tan(s.downDegrees*Math.PI/180),c=Math.tan(s.leftDegrees*Math.PI/180),a=Math.tan(s.rightDegrees*Math.PI/180),d=2/(c+a),o=2/(n+r);return e[0]=d,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=-((c-a)*d*.5),e[9]=(n-r)*o*.5,e[10]=i/(t-i),e[11]=-1,e[12]=0,e[13]=0,e[14]=i*t/(t-i),e[15]=0,e}static orthoNO(e,s,t,i,n,r,c){const a=1/(s-t),d=1/(i-n),o=1/(r-c);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*d,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*o,e[11]=0,e[12]=(s+t)*a,e[13]=(n+i)*d,e[14]=(c+r)*o,e[15]=1,e}static ortho(e,s,t,i,n,r,c){return e}static orthoZO(e,s,t,i,n,r,c){const a=1/(s-t),d=1/(i-n),o=1/(r-c);return e[0]=-2*a,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*d,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=o,e[11]=0,e[12]=(s+t)*a,e[13]=(n+i)*d,e[14]=r*o,e[15]=1,e}static lookAt(e,s,t,i){const n=s[0],r=s[1],c=s[2],a=i[0],d=i[1],o=i[2],l=t[0],h=t[1],m=t[2];if(Math.abs(n-l)<A&&Math.abs(r-h)<A&&Math.abs(c-m)<A)return I.identity(e);let p=n-l,b=r-h,f=c-m,g=1/Math.sqrt(p*p+b*b+f*f);p*=g,b*=g,f*=g;let x=d*f-o*b,_=o*p-a*f,v=a*b-d*p;g=Math.sqrt(x*x+_*_+v*v),g?(g=1/g,x*=g,_*=g,v*=g):(x=0,_=0,v=0);let u=b*v-f*_,M=f*x-p*v,P=p*_-b*x;return g=Math.sqrt(u*u+M*M+P*P),g?(g=1/g,u*=g,M*=g,P*=g):(u=0,M=0,P=0),e[0]=x,e[1]=u,e[2]=p,e[3]=0,e[4]=_,e[5]=M,e[6]=b,e[7]=0,e[8]=v,e[9]=P,e[10]=f,e[11]=0,e[12]=-(x*n+_*r+v*c),e[13]=-(u*n+M*r+P*c),e[14]=-(p*n+b*r+f*c),e[15]=1,e}static targetTo(e,s,t,i){const n=s[0],r=s[1],c=s[2],a=i[0],d=i[1],o=i[2];let l=n-t[0],h=r-t[1],m=c-t[2],p=l*l+h*h+m*m;p>0&&(p=1/Math.sqrt(p),l*=p,h*=p,m*=p);let b=d*m-o*h,f=o*l-a*m,g=a*h-d*l;return p=b*b+f*f+g*g,p>0&&(p=1/Math.sqrt(p),b*=p,f*=p,g*=p),e[0]=b,e[1]=f,e[2]=g,e[3]=0,e[4]=h*g-m*f,e[5]=m*b-l*g,e[6]=l*f-h*b,e[7]=0,e[8]=l,e[9]=h,e[10]=m,e[11]=0,e[12]=n,e[13]=r,e[14]=c,e[15]=1,e}static frob(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]+e[4]*e[4]+e[5]*e[5]+e[6]*e[6]+e[7]*e[7]+e[8]*e[8]+e[9]*e[9]+e[10]*e[10]+e[11]*e[11]+e[12]*e[12]+e[13]*e[13]+e[14]*e[14]+e[15]*e[15])}static add(e,s,t){return e[0]=s[0]+t[0],e[1]=s[1]+t[1],e[2]=s[2]+t[2],e[3]=s[3]+t[3],e[4]=s[4]+t[4],e[5]=s[5]+t[5],e[6]=s[6]+t[6],e[7]=s[7]+t[7],e[8]=s[8]+t[8],e[9]=s[9]+t[9],e[10]=s[10]+t[10],e[11]=s[11]+t[11],e[12]=s[12]+t[12],e[13]=s[13]+t[13],e[14]=s[14]+t[14],e[15]=s[15]+t[15],e}static subtract(e,s,t){return e[0]=s[0]-t[0],e[1]=s[1]-t[1],e[2]=s[2]-t[2],e[3]=s[3]-t[3],e[4]=s[4]-t[4],e[5]=s[5]-t[5],e[6]=s[6]-t[6],e[7]=s[7]-t[7],e[8]=s[8]-t[8],e[9]=s[9]-t[9],e[10]=s[10]-t[10],e[11]=s[11]-t[11],e[12]=s[12]-t[12],e[13]=s[13]-t[13],e[14]=s[14]-t[14],e[15]=s[15]-t[15],e}static sub(e,s,t){return e}static multiplyScalar(e,s,t){return e[0]=s[0]*t,e[1]=s[1]*t,e[2]=s[2]*t,e[3]=s[3]*t,e[4]=s[4]*t,e[5]=s[5]*t,e[6]=s[6]*t,e[7]=s[7]*t,e[8]=s[8]*t,e[9]=s[9]*t,e[10]=s[10]*t,e[11]=s[11]*t,e[12]=s[12]*t,e[13]=s[13]*t,e[14]=s[14]*t,e[15]=s[15]*t,e}static multiplyScalarAndAdd(e,s,t,i){return e[0]=s[0]+t[0]*i,e[1]=s[1]+t[1]*i,e[2]=s[2]+t[2]*i,e[3]=s[3]+t[3]*i,e[4]=s[4]+t[4]*i,e[5]=s[5]+t[5]*i,e[6]=s[6]+t[6]*i,e[7]=s[7]+t[7]*i,e[8]=s[8]+t[8]*i,e[9]=s[9]+t[9]*i,e[10]=s[10]+t[10]*i,e[11]=s[11]+t[11]*i,e[12]=s[12]+t[12]*i,e[13]=s[13]+t[13]*i,e[14]=s[14]+t[14]*i,e[15]=s[15]+t[15]*i,e}static exactEquals(e,s){return e[0]===s[0]&&e[1]===s[1]&&e[2]===s[2]&&e[3]===s[3]&&e[4]===s[4]&&e[5]===s[5]&&e[6]===s[6]&&e[7]===s[7]&&e[8]===s[8]&&e[9]===s[9]&&e[10]===s[10]&&e[11]===s[11]&&e[12]===s[12]&&e[13]===s[13]&&e[14]===s[14]&&e[15]===s[15]}static equals(e,s){const t=e[0],i=e[1],n=e[2],r=e[3],c=e[4],a=e[5],d=e[6],o=e[7],l=e[8],h=e[9],m=e[10],p=e[11],b=e[12],f=e[13],g=e[14],x=e[15],_=s[0],v=s[1],u=s[2],M=s[3],P=s[4],G=s[5],U=s[6],E=s[7],w=s[8],D=s[9],C=s[10],T=s[11],z=s[12],k=s[13],oe=s[14],de=s[15];return Math.abs(t-_)<=A*Math.max(1,Math.abs(t),Math.abs(_))&&Math.abs(i-v)<=A*Math.max(1,Math.abs(i),Math.abs(v))&&Math.abs(n-u)<=A*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(r-M)<=A*Math.max(1,Math.abs(r),Math.abs(M))&&Math.abs(c-P)<=A*Math.max(1,Math.abs(c),Math.abs(P))&&Math.abs(a-G)<=A*Math.max(1,Math.abs(a),Math.abs(G))&&Math.abs(d-U)<=A*Math.max(1,Math.abs(d),Math.abs(U))&&Math.abs(o-E)<=A*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(l-w)<=A*Math.max(1,Math.abs(l),Math.abs(w))&&Math.abs(h-D)<=A*Math.max(1,Math.abs(h),Math.abs(D))&&Math.abs(m-C)<=A*Math.max(1,Math.abs(m),Math.abs(C))&&Math.abs(p-T)<=A*Math.max(1,Math.abs(p),Math.abs(T))&&Math.abs(b-z)<=A*Math.max(1,Math.abs(b),Math.abs(z))&&Math.abs(f-k)<=A*Math.max(1,Math.abs(f),Math.abs(k))&&Math.abs(g-oe)<=A*Math.max(1,Math.abs(g),Math.abs(oe))&&Math.abs(x-de)<=A*Math.max(1,Math.abs(x),Math.abs(de))}static str(e){return`Mat4(${e.join(", ")})`}};O(I,"BYTE_LENGTH",16*Float32Array.BYTES_PER_ELEMENT);let R=I;const V=new Float32Array(3);R.prototype.mul=R.prototype.multiply;R.sub=R.subtract;R.mul=R.multiply;R.frustum=R.frustumNO;R.perspective=R.perspectiveNO;R.ortho=R.orthoNO;const F=class F extends Float32Array{constructor(...e){switch(e.length){case 3:super(e);break;case 2:super(e[0],e[1],3);break;case 1:{const s=e[0];typeof s=="number"?super([s,s,s]):super(s,0,3);break}default:super(3);break}}get x(){return this[0]}set x(e){this[0]=e}get y(){return this[1]}set y(e){this[1]=e}get z(){return this[2]}set z(e){this[2]=e}get r(){return this[0]}set r(e){this[0]=e}get g(){return this[1]}set g(e){this[1]=e}get b(){return this[2]}set b(e){this[2]=e}get magnitude(){const e=this[0],s=this[1],t=this[2];return Math.sqrt(e*e+s*s+t*t)}get mag(){return this.magnitude}get squaredMagnitude(){const e=this[0],s=this[1],t=this[2];return e*e+s*s+t*t}get sqrMag(){return this.squaredMagnitude}get str(){return F.str(this)}copy(e){return this.set(e),this}add(e){return this[0]+=e[0],this[1]+=e[1],this[2]+=e[2],this}subtract(e){return this[0]-=e[0],this[1]-=e[1],this[2]-=e[2],this}sub(e){return this}multiply(e){return this[0]*=e[0],this[1]*=e[1],this[2]*=e[2],this}mul(e){return this}divide(e){return this[0]/=e[0],this[1]/=e[1],this[2]/=e[2],this}div(e){return this}scale(e){return this[0]*=e,this[1]*=e,this[2]*=e,this}scaleAndAdd(e,s){return this[0]+=e[0]*s,this[1]+=e[1]*s,this[2]+=e[2]*s,this}distance(e){return F.distance(this,e)}dist(e){return 0}squaredDistance(e){return F.squaredDistance(this,e)}sqrDist(e){return 0}negate(){return this[0]*=-1,this[1]*=-1,this[2]*=-1,this}invert(){return this[0]=1/this[0],this[1]=1/this[1],this[2]=1/this[2],this}abs(){return this[0]=Math.abs(this[0]),this[1]=Math.abs(this[1]),this[2]=Math.abs(this[2]),this}dot(e){return this[0]*e[0]+this[1]*e[1]+this[2]*e[2]}normalize(){return F.normalize(this,this)}static create(){return new F}static clone(e){return new F(e)}static magnitude(e){let s=e[0],t=e[1],i=e[2];return Math.sqrt(s*s+t*t+i*i)}static mag(e){return 0}static length(e){return 0}static len(e){return 0}static fromValues(e,s,t){return new F(e,s,t)}static copy(e,s){return e[0]=s[0],e[1]=s[1],e[2]=s[2],e}static set(e,s,t,i){return e[0]=s,e[1]=t,e[2]=i,e}static add(e,s,t){return e[0]=s[0]+t[0],e[1]=s[1]+t[1],e[2]=s[2]+t[2],e}static subtract(e,s,t){return e[0]=s[0]-t[0],e[1]=s[1]-t[1],e[2]=s[2]-t[2],e}static sub(e,s,t){return[0,0,0]}static multiply(e,s,t){return e[0]=s[0]*t[0],e[1]=s[1]*t[1],e[2]=s[2]*t[2],e}static mul(e,s,t){return[0,0,0]}static divide(e,s,t){return e[0]=s[0]/t[0],e[1]=s[1]/t[1],e[2]=s[2]/t[2],e}static div(e,s,t){return[0,0,0]}static ceil(e,s){return e[0]=Math.ceil(s[0]),e[1]=Math.ceil(s[1]),e[2]=Math.ceil(s[2]),e}static floor(e,s){return e[0]=Math.floor(s[0]),e[1]=Math.floor(s[1]),e[2]=Math.floor(s[2]),e}static min(e,s,t){return e[0]=Math.min(s[0],t[0]),e[1]=Math.min(s[1],t[1]),e[2]=Math.min(s[2],t[2]),e}static max(e,s,t){return e[0]=Math.max(s[0],t[0]),e[1]=Math.max(s[1],t[1]),e[2]=Math.max(s[2],t[2]),e}static scale(e,s,t){return e[0]=s[0]*t,e[1]=s[1]*t,e[2]=s[2]*t,e}static scaleAndAdd(e,s,t,i){return e[0]=s[0]+t[0]*i,e[1]=s[1]+t[1]*i,e[2]=s[2]+t[2]*i,e}static distance(e,s){const t=s[0]-e[0],i=s[1]-e[1],n=s[2]-e[2];return Math.sqrt(t*t+i*i+n*n)}static dist(e,s){return 0}static squaredDistance(e,s){const t=s[0]-e[0],i=s[1]-e[1],n=s[2]-e[2];return t*t+i*i+n*n}static sqrDist(e,s){return 0}static squaredLength(e){const s=e[0],t=e[1],i=e[2];return s*s+t*t+i*i}static sqrLen(e,s){return 0}static negate(e,s){return e[0]=-s[0],e[1]=-s[1],e[2]=-s[2],e}static inverse(e,s){return e[0]=1/s[0],e[1]=1/s[1],e[2]=1/s[2],e}static abs(e,s){return e[0]=Math.abs(s[0]),e[1]=Math.abs(s[1]),e[2]=Math.abs(s[2]),e}static normalize(e,s){const t=s[0],i=s[1],n=s[2];let r=t*t+i*i+n*n;return r>0&&(r=1/Math.sqrt(r)),e[0]=s[0]*r,e[1]=s[1]*r,e[2]=s[2]*r,e}static dot(e,s){return e[0]*s[0]+e[1]*s[1]+e[2]*s[2]}static cross(e,s,t){const i=s[0],n=s[1],r=s[2],c=t[0],a=t[1],d=t[2];return e[0]=n*d-r*a,e[1]=r*c-i*d,e[2]=i*a-n*c,e}static lerp(e,s,t,i){const n=s[0],r=s[1],c=s[2];return e[0]=n+i*(t[0]-n),e[1]=r+i*(t[1]-r),e[2]=c+i*(t[2]-c),e}static slerp(e,s,t,i){const n=Math.acos(Math.min(Math.max(F.dot(s,t),-1),1)),r=Math.sin(n),c=Math.sin((1-i)*n)/r,a=Math.sin(i*n)/r;return e[0]=c*s[0]+a*t[0],e[1]=c*s[1]+a*t[1],e[2]=c*s[2]+a*t[2],e}static hermite(e,s,t,i,n,r){const c=r*r,a=c*(2*r-3)+1,d=c*(r-2)+r,o=c*(r-1),l=c*(3-2*r);return e[0]=s[0]*a+t[0]*d+i[0]*o+n[0]*l,e[1]=s[1]*a+t[1]*d+i[1]*o+n[1]*l,e[2]=s[2]*a+t[2]*d+i[2]*o+n[2]*l,e}static bezier(e,s,t,i,n,r){const c=1-r,a=c*c,d=r*r,o=a*c,l=3*r*a,h=3*d*c,m=d*r;return e[0]=s[0]*o+t[0]*l+i[0]*h+n[0]*m,e[1]=s[1]*o+t[1]*l+i[1]*h+n[1]*m,e[2]=s[2]*o+t[2]*l+i[2]*h+n[2]*m,e}static transformMat4(e,s,t){const i=s[0],n=s[1],r=s[2],c=t[3]*i+t[7]*n+t[11]*r+t[15]||1;return e[0]=(t[0]*i+t[4]*n+t[8]*r+t[12])/c,e[1]=(t[1]*i+t[5]*n+t[9]*r+t[13])/c,e[2]=(t[2]*i+t[6]*n+t[10]*r+t[14])/c,e}static transformMat3(e,s,t){let i=s[0],n=s[1],r=s[2];return e[0]=i*t[0]+n*t[3]+r*t[6],e[1]=i*t[1]+n*t[4]+r*t[7],e[2]=i*t[2]+n*t[5]+r*t[8],e}static transformQuat(e,s,t){const i=t[0],n=t[1],r=t[2],c=t[3]*2,a=s[0],d=s[1],o=s[2],l=n*o-r*d,h=r*a-i*o,m=i*d-n*a,p=(n*m-r*h)*2,b=(r*l-i*m)*2,f=(i*h-n*l)*2;return e[0]=a+l*c+p,e[1]=d+h*c+b,e[2]=o+m*c+f,e}static rotateX(e,s,t,i){const n=t[1],r=t[2],c=s[1]-n,a=s[2]-r;return e[0]=s[0],e[1]=c*Math.cos(i)-a*Math.sin(i)+n,e[2]=c*Math.sin(i)+a*Math.cos(i)+r,e}static rotateY(e,s,t,i){const n=t[0],r=t[2],c=s[0]-n,a=s[2]-r;return e[0]=a*Math.sin(i)+c*Math.cos(i)+n,e[1]=s[1],e[2]=a*Math.cos(i)-c*Math.sin(i)+r,e}static rotateZ(e,s,t,i){const n=t[0],r=t[1],c=s[0]-n,a=s[1]-r;return e[0]=c*Math.cos(i)-a*Math.sin(i)+n,e[1]=c*Math.sin(i)+a*Math.cos(i)+r,e[2]=t[2],e}static angle(e,s){const t=e[0],i=e[1],n=e[2],r=s[0],c=s[1],a=s[2],d=Math.sqrt((t*t+i*i+n*n)*(r*r+c*c+a*a)),o=d&&F.dot(e,s)/d;return Math.acos(Math.min(Math.max(o,-1),1))}static zero(e){return e[0]=0,e[1]=0,e[2]=0,e}static str(e){return`Vec3(${e.join(", ")})`}static exactEquals(e,s){return e[0]===s[0]&&e[1]===s[1]&&e[2]===s[2]}static equals(e,s){const t=e[0],i=e[1],n=e[2],r=s[0],c=s[1],a=s[2];return Math.abs(t-r)<=A*Math.max(1,Math.abs(t),Math.abs(r))&&Math.abs(i-c)<=A*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(n-a)<=A*Math.max(1,Math.abs(n),Math.abs(a))}};O(F,"BYTE_LENGTH",3*Float32Array.BYTES_PER_ELEMENT);let S=F;S.prototype.sub=S.prototype.subtract;S.prototype.mul=S.prototype.multiply;S.prototype.div=S.prototype.divide;S.prototype.dist=S.prototype.distance;S.prototype.sqrDist=S.prototype.squaredDistance;S.sub=S.subtract;S.mul=S.multiply;S.div=S.divide;S.dist=S.distance;S.sqrDist=S.squaredDistance;S.sqrLen=S.squaredLength;S.mag=S.magnitude;S.length=S.magnitude;S.len=S.magnitude;class Ee{constructor(e,s){O(this,"p");O(this,"target");O(this,"up");O(this,"aspect");O(this,"fov");O(this,"near");O(this,"far");O(this,"canvas");O(this,"lastMouse");O(this,"clicked");this.p=S.fromValues(0,-10,0),this.target=S.fromValues(0,10,0),this.up=S.fromValues(0,0,-1),this.aspect=s,this.fov=Math.PI/5,this.near=.1,this.far=100,this.canvas=e,this.lastMouse={x:0,y:0},this.clicked=!1,this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousedown",e=>{this.clicked=!0,this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY}),window.addEventListener("mouseup",()=>{this.clicked=!1}),this.canvas.addEventListener("mousemove",e=>{if(this.clicked){const s=(e.clientX-this.lastMouse.x)*.01,t=(e.clientY-this.lastMouse.y)*.01,i=this.target[0]+s,n=this.target[2]-t,r=S.sub(S.create(),S.fromValues(i,this.target[1],n),this.p);S.normalize(r,r);const c=S.fromValues(0,1,0),a=Math.acos(S.dot(r,c)),d=Math.PI/4;a<d&&(this.target[0]=i,this.target[2]=n),this.lastMouse.x=e.clientX,this.lastMouse.y=e.clientY}})}getViewProjectionMatrix(){const e=R.lookAt(R.create(),this.p,this.target,this.up),s=R.perspective(R.create(),this.fov,this.aspect,this.near,this.far);return new R(R.multiply(R.create(),s,e))}getInverseViewProjectionMatrix(){const e=this.getViewProjectionMatrix();return new R(R.invert(R.create(),e))}}const Oe=`@binding(0) @group(0) var<uniform> uniforms : Uniforms;
struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    inverseViewProjectionMatrix: mat4x4<f32>,  
    cameraP: vec3<f32>,
    cameraTarget: vec3<f32>,
    lightP: vec3<f32>,
};

struct VertexInput {
    @location(0) pos: vec3f,
    @location(1) normal: vec3f,
    @location(2) boid_p: vec3f,
    @location(3) boid_v: vec3f,
};

struct VertexOutput {
    @builtin(position) p: vec4f,
    @location(0) worldPos: vec3f,
    @location(1) normal: vec3f,
    @location(2) clipPos: vec4f,  
};

@vertex
fn vs(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
        
    // If this is a sky vertex
    if input.normal.x == 0.0 && input.normal.y == 0.0 && input.normal.z == 0.0 {
        output.p = vec4f(input.pos.xy, 0.9999, 1.0);
        output.clipPos = output.p;
        output.worldPos = vec3f(0.0);
        output.normal = vec3f(0.0);
    } else {
        let boid_dir = normalize(input.boid_v);
        let up = vec3f(0.0, 1.0, 0.0);
        let right = normalize(cross(boid_dir, up));
        let new_up = cross(right, boid_dir);
        let rotMat = mat3x3f(right, new_up, boid_dir);
        output.worldPos = rotMat * input.pos + input.boid_p;
        output.normal = normalize(rotMat * input.normal);
        output.p = uniforms.viewProjectionMatrix * vec4f(output.worldPos, 1.0);
        output.clipPos = output.p;
    }
    return output;
}

@fragment
fn fs(input: VertexOutput) -> @location(0) vec4f {
    let sunDir = normalize(vec3f(0.5, 0.1, 0.0));
    let sunColor = vec3f(1.0, 0.4, 0.2);
    let glowColor = vec3f(0.0, 0.0, 0.2);
    let skyTop = vec3f(0.0, 0.0, 0.05);
    let skyHorizon = vec3f(0.8, 0.2, 0.3);

    if length(input.normal) < 0.01 {
        let clip = vec4f(input.clipPos.xy / input.clipPos.w, 1.0, 1.0);
        let worldSpace = uniforms.inverseViewProjectionMatrix * clip;
        let worldDir = normalize(worldSpace.xyz / worldSpace.w - uniforms.cameraP);

        let up = vec3f(0.0, 1.0, 0.0);
        let t = clamp((dot(worldDir, up) + 1.0) * 0.5, 0.0, 1.0);

        let skyColor = mix(skyHorizon, skyTop, pow(t, 0.25));

        let sunDot = dot(worldDir, sunDir);
        let sun = pow(max(0.0, sunDot), 2048.0);  // Sharp sun disk
        let sunGlow = pow(max(0.0, sunDot), 16.0); // Wider, softer glow

        return vec4f(skyColor + sun * sunColor + sunGlow * glowColor * 0.2, 1.0);
    } else {
        let ambientColor = vec3f(0.2, 0.2, 0.3);

        let ambient = ambientColor * 0.5;
        let NdotL = dot(normalize(input.normal), sunDir);
        let diff = smoothstep(-0.5, 1.0, NdotL);
        let diffuse = sunColor * diff * 0.7;

        let viewDir = normalize(uniforms.cameraP - input.worldPos);
        var rim = 1.0 - max(dot(viewDir, input.normal), 0.0);
        rim = pow(rim, 3.0) * 0.3;

        return vec4f(ambient + diffuse + rim, 1.0);
    }
}`,Ce=`struct Boid { p: vec3f, v: vec3f }
struct Cell { start: u32, count: u32 }
struct ModelParams {
    boids: u32, 
    range: f32, 
    coh: f32, 
    align: f32, 
    sep: f32, 
    sepRange: f32,
    boundsXMin: f32, boundsXMax: f32, boundsYMin: f32, boundsYMax: f32, boundsZMin: f32, boundsZMax: f32, 
    dt: f32
}
struct GridParams { dims: vec3f, size: f32 }

// Cell indices computation
@group(0) @binding(0) var<storage, read> idx_boids_in: array<Boid>;
@group(0) @binding(1) var<storage, read_write> idx_cells_out: array<u32>;
@group(0) @binding(2) var<storage, read_write> idx_indices: array<u32>;
@group(0) @binding(3) var<uniform> idx_grid: GridParams;

@compute @workgroup_size(64)
fn compute_cell_indices(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&idx_boids_in) { return; }
    let boid = idx_boids_in[id.x];
    idx_cells_out[id.x] = get_cell_index(boid.p, idx_grid);
    idx_indices[id.x] = id.x;
}

// Sorting
@group(0) @binding(0) var<storage, read> sort_cells_in: array<u32>;
@group(0) @binding(1) var<storage, read_write> sort_counts: array<atomic<u32>>;
@group(0) @binding(2) var<storage, read_write> sort_offsets: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read_write> sort_indices: array<u32>;
@group(0) @binding(4) var<uniform> sort_grid: GridParams;

@compute @workgroup_size(64)
fn count_cells(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&sort_cells_in) { return; }
    atomicAdd(&sort_counts[sort_cells_in[id.x]], 1u);
}

@compute @workgroup_size(64)
fn compute_offsets(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&sort_counts) { return; }
    var offset = 0u;
    for (var i = 0u; i < id.x; i++) {
        offset += atomicLoad(&sort_counts[i]);
    }
    atomicStore(&sort_offsets[id.x], offset); 
}

@compute @workgroup_size(64)
fn place_indices(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= arrayLength(&sort_cells_in) { return; }
    let cell_idx = sort_cells_in[id.x];
    let pos = atomicAdd(&sort_offsets[cell_idx], 1u);
    sort_indices[pos] = id.x;
}

// Grid building
@group(0) @binding(0) var<storage, read> grid_boid_cells: array<u32>;
@group(0) @binding(1) var<storage, read> grid_sorted_boids: array<u32>;
@group(0) @binding(2) var<storage, read_write> grid_out: array<Cell>;

@compute @workgroup_size(64)
fn build_grid(@builtin(global_invocation_id) id: vec3<u32>) {
    // if id.x >= arrayLength(&grid_sorted_boids) { return; }
    // let i = id.x;
    // let cell_idx = grid_boid_cells[grid_sorted_boids[i]];

    // if i == 0u || grid_boid_cells[grid_sorted_boids[i - 1u]] != cell_idx {
    //     grid_out[cell_idx].start = i;
    // }
    // if i == arrayLength(&grid_sorted_boids) - 1u || grid_boid_cells[grid_sorted_boids[i + 1u]] != cell_idx {
    //     grid_out[cell_idx].count = i - grid_out[cell_idx].start + 1u;
    // }

    // Safe version

    // Basic bounds check
    if id.x >= arrayLength(&grid_sorted_boids) { return; }
    let i = id.x;
    
    // Validate indices
    let sorted_idx = grid_sorted_boids[i];
    if sorted_idx >= arrayLength(&grid_boid_cells) { return; }

    let cell_idx = grid_boid_cells[sorted_idx];
    // Validate cell index against grid dimensions
    let total_cells = arrayLength(&grid_out);
    if cell_idx >= total_cells { return; }

    // Safe previous cell check
    let prev_cell = select(
        grid_boid_cells[grid_sorted_boids[i - 1u]], cell_idx,  // Default to current if i == 0
        i == 0u
    );

    // Safe next cell check
    let is_last = i == arrayLength(&grid_sorted_boids) - 1u;
    let next_cell = select(
        grid_boid_cells[grid_sorted_boids[i + 1u]], cell_idx,  // Default to current if last
        is_last
    );

    // Start of cell
    if i == 0u || prev_cell != cell_idx {
        grid_out[cell_idx].start = min(i, arrayLength(&grid_sorted_boids) - 1u);
    }

    // End of cell
    if is_last || next_cell != cell_idx {
        let count = i - grid_out[cell_idx].start + 1u;
        grid_out[cell_idx].count = min(count, arrayLength(&grid_sorted_boids));
    }
}

// Main simulation
@group(0) @binding(0) var<storage, read> sim_boids_in: array<Boid>;
@group(0) @binding(1) var<storage, read_write> sim_boids_out: array<Boid>;
@group(0) @binding(2) var<uniform> sim_params: ModelParams;
@group(0) @binding(3) var<storage, read> sim_cells: array<Cell>;
@group(0) @binding(4) var<storage, read> sim_indices: array<u32>;
@group(0) @binding(5) var<uniform> sim_grid: GridParams;

@compute @workgroup_size(64)
fn sim_boids(@builtin(global_invocation_id) id: vec3<u32>) {
    if id.x >= sim_params.boids { return; }
    var boid = sim_boids_in[id.x];
    let cell = get_cell_index(boid.p, sim_grid);

    var new_v = vec3f(0);
    var align = vec3f(0);
    var coh_pos = vec3f(0);
    var coh_w = 0.0;
    var sep = vec3f(0);
    var sep_w = 0.0;
    var n_count = 0u;

    for (var ox = -1; ox <= 1; ox++) {
        for (var oy = -1; oy <= 1; oy++) {
            for (var oz = -1; oz <= 1; oz++) {
                let n_cell = get_neighbor_cell(cell, vec3<i32>(ox, oy, oz), sim_grid);
                if n_cell >= arrayLength(&sim_cells) { continue; }

                let c = sim_cells[n_cell];
                for (var i = c.start; i < c.start + c.count; i++) {
                    let other_idx = sim_indices[i];
                    if other_idx == id.x { continue; }
                    let other = sim_boids_in[other_idx];
                    n_count++;

                    let dist = distance(boid.p, other.p);
                    if dist < 0.0001 || dist > sim_params.range { continue; }
                    let w = 1.0 - (dist / sim_params.range);

                    align += other.v * w;
                    coh_pos += other.p * w;
                    coh_w += w;

                    if dist < sim_params.sepRange {
                        let sw = 1.0 - (dist / sim_params.sepRange);
                        sep += safe_normalize(boid.p - other.p) * sw;
                        sep_w += sw;
                    }
                }
            }
        }
    }

    if n_count > 0u {
        new_v += safe_normalize(align) * sim_params.align;
    }
    if coh_w > 0.0 {
        coh_pos = coh_pos / coh_w;
        new_v += safe_normalize(coh_pos - boid.p) * sim_params.coh;
    }
    if sep_w > 0.0 {
        new_v += (sep / sep_w) * sim_params.sep;
    }

    // Boundary forces
    let margin = 1.0;
    new_v += vec3f(
        boundaryForce(boid.p.x, sim_params.boundsXMin, sim_params.boundsXMax, margin),
        boundaryForce(boid.p.y, sim_params.boundsYMin, sim_params.boundsYMax, margin),
        boundaryForce(boid.p.z, sim_params.boundsZMin, sim_params.boundsZMax, margin)
    );

    // Apply new velocity
    boid.v += new_v * sim_params.dt;

    // Speed limits
    let speed = length(boid.v);
    if speed < 0.5 {
        boid.v = safe_normalize(boid.v) * 0.5;
    } else if speed > 3.0 {
        boid.v = safe_normalize(boid.v) * 3.0;
    }

    // Move boid
    boid.p += boid.v * sim_params.dt;

    // Set new boid to next buffer
    sim_boids_out[id.x] = boid;
}

fn boundaryForce(pos: f32, minP: f32, maxP: f32, margin: f32) -> f32 {
    return max(0.0, (minP + margin - pos) / margin) * 10.0 + max(0.0, (pos - (maxP - margin)) / margin) * -10.0;
}

fn safe_normalize(v: vec3f) -> vec3f {
    let len = length(v);
    return select(vec3f(0.0), v / len, len > 0.0001);
}

fn get_cell_index(p: vec3f, grid: GridParams) -> u32 {
    let cell_pos = clamp(floor(p / grid.size), vec3(0.0), grid.dims - vec3(1.0));
    let index = u32(cell_pos.x + (cell_pos.y * grid.dims.x) + (cell_pos.z * grid.dims.x * grid.dims.y));
    return min(index, u32(grid.dims.x * grid.dims.y * grid.dims.z) - 1u);
}

fn get_neighbor_cell(cell: u32, offset: vec3<i32>, grid: GridParams) -> u32 {
    let z = cell / (u32(grid.dims.x) * u32(grid.dims.y));
    let y = (cell % (u32(grid.dims.x) * u32(grid.dims.y))) / u32(grid.dims.x);
    let x = cell % u32(grid.dims.x);

    let nx = i32(x) + offset.x;
    let ny = i32(y) + offset.y;
    let nz = i32(z) + offset.z;

    if nx < 0 || nx >= i32(grid.dims.x) || ny < 0 || ny >= i32(grid.dims.y) || nz < 0 || nz >= i32(grid.dims.z) { return cell; }

    return u32(nx + ny * i32(grid.dims.x) + nz * i32(grid.dims.x) * i32(grid.dims.y));
}`;var le,$,N,re,he,K,fe,ce,J,ee,j,ae,se,W,te,H,Q,ie,X,Z,Y,me,ne,pe,ge,be,Me;class Te{constructor(e,s,t,i){L(this,be);O(this,"canvas");O(this,"context");O(this,"adapter");O(this,"device");O(this,"textureFormat");O(this,"camera");O(this,"light");L(this,le);O(this,"currentFrame");O(this,"simParams");O(this,"boidBounds");O(this,"gridParams");L(this,$);L(this,N);L(this,re);L(this,he);L(this,K);L(this,fe);L(this,ce);L(this,J);L(this,ee);L(this,j);L(this,ae);L(this,se);L(this,W);L(this,te);L(this,H);L(this,Q);L(this,ie);L(this,X);L(this,Z);L(this,Y);L(this,me);L(this,ne);L(this,pe);L(this,ge);O(this,"querySet");O(this,"resolveBuffer");O(this,"resultBuffer");O(this,"gpuTimes");O(this,"resize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight;const e=window.devicePixelRatio||1;if(this.canvas.width=window.innerWidth*e,this.canvas.height=window.innerHeight*e,this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.device&&this.textureFormat){const s={device:this.device,format:this.textureFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"opaque"};this.context.configure(s),y(this,K)!=null&&y(this,K).destroy(),q(this,K,this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}))}this.camera.aspect=this.canvas.width/this.canvas.height});O(this,"pass",async e=>{this.simParams.range.v!==this.gridParams.cellSize&&ve(this,be,Me).call(this);const s=this.device.createCommandEncoder(),t=this.gridParams.gridDims.x*this.gridParams.gridDims.y*this.gridParams.gridDims.z,i=Math.ceil(this.simParams.boids.v/64),n=new Float32Array([this.simParams.boids.v,this.simParams.range.v,this.simParams.coh.v,this.simParams.align.v,this.simParams.sep.v,this.simParams.sepRange.v,this.boidBounds.x.min,this.boidBounds.x.max,this.boidBounds.y.min,this.boidBounds.y.max,this.boidBounds.z.min,this.boidBounds.z.max,e]);this.device.queue.writeBuffer(y(this,te),0,n);const r=s.beginComputePass({timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1}});r.setPipeline(y(this,ee)),r.setBindGroup(0,y(this,me)[this.currentFrame%2===0?"a":"b"]),r.dispatchWorkgroups(i),r.end(),this.device.queue.writeBuffer(y(this,Q),0,new Uint32Array(t).fill(0));const c=s.beginComputePass({timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:2,endOfPassWriteIndex:3}});c.setBindGroup(0,y(this,ne)),c.setPipeline(y(this,j).count),c.dispatchWorkgroups(i),c.end();const a=s.beginComputePass({timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:4,endOfPassWriteIndex:5}});a.setBindGroup(0,y(this,ne)),a.setPipeline(y(this,j).offset),a.dispatchWorkgroups(Math.ceil(t/64)),a.end();const d=s.beginComputePass({timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:6,endOfPassWriteIndex:7}});d.setBindGroup(0,y(this,ne)),d.setPipeline(y(this,j).place),d.dispatchWorkgroups(i),d.end(),this.device.queue.writeBuffer(y(this,Z),0,new Uint32Array(t*2).fill(0));const o=s.beginComputePass({timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:8,endOfPassWriteIndex:9}});o.setPipeline(y(this,ae)),o.setBindGroup(0,y(this,pe)),o.dispatchWorkgroups(i),o.end();const l=s.beginComputePass({timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:10,endOfPassWriteIndex:11}});l.setPipeline(y(this,se)),l.setBindGroup(0,y(this,ge)[this.currentFrame%2===0?"a":"b"]),l.dispatchWorkgroups(i),l.end(),y(this,N).set(this.camera.getViewProjectionMatrix(),0),y(this,N).set(this.camera.getInverseViewProjectionMatrix(),16),y(this,N).set(this.camera.target,36),this.device.queue.writeBuffer(y(this,$),0,y(this,N)),q(this,J,{colorAttachments:[],timestampWrites:{querySet:this.querySet,beginningOfPassWriteIndex:12,endOfPassWriteIndex:13}}),y(this,J).colorAttachments=[{view:this.context.getCurrentTexture().createView(),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}],y(this,J).depthStencilAttachment={view:y(this,K).createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"};const h=s.beginRenderPass(y(this,J));h.setPipeline(y(this,he)),h.setBindGroup(0,y(this,fe)),h.setVertexBuffer(0,y(this,re)),h.setVertexBuffer(1,y(this,W)[this.currentFrame%2===0?"b":"a"]),h.draw(18,this.simParams.boids.v),h.end(),s.resolveQuerySet(this.querySet,0,this.querySet.count,this.resolveBuffer,0),this.resultBuffer.mapState==="unmapped"&&s.copyBufferToBuffer(this.resolveBuffer,0,this.resultBuffer,0,this.resultBuffer.size),this.device.queue.submit([s.finish()]),this.resultBuffer.mapState==="unmapped"&&this.resultBuffer.mapAsync(GPUMapMode.READ).then(()=>{const m=new BigInt64Array(this.resultBuffer.getMappedRange());for(let p=0;p<7;p++){let b=Number(m[p+1]-m[p])/1e3;b>0&&(this.gpuTimes[p].push(b),this.gpuTimes[p].length>1&&this.gpuTimes[p].shift())}this.resultBuffer.unmap()}),this.currentFrame+=1});this.canvas=e,this.context=(r=>{if(r===null)throw new Error("Failed to get canvas context");return r})(this.canvas.getContext("webgpu")),this.camera=new Ee(this.canvas,this.canvas.width/this.canvas.height),this.light={p:S.fromValues(100,100,100),color:S.fromValues(1,1,1)},q(this,le,s),this.currentFrame=0,this.simParams=t,this.boidBounds=i;const n=this.simParams.range.v;this.gridParams={cellSize:n,gridDims:{x:Math.ceil((this.boidBounds.x.max-this.boidBounds.x.min)/n),y:Math.ceil((this.boidBounds.y.max-this.boidBounds.y.min)/n),z:Math.ceil((this.boidBounds.z.max-this.boidBounds.z.min)/n)}},this.gpuTimes=Array.from({length:7}).map(r=>[])}async init(){const e=navigator.gpu;if(!e){const h="Failed to connect to GPU, your device or browser might not support WebGPU yet.";throw alert(h),new Error(h)}this.adapter=(h=>{if(h===null){const m="Failed to get WebGPU adapter";throw alert(m),new Error(m)}else return h})(await e.requestAdapter());const s=this.adapter.features.has("timestamp-query");if(this.device=await this.adapter.requestDevice({requiredFeatures:[...s?["timestamp-query"]:[]]}),this.device===null){const h="Failed to get WebGPU device";throw alert(h),new Error(h)}this.device.lost.then(h=>{const m=`WebGPU device was lost: ${h.message}`;throw alert(m),new Error(m)}),this.textureFormat=navigator.gpu.getPreferredCanvasFormat(),this.resize(),window.addEventListener("resize",this.resize);const t=16*4+16*4+(3*4+4)+(3*4+4)+(3*4+4);q(this,$,this.device.createBuffer({label:"uniformBuffer",size:t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),q(this,N,new Float32Array(y(this,$).size/4)),y(this,N).set(this.camera.p,32),y(this,N).set(this.light.p,40);const i=new Float32Array([-1,-1,.99,0,0,0,1,-1,.99,0,0,0,-1,1,.99,0,0,0,1,-1,.99,0,0,0,1,1,.99,0,0,0,-1,1,.99,0,0,0,0,.05,-.1,0,0,-1,-.05,-.05,-.1,0,0,-1,.05,-.05,-.1,0,0,-1,0,0,.2,.87,-.5,0,.05,-.05,-.1,.87,-.5,0,0,.05,-.1,.87,-.5,0,0,0,.2,-.87,-.5,0,0,.05,-.1,-.87,-.5,0,-.05,-.05,-.1,-.87,-.5,0,0,0,.2,0,-1,0,-.05,-.05,-.1,0,-1,0,.05,-.05,-.1,0,-1,0]);q(this,re,this.device.createBuffer({label:"vertex buffer",size:i.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(y(this,re),0,i);const n=this.device.createShaderModule({label:"main module",code:Oe});q(this,ce,this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]})),q(this,fe,this.device.createBindGroup({layout:y(this,ce),entries:[{binding:0,resource:{buffer:y(this,$)}}]})),q(this,he,this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[y(this,ce)]}),vertex:{module:n,entryPoint:"vs",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}],stepMode:"vertex"},{arrayStride:8*4,attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:4*4,format:"float32x3"}],stepMode:"instance"}]},fragment:{module:n,entryPoint:"fs",targets:[{format:this.textureFormat}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}));const r=this.device.createShaderModule({label:"Boid compute shader",code:Ce}),c=this.simParams.boids.max*32;q(this,W,{a:this.device.createBuffer({label:"boidBufferA",size:c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.VERTEX}),b:this.device.createBuffer({label:"boidBufferB",size:c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC|GPUBufferUsage.VERTEX})});const a=13*4;q(this,te,this.device.createBuffer({label:"simParamsBuffer",size:a,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),q(this,H,this.device.createBuffer({label:"boidCellBuffer",size:this.simParams.boids.max*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),q(this,X,this.device.createBuffer({label:"cellSortedBoidsBuffer",size:this.simParams.boids.max*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),q(this,Y,this.device.createBuffer({label:"gridParamsBuffer",size:3*4+4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}));const d=new Float32Array([this.gridParams.gridDims.x,this.gridParams.gridDims.y,this.gridParams.gridDims.z,this.gridParams.cellSize]);this.device.queue.writeBuffer(y(this,Y),0,d),q(this,ee,this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})]}),compute:{module:r,entryPoint:"compute_cell_indices"}}));const o=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});q(this,j,{count:this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[o]}),compute:{module:r,entryPoint:"count_cells"}}),offset:this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[o]}),compute:{module:r,entryPoint:"compute_offsets"}}),place:this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[o]}),compute:{module:r,entryPoint:"place_indices"}})}),q(this,ae,this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]})]}),compute:{module:r,entryPoint:"build_grid"}})),q(this,se,this.device.createComputePipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})]}),compute:{module:r,entryPoint:"sim_boids"}}));const l=new Float32Array(this.simParams.boids.max*8);y(this,le).forEach((h,m)=>{l.set([h.p.x,h.p.y,h.p.z,0,h.v.x,h.v.y,h.v.z,0],m*8)}),this.device.queue.writeBuffer(y(this,W).a,0,l),q(this,me,{a:this.device.createBindGroup({layout:y(this,ee).getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y(this,W).a}},{binding:1,resource:{buffer:y(this,H)}},{binding:2,resource:{buffer:y(this,X)}},{binding:3,resource:{buffer:y(this,Y)}}]}),b:this.device.createBindGroup({layout:y(this,ee).getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y(this,W).b}},{binding:1,resource:{buffer:y(this,H)}},{binding:2,resource:{buffer:y(this,X)}},{binding:3,resource:{buffer:y(this,Y)}}]})}),ve(this,be,Me).call(this),this.querySet=this.device.createQuerySet({type:"timestamp",count:14}),this.resolveBuffer=this.device.createBuffer({size:this.querySet.count*8,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.resultBuffer=this.device.createBuffer({size:this.resolveBuffer.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}}le=new WeakMap,$=new WeakMap,N=new WeakMap,re=new WeakMap,he=new WeakMap,K=new WeakMap,fe=new WeakMap,ce=new WeakMap,J=new WeakMap,ee=new WeakMap,j=new WeakMap,ae=new WeakMap,se=new WeakMap,W=new WeakMap,te=new WeakMap,H=new WeakMap,Q=new WeakMap,ie=new WeakMap,X=new WeakMap,Z=new WeakMap,Y=new WeakMap,me=new WeakMap,ne=new WeakMap,pe=new WeakMap,ge=new WeakMap,be=new WeakSet,Me=function(){const e=this.simParams.range.v,s={x:Math.ceil((this.boidBounds.x.max-this.boidBounds.x.min)/e),y:Math.ceil((this.boidBounds.y.max-this.boidBounds.y.min)/e),z:Math.ceil((this.boidBounds.z.max-this.boidBounds.z.min)/e)},t=s.x*s.y*s.z;this.gridParams={cellSize:e,gridDims:s},this.device.queue.writeBuffer(y(this,Y),0,new Float32Array([s.x,s.y,s.z,e])),y(this,Q)!==void 0&&y(this,Q).destroy(),y(this,ie)!==void 0&&y(this,ie).destroy(),y(this,Z)!==void 0&&y(this,Z).destroy(),q(this,Q,this.device.createBuffer({label:"cellCountsBuffer",size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),q(this,ie,this.device.createBuffer({label:"cellOffsetsBuffer",size:t*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),q(this,Z,this.device.createBuffer({label:"cellsBuffer",size:t*8,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})),q(this,ne,this.device.createBindGroup({layout:y(this,j).count.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y(this,H)}},{binding:1,resource:{buffer:y(this,Q)}},{binding:2,resource:{buffer:y(this,ie)}},{binding:3,resource:{buffer:y(this,X)}},{binding:4,resource:{buffer:y(this,Y)}}]})),q(this,pe,this.device.createBindGroup({layout:y(this,ae).getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y(this,H)}},{binding:1,resource:{buffer:y(this,X)}},{binding:2,resource:{buffer:y(this,Z)}}]})),q(this,ge,{a:this.device.createBindGroup({layout:y(this,se).getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y(this,W).a}},{binding:1,resource:{buffer:y(this,W).b}},{binding:2,resource:{buffer:y(this,te)}},{binding:3,resource:{buffer:y(this,Z)}},{binding:4,resource:{buffer:y(this,X)}},{binding:5,resource:{buffer:y(this,Y)}}]}),b:this.device.createBindGroup({layout:y(this,se).getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y(this,W).b}},{binding:1,resource:{buffer:y(this,W).a}},{binding:2,resource:{buffer:y(this,te)}},{binding:3,resource:{buffer:y(this,Z)}},{binding:4,resource:{buffer:y(this,X)}},{binding:5,resource:{buffer:y(this,Y)}}]})})};Array.prototype.shuffle=function(){let B=this.length,e,s;for(;B;)s=Math.floor(Math.random()*B--),e=this[B],this[B]=this[s],this[s]=e;return this};const Se=document.createElement("canvas");document.querySelector("#app").appendChild(Se);const ue=(B,e)=>(e-B)*Math.random()+B,ze=B=>{const e=Math.random()*Math.PI*2,s=Math.random()*Math.PI;let t=new S(Math.sin(s)*Math.cos(e),Math.cos(s),Math.sin(s)*Math.sin(e));return{p:new S(ue(B.x.min,B.x.max),ue(B.y.min,B.y.max),ue(B.z.min,B.z.max)),v:t}},ye={boids:{label:"# Boids",v:1500,min:1,max:5e3},range:{label:"Range",v:5,min:1,max:100},coh:{label:"Cohesion",v:1},align:{label:"Alignment",v:2},sep:{label:"Separation",v:5},sepRange:{label:"Sep. Range",v:.5,min:.1,max:10}},Le=async()=>{console.log("Start!");let B=15,e={x:{min:-15,max:B},y:{min:20,max:40},z:{min:-15,max:B}},s=Array.from({length:ye.boids.v}).map(()=>ze(e)),t={w:window.innerWidth,h:window.innerHeight},i={x:0,y:0};const n=document.createElement("div");n.className="controlsParent";let r=document.createElement("button");r.className="resetBtn",window.addEventListener("resize",c=>{t={w:window.innerWidth,h:window.innerHeight}}),window.addEventListener("mousemove",c=>{i={x:c.screenX,y:c.screenY},i.x+160>t.w&&(n.classList.add("open"),r.classList.add("open")),i.x<t.w-250&&(n.classList.remove("open"),r.classList.remove("open"))});try{let c=ye;document.querySelector("#app").appendChild(n);for(const g of Object.entries(c)){const x=g[1],_=document.createElement("input");_.type="range",_.min=String(x.min??"0"),_.max=String(x.max??"10"),_.step=x.max>10?"1":"0.1",_.value=String(x.v);const v=document.createElement("span");v.className="sliderValue",v.textContent=x.v;const u=document.createElement("div");u.className="rangeHolder",_.addEventListener("input",({target:P})=>{let G=P.value;x.v=G,v.innerText=G});const M=document.createElement("label");M.textContent=x.label,M.setAttribute("for","myElement"),n.appendChild(M),u.appendChild(_),n.appendChild(u),u.appendChild(v)}r.innerText="Reset",r.addEventListener("click",()=>{c=ye,s=Array.from({length:ye.boids.v}).map(()=>ze(e))}),n.appendChild(r);const a=new Te(Se,s,c,e);await a.init();const d=document.createElement("ul");d.className="times",document.querySelector("#app").appendChild(d);const o=document.createElement("li");d.appendChild(o);const l=["cellIndex","sortCount","sortOffset","sort","gridBuild","simulation","render"],h=[];l.forEach(g=>{const x=document.createElement("li");h.push(x),d.appendChild(x)});let p=performance.now(),b=[];const f=g=>{const x=(g-p)/1e3;a.pass(x),b.push(1/x),b.length>20&&b.shift(),o.innerText=`${Math.round(b.reduce((v,u)=>v+u,0)/b.length)} fps`,a.gpuTimes.map(v=>v.reduce((u,M)=>u+M,0)/Math.max(1,v.length)).forEach((v,u)=>{h[u].innerText=`${l[u]} pass: ${v>0?Math.round(v)+"µs":"-"}`}),p=g,requestAnimationFrame(v=>f(v))};requestAnimationFrame(f)}catch(c){console.error(c)}};Le();
