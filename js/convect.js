let d,H1,tay,V,G1,G2,G3,G4,C,Type;function calcTotalConvect(t){const e=document.querySelectorAll(t);if(d&&H1&&tay&&V&&G1&&G2&&G3&&G4&&C&&Type&&("электричество"===Type||"природный газ"===Type)){let t,n,o,a,c,i,x,C,l,G,u,v,r,F,y,s,p,b,T;i=d+.4,c=H1+.7,n=i+.24,a=+c+.08,t=V*tay+2*d,o=2*(n*t+t*a),x=80.9*o,C=32900*(G1+G2),l=126e3*G3+4e4*G4,G=6781740*G4,u=1.1*(x+C+l+G),v=t*n*a*56.5+.5*x,r=u>v?u:v,"электричество"===Type?(F=.37*r,y=0):(y=.58*r,F=0),s=n*Math.pow(a,1.5)*336.18*1.19,p=.45*r,b=2*(p+1e4*G4)/t,T=20*t*i*c,e[0].textContent=`Ширина проема непрерывной камеры ${i.toFixed(5)} м`,e[1].textContent=`Высота проема проходной камеры ${c.toFixed(5)} м`,e[2].textContent=`Габаритная ширина ${n.toFixed(5)} м`,e[3].textContent=`Габаритная высота ${a.toFixed(5)} м`,e[4].textContent=`Длина сушильной камеры ${t.toFixed(5)} м`,e[5].textContent="Теплопотери через внешние ограждения Q1 (Вт) = "+x.toFixed(5),e[6].textContent="Расход тепла на нагрев изделия и транспорта Q2 (Вт) = "+C.toFixed(5),e[7].textContent="Теплопотери на нагрев краски и испарение растворителя Q3 (Вт) = "+l.toFixed(5),e[8].textContent="Затраты тепла на нагрев свежего воздуха Q4 (Вт) = "+G.toFixed(5),e[9].textContent="Тепло, расходуемое в период эксплуатации W1 (Вт) = "+u.toFixed(5),e[10].textContent="Расход тепла на первоначальный разогрев сушильной камеры W2 (Вт) = "+v.toFixed(5),e[11].textContent="Тепло W (Вт) = "+r.toFixed(5),e[12].textContent="Nуст (кВт/ч) = "+F.toFixed(5),e[13].textContent="Расход природного газа Vгаза (м3/ч) = "+y.toFixed(5),e[14].textContent="Производительность вентилятора воздушной завесы, Qвент (м3/ч) = "+s.toFixed(5),e[15].textContent="Объем рециркулируемого воздуха Vрецвозд (м3/ч) = "+p.toFixed(5),e[16].textContent="Производительность одного рециркуляционного вентилятора Viрвцвозд (м3/ч) = "+b.toFixed(5),e[17].textContent="Производительность аварийного вентилятора Vав (м3/ч): = "+T.toFixed(5)}}function getDynamicInformationConvect(t){document.querySelectorAll(t).forEach(t=>{t.addEventListener("input",(function(){switch(t.getAttribute("id")){case"d":d=+t.value;break;case"H":H1=+t.value;break;case"tay":tay=+t.value;break;case"V":V=+t.value;break;case"G1":G1=+t.value;break;case"G2":G2=+t.value;break;case"G3":G3=+t.value;break;case"G4":G4=+t.value;break;case"C":C=+t.value;break;case"Type":Type=t.value}calcTotalConvect(".convect__item")}))})}getDynamicInformationConvect(".convect__inputs input"),calcTotalConvect(".convect__item");