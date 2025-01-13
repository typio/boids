var u=Object.defineProperty;var tt=(q,t,s)=>t in q?u(q,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):q[t]=s;var L=(q,t,s)=>tt(q,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const N=1e-6,$=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),F=class F extends Float32Array{constructor(...t){switch(t.length){case 16:super(t);break;case 2:super(t[0],t[1],16);break;case 1:const s=t[0];typeof s=="number"?super([s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s]):super(s,0,16);break;default:super($);break}}get str(){return F.str(this)}copy(t){return this.set(t),this}identity(){return this.set($),this}multiply(t){return F.multiply(this,this,t)}mul(t){return this}transpose(){return F.transpose(this,this)}invert(){return F.invert(this,this)}translate(t){return F.translate(this,this,t)}rotate(t,s){return F.rotate(this,this,t,s)}scale(t){return F.scale(this,this,t)}rotateX(t){return F.rotateX(this,this,t)}rotateY(t){return F.rotateY(this,this,t)}rotateZ(t){return F.rotateZ(this,this,t)}perspectiveNO(t,s,e,n){return F.perspectiveNO(this,t,s,e,n)}perspectiveZO(t,s,e,n){return F.perspectiveZO(this,t,s,e,n)}orthoNO(t,s,e,n,r,c){return F.orthoNO(this,t,s,e,n,r,c)}orthoZO(t,s,e,n,r,c){return F.orthoZO(this,t,s,e,n,r,c)}static create(){return new F}static clone(t){return new F(t)}static copy(t,s){return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],t}static fromValues(...t){return new F(...t)}static set(t,...s){return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],t}static identity(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static transpose(t,s){if(t===s){const e=s[1],n=s[2],r=s[3],c=s[6],i=s[7],a=s[11];t[1]=s[4],t[2]=s[8],t[3]=s[12],t[4]=e,t[6]=s[9],t[7]=s[13],t[8]=n,t[9]=c,t[11]=s[14],t[12]=r,t[13]=i,t[14]=a}else t[0]=s[0],t[1]=s[4],t[2]=s[8],t[3]=s[12],t[4]=s[1],t[5]=s[5],t[6]=s[9],t[7]=s[13],t[8]=s[2],t[9]=s[6],t[10]=s[10],t[11]=s[14],t[12]=s[3],t[13]=s[7],t[14]=s[11],t[15]=s[15];return t}static invert(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7],o=s[8],m=s[9],M=s[10],d=s[11],y=s[12],f=s[13],x=s[14],g=s[15],P=e*a-n*i,v=e*l-r*i,w=e*h-c*i,b=n*l-r*a,z=n*h-c*a,S=r*h-c*l,T=o*f-m*y,V=o*x-M*y,E=o*g-d*y,C=m*x-M*f,O=m*g-d*f,D=M*g-d*x;let A=P*D-v*O+w*C+b*E-z*V+S*T;return A?(A=1/A,t[0]=(a*D-l*O+h*C)*A,t[1]=(r*O-n*D-c*C)*A,t[2]=(f*S-x*z+g*b)*A,t[3]=(M*z-m*S-d*b)*A,t[4]=(l*E-i*D-h*V)*A,t[5]=(e*D-r*E+c*V)*A,t[6]=(x*w-y*S-g*v)*A,t[7]=(o*S-M*w+d*v)*A,t[8]=(i*O-a*E+h*T)*A,t[9]=(n*E-e*O-c*T)*A,t[10]=(y*z-f*w+g*P)*A,t[11]=(m*w-o*z-d*P)*A,t[12]=(a*V-i*C-l*T)*A,t[13]=(e*C-n*V+r*T)*A,t[14]=(f*v-y*b-x*P)*A,t[15]=(o*b-m*v+M*P)*A,t):null}static adjoint(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7],o=s[8],m=s[9],M=s[10],d=s[11],y=s[12],f=s[13],x=s[14],g=s[15],P=e*a-n*i,v=e*l-r*i,w=e*h-c*i,b=n*l-r*a,z=n*h-c*a,S=r*h-c*l,T=o*f-m*y,V=o*x-M*y,E=o*g-d*y,C=m*x-M*f,O=m*g-d*f,D=M*g-d*x;return t[0]=a*D-l*O+h*C,t[1]=r*O-n*D-c*C,t[2]=f*S-x*z+g*b,t[3]=M*z-m*S-d*b,t[4]=l*E-i*D-h*V,t[5]=e*D-r*E+c*V,t[6]=x*w-y*S-g*v,t[7]=o*S-M*w+d*v,t[8]=i*O-a*E+h*T,t[9]=n*E-e*O-c*T,t[10]=y*z-f*w+g*P,t[11]=m*w-o*z-d*P,t[12]=a*V-i*C-l*T,t[13]=e*C-n*V+r*T,t[14]=f*v-y*b-x*P,t[15]=o*b-m*v+M*P,t}static determinant(t){const s=t[0],e=t[1],n=t[2],r=t[3],c=t[4],i=t[5],a=t[6],l=t[7],h=t[8],o=t[9],m=t[10],M=t[11],d=t[12],y=t[13],f=t[14],x=t[15],g=s*i-e*c,P=s*a-n*c,v=e*a-n*i,w=h*y-o*d,b=h*f-m*d,z=o*f-m*y,S=s*z-e*b+n*w,T=c*z-i*b+a*w,V=h*v-o*P+m*g,E=d*v-y*P+f*g;return l*S-r*T+x*V-M*E}static multiply(t,s,e){const n=s[0],r=s[1],c=s[2],i=s[3],a=s[4],l=s[5],h=s[6],o=s[7],m=s[8],M=s[9],d=s[10],y=s[11],f=s[12],x=s[13],g=s[14],P=s[15];let v=e[0],w=e[1],b=e[2],z=e[3];return t[0]=v*n+w*a+b*m+z*f,t[1]=v*r+w*l+b*M+z*x,t[2]=v*c+w*h+b*d+z*g,t[3]=v*i+w*o+b*y+z*P,v=e[4],w=e[5],b=e[6],z=e[7],t[4]=v*n+w*a+b*m+z*f,t[5]=v*r+w*l+b*M+z*x,t[6]=v*c+w*h+b*d+z*g,t[7]=v*i+w*o+b*y+z*P,v=e[8],w=e[9],b=e[10],z=e[11],t[8]=v*n+w*a+b*m+z*f,t[9]=v*r+w*l+b*M+z*x,t[10]=v*c+w*h+b*d+z*g,t[11]=v*i+w*o+b*y+z*P,v=e[12],w=e[13],b=e[14],z=e[15],t[12]=v*n+w*a+b*m+z*f,t[13]=v*r+w*l+b*M+z*x,t[14]=v*c+w*h+b*d+z*g,t[15]=v*i+w*o+b*y+z*P,t}static mul(t,s,e){return t}static translate(t,s,e){const n=e[0],r=e[1],c=e[2];if(s===t)t[12]=s[0]*n+s[4]*r+s[8]*c+s[12],t[13]=s[1]*n+s[5]*r+s[9]*c+s[13],t[14]=s[2]*n+s[6]*r+s[10]*c+s[14],t[15]=s[3]*n+s[7]*r+s[11]*c+s[15];else{const i=s[0],a=s[1],l=s[2],h=s[3],o=s[4],m=s[5],M=s[6],d=s[7],y=s[8],f=s[9],x=s[10],g=s[11];t[0]=i,t[1]=a,t[2]=l,t[3]=h,t[4]=o,t[5]=m,t[6]=M,t[7]=d,t[8]=y,t[9]=f,t[10]=x,t[11]=g,t[12]=i*n+o*r+y*c+s[12],t[13]=a*n+m*r+f*c+s[13],t[14]=l*n+M*r+x*c+s[14],t[15]=h*n+d*r+g*c+s[15]}return t}static scale(t,s,e){const n=e[0],r=e[1],c=e[2];return t[0]=s[0]*n,t[1]=s[1]*n,t[2]=s[2]*n,t[3]=s[3]*n,t[4]=s[4]*r,t[5]=s[5]*r,t[6]=s[6]*r,t[7]=s[7]*r,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=s[11]*c,t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],t}static rotate(t,s,e,n){let r=n[0],c=n[1],i=n[2],a=Math.sqrt(r*r+c*c+i*i);if(a<N)return null;a=1/a,r*=a,c*=a,i*=a;const l=Math.sin(e),h=Math.cos(e),o=1-h,m=s[0],M=s[1],d=s[2],y=s[3],f=s[4],x=s[5],g=s[6],P=s[7],v=s[8],w=s[9],b=s[10],z=s[11],S=r*r*o+h,T=c*r*o+i*l,V=i*r*o-c*l,E=r*c*o-i*l,C=c*c*o+h,O=i*c*o+r*l,D=r*i*o+c*l,A=c*i*o-r*l,U=i*i*o+h;return t[0]=m*S+f*T+v*V,t[1]=M*S+x*T+w*V,t[2]=d*S+g*T+b*V,t[3]=y*S+P*T+z*V,t[4]=m*E+f*C+v*O,t[5]=M*E+x*C+w*O,t[6]=d*E+g*C+b*O,t[7]=y*E+P*C+z*O,t[8]=m*D+f*A+v*U,t[9]=M*D+x*A+w*U,t[10]=d*D+g*A+b*U,t[11]=y*D+P*A+z*U,s!==t&&(t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t}static rotateX(t,s,e){let n=Math.sin(e),r=Math.cos(e),c=s[4],i=s[5],a=s[6],l=s[7],h=s[8],o=s[9],m=s[10],M=s[11];return s!==t&&(t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t[4]=c*r+h*n,t[5]=i*r+o*n,t[6]=a*r+m*n,t[7]=l*r+M*n,t[8]=h*r-c*n,t[9]=o*r-i*n,t[10]=m*r-a*n,t[11]=M*r-l*n,t}static rotateY(t,s,e){let n=Math.sin(e),r=Math.cos(e),c=s[0],i=s[1],a=s[2],l=s[3],h=s[8],o=s[9],m=s[10],M=s[11];return s!==t&&(t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t[0]=c*r-h*n,t[1]=i*r-o*n,t[2]=a*r-m*n,t[3]=l*r-M*n,t[8]=c*n+h*r,t[9]=i*n+o*r,t[10]=a*n+m*r,t[11]=l*n+M*r,t}static rotateZ(t,s,e){let n=Math.sin(e),r=Math.cos(e),c=s[0],i=s[1],a=s[2],l=s[3],h=s[4],o=s[5],m=s[6],M=s[7];return s!==t&&(t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15]),t[0]=c*r+h*n,t[1]=i*r+o*n,t[2]=a*r+m*n,t[3]=l*r+M*n,t[4]=h*r-c*n,t[5]=o*r-i*n,t[6]=m*r-a*n,t[7]=M*r-l*n,t}static fromTranslation(t,s){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=s[0],t[13]=s[1],t[14]=s[2],t[15]=1,t}static fromScaling(t,s){return t[0]=s[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=s[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromRotation(t,s,e){let n=e[0],r=e[1],c=e[2],i=Math.sqrt(n*n+r*r+c*c);if(i<N)return null;i=1/i,n*=i,r*=i,c*=i;const a=Math.sin(s),l=Math.cos(s),h=1-l;return t[0]=n*n*h+l,t[1]=r*n*h+c*a,t[2]=c*n*h-r*a,t[3]=0,t[4]=n*r*h-c*a,t[5]=r*r*h+l,t[6]=c*r*h+n*a,t[7]=0,t[8]=n*c*h+r*a,t[9]=r*c*h-n*a,t[10]=c*c*h+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromXRotation(t,s){let e=Math.sin(s),n=Math.cos(s);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=e,t[7]=0,t[8]=0,t[9]=-e,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromYRotation(t,s){let e=Math.sin(s),n=Math.cos(s);return t[0]=n,t[1]=0,t[2]=-e,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=e,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromZRotation(t,s){const e=Math.sin(s),n=Math.cos(s);return t[0]=n,t[1]=e,t[2]=0,t[3]=0,t[4]=-e,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static fromRotationTranslation(t,s,e){const n=s[0],r=s[1],c=s[2],i=s[3],a=n+n,l=r+r,h=c+c,o=n*a,m=n*l,M=n*h,d=r*l,y=r*h,f=c*h,x=i*a,g=i*l,P=i*h;return t[0]=1-(d+f),t[1]=m+P,t[2]=M-g,t[3]=0,t[4]=m-P,t[5]=1-(o+f),t[6]=y+x,t[7]=0,t[8]=M+g,t[9]=y-x,t[10]=1-(o+d),t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}static fromQuat2(t,s){const e=-s[0],n=-s[1],r=-s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7];let o=e*e+n*n+r*r+c*c;return o>0?(I[0]=(i*c+h*e+a*r-l*n)*2/o,I[1]=(a*c+h*n+l*e-i*r)*2/o,I[2]=(l*c+h*r+i*n-a*e)*2/o):(I[0]=(i*c+h*e+a*r-l*n)*2,I[1]=(a*c+h*n+l*e-i*r)*2,I[2]=(l*c+h*r+i*n-a*e)*2),F.fromRotationTranslation(t,s,I),t}static normalFromMat4(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=s[4],a=s[5],l=s[6],h=s[7],o=s[8],m=s[9],M=s[10],d=s[11],y=s[12],f=s[13],x=s[14],g=s[15],P=e*a-n*i,v=e*l-r*i,w=e*h-c*i,b=n*l-r*a,z=n*h-c*a,S=r*h-c*l,T=o*f-m*y,V=o*x-M*y,E=o*g-d*y,C=m*x-M*f,O=m*g-d*f,D=M*g-d*x;let A=P*D-v*O+w*C+b*E-z*V+S*T;return A?(A=1/A,t[0]=(a*D-l*O+h*C)*A,t[1]=(l*E-i*D-h*V)*A,t[2]=(i*O-a*E+h*T)*A,t[3]=0,t[4]=(r*O-n*D-c*C)*A,t[5]=(e*D-r*E+c*V)*A,t[6]=(n*E-e*O-c*T)*A,t[7]=0,t[8]=(f*S-x*z+g*b)*A,t[9]=(x*w-y*S-g*v)*A,t[10]=(y*z-f*w+g*P)*A,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t):null}static normalFromMat4Fast(t,s){const e=s[0],n=s[1],r=s[2],c=s[4],i=s[5],a=s[6],l=s[8],h=s[9],o=s[10];return t[0]=i*o-o*h,t[1]=a*l-l*o,t[2]=c*h-h*l,t[3]=0,t[4]=h*r-o*n,t[5]=o*e-l*r,t[6]=l*n-h*e,t[7]=0,t[8]=n*a-r*i,t[9]=r*c-e*a,t[10]=e*i-n*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static getTranslation(t,s){return t[0]=s[12],t[1]=s[13],t[2]=s[14],t}static getScaling(t,s){const e=s[0],n=s[1],r=s[2],c=s[4],i=s[5],a=s[6],l=s[8],h=s[9],o=s[10];return t[0]=Math.sqrt(e*e+n*n+r*r),t[1]=Math.sqrt(c*c+i*i+a*a),t[2]=Math.sqrt(l*l+h*h+o*o),t}static getRotation(t,s){F.getScaling(I,s);const e=1/I[0],n=1/I[1],r=1/I[2],c=s[0]*e,i=s[1]*n,a=s[2]*r,l=s[4]*e,h=s[5]*n,o=s[6]*r,m=s[8]*e,M=s[9]*n,d=s[10]*r,y=c+h+d;let f=0;return y>0?(f=Math.sqrt(y+1)*2,t[3]=.25*f,t[0]=(o-M)/f,t[1]=(m-a)/f,t[2]=(i-l)/f):c>h&&c>d?(f=Math.sqrt(1+c-h-d)*2,t[3]=(o-M)/f,t[0]=.25*f,t[1]=(i+l)/f,t[2]=(m+a)/f):h>d?(f=Math.sqrt(1+h-c-d)*2,t[3]=(m-a)/f,t[0]=(i+l)/f,t[1]=.25*f,t[2]=(o+M)/f):(f=Math.sqrt(1+d-c-h)*2,t[3]=(i-l)/f,t[0]=(m+a)/f,t[1]=(o+M)/f,t[2]=.25*f),t}static decompose(t,s,e,n){s[0]=n[12],s[1]=n[13],s[2]=n[14];const r=n[0],c=n[1],i=n[2],a=n[4],l=n[5],h=n[6],o=n[8],m=n[9],M=n[10];e[0]=Math.sqrt(r*r+c*c+i*i),e[1]=Math.sqrt(a*a+l*l+h*h),e[2]=Math.sqrt(o*o+m*m+M*M);const d=1/e[0],y=1/e[1],f=1/e[2],x=r*d,g=c*y,P=i*f,v=a*d,w=l*y,b=h*f,z=o*d,S=m*y,T=M*f,V=x+w+T;let E=0;return V>0?(E=Math.sqrt(V+1)*2,t[3]=.25*E,t[0]=(b-S)/E,t[1]=(z-P)/E,t[2]=(g-v)/E):x>w&&x>T?(E=Math.sqrt(1+x-w-T)*2,t[3]=(b-S)/E,t[0]=.25*E,t[1]=(g+v)/E,t[2]=(z+P)/E):w>T?(E=Math.sqrt(1+w-x-T)*2,t[3]=(z-P)/E,t[0]=(g+v)/E,t[1]=.25*E,t[2]=(b+S)/E):(E=Math.sqrt(1+T-x-w)*2,t[3]=(g-v)/E,t[0]=(z+P)/E,t[1]=(b+S)/E,t[2]=.25*E),t}static fromRotationTranslationScale(t,s,e,n){const r=s[0],c=s[1],i=s[2],a=s[3],l=r+r,h=c+c,o=i+i,m=r*l,M=r*h,d=r*o,y=c*h,f=c*o,x=i*o,g=a*l,P=a*h,v=a*o,w=n[0],b=n[1],z=n[2];return t[0]=(1-(y+x))*w,t[1]=(M+v)*w,t[2]=(d-P)*w,t[3]=0,t[4]=(M-v)*b,t[5]=(1-(m+x))*b,t[6]=(f+g)*b,t[7]=0,t[8]=(d+P)*z,t[9]=(f-g)*z,t[10]=(1-(m+y))*z,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}static fromRotationTranslationScaleOrigin(t,s,e,n,r){const c=s[0],i=s[1],a=s[2],l=s[3],h=c+c,o=i+i,m=a+a,M=c*h,d=c*o,y=c*m,f=i*o,x=i*m,g=a*m,P=l*h,v=l*o,w=l*m,b=n[0],z=n[1],S=n[2],T=r[0],V=r[1],E=r[2],C=(1-(f+g))*b,O=(d+w)*b,D=(y-v)*b,A=(d-w)*z,U=(1-(M+g))*z,G=(x+P)*z,k=(y+v)*S,Z=(x-P)*S,W=(1-(M+f))*S;return t[0]=C,t[1]=O,t[2]=D,t[3]=0,t[4]=A,t[5]=U,t[6]=G,t[7]=0,t[8]=k,t[9]=Z,t[10]=W,t[11]=0,t[12]=e[0]+T-(C*T+A*V+k*E),t[13]=e[1]+V-(O*T+U*V+Z*E),t[14]=e[2]+E-(D*T+G*V+W*E),t[15]=1,t}static fromQuat(t,s){const e=s[0],n=s[1],r=s[2],c=s[3],i=e+e,a=n+n,l=r+r,h=e*i,o=n*i,m=n*a,M=r*i,d=r*a,y=r*l,f=c*i,x=c*a,g=c*l;return t[0]=1-m-y,t[1]=o+g,t[2]=M-x,t[3]=0,t[4]=o-g,t[5]=1-h-y,t[6]=d+f,t[7]=0,t[8]=M+x,t[9]=d-f,t[10]=1-h-m,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}static frustumNO(t,s,e,n,r,c,i=1/0){const a=1/(e-s),l=1/(r-n);if(t[0]=c*2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c*2*l,t[6]=0,t[7]=0,t[8]=(e+s)*a,t[9]=(r+n)*l,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,i!=null&&i!==1/0){const h=1/(c-i);t[10]=(i+c)*h,t[14]=2*i*c*h}else t[10]=-1,t[14]=-2*c;return t}static frustum(t,s,e,n,r,c,i=1/0){return t}static frustumZO(t,s,e,n,r,c,i=1/0){const a=1/(e-s),l=1/(r-n);if(t[0]=c*2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c*2*l,t[6]=0,t[7]=0,t[8]=(e+s)*a,t[9]=(r+n)*l,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,i!=null&&i!==1/0){const h=1/(c-i);t[10]=i*h,t[14]=i*c*h}else t[10]=-1,t[14]=-c;return t}static perspectiveNO(t,s,e,n,r=1/0){const c=1/Math.tan(s/2);if(t[0]=c/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,r!=null&&r!==1/0){const i=1/(n-r);t[10]=(r+n)*i,t[14]=2*r*n*i}else t[10]=-1,t[14]=-2*n;return t}static perspective(t,s,e,n,r=1/0){return t}static perspectiveZO(t,s,e,n,r=1/0){const c=1/Math.tan(s/2);if(t[0]=c/e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,r!=null&&r!==1/0){const i=1/(n-r);t[10]=r*i,t[14]=r*n*i}else t[10]=-1,t[14]=-n;return t}static perspectiveFromFieldOfView(t,s,e,n){const r=Math.tan(s.upDegrees*Math.PI/180),c=Math.tan(s.downDegrees*Math.PI/180),i=Math.tan(s.leftDegrees*Math.PI/180),a=Math.tan(s.rightDegrees*Math.PI/180),l=2/(i+a),h=2/(r+c);return t[0]=l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((i-a)*l*.5),t[9]=(r-c)*h*.5,t[10]=n/(e-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*e/(e-n),t[15]=0,t}static orthoNO(t,s,e,n,r,c,i){const a=1/(s-e),l=1/(n-r),h=1/(c-i);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(s+e)*a,t[13]=(r+n)*l,t[14]=(i+c)*h,t[15]=1,t}static ortho(t,s,e,n,r,c,i){return t}static orthoZO(t,s,e,n,r,c,i){const a=1/(s-e),l=1/(n-r),h=1/(c-i);return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=h,t[11]=0,t[12]=(s+e)*a,t[13]=(r+n)*l,t[14]=c*h,t[15]=1,t}static lookAt(t,s,e,n){const r=s[0],c=s[1],i=s[2],a=n[0],l=n[1],h=n[2],o=e[0],m=e[1],M=e[2];if(Math.abs(r-o)<N&&Math.abs(c-m)<N&&Math.abs(i-M)<N)return F.identity(t);let d=r-o,y=c-m,f=i-M,x=1/Math.sqrt(d*d+y*y+f*f);d*=x,y*=x,f*=x;let g=l*f-h*y,P=h*d-a*f,v=a*y-l*d;x=Math.sqrt(g*g+P*P+v*v),x?(x=1/x,g*=x,P*=x,v*=x):(g=0,P=0,v=0);let w=y*v-f*P,b=f*g-d*v,z=d*P-y*g;return x=Math.sqrt(w*w+b*b+z*z),x?(x=1/x,w*=x,b*=x,z*=x):(w=0,b=0,z=0),t[0]=g,t[1]=w,t[2]=d,t[3]=0,t[4]=P,t[5]=b,t[6]=y,t[7]=0,t[8]=v,t[9]=z,t[10]=f,t[11]=0,t[12]=-(g*r+P*c+v*i),t[13]=-(w*r+b*c+z*i),t[14]=-(d*r+y*c+f*i),t[15]=1,t}static targetTo(t,s,e,n){const r=s[0],c=s[1],i=s[2],a=n[0],l=n[1],h=n[2];let o=r-e[0],m=c-e[1],M=i-e[2],d=o*o+m*m+M*M;d>0&&(d=1/Math.sqrt(d),o*=d,m*=d,M*=d);let y=l*M-h*m,f=h*o-a*M,x=a*m-l*o;return d=y*y+f*f+x*x,d>0&&(d=1/Math.sqrt(d),y*=d,f*=d,x*=d),t[0]=y,t[1]=f,t[2]=x,t[3]=0,t[4]=m*x-M*f,t[5]=M*y-o*x,t[6]=o*f-m*y,t[7]=0,t[8]=o,t[9]=m,t[10]=M,t[11]=0,t[12]=r,t[13]=c,t[14]=i,t[15]=1,t}static frob(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]+t[4]*t[4]+t[5]*t[5]+t[6]*t[6]+t[7]*t[7]+t[8]*t[8]+t[9]*t[9]+t[10]*t[10]+t[11]*t[11]+t[12]*t[12]+t[13]*t[13]+t[14]*t[14]+t[15]*t[15])}static add(t,s,e){return t[0]=s[0]+e[0],t[1]=s[1]+e[1],t[2]=s[2]+e[2],t[3]=s[3]+e[3],t[4]=s[4]+e[4],t[5]=s[5]+e[5],t[6]=s[6]+e[6],t[7]=s[7]+e[7],t[8]=s[8]+e[8],t[9]=s[9]+e[9],t[10]=s[10]+e[10],t[11]=s[11]+e[11],t[12]=s[12]+e[12],t[13]=s[13]+e[13],t[14]=s[14]+e[14],t[15]=s[15]+e[15],t}static subtract(t,s,e){return t[0]=s[0]-e[0],t[1]=s[1]-e[1],t[2]=s[2]-e[2],t[3]=s[3]-e[3],t[4]=s[4]-e[4],t[5]=s[5]-e[5],t[6]=s[6]-e[6],t[7]=s[7]-e[7],t[8]=s[8]-e[8],t[9]=s[9]-e[9],t[10]=s[10]-e[10],t[11]=s[11]-e[11],t[12]=s[12]-e[12],t[13]=s[13]-e[13],t[14]=s[14]-e[14],t[15]=s[15]-e[15],t}static sub(t,s,e){return t}static multiplyScalar(t,s,e){return t[0]=s[0]*e,t[1]=s[1]*e,t[2]=s[2]*e,t[3]=s[3]*e,t[4]=s[4]*e,t[5]=s[5]*e,t[6]=s[6]*e,t[7]=s[7]*e,t[8]=s[8]*e,t[9]=s[9]*e,t[10]=s[10]*e,t[11]=s[11]*e,t[12]=s[12]*e,t[13]=s[13]*e,t[14]=s[14]*e,t[15]=s[15]*e,t}static multiplyScalarAndAdd(t,s,e,n){return t[0]=s[0]+e[0]*n,t[1]=s[1]+e[1]*n,t[2]=s[2]+e[2]*n,t[3]=s[3]+e[3]*n,t[4]=s[4]+e[4]*n,t[5]=s[5]+e[5]*n,t[6]=s[6]+e[6]*n,t[7]=s[7]+e[7]*n,t[8]=s[8]+e[8]*n,t[9]=s[9]+e[9]*n,t[10]=s[10]+e[10]*n,t[11]=s[11]+e[11]*n,t[12]=s[12]+e[12]*n,t[13]=s[13]+e[13]*n,t[14]=s[14]+e[14]*n,t[15]=s[15]+e[15]*n,t}static exactEquals(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]&&t[3]===s[3]&&t[4]===s[4]&&t[5]===s[5]&&t[6]===s[6]&&t[7]===s[7]&&t[8]===s[8]&&t[9]===s[9]&&t[10]===s[10]&&t[11]===s[11]&&t[12]===s[12]&&t[13]===s[13]&&t[14]===s[14]&&t[15]===s[15]}static equals(t,s){const e=t[0],n=t[1],r=t[2],c=t[3],i=t[4],a=t[5],l=t[6],h=t[7],o=t[8],m=t[9],M=t[10],d=t[11],y=t[12],f=t[13],x=t[14],g=t[15],P=s[0],v=s[1],w=s[2],b=s[3],z=s[4],S=s[5],T=s[6],V=s[7],E=s[8],C=s[9],O=s[10],D=s[11],A=s[12],U=s[13],G=s[14],k=s[15];return Math.abs(e-P)<=N*Math.max(1,Math.abs(e),Math.abs(P))&&Math.abs(n-v)<=N*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(r-w)<=N*Math.max(1,Math.abs(r),Math.abs(w))&&Math.abs(c-b)<=N*Math.max(1,Math.abs(c),Math.abs(b))&&Math.abs(i-z)<=N*Math.max(1,Math.abs(i),Math.abs(z))&&Math.abs(a-S)<=N*Math.max(1,Math.abs(a),Math.abs(S))&&Math.abs(l-T)<=N*Math.max(1,Math.abs(l),Math.abs(T))&&Math.abs(h-V)<=N*Math.max(1,Math.abs(h),Math.abs(V))&&Math.abs(o-E)<=N*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(m-C)<=N*Math.max(1,Math.abs(m),Math.abs(C))&&Math.abs(M-O)<=N*Math.max(1,Math.abs(M),Math.abs(O))&&Math.abs(d-D)<=N*Math.max(1,Math.abs(d),Math.abs(D))&&Math.abs(y-A)<=N*Math.max(1,Math.abs(y),Math.abs(A))&&Math.abs(f-U)<=N*Math.max(1,Math.abs(f),Math.abs(U))&&Math.abs(x-G)<=N*Math.max(1,Math.abs(x),Math.abs(G))&&Math.abs(g-k)<=N*Math.max(1,Math.abs(g),Math.abs(k))}static str(t){return`Mat4(${t.join(", ")})`}};L(F,"BYTE_LENGTH",16*Float32Array.BYTES_PER_ELEMENT);let B=F;const I=new Float32Array(3);B.prototype.mul=B.prototype.multiply;B.sub=B.subtract;B.mul=B.multiply;B.frustum=B.frustumNO;B.perspective=B.perspectiveNO;B.ortho=B.orthoNO;const R=class R extends Float32Array{constructor(...t){switch(t.length){case 3:super(t);break;case 2:super(t[0],t[1],3);break;case 1:{const s=t[0];typeof s=="number"?super([s,s,s]):super(s,0,3);break}default:super(3);break}}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}get z(){return this[2]}set z(t){this[2]=t}get r(){return this[0]}set r(t){this[0]=t}get g(){return this[1]}set g(t){this[1]=t}get b(){return this[2]}set b(t){this[2]=t}get magnitude(){const t=this[0],s=this[1],e=this[2];return Math.sqrt(t*t+s*s+e*e)}get mag(){return this.magnitude}get squaredMagnitude(){const t=this[0],s=this[1],e=this[2];return t*t+s*s+e*e}get sqrMag(){return this.squaredMagnitude}get str(){return R.str(this)}copy(t){return this.set(t),this}add(t){return this[0]+=t[0],this[1]+=t[1],this[2]+=t[2],this}subtract(t){return this[0]-=t[0],this[1]-=t[1],this[2]-=t[2],this}sub(t){return this}multiply(t){return this[0]*=t[0],this[1]*=t[1],this[2]*=t[2],this}mul(t){return this}divide(t){return this[0]/=t[0],this[1]/=t[1],this[2]/=t[2],this}div(t){return this}scale(t){return this[0]*=t,this[1]*=t,this[2]*=t,this}scaleAndAdd(t,s){return this[0]+=t[0]*s,this[1]+=t[1]*s,this[2]+=t[2]*s,this}distance(t){return R.distance(this,t)}dist(t){return 0}squaredDistance(t){return R.squaredDistance(this,t)}sqrDist(t){return 0}negate(){return this[0]*=-1,this[1]*=-1,this[2]*=-1,this}invert(){return this[0]=1/this[0],this[1]=1/this[1],this[2]=1/this[2],this}abs(){return this[0]=Math.abs(this[0]),this[1]=Math.abs(this[1]),this[2]=Math.abs(this[2]),this}dot(t){return this[0]*t[0]+this[1]*t[1]+this[2]*t[2]}normalize(){return R.normalize(this,this)}static create(){return new R}static clone(t){return new R(t)}static magnitude(t){let s=t[0],e=t[1],n=t[2];return Math.sqrt(s*s+e*e+n*n)}static mag(t){return 0}static length(t){return 0}static len(t){return 0}static fromValues(t,s,e){return new R(t,s,e)}static copy(t,s){return t[0]=s[0],t[1]=s[1],t[2]=s[2],t}static set(t,s,e,n){return t[0]=s,t[1]=e,t[2]=n,t}static add(t,s,e){return t[0]=s[0]+e[0],t[1]=s[1]+e[1],t[2]=s[2]+e[2],t}static subtract(t,s,e){return t[0]=s[0]-e[0],t[1]=s[1]-e[1],t[2]=s[2]-e[2],t}static sub(t,s,e){return[0,0,0]}static multiply(t,s,e){return t[0]=s[0]*e[0],t[1]=s[1]*e[1],t[2]=s[2]*e[2],t}static mul(t,s,e){return[0,0,0]}static divide(t,s,e){return t[0]=s[0]/e[0],t[1]=s[1]/e[1],t[2]=s[2]/e[2],t}static div(t,s,e){return[0,0,0]}static ceil(t,s){return t[0]=Math.ceil(s[0]),t[1]=Math.ceil(s[1]),t[2]=Math.ceil(s[2]),t}static floor(t,s){return t[0]=Math.floor(s[0]),t[1]=Math.floor(s[1]),t[2]=Math.floor(s[2]),t}static min(t,s,e){return t[0]=Math.min(s[0],e[0]),t[1]=Math.min(s[1],e[1]),t[2]=Math.min(s[2],e[2]),t}static max(t,s,e){return t[0]=Math.max(s[0],e[0]),t[1]=Math.max(s[1],e[1]),t[2]=Math.max(s[2],e[2]),t}static scale(t,s,e){return t[0]=s[0]*e,t[1]=s[1]*e,t[2]=s[2]*e,t}static scaleAndAdd(t,s,e,n){return t[0]=s[0]+e[0]*n,t[1]=s[1]+e[1]*n,t[2]=s[2]+e[2]*n,t}static distance(t,s){const e=s[0]-t[0],n=s[1]-t[1],r=s[2]-t[2];return Math.sqrt(e*e+n*n+r*r)}static dist(t,s){return 0}static squaredDistance(t,s){const e=s[0]-t[0],n=s[1]-t[1],r=s[2]-t[2];return e*e+n*n+r*r}static sqrDist(t,s){return 0}static squaredLength(t){const s=t[0],e=t[1],n=t[2];return s*s+e*e+n*n}static sqrLen(t,s){return 0}static negate(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t}static inverse(t,s){return t[0]=1/s[0],t[1]=1/s[1],t[2]=1/s[2],t}static abs(t,s){return t[0]=Math.abs(s[0]),t[1]=Math.abs(s[1]),t[2]=Math.abs(s[2]),t}static normalize(t,s){const e=s[0],n=s[1],r=s[2];let c=e*e+n*n+r*r;return c>0&&(c=1/Math.sqrt(c)),t[0]=s[0]*c,t[1]=s[1]*c,t[2]=s[2]*c,t}static dot(t,s){return t[0]*s[0]+t[1]*s[1]+t[2]*s[2]}static cross(t,s,e){const n=s[0],r=s[1],c=s[2],i=e[0],a=e[1],l=e[2];return t[0]=r*l-c*a,t[1]=c*i-n*l,t[2]=n*a-r*i,t}static lerp(t,s,e,n){const r=s[0],c=s[1],i=s[2];return t[0]=r+n*(e[0]-r),t[1]=c+n*(e[1]-c),t[2]=i+n*(e[2]-i),t}static slerp(t,s,e,n){const r=Math.acos(Math.min(Math.max(R.dot(s,e),-1),1)),c=Math.sin(r),i=Math.sin((1-n)*r)/c,a=Math.sin(n*r)/c;return t[0]=i*s[0]+a*e[0],t[1]=i*s[1]+a*e[1],t[2]=i*s[2]+a*e[2],t}static hermite(t,s,e,n,r,c){const i=c*c,a=i*(2*c-3)+1,l=i*(c-2)+c,h=i*(c-1),o=i*(3-2*c);return t[0]=s[0]*a+e[0]*l+n[0]*h+r[0]*o,t[1]=s[1]*a+e[1]*l+n[1]*h+r[1]*o,t[2]=s[2]*a+e[2]*l+n[2]*h+r[2]*o,t}static bezier(t,s,e,n,r,c){const i=1-c,a=i*i,l=c*c,h=a*i,o=3*c*a,m=3*l*i,M=l*c;return t[0]=s[0]*h+e[0]*o+n[0]*m+r[0]*M,t[1]=s[1]*h+e[1]*o+n[1]*m+r[1]*M,t[2]=s[2]*h+e[2]*o+n[2]*m+r[2]*M,t}static transformMat4(t,s,e){const n=s[0],r=s[1],c=s[2],i=e[3]*n+e[7]*r+e[11]*c+e[15]||1;return t[0]=(e[0]*n+e[4]*r+e[8]*c+e[12])/i,t[1]=(e[1]*n+e[5]*r+e[9]*c+e[13])/i,t[2]=(e[2]*n+e[6]*r+e[10]*c+e[14])/i,t}static transformMat3(t,s,e){let n=s[0],r=s[1],c=s[2];return t[0]=n*e[0]+r*e[3]+c*e[6],t[1]=n*e[1]+r*e[4]+c*e[7],t[2]=n*e[2]+r*e[5]+c*e[8],t}static transformQuat(t,s,e){const n=e[0],r=e[1],c=e[2],i=e[3]*2,a=s[0],l=s[1],h=s[2],o=r*h-c*l,m=c*a-n*h,M=n*l-r*a,d=(r*M-c*m)*2,y=(c*o-n*M)*2,f=(n*m-r*o)*2;return t[0]=a+o*i+d,t[1]=l+m*i+y,t[2]=h+M*i+f,t}static rotateX(t,s,e,n){const r=e[1],c=e[2],i=s[1]-r,a=s[2]-c;return t[0]=s[0],t[1]=i*Math.cos(n)-a*Math.sin(n)+r,t[2]=i*Math.sin(n)+a*Math.cos(n)+c,t}static rotateY(t,s,e,n){const r=e[0],c=e[2],i=s[0]-r,a=s[2]-c;return t[0]=a*Math.sin(n)+i*Math.cos(n)+r,t[1]=s[1],t[2]=a*Math.cos(n)-i*Math.sin(n)+c,t}static rotateZ(t,s,e,n){const r=e[0],c=e[1],i=s[0]-r,a=s[1]-c;return t[0]=i*Math.cos(n)-a*Math.sin(n)+r,t[1]=i*Math.sin(n)+a*Math.cos(n)+c,t[2]=e[2],t}static angle(t,s){const e=t[0],n=t[1],r=t[2],c=s[0],i=s[1],a=s[2],l=Math.sqrt((e*e+n*n+r*r)*(c*c+i*i+a*a)),h=l&&R.dot(t,s)/l;return Math.acos(Math.min(Math.max(h,-1),1))}static zero(t){return t[0]=0,t[1]=0,t[2]=0,t}static str(t){return`Vec3(${t.join(", ")})`}static exactEquals(t,s){return t[0]===s[0]&&t[1]===s[1]&&t[2]===s[2]}static equals(t,s){const e=t[0],n=t[1],r=t[2],c=s[0],i=s[1],a=s[2];return Math.abs(e-c)<=N*Math.max(1,Math.abs(e),Math.abs(c))&&Math.abs(n-i)<=N*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-a)<=N*Math.max(1,Math.abs(r),Math.abs(a))}};L(R,"BYTE_LENGTH",3*Float32Array.BYTES_PER_ELEMENT);let p=R;p.prototype.sub=p.prototype.subtract;p.prototype.mul=p.prototype.multiply;p.prototype.div=p.prototype.divide;p.prototype.dist=p.prototype.distance;p.prototype.sqrDist=p.prototype.squaredDistance;p.sub=p.subtract;p.mul=p.multiply;p.div=p.divide;p.dist=p.distance;p.sqrDist=p.squaredDistance;p.sqrLen=p.squaredLength;p.mag=p.magnitude;p.length=p.magnitude;p.len=p.magnitude;const st=String.raw;class et{constructor(t,s){L(this,"p");L(this,"target");L(this,"up");L(this,"aspect");L(this,"fov");L(this,"near");L(this,"far");L(this,"canvas");L(this,"lastMouse");L(this,"clicked");this.p=p.fromValues(0,-10,0),this.target=p.fromValues(0,10,0),this.up=p.fromValues(0,0,-1),this.aspect=s,this.fov=Math.PI/5,this.near=.1,this.far=100,this.canvas=t,this.lastMouse={x:0,y:0},this.clicked=!1,this.setupEventListeners()}setupEventListeners(){this.canvas.addEventListener("mousedown",t=>{this.clicked=!0,this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY}),window.addEventListener("mouseup",()=>{this.clicked=!1}),this.canvas.addEventListener("mousemove",t=>{if(this.clicked){const s=(t.clientX-this.lastMouse.x)*.01,e=(t.clientY-this.lastMouse.y)*.01,n=this.target[0]+s,r=this.target[2]-e,c=p.sub(p.create(),p.fromValues(n,this.target[1],r),this.p);p.normalize(c,c);const i=p.fromValues(0,1,0),a=Math.acos(p.dot(c,i)),l=Math.PI/4;a<l&&(this.target[0]=n,this.target[2]=r),this.lastMouse.x=t.clientX,this.lastMouse.y=t.clientY}})}getViewProjectionMatrix(){const t=B.lookAt(B.create(),this.p,this.target,this.up),s=B.perspective(B.create(),this.fov,this.aspect,this.near,this.far);return new B(B.multiply(B.create(),s,t))}getInverseViewProjectionMatrix(){const t=this.getViewProjectionMatrix();return new B(B.invert(B.create(),t))}}class nt{constructor(){L(this,"p");L(this,"color");this.p=p.fromValues(100,100,100),this.color=p.fromValues(1,1,1)}}class rt{constructor(t){L(this,"canvas");L(this,"context");L(this,"adapter");L(this,"device");L(this,"textureFormat");L(this,"camera");L(this,"light");L(this,"resize",()=>{this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight;const t=window.devicePixelRatio||1;if(this.canvas.width=window.innerWidth*t,this.canvas.height=window.innerHeight*t,this.canvas.style.width=window.innerWidth+"px",this.canvas.style.height=window.innerHeight+"px",this.device&&this.textureFormat){const s={device:this.device,format:this.textureFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"opaque"};this.context.configure(s)}this.camera.aspect=this.canvas.width/this.canvas.height});L(this,"render",(t,s)=>{const n=this.device.createBuffer({size:176,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),r=new Float32Array(176/4);r.set(this.camera.getViewProjectionMatrix(),0),r.set(this.camera.getInverseViewProjectionMatrix(),16),r.set(this.camera.p,32),r.set(this.camera.target,36),r.set(this.light.p,40),this.device.queue.writeBuffer(n,0,r);const c=new Float32Array([-1,-1,.99,0,0,0,1,-1,.99,0,0,0,-1,1,.99,0,0,0,1,-1,.99,0,0,0,1,1,.99,0,0,0,-1,1,.99,0,0,0,0,.05,-.1,0,0,-1,-.05,-.05,-.1,0,0,-1,.05,-.05,-.1,0,0,-1,0,0,.2,.87,-.5,0,.05,-.05,-.1,.87,-.5,0,0,.05,-.1,.87,-.5,0,0,0,.2,-.87,-.5,0,0,.05,-.1,-.87,-.5,0,-.05,-.05,-.1,-.87,-.5,0,0,0,.2,0,-1,0,-.05,-.05,-.1,0,-1,0,.05,-.05,-.1,0,-1,0]),i=this.device.createBuffer({label:"vertex buffer",size:c.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(i,0,c);const a=6,l=new Float32Array(s.length*a);s.forEach((v,w)=>{l.set([v.p.x,v.p.y,v.p.z,v.v.x,v.v.y,v.v.z],w*a)});const h=this.device.createBuffer({label:"instance buffer",size:l.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(h,0,l);const o=this.device.createShaderModule({label:"main module",code:st`
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

      `}),m=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),M=this.device.createBindGroup({layout:m,entries:[{binding:0,resource:{buffer:n}}]}),d=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[m]}),vertex:{module:o,entryPoint:"vs",buffers:[{arrayStride:6*4,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*4,format:"float32x3"}],stepMode:"vertex"},{arrayStride:6*4,attributes:[{shaderLocation:2,offset:0,format:"float32x3"},{shaderLocation:3,offset:3*4,format:"float32x3"}],stepMode:"instance"}]},fragment:{module:o,entryPoint:"fs",targets:[{format:this.textureFormat}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),y=this.device.createTexture({size:[this.canvas.width,this.canvas.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),f={colorAttachments:[]};f.colorAttachments=[{view:this.context.getCurrentTexture().createView(),clearValue:[0,0,0,1],loadOp:"clear",storeOp:"store"}],f.depthStencilAttachment={view:y.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"};const x=this.device.createCommandEncoder(),g=x.beginRenderPass(f);g.setPipeline(d),g.setBindGroup(0,M),g.setVertexBuffer(0,i),g.setVertexBuffer(1,h),g.draw(18,s.length),g.end();const P=x.finish();this.device.queue.submit([P])});this.canvas=t,this.context=(s=>{if(s===null)throw new Error("Failed to get canvas context");return s})(this.canvas.getContext("webgpu")),this.camera=new et(this.canvas,this.canvas.width/this.canvas.height),this.light=new nt}async init(){const t=navigator.gpu;if(!t)throw new Error("Failed to connect to GPU, your device or browser might not support webGPU yet.");this.adapter=(s=>{if(s===null)throw new Error("Failed to get adapter");return s})(await t.requestAdapter()),this.device=(s=>{if(s===null)throw new Error;return s})(await this.adapter.requestDevice()),this.device.lost.then(s=>{console.error(`WebGPU device was lost: ${s.message}`)}),this.textureFormat=navigator.gpu.getPreferredCanvasFormat(),this.resize(),window.addEventListener("resize",this.resize)}}const X=10,j=.5,Y=1,Q=(q,t)=>{const s=Math.floor((q[0]+1)*t/2),e=Math.floor((q[1]+1)*t/2);return Math.floor((q[2]+1)*t/2)*t*t+e*t+s},K=(q,t)=>1/(q/(2*t)-1)+2,ct=(q,t,s)=>{const e=p.subtract(p.create(),t,q.p),n=p.mag(e);if(n<1e-4)return p.create();p.normalize(e,e),p.scale(e,e,Math.min(X,n));const r=p.subtract(p.create(),e,q.v);return p.mag(r)>s&&(p.normalize(r,r),p.scale(r,r,s)),new p(r)},H=(q,t,s)=>{const e=p.scale(p.create(),t,X),n=p.subtract(p.create(),e,q.v);return p.mag(n)>s&&(p.normalize(n,n),p.scale(n,n,s)),new p(n)};class it{constructor(t){L(this,"params");L(this,"rEst",20);L(this,"step",async(t,s)=>{this.update(s,t)});this.params=t}avoidWalls(t){const s=p.create(),e={xMin:-20,xMax:20,yMin:5,yMax:20,zMin:-20,zMax:20},n=5,r=3;t.p[0]=Math.max(e.xMin+.1,Math.min(e.xMax-.1,t.p[0])),t.p[1]=Math.max(e.yMin+.1,Math.min(e.yMax-.1,t.p[1])),t.p[2]=Math.max(e.zMin+.1,Math.min(e.zMax-.1,t.p[2]));const c=[p.fromValues(t.p[0],e.yMin,t.p[2]),p.fromValues(t.p[0],e.yMax,t.p[2]),p.fromValues(e.xMin,t.p[1],t.p[2]),p.fromValues(e.xMax,t.p[1],t.p[2]),p.fromValues(t.p[0],t.p[1],e.zMin),p.fromValues(t.p[0],t.p[1],e.zMax)];for(const a of c){const l=p.distance(t.p,a);if(l<r){const h=p.subtract(p.create(),t.p,a);p.normalize(h,h);const o=n*Math.exp(-l/r);p.scaleAndAdd(s,s,h,o)}}const i=.5;return Math.abs(t.p[0]-e.xMin)<i&&p.add(s,s,p.fromValues(1,0,0)),Math.abs(t.p[0]-e.xMax)<i&&p.add(s,s,p.fromValues(-1,0,0)),Math.abs(t.p[1]-e.yMin)<i&&p.add(s,s,p.fromValues(0,1,0)),Math.abs(t.p[1]-e.yMax)<i&&p.add(s,s,p.fromValues(0,-1,0)),Math.abs(t.p[2]-e.zMin)<i&&p.add(s,s,p.fromValues(0,0,1)),Math.abs(t.p[2]-e.zMax)<i&&p.add(s,s,p.fromValues(0,0,-1)),s}update(t,s){const e=Math.ceil(Math.sqrt(t.length));t.sort((n,r)=>Q(n.p,e)-Q(r.p,e));for(let n=0;n<t.length;n++){const r=t[n],c=p.create(),i=p.create(),a=p.create();let l=Math.max(0,n-this.rEst),h=Math.min(t.length-1,n+this.rEst),o=0,m=0,M=0;for(let f=l;f<=h;f++){if(n===f)continue;const x=p.distance(t[n].p,t[f].p);if(x>this.params.range.v)continue;p.add(c,c,t[f].v),o++;const g=K(x,this.params.range.v);if(p.scaleAndAdd(i,i,t[f].p,g),M+=g,x<this.params.sepRange.v){m++;const P=K(x,this.params.sepRange.v),v=p.subtract(p.create(),t[n].p,t[f].p);p.normalize(v,v),p.scaleAndAdd(a,a,v,P)}}o>0&&(p.scale(c,c,1/o),p.normalize(c,c),p.scaleAndAdd(r.v,r.v,H(r,c,Y),this.params.align.v*s),p.scale(i,i,1/M),p.scaleAndAdd(r.v,r.v,ct(r,i,Y),this.params.coh.v*s)),m>0&&(p.normalize(a,a),p.scaleAndAdd(r.v,r.v,H(r,a,Y),this.params.sep.v*s));const d=this.avoidWalls(r);p.mag(d)>1e-4&&(p.normalize(d,d),p.scaleAndAdd(r.v,r.v,H(r,d,Y*2),this.params.sep.v*3*s),p.mag(r.v)>j&&p.dot(p.normalize(p.create(),r.v),d)<0&&p.scale(r.v,r.v,.8));const y=p.mag(r.v);y>X?p.scale(r.v,r.v,X/y):y<j&&p.scale(r.v,r.v,j/y),p.scaleAndAdd(r.p,r.p,r.v,s)}}}const _=document.createElement("canvas");document.querySelector("#app").appendChild(_);const J=()=>{const q=Math.random()*Math.PI*2,t=Math.random()*Math.PI;let s=new p(Math.sin(t)*Math.cos(q),Math.cos(t),Math.sin(t)*Math.sin(q));return{p:new p(40*(Math.random()-.5),20+5*Math.random(),40*(Math.random()-.5)),v:s,target_v:new p(s)}},at=async()=>{console.log("Start!");let q=Array.from({length:500}).map(J),t={w:window.innerWidth,h:window.innerHeight},s={x:0,y:0};const e=document.createElement("div");e.className="controlsParent",window.addEventListener("resize",n=>{t={w:window.innerWidth,h:window.innerHeight}}),window.addEventListener("mousemove",n=>{s={x:n.screenX,y:n.screenY},s.x+160>t.w&&e.classList.add("thing"),s.x<t.w-250&&e.classList.remove("thing")});try{let n={boids:{label:"# Boids",v:500,min:1,max:5e3},range:{label:"Range",v:2},coh:{label:"Cohesion",v:1},align:{label:"Alignment",v:1},sep:{label:"Separation",v:2},sepRange:{label:"Sep. Range",v:1}};document.querySelector("#app").appendChild(e);for(const m of Object.entries(n)){const M=m[1],d=document.createElement("input");d.type="range",d.min=String(M.min??"0"),d.max=String(M.max??"10"),d.step=M.max>10?"1":"0.1",d.value=String(M.v);const y=document.createElement("span");y.className="sliderValue",y.textContent=M.v;const f=document.createElement("div");f.className="rangeHolder",d.addEventListener("input",({target:g})=>{let P=g.value;M.v=P,y.innerText=P});const x=document.createElement("label");x.textContent=M.label,x.setAttribute("for","myElement"),e.appendChild(x),f.appendChild(d),e.appendChild(f),f.appendChild(y)}const r=new it(n),c=new rt(_);await c.init();const i=document.createElement("p");i.className="fps",document.querySelector("#app").appendChild(i);const a=performance.now();let l=a,h=[];const o=m=>{const M=(m-l)/1e3,d=n.boids.v;q.length>d?q=q.slice(0,d):q.push(...Array.from({length:d-q.length}).map(J)),r.step(M,q),c.render(m-a,q),h.push(1/M),h.length>20&&h.shift(),i.innerText=`${Math.round(h.reduce((y,f)=>y+f,0)/h.length)} fps`,l=m,requestAnimationFrame(y=>o(y))};requestAnimationFrame(o)}catch(n){console.error(n)}};at();
