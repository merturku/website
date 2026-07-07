---
title: "LOD (Level of Development) Nedir? Mekanik Tesisat Projelerinde LOD Seviyeleri"
description: "LOD 100'den LOD 500'e kadar mekanik tesisat modellerinde detay seviyeleri ne anlama gelir? Proje aşamalarına göre LOD gereksinimleri."
date: 2026-03-08
tags: ["LOD", "BIM Standartları"]
category: "bim"
draft: false
---

BIM projelerinde ekiplerle çalışırken sıkça karşılaştığım bir soru var: "Bu model hangi detayda olmalı?" Bu sorunun cevabı aslında BIM standartlarının içinde net bir şekilde tanımlanmış: LOD, yani Level of Development. LOD nedir sorusunu sahada ve ofiste birçok kez taşeronlara, mühendislere ve hatta bazı proje yöneticilerine anlatmak zorunda kaldım; çünkü mekanik tesisat projelerinde LOD seviyesinin doğru tanımlanmaması, hem gereğinden fazla emek harcanmasına hem de eksik detaylandırma yüzünden sahada sürprizlere yol açıyor.

## LOD Kavramının Temel Mantığı

LOD, bir BIM modelindeki bir elemanın (örneğin bir hava kanalı, bir boru veya bir mekanik ekipman) geometrik detay ve gömülü bilgi (bilgi/veri) açısından ne kadar geliştirilmiş olduğunu tanımlayan bir ölçek. Genellikle LOD 100'den LOD 500'e kadar beş kademeli bir yapı kullanılır ve her kademe, proje aşamasına karşılık gelir. Burada önemli bir ayrımı vurgulamak isterim: LOD sadece görsel detayı değil, aynı zamanda elemana ait verinin (üretici bilgisi, kapasite, bakım verisi gibi) olgunluğunu da kapsar.

Mekanik tesisat özelinde bu ayrım çok kritik, çünkü [Mekanik Tesisatta BIM Faydaları](/blog/mekanik-tesisatta-bim-faydalari) yazımda da bahsettiğim gibi, modelin değerini belirleyen sadece 3D geometri değil, o geometrinin taşıdığı bilgi zenginliğidir.

## LOD 100: Kavramsal Seviye

LOD 100, projenin en erken aşamasında kullanılan, genellikle sembolik veya hacimsel temsillerden oluşan seviyedir. Mekanik tesisat açısından bu aşamada henüz kanal veya boru güzergahları net değildir; sadece mekanik odaların, şaftların ve yaklaşık ekipman hacimlerinin yerleşimi belirlenir. Ön tasarım ve fizibilite çalışmalarında bu seviye yeterlidir ve bu aşamada detaylı bir modelleme talep etmek gereksiz zaman kaybına yol açar.

## LOD 200: Yaklaşık Geometri Seviyesi

LOD 200'de kanal ve boru hatları yaklaşık boyut, konum ve yönlendirmeyle modellenmeye başlar ancak kesin ölçüler ve bağlantı detayları henüz netleşmemiştir. Bu seviye genellikle ön proje (schematic design) aşamasında kullanılır. Deneyimlerimde, ihale öncesi metraj çalışmalarında LOD 200 seviyesindeki bir model, yaklaşık miktarları çıkarmak için yeterli olabiliyor ama kesin metraj için yeterli değil.

## LOD 300: Kesin Geometri Seviyesi

LOD 300, uygulama projesi aşamasında beklediğimiz seviyedir. Bu aşamada kanal ve boru hatlarının kesin boyutu, konumu, yüksekliği ve diğer disiplinlerle olan ilişkisi netleşmiş olmalıdır. Sahada gördüğüm kadarıyla, imalat öncesi koordinasyon toplantılarının sağlıklı yürütülebilmesi için model en az LOD 300 seviyesinde olmalı; aksi halde çakışma testleri anlamlı sonuçlar üretmiyor. Bu seviyedeki modeller [Clash Detection](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) çalışmaları için minimum gereksinim olarak kabul edilir.

## LOD 350 ve LOD 400: İmalat ve Montaj Detayı

Bazı projelerde LOD 300 ile LOD 400 arasında ara bir seviye olarak LOD 350 tanımlanır; bu seviyede disiplinler arası bağlantı noktaları (interface) da modele eklenir. LOD 400 ise imalat ve montaj seviyesidir: kanal parçalarının bağlantı elemanları, askı detayları, boru rakorları gibi sahada doğrudan üretime veya montaja esas teşkil edecek düzeyde detay içerir. Prefabrikasyon yapılan projelerde mekanik tesisat için LOD 400 seviyesi neredeyse zorunlu hale geliyor, çünkü fabrikada üretilecek kanal parçalarının ölçüleri modelden doğrudan çekiliyor.

