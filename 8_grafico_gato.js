var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

/* pincel.fillStyle = 'pink';
pincel.fillRect(0, 0, 1200, 800);

pincel.fillStyle = "black";
pincel.beginPath();
pincel.arc(700,300,50,0,2*3.1415);
pincel.fill(); */

// Cara
pincel.fillStyle = 'orange';
pincel.strokeStyle = 'black';
pincel.lineWidth = 2;
pincel.beginPath();
pincel.arc(200, 200, 150, 0, Math.PI * 2);
pincel.fill();
pincel.stroke();

// Ojos
pincel.fillStyle = 'white';
pincel.beginPath();
pincel.arc(135, 150, 35, 0, Math.PI * 2);
pincel.fill();

pincel.beginPath();
pincel.arc(265, 150, 35, 0, Math.PI * 2);
pincel.fill();

pincel.fillStyle = 'black';
pincel.beginPath();
pincel.arc(135, 150, 30, 0, Math.PI * 2);
pincel.fill();

pincel.beginPath();
pincel.arc(265, 150, 30, 0, Math.PI * 2);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.arc(135, 135, 10, 0, Math.PI * 2);
pincel.fill();

pincel.beginPath();
pincel.arc(265, 135, 10, 0, Math.PI * 2);
pincel.fill();

// Barbilla
pincel.strokeStyle = 'black';
pincel.lineWidth = 1;
pincel.fillStyle = '#f6ddd4'

pincel.beginPath();
pincel.moveTo(65, 260);
pincel.quadraticCurveTo(200, 200, 335, 260);
pincel.quadraticCurveTo(200, 430, 65, 260);
pincel.fill();
pincel.stroke();

// Nariz
pincel.strokeStyle = 'pink';
pincel.lineWidth = 5;
pincel.fillStyle = '#ff50a8';

pincel.beginPath();
pincel.moveTo(165,210);
pincel.quadraticCurveTo(200,190,235,210);
pincel.lineTo(200,250);
pincel.lineTo(165,210);
//pincel.arc(200, 220, 30, 0, Math.PI * 2);
pincel.fill();
pincel.stroke();

// Bigotes
pincel.strokeStyle = 'white';
pincel.lineWidth = 4;

pincel.beginPath();
pincel.moveTo(45, 200);
pincel.lineTo(150, 210);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(250, 210);
pincel.lineTo(355, 200);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(50, 250);
pincel.lineTo(150, 230);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(250, 230);
pincel.lineTo(350, 250);
pincel.stroke();

// Boca
pincel.strokeStyle = 'black';
pincel.lineWidth = 8;

pincel.beginPath();
pincel.moveTo(100, 275);
pincel.quadraticCurveTo(165, 330, 200, 250);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(200, 250);
pincel.quadraticCurveTo(235, 330, 300, 275);
pincel.stroke();

// Orejas
pincel.strokeStyle = 'black';
pincel.lineWidth = 2;
pincel.fillStyle = 'chocolate';

pincel.beginPath();
pincel.moveTo(60, 15);
pincel.lineTo(80,120);
pincel.quadraticCurveTo(120,70,150,70);
pincel.lineTo(80,5);
pincel.quadraticCurveTo(65,3,60,15);
pincel.closePath();
pincel.fill();
pincel.stroke();

pincel.beginPath();
pincel.moveTo(350, 15);
pincel.lineTo(320,120);
pincel.quadraticCurveTo(270,70,250,70);
pincel.lineTo(330,5);
pincel.quadraticCurveTo(345,2,350,15);
pincel.closePath();
pincel.fill();
pincel.stroke();

