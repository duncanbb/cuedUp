const STRING = ''
const INTEGER = 0

const quote = {
  body: STRING,
  // refers to user who added the quote, quotes belong to author and user/contributor
  contributorId: INTEGER,
  authorId: INTEGER,
  id: INTEGER,
};

const user = {
  // thinking we can send emails initially then do twilio / native notifications
  // should we have desired email / text time or just default to like noon EST?
  email: STRING,
  password: STRING,
  id: INTEGER,
  hasMany: 'quotes, followedQuotes through quoteFollows',
  // all unique except pw
};

const author = {
  name: STRING,
  id: INTEGER,
  hasMany: quote,
};

const quoteFollows = {
  quoteId: INTEGER,
  userId: INTEGER,
};