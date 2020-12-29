let d, H1, tay, V, G1, G2, G3, G4, C, Type;

function calcTotalTerm(selector) {
  const convectItems = document.querySelectorAll(selector);

  if (!d || !H1 || !tay || !V || !G1 || !G2 || !G3 || !G4 || !C || !Type) {
    return;
  } else {
    if (Type === "электричество" || Type === "природный газ") {
      let L,
        B,
        F,
        H2,
        hpr,
        bpr,
        Q1,
        Q2,
        Q3,
        Q4,
        Q5,
        W1,
        W2,
        W,
        N,
        n,
        Vg,
        Vrec,
        Vreci,
        Vav;

      bpr = d + 0.4;
      hpr = H1 + 0.7;
      B = bpr + 0.24;
      H2 = hpr + 0.08;
      L = V * tay + 2 * d;
      F = 2 * (B * L + L * H2);
      Q1 = F * 80.9;
      Q2 = (G1 + G2) * 32900;
      Q3 = G3 * 126000 + G4 * 40000;
      Q4 = G4 * 6781740;
      Q5 = 33414.8 * H2 * B;
      W1 = (Q1 + Q2 + Q3 + Q4 + Q5) * 1.1;
      W2 = L * B * H2 * 56.5 + 0.5 * Q1;

      if (W1 > W2) {
        W = W1;
      } else {
        W = W2;
      }

      n = (W / 25000) * L;

      if (Type === "электричество") {
        N = ((W1 + W2) / 860000) * 1.25;
        Vg = 0;
      } else {
        Vg = n * 21.62;
        N = 0;
      }

      Vrec = 157.31 * n;
      Vreci = (3 * Vrec) / L;
      Vav = 20 * L * bpr * hpr;

      convectItems[0].textContent = `Ширина проема непрерывной камеры ${bpr.toFixed(
        5
      )} м`;
      convectItems[1].textContent = `Высота проема проходной камеры ${hpr.toFixed(
        5
      )} м`;
      convectItems[2].textContent = `Габаритная ширина ${B} м`;
      convectItems[3].textContent = `Габаритная высота ${H2} м`;
      convectItems[4].textContent = `Длина сушильной камеры ${L} м`;
      convectItems[5].textContent = `Теплопотери через внешние ограждения Q1 (Вт) = ${Q1.toFixed(
        5
      )}`;
      convectItems[6].textContent = `Расход тепла на нагрев изделия и транспорта Q2 (Вт) = ${Q2.toFixed(
        5
      )}`;
      convectItems[7].textContent = `Теплопотери на нагрев краски и испарение растворителя Q3 (Вт) = ${Q3.toFixed(
        5
      )}`;
      convectItems[8].textContent = `Затраты тепла на нагрев свежего воздуха Q4 (Вт) = ${Q4.toFixed(
        5
      )}`;
      convectItems[9].textContent = `Тепло, расходуемое в период эксплуатации W1 (Вт) = ${W1.toFixed(
        5
      )}`;
      convectItems[10].textContent = `Расход тепла на первоначальный разогрев сушильной камеры W2 (Вт) = ${W2.toFixed(
        5
      )}`;
      convectItems[11].textContent = `Тепло W (Вт) = ${W}`;
      convectItems[12].textContent = `Nуст (кВт/ч) = ${N}`;
      convectItems[13].textContent = `Расход природного газа Vгаза (м3/ч) = ${Vg.toFixed(
        5
      )}`;
      convectItems[14].textContent = `Затраты тепла излучением через открытие проемы Q5 (Вт) = ${Q5.toFixed(
        5
      )}`;
      convectItems[15].textContent = `Объем рециркулируемого воздуха Vрецвозд (м3/ч) = ${Vrec.toFixed(
        5
      )}`;
      convectItems[16].textContent = `Производительность одного рециркуляционного вентилятора Viрвцвозд (м3/ч) = ${Vreci.toFixed(
        5
      )}`;
      convectItems[17].textContent = `Производительность аварийного вентилятора Vав (м3/ч): = ${Vav.toFixed(
        5
      )} м`;
      convectItems[17].textContent = `Число панелей nп при заданной теплонапряженности единичной панели = ${n.toFixed(
        0
      )} м`;
    } else {
      return;
    }
  }
}

function getDynamicInformationTerm(selector) {
  const inputsConvect = document.querySelectorAll(selector);

  inputsConvect.forEach((input) => {
    input.addEventListener("input", function () {
    

      switch (input.getAttribute("id")) {
        case "d":
          d = +input.value;
          break;
        case "H":
          H1 = +input.value;
          break;
        case "tay":
          tay = +input.value;
          break;
        case "V":
          V = +input.value;
          break;
        case "G1":
          G1 = +input.value;
          break;
        case "G2":
          G2 = +input.value;
          break;
        case "G3":
          G3 = +input.value;
          break;
        case "G4":
          G4 = +input.value;
          break;
        case "C":
          C = +input.value;
          break;
        case "Type":
          Type = input.value;
          break;
      }

      calcTotalTerm(".convect__item");
    });
  });
}

getDynamicInformationTerm(".convect__inputs input");
calcTotalTerm(".convect__item");
