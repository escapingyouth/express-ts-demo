// fake user database

import { v4 as uuidv4 } from 'uuid';
export const users = [
	{
		id: uuidv4(),
		username: 'Michael',
		comment: 'I like to go fishing on Tuesdays'
	}
];
