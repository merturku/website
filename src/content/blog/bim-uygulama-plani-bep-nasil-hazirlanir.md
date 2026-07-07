---
title: "BIM Uygulama Planı (BEP) Nasıl Hazırlanır?"
description: "Bir projenin BIM Uygulama Planı (BEP) hangi bölümlerden oluşur, mekanik tesisat disiplini için BEP'te nelere dikkat edilmeli?"
date: 2026-05-03
tags: ["BEP", "BIM Yönetimi"]
category: "bim"
draft: false
---

Bir projeye BIM ile başlarken en çok atlanan adımlardan biri, işin en başında sağlam bir BIM Uygulama Planı (BEP) hazırlamaktır. Sahada onlarca yıldır süregelen "çiz, bas, gönder" alışkanlığından BIM'e geçişte, ekiplerin en çok zorlandığı nokta modelleme yazılımını öğrenmek değil, süreci baştan tanımlamamaktır. Deneyimlerimde, BEP'i atlayıp doğrudan modellemeye geçen projelerde ilerleyen aşamalarda koordinasyon kaosu, tutarsız LOD seviyeleri ve disiplinler arası veri uyuşmazlıkları kaçınılmaz oluyor. Bu yazıda, bir BIM Uygulama Planının hangi bölümlerden oluşması gerektiğini ve özellikle mekanik tesisat disiplini açısından BEP'te nelere dikkat edilmesi gerektiğini pratik bir bakış açısıyla ele alacağım.

## BEP Nedir ve Neden Gereklidir?

