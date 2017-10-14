'use strict';

import axios from 'axios';
import { newsAPI } from '../config';

export async function getNewsFromSource(source, sort = '') {
	if (!source) return [];
	let options = {
		method: 'get',
		url: `${newsAPI.url}`,
		params: {
			source: source,
			sortBy: sort,
			apiKey: newsAPI.apiKey
		}
	};

	let data;

	try {
		let response = await axios(options);
		data = response.data;
	} catch(error) {
		data = error;
	}

	return data;
}