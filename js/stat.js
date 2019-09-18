var renderStatistics = function (ctx, names, times) {
  var COLUMN_WIDTH = 40;
  var COLUMN_MAX_HEIGHT = 150;
  var COLUMN_MIN_X = 140;
  var COLUMN_MIN_Y = 90;
  var COLUMN_MARGIN_LEFT = 50;
  var COLUMN_MARGIN_TOP = 10;
  var NAME_Y = 260;

  var maxTime = 0;

  var calcColumnHeight = function (time, maxTime) {
    return (COLUMN_MAX_HEIGHT * time) / maxTime;
  }
  var calcColumnX = function (num) {
    return COLUMN_MIN_X + COLUMN_WIDTH * num + COLUMN_MARGIN_LEFT * num;
  }
  var calcColumnY = function (height) {
    return COLUMN_MIN_Y + COLUMN_MAX_HEIGHT - height;
  }

  /* Тень и холст статистики */
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath(120, 20);
  ctx.lineTo(130, 290);
  ctx.lineTo(330, 280);
  ctx.lineTo(530, 290);
  ctx.lineTo(540, 20);
  ctx.lineTo(120, 20);
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath(110, 10);
  ctx.lineTo(120, 280);
  ctx.lineTo(320, 270);
  ctx.lineTo(520, 280);
  ctx.lineTo(530, 10);
  ctx.lineTo(110, 10);
  ctx.fill();

  /* Заголовок окна */
  ctx.fillStyle = 'black';
  ctx.font = 'PT Mono, 16px';
  ctx.fillText('Ура вы победили!', 140, 35);
  ctx.fillText('Список результатов:', 140, 55);

  /* Максимальное время прохождения */
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  /* Гистограмма */
  for (var i = 0; i < names.length; i++) {
    var columnHeight = calcColumnHeight(times[i], maxTime)

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = "hsl(240, " + Math.floor(60 * Math.random() + 40) + "%" + ",  50%)";
    }
    /* Отображаем колонку */
    ctx.fillRect(calcColumnX(i), calcColumnY(columnHeight), COLUMN_WIDTH, columnHeight);
    /* Отображаем имя */
    ctx.fillStyle = "black";
    ctx.fillText(names[i], calcColumnX(i), NAME_Y);
    /* Отображаем время выполнения */
    ctx.fillText(Math.round(times[i]), calcColumnX(i), calcColumnY(columnHeight) - COLUMN_MARGIN_TOP);
  }
}
