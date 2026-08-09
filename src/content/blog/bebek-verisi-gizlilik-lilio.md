---
title: "Bebek Verisi Toplayan Bir Uygulamada Gizlilik Şaka Değil"
description: "Lilio'yu geliştirirken bebek verilerinin gizliliği konusunda aldığım kararlar ve neden bunları öncelik yaptım."
date: 2026-03-15
tags: ["Lilio", "Gizlilik", "SwiftData"]
draft: false
---

Lilio'yu yapmaya başladığımda içimde hep aynı düşünce vardı: bu, kızımın uyku saatlerini, kaç kere biberon içtiğini, kilosunu tutan bir uygulama. Bu veriler benim için değerli olduğu kadar hassas da. Bir sızıntı ya da kötü niyetli bir kullanım, hayal bile etmek istemediğim bir şey.

Bu yüzden ilk kararım, mümkün olduğunca az sunucuya bağımlı olmaktı. Lilio'nun verileri varsayılan olarak cihazda, SwiftData ile yerel olarak tutuluyor. Bir sunucuya sürekli veri göndermek yerine, iCloud senkronizasyonunu Apple'ın kendi altyapısına bırakmayı tercih ettim — kullanıcının verisi benim sunucularımdan hiç geçmiyor.

## Reklam koymama kararı

Birçok ücretsiz bebek uygulamasının reklamlarla dolu olmasının sebebini anlıyorum, para kazanmak gerekiyor. Ama bir bebeğin beslenme saatini kaydederken üçüncü parti reklam ağlarının bu veriye herhangi bir şekilde erişebilecek olması fikri bana hiç doğru gelmedi. Lilio'da reklam yok, veri satışı yok — gelir sadece isteğe bağlı premium abonelikten geliyor.

## Bunu neden anlatıyorum

Bu tür kararlar App Store'da rakip uygulamalar kadar hızlı özellik eklememe engel oluyor bazen. Ama bir ebeveyn olarak kendi kızımın verisini nasıl korunmasını isterdim diye düşününce, yolun doğrusu bu. Ticari olarak en akıllıca yol olmayabilir, ama vicdanen rahat olduğum tek yol bu.
