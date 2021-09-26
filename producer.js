const amqp = require('amqplib/callback_api')

amqp.connect('amqp://user:pass@direct.gubanov.ee:5672', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'student-names';
    var msg = 'Nikita sdfadsasddRehemae';

    channel.assertQueue(queue, {
      durable: true
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});