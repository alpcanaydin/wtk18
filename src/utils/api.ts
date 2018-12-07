const __API_RESPONSES__: { [key: string]: any } = {
  '/blog': [
    {
      id: '1',
      title: 'Blog Post 1',
      summary: `You don't have to spend all your time thinking about what you're doing, you just let it happen.`,
    },
    {
      id: '2',
      title: 'Blog Post 2',
      summary: `It's hard to see things when you're too close. Take a step back and look. Maybe, just to play a little, we'll put a little tree here.`,
    },
  ],
  '/blog/1': {
    title: 'Blog Post 1',
    body: `
    <p>You don't have to spend all your time thinking about what you're doing, you just let it happen. Now we'll take the almighty fan brush. From all of us here, I want to wish you happy painting and God bless, my friends. Anyone can paint.</p

    <p>Trees grow however makes them happy. I guess that would be considered a UFO. A big cotton ball in the sky. I thought today we would do a happy little picture. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Happy painting, God bless.</p>

    <p>Each highlight must have it's own private shadow. These things happen automatically. All you have to do is just let them happen. Here we're limited by the time we have. Let's do that again. Let all these things just sort of happen.</p>

    <p>You're meant to have fun in life. There's nothing wrong with having a tree as a friend. Nice little clouds playing around in the sky. God gave you this gift of imagination. Use it. Don't hurry. Take your time and enjoy.</p>

    `,
  },
  '/blog/2': {
    title: 'Blog Post 2',
    body: `
    <p>It's hard to see things when you're too close. Take a step back and look. Maybe, just to play a little, we'll put a little tree here. There are no mistakes. You can fix anything that happens.</p>

    <p>That's a son of a gun of a cloud. It is a lot of fun. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Now then, let's play. Steve wants reflections, so let's give him reflections. Be so very light. Be a gentle whisper.</p>
    `,
  },
};

const get = (path: string, networkDelay: number): Promise<any> =>
  new Promise(resolve => {
    console.log(`[API] ${path} için data çekiliyor...`);

    setTimeout(() => {
      console.log(`[API] ${path} için data çekildi.`);
      resolve(__API_RESPONSES__[path]);
    }, networkDelay);
  });

export default { get };
