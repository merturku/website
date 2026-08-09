---
title: "MVVM Nedir, Neden Herkes Bundan Bahsediyor"
description: "SwiftUI öğrenirken karşıma sürekli çıkan MVVM kısaltmasını anlamaya çalışırken yaşadıklarım."
date: 2026-02-01
tags: ["SwiftUI", "MVVM", "Mimari"]
draft: false
---

Bir YouTube videosunda "tabii bunu MVVM ile yapıyoruz" dendiğinde herkesin bunu bildiğini varsayan bir ton vardı. Ben bilmiyordum. Google'ladım, Model-View-ViewModel çıktı karşıma, üç kelime ama açıklaması bir sayfa sürdü.

İlk projelerimde her şeyi View'ın içine yazıyordum. Buton tıklanınca veri çek, veriyi işle, ekranı güncelle — hepsi aynı yerde. İşe yarıyordu ama dosya büyüdükçe hangi kodun ne işe yaradığını ben bile unutuyordum.

## Şantiye analojisi işime yaradı

Bana oturan açıklama şuydu: View, projenin görsel çizimi gibi — nasıl göründüğünü anlatır ama hesaplamayı yapmaz. ViewModel ise statik hesap raporunu hazırlayan mühendis gibi, sayıları üretir ama binayı çizmez. Model de saha verisi, ham gerçek. Bu ayrımı kafamda böyle kurunca birden anlamlı gelmeye başladı.

## Lilio'da ilk uyguladığım yer

Beslenme takibi ekranını yazarken ilk kez ciddi şekilde ayırdım. `FeedingViewModel` biberon kayıtlarını hesaplıyor, ortalama süt miktarını çıkarıyor, View ise sadece bunu gösteriyor. İlk başta gereksiz bir katman gibi geldi, sonra bir hata bulmam gerektiğinde hangi dosyaya bakacağımı tam olarak bildiğimde ne kadar doğru bir karar olduğunu anladım.

Hâlâ her yerde saf MVVM kullanmıyorum, bazı basit ekranlarda gereksiz buluyorum. Ama karmaşıklaşan her ekranda ilk aklıma gelen yapı bu oldu.
