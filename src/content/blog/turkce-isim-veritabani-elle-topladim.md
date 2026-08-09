---
title: "Türkçe İsim Veritabanını Elimle Topladım"
description: "BabyNamer için kaliteli bir Türkçe isim veritabanı oluştururken hangi kaynaklara başvurduğumu anlatıyorum."
date: 2026-05-24
tags: ["BabyNamer", "Veri"]
draft: false
---

Hazır bir Türkçe isim API'si ya da güvenilir bir açık veri seti bulamadım. Var olan birkaç kaynak ya çok eskiydi ya da anlamlar yanlıştı, bazı isimlerin kökeni tamamen hatalıydı. Bu yüzden en zahmetli ama en doğru yolu seçtim: elle topladım.

Nüfus ve Vatandaşlık İşleri'nin yayınladığı açık isim istatistiklerinden başladım, en çok kullanılan isimlerin listesini çıkardım. Sonra her isim için anlamını, kökenini (Türkçe, Arapça, Farsça, öz Türkçe gibi) tek tek araştırıp doğruladım. Bazı akşamlar sadece elli isim ekleyebiliyordum, o kadar yavaştı.

## Yanlış bilgi yayma korkusu

Bir ismin anlamını yanlış yazmak, birinin çocuğuna verdiği ismin hikayesini yanlış öğrenmesine sebep olabilir. Bu sorumluluk bende ciddi bir baskı yarattı, bu yüzden her ismi en az iki farklı kaynaktan doğrulamaya çalıştım. Emin olamadığım isimleri veritabanına hiç eklemedim, eksik olması yanlış olmasından daha iyiydi.

## Sonucu

Bugün BabyNamer'da binlerce isim var ve her biri gerçekten kontrol edilmiş durumda. Bu süreç aylarımı aldı ama uygulamanın en değerli tarafının aslında kodu değil, bu veritabanı olduğunu düşünüyorum. Kod her zaman yeniden yazılabilir, doğru derlenmiş bir veri seti öyle kolay elde edilmiyor.
