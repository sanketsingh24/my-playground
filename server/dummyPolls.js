import Polls from './models/Polls';

export default function () {
  Polls.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `Sed ut perspiciatis unde omnis iste natus error
      sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae`;

    const content2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      ipsum quia dolor sit amet.`;

    const poll1 = new Polls({ name: 'Admin', title: 'Hello MERN', slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1, yPercent:55 });
    const poll2 = new Polls({ name: 'Admin', title: 'Lorem Ipsum', slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2, yPercent:45 });

    Polls.create([poll1, poll2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
