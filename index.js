'use strict';

try {

  /**
   * console支持的style属性
   */
  console.__proto__.styleSupport = function () {
    console.groupCollapsed('console支持的样式属性');
    console.table({
      'padding': '✓',
      'line-height': '✓',
      'background': '✓',
      'background-*': '✓',
      'color': '✓',
      'font-size': '✓',
      'font-family': '✓',
      'font-weight': '✓',
      'font-style': '✓',
      'webkit-font-smoothing': '✓',
      'text-shadow': '✓',
      'text-decoration': '✓',
      'text-transform': '✓',
      'letter-spacing': '✓',
      'border': '✓',
      'border-*': '✓',
    });
    console.groupEnd('console支持的样式属性');
  }

  /**
   * 输出带样式的文本
   * @param {*object} option 对象
   */
  console.__proto__.styleText = function (option) {

    if (!option) {
      console.groupCollapsed('请输入option');
      console.table({
        text: '文本',
        style: '样式',
      });
      console.groupEnd('请输入option');
      return;
    }

    const {
      text = '',
      style = '',
    } = option;

    console.log(`%c${text}`, style);
  }

  /**
   * console输出图片
   * @param {*object} option 对象
   */
  console.__proto__.img = function(option) {

    if (!option) {
      console.groupCollapsed('请输入option');
      console.table({
        url: '图片url',
        width: '图片宽度',
        height: '图片高度',
        exStyle: '扩展样式',
      });
      console.groupEnd('请输入option');
      return;
    }

    const {
      url = '',
      width = 100,
      height = 100,
      exStyle = '',
    } = option;

    if (!url) {
      console.error('请输入url');
      return;
    }

    let style = `
      background: url(${url}) no-repeat;
      padding: ${height / 2}px ${width / 2}px;
      background-size: 100% 100%;
    `
    if (exStyle) {
      style += exStyle;
    }

    console.log(`%c `, style);

  }

} catch (err) {
  console.error(err);
}