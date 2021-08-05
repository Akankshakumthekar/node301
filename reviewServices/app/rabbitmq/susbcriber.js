queue_name = "rating_review_update";

function bail(err) {
    console.error(err);
    process.exit(1);
  }

  // Consumer
function consumer(conn) {
    var ok = conn.createChannel(on_open);
    function on_open(err, ch) {
      if (err != null) bail(err);
      ch.assertQueue(queue_name);
      ch.consume(queue_name, function(msg) {
        if (msg !== null) {
            const content = msg.content.toString();
          console.log(content);
          const review_rating = JSON.parse(content)
          console.log("received", review_rating);
          ch.ack(msg);
        }
      });
    }
  }
  
  require('amqplib/callback_api')
    .connect('amqps://hqiqjuyf:WwCXJpk3F2srpyZgj2arT7j4kpeQgJGv@puffin.rmq2.cloudamqp.com/hqiqjuyf', function(err, conn) {
      if (err != null) bail(err);
      consumer(conn);
      publisher(conn);
    });