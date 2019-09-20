'use strict';

var CLOUD_COLOR = 'white';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_COLOR = 'black';
var FONT = 'PT Mono, 16px';
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
var MIN_SATURATION_VALUE = 15;
var MAX_SATURATION_VALUE = 100;
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var calcColumnHeight = function (time, max) {
  return (COLUMN_MAX_HEIGHT * time) / max;
};

var calcColumnX = function (num) {
  return COLUMN_MIN_X + COLUMN_WIDTH * num + COLUMN_MARGIN_LEFT * num;
};

var calcColumnY = function (height) {
  return COLUMN_MIN_Y + COLUMN_MAX_HEIGHT - height;
};

var getLongestPlaytrough = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandomBlue = function (minSaturation, maxSaturation) {
  return 'hsl(240, ' + Math.floor(Math.random() * (maxSaturation - minSaturation + 1) + minSaturation) + '%' + ',  50%)';
};

var renderBar = function (ctx, colX, colY, colWidth, colHeight, colMarginTop, textColor, name, time, nameY) {
  ctx.fillRect(colX, colY, colWidth, colHeight);
  ctx.fillStyle = textColor;
  ctx.fillText(name, colX, nameY);
  ctx.fillText(Math.round(time), colX, colY - colMarginTop);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getLongestPlaytrough(times);

  /* Тень и холст статистики */
  renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  /* Заголовок окна */
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = FONT;
  ctx.fillText('Ура вы победили!', CLOUD_HEADER_X, CLOUD_HEADER_Y);
  ctx.fillText('Список результатов:', CLOUD_HEADER_X, CLOUD_HEADER_Y + CLOUD_HEADER_GAP);

  /* Гистограмма */
  for (var i = 0; i < names.length; i++) {
    var columnHeight = calcColumnHeight(times[i], maxTime);

    if (names[i] === 'Вы') {
      ctx.fillStyle = PLAYER_COLOR;
    } else {
      ctx.fillStyle = getRandomBlue(MIN_SATURATION_VALUE, MAX_SATURATION_VALUE);
    }

    /* Отображаем колонку */
    renderBar(ctx, calcColumnX(i), calcColumnY(columnHeight), COLUMN_WIDTH, columnHeight, COLUMN_MARGIN_TOP, TEXT_COLOR, names[i], times[i], NAME_Y);
  }
};
