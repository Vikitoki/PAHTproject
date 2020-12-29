let d, H1, tay, V, G1, G2, G3, G4, C, Type;

function calcTotalConvect(selector) {
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
        W1,
        W2,
        W,
        N,
        Vg,
        Qv,
        Vrec,
        Vreci,
        Vav;

      bpr = d + 0.4;
      hpr = H1 + 0.7;
      B = bpr + 0.24;
      H2 = +hpr + 0.08;
      L = V * tay + 2 * d;
      F = 2 * (B * L + L * H2);
      Q1 = F * 80.9;
      Q2 = (G1 + G2) * 32900;
      Q3 = G3 * 126000 + G4 * 40000;
      Q4 = G4 * 6781740;
      W1 = (Q1 + Q2 + Q3 + Q4) * 1.1;
      W2 = L * B * H2 * 56.5 + 0.5 * Q1;

      if (W1 > W2) {
        W = W1;
      } else {
        W = W2;
      }

      if (Type === "электричество") {
        N = 0.37 * W;
        Vg = 0;
      } else {
        Vg = 0.58 * W;
        N = 0;
      }

      Qv = B * Math.pow(H2, 1.5) * 336.18 * 1.19;

      Vrec = 0.45 * W;
      Vreci = (2 * (Vrec + 10000 * G4)) / L;
      Vav = 20 * L * bpr * hpr;

      convectItems[0].textContent = `Ширина проема непрерывной камеры ${bpr.toFixed(
        5
      )} м`;
      convectItems[1].textContent = `Высота проема проходной камеры ${hpr.toFixed(
        5
      )} м`;
      convectItems[2].textContent = `Габаритная ширина ${B.toFixed(5)} м`;
      convectItems[3].textContent = `Габаритная высота ${H2.toFixed(5)} м`;
      convectItems[4].textContent = `Длина сушильной камеры ${L.toFixed(5)} м`;
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
      convectItems[11].textContent = `Тепло W (Вт) = ${W.toFixed(5)}`;
      convectItems[12].textContent = `Nуст (кВт/ч) = ${N.toFixed(5)}`;
      convectItems[13].textContent = `Расход природного газа Vгаза (м3/ч) = ${Vg.toFixed(
        5
      )}`;
      convectItems[14].textContent = `Производительность вентилятора воздушной завесы, Qвент (м3/ч) = ${Qv.toFixed(
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
      )}`;
    } else {
      return;
    }
  }
}

function getDynamicInformationConvect(selector) {
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

      calcTotalConvect(".convect__item");
    });
  });
}

getDynamicInformationConvect(".convect__inputs input");
calcTotalConvect(".convect__item");
