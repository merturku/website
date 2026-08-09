---
title: "MapKit ve CoreLocation ile Geçirdiğim Zorlu Haftalar"
description: "PrivGeo'yu geliştirirken konum servisleri, izinler ve pil tüketimiyle boğuştuğum haftaların notları."
date: 2026-05-03
tags: ["PrivGeo", "CoreLocation", "MapKit"]
draft: false
---

Konum servisleri ilk bakışta basit görünüyor: `CLLocationManager` başlat, konumu al, haritada göster. Gerçekte işler öyle yürümedi. En büyük sorunum, arka planda konum takibini sürekli açık tutarken pil tüketimini makul seviyede tutabilmekti.

İlk versiyonda konumu her on saniyede bir güncelliyordum ve test cihazım öğleden sonraya kadar bataryasını tüketiyordu. Bunun kabul edilebilir olmadığını anlamam uzun sürmedi, çünkü bir aile üyesinin telefonu boşuna bitmesin diye tasarlanmış bir uygulama, kendisi pil düşmanı olamazdı.

## Significant location change

Apple'ın `startMonitoringSignificantLocationChanges` özelliğini keşfettiğimde işler değişti. Sürekli GPS yerine, cihazın hücresel baz istasyonu değiştirdiği anları temel alan bu yöntem, çok daha az pil harcıyor ve çoğu kullanım senaryosu için yeterince hassas. Hassasiyeti biraz azaltmayı kabul edip pil ömrünü kat kat uzattım.

## İzin akışının inceliği

"Konumu her zaman izin ver" isteğinin kullanıcıya doğru zamanda, doğru bağlamda sorulması gerektiğini de bu süreçte öğrendim. Uygulama açılır açılmaz izin istemek yerine, kullanıcı geofence özelliğini kurmaya başladığı an istemeye karar verdim. Bu küçük değişiklik, izin verme oranımı gözle görülür şekilde artırdı — insanlar neden izin istendiğini anladıklarında daha kolay kabul ediyor.