BEP, bir projede BIM süreçlerinin nasıl yürütüleceğini tanımlayan, tüm paydaşların uyması gereken kuralları belirleyen yaşayan bir belgedir. [BIM Nedir?](/blog/bim-nedir-insaat-sektorunde-rehber) yazısında değindiğim gibi, BIM sadece 3 boyutlu model üretmek değil, bir bilgi yönetim sürecidir; BEP de bu sürecin yol haritasıdır. İşveren gereksinimlerini (EIR - Employer's Information Requirements) karşılamak, disiplinler arası koordinasyonu netleştirmek ve proje sonunda teslim edilecek verinin formatını baştan belirlemek için BEP olmazsa olmazdır.

Sahada gördüğüm kadarıyla, BEP'i "formalite gereği hazırlanan bir evrak" olarak görmek en büyük hatalardan biri. Oysa iyi hazırlanmış bir BEP, ilerleyen aylarda yaşanacak onlarca anlaşmazlığı daha proje başlamadan önler. Özellikle çok disiplinli büyük ölçekli projelerde, kim hangi elemanı modelleyecek, hangi yazılım kullanılacak, dosya isimlendirme kuralları ne olacak gibi sorular BEP'te net cevap bulmalı.

## BEP'in Temel Bölümleri

Bir BEP genellikle şu ana başlıklardan oluşur:

**Proje Bilgileri ve Hedefler**: Projenin BIM kullanım amaçları (tasarım koordinasyonu, metraj, saha yönetimi, işletme dönemi vb.) net şekilde tanımlanmalı. Her hedefin hangi aşamada, hangi disiplin tarafından karşılanacağı belirtilmeli.

**Roller ve Sorumluluklar**: BIM Yöneticisi, disiplin koordinatörleri, modelleyiciler kimler olacak, kim neyin sahibi olacak. Mekanik tesisat tarafında bu genellikle ayrı bir MEP koordinatörü ile yürütülür.

**Ortak Veri Ortamı (CDE)**: Modellerin nerede, hangi klasör yapısıyla, hangi izin seviyeleriyle paylaşılacağı. Bu bölüm özellikle çok paydaşlı projelerde kritik önem taşır.

**LOD/LOI Tanımları**: Her disiplin ve her proje aşaması için gereken model detay seviyesi. Bu konuyu ayrıntılı olarak [LOD Seviyeleri](/blog/lod-nedir-mekanik-tesisat-lod-seviyeleri) yazısında ele almıştım; BEP'te bu seviyelerin fazlara göre tablo halinde verilmesi işi çok kolaylaştırır.

**Koordinasyon Süreci**: Clash detection'ın ne sıklıkla yapılacağı, hangi toleranslarla çalışılacağı, çakışma raporlarının nasıl kapatılacağı.

**Yazılım ve Dosya Standartları**: Kullanılacak yazılımlar, dosya formatları, koordinat sistemi, birim standartları.

**Teslim Gereksinimleri**: Proje sonunda ya da her fazda teslim edilecek dokümanlar ve modellerin formatı.

## Mekanik Tesisat Disiplini İçin BEP'te Dikkat Edilmesi Gerekenler

Mekanik tesisat, BEP hazırlığında genellikle en çok göz ardı edilen disiplinlerden biri oluyor; oysa koordinasyon yükünün büyük kısmı burada toplanıyor. BEP hazırlarken mekanik tesisat açısından şu noktaları özellikle netleştiriyorum:

**Ekipman ve Aksesuar Modelleme Kuralları**: Hangi ekipmanların üretici kataloğundan gerçek family'lerle, hangilerinin jenerik olarak modelleneceği baştan tanımlanmalı. Aksi halde ilerleyen fazlarda ekipman değişikliklerinde tüm modelin yeniden düzenlenmesi gerekebiliyor.

**Kanal ve Boru Modelleme Standartları**: Kanal ve boru sistemlerinin hangi LOD seviyesinde, izolasyonlu mu izolasyonsuz mu modelleneceği, bağlantı elemanlarının (dirsek, redüksiyon, T parçası) ne şekilde temsil edileceği belirtilmeli.

**Koordinasyon Öncelik Sırası**: Mekanik, elektrik, sıhhi tesisat ve yangın tesisatı arasında sınırlı tavan arası alanlarında kimin önceliği olacağı BEP'te bir madde olarak yer almalı. Bu konuyu [Kanal ve Boru Yönlendirme Stratejileri](/blog/mekanik-tesisatta-kanal-boru-yonlendirme-stratejileri) yazısında daha detaylı işledim, ama BEP aşamasında en azından genel prensiplerin kağıda dökülmesi gerekiyor.

**Sistem Ayrımları ve Filtreleme**: HVAC, sıhhi tesisat, yangın söndürme gibi alt sistemlerin model içinde nasıl ayrıştırılacağı (parametre, worksets, kategori) tanımlanmalı ki koordinasyon toplantılarında ilgili sistemler kolayca filtrelenebilsin.

**Metraj ve Miktar Bilgisi Gereksinimleri**: Eğer BIM modelinden metraj çıkarılacaksa, bu BEP'te en başından belirtilmeli; çünkü metraj doğruluğu, modelin nasıl kurgulandığına doğrudan bağlıdır.

## BEP Ne Zaman ve Kim Tarafından Güncellenmeli?

BEP, tek seferlik hazırlanıp rafa kaldırılan bir belge değildir. Proje ilerledikçe, özellikle tasarımdan uygulama projesine geçişte veya ihale sürecinde yüklenici değiştiğinde, BEP'in gözden geçirilmesi gerekir. Şantiye aşamasına geçildiğinde de BEP'in saha gereksinimlerini (as-built süreçleri, saha ekiplerinin model erişimi gibi) kapsayacak şekilde güncellenmesi büyük önem taşıyor; bu konuyu [As-Built Süreçleri](/blog/santiyede-bim-modelinin-sahaya-aktarilmasi-as-built) yazısında ele almıştım.

Güncelleme sorumluluğu genellikle BIM Yöneticisinde olur, ama her disiplin koordinatörünün kendi alanındaki değişiklik taleplerini iletmesi gerekir. Sahada gördüğüm en sağlıklı yaklaşım, her proje fazı geçişinde (kavramsal tasarım - kesin proje - uygulama projesi - imalat) BEP'in kısa bir revizyon toplantısıyla gözden geçirilmesi.

## Sonuç

BEP, bir projenin BIM sürecinin anayasasıdır. Ne kadar detaylı ve gerçekçi hazırlanırsa, ilerideki koordinasyon problemleri o kadar azalır. Mekanik tesisat açısından bakıldığında, BEP'in modelleme standartlarını, koordinasyon önceliklerini ve teslim gereksinimlerini net şekilde tanımlaması, sahada yaşanacak birçok belirsizliği daha proje başlamadan ortadan kaldırır.

**Pratik öneriler:**

- BEP'i tek seferlik değil, yaşayan bir belge olarak ele alın ve her faz geçişinde gözden geçirin.
- Mekanik tesisat için LOD seviyelerini ve koordinasyon önceliklerini tablo halinde, net biçimde tanımlayın.
- Dosya isimlendirme ve CDE klasör yapısını en başında tüm disiplinlerle birlikte belirleyin.
- Metraj veya işletme dönemi kullanımı planlanıyorsa, bu gereksinimleri BEP'e daha proje başında ekleyin.
