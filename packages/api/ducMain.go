package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "610290901"
	dbname   = "fhirbase"
)

func mainx() {
	var err error

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)

	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("You are Successfully connected!")
	sqlSelect := `SELECT id from patient limit $1;`
	var id string
	rows, err := db.Query(sqlSelect, 4)
	if err != nil {
		log.Fatal(err)
		fmt.Print("err", err)
	}
	defer rows.Close()
	for rows.Next() {
		// fmt.Println("rows", rows)
		if err := rows.Scan(&id); err != nil {
			log.Fatal(err)
		}
		fmt.Printf("id2:%s \n", id)
	}
}
