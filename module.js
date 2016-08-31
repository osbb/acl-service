var kafka = require('kafka-node'),
  Consumer = kafka.Consumer,
  client = new kafka.Client(),
  consumer = new Consumer(
    client,
    [
      { topic: 'acl' },
    ]
  );

consumer.on('message', function (message) {
  console.log(message);
});
