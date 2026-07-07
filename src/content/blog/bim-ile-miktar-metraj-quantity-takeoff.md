---
title: "BIM ile Miktar Metraj (Quantity Takeoff) Nasıl Çıkarılır?"
description: "Mekanik tesisat malzeme miktarlarının BIM modelinden otomatik olarak çıkarılması; metraj doğruluğu ve maliyet kontrolüne etkisi."
date: 2026-05-24
tags: ["Metraj", "BIM", "Maliyet Yönetimi"]
category: "bim"
draft: false
---

Mesleğe başladığım yıllarda metraj çıkarmak, 2D çizimler üzerinde cetvelle ölçüm yapmak ve Excel'e satır satır veri girmek anlamına geliyordu. Bir kanal güzergahının uzunluğunu, bir boru çapının metresini, bir ekipmanın adedini elle saymak hem zaman alıyor hem de insan hatasına açık bir süreçti. BIM ile miktar metraj (quantity takeoff) çıkarmaya başladığımda gördüğüm en büyük fark, modelin kendisinin zaten bir veri tabanı olması ve bu verinin doğru kurgulandığında saniyeler içinde güncel metraj raporuna dönüşebilmesiydi. Bu yazıda mekanik tesisat özelinde BIM'den metraj çıkarma sürecini ve bunun maliyet kontrolüne etkisini anlatacağım.

## BIM Tabanlı Metrajın Geleneksel Yöntemden Farkı

Geleneksel metraj yönteminde, 2D çizimler üzerinden ölçüm yapılır ve bu ölçümler ayrı bir Excel dosyasında toplanır. Proje üzerinde herhangi bir revizyon yapıldığında, metrajın da elle güncellenmesi gerekir; bu da genellikle unutulan ya da geç yapılan bir adımdır. BIM tabanlı metrajda ise model, geometrik bilgiyle birlikte malzeme, tip ve miktar bilgisini de taşır. Model güncellendiğinde, metraj tabloları da otomatik olarak güncellenir.

[Mekanik Tesisatta BIM Faydaları](/blog/mekanik-tesisatta-bim-faydalari) yazısında bahsettiğim gibi, BIM'in en somut faydalarından biri de bu otomasyon. Ancak burada dikkat edilmesi gereken kritik bir nokta var: metraj doğruluğu, doğrudan modelin nasıl kurgulandığına bağlı. Modelin sadece "görsel olarak doğru" değil, "veri olarak doğru" kurgulanması gerekiyor.

## Metraj Çıkarma Sürecinin Adımları

**Model Kalitesinin Sağlanması**: Metraj çıkarmadan önce modelin tutarlı bir şekilde modellenmiş olması gerekiyor. Örneğin tüm kanal parçalarının doğru tip ve boyut parametreleriyle tanımlanmış olması, boru bağlantı elemanlarının (dirsek, T parçası, redüksiyon) ayrı ayrı ve doğru kategoride yer alması şart.

**Parametre Yapısının Kurgulanması**: Metrajın anlamlı olması için modeldeki elemanların malzeme, çap, izolasyon durumu gibi parametrelerle etiketlenmiş olması gerekiyor. Bu parametreler, çizelge (schedule) oluştururken filtreleme ve gruplama için kullanılıyor.

**Çizelge (Schedule) Oluşturma**: Revit gibi yazılımlarda, model üzerinden doğrudan miktar çizelgeleri oluşturulabiliyor. Kanal uzunlukları, boru metrajları, ekipman adetleri, izolasyon alanları gibi veriler kategori bazında listelenebiliyor.

**Dışa Aktarım ve Raporlama**: Çizelgeler genellikle saha ve satın alma ekiplerinin kullanabileceği formatlarda (Excel, PDF) dışa aktarılıyor. Bazı projelerde bu süreç [Dynamo ile Mekanik Tesisat Otomasyonu](/blog/dynamo-ile-mekanik-tesisat-otomasyonu) yazısında bahsettiğim gibi otomatikleştirilerek, düzenli aralıklarla otomatik rapor üretimi sağlanabiliyor.

