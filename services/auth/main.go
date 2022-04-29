package main

import (
	"io"
	"log"
	"net/http"
)

func main() {
	authHandler := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, "Hello, Login!\n")
	}

	jwksHandler := func(w http.ResponseWriter, req *http.Request) {
		io.WriteString(w, "Hello, JWKS!\n")
	}

	http.HandleFunc("/auth/login", authHandler)
	http.HandleFunc("/.well-known/jwks.json", jwksHandler)
	log.Println("Listing for requests at http://localhost:3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
