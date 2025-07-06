package menu
package main

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()
var rdb = redis.NewClient(&redis.Options{Addr: "redis:6379"})

func main() {
	r := gin.Default()

	r.GET("/menu", func(c *gin.Context) {
		val, err := rdb.Get(ctx, "menu").Result()

		if err != nil {
			c.JSON(http.StatusOK, []string{})
			return
		}

		var menu []string
		err = json.Unmarshal([]byte(val), &menu)
		c.JSON(http.StatusOK, menu)
	})
	r.Run(":8080")
}
