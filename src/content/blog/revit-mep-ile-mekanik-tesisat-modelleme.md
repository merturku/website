---
title: "Revit MEP ile Mekanik Tesisat Modellemesi Nasıl Yapılır?"
description: "Revit MEP'te mekanik tesisat modellemesinin adımları: sistem tipleri, kanal/boru yönlendirme ve parametrik ayarlar üzerine pratik bir rehber."
date: 2026-02-01
tags: ["Revit MEP", "BIM"]
category: "bim"
draft: false
---

Revit MEP ile mekanik tesisat modellemesi, ilk bakışta sadece kanal ve boru çizmek gibi görünüyor ama gerçekte doğru sonuç almak için sistem mantığını, parametrik ayarları ve disiplinler arası referansları iyi kurgulamak gerekiyor. Bu yazıda, sahada ve ofiste yıllardır uyguladığım Revit MEP modelleme sürecini adım adım anlatacağım.

## Revit MEP'e Başlarken: Doğru Temel

Mekanik tesisat modellemesine başlamadan önce en kritik adım, mimari ve statik modelin bağlantılı (linked) olarak doğru şekilde projeye eklenmesi. Yanlış paylaşılan koordinatlar ya da güncel olmayan bir mimari model, tüm mekanik modelin baştan yanlış kurulmasına sebep oluyor. Deneyimlerimde, projeye başlamadan önce ortak koordinat sistemi ve paylaşılan seviyeler (shared levels) üzerinde mutlaka mutabakat sağlanmalı.

Ayrıca proje şablonunun (template) doğru seçilmesi de önemli. MEP şablonunda tanımlı sistem tipleri, boru/kanal ayarları ve görsel stiller, ilerleyen aşamalarda büyük zaman kazandırıyor. Şablonu proje başında düzenlemek, sonradan yüzlerce elemanı tek tek düzeltmekten çok daha az efor gerektiriyor.

## Sistem Tiplerinin Tanımlanması

Revit MEP'te modellemenin bel kemiği, sistem tiplerinin (system types) doğru tanımlanmasıdır. Isıtma suyu gidiş-dönüş, soğutma suyu, temiz su, pis su, yağmur suyu, yangın söndürme gibi her sistem ayrı bir sistem tipi olarak tanımlanmalı. Bunun nedeni sadece görsel ayrım değil; sistem bazlı filtreleme, hesaplama ve metraj çıkarma işlemlerinin bu tanımlara dayanmasıdır.

Sahada gördüğüm en yaygın hatalardan biri, farklı sistemlerin aynı sistem tipi altında modellenmesi. Bu durumda ileride metraj ya da koordinasyon aşamasında sistemleri ayırt etmek ciddi zaman kaybına yol açıyor. Bu tür yaygın hataları ve önlemlerini ileride ayrı bir yazıda ele alacağım.

## Kanal ve Boru Yönlendirme Mantığı

Kanal (duct) ve boru (pipe) yönlendirmesi, mekanik tesisat modellemesinin en çok emek isteyen kısmı. Revit MEP'te otomatik yönlendirme (auto-route) özelliği bazı basit durumlarda işe yarasa da, karmaşık projelerde manuel yönlendirme çoğu zaman kaçınılmaz oluyor.

Yönlendirme yaparken dikkat ettiğim temel kurallar:

- **Öncelik sırası:** Genellikle gravite ile çalışan sistemler (pis su, yağmur suyu) önce yerleştirilir, çünkü eğim zorunluluğu diğer sistemlere göre daha az esneklik tanır.
- **Asma tavan boşluğu:** Kanal ve boruların asma tavan üstü boşlukta diğer disiplinlerle (elektrik kablo tavası, sprinkler hattı) çakışmayacak şekilde katmanlanması gerekir.
- **Bakım erişimi:** Vana, damper, temizleme kapağı gibi elemanların erişilebilir noktalarda kalması, işletme döneminde büyük kolaylık sağlar.

Bu yönlendirme stratejilerini daha kapsamlı ele aldığım bir yazıyı ileride yayınlayacağım; kanal ve boru güzergahı planlamasının şaft ve kat geçişlerindeki özel zorlukları ayrı bir başlık olmayı hak ediyor.

## Parametrik Ayarlar ve Aile (Family) Kullanımı

Revit MEP'in gücü, parametrik ailelerden geliyor. Bir fan coil, klima santrali ya da pompa modellenirken kullanılan family dosyası, sadece geometriyi değil aynı zamanda debi, basınç kaybı, güç tüketimi gibi mühendislik parametrelerini de taşımalı. Üretici firmaların BIM kütüphanelerinden indirilen family'ler bazen gereğinden fazla detay içerip modeli ağırlaştırabiliyor; bu yüzden projeye uygun LOD seviyesinde sadeleştirilmiş family kullanmak, performans açısından daha sağlıklı.

