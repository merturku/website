---
title: "Clash Detection: Mekanik Tesisatta Çakışma Tespiti Neden Kritik?"
description: "Clash detection (çakışma tespiti) mekanik tesisat projelerinde neden vazgeçilmez? Navisworks ile örnek süreç ve saha hatalarını önleme yöntemleri."
date: 2026-02-08
tags: ["Clash Detection", "Navisworks", "BIM"]
category: "bim"
draft: false
---

Şantiyede yıllardır gördüğüm en sinir bozucu sahnelerden biri, monte edilmiş bir kanalın tam karşısına gelen bir kirişle karşılaşmaktır. İşçilik tamamlanmış, malzeme kesilmiş, ama güzergah fiziksel olarak mümkün değil. Clash detection, yani çakışma tespiti, tam olarak bu tür sahne senaryolarını sahaya çıkmadan, sanal ortamda önlemek için var. Mekanik tesisat projelerinde bu sürecin neden vazgeçilmez olduğunu bu yazıda anlatacağım.

## Clash Detection Nedir?

Clash detection, farklı disiplinlere ait BIM modellerinin (mimari, statik, mekanik, elektrik) bir araya getirilip yazılım aracılığıyla geometrik çakışmaların otomatik olarak tespit edilmesi sürecidir. Bu süreç genellikle Navisworks, Solibri ya da BIM 360 gibi koordinasyon platformları üzerinden yürütülür.

Çakışmalar genellikle üç kategoride incelenir:

- **Sert çakışma (hard clash):** İki elemanın fiziksel olarak aynı uzayı paylaşması — örneğin bir kanalın kirişin içinden geçmesi.
- **Yumuşak çakışma (soft/clearance clash):** Elemanlar birbirine değmese de bakım, izolasyon ya da erişim payı için gereken mesafenin ihlal edilmesi.
- **Zaman/iş programı çakışması (4D clash):** İki farklı imalatın aynı zaman diliminde aynı alanda çalışmasından kaynaklanan operasyonel çakışmalar.

Mekanik tesisat özelinde en sık karşılaştığım tip sert çakışmalar; kanal-kiriş, boru-kolon, kanal-kablo tavası gibi kombinasyonlar günlük rutin haline geliyor.

## Neden Mekanik Tesisatta Kritik?

Mekanik tesisat, bir yapıdaki en çok "üç boyutlu hareket" gerektiren disiplin. HVAC kanalları geniş kesitli olduğu için asma tavan boşluğunda en fazla yer kaplayan elemanlardan; sıhhi tesisat ve yağmur suyu hatları ise eğim zorunluluğu nedeniyle esnekliği en az olan sistemler. Bu iki özellik bir araya geldiğinde, mekanik tesisat genelde çakışma tespitinde en çok "kaybeden" taraf oluyor — yani güzergahı değiştirilmesi gereken taraf çoğunlukla mekanik tesisat oluyor.

