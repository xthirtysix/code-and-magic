'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEADER_X = 140;
var CLOUD_HEADER_Y = 35;
var CLOUD_HEADER_GAP = 20;
var SHADOW_OFFSET = 10;

var COLUMN_WIDTH = 40;
var COLUMN_MAX_HEIGHT = 150;
var COLUMN_MIN_X = 140;
var COLUMN_MIN_Y = 90;
var COLUMN_MARGIN_LEFT = 50;
var COLUMN_MARGIN_TOP = 10;
var NAME_Y = 260;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = 0;

  var calcColumnHeight = function (time, max) {
    return (COLUMN_MAX_HEIGHT * time) / max;
  };
  var calcColumnX = function (num) {
    return COLUMN_MIN_X + COLUMN_WIDTH * num + COLUMN_MARGIN_LEFT * num;
  };
  var calcColumnY = function (height) {
    return COLUMN_MIN_Y + COLUMN_MAX_HEIGHT - height;
  };

  /* Тень и холст статистики */
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  /* Заголовок окна */
  ctx.fillStyle = 'black';
  ctx.font = 'PT Mono, 16px';
  ctx.fillText('Ура вы победили!', CLOUD_HEADER_X, CLOUD_HEADER_Y);
  ctx.fillText('Список результатов:', CLOUD_HEADER_X, CLOUD_HEADER_Y + CLOUD_HEADER_GAP);

  /* Максимальное время прохождения */
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  /* Гистограмма */
  for (var j = 0; j < names.length; j++) {
    var columnHeight = calcColumnHeight(times[j], maxTime);

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(60 * Math.random() + 40) + '%' + ',  50%)';
    }
    /* Отображаем колонку */
    ctx.fillRect(calcColumnX(j), calcColumnY(columnHeight), COLUMN_WIDTH, columnHeight);
    /* Отображаем имя */
    ctx.fillStyle = 'black';
    ctx.fillText(names[j], calcColumnX(j), NAME_Y);
    /* Отображаем время выполнения */
    ctx.fillText(Math.round(times[j]), calcColumnX(j), calcColumnY(columnHeight) - COLUMN_MARGIN_TOP);
  }
};
