package model

type Patient struct {
	Name     string `json:"name" bson:"name"`
	ID       string `json:"id" bson:"id"`
	KanaName string `json:"kana_name" bson:"kana_name"`
	Gender   string `json:"gender" bson:"gender"`
	Birthday string `json:"birthday" bson:"birthday"`
}

// - name
// - id
// - kana_name
// - gender
// - birthday
