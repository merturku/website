---
title: "Mekanik Tesisatta Kanal ve Boru Yönlendirme Stratejileri"
description: "Sınırlı tavan arası ve şaft alanlarında kanal (duct) ve boru (pipe) yönlendirmesi için pratik BIM stratejileri ve koordinasyon öncelikleri."
date: 2026-05-17
tags: ["Mekanik Tesisat", "Revit MEP"]
category: "bim"
draft: false
---

Sahada en çok zaman kaybettiğimiz konulardan biri, tavan arası ve şaft alanlarındaki kanal ve boru yönlendirmesidir. Kat yüksekliği kısıtlı, kiriş altları dolu, elektrik kablo taşıyıcıları ve sıhhi tesisat borularıyla paylaşılan bir alanda mekanik tesisatın kanal ve boru güzergahlarını doğru kurgulamak, projenin hem uygulanabilirliğini hem de maliyetini doğrudan etkiliyor. Bu yazıda, Revit MEP üzerinde yıllardır kullandığım pratik kanal ve boru yönlendirme stratejilerini ve koordinasyon önceliklerini paylaşacağım.

## Neden Yönlendirme Stratejisi Gerekli?

Kanal (duct) ve boru (pipe) yönlendirmesi, ilk bakışta basit bir güzergah çizme işi gibi görünse de, aslında çok disiplinli bir optimizasyon problemidir. Tavan arasında aynı anda HVAC kanalları, sıhhi tesisat ve yangın tesisatı boruları, elektrik kablo tavaları ve bazen yapısal donatılar yer alır. [Mekanik Tesisatta BIM Faydaları](/blog/mekanik-tesisatta-bim-faydalari) yazısında da değindiğim gibi, bu karmaşayı 2D çizimlerle yönetmek neredeyse imkansızdır; BIM'in asıl değeri de burada ortaya çıkar.

Deneyimlerimde, yönlendirme stratejisi olmadan modellemeye başlayan ekipler, ilerleyen aşamalarda ciddi çakışma sorunlarıyla karşılaşıyor ve modelin büyük kısmını yeniden düzenlemek zorunda kalıyor. Oysa baştan belirlenen basit birkaç kural, bu tekrar işini büyük ölçüde önlüyor.

## Koordinasyon Öncelik Sırası

Sınırlı tavan arası yüksekliğinde hangi sistemin önce yerleştirileceği, projenin genel akışını belirleyen en kritik karardır. Sahada yaygın olarak kabul gören öncelik sırası şu şekildedir:

1. **Yapısal elemanlar** (kiriş, kolon) - sabit ve değiştirilemez.
2. **Büyük kesitli HVAC kanalları** - eğim gerektirmeyen ama en fazla yer kaplayan sistem.
3. **Gravite ile çalışan sıhhi tesisat ve pis su boruları** - eğim zorunluluğu olduğu için esnekliği en az olan sistem.
4. **Yangın söndürme (sprinkler) hatları** - genellikle yönetmelik gereği belirli bir tavan mesafesinde kalmalı.
5. **Basınçlı sıhhi tesisat ve ısıtma-soğutma boruları** - göreceli olarak en esnek sistem, küçük kesit avantajıyla son sırada yönlendirilebilir.
6. **Elektrik kablo tavaları ve aydınlatma** - genellikle en esnek sistemdir, diğerlerinin arasına yerleştirilebilir.

Bu sıralamayı sabit bir kural olarak değil, projeye göre uyarlanması gereken bir çerçeve olarak görüyorum. Örneğin gravite borularının çok uzun mesafeler kat etmesi gereken projelerde, sıhhi tesisat güzergahı bazen HVAC kanallarından bile önce belirleniyor.

## Pratik Yönlendirme Stratejileri

**Ana Güzergahları Erken Belirleyin**: Detaylı modellemeye geçmeden önce, ana kanal ve boru güzergahlarını şematik olarak koridor ve teknik hacimler üzerinden planlamak, ilerideki çakışmaları büyük ölçüde azaltıyor.