[Mekanik tesisatta BIM'in faydaları](/blog/mekanik-tesisatta-bim-faydalari) yazımda bahsettiğim gibi, bu disiplinin karmaşık geometrisi nedeniyle erken koordinasyon şart. Clash detection, bu koordinasyonun somut ve ölçülebilir bir aracı.

## Navisworks ile Örnek Süreç

Kendi iş akışımda Navisworks kullanarak yürüttüğüm tipik bir clash detection süreci şöyle işliyor:

1. **Model toplama:** Mimari, statik, mekanik ve elektrik modelleri NWC formatına dönüştürülüp Navisworks'e aktarılır.
2. **Test setlerinin oluşturulması:** Hangi disiplinlerin birbiriyle test edileceği tanımlanır — örneğin "Mekanik Kanal vs. Statik Kiriş" ya da "Boru vs. Elektrik Kablo Tavası".
3. **Tolerans ayarları:** Sert çakışmalar için sıfıra yakın tolerans, yumuşak çakışmalar için bakım payına uygun tolerans (örneğin izolasyon kalınlığı kadar boşluk) tanımlanır.
4. **Test çalıştırma ve raporlama:** Yazılım çakışmaları otomatik listeler; her çakışma bir görsel, konum bilgisi ve öncelik derecesiyle raporlanır.
5. **Sorumluluk ataması:** Her çakışma ilgili disipline atanır, çözüm için son tarih belirlenir.
6. **Yeniden test:** Modeller güncellendikten sonra aynı test seti tekrar koşularak çözülen ve çözülmeyen çakışmalar karşılaştırılır.

Bu döngü, proje ilerledikçe azalan bir çakışma sayısı grafiğiyle takip edilir. Sahada gördüğüm kadarıyla, düzenli aralıklarla (haftalık ya da iki haftalık) çalıştırılan bu döngü, proje sonunda çakışma sayısını dramatik biçimde düşürüyor.

## Koordinasyon Toplantılarının Rolü

Clash detection raporları tek başına bir anlam ifade etmiyor; bu raporların tartışılıp karara bağlandığı koordinasyon toplantıları asıl işi yapıyor. Toplantılarda her disiplin temsilcisi kendi çözüm önerisini masaya getirmeli ve çakışmanın kim tarafından, ne zamana kadar çözüleceği netleşmeli. Deneyimlerimde, karar alınmadan dağılan toplantılar, bir sonraki tur çakışma raporunda aynı sorunların tekrar çıkmasına neden oluyor.

## BIM 360 ve Bulut Tabanlı Koordinasyon

Büyük ve dağınık ekiplerle çalışılan projelerde, Navisworks'ün masaüstü tabanlı yapısının yanında BIM 360 gibi bulut platformları da yaygın olarak kullanılıyor. Bu platformlar sayesinde çakışma raporları saha ekipleriyle gerçek zamanlı paylaşılabiliyor ve şantiyedeki koordinasyon süreçleri hızlanıyor. Bu konuyu ayrı bir yazıda daha detaylı ele alacağım.

## Saha Hatalarını Önlemede Somut Katkı

Sahada bir çakışmanın fark edilmesi ile tasarım aşamasında fark edilmesi arasındaki maliyet farkı çok büyük. Sahada tespit edilen bir çakışma; kesilmiş malzeme israfı, ek işçilik, iş programında gecikme ve bazen de statik onay süreçlerinin yeniden başlaması anlamına geliyor. Tasarım aşamasında yakalanan aynı çakışma ise sadece birkaç dakikalık model düzenlemesiyle çözülebiliyor.

Bu nedenle clash detection sürecini "bir kere yapılıp geçilecek kontrol" olarak değil, proje boyunca sürekli işleyen bir kalite güvence mekanizması olarak görmek gerekiyor.

## Çakışmaların Önceliklendirilmesi

Büyük bir projede tek bir clash detection turunda yüzlerce, hatta binlerce çakışma raporu çıkabiliyor. Bunların hepsini aynı önem düzeyinde ele almaya çalışmak ekibi yorar ve gerçekten kritik olan çakışmaların gözden kaçmasına yol açar. Bu yüzden çakışmaları önceliklendirmek gerekiyor. Ben genellikle şu sıralamayı izliyorum: önce yapısal elemanlarla (kiriş, kolon, perde) olan sert çakışmalar, ardından ana dağıtım hatları (ana kanal, ana kolektör) arasındaki çakışmalar, en son da küçük çaplı dallanma hatlarındaki çakışmalar ele alınıyor. Bu sıralama, en çok emek ve zaman gerektiren düzeltmelerin erken aşamada çözülmesini sağlıyor.

Ayrıca her çakışmanın "gerçek" mi yoksa "modelleme hatası" mı olduğunu ayırt etmek de önemli. Bazen iki eleman modelde çakışıyor gibi görünse de, aslında biri yanlış yerleştirilmiş placeholder bir nesnedir; bu tür sahte çakışmalar raporları şişirip asıl önemli konuların gözden kaçmasına neden olabiliyor.

## Raporlama ve Takip Araçları

Çakışma raporlarının etkili takibi için sadece Navisworks'ün kendi rapor formatları değil, genellikle Excel tabanlı takip tabloları ya da BIM 360 üzerindeki sorun (issue) takip modülleri de kullanılıyor. Her çakışmaya bir kimlik numarası, sorumlu disiplin, açılış tarihi ve hedef kapanış tarihi atanması, projenin ilerleyen aşamalarında hangi konuların tekrarlayan sorun haline geldiğini görmeyi kolaylaştırıyor. Deneyimlerimde, bu tür sistematik takip yapılmayan projelerde aynı çakışmaların defalarca farklı isimlerle yeniden raporlandığını görüyorum; bu da ekip için gereksiz bir zaman kaybı oluyor.

## Pratik Öneriler

Clash detection sürecini etkili yürütmek isteyenler için önerilerim:

1. **Test setlerini disiplin bazında netleştirin**, her kombinasyonu ayrı ayrı tanımlayın.
2. **Tolerans değerlerini gerçekçi belirleyin**, aşırı sıkı tolerans gereksiz çakışma gürültüsü yaratır.
3. **Raporları düzenli aralıklarla üretin**, birikmiş çakışma sayısı yönetilemez hale gelmesin.
4. **Her çakışmaya sorumlu ve tarih atayın**, sahipsiz çakışmalar kaybolur.
5. **Toplantı çıktısını modele işleyin**, karar alınan çözümler mutlaka güncel modele yansıtılmalı.

Clash detection, mekanik tesisat projelerinde hem maliyet hem zaman hem de kalite açısından en yüksek getiriyi sağlayan BIM uygulamalarından biri. Doğru araç ve disiplinli bir süreçle yürütüldüğünde, şantiyede yaşanacak onlarca sorunu daha proje masasındayken çözmek mümkün.
