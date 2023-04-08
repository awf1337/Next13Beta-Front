// Open terminal, type node press enter and copy paste the code,
// add a center point for circle generator, also the path to file where you wanna save the data

// eslint-disable-next-line
const fs = require('fs');

const centerX = 3420; // X coordinate of the circle center
const centerY = 681; // Y coordinate of the circle center
const radius = 15; // Radius of the circle
const numPoints = 20; // Number of points to generate
const angleStep = (2 * Math.PI) / numPoints; // Angle between each point in radians

const points = [{ x: centerX, y: centerY }];

for (let i = 0; i < numPoints; i++) {
  const angle = angleStep * i;
  const x = centerX + 20 * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  points.push({ x: x.toFixed(1), y: y.toFixed(1) });
}

for (let i = 0; i < 10; i++) {
  const angle = ((2 * Math.PI) / 10) * i;
  const x = centerX + 15 * Math.cos(angle);
  const y = centerY + 10 * Math.sin(angle);
  points.push({ x: x.toFixed(1), y: y.toFixed(1) });
}

for (let i = 0; i < 5; i++) {
  const angle = ((2 * Math.PI) / 5) * i;
  const x = centerX + 5 * Math.cos(angle);
  const y = centerY + 5 * Math.sin(angle);
  points.push({ x: x.toFixed(1), y: y.toFixed(1) });
}

fs.writeFileSync(
  'Documents/PersonalProject/coin/components/Globe/coordonates/**.json', // path to file where you wanna save the generated data
  JSON.stringify(points, null, 2)
);
