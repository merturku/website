---
title: "Geofence Bildirimleri Neden Doğru Çalışması Bu Kadar Zor"
description: "Güvenli bölge bildirimlerini kararlı hale getirene kadar yaşadığım deneme yanılma sürecini anlatıyorum."
date: 2026-05-10
tags: ["PrivGeo", "CoreLocation", "Bildirimler"]
draft: false
---

Kağıt üzerinde geofence çok basit bir fikir: bir bölge tanımla, cihaz o bölgeye girince ya da çıkınca bildirim gönder. Uygulamada bu kadar basit değildi.

İlk sorunum, GPS'in bina içlerinde çok kararsız olmasıydı. Kızımın okulunun etrafına 100 metrelik bir bölge çizdiğimde, telefon bazen okulun içindeyken bile "bölgeden çıktı" bildirimi gönderiyordu — çünkü GPS sinyali bina içinde sıçrıyordu. Bu yanlış pozitif bildirimler, uygulamanın en can sıkıcı tarafı oldu.

## Bölge yarıçapını büyütmek çözüm değildi

İlk çözümüm bölge yarıçapını büyütmekti, ama bu sefer de bildirim çok geç geliyordu, çocuk zaten okula girdikten çok sonra "vardı" bildirimi düşüyordu. Doğru dengeyi bulmak için gerçek dünyada, farklı yerlerde, farklı saatlerde defalarca test etmem gerekti.

## Bulduğum orta yol

Sonunda bölge geçişlerini anında değil, birkaç dakikalık bir gecikmeyle doğrulayan bir mantık kurdum — konum birkaç dakika boyunca tutarlı şekilde bölge dışında kalıyorsa ancak o zaman bildirim gönderiyorum. Bu, anlık GPS sıçramalarını filtreleyen basit ama etkili bir yöntem oldu.

Bunu yazarken bile "bu kadar basit bir özellik neden bu kadar uğraştırdı" diye düşünüyorum. Ama sanırım geliştirmenin çoğu böyle — en sade görünen özellikler, gerçek dünyanın düzensizliğiyle karşılaşınca en çok mühendislik gerektiren yerler oluyor.
