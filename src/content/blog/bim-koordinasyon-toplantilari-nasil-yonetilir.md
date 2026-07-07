---
title: "BIM Koordinasyon Toplantıları Nasıl Yönetilir?"
description: "Etkili bir BIM koordinasyon toplantısının gündemi, katılımcıları ve karar takip süreci; şantiye yöneticisi gözünden pratik öneriler."
date: 2026-04-05
tags: ["BIM Koordinasyon", "Şantiye Yönetimi"]
category: "bim"
draft: false
---

BIM koordinasyon toplantıları, teoride bir modelin farklı disiplinlerini bir araya getirip çakışmaları çözmek için yapılır; pratikte ise çoğu zaman amacından sapan, uzun ve verimsiz oturumlara dönüşebiliyor. Hem BIM uzmanı hem de şantiye yöneticisi olarak yıllardır bu toplantıların hem masasında hem sahasında bulundum ve BIM koordinasyon toplantılarının verimli geçmesi ile geçmemesi arasındaki farkın, aslında toplantı öncesi hazırlıkta gizli olduğunu gördüm.

## BIM Koordinasyon Toplantısının Amacı Ne Olmalı?

Bir koordinasyon toplantısının amacı, model üzerinde çakışma aramak değil, zaten tespit edilmiş çakışmalara karar bağlamaktır. Bu ayrım çok önemli. Çakışma tespiti (clash detection) toplantı öncesinde yazılım üzerinden otomatik olarak yapılmalı; toplantıya gelindiğinde önümüzde zaten önceliklendirilmiş bir çakışma listesi olmalı. Bu konuyu daha teknik açıdan ele aldığım [clash detection ile mekanik tesisatta çakışma tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) yazımda süreci detaylandırıyorum.

Sahada gördüğüm en büyük zaman kaybı, toplantı sırasında canlı olarak model içinde gezinip "bakalım burada bir sorun var mı" şeklinde çakışma aranmasıdır. Bu yaklaşım hem toplantı süresini gereksiz uzatıyor hem de katılımcıların dikkatini dağıtıyor. Toplantı, karar üretme mekanizması olmalı; keşif aracı değil.

## Gündem Nasıl Oluşturulmalı?

Etkili bir BIM koordinasyon toplantısının gündemi genelde şu sırayı izliyor:

1. **Önceki toplantı kararlarının takibi:** Geçen toplantıda alınan kararlardan hangileri modele işlendi, hangileri hâlâ açık?
2. **Yeni tespit edilen çakışmaların önceliklendirilmesi:** Kritik (iş programını doğrudan etkileyen), orta (koordinasyon gerektiren ama acil olmayan) ve düşük öncelikli (kozmetik) olarak sınıflandırma yapılmalı.
3. **Disiplin bazlı sunum:** Her disiplin kendi güncellemesini kısaca özetlemeli; uzun sunumlardan kaçınılmalı.
4. **Karar alma ve sorumlu atama:** Her çakışma için net bir çözüm önerisi, sorumlu kişi/disiplin ve tarih belirlenmeli.

Gündemin toplantıdan en az bir gün önce tüm katılımcılara dağıtılması, herkesin kendi disiplinine dair hazırlıklı gelmesini sağlıyor. Hazırlıksız gelen bir katılımcı, toplantı süresini kendi model güncellemesini o an yapmaya çalışarak uzatıyor.

## Kimler Katılmalı?

BIM koordinasyon toplantılarında katılımcı sayısı kadar katılımcı niteliği de önemli. Deneyimlerimde en verimli toplantılar, her disiplinden karar alma yetkisine sahip birer temsilcinin katıldığı, kalabalık olmayan oturumlar oluyor. Mimari, statik, mekanik ([Revit MEP ile mekanik tesisat modelleme](/blog/revit-mep-ile-mekanik-tesisat-modelleme) sürecini yürüten ekip), elektrik ve BIM koordinatörü temel katılımcılar arasında yer almalı. Şantiye yöneticisi olarak benim rolüm genelde, model üzerinde alınan kararların sahada uygulanabilirliğini değerlendirmek oluyor; çünkü bazen model üzerinde "mükemmel" görünen bir çözüm, montaj sırası veya erişim açısından sahada pratik olmayabiliyor.

## Toplantı Sırasında Model Nasıl Kullanılmalı?

Toplantı sırasında (Navisworks, BIM 360 gibi) bir platform üzerinden canlı model gösterimi yapmak önemli, ama bunun amacı tartışmayı görselleştirmek olmalı, çözüm üretmek değil. Çok disiplinli koordinasyon için kullandığım araçları [Navisworks ile çok disiplinli koordinasyon](/blog/navisworks-ile-cok-disiplinli-koordinasyon) yazımda ele almıştım. Toplantıda bir çakışma ekrana getirildiğinde, ilgili disiplinler kendi aralarında hızlıca bir çözüm önerisi üretmeli; eğer üç dakikada karara bağlanamıyorsa, o madde "takip listesine" alınıp toplantı dışında ayrıca ele alınmalı. Aksi halde tek bir zor çakışma, toplantının tamamını tıkayabiliyor.

## Karar Takip Süreci

Toplantıda alınan her karar, bir sorumlu ve bir termin ile birlikte kayıt altına alınmalı. Ben genelde basit bir tablo kullanıyorum: çakışma tanımı, ilgili disiplinler, karar, sorumlu, termin ve durum (açık/kapalı). Bu tablonun bir sonraki toplantıya kadar güncel tutulması, "geçen toplantıda ne konuşmuştuk" tartışmalarını ortadan kaldırıyor.

Kararların modele işlenip işlenmediğinin doğrulanması da ayrı bir adım. Bir karar alınıp model güncellenmezse, bir sonraki koordinasyon turunda aynı çakışma tekrar karşımıza çıkıyor ve bu durum ekip içinde güven kaybına yol açıyor.

## Sık Yapılan Hatalar

- **Çok sık ve çok uzun toplantılar planlamak:** Haftalık ritimde ama kısa (45-60 dakika) tutulan toplantılar, aylık ama saatlerce süren toplantılardan daha verimli oluyor.
- **Gündemsiz toplantı yapmak:** Net gündem olmadan başlanan toplantılar dağılıyor.
- **Kararları sözlü bırakmak:** Yazılı kayıt olmadan alınan kararlar unutuluyor ya da farklı hatırlanıyor.
- **Şantiye perspektifini dışarıda bırakmak:** Sadece model üzerinden yürütülen, saha uygulanabilirliğinin göz ardı edildiği toplantılar, sonradan revizyon maliyeti doğuruyor.

## Sonuç

BIM koordinasyon toplantıları, iyi yönetildiğinde projenin en değerli karar alma mekanizmalarından biri haline geliyor. Anahtar nokta, toplantıyı bir keşif değil bir karar alma platformu olarak konumlandırmak. Net bir gündem, doğru katılımcılar, disiplinli bir karar takip süreci ve toplantı dışında yürütülen sağlam bir çakışma tespiti altyapısı bir araya geldiğinde, koordinasyon toplantıları kısa sürede projeyi gerçekten ileri taşıyan oturumlara dönüşüyor.