**Doğrulama**: Model kaynaklı metrajın, en azından örnekleme yoluyla sahadaki gerçek durumla veya bağımsız bir kontrol metrajıyla karşılaştırılması, güvenilirliği artıran önemli bir adım.

## Metraj Doğruluğunu Etkileyen Faktörler

Sahada gördüğüm kadarıyla, BIM'den çıkan metrajın hatalı olmasının en yaygın nedeni yazılımın kendisi değil, modelin kurgulanma şeklidir. Örneğin:

- Kanal ve boruların tek parça yerine gereksiz şekilde bölünmesi ya da birleştirilmesi, uzunluk hesaplarını yanlış yansıtabiliyor.
- Aksesuar ve bağlantı elemanlarının (valf, damper, redüksiyon) modele eklenmemesi, adet bazlı metrajda ciddi eksikliklere yol açıyor.
- İzolasyon bilgisinin modele işlenmemesi, izolasyon metrajının tamamen atlanmasına neden oluyor.
- Farklı disiplinlerin aynı elemanı birden fazla kez modellemesi (örneğin hem mekanik hem yapısal ekibin aynı ekipmanı ayrı ayrı çizmesi), miktarların şişmesine yol açabiliyor.

Bu yüzden metraj çıkarmadan önce modelin bir "temizlik" sürecinden geçirilmesi, LOD seviyesinin metraj amacına uygun olup olmadığının kontrol edilmesi gerekiyor. LOD seviyesi ile metraj doğruluğu arasındaki ilişkiyi daha önce [LOD Nedir? Mekanik Tesisat LOD Seviyeleri](/blog/lod-nedir-mekanik-tesisat-lod-seviyeleri) yazısında ele almıştım; özetle, düşük LOD seviyesinde detaylı metraj beklemek gerçekçi değil.

## Maliyet Kontrolüne Etkisi

BIM tabanlı metrajın en somut faydası, maliyet kontrolü süreçlerine kattığı hız ve şeffaflık. Proje ilerledikçe tasarımda yapılan her değişikliğin maliyet etkisi, güncel metraj sayesinde neredeyse anlık olarak görülebiliyor. Bu da özellikle değer mühendisliği (value engineering) çalışmalarında büyük kolaylık sağlıyor; örneğin bir kanal güzergahının değiştirilmesi durumunda, malzeme miktarındaki artış ya da azalış hızlıca hesaplanabiliyor.

Deneyimlerimde, satın alma süreçlerinin BIM tabanlı metrajla desteklendiği projelerde, malzeme siparişlerinin gerçek ihtiyaca daha yakın verildiğini, fazla veya eksik sipariş kaynaklı gecikmelerin azaldığını gördüm. Ayrıca ilerleme ödemelerinin (hakediş) hazırlanmasında da model tabanlı miktarlar, saha ile ofis arasındaki tartışmaları büyük ölçüde azaltıyor.

## Sonuç ve Pratik Öneriler

BIM ile miktar metraj çıkarmak, doğru kurgulandığında hem zaman kazandıran hem de doğruluğu artıran güçlü bir süreç. Ancak bu doğruluk otomatik gelmiyor; modelin baştan metraj amacına uygun kurgulanması gerekiyor.

- Metraj gereksinimlerini modellemeye başlamadan önce netleştirin; hangi elemanların hangi parametrelerle etiketleneceğini baştan tanımlayın.
- Kanal, boru ve aksesuarların modelde eksiksiz ve doğru kategoride yer aldığından emin olun.
- Çizelgeleri düzenli aralıklarla saha ve satın alma ekipleriyle paylaşarak modelin güncelliğini teyit edin.
- Mümkünse örnekleme yoluyla model tabanlı metrajı gerçek saha verisiyle karşılaştırarak güvenilirliği doğrulayın.
- Tekrarlayan raporlama ihtiyaçlarında otomasyon araçlarından yararlanarak zaman kazanın.