Kendi projelerimde özel ekipmanlar için family oluştururken, parametrelerin isimlendirmesini şirket içi standarda göre sabitliyorum. Bu, ileride farklı projelerde aynı family'lerin tekrar kullanılmasını ve metraj şablonlarının tutarlı kalmasını sağlıyor.

## Sistem Kontrolleri ve Hata Ayıklama

Modelleme ilerledikçe Revit'in "System Inspector" ve "Check Duct/Pipe Systems" araçlarını düzenli kullanmak, sistem bağlantılarındaki kopuklukları erken yakalamayı sağlıyor. Bir kanal parçası görsel olarak bağlıymış gibi görünse de sistem mantığında kopuk olabiliyor; bu da debi hesaplarının yanlış çıkmasına neden oluyor.

Modelleme bittikten sonra mutlaka bir çakışma kontrolü (clash detection) sürecinden geçirilmesi gerekiyor. Bu konuyu [clash detection ve mekanik tesisatta çakışma tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) yazımda ayrıntılı olarak ele aldım; Revit modelinden çıkan sonuçların Navisworks gibi araçlarla nasıl kontrol edildiğini orada anlatıyorum.

## Görselleştirme ve Doküman Üretimi

Revit MEP'te model tamamlandıktan sonra, kesitler, planlar ve izometrik görünümler saha ekiplerinin işi anlaması için kritik önem taşıyor. Görünüm şablonlarını (view templates) sistem bazında ayarlamak, her disiplinin kendi ilgilendiği sistemi net görmesini sağlıyor. Ayrıca etiketleme (tagging) ve programlama (scheduling) özellikleriyle, model üzerinden otomatik malzeme listeleri türetilebiliyor.

## Modelleme Standartları ve Ekip Uyumu

Birden fazla kişinin aynı proje üzerinde çalıştığı durumlarda, modelleme standartlarının baştan yazılı hale getirilmesi büyük fark yaratıyor. Katman isimlendirmesi, worksets kullanımı, aile kütüphanesi organizasyonu gibi konularda ortak bir standart olmazsa, farklı mühendislerin modellediği bölümler arasında tutarsızlıklar ortaya çıkıyor. Sahada gördüğüm kadarıyla, özellikle worksets yapısının doğru kurgulanmaması, büyük projelerde model performansını ciddi şekilde düşürebiliyor ve senkronizasyon sırasında dosya kilitlenmelerine yol açabiliyor.

Kendi ekiplerimde çalışırken, proje başında kısa bir "modelleme rehberi" hazırlıyorum: hangi sistem tipi hangi renkte gösterilecek, aile parametreleri nasıl isimlendirilecek, paylaşılan parametreler (shared parameters) nereden yönetilecek gibi konular bu rehberde netleşiyor. Bu küçük yatırım, proje ilerledikçe onlarca saatlik düzeltme işini önlüyor.

## Worksharing ve Büyük Proje Yönetimi

Büyük ölçekli projelerde tek bir Revit dosyası üzerinde birden fazla mühendisin aynı anda çalışması gerekiyor. Bu durumda worksharing (paylaşılan çalışma) özelliğinin doğru yapılandırılması kritik önem taşıyor. Worksets'lerin sisteme göre mi yoksa kat/bölgeye göre mi ayrılacağı, projenin büyüklüğüne ve ekip yapısına göre değişiyor. Deneyimlerimde, orta ölçekli projelerde sistem bazlı worksets (ısıtma, soğutma, sıhhi tesisat gibi) daha yönetilebilir sonuç verirken, çok katlı büyük projelerde kat bazlı ayrım senkronizasyon sürelerini kısaltıyor.

## Pratik Öneriler

Revit MEP ile mekanik tesisat modellemesi yaparken sahadan edindiğim önerileri özetlemek gerekirse:

1. **Şablonu proje başında düzenleyin**, sistem tipleri ve görsel stiller baştan tanımlı olsun.
2. **Sistem tiplerini disiplinli tanımlayın**, karışık sistem kullanımı ileride ciddi metraj hatalarına yol açar.
3. **Yönlendirmeyi öncelik sırasına göre yapın**, gravite sistemlerini önce yerleştirin.
4. **Family'leri sadeleştirin**, gereğinden fazla detay modeli yavaşlatır.
5. **Düzenli sistem kontrolü yapın**, kopuk bağlantıları erken yakalayın.

Revit MEP, doğru disiplinle kullanıldığında mekanik tesisat projelerinde hem tasarım kalitesini hem de saha uygulama hızını ciddi şekilde artırıyor. Bir sonraki yazıda bu modelleme sürecinin çıktısı olan modellerin nasıl çakışma kontrolünden geçirildiğini daha derinlemesine ele alacağım.
