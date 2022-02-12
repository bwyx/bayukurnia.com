---
title: 'ESP8266: Hello World!'
summary: Menjalankan Hello World di ESP8266 pada Serial, Web Server, dan MQTT
publishedAt: 2022-01-09
cover: hello-esp8266.png
---

Sebelum membuat sesuatu yang rumit, mari kita lakukan _hello world_ terlebih dahulu. Kita akan lakukan hello world pada 3 hal yaitu Serial, Web Server dan MQTT.

## Serial

Pada serial kita langsung bisa menggunakan fn `println()` pada Object `Serial`

```c
void setup(){
  // Samakan pada settingan IDE
  Serial.begin(74880);

  Serial.println("Hello World!");
}

void main(){
  // print Hello World pada main loop setiap 100ms
  Serial.println("Hello World!");
  delay(100)
}
```

## Web Server

Kita akan menggunakan [ESPAsyncWebServer](https://github.com/me-no-dev/ESPAsyncWebServer)
