import json
raw_data = {
	"name": "json-logger"
	"logger": "true",
	"debug": "false",
	"compression": "true",
	"compression-type":"gzip"
} 


output = json.dump(raw_data)

print(output)