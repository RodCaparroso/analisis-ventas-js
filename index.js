const tiendas = {
  tienda_A: [250, 400, 150, 900, 50, 600],
  tienda_B: [120, 300, 200, 450, 380, 220],
  tienda_C: [900, 1100, 750, 1300, 980]
};

function analizarVentas(ventas) {
  let total = 0;
  for (let v of ventas) total += v;

  let promedio = total / ventas.length;

  let maximo = ventas[0];
  let minimo = ventas[0];

  for (let v of ventas) {
    if (v > maximo) maximo = v;
    if (v < minimo) minimo = v;
  }

  let bajas = 0, medias = 0, altas = 0;

  for (let v of ventas) {
    if (v < 200) bajas++;
    else if (v <= 500) medias++;
    else altas++;
  }

  let outliersAltos = [];
  let outliersBajos = [];

  for (let v of ventas) {
    if (v > promedio * 2) outliersAltos.push(v);
    if (v < promedio * 0.5) outliersBajos.push(v);
  }

  return {
    totalDatos: ventas.length,
    total,
    promedio,
    maximo,
    minimo,
    conteo: { bajas, medias, altas },
    porcentajes: {
      bajas: ((bajas / ventas.length) * 100).toFixed(2),
      medias: ((medias / ventas.length) * 100).toFixed(2),
      altas: ((altas / ventas.length) * 100).toFixed(2)
    },
    outliers: {
      altos: outliersAltos,
      bajos: outliersBajos
    }
  };
}

for (let tienda in tiendas) {
  const reporte = analizarVentas(tiendas[tienda]);

  console.log(`\n========== ${tienda.toUpperCase()} ==========`);

  console.log("Total ventas:", reporte.total);
  console.log("Promedio:", reporte.promedio.toFixed(2));
  console.log("Máximo:", reporte.maximo);
  console.log("Mínimo:", reporte.minimo);

  console.log("Distribución:");
  console.log("Bajas:", `${reporte.conteo.bajas} (${reporte.porcentajes.bajas}%)`);
  console.log("Medias:", `${reporte.conteo.medias} (${reporte.porcentajes.medias}%)`);
  console.log("Altas:", `${reporte.conteo.altas} (${reporte.porcentajes.altas}%)`);

  console.log("Outliers:");
  console.log("Altos:", reporte.outliers.altos.length ? reporte.outliers.altos : "Ninguno");
  console.log("Bajos:", reporte.outliers.bajos.length ? reporte.outliers.bajos : "Ninguno");
}
