const goodEmojis = [
  '⚡️',
  '🌚',
  '🥑',
  '🍆',
  '🌮',
  '📚',
  '🎉'
];

const randomGoodEmoji = () => goodEmojis[Math.round(Math.random() * (goodEmojis.length - 1))];

export { randomGoodEmoji };