**Katmanlama (Layering) Mantığı**: Tavan arasını yatayda "şeritler" halinde düşünmek işe yarıyor; örneğin koridorun bir tarafını HVAC'a, diğer tarafını sıhhi tesisat ve elektrik hatlarına ayırmak gibi. Bu yaklaşım hem koordinasyonu kolaylaştırıyor hem de bakım erişimini iyileştiriyor.

**Şaft ve Dikey Geçişleri Önceden Planlayın**: Yatay güzergahlar kadar, kanal ve boruların katlar arası geçiş yaptığı şaft noktalarının da erken belirlenmesi gerekiyor. Bu konuyu çok katlı projeler özelinde [Çok Katlı Yapılarda Mekanik Şaft ve Tesisat Koordinasyonu](/blog/cok-katli-yapilarda-mekanik-saft-tesisat-koordinasyonu) yazısında daha ayrıntılı ele aldım.

**Bakım Erişimini Unutmayın**: Yönlendirme yaparken sadece güzergahın sığması değil, vana, damper ve temizleme kapaklarına erişilebilirliği de göz önünde bulundurmak gerekiyor. Sahada gördüğüm kadarıyla, bu detay tasarım aşamasında atlanınca işletme döneminde ciddi şikayetlere yol açıyor.

**Standart Detaylar Kullanın**: Tekrarlayan durumlar için (örneğin koridor kesişimlerinde kanal-boru geçişleri) standart tipik detaylar hazırlamak, her seferinde sıfırdan çözüm üretmek yerine modelleme hızını ciddi şekilde artırıyor.

## Çakışma Tespiti ile Yönlendirmenin İlişkisi

İyi bir yönlendirme stratejisi, çakışma tespiti (clash detection) sürecinin yükünü büyük ölçüde azaltır. Ancak hiçbir strateji çakışmaları tamamen ortadan kaldırmaz; bu yüzden yönlendirme stratejisini clash detection sürecinin bir tamamlayıcısı olarak görmek gerekiyor. [Clash Detection: Mekanik Tesisatta Çakışma Tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) yazısında bu sürecin nasıl yürütüldüğünü detaylı anlatmıştım; burada vurgulamak istediğim nokta, yönlendirme stratejisinin çakışma sayısını azaltarak koordinasyon toplantılarının çok daha verimli geçmesini sağladığıdır.

## HVAC Kanallarında Özel Durumlar

HVAC kanalları, kesit büyüklüğü nedeniyle yönlendirme stratejisinde en fazla dikkat gerektiren sistemdir. Kanal boyutlandırması netleşmeden yönlendirme yapmak, ilerleyen aşamalarda güzergahın tamamen değişmesine neden olabiliyor. Bu yüzden HVAC hesaplarının erken tamamlanması ve 3 boyutlu modelleme sürecine bu verilerle başlanması büyük önem taşıyor; bu konuyu [HVAC Sistemlerinin BIM ile 3 Boyutlu Modellenmesi](/blog/hvac-sistemlerinin-bim-ile-3-boyutlu-modellenmesi) yazısında ele almıştım.

## Sonuç ve Pratik Öneriler

Kanal ve boru yönlendirmesi, mekanik tesisat BIM sürecinin en fazla tecrübe gerektiren adımlarından biri. Yazılım burada sadece bir araç; asıl değeri katan şey, sahadan gelen tecrübeyle kurgulanan mantıklı bir strateji.

- Koordinasyon öncelik sırasını projeye özel olarak belirleyin, kör kör standart sıralamaya güvenmeyin.
- Ana güzergahları detay modellemeden önce şematik olarak planlayın.
- Şaft ve dikey geçiş noktalarını erken netleştirin.
- Bakım erişimini yönlendirme kararlarının bir parçası haline getirin.
- Yönlendirme stratejisini clash detection süreciyle birlikte, birbirini besleyen iki adım olarak yürütün.
