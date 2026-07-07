---
title: "Şantiyede BIM Modelinin Sahaya Aktarılması: As-Built Süreçleri"
description: "Tasarım aşamasındaki BIM modelinin şantiyede uygulanması ve as-built (yapıldı bilgisi) modelinin oluşturulma süreci."
date: 2026-05-10
tags: ["Şantiye Yönetimi", "As-Built", "BIM"]
category: "bim"
draft: false
---

Tasarım masasında hazırlanan bir BIM modeli ne kadar mükemmel olursa olsun, şantiyeye indiği anda gerçeklikle yüzleşir. Sahada yıllardır gördüğüm bir gerçek var: proje aşamasında koordine edilmiş bir mekanik tesisat modeli, uygulama sırasında saha koşulları, malzeme temini, imalat toleransları ve yerinde alınan kararlar nedeniyle mutlaka değişir. Bu yazıda, şantiyede BIM modelinin sahaya nasıl aktarıldığını ve inşaat tamamlandıktan sonra as-built (yapıldı bilgisi) modelinin nasıl oluşturulduğunu, bir şantiye yöneticisi gözünden anlatacağım.

## Tasarım Modelinden Saha Uygulamasına Geçiş

Bir mekanik tesisat modelinin şantiyeye aktarılması, sadece dosyayı sahaya göndermekten ibaret değildir. Uygulama projesi aşamasında hazırlanan model, genellikle belirli bir LOD seviyesinde teslim edilir ve saha ekiplerinin bu modeli okuyup imalat çizimlerine (shop drawing) dönüştürmesi gerekir. Bu geçişte en sık karşılaştığım sorun, saha ekiplerinin BIM modeline erişiminin ya hiç olmaması ya da sadece statik PDF çıktılarıyla sınırlı kalmasıdır.

Deneyimlerimde, model verisinin doğrudan sahaya taşınabildiği projelerde (tablet üzerinden model görüntüleme, ölçüm alma, işaretleme gibi) hem hata oranı düşüyor hem de saha ekiplerinin koordinasyon mantığını anlaması kolaylaşıyor. Bu noktada [BIM 360 ile Şantiyede Mekanik Tesisat Koordinasyonu](/blog/bim-360-ile-santiyede-mekanik-tesisat-koordinasyonu) yazısında değindiğim bulut tabanlı paylaşım araçları büyük fark yaratıyor; usta ve ekip şefleri sahada telefonlarından model üzerinde kot ve ölçü kontrolü yapabiliyor.

## Sahada Yaşanan Değişikliklerin Kaydı

İnşaat süresince mekanik tesisat güzergâhlarında değişiklik yapılması neredeyse kaçınılmazdır. Bunun en yaygın nedenleri şöyle sıralanabilir:

- Yapısal elemanlarla (kiriş, kolon, perde) beklenmeyen çakışmalar
- Saha ölçülerinin proje ölçüleriyle tam örtüşmemesi
- Malzeme teminindeki değişiklikler (farklı marka/model ekipman kullanımı)
- Diğer disiplinlerle sahada ortaya çıkan yeni çakışmalar
- Uygulama kolaylığı için ekip şeflerinin aldığı yerinde kararlar

Sahada gördüğüm kadarıyla, bu değişikliklerin anlık olarak kaydedilmemesi, projenin sonunda as-built model hazırlığını neredeyse yeniden modelleme seviyesine getiriyor. Bu yüzden değişikliklerin günlük ya da haftalık periyotlarla not edilmesi, mümkünse saha fotoğrafları ve ölçümleriyle desteklenmesi gerekiyor. Bazı projelerde bu süreç düzenli koordinasyon toplantılarıyla takip ediliyor; bu konuyu ayrıca [BIM Koordinasyon Toplantıları Nasıl Yönetilir?](/blog/bim-koordinasyon-toplantilari-nasil-yonetilir) yazısında ele almıştım.

## As-Built Modelin Oluşturulma Süreci

As-built model, adından da anlaşılacağı gibi "gerçekte ne yapıldığının" dijital kaydıdır. İşletme ve bakım (facility management) süreçlerinde kritik rol oynadığı için bu modelin doğruluğu, tasarım modelinden çok daha fazla önem taşır. As-built model hazırlığında izlediğim genel akış şu şekilde:

**Saha Verisi Toplama**: İnşaat süresince değişen güzergahlar, kot bilgileri ve ekipman yerleşimleri saha ekipleri tarafından not edilir. Mümkünse lazer tarama (point cloud) veya el ölçümleriyle doğrulanır.

**Model Güncelleme**: Uygulama projesi modeli, saha verilerine göre güncellenir. Bu aşamada değişen kanal ve boru güzergahları, ekipman konumları ve boyutları düzeltilir.

**Ekipman Bilgilerinin Girilmesi**: Fiilen sahaya monte edilen ekipmanların seri numarası, üretici bilgisi, montaj tarihi gibi veriler modele işlenir. Bu bilgiler işletme döneminde bakım planlaması için doğrudan kullanılır.

**Doğrulama ve Onay**: Güncellenmiş model, saha ekibi ve BIM koordinatörü tarafından çapraz kontrol edilerek onaylanır.

**Teslim**: As-built model, işveren veya işletme ekibine teslim edilir; genellikle sözleşmede belirtilen formatta ve LOD seviyesinde sunulur.

## As-Built Sürecinde Karşılaşılan Zorluklar

En büyük zorluklardan biri, saha ekiplerinin BIM modelleme konusunda yeterli bilgiye sahip olmaması. Bu nedenle as-built veri toplama işini genellikle saha mühendisleri fiziksel not ve fotoğraf olarak tutuyor, model güncellemesini ise BIM ekibi ofis ortamında yapıyor. Bu iş bölümü verimli çalışsa da, bilgi kaybı riski her zaman mevcut; sahada alınan küçük bir kararın modele yansımaması, işletme döneminde ciddi sorunlara yol açabiliyor.

Bir diğer zorluk ise zamanlama. As-built model hazırlığı genellikle proje sonunda, teslim baskısı altında yapılıyor. Oysa bu süreç, inşaat ilerledikçe kademeli olarak yürütülürse hem daha doğru hem de daha az maliyetli oluyor. Deneyimlerimde, her imalat aşaması tamamlandıkça modelin o bölümünü güncellemek, proje sonunda tek seferde yapılan büyük bir revizyondan çok daha sağlıklı sonuç veriyor.

## Sonuç ve Pratik Öneriler

Şantiyede BIM modelinin sahaya aktarılması ve as-built sürecinin sağlıklı yürütülmesi, projenin işletme dönemine sağlıklı bir veri mirası bırakması açısından kritik önem taşıyor. Bu süreçte dikkat edilmesi gereken bazı pratik noktalar:

- Saha ekiplerine modele erişim sağlayacak basit ve pratik araçlar sunun; PDF'ye sıkışmış bir koordinasyon süreci sahada işe yaramıyor.
- Değişiklikleri anlık olarak kaydedin, proje sonuna bırakmayın.
- As-built güncellemesini imalat aşamalarına paralel, kademeli şekilde yürütün.
- Ekipman ve malzeme bilgilerini modelin bir parçası olarak düşünün, sadece geometriyi değil işletme verisini de doğru taşıyın.
- BIM ve saha ekipleri arasında düzenli bilgi akışı kurun; bu iletişim eksikliği as-built doğruluğunu en çok zedeleyen faktördür.
