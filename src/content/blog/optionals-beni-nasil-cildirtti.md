---
title: "Optionals Beni Nasıl Çıldırttı"
description: "Swift'te nil ile tanışmam, force unwrap yüzünden yediğim ilk çökmeler ve sonunda oturan mantık."
date: 2026-01-25
tags: ["Swift", "Başlangıç"]
draft: false
---

`String?` gördüğümde ilk tepkim "bu soru işareti burada ne arıyor" oldu. Bir değişkenin bazen değer taşıyıp bazen taşımayabileceği fikri, mühendislik kafamla ilk başta tuhaf geldi. Bize öğretilen her şey kesindi: bir kirişin momenti ya vardır ya yoktur, "belki vardır" diye bir şey yoktu.

Sonra force unwrap'i (`!`) keşfettim ve düşündüm ki "harika, sorunu çözdüm, hep bunu kullanırım." İki gün sonra uygulamam her açılışta çöküyordu çünkü bir API'den boş dönen bir alanı zorla açmaya çalışıyordum. Konsoldaki "Fatal error: Unexpectedly found nil" yazısını galiba yüz kere gördüm o hafta.

## Anlamamı sağlayan örnek

Bana en çok yardımcı olan şey, optional'ı bir zarf gibi düşünmek oldu. İçinde bir şey olabilir de olmayabilir de, ama zarfı açmadan içeriğe dokunamazsın. `if let` ve `guard let` ile zarfı güvenli şekilde açmayı öğrenince her şey oturdu. Artık her `!` gördüğümde önce "buna gerçekten emin miyim" diye soruyorum kendime.

## Bugün hâlâ dikkat ettiğim şey

Lilio'da kullanıcı verisiyle çalışırken, özellikle SwiftData modellerinden gelen ilişkilerde, hâlâ force unwrap'ten olabildiğince kaçınıyorum. Bir bebek kaydının büyüme ölçümü olmayabilir, biberon saati boş olabilir — bunlar hata değil, gerçek hayatın normal hali. Kodun da buna göre davranması gerekiyor.
