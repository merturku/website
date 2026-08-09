---
title: "Xcode'u İlk Açtığım Gün Hiçbir Şey Anlamadım"
description: "Storyboard, target, scheme, simulator... Xcode arayüzü ilk günümde beni nasıl bunalttı."
date: 2026-01-18
tags: ["Başlangıç", "Xcode"]
draft: false
---

Xcode'u indirip açtığım an ekranda gördüğüm panel sayısı beni resmen korkuttu. Sol tarafta dosya ağacı, ortada kod, sağda bir sürü ayar, altta bir konsol. AutoCAD'e alışkın gözüm önce "tamam bu da bir çizim programı gibi" dedi, sonra "target", "scheme", "build phase" kelimeleriyle tanışınca o güven hemen kayboldu.

İlk projeyi "Hello World" değil, direkt bir buton koyup tıklayınca renk değiştiren bir ekran yapmaya çalışarak açtım. Kötü bir fikirdi, çünkü daha `@State` ne demek bilmiyordum. İki saat uğraşıp ekranda hiçbir şey göremeyince kapatıp gittim.

## Simulator'ü anlamak

Beni asıl şaşırtan simulator oldu. Gerçek bir iPhone yokmuş gibi geliştirme yapabiliyor olmak inanılmaz geldi ilk başta, sonra bunun aslında standart bir şey olduğunu öğrendim. Yine de ilk kez bir "iPhone 15 Pro" simulator'ünün açılıp kendi yazdığım (kopyaladığım demek daha doğru olur) kodu çalıştırmasını izlerken içimden bir şeyler geçti. Bu iş belki gerçekten olabilir dedim.

## Ne yapardım farklı

Geriye dönüp baksam, ilk haftaları storyboard ile değil direkt SwiftUI ile geçirdiğim için şanslıyım. O dönem hâlâ storyboard öğreten çok kaynak vardı ve ben yanlışlıkla SwiftUI dokümanına denk gelmiştim. Sonradan öğrendim ki bu tam bir şans eseriymiş — SwiftUI, benim gibi görsel düşünen biri için çok daha doğal bir giriş noktasıymış.