## LOD 500: As-Built Seviyesi

Projenin tesliminde ulaşılması gereken son seviye LOD 500'dür; bu, sahada gerçekten inşa edilmiş durumu birebir yansıtan as-built modeldir. Bu seviyeye ulaşmak için saha uygulaması sırasında yapılan tüm revizyonların modele işlenmesi gerekir. Bu süreci daha detaylı olarak [Şantiyede BIM Modelinin Sahaya Aktarılması ve As-Built Süreçleri](/blog/santiyede-bim-modelinin-sahaya-aktarilmasi-as-built) yazımda ele alıyorum. LOD 500 seviyesindeki bir mekanik tesisat modeli, işletme ve bakım (facility management) ekipleri için de en değerli veri kaynağı haline geliyor.

## Proje Aşamalarına Göre LOD Gereksinimlerinin Belirlenmesi

Bir projeye başlarken LOD gereksinimlerinin hangi aşamada hangi seviyede olması gerektiği, genellikle BIM uygulama planında (BEP) tanımlanır. Benim önerim, her disiplin ve her proje aşaması için LOD matrisini proje başlangıcında tüm paydaşlarla birlikte netleştirmek. Aksi halde, örneğin bir mühendislik ofisi LOD 200 seviyesinde teslim yaparken şantiye ekibi LOD 300 bekliyorsa, bu uyumsuzluk koordinasyon sürecinde ciddi gecikmelere yol açabiliyor.

## Sahada Karşılaşılan Yanlış Anlamalar

LOD kavramıyla ilgili en sık karşılaştığım yanlış anlama, LOD seviyesinin sadece görsel detayla eşitlenmesi. Oysa bir elemanın görsel olarak çok detaylı görünmesi, onun LOD açısından yüksek seviyede olduğu anlamına gelmiyor; asıl belirleyici olan, o elemana ait verinin (malzeme, kapasite, üretici, bakım bilgisi) ne kadar olgunlaştığı. Bu yüzden taşeron ve modelleme ekipleriyle LOD tartışırken her zaman hem geometri hem veri boyutunu birlikte ele almaya özen gösteriyorum.

Bir başka yaygın yanlış anlama, tüm proje elemanlarının aynı LOD seviyesinde olması gerektiği varsayımı. Gerçekte bir projenin farklı bölümleri, farklı LOD seviyelerinde ilerleyebilir. Örneğin bir binanın ana mekanik odası LOD 400 seviyesinde detaylandırılırken, henüz kesinleşmemiş bir tadilat alanındaki tesisat LOD 200 seviyesinde kalabilir. Bu yüzden LOD gereksinimlerini proje geneli için tek bir sayı olarak değil, eleman kategorisi ve proje bölgesi bazında tanımlamak çok daha sağlıklı bir yaklaşım.

## Şartname ve Sözleşmelerde LOD'un Yeri

LOD gereksinimlerinin sadece teknik bir tercih değil, aynı zamanda sözleşmesel bir konu olduğunu da vurgulamak isterim. Hangi disiplinin hangi aşamada hangi LOD seviyesinde teslim yapacağı, mekanik tesisat şartnamelerinde net şekilde tanımlanmadığında, taraflar arasında "bu detay bizim işimiz değildi" tartışmaları çıkabiliyor. Bu konuyu [Mekanik Tesisat Şartnamelerinde BIM Gereksinimleri](/blog/mekanik-tesisat-sartnamelerinde-bim-gereksinimleri) yazımda daha kapsamlı ele alıyorum; ancak burada kısaca belirtmek gerekirse, LOD tanımlarının şartnameye somut ve ölçülebilir şekilde yazılması, proje sonunda yaşanacak birçok anlaşmazlığı baştan önlüyor.

## Sonuç ve Pratik Öneriler

LOD, mekanik tesisat projelerinde ekipler arası beklenti uyuşmazlıklarını önlemenin en etkili araçlarından biri. Pratik önerilerim:

- Proje başında her aşama için net bir LOD matrisi tanımlayın ve tüm paydaşlarla paylaşın.
- Koordinasyon ve çakışma testleri için minimum LOD 300 seviyesini şart koşun.
- Prefabrikasyon planlanan bölgelerde LOD 400 gereksinimini erken aşamada netleştirin.
- Saha revizyonlarını düzenli olarak modele işleyerek proje sonunda LOD 500 seviyesine ulaşmayı hedefleyin.
- LOD'u sadece görsel detay değil, geometri ve veri olgunluğunun birlikte değerlendirildiği bir ölçek olarak ele alın.

Bu yaklaşım, hem tasarım ekiplerinin gereksiz detaylandırmaya zaman harcamasını önlüyor hem de saha uygulamasında ihtiyaç duyulan bilginin doğru zamanda hazır olmasını sağlıyor.
