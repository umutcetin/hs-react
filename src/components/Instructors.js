import React, { Component } from 'react'
import Instructor from  './InstructorItem';

export class Instructors extends Component {
    state = {
        instructors: [
          {
            id: 16,
            title: 'Buket Doran',
            modalTitle: 'BUKET DORAN<br/>Bas Gitar, Grup Koçluğu, Şarkı Yazma ve Söyleme, Repertuar Hazırlama ve Sahne Koçluğu, Armoni ve Müzik Teorisi',
            iconSrc: "e01.png",
            imgSrc: 'e01.png',
            modalText: '1974 yılında İstanbul\'da doğdu. 1991\'de Boğaziçi Üniversitesi\'nde işletme okurken tanıştığı müzisyen arkadaşları ile kurdukları Ain\'t Blonde adlı grubu ile sahne almaya başladı. Sonrasında alternatif rock, metal, hard rock, pop rock, funk gibi tarzlarda çalışmalar yapan Volvox, Köpek, Odesia, Kutsal Hazine Avcıları, Deniz Kızı, Güvenç Dağüstün Project, Rockstar Galactica, Akusta, Black adlı gruplarla; Abdülcabbar, Tribülans, Mandala, Gitar, Caravan, Flatline, Rock House, Sappho, Q Jazz, Salsanat, Alman Bira Evi, My Moon, Jade, Kemancı, Kule Rock City, Hayal Kahvesi, Dorock, Mojo, Shaft gibi çeşitli mekanlarda sahne aldı.<br/> 2000\'li yıllarda Şebnem Dönmez\'in \'Ne Şeker Şey\'; sonrasında Fatih Altaylı\'nın \'Başka Yerde Yok\'; ardından Okan Bayülgen\'in \'Zaga\' ve \'TV Makinası\' adlı canlı tv programlarında da uzun bir süre bas çaldı.<br/> 2007\'de, Yamaha Music School adına Almanya\'dan gelen farklı eğitmenler tarafından bas gitar eğitmen teknikleri üzerine hazırlanan seminerlere katıldı. Kanadalı gitarist Dave Goodman ile, 2008\'de Hayal Kahvesi\'nde düzenlenen Yamaha klinik/konser etkinliğinde, 2009\'da Modern Müzik Akademisi\'ndeki Master Class etkinliğinde, davulda da A. \'Zacky\' Tsoukas olmak üzere sahne aldı.  Demir Demirkan\'ın prodüktörlüğünü yaptığı \'Kırmızı Deniz Yıldızı\' adlı projede; Kutsal Koçer ve Aklan Akdağ\'ın albümlerinde bazı parçaların bas gitar kayıtlarında çaldı.<br/> 1997\'den itibaren Şebnem Ferah ile sahne çalışmaları başladı, 2001 yılındaki \'Perdeler\' albümü ile bu beraberliklerini stüdyo çalışmalarına da taşıdılar. Uzun süren konser dönemleri ve festivaller sonrasında, 2007\'de, Bostancı Gösteri Merkezi\'nde, senfoni orkestrası eşliğinde bir konser gerçekleştirdiler ve bu performansın kaydı \'Şebnem Ferah 10 Mart 2007 İstanbul Konseri\' adıyla dvd ve cd olarak sunuldu. 2007\'de \'Onno Tunç Şarkıları\' adlı albüm için \'Ünzile\' ; 2008\'de \'Güldünya\' projesi için \'Masum Değiliz\' ; 2011\'de Nilüfer\'in \'12 Düet\' adlı albümü için \'Erkekler Ağlamaz \' ve sonra Şebnem\'in \'Özgürce Yaşa\' adlı şarkılarının kaydı için stüdyodaydılar. Halen birlikte konserlere ve  albüm çalışmalarına devam etmekteler.<br/> Bir dönem gerçekleştirdiği sanatçı ve prodüksiyon menajerliği çalışmalarından sonra, 2010\'da, kurucu ortak olarak yer aldığı ekip ile Taksim\'de Babajim Stüdyoları\'nın kurulma aşaması ve ilk dönem çalışmalarında yer aldı. Bu arada, bilgi ve deneyimlerini, biriktirdiği kaynaklar aracılığıyla paylaşmak, yardımcı olabilmek amacıyla, bas ve davul üzerine hazırlanan müzik dergisi Drum&Bass için de ilk sayısından itibaren yazılar hazırladı.<br/> Son dönemde ise yeni müzik projelerinin provaları ve sahne performansları yanında, bas gitar derslerine, amatör ve kurumsal grup koçluğu çalışmalarına ağırlık vermektedir. 2012\'de Kadıköy\'de kurduğu HomeStudio Müzik Atölyesi\'nin hedeflendiği şekilde hizmet verebilmesi ve müzik atölyelerinin gerçekleştirilmesi, her yaş grubundan müzik severlerin sahne alabilmesi için çalışmalarına devam etmektedir.'
          },
          {
            id: 17,
            title: 'Cenk Ünnü',
            modalTitle: 'Cenk Ünnü<br/>Bateri, Grup Koçluğu',
            iconSrc: "e02.png",
            imgSrc: 'e02.png',
            modalText: 'Cenk Ünnü, 1967\'de İstanbul\'da doğdu. Aksaray Oruçgazi ilk ve ortaokulunu ve ardından Pertevniyal Lisesi\'ni bitirdi. İstanbul Üniversitesi antropoloji bölümünden mezun oldu. 1986\'da Hakan Utangaç ile beraber Pentagram\'ı kurdu. Grupla beraber yurt içi ve yurt dışında önemli festival ve konserlerde sayısız kez sahne aldı ve 7 albüm çalışması yaptı.Türk müzik hayatına derin etkileri olan Pena Müzik Evi\'ni 22 yıl boyunca başarıyla işletti. Uzun süredir devam eden eğitimci kimliğiyle de pek çok müzisyenin yetişmesine yardımcı oldu. Evli ve 2 çocuk babasıdır.'
          },
          {
            id: 18,
            title: 'İlkay Özboyar',
            modalTitle: 'İLKAY ÖZBOYAR<br/>Temel Piyano, Klasik Piyano, Rock Klavye, Grup Koçluğu, Armoni ve Müzik Teorisi, Bilgisayar ile Müzik Prodüksiyon ve Kayıt Teknikleri, Şarkı Yazma ve Söyleme, Repertuar Hazırlama ve Sahne Koçluğu',
            iconSrc: "e03.png",
            imgSrc: 'e03.png',
            modalText: '1983 yılında Bursa\'da doğdu. İstanbul ve Bursa\'da bilişim sektöründe çalıştı ve profesyonel olarak dijital tasarım ile ilgilendi. Yaptığı tasarım işlerine orijinal müzikler yapmaya başladıktan sonra 20li yaşlarında müzisyen olmaya karar verdi. Kendi çabası ile kayıt programları (DAW), armoni, synthesizer (klavye) ve elektrik gitar öğrendi. Müzik çalışmalarını ve basit bir dille yazdığı müzik dökümanlarını paylaştığı kişisel web sitesi ile birçok amatör müzisyenin armoni hakkında bilgi sahibi olmasını sağladı.<br/> 2012 yılında tekrar İstanbul\'a gelmesiyle birlikte Home Studio Kadıköy\'de ders vermeye başladı. Bazı kısa film ve video mapping işlerine müzik hazırladı, müzik prodüksiyonlarında çeşitli roller aldı (düzenleme, enstrümanistlik, editing, kayıt). Aktif olarak sahne/kayıt müzisyenliği ve aranjörlük yapmaya devam etmektedir.<br/> Sahne veya stüdyo müzisyeni olarak çalıştığı bazı isimler:<br/> Bihter Erkmen<br/> Cengiz Tural<br/> Cenk Eroğlu<br/> Ergin Altınel<br/> Karapaks<br/>  Mavisakal<br/> Mehmet Şenol Şişli (MŞŞ)<br/> Murat İlkan<br/> Özge Fışkın'
          },
          {
            id: 19,
            title: 'Can Bora Genç',
            modalTitle: 'CAN BORA GENÇ<br/>Şan ve Vokal Teknikleri, Grup Koçluğu, Solfej ve Kulak Eğitimi, Vokal ve Stil Koçluğu, Repertuar Hazırlama ve Sahne Koçluğu',
            iconSrc: "e04.png",
            imgSrc: 'e04.png',
            modalText: '1975 yılında Ankara’da doğdu. İlk, orta ve lise eğitimini Ankara’da tamamladı. Orta Doğu Teknik Üniversitesi Fizik Bölümünü kazandı ve 3. Sınıfa kadar bu bölüme devam etti . Fizik bölümünü bırakıp, Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği bölümünü kazandı. Aynı bölümden mezun oldu. İstanbul Üniversitesi Opera bölümünde yarı zamanlı eğitim aldı.<br/>  Bir çok projede solist ve korist olarak görev aldı. Rock Müzikaller, Avenue Q, Jekyll And Hyde, Bir Şehnaz Oyun gibi müzikal ve müzikli oyunlarda sahne aldı.<br/> 2011 – 2013 yılları arasında Koç Üniversitesi Müzikal Kulübünde vokal eğitmeni olarak görev yapmıştır. 2012 ve 2015 yılları arasında Kurtalan Ekspres grubunun solistliğini yapmıştır. Grubun 2014 şubat ayında çıkardığı ‘Göğe Selam 2‘ adlı anma albümünde ‘Eğri eğri doğru doğru‘ ve Murat İlkan ile düet olarak hazırlanan ‘Dostum Dostum‘ adlı eseri yorumlamıştır. Uzun yıllardır çeşitli reklam müziklerini seslendirmektedir. Ayrıca Koç Üniversitesi Müzikal Kulübü Genel Koordinatörlüğü ve Müzik Direktörlüğü görevini yürütmektedir.'
          },
          {
            id: 20,
            title: 'Burak Karataş',
            modalTitle: 'BURAK KARATAŞ<br/>Bateri, Grup Koçluğu',
            iconSrc: "e05.png",
            imgSrc: 'e05.png',
            modalText: 'Müzisyen bir aileden gelen Burak Karataş, 6 yaşında davul ve piyano çalmaya başladı. Profesyonel müzik hayatına ise 1992-94 yılları arasında bar gruplarında çalarak adım atan Karataş, aynı zamanda Mimar Sinan Üniversitesi Endüstri Ürünleri Tasarımı bölümüne devam etti. 1994 yılından bu yana Kargo grubunda müzik çalışmalarına devam eden Burak, Kargo’nun toplam 10 albümünde yer aldı.<br/> Kargo grubunun yanı sıra, Vega, Göksel, Aslı, Özgür Çevik ve Yalın (İlk 3 albümü boyunca) gibi çeşitli sanatçıların ve grupların albümlerine davulcu ve yardımcı prodüktör-aranjör olarak katkıda bulundu.<br/> Karataş, Mirkelam Kargo olarak yaptıkları RRDP albüm projesinde INXS, KISS gibi dünya çapındaki sanatçıların albümlerine prodüktörlük yapmış olan Avustralyalı Mark Opitz ile çalıştı. Opitz, çalışmalarına ve müzik hayatına yer verdiği “Sophisto-Punk” kitabında Burak Karataş’ı 5 favori davulcunun arasında göstermiştir.<br/> Burak Karataş, Kargo ve destek verdiği bazı sanatçıların albüm davul kayıtlarını, Los Angeles House of Blues Stüdyoları’nda, davul teknisyeni “Drum Doctors” Ross Garfield (Metallica-Black albümü, TOTO, Pink Floyd ve daha birçokları) ve Alanis Morisette, Dave Matthews Band, No Doubt birçok sanatçının kayıt teknisyeni Scott Campbell ile birlikte yaptı.'
          },
          {
            id: 21,
            title: 'Erdem Karaman',
            modalTitle: 'ERDEM KARAMAN<br/>Elektro Gitar, Akustik Gitar, Klasik Gitar, Caz Gitar, Rock Gitar, Grup Koçluğu',
            iconSrc: "e06.png",
            imgSrc: 'e06.png',
            modalText: '16.02.1982 tarihinde İstanbul\'da doğdu. Müziğe lise yıllarında akustik gitar çalarak başladı.  2000-2005 yılları arasında Bursa ve İstanbul\'da birçok farklı sahne projesinde yeraldı. 2005 yılında Uludağ Üniversitesi İktisadi İdari Bilimler fakültesinden mezun oldu. 2006 yılında Modern Müzik Akademisi (MMA) Gitar Bölümüne burslu olarak katıldı. Akademi sonrasında; reklam ve kısa metrajlı film müziği çalışmalarının yanı sıra, pek çok canlı projede gitarist olarak yer aldı.<br/> Halen, Murat İlkan (Ex. Pentagram Aka Mezarkabul)\'ın solo projesinde gitarist/besteci ve aranjör olarak yer almaktadır.'
          },
          {
            id: 22,
            title: 'Murat İlkan',
            modalTitle: 'MURAT İLKAN<br/>Şan ve Vokal Teknikleri, Grup Koçluğu, Solfej ve Kulak Eğitimi, Vokal ve Stil Koçluğu, Repertuar Hazırlama ve Sahne Koçluğu',
            iconSrc: "e07.png",
            imgSrc: 'e07.png',
            modalText: '1971′de, İzmir’de doğdu. 3-4 yaşlarında dinlediği her şarkıyı doğru notalarda söylemesi ve çalan ritmlere doğru bir şekilde eşlik etmesi ailesinin dikkatini çeken Murat’ın, ilkokul 1′de öğretmeninin değişmesi ve yeni öğretmeninin branşının müzik olması hayatında önemli bir dönüm noktası oldu. Yeni öğretmeni sayesinde ilk enstrümanı olan flüt ile tanışan Murat ardından aynı dönemde, hayatının ilk koro deneyimini de öğretmeni Şefik Şekeroğlu ile yaşadı. Öğretmeni ve ailesinin yönlendirmesi ile 4 yıl sürecek olan ilk şan ve solfej derslerine başladı. Bu arada Karşıyaka Spor Kulübü’nde yüzme seçmelerini kazandı ve 8 sene bu kulüpte yüzücülük yaptı.<br/> Orta okul yıllarında İzmir Fatih Koleji’ne yazıldı. Burada okulun müzik öğretmeni Ayşegül Sabuncu’nun dikkatini çekti ve kendinden yaşça büyüklerin oluşturduğu lise korosuna girdi. Burada ilk solo şarkılarını söylemeye başladı.<br/> Sonrasında, klasik müziği seven ailesi tarafından bu yönde eğitim alması konusunda teşvik edilmesi sonucu, İzmir Devlet konservatuarının yarı zamanlı programını kazandı. Buradaki öğretmeni Adnan Polge ile yaklaşık 3 yıl sürecek özel şan ve solfej eğitimine başladı. Daha sonra ailevi sebeplerden dolayı İstanbul’a taşınmaya karar verildi; bu da müzikal hayatının yeni bir dönüm noktası oldu.<br/> İstanbul’da Sawdust isimli progressive metal grubunu kurdu ve bu grupla bir çok konser verdi.<br/> 1991 yılında askere gitti. Dönüşünde akustik bir cover grubu kurdu. Kısa süre sonra bu grubu büyütüp daha kapsamlı bir cover grubu olan Cherokee’yi kurdu. Bir yandan Belkıs Aran’dan özel şan dersleri almaya başladı ve derslere yaklaşık 1 yıl devam etti. Bu arada Cherokee’nin ünü, İstanbul’un en sevilen bar gruplarından biri olmasıyla başka şehirlerde de duyuldu ve Cherokee ile çeşitli şehirlerde konserler verdiler.<br/> 1995 yılında Pentagram (Mezarkabul) grubundan teklif aldı ve grupla çalışmaya başladı. Grubun “Anatolia (1997)”,”Popçular Dışarı (1998)”,”Unspoken (2001)” ve “Bir (2002)” albümlerinde yer aldı. Grupla, yurt içi ve yurt dışında bir çok konser verdiler.<br/> 2004 yılında Cem Köksal’dan gelen teklifle Set Me Free (2004) albümünün vokallerini üstlendi.<br/> 2007 yılında Pentagram ile 20. yıl turnesine çıktılar. Bu konserlerin kayıtlarını DVD ve Audio-CD (“1987 (2008)”) olarak piyasaya çıkardılar.<br/> 2009 yılında Akustik konseptli bir grup kurdu ve birçok şehirde konser verdi.<br/> Haziran 2010′da Pentagramdan ayrıldı.<br/> 2013 Aralık ayında Sony Music etiketiyle “Fanus” isimli bir solo albüm çıkardı.<br/> Müzik hayatına solo projesiyle devam ediyor.'
          },
          {
            id: 23,
            title: 'Ahmetcan Gökçeer',
            modalTitle: 'AHMETCAN GÖKÇEER<br/>Canlı Elektronik Müzik, Bilgisayar Müziği, Bilgisayar ile Müzik Prodüksiyonu',
            iconSrc: "e08.png",
            imgSrc: 'e08.png',
            modalText: 'Besteci, müzik yapımcısı ve icracıdır. Müzik hayatına bas gitar çalarak başladı. Ardından elektrik gitar ile de çalışmalarını sürdürdü. Elektronik müziğe olan ilgisinin artmasıyla; çaldığı enstrumanları dijital ortamlar ile harmanladığı çeşitli genrelardaki kendi prodüksiyonları ile devam etti.<br/> 2012 yılında burslu kazandığı İstanbul Bilgi Üniversitesi Müzik Bölümü’nde, kompozisyon ve müzik teknolojileri üzerine lisans eğitimi aldı. Tolga Tüzün ile çalıştığı bitirme projesi “Turning Points (2016 – perküsyon dörtlüsü için), perküsyon topluluğu ‘sa.ne.na’ tarafından seslendirildi.<br/> Bunun dışında çeşitli elektronik ve akustik kompozisyonları bulunmaktadır. Bunlardan bazıları Sesin Yolculuğu, Yıldız Teknik Üniversitesi Elektrikli Müzik Günleri, Bilgi Yeni Müzik Festivali ve Festival di Musica Elettroacustica e Contemporanea del Conservatorio di Salerno Confini Mediterranei gibi festivallerde seslendirilmiştir.<br/> 2013 yılından beri solo elektronik performanslarıyla sahne almaktadır. Şu ana kadar İstanbul ve Berlin\'de çeşitli konserler vermiştir. 2014’ten bu yana da deneysel rock grubu Skata’da elektronikler, gitar ve klavye çalmaktadır.<br/> Eğitimlerinde; bilgisayar ile müzik üretmek, canlı çalmak ve bunları temel müzik bilgisi ile harmanlamaya yoğunlaşmaktadır. Beraber çalıştığı öğrencilerin kendi müzikleri ve performansları; yazılım kullanmayı öğrenmek ve müzik üzerine düşünmek ekseninde sürekli bir eşzamanlılıkta üretilmektedir.'
          },
          {
            id: 24,
            title: 'Cenk Sarkuş',
            modalTitle: 'CENK SARKUŞ<br/>Ritim Atölyesi',
            iconSrc: "e09.png",
            imgSrc: 'e09.png',
            modalText: 'Lise dönemlerinde koro çalışmalarıyla başladığı müzik yolculuğuna Yıldız Teknik Üniversitesi Sahne Sanatları Fakültesi’nde Kompozisyon bölümünü bitirerek devam etti. 90’lı yıllarda müzik dünyasının farklı kulvarlarında çalışmalarına başladı.<br/> Müzikotek ve Musical Works bünyesinde birçok jingle’a, bunun yanı sıra Türkiye’nin en sevilen dizilerinden \'Avrupa Yakası\' dahil dizi ve film müziklerine imza attı. Enstrümanist olarak Göksel, Sezen Aksu, Mine, Zeynep Casalini gibi pek çok sanatçıya perküsyonu ile eşlik etti. 2005 yılından itibaren yalnızca CLUB PERCUSSION adını verdiği performanslara yönelmiş olup, Türkiye’nin bu kulvardaki tek ismi oldu. Bu performansları Türkiye’nin seçkin mekanlarında ve uluslararası arena da –Hollanda, Belçika, Hindistan, İsviçre, İtalya, İngiltere,Ürdün, Kıbrıs- sergileme fırsatı buldu. Halen Türkiye’nin yanı sıra Avrupa, Orta Doğu ve Asya’nın pek çok ülkesinde performanslarını DJENK markası ile gerçekleştirmektedir.<br/> Son yıllarda prodüksiyonlarında dans müziğine ağırlık veren DJENK 2009 yılında “Release Me” adlı parçasıyla “Innovations in Dance Music Compilation”ında yer aldı.2010 yılında Reelgrooves Label’ından Rain Dance ( Coma Yese ) adlı parçaya remix yaptı. 2014 yılında YRC toplama albümünde 2 parçası yayınlandı.Sahne ve stüdyo çalışmalarının yanı sıra Tırtıl Anaokulu’nda başladığı ve geliştirdiği \'çocuklar ile perküsyon\' çalışmalarını, Doğuş Koleji, Robert Koleji, Bilfen, Çevre Koleji, Fenerbahçe Koleji ve Modafen gibi okullarda devam ettirmektedir.<br/> Kurumlarla \'Takım Çalışması\', Cambridge ve Dünya Grubu ile başladığı ve İngilizce sunum yaptığı \'Perküsyon ile Sosyal Kavramlar ve Eğitim\' temalı workshoplarla, Oxford ve YDS Publishing’in de eklenmesi ile tüm Türkiye’de çalışmaları devam etmektedir.Aynı zamanda Bilva Eğitim Danışmanlık’ta yöneticilere ve ekiplere motivasyon ve farkındalık yaratacak \'Liderlik & Takım Olmak\' adıyla ilham veren çalışmalar yapmaktadır.'
          },
          {
            id: 25,
            title: 'Göksu Hazal Subaşı',
            modalTitle: 'GÖKSU HAZAL SUBAŞI<br/>Flüt, Şan ve Vokal Teknikleri, Grup Koçluğu, Solfej ve Kulak Eğitimi, Çocuklarla Piyano',
            iconSrc: "e10.png",
            imgSrc: 'e10.png',
            modalText: 'Şan ve koro eğitimine 2004 yılı Antalya Devlet Opera ve Balesi Çocuk Korosu\'nda başladı. 2004 ­ 2013 yılları arasında birçok eserde "Carmen, Carmina Burana, La Boheme, İncigül Opereti (Türkiye Prömiyeri)" bunun yanı sıra Aspendos Festivalleri\'nde çocuk ve gençlik korosunda yer almıştır.<br/> 2009 yılında Akdeniz Üniversitesi Devlet Konservatuvarı Lise Devresi\'nde Ceren Hepyücel\'in sınıfında flüt öğrencisi olmaya hak kazanmıştır. Lise eğitimi boyunca Angelo Ragno, Bülent Evcil ile masterclass yapmış, birçok resital, oda müziği ve orkestra konserlerinde yer almıştır.<br/> 2013 yılında İstanbul Üniversitesi Devlet Konservatuvarı Opera Anasanat Dalı\'nda Efsun Öztoprak\'ın sınıfında tam zamanlı şan öğrencisi olmaya hak kazanmış ve halen eğitimini sürdürmektedir.<br/> Bunun yanı sıra 2014 yılından itibaren Volkan Akkoç önderliğinde Türkiye\'nin ilk kadınlar korosu "Sirene"de söylemektedir.'
          },
          {
            id: 26,
            title: 'Ceren Akyıldız',
            modalTitle: 'CEREN AKYILDIZ<br/>Şan ve Vokal Teknikleri, Solfej ve Kulak Eğitimi, Çocuklarla Piyano',
            iconSrc: "e11.png",
            imgSrc: 'e11.png',
            modalText: '1980\'de Antalya\'da doğdu. 10-18 yaşları arasında özel klasik piyano eğitimi aldı. 1995-1998 yılları arasında Antalya Büyükşehir Belediyesi İsmail Baha Sürelsan Konservatuarı\'nda Türk Sanat Müziği (solfej, nazariyat, repertuar) eğitimi aldı. 1996 ve 1997 yıllarında katıldığı M.E.B. Liselerarası Türk Halk Müziği Yarışması\'nda il birincisi oldu. MSGSÜ Mimarlık Bölümü\'nden 2006 yılında mezun oldu. 2002-2003 öğretim yılında İstanbul Üniversitesi Devlet Konservatuarı Yarı Zamanlı Müzikal Bölümü\'nde okudu, burada şan, solfej, dans ve oyunculuk eğitimi aldı. 2003 yılında devlet opera sanatçısı Yüksel Kızılkaya’dan, 2010 yılında caz vokal eğitmeni Randy Esen’den özel şan dersleri aldı. Sadri Alışık Akademi’de 2017-2018 yıllarında müzikal ve oyunculuk eğitimi aldı.<br/> 2001 yılından bugüne, Ruhi Su Dostlar Korosu, Boğaziçi Üniversitesi Caz Korosu, European Voices İstanbul Korosu, İstanbul Avrupa Korosu, Pera Oda Korosu, Muammer Ketencoğlu ve Kadın Sesleri Topluluğu\'nda korist ve solist olarak yer aldı. 2003 yılından beri Şebnem Ferah\'ın tüm canlı performanslarında geri vokal yapmakta, aynı zamanda mimarlık mesleğini sürdürmektedir.'
          },
          {
            id: 27,
            title: 'Beril Özortakcı',
            modalTitle: 'BERİL ÖZORTAKCI<br/>Klarnet, Şan ve Vokal Teknikleri, Piyano, Solfej ve Kulak Eğitimi',
            iconSrc: "e12.png",
            imgSrc: 'e12.png',
            modalText: 'İlkokul, ortaokul ve lise eğitimini Dokuz Eylül Üniversitesi Devlet Konservatuarı Klarnet Bölümü’nde tamamlamıştır.<br/> Üniversite eğitimini İstanbul Üniversitesi Devlet Konservatuarı Sahne Sanatları Opera Bölümü’nde sürdürmüştür.<br/> Bunun yanı sıra, sahne çalışmalarını müzikal projelerde yer alarak devam ettirmiştir.  Son bulunduğu proje ise Tatbikat Sahnesi/Erdal Beşikçioğlu’nun  “Tüy Kalemler” ve “Woyzeck Masalı” dır. 2006 yılından beri klarinet, şan, piyano ve solfej eğitimi vermektedir.<br/> KATILDIĞI USTALIK SINIFLARI:<br/> -Alain Boglen, Dokuz Eylül Üniversitesi Devlet Konservatuarı, İzmir, 2007, (Klarinet Workshop)<br/> -Sabine Meyer, Bostancı Gösteri Merkezi, İstanbul, 2008, (Klarinet, Materclass)<br/> -Nicola Balderou,  Bostancı Gösteri Merkezi, İstanbul, 2008, (Klarinet, Materclass)<br/> -David Walsh, İstanbul Üniversitesi Devlet Konservatuvarı, İstanbul, 2013 & 2014, (Sahne çalışması)<br/> -Hans-Joachim Lustig ve Marcus Detterbeck, KoroFest 2014, İstanbul, Ağustos 2014 (Koro eğitimi)<br/> -Ulf Bästlein, Klasik Keyifler, Kapadokya, Ağustos 2015 (Lied ustalık sınıfı)'
          }
        ] 
      }

    render() {
        return (
            <div id="sect03" className="container text-center rounded bg-light mt-4 pt-5">
                <h1 className="instructorsHeader">Eğitmenler</h1>
                <div className="row justify-content-center">
                    {this.renderInstructors()}
                </div>
            </div>
        )
    }

    renderInstructors() {
        return this.state.instructors.map((instructor) => (
            <Instructor key={instructor.id} instructor={instructor} />
        ));
    }
}

export default Instructors
