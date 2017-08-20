/* eslint-disable quotes */
'use strict';
window.renderStatistics = function (ctx, names, times) {
  // Shadow of window for displaying results task-2
  var windowWidth = 420;
  var windowHeight = 270;
  ctx.fillStyle = 'rgba( 0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, windowWidth, windowHeight);
  ctx.fillRect(110, 20, windowWidth, windowHeight);
  // Window for displaying results task-1
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, windowWidth, windowHeight);
  ctx.fillRect(100, 10, windowWidth, windowHeight);
  // Print message task-3
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  // Print time histogram and players names task-4
  // Step 1: finding max time
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  // Step 2: Print histogram of gamers names and time-play
  var histogramHeight = 150; // max histogram height
  var step = histogramHeight / max; // proportion histogram height
  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 0;
  ctx.translate(0, 240); // new point 'zero'
  // Correct cycle, as I think. But not printing blue histogram with random transparency
  /* for (var k = 0; k < times.length; k++) { // cycle of printing all gamers times histogram
    var randomNumber = Math.random();
    randomNumber = randomNumber / (randomNumber++);
    ctx.fillText(names[k], initialX + indent * k, indent / 2);
    if (names[k] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
      ctx.fillRect(initialX + indent * k, initialY, barWidth, times[k] * -step);
      ctx.fillStyle = 'black';
    } else {
      ctx.fillStyle = 'rgba( 0, 0, 255, randomNumber)';
      ctx.fillRect(initialX + indent * k, initialY, barWidth, times[k] * -step);
      ctx.fillStyle = 'black';
    }
  }*/
  // Not correct cycle, as I think, but doing ALL what they want
  for (var k = 0; k < times.length; k++) { // cycle of printing all gamers times histogram
    ctx.fillText(names[k], initialX + indent * k, indent / 2);
    if (names[k] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
      ctx.fillRect(initialX + indent * k, initialY, barWidth, times[k] * -step);
      ctx.fillStyle = 'black';
    } else {
      if (names[k] === 'Катя') {
        ctx.fillStyle = 'rgba( 0, 0, 255, 0.2)';
        ctx.fillRect(initialX + indent * k, initialY, barWidth, times[k] * -step);
        ctx.fillStyle = 'black';
      } else {
        if (names[k] === 'Игорь') {
          ctx.fillStyle = 'rgba( 0, 0, 255, 0.8)';
          ctx.fillRect(initialX + indent * k, initialY, barWidth, times[k] * -step);
          ctx.fillStyle = 'black';
        } else {
          ctx.fillStyle = 'rgba( 0, 0, 255, 0.5)';
          ctx.fillRect(initialX + indent * k, initialY, barWidth, times[k] * -step);
          ctx.fillStyle = 'black';
        }
      }
    }
  }
};
