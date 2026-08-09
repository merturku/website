---
title: "Core Data'dan SwiftData'ya Neden Hiç Bakmadan Geçtim"
description: "Yeni başlayan biri olarak Core Data öğrenmek yerine direkt SwiftData'ya yönelmemin sebepleri."
date: 2026-02-08
tags: ["SwiftData", "Core Data"]
draft: false
---

Bir forumda "önce Core Data öğrenmelisin, SwiftData'nın altında zaten o var" yazıyordu. Bir başka yerde tam tersi: "yeni başlıyorsan SwiftData'dan gir, Core Data seni yorar." İki tarafı da okudum, sonunda kendi kararımı verdim: SwiftData.

Sebebim basitti — Core Data'nın `.xcdatamodeld` dosyasını, NSManagedObject alt sınıflarını, fetch request'leri görünce bunun benim gibi yeni başlayan biri için gereksiz bir yük olduğunu düşündüm. SwiftData'da `@Model` yazıp bir sınıfı işaretlemek, benim anladığım dilde konuşuyordu.

## İlk model dosyam

Lilio için yazdığım ilk `@Model` sınıfı bir biberon kaydıydı. Sadece birkaç satır: tarih, miktar, tür. `@Query` ile bu kayıtları çekmek, SQL yazmadan, migration dosyası uğraşmadan çalışması beni gerçekten şaşırttı. "Bu kadar mı basit" diye birkaç kere kontrol ettim.

## Sonradan öğrendiğim zorluklar

Tabii her şey pürüzsüz değildi. Model ilişkilerini (relationship) doğru kurmak, özellikle bir bebeğin birden fazla büyüme kaydı olduğu durumda, ilk seferde anlamadım. Migration konusunda da bir gün ciddi bir ders çıkardım — o hikaye ayrı bir yazı.

Yine de bugün geriye dönüp baksam aynı kararı verirdim. SwiftData, ilk projemi bitirebilmemin en büyük sebeplerinden biri oldu.
