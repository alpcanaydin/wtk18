const queen = {
  id: '1',
  name: 'Queen',
  summary:
    'Queen, 1970 yılında kurulmuş tüm dünyada albümleri 300 milyondan fazla satmış İngiliz rock grubudur.',
  body: `Queen, 1970 yılında kurulmuş tüm dünyada albümleri 300 milyondan fazla satmış İngiliz rock grubudur. 1960'ların sonlarında Smile grubunun dağılma sürecine girmesi sonrasında Brian May, Roger Taylor ve Freddie Mercury tarafından Londra'da kurulmuştur.`,
};

const pinkFloyd = {
  id: '2',
  name: 'Pink Floyd',
  summary: 'Pink Floyd, İngiliz progresif/psikedelik rock müzik grubu.',
  body: `Pink Floyd, İngiliz progresif/psikedelik rock müzik grubu. Felsefî şarkı sözleri, yenilikçi albüm kapakları, etkileyici-girift sahne şovları ile Pink Floyd, dünya çapında başarıya ulaşmıştır.`,
};

const theBeatles = {
  id: '3',
  name: 'The Beatles',
  summary: `The Beatles, Birleşik Krallık'ın Liverpool kentinde kurulmuş müzik grubudur.`,
  body: `The Beatles, Birleşik Krallık'ın Liverpool kentinde kurulmuş müzik grubudur. 60'lı yılların popüler müzik grubu. The Beatles hem sanatsal hem de ticari başarılarıyla tarihte büyük bir üne kavuşmuştur. Modadan müziğe kadar geniş yelpazede bugünkü gelişime payları büyüktür.`,
};

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
    id: '1',
    title: 'Blog Post 1',
    body: `
    <p>You don't have to spend all your time thinking about what you're doing, you just let it happen. Now we'll take the almighty fan brush. From all of us here, I want to wish you happy painting and God bless, my friends. Anyone can paint.</p

    <p>Trees grow however makes them happy. I guess that would be considered a UFO. A big cotton ball in the sky. I thought today we would do a happy little picture. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Happy painting, God bless.</p>

    <p>Each highlight must have it's own private shadow. These things happen automatically. All you have to do is just let them happen. Here we're limited by the time we have. Let's do that again. Let all these things just sort of happen.</p>

    <p>You're meant to have fun in life. There's nothing wrong with having a tree as a friend. Nice little clouds playing around in the sky. God gave you this gift of imagination. Use it. Don't hurry. Take your time and enjoy.</p>

    `,
  },
  '/blog/2': {
    id: '2',
    title: 'Blog Post 2',
    body: `
    <p>It's hard to see things when you're too close. Take a step back and look. Maybe, just to play a little, we'll put a little tree here. There are no mistakes. You can fix anything that happens.</p>

    <p>That's a son of a gun of a cloud. It is a lot of fun. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. Now then, let's play. Steve wants reflections, so let's give him reflections. Be so very light. Be a gentle whisper.</p>
    `,
  },
  '/artists': [
    {
      id: queen.id,
      name: queen.name,
      summary: queen.summary,
    },
    {
      id: pinkFloyd.id,
      name: pinkFloyd.name,
      summary: pinkFloyd.summary,
    },
  ],
  '/artist/1': {
    id: queen.id,
    name: queen.name,
    body: queen.body,
    relateds: [
      { id: pinkFloyd.id, name: pinkFloyd.name, summary: pinkFloyd.summary },
      { id: theBeatles.id, name: theBeatles.name, summary: theBeatles.summary },
    ],
  },
  '/artist/1/detail': {
    id: queen.id,
    name: queen.name,
    body: queen.body,
  },
  '/artist/2/detail': {
    id: pinkFloyd.id,
    name: pinkFloyd.name,
    body: pinkFloyd.body,
  },
  '/artist/2': {
    id: pinkFloyd.id,
    name: pinkFloyd.name,
    body: pinkFloyd.body,
    relateds: [
      { id: queen.id, name: queen.name, summary: queen.summary },
      { id: theBeatles.id, name: theBeatles.name, summary: theBeatles.summary },
    ],
  },
  '/artist/1/relateds': [
    { id: pinkFloyd.id, name: pinkFloyd.name, summary: pinkFloyd.summary },
    { id: theBeatles.id, name: theBeatles.name, summary: theBeatles.summary },
  ],
  '/artist/2/relateds': [
    { id: queen.id, name: queen.name, summary: queen.summary },
    { id: theBeatles.id, name: theBeatles.name, summary: theBeatles.summary },
  ],
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
