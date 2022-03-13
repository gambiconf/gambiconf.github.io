const tweetLength = (body: string) => {
  return Array.from(body)
    .map((character) => (/\p{Extended_Pictographic}/u.test(character) ? 2 : 1))
    .reduce((acc, i) => acc + i, 0);
};

export { tweetLength };
