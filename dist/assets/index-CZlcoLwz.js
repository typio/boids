var st=Object.defineProperty;var et=(S,t,s)=>t in S?st(S,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):S[t]=s;var O=(S,t,s)=>et(S,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const V=1e-6,J=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),R=class R extends Float32Array{constructor(...t){switch(t.length){case 16:super(t);break;case 2:super(t[0],t[1],16);break;case 1:const s=t[0];typeof s=="number"?super([s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s]):super(s,0,16);break;default:super(J);break}}get str(){return R.str(this)}copy(t){return this.set(t),this}identity(){return this.set(J),this}multiply(t){return R.multiply(this,this,t)}mul(t){return this}transpose(){return R.transpose(this,this)}invert(){return R.invert(this,this)}translate(t){return R.translate(this,this,t)}rotate(t,s){return R.rotate(this,this,t,s)}scale(t){return R.scale(this,this,t)}rotateX(t){return R.rotateX(this,this,t)}rotateY(t){return R.rotateY(this,this,t)}rotateZ(t){return R.rotateZ(this,this,t)}perspectiveNO(t,s,e,n){return R.perspectiveNO(this,t,s,e,n)}perspectiveZO(t,s,e,n){return R.perspectiveZO(this,t,s,e,n)}orthoNO(t,s,e,n,r,c){return R.orthoNO(this,t,s,e,n,r,c)}orthoZO(t,s,e,n,r,c){return R.orthoZO(this,t,s,e,n,r,c)}static create(){return new R}static clone(t){return new R(t)}static copy(t,s){return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],t}static fromValues(...t){return new R(...t)}static set(t,...s){return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],t}static identity(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static transpose(t,s){if(t===s){const e=s[1],n=s[2],r=s[3],c=s[6],i=s[7],a=s[11];t[1]=s[4],t[2]=s[8],t[3]=s[12],t[4]=e,t[6]=s[9],t[7]=s[13],t[8]=n,t[9]=c,t[11]=s[14],t[12]=r,t[13]=i,t[14]=a}else t[0]=s[0],t[1]=s[4],t[2]=s[8],t[3]=s[12],t[4]=s[1],t[5]=s[5],t[6]=s[9],t[7]=s[13],t[8]=s[2],t[9]=s[6],t[10]=s[10],t[11]=s[14],t[12]=s[3],t[13]=s[7],t[14]=s[11],t[15]=s[15];return t}static invert(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7],o=s[8],f=s[9],x=s[10],M=s[11],y=s[12],p=s[13],m=s[14],g=s[15],P=e*a-n*i,v=e*l-r*i,w=e*h-c*i,z=n*l-r*a,b=n*h-c*a,q=r*h-c*l,A=o*p-f*y,L=o*m-x*y,E=o*g-M*y,B=f*m-x*p,D=f*g-M*p,C=x*g-M*m;let T=P*C-v*D+w*B+z*E-b*L+q*A;return T?(T=1/T,t[0]=(a*C-l*D+h*B)*T,t[1]=(r*D-n*C-c*B)*T,t[2]=(p*q-m*b+g*z)*T,t[3]=(x*b-f*q-M*z)*T,t[4]=(l*E-i*C-h*L)*T,t[5]=(e*C-r*E+c*L)*T,t[6]=(m*w-y*q-g*v)*T,t[7]=(o*q-x*w+M*v)*T,t[8]=(i*D-a*E+h*A)*T,t[9]=(n*E-e*D-c*A)*T,t[10]=(y*b-p*w+g*P)*T,t[11]=(f*w-o*b-M*P)*T,t[12]=(a*L-i*B-l*A)*T,t[13]=(e*B-n*L+r*A)*T,t[14]=(p*v-y*z-m*P)*T,t[15]=(o*z-f*v+x*P)*T,t):null}static adjoint(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7],o=s[8],f=s[9],x=s[10],M=s[11],y=s[12],p=s[13],m=s[14],g=s[15],P=e*a-n*i,v=e*l-r*i,w=e*h-c*i,z=n*l-r*a,b=n*h-c*a,q=r*h-c*l,A=o*p-f*y,L=o*m-x*y,E=o*g-M*y,B=f*m-x*p,D=f*g-M*p,C=x*g-M*m;return t[0]=a*C-l*D+h*B,t[1]=r*D-n*C-c*B,t[2]=p*q-m*b+g*z,t[3]=x*b-f*q-M*z,t[4]=l*E-i*C-h*L,t[5]=e*C-r*E+c*L,t[6]=m*w-y*q-g*v,t[7]=o*q-x*w+M*v,t[8]=i*D-a*E+h*A,t[9]=n*E-e*D-c*A,t[10]=y*b-p*w+g*P,t[11]=f*w-o*b-M*P,t[12]=a*L-i*B-l*A,t[13]=e*B-n*L+r*A,t[14]=p*v-y*z-m*P,t[15]=o*z-f*v+x*P,t}static determinant(t){const s=t[0],e=t[1],n=t[2],r=t[3],c=t[4],i=t[5],a=t[6],l=t[7],h=t[8],o=t[9],f=t[10],x=t[11],M=t[12],y=t[13],p=t[14],m=t[15],g=s*i-e*c,P=s*a-n*c,v=e*a-n*i,w=h*y-o*M,z=h*p-f*M,b=o*p-f*y,q=s*b-e*z+n*w,A=c*b-i*z+a*w,L=h*v-o*P+f*g,E=M*v-y*P+p*g;return l*q-r*A+m*L-x*E}static multiply(t,s,e){const n=s[0],r=s[1],c=s[2],i=s[3],a=s[4],l=s[5],h=s[6],o=s[7],f=s[8],x=s[9],M=s[10],y=s[11],p=s[12],m=s[13],g=s[14],P=s[15];let v=e[0],w=e[1],z=e[2],b=e[3];return t[0]=v*n+w*a+z*f+b*p,t[1]=v*r+w*l+z*x+b*m,t[2]=v*c+w*h+z*M+b*g,t[3]=v*i+w*o+z*y+b*P,v=e[4],w=e[5],z=e[6],b=e[7],t[4]=v*n+w*a+z*f+b*p,t[5]=v*r+w*l+z*x+b*m,t[6]=v*c+w*h+z*M+b*g,t[7]=v*i+w*o+z*y+b*P,v=e[8],w=e[9],z=e[10],b=e[11],t[8]=v*n+w*a+z*f+b*p,t[9]=v*r+w*l+z*x+b*m,t[10]=v*c+w*h+z*M+b*g,t[11]=v*i+w*o+z*y+b*P,v=e[12],w=e[13],z=e[14],b=e[15],t[12]=v*n+w*a+z*f+b*p,t[13]=v*r+w*l+z*x+b*m,t[14]=v*c+w*h+z*M+b*g,t[15]=v*i+w*o+z*y+b*P,t}static mul(t,s,e){return t}static translate(t,s,e){const n=e[0],r=e[1],c=e[2];if(s===t)t[12]=s[0]*n+s[4]*r+s[8]*c+s[12],t[13]=s[1]*n+s[5]*r+s[9]*c+s[13],t[14]=s[2]*n+s[6]*r+s[10]*c+s[14],t[15]=s[3]*n+s[7]*r+s[11]*c+s[15];else{const i=s[0],a=s[1],l=s[2],h=s[3],o=s[4],f=s[5],x=s[6],M=s[7],y=s[8],p=s[9],m=s[10],g=s[11];t[0]=i,t[1]=a,t[2]=l,t[3]=h,t[4]=o,t[5]=f,t[6]=x,t[7]=M,t[8]=y,t[9]=p,t[10]=m,t[11]=g,t[12]=i*n+o*r+y*c+s[12],t[13]=a*n+f*r+p*c+s[13],t[14]=l*n+x*r+m*c+s[14],t[15]=h*n+M*r+g*c+s[15]}return t}static scale(t,s,e){const n=e[0],r=e[1],c=e[2];return t[0]=s[0]*n,t[1]=s[1]*n,t[2]=s[2]*n,t[3]=s[3]*n,t[4]=s[4]*r,t[5]=s[5]*r,t[6]=s[6]*r,t[7]=s[7]*r,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=s[11]*c,t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],t}static rotate(t,s,e,n){let r=n[0],c=n[1],i=n[2],a=Math.sqrt(r*r+c*c+i*i);if(a<V)return null;a=1/a,r*=a,c*=a,i*=a;const l=Math.sin(e),h=Math.cos(e),o=1-h,f=s[0],x=s[1],M=s[2],y=s[3],p=s[4],m=s[5],g=s[6],P=s[7],v=s[8],w=s[9],z=s[10],b=s[11],q=r*r*o+h,A=c*r*o+i*l,L=i*r*o-c*l,E=r*c*o-i*l,B=c*c*o+h,D=i*c*o+r*l,C=r*i*o+c*l,T=c*i*o-r*l,U=i*i*o+h;return t[0]=f*q+p*A+v*L,t[1]=x*q+m*A+w*L,t[2]=M*q+g*A+z*L,t[3]=y*q+P*A+b*L,t[4]=f*E+p*B+v*D,t[5]=x*E+m*B+w*D,t[6]=M*E+g*B+z*D,t[7]=y*E+P*B+b*D,t[8]=f*C+p*T+v*U,t[9]=x*C+m*T+w*U,t[10]=M*C+g*T+z*U,t[11]=y*C+P*T+b*U,s!==t&&(t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t}static rotateX(t,s,e){let n=Math.sin(e),r=Math.cos(e),c=s[4],i=s[5],a=s[6],l=s[7],h=s[8],o=s[9],f=s[10],x=s[11];return s!==t&&(t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t[4]=c*r+h*n,t[5]=i*r+o*n,t[6]=a*r+f*n,t[7]=l*r+x*n,t[8]=h*r-c*n,t[9]=o*r-i*n,t[10]=f*r-a*n,t[11]=x*r-l*n,t}static rotateY(t,s,e){let n=Math.sin(e),r=Math.cos(e),c=s[0],i=s[1],a=s[2],l=s[3],h=s[8],o=s[9],f=s[10],x=s[11];return s!==t&&(t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t[0]=c*r-h*n,t[1]=i*r-o*n,t[2]=a*r-f*n,t[3]=l*r-x*n,t[8]=c*n+h*r,t[9]=i*n+o*r,t[10]=a*n+f*r,t[11]=l*n+x*r,t}static rotateZ(t,s,e){let n=Math.sin(e),r=Math.cos(e),c=s[0],i=s[1],a=s[2],l=s[3],h=s[4],o=s[5],f=s[6],x=s[7];return s!==t&&(t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t[0]=c*r+h*n,t[1]=i*r+o*n,t[2]=a*r+f*n,t[3]=l*r+x*n,t[4]=h*r-c*n,t[5]=o*r-i*n,t[6]=f*r-a*n,t[7]=x*r-l*n,t}static fromTranslation(t,s){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=s[0],t[13]=s[1],t[14]=s[2],t[15]=1,t}static fromScaling(t,s){return t[0]=s[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=s[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromRotation(t,s,e){let n=e[0],r=e[1],c=e[2],i=Math.sqrt(n*n+r*r+c*c);if(i<V)return null;i=1/i,n*=i,r*=i,c*=i;const a=Math.sin(s),l=Math.cos(s),h=1-l;return t[0]=n*n*h+l,t[1]=r*n*h+c*a,t[2]=c*n*h-r*a,t[3]=0,t[4]=n*r*h-c*a,t[5]=r*r*h+l,t[6]=c*r*h+n*a,t[7]=0,t[8]=n*c*h+r*a,t[9]=r*c*h-n*a,t[10]=c*c*h+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromXRotation(t,s){let e=Math.sin(s),n=Math.cos(s);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=e,t[7]=0,t[8]=0,t[9]=-e,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromYRotation(t,s){let e=Math.sin(s),n=Math.cos(s);return t[0]=n,t[1]=0,t[2]=-e,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=e,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromZRotation(t,s){const e=Math.sin(s),n=Math.cos(s);return t[0]=n,t[1]=e,t[2]=0,t[3]=0,t[4]=-e,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromRotationTranslation(t,s,e){const n=s[0],r=s[1],c=s[2],i=s[3],a=n+n,l=r+r,h=c+c,o=n*a,f=n*l,x=n*h,M=r*l,y=r*h,p=c*h,m=i*a,g=i*l,P=i*h;return t[0]=1-(M+p),t[1]=f+P,t[2]=x-g,t[3]=0,t[4]=f-P,t[5]=1-(o+p),t[6]=y+m,t[7]=0,t[8]=x+g,t[9]=y-m,t[10]=1-(o+M),t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}static fromQuat2(t,s){const e=-s[0],n=-s[1],r=-s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7];let o=e*e+n*n+r*r+c*c;return o>0?(F[0]=(i*c+h*e+a*r-l*n)*2/o,F[1]=(a*c+h*n+l*e-i*r)*2/o,F[2]=(l*c+h*r+i*n-a*e)*2/o):(F[0]=(i*c+h*e+a*r-l*n)*2,F[1]=(a*c+h*n+l*e-i*r)*2,F[2]=(l*c+h*r+i*n-a*e)*2),R.fromRotationTranslation(t,s,F),t}static normalFromMat4(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7],o=s[8],f=s[9],x=s[10],M=s[11],y=s[12],p=s[13],m=s[14],g=s[15],P=e*a-n*i,v=e*l-r*i,w=e*h-c*i,z=n*l-r*a,b=n*h-c*a,q=r*h-c*l,A=o*p-f*y,L=o*m-x*y,E=o*g-M*y,B=f*m-x*p,D=f*g-M*p,C=x*g-M*m;let T=P*C-v*D+w*B+z*E-b*L+q*A;return T?(T=1/T,t[0]=(a*C-l*D+h*B)*T,t[1]=(l*E-i*C-h*L)*T,t[2]=(i*D-a*E+h*A)*T,t[3]=0,t[4]=(r*D-n*C-c*B)*T,t[5]=(e*C-r*E+c*L)*T,t[6]=(n*E-e*D-c*A)*T,t[7]=0,t[8]=(p*q-m*b+g*z)*T,t[9]=(m*w-y*q-g*v)*T,t[10]=(y*b-p*w+g*P)*T,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t):null}static normalFromMat4Fast(t,s){const e=s[0],n=s[1],r=s[2],c=s[4],i=s[5],a=s[6],l=s[8],h=s[9],o=s[10];return t[0]=i*o-o*h,t[1]=a*l-l*o,t[2]=c*h-h*l,t[3]=0,t[4]=h*r-o*n,t[5]=o*e-l*r,t[6]=l*n-h*e,t[7]=0,t[8]=n*a-r*i,t[9]=r*c-e*a,t[10]=e*i-n*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static getTranslation(t,s){return t[0]=s[12],t[1]=s[13],t[2]=s[14],t}static getScaling(t,s){const e=s[0],n=s[1],r=s[2],c=s[4],i=s[5],a=s[6],l=s[8],h=s[9],o=s[10];return t[0]=Math.sqrt(e*e+n*n+r*r),t[1]=Math.sqrt(c*c+i*i+a*a),t[2]=Math.sqrt(l*l+h*h+o*o),t}static getRotation(t,s){R.getScaling(F,s);const e=1/F[0],n=1/F[1],r=1/F[2],c=s[0]*e,i=s[1]*n,a=s[2]*r,l=s[4]*e,h=s[5]*n,o=s[6]*r,f=s[8]*e,x=s[9]*n,M=s[10]*r,y=c+h+M;let p=0;return y>0?(p=Math.sqrt(y+1)*2,t[3]=.25*p,t[0]=(o-x)/p,t[1]=(f-a)/p,t[2]=(i-l)/p):c>h&&c>M?(p=Math.sqrt(1+c-h-M)*2,t[3]=(o-x)/p,t[0]=.25*p,t[1]=(i+l)/p,t[2]=(f+a)/p):h>M?(p=Math.sqrt(1+h-c-M)*2,t[3]=(f-a)/p,t[0]=(i+l)/p,t[1]=.25*p,t[2]=(o+x)/p):(p=Math.sqrt(1+M-c-h)*2,t[3]=(i-l)/p,t[0]=(f+a)/p,t[1]=(o+x)/p,t[2]=.25*p),t}static decompose(t,s,e,n){s[0]=n[12],s[1]=n[13],s[2]=n[14];const r=n[0],c=n[1],i=n[2],a=n[4],l=n[5],h=n[6],o=n[8],f=n[9],x=n[10];e[0]=Math.sqrt(r*r+c*c+i*i),e[1]=Math.sqrt(a*a+l*l+h*h),e[2]=Math.sqrt(o*o+f*f+x*x);const M=1/e[0],y=1/e[1],p=1/e[2],m=r*M,g=c*y,P=i*p,v=a*M,w=l*y,z=h*p,b=o*M,q=f*y,A=x*p,L=m+w+A;let E=0;return L>0?(E=Math.sqrt(L+1)*2,t[3]=.25*E,t[0]=(z-q)/E,t[1]=(b-P)/E,t[2]=(g-v)/E):m>w&&m>A?(E=Math.sqrt(1+m-w-A)*2,t[3]=(z-q)/E,t[0]=.25*E,t[1]=(g+v)/E,t[2]=(b+P)/E):w>A?(E=Math.sqrt(1+w-m-A)*2,t[3]=(b-P)/E,t[0]=(g+v)/E,t[1]=.25*E,t[2]=(z+q)/E):(E=Math.sqrt(1+A-m-w)*2,t[3]=(g-v)/E,t[0]=(b+P)/E,t[1]=(z+q)/E,t[2]=.25*E),t}static fromRotationTranslationScale(t,s,e,n){const r=s[0],c=s[1],i=s[2],a=s[3],l=r+r,h=c+c,o=i+i,f=r*l,x=r*h,M=r*o,y=c*h,p=c*o,m=i*o,g=a*l,P=a*h,v=a*o,w=n[0],z=n[1],b=n[2];return t[0]=(1-(y+m))*w,t[1]=(x+v)*w,t[2]=(M-P)*w,t[3]=0,t[4]=(x-v)*z,t[5]=(1-(f+m))*z,t[6]=(p+g)*z,t[7]=0,t[8]=(M+P)*b,t[9]=(p-g)*b,t[10]=(1-(f+y))*b,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}static fromRotationTranslationScaleOrigin(t,s,e,n,r){const c=s[0],i=s[1],a=s[2],l=s[3],h=c+c,o=i+i,f=a+a,x=c*h,M=c*o,y=c*f,p=i*o,m=i*f,g=a*f,P=l*h,v=l*o,w=l*f,z=n[0],b=n[1],q=n[2],A=r[0],L=r[1],E=r[2],B=(1-(p+g))*z,D=(M+w)*z,C=(y-v)*z,T=(M-w)*b,U=(1-(x+g))*b,G=(m+P)*b,k=(y+v)*q,Q=(m-P)*q,K=(1-(x+p))*q;return t[0]=B,t[1]=D,t[2]=C,t[3]=0,t[4]=T,t[5]=U,t[6]=G,t[7]=0,t[8]=k,t[9]=Q,t[10]=K,t[11]=0,t[12]=e[0]+A-(B*A+T*L+k*E),t[13]=e[1]+L-(D*A+U*L+Q*E),t[14]=e[2]+E-(C*A+G*L+K*E),t[15]=1,t}static fromQuat(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=e+e,a=n+n,l=r+r,h=e*i,o=n*i,f=n*a,x=r*i,M=r*a,y=r*l,p=c*i,m=c*a,g=c*l;return t[0]=1-f-y,t[1]=o+g,t[2]=x-m,t[3]=0,t[4]=o-g,t[5]=1-h-y,t[6]=M+p,t[7]=0,t[8]=x+m,t[9]=M-p,t[10]=1-h-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static frustumNO(t,s,e,n,r,c,i=1/0){const a=1/(e-s),l=1/(r-n);if(t[0]=c*2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c*2*l,t[6]=0,t[7]=0,t[8]=(e+s)*a,t[9]=(r+n)*l,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,i!=null&&i!==1/0){const h=1/(c-i);t[10]=(i+c)*h,t[14]=2*i*c*h}else t[10]=-1,t[14]=-2*c;return t}static frustum(t,s,e,n,r,c,i=1/0){return t}static frustumZO(t,s,e,n,r,c,i=1/0){const a=1/(e-s),l=1/(r-n);if(t[0]=c*2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c*2*l,t[6]=0,t[7]=0,t[8]=(e+s)*a,t[9]=(r+n)*l,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,i!=null&&i!==1/0){const h=1/(c-i);t[10]=i*h,t[14]=i*c*h}else t[10]=-1,t[14]=-c;return t}static perspectiveNO(t,s,e,n,r=1/0){const c=1/Math.tan(s/2);if(t[0]=c/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,r!=null&&r!==1/0){const i=1/(n-r);t[10]=(r+n)*i,t[14]=2*r*n*i}else t[10]=-1,t[14]=-2*n;return t}static perspective(t,s,e,n,r=1/0){return t}static perspectiveZO(t,s,e,n,r=1/0){const c=1/Math.tan(s/2);if(t[0]=c/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,r!=null&&r!==1/0){const i=1/(n-r);t[10]=r*i,t[14]=r*n*i}else t[10]=-1,t[14]=-n;return t}static perspectiveFromFieldOfView(t,s,e,n){const r=Math.tan(s.upDegrees*Math.PI/180),c=Math.tan(s.downDegrees*Math.PI/180),i=Math.tan(s.leftDegrees*Math.PI/180),a=Math.tan(s.rightDegrees*Math.PI/180),l=2/(i+a),h=2/(r+c);return t[0]=l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((i-a)*l*.5),t[9]=(r-c)*h*.5,t[10]=n/(e-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*e/(e-n),t[15]=0,t}static orthoNO(t,s,e,n,r,c,i){const a=1/(s-e),l=1/(n-r),h=1/(c-i);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(s+e)*a,t[13]=(r+n)*l,t[14]=(i+c)*h,t[15]=1,t}static ortho(t,s,e,n,r,c,i){return t}static orthoZO(t,s,e,n,r,c,i){const a=1/(s-e),l=1/(n-r),h=1/(c-i);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=h,t[11]=0,t[12]=(s+e)*a,t[13]=(r+n)*l,t[14]=c*h,t[15]=1,t}static lookAt(t,s,e,n){const r=s[0],c=s[1],i=s[2],a=n[0],l=n[1],h=n[2],o=e[0],f=e[1],x=e[2];if(Math.abs(r-o)<V&&Math.abs(c-f)<V&&Math.abs(i-x)<V)return R.identity(t);let M=r-o,y=c-f,p=i-x,m=1/Math.sqrt(M*M+y*y+p*p);M*=m,y*=m,p*=m;let g=l*p-h*y,P=h*M-a*p,v=a*y-l*M;m=Math.sqrt(g*g+P*P+v*v),m?(m=1/m,g*=m,P*=m,v*=m):(g=0,P=0,v=0);let w=y*v-p*P,z=p*g-M*v,b=M*P-y*g;return m=Math.sqrt(w*w+z*z+b*b),m?(m=1/m,w*=m,z*=m,b*=m):(w=0,z=0,b=0),t[0]=g,t[1]=w,t[2]=M,t[3]=0,t[4]=P,t[5]=z,t[6]=y,t[7]=0,t[8]=v,t[9]=b,t[10]=p,t[11]=0,t[12]=-(g*r+P*c+v*i),t[13]=-(w*r+z*c+b*i),t[14]=-(M*r+y*c+p*i),t[15]=1,t}static targetTo(t,s,e,n){const r=s[0],c=s[1],i=s[2],a=n[0],l=n[1],h=n[2];let o=r-e[0],f=c-e[1],x=i-e[2],M=o*o+f*f+x*x;M>0&&(M=1/Math.sqrt(M),o*=M,f*=M,x*=M);let y=l*x-h*f,p=h*o-a*x,m=a*f-l*o;return M=y*y+p*p+m*m,M>0&&(M=1/Math.sqrt(M),y*=M,p*=M,m*=M),t[0]=y,t[1]=p,t[2]=m,t[3]=0,t[4]=f*m-x*p,t[5]=x*y-o*m,t[6]=o*p-f*y,t[7]=0,t[8]=o,t[9]=f,t[10]=x,t[11]=0,t[12]=r,t[13]=c,t[14]=i,t[15]=1,t}static frob(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8]+t[9]*t[9]+t[10]*t[10]+t[11]*t[11]+t[12]*t[12]+t[13]*t[13]+t[14]*t[14]+t[15]*t[15])}static add(t,s,e){return t[0]=s[0]+e[0],t[1]=s[1]+e[1],t[2]=s[2]+e[2],t[3]=s[3]+e[3],t[4]=s[4]+e[4],t[5]=s[5]+e[5],t[6]=s[6]+e[6],t[7]=s[7]+e[7],t[8]=s[8]+e[8],t[9]=s[9]+e[9],t[10]=s[10]+e[10],t[11]=s[11]+e[11],t[12]=s[12]+e[12],t[13]=s[13]+e[13],t[14]=s[14]+e[14],t[15]=s[15]+e[15],t}static subtract(t,s,e){return t[0]=s[0]-e[0],t[1]=s[1]-e[1],t[2]=s[2]-e[2],t[3]=s[3]-e[3],t[4]=s[4]-e[4],t[5]=s[5]-e[5],t[6]=s[6]-e[6],t[7]=s[7]-e[7],t[8]=s[8]-e[8],t[9]=s[9]-e[9],t[10]=s[10]-e[10],t[11]=s[11]-e[11],t[12]=s[12]-e[12],t[13]=s[13]-e[13],t[14]=s[14]-e[14],t[15]=s[15]-e[15],t}static sub(t,s,e){return t}static multiplyScalar(t,s,e){return t[0]=s[0]*e,t[1]=s[1]*e,t[2]=s[2]*e,t[3]=s[3]*e,t[4]=s[4]*e,t[5]=s[5]*e,t[6]=s[6]*e,t[7]=s[7]*e,t[8]=s[8]*e,t[9]=s[9]*e,t[10]=s[10]*e,t[11]=s[11]*e,t[12]=s[12]*e,t[13]=s[13]*e,t[14]=s[14]*e,t[15]=s[15]*e,t}static multiplyScalarAndAdd(t,s,e,n){return t[0]=s[0]+e[0]*n,t[1]=s[1]+e[1]*n,t[2]=s[2]+e[2]*n,t[3]=s[3]+e[3]*n,t[4]=s[4]+e[4]*n,t[5]=s[5]+e[5]*n,t[6]=s[6]+e[6]*n,t[7]=s[7]+e[7]*n,t[8]=s[8]+e[8]*n,t[9]=s[9]+e[9]*n,t[10]=s[10]+e[10]*n,t[11]=s[11]+e[11]*n,t[12]=s[12]+e[12]*n,t[13]=s[13]+e[13]*n,t[14]=s[14]+e[14]*n,t[15]=s[15]+e[15]*n,t}static exactEquals(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]&&t[4]===s[4]&&t[5]===s[5]&&t[6]===s[6]&&t[7]===s[7]&&t[8]===s[8]&&t[9]===s[9]&&t[10]===s[10]&&t[11]===s[11]&&t[12]===s[12]&&t[13]===s[13]&&t[14]===s[14]&&t[15]===s[15]}static equals(t,s){const e=t[0],n=t[1],r=t[2],c=t[3],i=t[4],a=t[5],l=t[6],h=t[7],o=t[8],f=t[9],x=t[10],M=t[11],y=t[12],p=t[13],m=t[14],g=t[15],P=s[0],v=s[1],w=s[2],z=s[3],b=s[4],q=s[5],A=s[6],L=s[7],E=s[8],B=s[9],D=s[10],C=s[11],T=s[12],U=s[13],G=s[14],k=s[15];return Math.abs(e-P)<=V*Math.max(1,Math.abs(e),Math.abs(P))&&Math.abs(n-v)<=V*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(r-w)<=V*Math.max(1,Math.abs(r),Math.abs(w))&&Math.abs(c-z)<=V*Math.max(1,Math.abs(c),Math.abs(z))&&Math.abs(i-b)<=V*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(a-q)<=V*Math.max(1,Math.abs(a),Math.abs(q))&&Math.abs(l-A)<=V*Math.max(1,Math.abs(l),Math.abs(A))&&Math.abs(h-L)<=V*Math.max(1,Math.abs(h),Math.abs(L))&&Math.abs(o-E)<=V*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(f-B)<=V*Math.max(1,Math.abs(f),Math.abs(B))&&Math.abs(x-D)<=V*Math.max(1,Math.abs(x),Math.abs(D))&&Math.abs(M-C)<=V*Math.max(1,Math.abs(M),Math.abs(C))&&Math.abs(y-T)<=V*Math.max(1,Math.abs(y),Math.abs(T))&&Math.abs(p-U)<=V*Math.max(1,Math.abs(p),Math.abs(U))&&Math.abs(m-G)<=V*Math.max(1,Math.abs(m),Math.abs(G))&&Math.abs(g-k)<=V*Math.max(1,Math.abs(g),Math.abs(k))}static str(t){return`Mat4(${t.join(", ")})`}};O(R,"BYTE_LENGTH",16*Float32Array.BYTES_PER_ELEMENT);let N=R;const F=new Float32Array(3);N.prototype.mul=N.prototype.multiply;N.sub=N.subtract;N.mul=N.multiply;N.frustum=N.frustumNO;N.perspective=N.perspectiveNO;N.ortho=N.orthoNO;const I=class I extends Float32Array{constructor(...t){switch(t.length){case 3:super(t);break;case 2:super(t[0],t[1],3);break;case 1:{const s=t[0];typeof s=="number"?super([s,s,s]):super(s,0,3);break}default:super(3);break}}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}get z(){return this[2]}set z(t){this[2]=t}get r(){return this[0]}set r(t){this[0]=t}get g(){return this[1]}set g(t){this[1]=t}get b(){return this[2]}set b(t){this[2]=t}get magnitude(){const t=this[0],s=this[1],e=this[2];return Math.sqrt(t*t+s*s+e*e)}get mag(){return this.magnitude}get squaredMagnitude(){const t=this[0],s=this[1],e=this[2];return t*t+s*s+e*e}get sqrMag(){return this.squaredMagnitude}get str(){return I.str(this)}copy(t){return this.set(t),this}add(t){return this[0]+=t[0],this[1]+=t[1],this[2]+=t[2],this}subtract(t){return this[0]-=t[0],this[1]-=t[1],this[2]-=t[2],this}sub(t){return this}multiply(t){return this[0]*=t[0],this[1]*=t[1],this[2]*=t[2],this}mul(t){return this}divide(t){return this[0]/=t[0],this[1]/=t[1],this[2]/=t[2],this}div(t){return this}scale(t){return this[0]*=t,this[1]*=t,this[2]*=t,this}scaleAndAdd(t,s){return this[0]+=t[0]*s,this[1]+=t[1]*s,this[2]+=t[2]*s,this}distance(t){return I.distance(this,t)}dist(t){return 0}squaredDistance(t){return I.squaredDistance(this,t)}sqrDist(t){return 0}negate(){return this[0]*=-1,this[1]*=-1,this[2]*=-1,this}invert(){return this[0]=1/this[0],this[1]=1/this[1],this[2]=1/this[2],this}abs(){return this[0]=Math.abs(this[0]),this[1]=Math.abs(this[1]),this[2]=Math.abs(this[2]),this}dot(t){return this[0]*t[0]+this[1]*t[1]+this[2]*t[2]}normalize(){return I.normalize(this,this)}static create(){return new I}static clone(t){return new I(t)}static magnitude(t){let s=t[0],e=t[1],n=t[2];return Math.sqrt(s*s+e*e+n*n)}static mag(t){return 0}static length(t){return 0}static len(t){return 0}static fromValues(t,s,e){return new I(t,s,e)}static copy(t,s){return t[0]=s[0],t[1]=s[1],t[2]=s[2],t}static set(t,s,e,n){return t[0]=s,t[1]=e,t[2]=n,t}static add(t,s,e){return t[0]=s[0]+e[0],t[1]=s[1]+e[1],t[2]=s[2]+e[2],t}static subtract(t,s,e){return t[0]=s[0]-e[0],t[1]=s[1]-e[1],t[2]=s[2]-e[2],t}static sub(t,s,e){return[0,0,0]}static multiply(t,s,e){return t[0]=s[0]*e[0],t[1]=s[1]*e[1],t[2]=s[2]*e[2],t}static mul(t,s,e){return[0,0,0]}static divide(t,s,e){return t[0]=s[0]/e[0],t[1]=s[1]/e[1],t[2]=s[2]/e[2],t}static div(t,s,e){return[0,0,0]}static ceil(t,s){return t[0]=Math.ceil(s[0]),t[1]=Math.ceil(s[1]),t[2]=Math.ceil(s[2]),t}static floor(t,s){return t[0]=Math.floor(s[0]),t[1]=Math.floor(s[1]),t[2]=Math.floor(s[2]),t}static min(t,s,e){return t[0]=Math.min(s[0],e[0]),t[1]=Math.min(s[1],e[1]),t[2]=Math.min(s[2],e[2]),t}static max(t,s,e){return t[0]=Math.max(s[0],e[0]),t[1]=Math.max(s[1],e[1]),t[2]=Math.max(s[2],e[2]),t}static scale(t,s,e){return t[0]=s[0]*e,t[1]=s[1]*e,t[2]=s[2]*e,t}static scaleAndAdd(t,s,e,n){return t[0]=s[0]+e[0]*n,t[1]=s[1]+e[1]*n,t[2]=s[2]+e[2]*n,t}static distance(t,s){const e=s[0]-t[0],n=s[1]-t[1],r=s[2]-t[2];return Math.sqrt(e*e+n*n+r*r)}static dist(t,s){return 0}static squaredDistance(t,s){const e=s[0]-t[0],n=s[1]-t[1],r=s[2]-t[2];return e*e+n*n+r*r}static sqrDist(t,s){return 0}static squaredLength(t){const s=t[0],e=t[1],n=t[2];return s*s+e*e+n*n}static sqrLen(t,s){return 0}static negate(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t}static inverse(t,s){return t[0]=1/s[0],t[1]=1/s[1],t[2]=1/s[2],t}static abs(t,s){return t[0]=Math.abs(s[0]),t[1]=Math.abs(s[1]),t[2]=Math.abs(s[2]),t}static normalize(t,s){const e=s[0],n=s[1],r=s[2];let c=e*e+n*n+r*r;return c>0&&(c=1/Math.sqrt(c)),t[0]=s[0]*c,t[1]=s[1]*c,t[2]=s[2]*c,t}static dot(t,s){return t[0]*s[0]+t[1]*s[1]+t[2]*s[2]}static cross(t,s,e){const n=s[0],r=s[1],c=s[2],i=e[0],a=e[1],l=e[2];return t[0]=r*l-c*a,t[1]=c*i-n*l,t[2]=n*a-r*i,t}static lerp(t,s,e,n){const r=s[0],c=s[1],i=s[2];return t[0]=r+n*(e[0]-r),t[1]=c+n*(e[1]-c),t[2]=i+n*(e[2]-i),t}static slerp(t,s,e,n){const r=Math.acos(Math.min(Math.max(I.dot(s,e),-1),1)),c=Math.sin(r),i=Math.sin((1-n)*r)/c,a=Math.sin(n*r)/c;return t[0]=i*s[0]+a*e[0],t[1]=i*s[1]+a*e[1],t[2]=i*s[2]+a*e[2],t}static hermite(t,s,e,n,r,c){const i=c*c,a=i*(2*c-3)+1,l=i*(c-2)+c,h=i*(c-1),o=i*(3-2*c);return t[0]=s[0]*a+e[0]*l+n[0]*h+r[0]*o,t[1]=s[1]*a+e[1]*l+n[1]*h+r[1]*o,t[2]=s[2]*a+e[2]*l+n[2]*h+r[2]*o,t}static bezier(t,s,e,n,r,c){const i=1-c,a=i*i,l=c*c,h=a*i,o=3*c*a,f=3*l*i,x=l*c;return t[0]=s[0]*h+e[0]*o+n[0]*f+r[0]*x,t[1]=s[1]*h+e[1]*o+n[1]*f+r[1]*x,t[2]=s[2]*h+e[2]*o+n[2]*f+r[2]*x,t}static transformMat4(t,s,e){const n=s[0],r=s[1],c=s[2],i=e[3]*n+e[7]*r+e[11]*c+e[15]||1;return t[0]=(e[0]*n+e[4]*r+e[8]*c+e[12])/i,t[1]=(e[1]*n+e[5]*r+e[9]*c+e[13])/i,t[2]=(e[2]*n+e[6]*r+e[10]*c+e[14])/i,t}static transformMat3(t,s,e){let n=s[0],r=s[1],c=s[2];return t[0]=n*e[0]+r*e[3]+c*e[6],t[1]=n*e[1]+r*e[4]+c*e[7],t[2]=n*e[2]+r*e[5]+c*e[8],t}static transformQuat(t,s,e){const n=e[0],r=e[1],c=e[2],i=e[3]*2,a=s[0],l=s[1],h=s[2],o=r*h-c*l,f=c*a-n*h,x=n*l-r*a,M=(r*x-c*f)*2,y=(c*o-n*x)*2,p=(n*f-r*o)*2;return t[0]=a+o*i+M,t[1]=l+f*i+y,t[2]=h+x*i+p,t}static rotateX(t,s,e,n){const r=e[1],c=e[2],i=s[1]-r,a=s[2]-c;return t[0]=s[0],t[1]=i*Math.cos(n)-a*Math.sin(n)+r,t[2]=i*Math.sin(n)+a*Math.cos(n)+c,t}static rotateY(t,s,e,n){const r=e[0],c=e[2],i=s[0]-r,a=s[2]-c;return t[0]=a*Math.sin(n)+i*Math.cos(n)+r,t[1]=s[1],t[2]=a*Math.cos(n)-i*Math.sin(n)+c,t}static rotateZ(t,s,e,n){const r=e[0],c=e[1],i=s[0]-r,a=s[1]-c;return t[0]=i*Math.cos(n)-a*Math.sin(n)+r,t[1]=i*Math.sin(n)+a*Math.cos(n)+c,t[2]=e[2],t}static angle(t,s){const e=t[0],n=t[1],r=t[2],c=s[0],i=s[1],a=s[2],l=Math.sqrt((e*e+n*n+r*r)*(c*c+i*i+a*a)),h=l&&I.dot(t,s)/l;return Math.acos(Math.min(Math.max(h,-1),1))}static zero(t){return t[0]=0,t[1]=0,t[2]=0,t}static str(t){return`Vec3(${t.join(", ")})`}static exactEquals(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]}static equals(t,s){const e=t[0],n=t[1],r=t[2],c=s[0],i=s[1],a=s[2];return Math.abs(e-c)<=V*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(n-i)<=V*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-a)<=V*Math.max(1,Math.abs(r),Math.abs(a))}};O(I,"BYTE_LENGTH",3*Float32Array.BYTES_PER_ELEMENT);let d=I;d.prototype.sub=d.prototype.subtract;d.prototype.mul=d.prototype.multiply;d.prototype.div=d.prototype.divide;d.prototype.dist=d.prototype.distance;d.prototype.sqrDist=d.prototype.squaredDistance;d.sub=d.subtract;d.mul=d.multiply;d.div=d.divide;d.dist=d.distance;d.sqrDist=d.squaredDistance;d.sqrLen=d.squaredLength;d.mag=d.magnitude;d.length=d.magnitude;d.len=d.magnitude;const nt=String.raw;class rt{constructor(t,s){O(this,"p");O(this,"target");O(this,"up");O(this,"aspect");O(this,"fov");O(this,"near");O(this,"far");O(this,"canvas");O(this,"lastMouse");O(this,"clicked");this.p=d.fromValues(0,-10,0),this.target=d.fromValues(0,10,0),this.up=d.fromValues(0,0,-1),this.aspect=s,this.fov=Math.PI/5,this.near=.1,this.far=100,this.canvas=t,this.lastMouse={x:0,y:0},this.clicked=!1,this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousedown",t=>{this.clicked=!0,this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY}),window.addEventListener("mouseup",()=>{this.clicked=!1}),this.canvas.addEventListener("mousemove",t=>{if(this.clicked){const s=(t.clientX-this.lastMouse.x)*.01,e=(t.clientY-this.lastMouse.y)*.01,n=this.target[0]+s,r=this.target[2]-e,c=d.sub(d.create(),d.fromValues(n,this.target[1],r),this.p);d.normalize(c,c);const i=d.fromValues(0,1,0),a=Math.acos(d.dot(c,i)),l=Math.PI/4;a<l&&(this.target[0]=n,this.target[2]=r),this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY}})}getViewProjectionMatrix(){const t=N.lookAt(N.create(),this.p,this.target,this.up),s=N.perspective(N.create(),this.fov,this.aspect,this.near,this.far);return new N(N.multiply(N.create(),s,t))}getInverseViewProjectionMatrix(){const t=this.getViewProjectionMatrix();return new N(N.invert(N.create(),t))}}class ct{constructor(){O(this,"p");O(this,"color");this.p=d.fromValues(100,100,100),this.color=d.fromValues(1,1,1)}}class it{constructor(t){O(this,"canvas");O(this,"context");O(this,"adapter");O(this,"device");O(this,"textureFormat");O(this,"camera");O(this,"light");O(this,"resize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight;const t=window.devicePixelRatio||1;if(this.canvas.width=window.innerWidth*t,this.canvas.height=window.innerHeight*t,this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.device&&this.textureFormat){const s={device:this.device,format:this.textureFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"opaque"};this.context.configure(s)}this.camera.aspect=this.canvas.width/this.canvas.height});O(this,"render",(t,s)=>{const n=this.device.createBuffer({size:176,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),r=new Float32Array(176/4);r.set(this.camera.getViewProjectionMatrix(),0),r.set(this.camera.getInverseViewProjectionMatrix(),16),r.set(this.camera.p,32),r.set(this.camera.target,36),r.set(this.light.p,40),this.device.queue.writeBuffer(n,0,r);const c=new Float32Array([-1,-1,.99,0,0,0,1,-1,.99,0,0,0,-1,1,.99,0,0,0,1,-1,.99,0,0,0,1,1,.99,0,0,0,-1,1,.99,0,0,0,0,.05,-.1,0,0,-1,-.05,-.05,-.1,0,0,-1,.05,-.05,-.1,0,0,-1,0,0,.2,.87,-.5,0,.05,-.05,-.1,.87,-.5,0,0,.05,-.1,.87,-.5,0,0,0,.2,-.87,-.5,0,0,.05,-.1,-.87,-.5,0,-.05,-.05,-.1,-.87,-.5,0,0,0,.2,0,-1,0,-.05,-.05,-.1,0,-1,0,.05,-.05,-.1,0,-1,0]),i=this.device.createBuffer({label:"vertex buffer",size:c.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(i,0,c);const a=6,l=new Float32Array(s.length*a);s.forEach((v,w)=>{l.set([v.p.x,v.p.y,v.p.z,v.v.x,v.v.y,v.v.z],w*a)});const h=this.device.createBuffer({label:"instance buffer",size:l.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(h,0,l);const o=this.device.createShaderModule({label:"main module",code:nt`
      @binding(0) @group(0) var<uniform> uniforms : Uniforms;
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
    
    @vertex fn vs(input: VertexInput) -> VertexOutput {
        var output: VertexOutput;
        
        // If this is a sky vertex
        if (input.normal.x == 0.0 && input.normal.y == 0.0 && input.normal.z == 0.0) {
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
    @fragment fn fs(input: VertexOutput) -> @location(0) vec4f {
      let sunDir = normalize(vec3f(0.5, 0.1, 0.0));
      let sunColor = vec3f(1.0, 0.4, 0.2);    
      let glowColor = vec3f(0.0, 0.0, 0.2);    
      let skyTop = vec3f(0.0, 0.0, 0.05);     
      let skyHorizon = vec3f(0.8, 0.2, 0.3);      
      
      if (length(input.normal) < 0.01) {
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
    }

      `}),f=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),x=this.device.createBindGroup({layout:f,entries:[{binding:0,resource:{buffer:n}}]}),M=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[f]}),vertex:{module:o,entryPoint:"vs",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}],stepMode:"vertex"},{arrayStride:6*4,attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:3*4,format:"float32x3"}],stepMode:"instance"}]},fragment:{module:o,entryPoint:"fs",targets:[{format:this.textureFormat}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),y=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),p={colorAttachments:[]};p.colorAttachments=[{view:this.context.getCurrentTexture().createView(),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}],p.depthStencilAttachment={view:y.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"};const m=this.device.createCommandEncoder(),g=m.beginRenderPass(p);g.setPipeline(M),g.setBindGroup(0,x),g.setVertexBuffer(0,i),g.setVertexBuffer(1,h),g.draw(18,s.length),g.end();const P=m.finish();this.device.queue.submit([P])});this.canvas=t,this.context=(s=>{if(s===null)throw new Error("Failed to get canvas context");return s})(this.canvas.getContext("webgpu")),this.camera=new rt(this.canvas,this.canvas.width/this.canvas.height),this.light=new ct}async init(){const t=navigator.gpu;if(!t)throw new Error("Failed to connect to GPU, your device or browser might not support webGPU yet.");this.adapter=(s=>{if(s===null)throw new Error("Failed to get adapter");return s})(await t.requestAdapter()),this.device=(s=>{if(s===null)throw new Error;return s})(await this.adapter.requestDevice()),this.device.lost.then(s=>{console.error(`WebGPU device was lost: ${s.message}`)}),this.textureFormat=navigator.gpu.getPreferredCanvasFormat(),this.resize(),window.addEventListener("resize",this.resize)}}const j=10,H=.5,Y=1,_=(S,t)=>{const s=Math.floor((S.x+1)*t/2),e=Math.floor((S.y+1)*t/2);return Math.floor((S.z+1)*t/2)*t*t+e*t+s},u=(S,t)=>1/(S/(2*t)-1)+2,at=(S,t,s)=>{const e=d.subtract(d.create(),t,S.p),n=d.mag(e);if(n<1e-4)return d.create();d.normalize(e,e),d.scale(e,e,Math.min(j,n));const r=d.subtract(d.create(),e,S.v);return d.mag(r)>s&&(d.normalize(r,r),d.scale(r,r,s)),new d(r)},Z=(S,t,s)=>{const e=d.scale(d.create(),t,j),n=d.subtract(d.create(),e,S.v);return d.mag(n)>s&&(d.normalize(n,n),d.scale(n,n,s)),new d(n)};class lt{constructor(t,s){O(this,"params");O(this,"bounds");O(this,"rEst",20);O(this,"step",async(t,s)=>{this.update(s,t)});this.params=t,this.bounds=s}avoidWalls(t){const s=this.bounds,e=t.p,n=d.fromValues(s.x.min-e[0],s.y.min-e[1],s.z.min-e[2]),r=d.fromValues(e[0]-s.x.max,e[1]-s.y.max,e[2]-s.z.max),c=d.create();for(let i=0;i<3;i++)c[i]=Math.max(n[i],r[i]);if(Math.max(c[0],c[1],c[2])>0){const i=d.create();for(let l=0;l<3;l++)c[l]>0&&(i[l]=-Math.sign(r[l]>0?1:-1)*c[l]);const a=new d;return d.scale(a,d.normalize(d.create(),i),Y),a}return d.create()}update(t,s){const e=Math.ceil(Math.sqrt(t.length));t.sort((n,r)=>_(n.p,e)-_(r.p,e));for(let n=0;n<t.length;n++){const r=t[n],c=d.create(),i=d.create(),a=d.create();let l=Math.max(0,n-this.rEst),h=Math.min(t.length-1,n+this.rEst),o=0,f=0,x=0;for(let p=l;p<=h;p++){if(n===p)continue;const m=d.distance(t[n].p,t[p].p);if(m>this.params.range.v)continue;d.add(c,c,t[p].v),o++;const g=u(m,this.params.range.v);if(d.scaleAndAdd(i,i,t[p].p,g),x+=g,m<this.params.sepRange.v){f++;const P=u(m,this.params.sepRange.v),v=d.subtract(d.create(),t[n].p,t[p].p);d.normalize(v,v),d.scaleAndAdd(a,a,v,P)}}o>0&&(d.scale(c,c,1/o),d.normalize(c,c),d.scaleAndAdd(r.v,r.v,Z(r,c,Y),this.params.align.v*s),d.scale(i,i,1/x),d.scaleAndAdd(r.v,r.v,at(r,i,Y),this.params.coh.v*s)),f>0&&(d.normalize(a,a),d.scaleAndAdd(r.v,r.v,Z(r,a,Y),this.params.sep.v*s));const M=this.avoidWalls(r);d.mag(M)>1e-4&&(d.normalize(M,M),d.scaleAndAdd(r.v,r.v,Z(r,M,Y*2),this.params.sep.v*3*s),d.mag(r.v)>H&&d.dot(d.normalize(d.create(),r.v),M)<0&&d.scale(r.v,r.v,.8));const y=d.mag(r.v);y>j?d.scale(r.v,r.v,j/y):y<H&&d.scale(r.v,r.v,H/y),d.scaleAndAdd(r.p,r.p,r.v,s)}}}const tt=document.createElement("canvas");document.querySelector("#app").appendChild(tt);const W=(S,t)=>(t-S)*Math.random()+S,$=S=>{const t=Math.random()*Math.PI*2,s=Math.random()*Math.PI;let e=new d(Math.sin(s)*Math.cos(t),Math.cos(s),Math.sin(s)*Math.sin(t));return{p:new d(W(S.x.min,S.x.max),W(S.x.min,S.x.max),W(S.x.min,S.x.max)),v:e,target_v:new d(e)}},X={boids:{label:"# Boids",v:1e3,min:1,max:5e3},range:{label:"Range",v:4},coh:{label:"Cohesion",v:1},align:{label:"Alignment",v:1},sep:{label:"Separation",v:2},sepRange:{label:"Sep. Range",v:.5}},ht=async()=>{console.log("Start!");let S=30,t={x:{min:-30,max:S},y:{min:5,max:40},z:{min:-30,max:S}},s=Array.from({length:X.boids.v}).map(()=>$(t)),e={w:window.innerWidth,h:window.innerHeight},n={x:0,y:0};const r=document.createElement("div");r.className="controlsParent";let c=document.createElement("button");c.className="resetBtn",window.addEventListener("resize",i=>{e={w:window.innerWidth,h:window.innerHeight}}),window.addEventListener("mousemove",i=>{n={x:i.screenX,y:i.screenY},n.x+160>e.w&&(r.classList.add("open"),c.classList.add("open")),n.x<e.w-250&&(r.classList.remove("open"),c.classList.remove("open"))});try{let i=X;document.querySelector("#app").appendChild(r);for(const y of Object.entries(i)){const p=y[1],m=document.createElement("input");m.type="range",m.min=String(p.min??"0"),m.max=String(p.max??"10"),m.step=p.max>10?"1":"0.1",m.value=String(p.v);const g=document.createElement("span");g.className="sliderValue",g.textContent=p.v;const P=document.createElement("div");P.className="rangeHolder",m.addEventListener("input",({target:w})=>{let z=w.value;p.v=z,g.innerText=z});const v=document.createElement("label");v.textContent=p.label,v.setAttribute("for","myElement"),r.appendChild(v),P.appendChild(m),r.appendChild(P),P.appendChild(g)}c.innerText="Reset",c.addEventListener("click",()=>{i=X,s=Array.from({length:X.boids.v}).map(()=>$(t))}),r.appendChild(c);const a=new lt(i,t),l=new it(tt);await l.init();const h=document.createElement("p");h.className="fps",document.querySelector("#app").appendChild(h);const o=performance.now();let f=o,x=[];const M=y=>{const p=(y-f)/1e3,m=i.boids.v;s.length>m?s=s.slice(0,m):s.push(...Array.from({length:m-s.length}).map(()=>$(t))),a.step(p,s),l.render(y-o,s),x.push(1/p),x.length>20&&x.shift(),h.innerText=`${Math.round(x.reduce((g,P)=>g+P,0)/x.length)} fps`,f=y,requestAnimationFrame(g=>M(g))};requestAnimationFrame(M)}catch(i){console.error(i)}};ht();
