Análisis de Ventas en JavaScript

Proyecto de análisis de ventas utilizando JavaScript para obtener métricas clave, clasificar rendimiento y detectar valores atípicos (outliers).

Objetivo:
Simular un escenario real de análisis de ventas para apoyar la toma de decisiones empresariales.

Dataset:
Cada tienda contiene un arreglo con valores de ventas por periodo.

Métricas calculadas:
- Total de ventas
- Promedio
- Máximo y mínimo
- Clasificación de ventas (bajas, medias, altas)
- Porcentajes por categoría
- Detección de outliers

Metodología:
Los outliers se detectan comparando cada venta contra el promedio:
- Alto: > promedio * 2
- Bajo: < promedio * 0.5

Tecnologías:
- JavaScript (ES6)
- Node.js
