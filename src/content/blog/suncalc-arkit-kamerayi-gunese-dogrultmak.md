---
title: "SunCalc ve ARKit: Kamerayı Güneşe Doğrultmak"
description: "Henüz geliştirme aşamasında olan SunCalc uygulaması için ARKit ile artırılmış gerçeklikte güneş konumu göstermeye çalışırken yaşadıklarım."
date: 2026-06-14
tags: ["SunCalc", "ARKit"]
draft: false
---

SunCalc, üç uygulamamdan çok farklı bir yerden başladı. Şantiyede güneş açısının binaların gölgelenmesine etkisini hesapladığımız günlerden kalma bir merakım vardı — güneşin gökyüzündeki konumunu doğru hesaplamak, aslında oldukça matematiksel bir iş ve bunu telefonun kamerasıyla birleştirmek istedim.

ARKit'e ilk girdiğimde önceki üç uygulamamdan hiçbirinde kullanmadığım bir dünyaya adım attığımı fark ettim. `ARSCNView`, dünya koordinat sistemi, cihazın yönelimini (heading) doğru okumak — hiçbiri SwiftUI'nin bildiğim rahatlığında değildi.

## Pusula hassasiyeti sorunu

En çok zorlandığım kısım, telefonun manyetik pusulasının bina içlerinde ve metal yapılar yakınında ciddi şekilde şaşırmasıydı. Güneşin konumunu ekranda doğru yerde göstermek için cihazın baktığı yönü doğru bilmem gerekiyordu, ama pusula bazen 30 derece kadar hatalı okuma verebiliyordu.

CoreLocation'ın `CLLocationManager` üzerinden gelen `heading` verisini ARKit'in kendi dünya takibiyle birleştirerek daha kararlı bir sonuç almaya çalışıyorum şu an. Henüz tam olarak memnun olduğum bir noktada değilim, bu yüzden SunCalc hâlâ App Store'da değil.

## Neden acele etmiyorum

Diğer üç uygulamamı yayınlarken biraz acele etmiştim, sonradan düzelttiğim hatalar oldu. SunCalc'ta farklı davranmaya karar verdim — astronomik hesaplamalar yanlış olursa uygulamanın tüm amacı anlamsızlaşır, bu yüzden doğruluğundan emin olana kadar beklemeyi tercih ediyorum.
