---
title: "Bir SwiftData Migration'ını Batırdığım Gün"
description: "Lilio'da model değişikliği yaparken yaşadığım migration hatası ve kullanıcı verisi kaybetme korkusuyla nasıl yüzleştiğimi anlatıyorum."
date: 2026-07-19
tags: ["SwiftData", "Lilio", "Hata"]
draft: false
---

Büyüme takibine yeni bir alan eklemek istedim: baş çevresi ölçümü. Basit bir değişiklik gibi görünüyordu, mevcut `GrowthRecord` modeline bir alan eklemek yeterliydi. SwiftData'nın otomatik migration yapabileceğini biliyordum, hafif (lightweight) migration için özel bir kod yazmam gerekmeyeceğini düşündüm.

Yeni sürümü kendi telefonuma yükleyip test ettiğimde her şey normal görünüyordu. App Store'a gönderdim. Ertesi gün bir kullanıcıdan gelen mesajı okuyunca kalbim durdu: "Güncellemeden sonra tüm büyüme kayıtlarım kayboldu."

## Neyi kaçırmıştım

Sorun, yeni alanı zorunlu (non-optional) olarak eklememdi. Mevcut kayıtlarda bu alan hiç yoktu, migration bu kayıtları makul bir varsayılan değerle dolduramadığı için bazı cihazlarda veritabanı bütünlüğü bozuldu. Kendi test cihazımda sorun çıkmamasının sebebi, zaten üzerinde çok az test verisi olmasıydı — gerçek kullanıcıların aylarca biriktirdiği veri hacminde sorun ortaya çıkıyordu.

## Düzeltme ve özür

Alanı optional yaptım, acil bir düzeltme sürümü gönderdim. Etkilenen kullanıcıya, elimden geldiğince açık bir dille ne olduğunu anlattım ve özür diledim. Veri kaybını geri getiremedim, bu beni hâlâ üzüyor.

O günden sonra her model değişikliğinde önce büyük, gerçekçi test verisiyle migration'ı deniyorum, sadece birkaç kayıtla değil. Bir kullanıcının aylarca biriktirdiği veri, benim için sadece bir test senaryosu değil, birinin gerçek anılarının dijital karşılığı — bunu bir daha unutmayacağım.
