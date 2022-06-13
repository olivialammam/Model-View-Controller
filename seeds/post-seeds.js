const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Enim nec dui nunc mattis enim ut tellus elementum sagittis.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Consequat nisl vel pretium lectus quam id leo in vitae. ',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Rhoncus urna neque viverra justo nec. Quis lectus nulla at volutpat.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Pretium fusce id velit ut tortor pretium viverra.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Eu augue ut lectus arcu bibendum at varius.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Hendrerit dolor magna eget est lorem ipsum. Cras adipiscing enim eu turpis egestas.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Molestie at elementum eu facilisis sed odio morbi quis commodo.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'Quisque id diam vel quam elementum pulvinar etiam non.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Sed adipiscing diam donec adipiscing tristique.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'At auctor urna nunc id cursus metus aliquam.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'Nunc sed blandit libero volutpat sed cras ornare arcu dui.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'A diam sollicitudin tempor id eu nisl nunc.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'Mus mauris vitae ultricies leo integer malesuada nunc vel risus.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'Imperdiet proin fermentum leo vel orci porta non pulvinar.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'Consectetur a erat nam at. Lorem dolor sed viverra ipsum nunc.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
