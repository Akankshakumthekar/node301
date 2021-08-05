queue_name = "rating_review_update";

function bail(err) {
    console.error(err);
    process.exit(1);
  }

  function publisher(conn) {
      setInterval( () =>{ 
          const rating_update = {
              restId: Math.ceil(Math.random() * 1000000),
              rating: Math.ceil(Math.random() * 5),
              rating_count: Math.ceil(math.random() * 10000),
          }
          console.log("publishing",rating_update);

          conn.createChannel(on_open);
          function on_open(err, ch) {
            if (err != null) bail(err);
            ch.assertQueue(queue_name);
            ch.sendToQueue(queue_name, Buffer.from(JSON.stringify(rating_update)));
          }
      },10000)

  }

  require('amqplib/callback_api')
  .connect('amqps://hqiqjuyf:WwCXJpk3F2srpyZgj2arT7j4kpeQgJGv@puffin.rmq2.cloudamqp.com/hqiqjuyf', function(err, conn) {
    if (err != null) bail(err);
    consumer(conn);
    publisher(conn);
  });