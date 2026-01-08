const tiendas = {
  tienda_A: [250, 400, 150, 900, 50, 600],
  tienda_B: [120, 300, 200, 450, 380, 220],
  tienda_C: [900, 1100, 750, 1300, 980]
};

function analizarVentas(ventas) {
  let total = 0;
  for (let v of ventas) total += v;

  let promedio = total / ventas.length;

  let maximo = Math.max(...ventas);
  let minimo = Math.min(...ventas);

  let ventasBajas = 0, ventasMedias = 0, ventasAltas = 0;
  for (let v of ventas) {
    if (v < 200) ventasBajas++;
    else if (v <= 500) ventasMedias++;
    else ventasAltas++;
  }

  let totalDatos = ventas.length;

  let porcentajes = {
    bajas: ((ventasBajas / totalDatos) * 100).toFixed(2),
    medias: ((ventasMedias / totalDatos) * 100).toFixed(2),
    altas: ((ventasAltas / totalDatos) * 100).toFixed(2)
  };

  let outliersAltos = [];
  let outliersBajos = [];
  for (let v of ventas) {
    if (v > promedio * 2) outliersAltos.push(v);
    if (v < promedio * 0.5) outliersBajos.push(v);
  }

  return {
    totalDatos,
    total,
    promedio,
    maximo,
    minimo,
    conteo: { bajas: ventasBajas, medias: ventasMedias, altas: ventasAltas },
    porcentajes,
    outliers: { altos: outliersAltos, bajos: outliersBajos }
  };
}

// Iterar sobre todas las tiendas
for (let nombre in tiendas) {
  const reporte = analizarVentas(tiendas[nombre]);

  console.log("\n====================================");
  console.log("REPORTE DE:", nombre.toUpperCase());
  console.log("====================================");
  console.log("Total ventas:", reporte.total);
  console.log("Promedio:", reporte.promedio.toFixed(2));
  console.log("Máximo:", reporte.maximo);
  console.log("Mínimo:", reporte.minimo);
  console.log("Distribución:");
  console.log("Bajas:", reporte.conteo.bajas, `(${reporte.porcentajes.bajas}%)`);
  console.log("Medias:", reporte.conteo.medias, `(${reporte.porcentajes.medias}%)`);
  console.log("Altas:", reporte.conteo.altas, `(${reporte.porcentajes.altas}%)`);
  console.log("Outliers altos:", reporte.outliers.altos);
  console.log("Outliers bajos:", reporte.outliers.bajos);
}
