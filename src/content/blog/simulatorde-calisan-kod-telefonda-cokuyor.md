---
title: "Simulator'de Çalışan Kod Gerçek Telefonda Neden Çöküyor"
description: "Simulator ile fiziksel cihaz arasındaki farkları acı tecrübeyle öğrendiğim günler."
date: 2026-02-15
tags: ["Xcode", "Debugging"]
draft: false
---

Haftalarca sadece simulator ile çalıştım. Kendi iPhone'uma uygulamayı yükleme fikri bile aklıma gelmemişti — "zaten simulator aynı şey" diye düşünüyordum. Bir gün kızıma göstermek için telefonuma attım ve uygulama açılışta anında çöktü.

Konsola baktım, hata simulator'de hiç görmediğim bir şeydi: bellek uyarısı. Simulator, Mac'in kaynaklarını kullandığı için bazı performans sorunlarını hiç göstermiyormuş. Gerçek bir iPhone'un belleği çok daha sınırlı, özellikle eski bir modelse.

## Kamera ve konum farkı

Bir başka fark kamera ve konum servisleriydi. PrivGeo'yu geliştirirken CoreLocation kodlarını haftalarca simulator'de test ettim, sahte konum verileriyle her şey mükemmel çalışıyordu. Gerçek cihazda GPS'in gerçek dünyadaki gecikmesini, sinyal kaybını, arka planda konum izni isteme akışının kullanıcıya nasıl göründüğünü ilk kez o zaman gördüm.

## Artık kuralım

O günden sonra kendime bir kural koydum: yeni bir özellik simulator'de çalışsa bile, App Store'a göndermeden önce mutlaka en az iki farklı gerçek cihazda deniyorum. Biri kendi telefonum, biri eşimin eski bir iPhone'u. İkisi arasındaki iOS sürüm farkı bile bazen beklenmedik davranışlar çıkarıyor.

Basit bir ders ama başta hiç aklıma gelmemişti: simulator bir yaklaşıklık, gerçek cihaz gerçeğin ta kendisi.
