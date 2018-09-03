﻿'use strict';


define('main', ['backtesting'], function (backtesting) {
	backtesting.init();

	$(document).ready(function () {

		$("#button01").click(function () {
			var obj = {
			data : [
				{
					id: 1,
					flag: 'EUR',
					currencyCode: 'EUR',
					currency: 'Euro',
					level: 0.9033,
					units: 'EUR / USD',
					asOf: '08/19/2018',
					onedChng: 0.0026
				}
			],
			columns: [
				{
					data: 'id',
					type: 'numeric',
					width: 40
				},
				{
					data: 'flag'
				},
				{
					data: 'currencyCode',
					type: 'text'
				},
				{
					data: 'currency',
					type: 'text'
				},
				{
					data: 'level',
					type: 'numeric',
					numericFormat: {
					pattern: '0.0000'
					}
				}
			],
			colHeaders: [
				'날짜',
				'롱/숏',
				'진입가',
				'청산가',
				'계약수'
			]
		}
		backtesting.sheet.updateSettings(obj);
		return false;
		});
	});

});
