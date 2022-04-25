package main

import (
	"log"
	"os"

	"github.com/streadway/amqp"
)

func main() {
	amqpUrl := os.Getenv("AMQP_URL")
	conn, err := amqp.Dial(amqpUrl)
	defer conn.Close()
	if err != nil {
		log.Fatal(err)
	}

	c, err := conn.Channel()
	if err != nil {
		log.Fatal(err)
	}
}
