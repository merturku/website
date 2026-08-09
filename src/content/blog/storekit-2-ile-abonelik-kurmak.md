---
title: "StoreKit 2 ile Abonelik Kurmak Sandığımdan Zor Çıktı"
description: "Lilio'ya premium abonelik eklerken StoreKit 2 ile yaşadığım öğrenme sürecini anlatıyorum."
date: 2026-03-08
tags: ["StoreKit 2", "Lilio", "In-App Purchase"]
draft: false
---

"StoreKit 2 eski StoreKit'ten çok daha kolay" diye okumuştum her yerde, ve genel olarak doğruymuş — async/await desteği, receipt doğrulama işini büyük ölçüde kendisi hallediyor. Ama "kolay" ile "anında anlaşılır" aynı şey değilmiş.

App Store Connect'te ürün oluşturmak ilk adımdı ve orada bile epey vakit kaybettim. Ürün kimliğini yanlış formatta girip iki gün onay bekledikten sonra reddedildiğini görmek moralimi bozdu.

## Sandbox test hesabı sürprizi

Sandbox ortamında test ederken abonelik yenileme sürelerinin gerçek hayattaki gibi ay değil, dakikalar mertebesinde hızlandırılmış çalıştığını öğrenmek işime yaradı — ama önce bunu bilmediğim için "neden abonelik her beş dakikada bir yenileniyor" diye saatlerce debug ettim, meğer sandbox öyle çalışıyormuş.

## Transaction dinleme mantığı

En çok kafamı karıştıran kısım, uygulamanın açık olmadığı zamanlarda gerçekleşen işlemleri (örneğin bir yenilemenin başarısız olması) nasıl yakalayacağımdı. `Transaction.updates` ile arka planda dinleyen bir görev kurmam gerektiğini anlamam biraz zaman aldı, ama bir kere oturunca artık dokunmadığım, güvendiğim bir parça oldu.

Bugün Lilio'daki premium özellikler bu altyapı üzerinde çalışıyor. İlk üç haftamı harcadığım bu iş, sonrasında hiç sorun çıkarmadı — belki de en çok emek verdiğim kod parçası bu yüzden en sağlam olanı oldu.
