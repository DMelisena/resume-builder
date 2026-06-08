EVALUASI KESELAMATAN BUNKER LINAC 10 MEV RSUP DR.
HASAN SADIKIN MENGGUNAKAN METODE SIMULASI OPENMC
                        SKRIPSI

                            HALAMAN JUDUL




            untuk memenuhi sebagian persyaratan
             untuk memperoleh derajat Sarjana
                Program Studi Teknik Nuklir




                       Diajukan oleh
               MUHAMMAD ARYA HANIF
                   19/443954/TK/49150


                          Kepada
   DEPARTEMEN TEKNIK NUKLIR DAN TEKNIK FISIKA
                  FAKULTAS TEKNIK
            UNIVERSITAS GADJAH MADA
                     YOGYAKARTA
                           2024
                                        PERNYATAAN BEBAS PLAGIASI




                      PERNYATAAN BEBAS PLAGIASI

Saya yang bertanda tangan di bawah ini:

       Nama                   :       Muhammad Arya Hanif

       NIM                    :       19/443954/TK/49150

       Tahun terdaftar        :       2019

       Program Studi          :       Teknik Nuklir

       Fakultas               :       Teknik

menyatakan bahwa dokumen ilmiah skripsi ini tidak terdapat bagian dari karya
ilmiah lain yang telah diajukan untuk memperoleh gelar akademik di suatu lembaga
Pendidikan Tinggi, dan juga tidak terdapat karya atau pendapat yang pernah ditulis
atau diterbitkan oleh orang/lembaga lain, kecuali yang secara tertulis disitasi dalam
dokumen ini dan disebutkan sumbernya secara lengkap dalam daftar pustaka.

Dengan demikian saya menyatakan bahwa dokumen ilmiah ini bebas dari unsur-
unsur plagiasi dan apabila dokumen ilmiah Skripsi ini di kemudian hari terbukti
merupakan plagiasi dari hasil karya penulis lain dan/atau dengan sengaja
Fmengajukan karya atau pendapat yang merupakan hasil karya penulis lain, maka
penulis bersedia menerima sanksi akademik dan/atau sanksi hukum yang berlaku.

                                                                    Yogyakarta, 30 Juli 2024




                                                                    Muhammad Arya Hanif

                                                                    NIM. 19/443954/TK/49150




                                               ii
                         HALAMAN PENGESAHAN


                                    SKRIPSI
  EVALUASI KESELAMATAN BUNKER LINAC 10 MEV RSUP DR.
 HASAN SADIKIN MENGGUNAKAN METODE SIMULASI OPENMC
Nama Mahasiswa                : Muhammad Arya Hanif


Nomor Mahasiswa               : 19/443954/TK/49150


Pembimbing Utama              : Ir. Anung Muharini, M.T., IPM.


Pembimbing Pendamping         : Anisza Okselia, S.T, M.Si.


               Skripsi ini telah dipertahankan di depan Tim Penguji
                            pada tanggal 23 Juli 2024


Ketua Sidang                : Ir. Anung Muharini, M.T., IPM.


Penguji Utama               : Ir. Susetyo Hario Putero, M.Eng.


Anggota Penguji             : M. Arif Efendi, S.Si., M.Sc.


               Skripsi ini telah diterima dan dinyatakan memenuhi
                    syarat kelulusan pada tanggal 30 Juli 2024
               Ketua Departemen Teknik Nuklir dan Teknik Fisika
                             Fakultas Teknik UGM




                    Dr. Ir. Alexander Agung, S.T., M.Sc., IPU
                          NIP. 19720916 199803 1002


                                       iii
Karya ini kupersembahkan untuk almarhum kakek saya




                        iv
“We play with the cards we're dealt.” – Stan Edgar




                        v
                                       KATA PENGANTAR



                               KATA PENGANTAR

Puji syukur penulis ucapkan kepada Tuhan karena atas rahmat dan karunia–Nya
penulis dapat menyelesaikan skripsi ini. Penulis bersyukur karena berkesempatan
untuk mengenal serta berteman dengan orang-orang hebat selama masa kuliah
penulis baik dari dalam maupun luar Jurusan. Penulis sangat bangga untuk dapat
mengenal mereka. Persembahan terimakasih ini penulis ucapkan kepada:

1.         Ibu Ir. Anung Muharini, M.T., IPM. selaku Pembimbing Utama Tugas
Akhir yang senantiasa dengan sabar mengarahkan penulis dan mengajarkan ilmu
yang berguna sampai penulis dapat menyusun skripsi ini.

2.         Ibu Anisza Okselia, S.T., M.Si. selaku Pembimbing Kerja Praktik dan
Pembimbing Kedua Tugas Akhir penulis yang telah mengusulkan topik skripsi
serta menyediakan data-data yang diperlukan untuk skripsi tersebut.

3.         Ibu Sita Gandes Pinasti, S.T., M.Sc. yang bersedia untuk memberikan
konsultasi terhadap permasalahan penelitian yang penulis alami selama penulisan
skripsi.

4.         Pihak Rumah Sakit Umum Pusat Dr. Hasan Sadikin yang telah
menyediakan tempat untuk melakukan kerja praktik serta menjadi basis dari skripsi
penulis.

5.         Bapak Dr. Ir. Alexander Agung, S.T., M.Sc., IPU selaku Ketua Departemen
Teknik Nuklir dan Teknik Fisika.

6.         Seluruh dosen serta sivitas akademika Departemen Teknik Nuklir dan
Teknik Fisika yang telah memberikan ilmu serta bantuannya agar penulis bisa bisa
menyelesaikan masa studi penulis.

7.         Orang Tua serta saudara-saudara yang senantiasa memberikan dukungan
finansial dan moral.




                                           vi
8.     Adi, Rayhan, Owen, Helmi, Zaky, Thian, Ryan, Levi, Cesca, Ismi dan
teman-teman DTNTF lain yang sudah menginspirasi serta menemani penulis untuk
menjalani kuliah dan bermain bersama.

9.     Ojan, Kresna, Almas, Rapi, Nanda dan Valen sahabat-sahabat tercintaku
yang senantiasa menjadi menemani penulis sejak PPSMB.

10.    Joe, Lesa, Karin, Alif, Anak-anak pondokan, subunit serta unit KKN yang
telah menemani penulis di antah-berantah dan mencicipi kehidupan bermasyarakat
dan masih menemani penulis bahkan setelah KKN selesai.

11.    Teman-teman SATUBUMI, Gamabunta serta kepanitiaan acara UGM lain
yang menjadi tempat penulis untuk berkembang melalui pembelajaran serta tugas-
tugas selama berorganisasi.

12.    Teman-teman yang tidak bisa penulis sebut satu persatu yang telah
menemani masa kuliah penulis.




                                              Yogyakarta, 19 Juli 2023


                                               Muhammad Arya Hanif




                                        vii
                                                   DAFTAR ISI
PERNYATAAN BEBAS PLAGIASI .................................................................... ii
HALAMAN PENGESAHAN ............................................................................... iii
KATA PENGANTAR ............................................................................................vi
DAFTAR ISI ....................................................................................................... viii
DAFTAR TABEL ...................................................................................................x
DAFTAR GAMBAR ............................................................................................xi
DAFTAR LAMBANG DAN SINGKATAN ..................................................... xii
INTISARI ................................................................................................................1
ABSTRACT ...............................................................................................................2
BAB I PENDAHULUAN ........................................................................................3
   I.1. Latar Belakang .............................................................................................. 3
   I.2. Perumusan Masalah ...................................................................................... 5
   I.3. Tujuan Penelitian .......................................................................................... 5
   I.4. Manfaat Penelitian ........................................................................................ 5
   I.5. Batasan Masalah ........................................................................................... 5
BAB II TINJAUAN PUSTAKA .............................................................................6
BAB III DASAR TEORI .........................................................................................8
   III.1. Radiasi ........................................................................................................ 8
       III.1.1. Interaksi Foton dengan Materi ............................................................ 8
       III.1.2. Interaksi Elektron dengan Materi ........................................................ 9
       III.1.3. Interaksi Neutron dengan Materi ...................................................... 10
   III.2. Dosimetri .................................................................................................. 11
       III.2.1. Dosis Serap ....................................................................................... 11
       III.2.2. Dosis Ekivalen .................................................................................. 11
   III.3. Proteksi Radiasi........................................................................................ 11
       III.3.1. Pembatas Dosis (P) ........................................................................... 12
       III.3.2. Beban Kerja (W) ............................................................................... 13
       III.3.3. Faktor Utilitas (U) ............................................................................. 13
       III.3.4. Faktor Okupansi (T) .......................................................................... 13
   III.4. Akselerator Linear .................................................................................... 15
       III.4.1. Komponen LINAC ............................................................................ 15


                                                           viii
      III.4.2. Kalibrasi Dosis Keluaran LINAC ..................................................... 15
      III.4.3. Kalibrasi Absolut .............................................................................. 16
   III.5. Monte Carlo ............................................................................................. 16
      III.5.1. Prinsip Kalkulasi Monte Carlo .......................................................... 16
      III.5.2. Database Empiris Simulasi Partikel Monte Carlo ............................ 17
      III.5.3. OpenMC ............................................................................................ 18
BAB IV PELAKSANAAN PENELITIAN ...........................................................20
   IV.1. Alat dan Bahan Penelitian ........................................................................ 20
      IV.1.1. Simulasi ............................................................................................ 20
   IV.2. Tata Laksana Penelitian ........................................................................... 20
   IV.3. Analisis Hasil Penelitian .......................................................................... 26
      IV.3.1. Interpretasi Persebaran Geometri Radiasi pada Simulasi ................. 27
BAB V Hasil dan pembahasan ..............................................................................28
   V.1. Hasil Simulasi OpenMC ........................................................................... 28
      V.1.1. Kalibrasi Dosis ke Laju Dosis Simulasi ............................................. 28
      V.1.2. Geometri ............................................................................................. 29
      V.1.3. Peta Sebaran Dosis Persudut .............................................................. 31
   V.2. Perbandingan Batas Dosis dan Hasil Simulasi.......................................... 34
BAB VI KESIMPULAN DAN SARAN ...............................................................40
   VI.1. Kesimpulan .............................................................................................. 40
   VI.2. Saran ........................................................................................................ 40
DAFTAR PUSTAKA ............................................................................................41
   LAMPIRAN A Listing Program OpenMC ....................................................... 43
   LAMPIRAN B Hasil Pengukuran Laju Dosis Commisioning ......................... 80
   LAMPIRAN C Perhitungan Analitik Desain Bunker ....................................... 81
   LAMPIRAN D Contoh Penggunaan Variasi Sudut Gantry LINAC ................ 84
   LAMPIRAN E Program Pengubahan Fluks Ke Dosis ..................................... 85
   LAMPIRAN F Contoh Tabel Konversi Fluks Dosis ICRP 116 ....................... 88
   LAMPIRAN G Program Pengubahan Fluks Ke Dosis ..................................... 89




                                                           ix
                                         DAFTAR TABEL
Tabel III.1 Faktor Utilitas LINAC ........................................................................ 13
Tabel III.2 Kedalaman Kedalaman presentase dosis pada water phantom ........... 18
Tabel V.1 Tabel Hasil Laju Dosis ......................................................................... 35
Tabel V.2 Perhitungan Beban Kerja Mingguan .................................................... 36
Tabel V.3 Laju Dosis pada 0° (Bawah) ................................................................ 36
Tabel V.4 Laju Dosis pada 90° ............................................................................. 37
Tabel V.5 Laju Dosis pada 180° (Atas) ................................................................ 37
Tabel V.6 Laju Dosis pada 270° ........................................................................... 38
Tabel V.7 Total Ekspektasi Laju Dosis pada Pekerja di Ruangan ........................ 39




                                                      x
                                             DAFTAR GAMBAR
Gambar III.1 Ilustrasi Efek Pair Production .......................................................... 9
Gambar III.2 Ilustrasi jenis dinding dan jarak ruang bunker LINAC ................... 12
Gambar III.3 Denah ruang LINAC Synergy dan sekitarnya................................. 14
Gambar III.4 Precentage Depth Dose water phantom simulasi dan riil ............... 18
Gambar IV.1 Ilustrasi workflow penelitian ........................................................... 20
Gambar IV.2 Konversi nilai energi partikel ke dosis efektif per fluens menggunakan
fantom organ pada arah iradiasi ............................................................................ 22
Gambar IV.3 Denah titik pengukuran laju dosis ruang LINAC Synergy ............ 25
Gambar V.1 Percent Depth Dose (PDD) Simulasi Kalibrasi Water Phantom ..... 28
Gambar V.2 Percent Depth Dose (PDD) Simulasi Kalibrasi Water Phantom pada
10 batch ................................................................................................................. 29
Gambar V.3 Geometri ruang LINAC simulasi pada persepsi XY ........................ 30
Gambar V.4 Geometri ruang LINAC simulasi pada persepsi YZ ........................ 30
Gambar V.5 Geometri ruang LINAC simulasi pada persepsi XZ ........................ 30
Gambar V.6 Heatmap Distribusi Dosis Hasil Simulasi default ............................ 31
Gambar V.7 Distribusi Dosis pada gantry 0° (Bawah) ......................................... 32
Gambar V.8 Distribusi Dosis pada gantry 90° ..................................................... 33
Gambar V.9 Distribusi Dosis pada gantry 180° (Atas) ........................................ 33
Gambar V.10 Distribusi Dosis pada gantry 270° ................................................. 34




                                                             xi
            DAFTAR LAMBANG DAN SINGKATAN
Lambang Romawi
  Lambang                       Kuantitas                     Satuan

    dsec      Jarak   isosenter        terhadap   titik   cm
              pengukuran
    Ḋ         Laju Dosis                                  Sieverts/jam

    Da        Dosis per fluens                            Sieverts cm2

    Ḋmax      Laju Dosis Maksimum                         Sieverts/jam

    Do        Dosis Keluaran Fungsi OpenMC                Sieverts

    Dosk      Dosis Keluaran Sel Kalibrasi                Sieverts

    Ḋ         Laju Dosis Linear Accelerator               MU/menit

    DU        Dosis berdasarkan utilitas sudut            µSv/minggu

     E        Energi                                      MeV

    HVL       Half Value Layer                            mm

     S        Faktor Konversi                             -

    SR        Source Rate                                 sumber/detik

     T        Faktor Okupansi                             -

    TVL       Tenth Value Layer                           cm

     T        Waktu                                       detik

     tw       Waktu penyinaran untuk mencapai beban       jam
              kerja

     U        Faktor Utilitas                             %

     V        Volume                                      cm3

    W         Beban Kerja / Workload                      Gy/minggu


                                     xii
       X     Ketebalan materi                         m



Lambang Yunani
  Lambang    Kuantitas                             Satuan
       Φ     Fluks simulasi                        Partikel-cm
                                                   /sumber
Subskrip
       bo    Deskripsi
      maks   Maksimum
       Sk    Sel Kalibrasi


Singkatan
AAPM TG      American Association of Physicists in Medicine Task
             Group
AC           Alternating Current

BAPETEN      Badan Pengawas Tenaga Nuklir

BNCT         Boron Neutron Capture Therapy

BPE          Boron Loaded Polyethylene

CPRG         Computational Reactor Physics Group

CSEWG        Cross Section Evaluation Working Group

Dr.          Dokter

ENDF         Evaluated Nuclear Data Library

FF           Flattening Filter

HVL          Half Value Layer

IAEA         International Atomic Energy Agency

KeV          Kilo electron Volt



                                   xiii
LINAC   Linear Accelerator

MIT     Massachusetts Institute of Technology

MeV     Mega electron Volt

MV      Mega Volt

MU      Monitor Unit

NCRP    National    Council    on   Radiation   Protection   &
        Measurements
NBD     Nilai Batas Dosis

RSUP    Rumah Sakit Umum Pusat

SAD     Source to Axis Distance

TVL     Tenth Value Layer

UGM     Universitas Gadjah Mada




                              xiv
                                          INTISARI




    EVALUASI KESELAMATAN BUNKER LINAC 10 MEV RSUP DR.
  HASAN SADIKIN MENGGUNAKAN METODE SIMULASI OPENMC

                               Muhammad Arya Hanif
                                19/443954/TK/49150

 Diajukan kepada Departemen Teknik Nuklir dan Teknik Fisika Fakultas Teknik
                 Universitas Gadjah Mada pada tanggal 12 Juli 2024
         untuk memenuhi sebagian persyaratan untuk memperoleh derajat
                         Sarjana Program Studi Teknik Nuklir

                                     INTISARI

        Penelitian ini dilakukan untuk mengkaji keselamatan pada desain bunker
radioaterapi LINAC Elekta Synergy yang dibangun di RSUP Dr. Hasan Sadikin.
Visualisasi persebaran dosis akan dilakukan demi membantu interpretasi
persebaran dosis pada bunker LINAC tersebut.

        Pengkajian dilakukan dengan menggunakan simulasi Monte Carlo melalui
kode transportasi partikel OpenMC versi 0.13.1. Pengukuran laju dosis dilakukan
dengan variasi jarak 30, 100 dan 200 cm terhadap dinding bunker. Faktor okupansi,
utilitas serta beban kerja digunakan untuk mengetahui nilai batas dosis yang berlaku
pada titik-titik tersebut.

        Laju dosis pada sekitar ruangan berada pada rentang 8,28 × 10-3 hingga
0,208 µSv/minggu. Nilai ini jauh kali lebih kecil dibandingkan dengan pembatas
dosis yang diberlakukan oleh BAPETEN pada Perka No. 4 tahun 2013. Hal ini
berarti keselamatan bunker sudah sesuai dengan standar yang berlaku. Visualisasi
laju dosis juga telah dilakukan untuk membantu interpretasi dosis yang terjadi pada
masing-masing titik pengukuran laju dosis pada sekitar bunker.

Kata kunci:     LINAC, OpenMC, Simulasi Monte Carlo, Proteksi Radiasi

Pembimbing Utama               : Ir. Anung Muharini, M.T., IPM.
Pembimbing Pendamping          : Anisza Okselia, S.T., M.Si.



                                         1
                                          ABSTRACT




  SAFETY EVALUATION OF HASAN SADIKIN HOSPITAL'S 10 MEV
       LINAC BUNKER USING OPENMC SIMULATION METHOD

                               Muhammad Arya Hanif
                                19/443954/TK/49150

  Submitted to the Department of Nuclear Engineering and Engineering Physics
          Faculty of Engineering Universitas Gadjah Mada on July 12, 2024
              in partial fulfillment of the requirement for the Degree of
                  Bachelor of Engineering in Nuclear Engineering

                                    ABSTRACT

       This study will examine the safety of LINAC Elekta Synergy bunker room
at RSUP Dr. Hasan Sadikin. Safety examination will be conducted by comparing
the radiation dose on the surrounding room with the dose limit enforced by
BAPETEN. Visualization of fdose will be done to help the interpretation of dose
spread happening on the bunker

       The examination is executed using Monte Carlo simulation provided by
0.13.1 version of OpenMC particle transportation code. This research was carried
out by evaluation the surrounding room’s dose at varying distances of 30, 100 and
200 cm to the bunker wall. Occupancy, utility and workload factors will be used to
determine the dose limit values that apply at each of these points.

       The dose surrounding the room is detected on the range of 8,28 × 10-3 to
0.208 µSv/week. This is already much smaller than the implemented rule enforced
by BAPETEN on Perka No. 3 2013. This means that the safety of the design is in
accordance with the standard. Dose rate visualization has also been carried out to
help interpret the dose that occurs at each dose rate measurement point around the
bunker.

Keywords:       LINAC, OpenMC, Monte Carlo Simulation, Radiation Protection

Supervisor              : Ir. Anung Muharini, M.T., IPM.
Co-supervisor           : Anisza Okselia, S.T., M.Si


                                          2
                                       BAB I
                                PENDAHULUAN
I.1. Latar Belakang
       Radioterapi adalah satu dari tiga metode utama pada pengobatan penyakit
kanker. Tiga metode utama tersebut adalah bedah sebagai metode fisik, kemoterapi
sebagai metode kimia dan radioterapi sebagai metode fisika. Terdapat 66 alat
radioterapi di 44 pusat pengobatan kangker yang tersebar di 16 provinsi di
Indonesia [1]. Ini berarti terdapat densitas alat radioterapi sejumlah 0,247 pada tiap
juta penduduk Indonesia pada tahun tersebut. Hal tersebut cukup jauh dibandingkan
target 7 alat radioterapi per juta penduduk yang disarankan oleh International
Atomic Energy Agency (IAEA) [2]. Hal itu juga berarti terdapat banyak jumlah
bunker radioterapi yang perlu dibuat untuk mencapai target tersebut.
        Bunker radioterapi adalah ruangan yang diperuntungkan untuk melindungi
masyarakat umum dan pekerja rumah sakit dari radiasi yang dipancarkan oleh
fasilitas radioterapi. Bunker Linear Accelerator (LINAC) Synergy pada RSUP Dr.
Hasan Sadikin telah melalui serangkaian tahap perancangan serta verifikasi hingga
dapat beroperasi. Regulasi yang perlu dipertimbangkan adalah pasal 41 Peraturan
Kepala BAPETEN nomor 4 tahun 2013 mengenai pembatas dosis pada pekerja
radiasi dan masyarakat [3]. Kemudian untuk memenuhi standar tersebut, organisasi
kenukliran seperti IAEA dan National Council on Radiation Protection &
Measurements (NCRP) telah membuat metode perhitungan agar dapat memenuhi
standar yang sebelumnya telah ditetapkan [4]. Selain itu, terdapat pula berkas
National Council on Radiation Protection & Measurements (NCRP Report nomor
151 yang merupakan panduan dalam pembuatan fasilitas keselamatan radioterapi
[5]. Regulasi ini dibuat untuk mempermudah optimasi manfaat terhadap risiko pada
pemanfaatan fasilitas radioterapi. Metode optimasi juga dapat dilakukan dengan
menggunakan simulasi komputer untuk dapat memastikan bahwa laju dosis yang
ada pada sekitar ruangan bunker sudah sesuai dengan standar yang berlaku. Desain
bunker radioterapi yang dibentuk berdasarkan regulasi tersebut kemudian dapat
diperiksa menggunakan perhitungan analitik maupun pengukuran laju dosis setelah
instalasi dilakukan.


                                          3
       Perhitungan analitik dilakukan pada titik-titik di balik dinding bunker yang
dibangun. Ketebalan dinding antara LINAC dengan titik tersebut kemudian
dibandingkan dengan nilai minimum ketebalan dinding bungker agar laju dosis
dapat lebih rendah dibandingkan nilai pembatas dosis. Setelah bunker terbangun
dan LINAC dipasang pada ruangan tersebut, penyinaran dengan dosis maksimum
dilakukan untuk kemudian laju dosis pada bangunan disekitarnya dapat diperiksa.
Berdasarkan pemeriksaan tersebut, laju dosis pada atap bungker melebihi 5
µSv/jam. Hal ini dinilai sebagai lebih besar dibandingkan pembatas dosis yang
ditetapkan oleh BAPETEN pada perka no 3 tahun 2013 yang sejumlah 200
µSv/minggu. Selain itu, hasil pengukuran juga tidak selalu menunjukkan laju dosis
yang lebih kecil pada jarak yang lebih jauh. Hal ini berlawanan dengan inverse
square law yang diterapkan pada perhitungan laju dosis. Interpretasi laju dosis
tersebut dapat dilakukan dengan visualisasi dari persebaran laju dosis pada ruangan
tersebut dengan menggunakan simulasi komputer.
       Simulasi komputer adalah metode yang dapat digunakan untuk mendesain
alat maupun fasilitas pendukung pemanfaatan alat yang memiliki radiasi. Hal ini
dikarenakan pembuatan prototipe seringkali melibatkan komponen-komponen
yang tidak murah untuk dibuat. Selain itu sifat radiasi yang probabilistik dan tidak
kasat mata juga membuat pengecekan parameter pada pembuatan alat tidak
semudah alat-alat yang memiliki parameter yang kasat mata. Hal ini membuat
simulasi dengan kemampuan memvisualisasi radiasi untuk memberikan data yang
lebih lengkap serta fleksibilitas dalam mengelola data yang dihasilkan. Simulasi
dapat dimanfaatkan untuk perencanaan fasilitas, penelitian desain, optimasi
parameter dan lain-lain [6] . Salah satu kelebihan dari simulasi adalah visualisasi
distribusi dosis serta pergerakan partikel. Kelebihan itu merupakan hal yang tidak
dimiliki baik oleh perhitungan analitik pengukuran langsung. Terlepas dari
kelebihan tersebut, akurasi simulasi sangat bergantung pada seberapa detail
geometri serta parameter-parameter yang ditetapkan pada simulasi tersebut.
Visualisasi yang dihasilkan oleh simulasi dapat membantu interpretasi distribusi
dosis yang terjadi pada fasilitas radioterapi.




                                           4
I.2. Perumusan Masalah
       Setelah desain bunker dibuat berdasarkan regulasi yang ada. Desain tersebut
akan disimulasikan demi mengetahui perkiraan dosis yang diterima pada masing-
masing ruangan disekitar LINAC. Berdasarkan laju dosis tersebut maka dapat
diperkirakan berapa banyak dosis yang diterima oleh para pekerja pada tiap
minggunya. Berdasarkan hal diatas, perumusan masalah untuk menyelesaikan
persolan tersebut adalah sebagai berikut:

  1.   Berapa hasil laju dosis pada sekitar ruangan bunker tersebut menurut
       simulasi OpenMC?
  2.   Bagaimana distribusi dosis pada ruangan Bunker LINAC?
  3.   Apakah laju dosis simulasi memenuhi pembatas dosis?
I.3. Tujuan Penelitian
   1. Menganalisis distribusi dosis LINAC pada bunker.
   2. Mengetahui keselamatan pada bunker LINAC.
I.4. Manfaat Penelitian
       Menambah masukan kepada manajemen RSUP Dr. Hasan Sadikin untuk
manajemen keselamatan radiasi tenaga kesehatan dan Masyarakat umum pada
ruangan bunker Synergy.
I.5. Batasan Masalah
   Terdapat beberapa batasan masalah pada penelitian ini di antaranya:
   1. Detektor menggunakan tally deteksi sederhana dan tidak mereplikasi desain
       detektor asli.
   2. Penyinaran menggunakan model sederhana geometri LINAC dengan energi
       10 MeV.
   3. Simulasi Monte Carlo menggunakan OpenMC versi 0.13.1.
   4. Desain Bunker yang dikaji adalah desain bunker LINAC Synergy RSUP Dr.
       Hasan Sadikin.
   5. Simulasi menggunakan 1.000.000.000 partikel dengan 3 batch.
   6. Pengkajian tidak dilakukan pada bagian atas maupun sisi selatan dari
       bunker.



                                            5
                                     BAB II
                             TINJAUAN PUSTAKA
       Ruangan     bunker    LINAC     memerlukan     spesifikasi   yang   berbeda
dibandingkan ruangan rumah sakit pada umumnya. Hal ini dikarenakan radiasi
primer, radiasi sekunder serta neutronik yang dihasilkan oleh foton berenergi tinggi
memerlukan ketebalan serta bahan yang berbeda dibandingkan ruangan rumah sakit
pada umumnya. Oleh karena itu, posisi serta pembuatan merupakan hal yang
memakan biaya yang cukup besar. Hal ini membuat penggunaan ulang ruangan
bunker radioterapi akan memangkas banyak biaya. Terlepas dari pemangkasan
biaya tersebut, keselamatan tetap menjadi prioritas dari perwujudan fasilitas
radioterapi. Berdasarkan kajian yang dilakukan oleh A.S. Ferdiansyah,
peralihfungsian bunker LINAC 6 MeV ke 10 MeV dapat dilakukan dengan
penambahan nano besi oksida serta boron karbida setebal 2 cm pada ruang tunggu,
atap dan ruang arsip pada bunker LINAC RSUP Dr. Sardjito. Besi oksida dipilih
karena memiliki atenuasi tinggi terhadap neutron cepat, sedangkan boron karbida
memiliki nilai atenuasi tinggi terhadap radiasi neutron termal hingga epitermal [7].
       Pengukuran dosis radiasi pada luar ruangan bunker LINAC juga pernah
dilakukan oleh pihak vendor pada RSUP Dr. Sardjito sebelumnya. Penelitian ini
berhasil menemukan bahwa dosis radiasi tidak mencapai 2 μSv/h pada seluruh
daerah sekitar ruang radioterapi kecuali pada depan pintu sebesar 4,7 μSv/h.
Pengukuran dilakukan pada tujuh titik yang berbeda di sekitar ruangan bunker.
Berdasarkan penelitian tersebut. Pada skripsinya Y. M. Dinata menyarankan bahwa
penebalan pintu bunker dilakukan dengan menggunakan timah [8].
       Penggunaan simulasi untuk memeriksa laju dosis pada sekitar ruangan hot
lab juga telah dilakukan demi mengkaji faktor ekonomi dari kombinasi bahan
dinding bunker. Pada penelitiannya, A. Rafi melakukan kombinasi berupa beton,
beton dengan 1 cm lapisan timbal dan beton dengan 2 cm lapisan timbal.
Penggunaan lapisan timbal dapat mengurangi ketebalan dinding hingga 5 cm pada
titik tertentu. Pelapisan timbal dapat mengeluarkan biaya hingga tujuh kali lipat
dibandingkan hanya menggunakan beton. Penelitian ini menyimpulkan bahwa



                                         6
desain yang paling optimal dari segi proteksi radiasi dan ekonomis adalah desain
hot lab tanpa pelapisan timbal pada dinding bunker [9].
       Simulasi juga telah dilakukan oleh N. K. T. Kusnaedi untuk pembuatan
desain ruangan bunker fasilitas radioterapi dengan energi 30 MeV. Energi tersebut
dihasilkan oleh siklotron yang digunakan pada fasilitas Boron Neutron Capture
Therapy (BNCT). Standar dosis radiasi maksimum yang diberlakukan oleh
BAPETEN pada fasilitas radioterapi berhasil dipenuhi pada desain bunker tersebut.
Ketebalan dinding yang diperlukan adalah 100 cm hingga 350 cm pada beton dan
100 cm hingga 250 cm pada beton boron dan beton barit [10]
       OpenMC adalah salah satu opensource yang dipakai dalam pembuatan
desain fasilitas radioaktif. Pengkajian keselamatan bunker mengunakan kode
simulasi transportasi foton dan neutron ini telah dilakukan sebelumnya dilakukan
pada bunker Rumah Sakit Jogja International Hospital. Pada penelitian tersebut,
hasil analitik serta simulasi dibandingkan. Penelitian ini telah berhasil mengetahui
bahwa bunker tersebut telah sesuai dengan standar keselamatan BAPETEN
berdasarkan simulasi OpenMC maupun perhitungan analitik. Diketahui juga bahwa
bunker tersebut memerlukan penambahan ketebalan Boron Loaded Polyethylene
BPE sejumlah minimal 92 milimeter [11].
       Penelitian untuk memvalidasi kredibilitas hasil simulasi Monte Carlo pada
profil LINAC juga telah dilakukan dengan mereplikasi Quality Assurance (QA)
pada LINAC varian seri TrueBeam STx di Rumah Sakit Songklanagarind.
Penelitian yang dilakukan oleh M.A. Efendi ini menggunakan kode PRIMO untuk
mensimulasikan Precentage Depth Dose (PDD) serta lateral profile menggunakan
geometri LINAC. Hasil simulasi sudah sesuai dengan hasil ekperimental,
perhitungan Analitical Anisotropic Algorithm (AAA) serta golden beam yang
disediakan oleh pihak manufaktur. PRIMO adalah kode Monte Carlo yang
diperuntungkan secara spesifik untuk radioterapi[12].




                                         7
                                      BAB III
                                 DASAR TEORI
III.1. Radiasi
       Radiasi adalah perambatan energi yang tidak melalui media ataupun ruang
yang kemudian diserap oleh benda lain. Terdapat beberapa jenis pembagian radiasi,
salah satunya adalah dengan kemampuannya dalam mengionisasi atom lain. Dalam
kategori ini, terdapat dua jenis radiasi yaitu radiasi pengion dan non pengion [13].
Energi pengion pada umumnya berada pada rentang kiloelektron volt serta
megaelektron volt[14]. Sedangkan pada radiasi partikel, radiasi pengion adalah
radiasi yang memiliki muatan energi yang cukup tinggi. Jenis partikel serta energi
merupakan faktor utama dari proteksi radiasi merupakan faktor utama penentu efek
radiasi terhadap suatu materi [15].
III.1.1. Interaksi Foton dengan Materi
       Foton adalah paket diskrit dari energi elektromagnetik yang dapat
berinteraksi dengan partikel lain seperti atom [16]. Pada radiasi foton, panjang
gelombang radiasi pengion kira-kira kurang dari 10 nm[13]. Terdapat banyak reaksi
yang dapat dihasilkan oleh interaksi foton dengan materi. Akan tetapi, tiga interaksi
utama yaitu fotolistrik, hamburan compton serta pair production.
III.1.1.1. Fotolistrik
       Efek fotolistrik terjadi ketika foton dan elektron yang terikat dengan atom
bertubrukan. Energi dari foton tersebut kemudian membuat elektron pada atom
lepas sebagai elektron bebas[13]. Interaksi fotolistrik ini hanya terjadi jika energi
ikat pada elektron tersebut sejumlah maupun lebih kecil dibandingkan energi yang
dimiliki oleh foton [17].




                    Gambar 3.1. Ilustrasi Efek Fotolistrik [13]




                                         8
III.1.1.2. Hamburan Compton
       Hamburan compton terjadi ketika foton dengan energi keV atau lebih
menabrak elektron bebas. Elektron bebas memiliki energi dalam kisaran eV.
Elektron yang bertumbukan kemudian akan terhempas ke arah yang berbeda.




                        Gambar 3.2. Ilustrasi Efek Fotolistrik [13]
III.1.1.3. Pair Production
       Pair production terjadi ketika foton berenergi tinggi menubruk nukleus.
Energi sejumlah 1,022 MeV yang dimiliki foton tersebut kemudian akan
terkonversi menjadi elektron dan positron. Energi yang tersisa kemudian akan
terdistribusi merata pada dua partikel tersebut.




                Gambar III.1 Ilustrasi Efek Pair Production [13]
III.1.1.4. Fotodisintegrasi
       Fotodisintegrasi atau reaksi photonuclear terjadi ketika nukleus menangkap
foton energi tinggi menghempaskan neutron yang ada pada sebuah nukleus[17].
Neutron yang dihasilkan tersebut dapat diabsorbsi oleh berbagai material yang
kemudian membuat material tersebut menjadi radioaktif. Reaksi fotodisintegrasi
hanya dapat terjadi ketika energi foton melebihi 7 MeV [15]. Fotoneutron biasanya
memiliki energi lebih tinggi dibandingkan neutron termal.

III.1.2. Interaksi Elektron dengan Materi
       Terdapat dua jenis foton yang akan muncul pada interaksi elektron terhadap
suatu materi. Elektron yang kehilangan energi dikarenakan pengurangan energi
pada medan elektromagnetik yang dimiliki nukleus akan mengeluarkan energi yang


                                          9
terserap sebagai foton yang disebut dengan Bremsstrahlung[14]. Interaksi yang
menciptakan sinar X pada umumnya adalah interaksi Bremsstrahlung. Reaksi
Bremsstrahlung juga dapat terjadi ketika elektron tersebut menghantam elektron
yang ada pada atom. Sekitar 80% dari energi foton yang dihasilkan pada 100 keV
adalah radiasi bremsstrahlung dan sisanya adalah sinar X karakteristik. Sedangkan
pada elektron dengan orde MeV, jumlah Bremsstrahlung akan sangat dominan
hingga sinar-x karakteristik dapat diabaikan. Sinar X karakteristik terjadi ketika
elektron menabrak dan mementalkan elektron lain. Posisi elektron tersebut
kemudian akan digantikan oleh elektron lain dengan tingkat energi yang lebih
rendah dan energi sisanya akan terpental sebagai sinar x karakteristik.

III.1.3. Interaksi Neutron dengan Materi
       Neutron dapat berinteraksi dengan nukleus hanya melalui gaya nuklir
karena neutron tidak memiliki polaritas [13]. Ketika neutron mendekati nukleus,
neutron tidak bisa dipengaruhi oleh medan magnet pada suatu atom. Hal ini
membuat interaksi nuklir lebih memungkinkan untuk terjadi pada interaksi neutron
dengan materi dibandingkan dengan partikel bermuatan. Terdapat dua jenis
interaksi yang terjadi yaitu hamburan dan serapan.

III.1.3.1. Hamburan
       Pada interaksi hamburan, neutron berinteraksi dengan nukleus. Akan tetapi,
kedua partikel tersebut muncul kembali setelah reaksi terjadi dengan nomor atom
serta nomor massa yang sama seperti semula. Terdapat dua interaksi partikel yang
dapat terjadi yaitu elastis dan tidak elastis. Energi kinetik pada kedua partikel akan
disetarakan tanpa perubahan energi kinetik total pada interaksi elastis. Pada
interaksi inelastik, sebagian energi kinetik berubah menjadi energi eksitasi pada
nucleus. Nukleus tersebut kemudian akan mengalami deeksitasi dengan
mengeluarkan energi tersebut sebagai foton.

III.1.3.2. Serapan
       Ketika serapan terjadi, neutron menghilang. Sesudah neutron menghilang,
satu partikel atau lebih muncul. Partikel yang dapat dihasilkan di antaranya adalah




                                         10
neutron, proton, inti helium, gamma serta atom yang berbeda dengan atom yang
bertabrakan.

III.2. Dosimetri
       Dosimetri radiasi mengacu pada pengukuran, perhitungan serta penaksiran
dari radiasi pengion yang diterima oleh suatu objek termasuk pada tubuh manusia.
Hal ini termasuk pada radiasi yang masuk secara internal melalui pencernaan
maupun pernapasan serta eksternal seperti LINAC. Pembedaan dosis sebagai dosis
serap dan ekivalen diperlukan karena efek biologis pada sel manusia sehat sangat
dipengaruhi oleh jenis radiasi serta energi dari radiasi tersebut.

III.2.1. Dosis Serap
       Energi yang terserap pada suatu massa pada pemanfaatan radiasi diukur
dengan besaran Gray (Gy). Energi yang diserap oleh suatu massa tersebut adalah
energi yang diberikan oleh sebuah radiasi. Nilai ini juga dimanfaatkan dalam
pengkajian besar energi yang diterima oleh suatu kanker. Hal ini dikarenakan faktor
bobot yang dimiliki jenis radiasi tertentu terhadap suatu kanker memiliki nilai yang
berbeda dengan faktor bobot pada jaringan sehat.

III.2.2. Dosis Ekivalen
       Dosis ekivalen adalah jumlah energi radiasi yang terserap pada suatu
jaringan sehat. Nilai ini biasa digunakan dalam proteksi radiasi pada pekerja radiasi
terhadap pemanfaatan fasilitas radioaktif. Penggunaan dosis serap dilakukan karena
radiasi memiliki efek yang berbeda pada jaringan manusia tergantung pada jenis
serta energi dari radiasi tersebut. Faktor ini disebut sebagai faktor bobot. Untuk
mendapatkan dosis ekivalen, maka nilai dosis serap dikalikan faktor bobot. Besaran
satuan internasionalnya masih sama dengan dosis serap. Faktor bobot adalah senilai
1 pada radiasi foton maupun elektron, 20 pada radiasi alfa dan 2-10 untuk neutron
berdasarkan jumlah energinya [15].

III.3. Proteksi Radiasi
       Proteksi radiasi adalah tindakan yang dilakukan untuk mengurangi
pengaruh paparan radiasi pada pekerja radiasi maupun masyarakat umum. Pada



                                          11
pemanfaatan LINAC, Intensitas radiasi diminimalisasi melalui proses atenuasi[15].
Perancangan desain bunker radioterapi berpedoman pada NCRP 151 dan SRS 47.
Dokumen tersebut digunakan sebagai pedoman dalam pembuatan dinding primer,
sekunder maupun pintu bunker. konsep-konsep seperti utilitas sudut LINAC dan
okupansi untuk menghitung ekspektasi dosis yang diterima oleh pekerja pada titik
yang dikaji.




     Gambar III.2 Ilustrasi jenis dinding dan jarak ruang bunker LINAC[5]


III.3.1. Pembatas Dosis (P)

       Pembatas dosis adalah batas atas dosis pekerja radiasi dan anggota
masyarakat. Pembatas dosis pada pekerja radiasi adalah sebesar setengah dari NBD
pertahun atau senilai 10 mSv per tahun [3]. Nilai ini kemudian diatur kembali secara
detail pada Peraturan Kepala BAPETEN nomor 3 tahun 2013. Pada peraturan
tersebut pembatas dosis bagi pekerja radiasi adalah sebesar 0,2 mSv perminggu
[18]. Sedangkan pada masyarakat senilai 0,01 mSv perminggu. Nilai tersebut
ditemukan dengan membagi NBD menjadi minggu dengan 50 minggu pada tiap
tahunnya. Kemudian pembatas dosis dapat dicapai dengan mempertimbangkan
beban kerja, faktor okupansi dan faktor utilitas dari pengoperasian LINAC.




                                        12
III.3.2. Beban Kerja (W)

       Beban kerja atau disebut juga workload adalah total dosis yang dipancarkan
oleh LINAC selama fraksi-fraksi penyinaran dijalankan. Nilai ini didapatkan
dengan menggunakan fraksi dosis pada tiap penyinaran, jumlah pasien perhari serta
jumlah hari kerja pengoperasian alat.



       Pada perhitungan analitik pada dinding sekunder, terdapat nilai C yang
menentukan beban kerja pada treatment. Nilai ini adalah sebesar 4,5 pada VMAT
dan IMRT serta 1 pada konvensional maupun pada Quality Assurance (QA).
III.3.3. Faktor Utilitas (U)
       Faktor utilitas adalah presentase beban kerja di mana sinar diarahkan pada
penghalang primer tertentu. Semakin kecil nilai ini, semakin besar toleransi nilai
laju dosis pada titik di balik dinding.

                         Tabel III.1 Faktor Utilitas LINAC[18]
          Sudut (interval 90°)                              U (%)
                   0° (bawah)                                31,0
               90° dan 270°                                  21,3
                   180° (atas)                               26,3


III.3.4. Faktor Okupansi (T)
       Faktor okupansi adalah rata-rata waktu seseorang untuk terekspos dari
LINAC ketika penyinaran dilakukan. Semakin besar nilai okupansi, akan semakin
besar pula ketebalan dinding yang diperlukan untuk mencapai target nilai atenuasi
pada dinding. Nilai okupansi sangat berhubungan dalam pengkategorian ruangan di
sekitar bunker. Kategori ruangan pada fasilitas nuklir terbagi menjadi dua yaitu
daerah terkontrol dan daerah tidak terkontrol [17]. Semua ruang pada sekitar bunker
ruangan LINAC Synergy merupakan ruangan terkontrol yang hanya diakses oleh
pekerja. Maka dari itu nilai pembatas dosis yang diterapkan merupakan batas dosis
pekerja radiasi.


                                          13
        Gambar III.3 Denah ruang LINAC Synergy dan sekitarnya [19]
         Tabel III.2 Faktor Okupansi Pada Ruangan Sekitar Bunker [5]
        Nilai Faktor Okupansi                Jenis Ruangan
                                  Ruang treatment planning system dan
                   1
                                  ruang operator
                  0,5             Gedung kedokteran nuklir dan bunker
                  0,2             Koridor
                 0,125            Ruang di depan pintu treatment
                 0,025            Atap




       Dapat dilihat melalui Gambar III.4 bahwa terdapat 15 dinding sekunder
serta dua dinding primer yang harus dikaji melalui perhitungan analitik. Jarak
dinding primer direpresentasikan melalui garis berwarna merah, sedangkan dinding
sekunder direpresentasikan melalui garis biru. Perbedaan nilai okupansi pada
masing-masing titik tersebut direpresentasikan melalui jenis ruangan yang ada pada
sisi lain dari bunker tersebut. Pada ruang operator/server dan ruang treatment
planning system (TPS), nilai okupansi dihitung sebagai ruangan pekerja. Sedangkan
pada bunker LINAC 3 dan Gedung Kedokteran Nuklir, pengkajian dilakukan
sebagai ruangan treatment.



                                       14
III.4. Akselerator Linear
        Akselerator linear adalah salah satu jenis akselerator. Akselerator adalah
sebuah alat yang dapat meningkatkan energi dari suatu partikel bermuatan seperti
elektron, proton, deutron, triton, partikel alfa, partikel-partikel subatom atau ion
positif dan negatif[20].

        Berbeda dengan telekobalt dan brakhiterapi yang memerlukan bahan baku
berupa radionuklida, LINAC dapat berjalan selama ada asupan listrik serta alat
tersebut tidak rusak. Radiasi yang dihasilkan oleh LINAC berkisar antara 4 MeV
hingga 25 MeV. Energi tersebut lebih tinggi daripada telekobalt yang memiliki
energi 1,17 dan 1,33 MeV. Energi yang variatif ini juga memungkinkan LINAC
untuk secara efektif mengenai tumor baik pada kedalaman yang dangkal maupun
tumor yang tertimbun oleh jaringan lemak yang banyak.

III.4.1. Komponen LINAC
        Terdapat beberapa komponen utama dari akselerator linear diantaranya
adalah tabung sinar X, focusing coil, target, serta kolimator. Perbedaan potensial
pada tabung sinar X akan mengeluarkan elektron yang kemudian dapat ditingkatkan
energinya oleh focusing coil. Elektron tersebut kemudian akan menabrak target
yang biasanya merupakan unsur yang memiliki nomor atom tinggi. Target tersebut
kemudian akan menciptakan radiasi bremsstrahlung yang kemudian akan
dimanfaatkan untuk mengiradiasi kanker.

III.4.2. Kalibrasi Dosis Keluaran LINAC
        Terdapat dua jenis kalibrasi yang dilakukan pada pengoperasian LINAC,
yaitu kalibrasi relatif dan kalibrasi absolut.

III.4.2.1. Kalibrasi Relatif

        Kalibrasi relatif adalah proses perbandingan pengukuran dosis radiasi pada
suatu titik tertentu dengan pengukuran dosis pada titik referensi yang telah
diketahui nilainya. Kalibrasi relatif pada LINAC bertujuan untuk memastikan
bahwa dosis radiasi yang dihasilkan oleh mesin ini akurat dan konsisten. Proses
kalibrasi ini dimulai dengan menentukan titik referensi. Titik referensi yang dipakai


                                           15
pada LINAC adalah dosis pada nilai maksimum dari depth dose nya. Pengukuran
dosis dilakukan agar kemudian dapat dibandingkan dengan titik referensi. Dari
sinilah faktor koreksi pada profil LINAC bisa dibuat.

III.4.3. Kalibrasi Absolut
       Kalibrasi Absolut adalah kalibrasi pada LINAC dilakukan melalui
ionization chamber yang berada pada kepala LINAC. Pada kalibrasi tersebu, nilai
Monitor Unit (MU) akan dikalibrasikan agar setara dengan 1 cGy pada kedalaman
dengan dosis output maksimum [21]. Nilai MU merupakan besaran dosis yang
dihasilkan oleh LINAC. Nilai MU ini senantiasa akan diperiksa uniformitasnya
serta kesetaraannya agar selalu +- 1% dari nilai terhadap cGy. Hal ini sesuai dengan
pedoman yang disediakan oleh American Association of Physicists in Medicine
Task Group 40 (AAPM TG)[18].

       Terdapat beberapa usulan metode lain dalam nilai MU ini. Salah satunya
adalah penyetaraan bukan pada output maksimum, melainkan pada kedalaman
tertentu seperti 10 cm dari jarak target terhadap pasien[22]. Pada jurnal yang ditulis
oleh F. Heuvel, beliau memberi pendapat bahwa nilai ini akan lebih resistan
terhadap kesalahan distribusi pada pasien. Akan tetapi pada jurnal yang sama,
beliau juga menyatakan bahwa argumen ini tidak cukup kuat apalagi untuk
mengubah definisi yang sudah terimplementasi pada regulasi pembuatan fasilitas
bunker radioterapi.

III.5. Monte Carlo
       Monte Carlo adalah metode yang menggunakan sampel dari suatu fenomena
untuk memperkirakan rata-rata populasi atas fenomena tersebut [18]. Prinsip
kalkulasi serta database yang digunakan sebagai data probabilitas interaksi partikel
akan dijelaskan sebagai berikut        .

III.5.1. Prinsip Kalkulasi Monte Carlo

       Data Monte carlo didasari oleh dua prinsip, yaitu the law of large number
dan central limit theorem. Prinsip the law of large number adalah ketika rata-rata
sampel semakin mendekati rata-rata populasi seiring dengan semakin besarnya


                                           16
jumlah sampel. Sementara prinsip central limit theorem menjelaskan bahwa
semakin banyak jumlah sampel, distribusi akan semakin mendekati distribusi
normal.

       Kedua prinsip tersebut akan tetap terjadi meskipun sampel yang dimiliki
pada awalnya memiliki distribusi yang tidak seperti distribusi normal. Hal ini dapat
terlihat apabila sejumlah sampel diambil dari distribusi awal, kemudian sampel-
sampel tersebut ditampilkan sebagai distribusi. Maka semakin banyak sampel yang
diambil, distribusinya akan semakin mendekati distribusi normal.

III.5.2. Database Empiris Simulasi Partikel Monte Carlo

       Basis dari probabilitas interaksi partikel didapatkan dengan menggunakan
hasil empiris yang dihasilkan oleh eksperimen yang dilakukan oleh IAEA ataupun
instansi kenukliran lain. Data Evaluated Nuclear Data Library (ENDF)
dipublikasikan oleh The Cross Section Evaluation Working Group (CSEWG).
Dokumen ini senantiasa diperbarui dan ditambahkan demi mendukung jenis-jenis
interaksi partikel lain. Simulasi Monte Carlo memiliki peran yang semakin penting
pada pemodelan hasil radiodiagnostik serta verifikasi perawatan pasien [15].

       Penelitian sebelumnya telah membuktikan bahwa simulasi Monte Carlo
telah sesuai dengan pengukuran eksperimen. Hasil ini konsisten pada rentang energi
yang berbeda-beda. Penelitian tersebut membandingkan grafik percentage depth
dose yang dihasilkan pada beberapa energi yang berbeda pada simulasi serta
pengukuran langsung. Simulasi ini dijalankan pada energi 10 MeV, dosis
maksimum Dmax berada pada kedalaman 2,4 cm[23]. Distribusi tersebut dijabarkan
melalui Gambar III.2. Hasil ini juga didukung oleh penelitian lain yang
membandingkan depth dose antara linear akselerator buatan Elekta dan Siemens
[24]. Perbandingan pengukuran nyata dengan metode simulasi Monte Carlo dapat
direpresentasikan menggunakan Tabel III.1.




                                        17
   Gambar III.4 Precentage Depth Dose water phantom simulasi dan riil [23]


  Tabel III.3 Kedalaman Kedalaman presentase dosis pada water phantom [23]
                                            Depth/cm
 Dosis Relatif
                            10 MeV                            6 MeV
      (%)
                   Simulasi      Eksperimen        Simulasi      Eksperimen
      100             2,4             2,4              1,5            1,6
      90              5,6             5,5              4,2            4,2
      80              8,2             8,2              6,6            6,6
      70             11,1            11,1              9,2            9,2
      60             14,5            14,4              12,0           12,0
      50             18,3            18,3              15,0           15,2


III.5.3. OpenMC

       OpenMC diciptakan oleh Computational Reactor Physics Group (CRPG)
di Massachusetts Institute of Technology (MIT)[20]. OpenMC menggunakan
prinsip simulasi Monte Carlo pada transportasi partikel netral. Solusi numerikal
persamaan transportasi atau disebut juga sebagai perhitungan deterministik akan
mengdiskritkan waktu, energi, sudut yang kemudian masing-masing akan membuat
teror sistematik [17]. Pembandingan hasil simulasi OpenMC terhadap kode



                                      18
transportasi partikel lain seperti PHITS dan MCNP juga telah dilakukan dan
memberikan hasil yang positif[22]. OpenMC juga telah digunakan untuk
mendesain modulator energi untuk kemudian diimplementasikan pada LINAC
nyata[16].

III.5.3.1. Konversi Fluks ke Dosis Ekivalen
        Konversi fluks menjadi dosis ekivalen telah tersedia pada International
Commission on Radiological Protection (ICRP) Publication 116 yang telah
didasari oleh perhitungan kalkulasi Monte Carlo pada program EGSnrc, FLUKA,
GEANT4, MCNPX, dan PHITS [25]. OpenMC akan menghasilkan nilai fluks
berupa particle-cm/sumber. Nilai ini kemudian diubah menjadi µSv cm2
berdasarkan konversi yang disediakan oleh ICRP 116. Dengan menggunakan
ukuran tally yang dipasang pada simulasi, nilai pSv kemudian akan ditemukan.
Nilai ini kemudian disetarakan pada kalibrasi agar mendapatkan dosis perwaktu.
Laju dosis ini kemudian diubah menjadi µSv/minggu yang digunakan sebagai
pembatas dosis.




                                      19
                                    BAB IV
                       PELAKSANAAN PENELITIAN
IV.1. Alat dan Bahan Penelitian
       Pada penilitian ini, aktivitas yang memerlukan alat penelitian adalah pada
simulasi komputer. Simulasi komputer dilaksanakan dengan memanfaatkan server
yang tersedia pada Departemen Teknik Nuklir dan Teknik Fisika (DTNTF)
Universitas Gadjah Mada (UGM).
IV.1.1. Simulasi
Berikut adalah alat yang digunakan dalam penelitian ini :

   1. Laptop Zephyrus G14
             a. AMD Ryzen 7 5800HS @3.2 GHz
             b. 16 GB Random Access Memory
   2. Server Intel(R) Xeon(R) Silver
             a. Intel Xeon Silver 4112 CPU @ 2.60GHz
             b. 32 GB Random Access Memory

   Kedua komputer ini digunakan untuk melakukan simulasi serta membaca hasil
yang didapatkan dari simulasi tersebut. Server disediakan oleh DTNTF UGM.
Kemudian program yang digunakan memiliki lisensi open source, diantaranya :
   1. OpenMC 0.13.1
   2. Python 3.8.10
   3. matplotlib: 3.7.5

IV.2. Tata Laksana Penelitian
       Gambaran umum penelitian ini bisa dideskripsikan sebagai diagram alir di
bawah ini:




                    Gambar IV.1 Ilustrasi workflow penelitian




                                       20
IV.2.1.1. Pemodelan OpenMC
       Pembuatan model OpenMC dilakukan berdasarkan desain awal yang
merupakan kondisi ketika pengukuran langsung dilakukan. Tally dibuat tanpa
menirukan geometri detektor. Nilai keluaran yang didapatkan dari OpenMC
sebenarnya bukanlah dosis berupa µSv/jam melainkan jumlah partikel yang
melewati tally yang dibuat. Maka dari itu sebelum dilakukan simulasi ruangan,
simulasi kalibrasi terlebih dahulu dilakukan untuk mendapatkan faktor konversi
agar keluaran fluks dari OpenMC dapat dikonversi menjadi µSv/jam.

       Data cross sections pertama-tama perlu di unduh dari laman pada situs
OpenMC. Terdapat 2 data yang tersedia yaitu ENDF serta JEFF. Penelitian ini akan
dilakukan dengan menggunakan data ENDF/B-VII.1. Terdapat beragam data
empiris penelitian yang tersedia seperti neutron, elektron, foton, deuteron dan lain-
lain. Data ini kemudian di import melalui terminal linux.

IV.2.1.2. Simulasi Kalibrasi Absolut
       Simulasi akan menghasilkan jenis partikel beserta energi yang dimiliki oleh
partikel tersebut. Berdasarkan hasil percobaan yang dilakukan menggunakan
fantom organ oleh International Commission on Radiological Protection (ICRP).
Hubungan energi partikel dosis perfluens direpresentasikan sebagai Gambar IV.2.
Hubungan antara energi, fluks serta dosis perfluens dapat dituliskan sebagai
Persamanan 4.1 [26]. Interpolasi dilakukan menggunakan data pada Gambar IV.2
agar partikel energinya tidak terdapat pada tabel dapat dikonversikan juga.

                                                                              (4.1)
               = Dosis per fluens (pSv cm2)

       E       = Energi Partikel (MeV)

       Φ       = fluks (partikel – cm / sumber)




                                         21
      Gambar IV.2 Konversi nilai energi partikel ke dosis efektif per fluens
               menggunakan fantom organ pada arah iradiasi [25].
       Pada Gambar IV.2, posisi arah iradiasi terhadap fantom dideskripsikan
menggunakan istilah AP, antero-posterior; PA,postero-anterior; LLAT, left
lateral; RLAT, right lateral; ROT, rotational; ISO, isotropic.

       Setelah nilai dosis per fluens ditemukan, nilai fluks serta dosis keluaran
diperlukan untuk dapat mengetahui laju dosis yang terjadi pada simulasi tersebut.
Hasil ini direpresentasikan sebagai Persamanaan 4.2 [26].

                                                                               (4.2)

       Dv      = Dosis total (pSv)

       SR      = sumber / detik

       t       = waktu (detik)

       V       = volume (cm3)

       Penyederhanaan Persamaan 4.2 dilakukan agar dapat mempermudah
perhitungan laju dosis pada detektor-detektor tally yang dipasang pada geometri


                                        22
ruangan. Penyederhanaan tersebut dilakukan dengan menggunakan nilai S yang
mewakili hubungan dosis per fluens dengan flux dan source Rate. Untuk
mempermudah perhitungan pada simulasi, nilai S tersebut juga digunakan untuk
mengkonversi pSv/s untuk menjadi (µSv/jam).

                                                                                (4.3)

       Ḋ       = Laju dosis (µSv/jam)


       S       = Faktor Konversi (partikel-                )

       Pada sumber radionuklida, nilai Source Rate diberikan oleh data sheet yang
tersedia oleh menufakturnya. Karena pada LINAC data yang diketahui adalah
berupa Dose Rate, kalibrasi dosis kemudian dilakukan untuk dilakukan untuk
mengetahui source rate yang diperlukan untuk menghasilkan Dose Rate pada
LINAC yaitu 360 MU/min atau setara dengan 360 Gy per jam.

       Dengan perubahan formula seperti yang ditunjukkan pada Persamaan 4.3
dan penggunaan faktor konversi, persamaan dapat disederhanakan sebagai
Persamaan 4.4.

                                                                                (4.4)

       Dengan nilai dosis keluaran simulasi masih berupa pSv cm3/sumber, maka
nilai keluaran masih perlu dibagi oleh volume dari sel kalibrasi itu sendiri.

                                                                                (4.5)

                                                                                (4.6)

       Ḋmaks = Laju Dosis Maksimum (µSv/jam)

       DOsk    = Dosis keluaran sel kalibrasi (pSv)

       S       = Faktor Konversi

       Vsk     = volume tally kalibrasi (cm3)



                                         23
         Faktor koefisien kemudian digunakan untuk mencari laju dosis pada masin-
masing detektor yang ada pada ruangan bunker. Hasil nilai fluks beserta energinya
dihasilkan oleh simulasi OpenMC. Kemudian fungsi openmc.dose_coefficient
dipakai untuk mengubah energi tersebut menjadi dosis. Dosis ini dikonversikan ke
laju dosis menggunakan nilai konversi yang ditemukan pada kalibrasi OpenMC.
Nilai yang dihasilkan masih tersebar pada volume tally. Oleh karena itu, pembagian
dengan volume tally yang dipakai perlu dilakukan untuk mendapatkan nilai laju
dosis pada titik-titik pengukuran.

         Pada kondisi nyata, dosis pada water phantom akan dipengaruhi oleh
hamburan dosis dari sekitar, setup pengukuran kualitas dan energi penyinaran serta
kondisi lingkungan lain seperti suhu, tekanan dan kelembaban. Akan tetapi hal
tersebut diabaikan karena simulasi dilakukan dalam keadaan ideal.

IV.2.1.3. Simulasi Ruangan pada 4 sudut gantry
         Simulasi dilakukan pada empat sudut yang berbeda dengan rentang 90. Nilai
inilah yang kemudian akan digunakan untuk memperkirakan total dosis yang
diterima pada tiap ruangan tiap minggunya.
         Program sederhana ini digunakan agar sudut rotasi dapat dipilih sebelum
simulasi dijalankan. Hal ini memungkinkan eksekusi OpenMC lebih mudah untuk
dieksekusi. Kemudian penggunaan sumber adalah replikasi dari penyinaran
LINAC. Box source digunakan dan menyebar hingga mencapai FIELD SIZE 40 x
40 cm.
         Energi dari sumber foton tersebar secara diskrit dengan energi 10 MeV.
Kemudian persebaran dilakukan secara diskrit dan menyebar secara merata dengan
volume bola. Persebaran tersebut hanya terjadi terhadap luas yang dideskripsikan
sebagai luas Field Size. Kemudian posisi arah penyinaran juga diformulasikan agar
dapat berada pada 100 cm dari isosenter sesuai dengan sudut rotasi penyinarannya.
Hal tersebut dilakukan dengan fungsi pada lampiran 1 berupa fungsi sposi yang
pada Lampiran A.




                                        24
       Pemasangan Tally fluks dilakukan dengan filter energi. Jenis Tally ini
diperlukan untuk mengetahui jenis partikel serta energinya agar kemudian dapat
dikonversikan menjadi dosis per fluens sesuai dengan ICRP 116.
       Kemudian beberapa titik dengan variasi jarak terhadap dinding akan
digunakan sebagai lokasi pengukuran laju dosis. Titik-titik inilah yang kemudian
akan dikaji untuk dibandingkan dengan pembatas dosis yang berlaku.
       Penampilan geometri kemudian dilakukana pada 3 variasi sumbu agar dapat
diperiksa apakah sudah sesuai dengan desain bunker atau belum. Geometri ini juga
dapat digunakan untuk menampilkan visualisasi persebaran dosis. Persebaran dosis
didapatkan dengan membuat grid tally yang menyebar ke seluruh ruangan.
       Kemudian sumber didefinisikan melalui fungsi source.space, source.angle
, source.energy dan source.particle. Source.space dibuat sebagai sumber berbentuk
kotak pada posisi yang dihasilkan oleh fungsi rotasi. Kemudian source.angle
didefinisikan sebagai polar azimuthal. Persebaran angle ini akan terjadi dengan
membentuk seperti permukaan bola hanya ke Field Size terluas, yaitu sebesar 40x40
cm. Persebaran energi terjadi secara diskrit pada energi 10 MeV. Hal ini dilakukan
dengan deskripsi pada fungsi source.energy. source.particle mendeskripsikan jenis
yang dipancarkan sumber. Pada penelitian ini, variabel tersebut diatur sebagai
foton. Pada Gambar IV.3, denah bangunan digunakan dalam menggambarkan titik-
titik pengukuran menggunakan simulasi.




  Gambar IV.3 Denah titik pengukuran laju dosis ruang LINAC Synergy [19]



                                       25
IV.3. Analisis Hasil Penelitian
       Setelah nilai konversi didapatkan, simulasi pada 4 sudut gantry dilakukan
kemudian dosis keluarannya dikonversi menjadi µSv/jam yang merupakan besaran
laju dosis yang lebih lazim digunakan pada detektor radiasi. Konversi
menggunakan faktor kalibrasi serta volume dari tally detektor dituliskan secara
sederhana melalui Persamaan 4.4.
       Setelah laju dosis pada LINAC diketahui, Nilai ini akan digunakan untuk
mengetahui laju dosis dari titik-titik pengukuran pada tiap sudut penyinaran.
Sebelum hal tersebut dilakukan, lama waktu penyinaran LINAC perlu dihitung agar
kemudian dapat dikalikan dengan laju dosis. Waktu total pengoperasian dicari
dengan asumsi yang digunakan pada dokumen konstruksi serta asumsi bahwa setiap
penyinaran dilakukan dengan menggunakan DR maksimum. Waktu tersebut
ditemukan dengan mencari tahu berapa lama waktu yang diperlukan untuk
mencapai beban kerja dengan DR yang digunakan.

                                                                          (4.7)

                                                                          (4.8)
tW     = Waktu pengoperasian LINAC untuk mencapai beban kerja dengan DR
maksimum (jam)

W      = Workload / beban kerja pengoperasian LINAC tiap minggu (Gy/minggu)

Ḋ      = Dose Rate pengoperasian LINAC (MU/menit)

DU     = Dosis berdasarkan utilitas sudut spesifik dan beban kerja LINAC
(µSv/minggu)

U      = Faktor Utilitas Presentase LINAC menyinari sudut tersebut dibandingkan
sudut gantry lainnya (%)

       Karena beban kerja terpenuhi dengan memvariasikan sudut penyinaran
LINAC, Faktor utilitas yang dikeluarkan oleh NCRP 151 digunakan. Faktor
tersebut merepresentasikan penggunaan penyinaran LINAC pada tiap rentang 90°
Laju dosis simulasi pada setiap sudutnya kemudian akan dikalikan dengan


                                      26
presentase tersebut. Dosis utilitas pada masing-masing sudut LINAC kemudian
dijumlahkan agar ekspektasi laju dosis pada tiap titiknya pada tiap minggu
pengoperasian LINAC dapat ditemukan. Karena titik-titik pengukuran dilakukan
pada ruangan yang berbeda-beda, waktu yang dihabiskan oleh pekerja radiasi pada
titik-titik tersebut akan berbeda-beda. Hal tersebut dijelaskan dan digunakan dalam
perhitungan analitik pada pendesainan ketebalan minimum bunker. Relasi antara
laju dosis dan okupansi ini kemudian dapat direpresentasikan melalui Persamaan
4.8.

                                                                             (4.8)
Faktor Okupansi (T) = Nilai ini merepresentasikan frekuensi orang pada titik
tersebut pada pengoperasian LINAC.

DTO    = Dosis Total Okupansi pada titik pengukuran (µSv/minggu)

W      = Workload / beban kerja pengoperasian LINAC tiap minggu (Gy/minggu)

Ḋ      = Dose Rate pengoperasian LINAC (MU/menit)

       Persamaan 4.8 merupakan ekspektasi laju dosis yang diterima di satu titik
pengukuran pada tiap minggunya. Contohnya pada ruang operator, Dosis total
(DTO) berasal dari laju dosis ketika pengoperasian LINAC mengarah ke bawah
(DU0) dan sudut-sudut penyinaran lainnya yang kemudian dikalikan dengan faktor
okupansi (T) dari ruang operator.

IV.3.1. Interpretasi Persebaran Geometri Radiasi pada Simulasi
       Nilai yang dihasilkan simulasi memiliki kelebihan berupa persebarannya
dapat divisualisasikan. Hal ini akan dapat membantu interpretasi persebaran dosis
yang terjadi pada simulasi ruangan LINAC. Visualisasi ini akan merepresentasikan
persebaran laju dosis yang terjadi pada ruangan tersebut.




                                        27
                                BAB V        Hasil dan pembahasan




                         HASIL DAN PEMBAHASAN
V.1. Hasil Simulasi OpenMC
       Mula-mula kalibrasi dilakukan dengan menggunakan replika water
phantom. Nilai Dmax dari simulasi tersebut kemudian dipakai sebagai konversi dosis
keluaran OpenMC menjadi dosis yang dapat dibandingkan dengan pembatas dosis.
V.1.1. Kalibrasi Dosis ke Laju Dosis Simulasi
       Kalibrasi dilakukan dengan menggunakan replika water phantom yang
berjarak 100 cm terhadap source. Field size dari simulasi kalibrasi dosis adalah 30
cm X 30 cm.
       Nilai Dmax pada kalibrasi kemudian digunakan sebagai penyetaraan pada
penyinaran LINAC yang memiliki nilai 600 MU/menit atau setara dengan 360
µSv/jam yang dapat direpresentasikan melalui Persamanaan 4.4.




  Gambar V.1 Percent Depth Dose (PDD) Simulasi Kalibrasi Water Phantom

       Grafik PDD memiliki perbedaan yang cukup signifikan dibandingkan
bentuk pada simulasi maupun pengukuran nyata dikarenakan sumber yang
digunakan adalah sumber sederhana. Sumber ini tidak membuat komponen-
komponen seperti Primary Collimator Flattening Filter, Monitor Chamber serta
Jaw layaknya pada kepala LINAC sesungguhnya. Simulasi ini juga tidak
menggunakan berkas phase-space berupa .phsp. Batch dari simulasi ini berjumlah


                                        28
sama dengan batch pada simulasi ruangan yaitu sejumlah 3 batch dengan partikel
berjumlah 1.000.000.000. Dapat terlihat bahwa puncak dosis berada pada 1,1 dan
sekitar 1,9 cm di dalam water phantom dengan puncak 2,1 cm pada grafik yang
trendline yang dibuat dengan cara dihaluskan.




Gambar V.2 Percent Depth Dose (PDD) Simulasi Kalibrasi Water Phantom pada
                                    10 batch
       Pada pengukuran kalibrasi dengan menggunakan batch yang lebih besar,
grafik tersebut menunjukkan dosis puncak pada jarak yang berbeda. Hal ini terjadi
karena geometri yang digunakan untuk memunculkan sinar LINAC tidak
menyerupai geometri LINAC nyata. Puncak pada batch kurang lebih berada pada
kedalaman 6,1 cm. Hal ini cukup jauh apabila dibandingkan dengan hasil
eksperimen maupun simulasi Monte Carlo dengan geometri asli.
V.1.2. Geometri
       Geometri dibuat dengan menggunakan fungsi yang tersedia pada python,
geometri diciptakan pada sumbu xy, yz dan xz. Secara sederhana, dapat
dideskripsikan bahwa ruangan terdiri dari dinding primer pada kedua sisi samping
dan lorong pada satu sisi lainnya. Hal ini sesuai dengan denah yang tersedia pada
Gambar V.3. Pada geometri tersebut, warna abu-abu berarti dinding beton dari
ruangan tersebut. Kemudian warna kuning mewakilkan lapisan besi pada dinding.
Selain itu ada juga detektor tally yang diilustrasikan sebagai warna biru tua.


                                       29
Kemudian Warna biru muda adalah box source yang digunakan untuk
memunculkan radiasi foton.




        Gambar V.3 Geometri ruang LINAC simulasi pada persepsi XY




        Gambar V.4 Geometri ruang LINAC simulasi pada persepsi YZ




        Gambar V.5 Geometri ruang LINAC simulasi pada persepsi XZ




                                   30
V.1.3. Peta Sebaran Dosis Persudut




         Gambar V.6 Heatmap Distribusi Dosis Hasil Simulasi default

       Dapat dilihat bahwa pada keluaran asli heatmap pada Gambar V.6, tidak
terdapat radiasi yang signifikan pada sekitar ruangan kecuali dari dinding primer
yang dikenai radiasi LINAC secara langsung. Persebaran dosis ini dibentuk
menggunakan fungsi grid yang tersebar pada bunker tersebut. Dapat terlihat bahwa
dosis yang signifikan terjadi sesuai dengan arah penyinaran kepala LINAC.
Sedangkan pada sekitarnya dosis yang terdeteksi tidak terlalu signifikan. Simulasi
dijalankan sebanyak 1.000.000.000 sejumlah 3 batch. Warna putih diruangan
berarti jumlah partikel pada simulasi tersebut masih kurang dan perlu ditambah. Hal
ini dikarenakan jumlah partikel yang lebih banyak akan dapat memunculkan hasil
yang lebih akurat pada area ruangan yang memiliki dosis terlalu kecil. Pada Gambar
V.6 sampai V-9, geometri digabung dengan heatmap agar interpretasi lebih mudah
dilakukan.

       Dengan menggunakan geometri yang sebelumnya dibuat dan heatmap dosis
pada simulasi, visualisasi dari persebaran dosis bunker dapat dibuat. Pada dosis


                                        31
sudut 0° dengan arah sinar LINAC ke lantai, pantulan radiasi dari menyebar ke
sekitar ruangan. Hal ini membuat laju dosis pada sudut ini lebih besar secara
signifikan dibandingkan dengan sudut-sudut penyinaran lainnya. Dosis pada sudut
ini juga lebih akurat karena setiap titik mendapatkan laju dosis dari berbagai sudut
hingga memenuhi semua titik dari sekitar bunker.




   s
              Gambar V.7 Distribusi Dosis pada gantry 0° (Bawah)


       Hal yang sama tidak bisa dikatakan pada penyinaran sudut-sudut lainnya.
Dapat dilihat bahwa dosis pada penyinaran sudut-sudut lain belum cukup
menyeluruh hingga memenuhi grid tally pada simulasi sudut tersebut. Perhitungan
analitik sederhana dapat membuktikan bahwa setiap titik dari sekitar bunker
seharusnya memiliki dosis radiasi. Sedangkan berdasarkan gambar-gambar
penyinaran ini, dapat terlihat bahwa terdapat tally-tally yang tidak mendapatkan
dosis sama sekali. Peningkatan jumlah partikel sangat diperlukan pada sudut-sudut




                                        32
yang lain. Laju dosis pada sudut 270° dan 90° hanya signifikan ke arah bunker lain,
sedangkan pada sudut 180° sebaran mengarah ke atap yang tidak bisa diakses.




                     Gambar V.8 Distribusi Dosis pada gantry 90°




             Gambar V.9 Distribusi Dosis pada gantry 180° (Atas)

       Laju dosis pada sudut-sudut selain 0° menunjukkan titik-titik kosong pada
simulasi tersebut. Hal ini dapat ditanggulangi dengan peningkatan partikel sejumlah


                                        33
penurunan orde pada laju dosis di sekitar ruangan bunker. Laju dosis disekitar
ruangan pada sudut-sudut tersebut ada di orde -4, sedangkan pada orde -3 radiasi
sudah dapat memenuhi visualisasi simulasi. Dari sini dapat diketahui bahwa
peningkatan jumlah partikel yang diperlukan adalah sejumlah puluhan kali.
Peningkatan ini bisa menjadi 1x1010 hingga mencapai 9x1010 partikel. Dengan
menggunakan spesifikasi komputer pada penelitian ini, hal tersebut dapat memakan
waktu 20 hingga 180 hari. Maka dari itu peningkatan spesifikasi komputer perlu
dilakukan.




                Gambar V.10 Distribusi Dosis pada gantry 270°


V.2. Perbandingan Batas Dosis dan Hasil Simulasi
       Laju dosis yang didapatkan pada tally-tally yang dipasang mendapatkan
hasil yang ditampilkan pada Tabel V.1. Dapat dilihat bahwa dosis lebih besar secara
signifikan pada sudut 0°. Hal inilah yang membuat grid tally dapat terlihat penuh
pada sudut tersebut.




                                        34
                        Tabel V.1 Tabel Hasil Laju Dosis
                       Jarak ke                  Laju Dosis Simulasi (μSv/jam)
     Titik   Lokasi    Dinding
                         (cm)        0°               90°            180°           270°

             Depan        30      5,71×10-3         1,31×10-3      2,15×10-3      2,00×10-4
       A      Pintu      100      3,35×10-3         9,10×10-4        0,00         6,37×10-4
             Bunker      200      1,20×10-2         3,83×10-4      7,86×10-4      5,63×10-4

               R.         30      2,07×10-2         6,64×10-4      1,67×10-3      6,80×10-4
       B     Kontrol     100      4,00×10-2         3,55×10-4      1,93×10-4      2,40×10-4
             LINAC       200      5,32×10-2         2,68×10-4      1,93×10-4      2,04×10-4
                          30      1,87×10-2         6,64×10-4      1,55×10-4        0,00
                                            -2                -4             -3
       C     R.TPS       100      2,90×10           3,49×10        1,22×10        7,00×10-4
                         200      4,81×10-2         5,66×10-4      1,23×10-3      6,93×10-4

             Bunker       30      5,47×10-2         7,58×10-4      2,51×10-3      3,20×10-1
       D      Linac      100      6,37×10-2         6,70×10-4      3,30×10-2      2,48×10-1
             Precise     200      9,93×10-2         3,76×10-4      1,81×10-4      2,20×10-1

       Berdasarkan pengukuran laju dosis pada Tabel V.1, dapat dilihat bahwa
dosis radiasi tidak selalu mengecil semakin jauh deteksi dilakukan. Hal ini
dikarenakan radiasi yang melewati detektor terjauh dapat dilakukan oleh radiasi
yang bukan datang secara tegak lurus terhadap dinding. Kemudian pada sudut 180°
serta 270°, terdapat detektor yang tidak dilewati oleh radiasi sama sekali.

       Dosis yang dihasilkan sudah sangat rendah mengingat LINAC hanya
dioperasikan beberapa kali tiap harinya. Dengan menggunakan asumsi beban kerja
yang dipakai untuk menghitung ketebalan LINAC, total lama LINAC beroperasi
dapat dihitung. Perhitungan ini dilakukan dengan asumsi bahwa laju dosis
penyinaran maksimum digunakan. Perhitungan beban kerja dapat dihitung secara
komprehensif berdasarkan Tabel V.2. Perhitungan beban kerja pada perhitungan
analitik pada dinding sekunder dilakukan dengan mempertimbangkan faktor
koefisien Q. Sedangkan hal ini berbeda dengan perhitungan analitik primer yang
tidak menggunakan faktor tersebut.




                                            35
                      Tabel V.2 Perhitungan Beban Kerja Mingguan
                           Jumlah      Dosis per         Hari
            Jenis                                                       Total Dosis
                            Pasien      pasien        beroperasi
         Penyinaran                                                    (Gy/minggu)
                           (orang)    (Gy/pasien)   (hari/minggu)
      Konvensional            20           4              5                400
           IMRT                 50         4             5                1000
           VMAT                 10         4             5                 200
            QA                  12         2             6                 144
                      Total Beban Kerja (Gy/minggu)                       1744
                   Lama LINAC Beroperasi (jam/minggu)                      4,84

          Pada setiap dinding tersebut, batas dosis yang berlaku adalah pembatas
dosis pekerja. Hal ini dikarenakan setiap ruangan di sekitar bunker merupakan
ruangan pekerja dan tidak dapat dimasuki oleh masyarakat umum. Pembatas dosis
pada pekerja radiasi menurut Perka BAPETEN no.4 tahun 2013 adalah sebesar 200
μSv/minggu.

                     Tabel V.3 Laju Dosis pada Penyinaran LINAC 0°
                                                      Laju Dosis per       Laju Dosis
                        Jarak ke     Laju Dosis
 Titik     Lokasi                                        minggu              Utilitas
                      Dinding (cm)   (μSv/jam)
                                                      (μSv/minggu)        (μSv/minggu)

                          30          5,71×10-3         2,77×10-2           8,58×10-3
           Depan
  A         Pintu         100         3,35×10-3         1,62×10-2           5,03×10-3
           Bunker
                          200         1,20×10-2         5,83×10-2           1,81×10-2
                          30          2,07×10-2         1,00×10-1           3,11×10-2
            R.
  B       Kontrol         100         4,00×10-2         1,94×10-1           6,00×10-2
          LINAC
                          200         5,32×10-2         2,58×10-1           8,00×10-2
                          30          1,87×10-2         9,07×10-2           2,81×10-2
  C        R.TPS          100         2,90×10-2         1,40×10-1           4,35×10-2
                          200         4,81×10-2         2,33×10-1           7,23×10-2
                          30          5,47×10-2         2,65×10-1           8,21×10-2
           Bunker
  D         Linac         100         6,37×10-2         3,08×10-1           9,56×10-2
           Precise
                          200         9,93×10-2         4,81×10-1           1,49×10-1




                                          36
                  Tabel V.4 Laju Dosis pada Penyinaran LINAC 90°

                      Jarak ke     Laju Dosis    Dosis per minggu   Dosis Utilitas
Titik   Lokasi
                    Dinding (cm)   (μSv/jam)      (μSv/minggu)      (μSv/minggu)

                        30          1,31×10-3       6,34×10-3         1,35×10-3
        Depan
 A       Pintu          100         9,10×10-4       4,41×10-3         9,39×10-4
        Bunker
                        200         3,83×10-4       1,85×10-3         3,95×10-4
                        30          6,64×10-4       3,22×10-3         6,86×10-4
          R.
 B      Kontrol         100         3,55×10-4       1,72×10-3         3,67×10-4
        LINAC
                        200         2,68×10-4       1,30×10-3         2,76×10-4
                        30          6,64×10-4       3,22×10-3         6,86×10-4
 C      R.TPS           100         3,49×10-4       1,69×10-3         3,60×10-4
                        200         5,66×10-4       2,74×10-3         5,84×10-4
                        30          7,58×10-4       3,67×10-3         7,82×10-4
        Bunker
 D       Linac          100         6,70×10-4       3,24×10-3         6,91×10-4
        Precise
                        200         3,76×10-4       1,82×10-3         3,88×10-4



           Tabel V.5 Laju Dosis pada Penyinaran LINAC 180° (Atas)

                      Jarak ke     Laju Dosis    Dosis per minggu   Dosis Utilitas
Titik   Lokasi
                    Dinding (cm)   (μSv/jam)      (μSv/minggu)      (μSv/minggu)

                        30          2,15×10-3       1,04×10-2         2,74×10-3
        Depan
 A       Pintu          100           0,00             0,00             0,00
        Bunker
                        200         7,86×10-4       3,81×10-3         1,00×10-3
                        30          1,67×10-3       8,09×10-3         2,13×10-3
          R.
 B      Kontrol         100         1,93×10-4       9,33×10-4         2,45×10-4
        LINAC
                        200         1,93×10-4       9,33×10-4         2,45×10-4
                        30          1,55×10-4       7,51×10-4         1,97×10-4
 C      R.TPS           100         1,22×10-3       5,92×10-3         1,56×10-3
                        200         1,23×10-3       5,95×10-3         1,56×10-3
                        30          2,51×10-3       1,21×10-2         3,19×10-3
        Bunker
 D       Linac          100         3,30×10-2       1,60×10-1         4,20×10-2
        Precise
                        200         1,81×10-4       8,76×10-4         2,30×10-4




                                        37
                   Tabel V.6 Laju Dosis pada Penyinaran LINAC 270°

                       Jarak ke     Laju Dosis    Dosis per minggu   Dosis Utilitas
 Titik   Lokasi
                     Dinding (cm)   (μSv/jam)      (μSv/minggu)      (μSv/minggu)

                         30          2,00×10-4        9,67×10-4        2,06×10-4
         Depan
  A       Pintu          100         6,37×10-4        3,09×10-3        6,57×10-4
         Bunker
                         200         5,63×10-4        2,73×10-3        5,81×10-4
                         30          6,80×10-4        3,29×10-3        7,02×10-4
           R.
  B      Kontrol         100         2,40×10-4        1,16×10-3        2,48×10-4
         LINAC
                         200         2,04×10-4        9,88×10-4        2,11×10-4
                         30            0,00             0,00             0,00
  C       R.TPS          100         7,00×10-4        3,39×10-3        7,23×10-4
                         200         6,93×10-4        3,36×10-3        7,16×10-4
                         30          3,20×10-1          1,55           3,30×10-1
         Bunker
  D       Linac          100         2,48×10-1          1,20           2,56×10-1
         Precise
                         200         2,20×10-1          1,07           2,27×10-1

         Dengan lama waktu operasional LINAC perminggu serta batas dosis sesuai
dengan ketentuan NCRP 151 serta SRS 47, keselamatan desain bunker dapat dikaji
kesesuaiannya. Nilai tersebut didapatkan dengan mengkalikan total laju dosis
terhadap faktor utilitas dari masing-masing sudut penyinaran. Berdasarkan Tabel
III.2, utilitas senilai 31% pada 0°, 21,3% pada 90° dan 270°, serta 26,3 pada 180°.
Laju dosis dari simulasi tiap sudut kemudian akan dikalikan dengan utilitasnya
masing-masing agar kemudian dapat dijumlahkan untuk mengetahui ekspektatsi
dosis pekerja di setiap titik yang dikaji. Nilai inilah yang pada akhirnya dapat
dibandingkan untuk mengetahui seberapa kecil dosis yang diterima pekerja di titik-
titik tersebut dibandingkan dengan pembatas dosis yang berlaku. Hal tersebut
dijelaskan melalui Persamaan 4.7.

         Laju dosis pada hasil pengukuran masing-masing sudut akan dijumlahkan
untuk menemukan laju dosis pada pekerja. Total dari pengoperasian LINAC pada
tiap minggunya serta penggunaan faktor okupansi untuk memperkirakan dosis yang
diterima pada pekerja berdasarkan okupansi ditunjukkan pada Tabel V.7.




                                         38
         Tabel V.7 Total Ekspektasi Laju Dosis pada Pekerja di Ruangan

                         Faktor      Jarak ke                       Total Dosis
                                                 Total Dosis
      Titik   Lokasi    Okupansi     Dinding                         Okupansi
                                                (μSv/minggu)
                          (T)          (cm)                        (μSv/minggu)

              Depan                      30        1,29×10-2         1,61×10-3
       A       Pintu       0,125        100        6,62×10-3         8,28×10-4
              Bunker                    200        2,01×10-2         2,51×10-3
                R.                       30        3,46×10-2         3,46×10-2
       B      Kontrol        1          100        6,09×10-2         6,09×10-2
              LINAC                     200        8,07×10-2         8,07×10-2
                                         30        2,90×10-2         2,90×10-2
       C      R.TPS          1          100        4,62×10-2         4,62×10-2
                                        200        7,52×10-2         7,52×10-2
              Bunker                     30        4,16×10-1         2,08×10-1
       D       Linac        0,5         100        3,94×10-1         1,97×10-1
              Precise                   200        3,77×10-1         1,88×10-1

       Dosis yang diberikan LINAC pada titik-titik tersebut jauh lebih kecil
dibandingkan nilai batas dosisnya yaitu 200 μSv/minggu. Nilai ini 961 hingga
242.000 kali lebih kecil dibandingkan NBD yang berlaku. Perlu diperhatikan target
dosis pada setiap bunker adalah pada dinding bunker tersebut, sedangkan kajian
dosis dilakukan pada jarak 30 cm, 100 serta 200 cm. Lokasi ini adalah lokasi yang
lebih mungkin dihabiskan oleh para pekerja radiasi pada saat penyinaran dilakukan.

       Pada pendesainan ruang bunker, penambahan ketebalan senilai half value
layer (HVL) juga dilakukan setelah ketebalan dinding minimum didapatkan. Hal
tersebut kemudian juga dilanjutkan dengan pembulatan ukuran pada dinding beton.
Maka dari itu, Inverse square law serta faktor atenuasi berperan besar pada laju
dosis yang berkali-kali lipat dibandingkan nilai batas dosisnya.

       Pada simulasi ini, karakteristik LINAC merupakan penyederhanaan dari
penyinaran LINAC nyata. Keakuratan hasil simulasi dapat ditingkatkan dengan
penambahan flattening filter (FF), penggunaan phase space file serta peningkatan
jumlah partikel.




                                        39
                                       BAB VI
                          KESIMPULAN DAN SARAN
VI.1. Kesimpulan
1.   Laju dosis hasil simulasi di sekitar bunker LINAC berada pada rentang 8,28
     ×10-3 hingga 0,208 μSv/minggu. Nilai ini jauh lebih kecil dibandingkan dengan
     pembatas dosis yang diberlakukan oleh Perka BAPETEN no.3 tahun 2013. Hal
     ini berarti keselamatan bunker sudah sesuai dengan standar yang berlaku.

2.   Didapatkan visualisasi persebaran laju dosis pada ruangan bunker untuk
     membantu interpretasi dosis yang terjadi pada masing-masing titik pengukuran
     laju dosis pada sekitar bunker.

VI.2. Saran
        Terdapat hal-hal yang dapat dikembangkan dalam pelaksanaan penelitian
ini. Peningkatan keakuratan hasil simulasi dapat dilakukan dengan penambahan
flattening filter (FF), penggunaan phase space file serta peningkatan jumlah
partikel. Penggunaan komputer dengan spesifikasi yang lebih tinggi juga dapat
digunakan agar dapat mensimulasikan jumlah partikel yang lebih banyak.




                                         40
                              DAFTAR PUSTAKA
[1]   P. D. S. O. P.O.R.I, “Program Kerja Perhimpunan Dokter Spesialis Onkologi
      Radiasi 2018-2021,” pp. 1–24, 2018.
[2]   COCIR, “Radiotherapy age profile & density,” no. December, 2019.
[3]   Badan Pengawas Tenaga Nuklir, “Peraturan Kepala Badan Pengawas
      Tenaga Nuklir Nomor 4 Tahun 2013 tentang Proteksi dan Keselamatan
      Radiasi Dalam Pemanfaatan Tenaga Nuklir,” 2013.
[4]   IAEA, “IAEA Safety Reports Series No. 47 - Radiation Protection in the
      Design of Radiotherapy Facilities,” Saf. Reports Ser., vol. 47, p. 9, 2006,
      [Online].                    Available:                       https://www-
      pub.iaea.org/MTCD/publications/PDF/Pub1223_web.pdf
[5]   NCRP, “Structural Shielding Design and Evaluation for Megavoltage X and
      Gamma Ray Radiotherapy Facilities,” Maryland, 2005.
[6]   M.Yu. Tikhonchev, G.A. Shimansky, E.E. Lebedeva, V. V. Lichadeev, D.
      K. Ryazanov, and A.I. Tellin, “The Role of Computer Simulation in Nuclear
      Technologies Development,” Res. Inst. At. React., 2000.
[7]   A. S. Ferdiansyah, “Evaluasi Keselamatan Radiasi pada Dinding Gedung
      Linear Accelerator (LINAC) Versa HD di Rumah Sakit Umum Pusat Dr.
      Sardjito,” Skripsi, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas
      Teknik, Universitas Gadjah Mada, 2022.
[8]   Y. M. Dinata, “Pengukuran Paparan Radiasi di Luar Bungker LINAC
      Radiotherapy Rumah Sakit Dr. Sardjito Yogyakarta,” Thesis, Departemen
      Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah
      Mada, 2010.
[9]   A. Rafi, “Desain Dinding Perisai Radiasi Ruangan Hot Laboratory pada
      Instalasi Kedokteran Nuklir Menggunakan Program Monte Carlo N-Particle
      Extended,” Skripsi, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas
      Teknik, Universitas Gadjah Mada, 2018.
[10] N. K. T. Kusnaedi, “Analisis Ketebalan dan Material pada Perisai Radiasi
     Ruang Siklotron 30 MeV untuk BNCT menggunakan Program Particle and
     Heavy Ion Transport Code System (PHITS),” Skripsi, Departemen Teknik
     Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah Mada, 2023.
[11] A.R. Priadi, “Evaluasi Desain Ruangan Linear Accelerator (LINAC) 10 MV
     di Rumah Sakit JIH Yogyakarta Menggunakan OpenMC,” Skripsi,
     Departemen Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas
     Gadjah Mada, 2022.
[12] M. A. Efendi, A. Funsian, T. Chittrakarn, and T. Bhongsuwan, “Monte Carlo
     simulation using PRIMO code as a tool for checking the credibility of
     commissioning and quality assurance of 6 MV TrueBeam STx varian
     LINAC,” Reports Pract. Oncol. Radiother., vol. 25, no. 1, pp. 125–132,


                                      41
      2020, doi: 10.1016/j.rpor.2019.12.021.
[13] N. Tsoulfanidis, Measurement and Detection of Radiation. Boca Raton:
     CRC Press, 2010. doi: 10.1201/9781439894651.
[14] Glenn F. Knoll, Radiation detection and measurement, 4th ed. Hoboken, N.J:
     JOHN WILEY, 2020. doi: 10.1134/S1063778819090060.
[15] J. E. Martin, Physics for Radiation Protection. Weinheim: Wiley, 2013. doi:
     10.1002/9783527667062.
[16] K. S. Krane and W. G. Lynch, “Introductory Nuclear Physics,” Phys. Today,
     vol. 42, no. 1, pp. 78–78, Jan. 1989, doi: 10.1063/1.2810884.
[17] H. Cember and J. E. Turner, “Introduction to Health Physics. Second
     Edition,” Phys. Today, vol. 37, no. 9, pp. 78–79, Sep. 1984, doi:
     10.1063/1.2916417.
[18] G. J. Kutcher et al., “Comprehensive QA for radiation oncology: Report of
     AAPM Radiation Therapy Committee Task Group 40,” Med. Phys., vol. 21,
     no. 4, pp. 581–618, Apr. 1994, doi: 10.1118/1.597316.
[19] “Dokumen Perhitungan Tebal Dinding Penahan Radiasi Ruang Pesawat
     LINAC Elekta Synergy Instalasi Radioterapi RSUP Dr. Hasan Sadikin”.
[20] A. W. Harto, Dasar-Dasar Fisika Akselerator. Sleman: UGM Press, 2023.
[21] M. Hossain, “Output trends, characteristics, and measurements of three
     megavoltage radiotherapy linear accelerators,” J. Appl. Clin. Med. Phys., vol.
     15, no. 4, pp. 137–151, Jul. 2014, doi: 10.1120/jacmp.v15i4.4783.
[22] F. Van den Heuvel, Q. Wu, and J. Cai, “In modern linacs monitor units
     should be defined in water at 10 cm depth rather than at d max,” Med. Phys.,
     vol. 45, no. 11, pp. 4789–4792, Nov. 2018, doi: 10.1002/mp.13015.
[23] Y. Zhang, Y. Feng, X. Ming, and J. Deng, “Energy Modulated Photon
     Radiotherapy: A Monte Carlo Feasibility Study,” Biomed Res. Int., vol.
     2016, pp. 1–16, 2016, doi: 10.1155/2016/7319843.
[24] M. Rianna, H. A. Sianturi, H. Lubis, A. Pelawi, T. Sembiring, and M.
     Situmorang, “Comparison of Energy Doses 10 Mv Distribution Using
     Percentage Depth Dose (Pdd) Method on Linac: Electa and Siemens,” J.
     Nat., vol. 18, no. 2, pp. 85–88, 2018, doi: 10.24815/jn.v18i2.11133.
[25] Clement C. H. and Petoussi-Henss N., “ICRP Publication 116 Conversion
     Coefficients for Radiological Protection Quantities for External Radiation
     Exposures,” Ann. ICRP, 2012, doi: 10.1016/0146-6453(81)90127-5.
[26] P. K. Romano, “Openmc.data.dose_coefficients.” [Online]. Available:
     https://openmc.discourse.group/t/openmc-data-dose-coefficients/1634




                                        42
                             LAMPIRAN A
                      Listing Program OpenMC

                   Pemanggilan cross section ENDF
Export          OPENMC_CROSS_SECTIONS='/home/sena/Code/endfb-vii.1
hdf5/cross_sections.xml'

# export OPENMC_CROSS_SECTIONS=$var/cross_sections.xml

export HDF5_DISABLE_VERSION_CHECK=1

                          Program Kalibrasi
import openmc

# vim:foldmethod=marker

import openmc

import matplotlib.pyplot as plt

import openmc.stats, openmc.data

from math import cos, atan2, pi



batches = 10

inactive = 10

particles = int(input('Enter number of particle (It was 1e8)\n= '))
#1_000_000_000




# Material

# {{{

air=openmc.Material(name='Air')

air.set_density('g/cm3',0.001205)

air.add_nuclide('N14',0.7)

air.add_nuclide('O16',0.3)

#air.add_s_alpha_beta('c_H_in_Air')

air.add_element('C',0.002)

air.add_element('Fe',0.001)

air.add_element('Si',0.001)

air.add_element('Mn',0.001)



                                   43
water=openmc.Material(name='Water')

water.set_density('g/cm3',1.0)

water.add_nuclide('H1',2.0)

water.add_nuclide('O16',1.0)

water.add_s_alpha_beta('c_H_in_H2O')



water2=openmc.Material(name='Water')

water2.set_density('g/cm3',1.0)

water2.add_nuclide('H1',2.0)

water2.add_nuclide('O16',1.0)

water2.add_s_alpha_beta('c_H_in_H2O')



materials = openmc.Materials( [air,water,water2])

materials.export_to_xml()

# }}}



SSD = 100.0 #Source to Skin Distance

PHANTOM_WIDTH = 40

ld= 0.1# panjang dan lebar WP

d = 30.0 #kedalaman WP

padd = 10.0 #padding terhadap source dan detektor



# {{{



n = 300

phantom_cells = []

dx = d/n

for i in range(n):

  x0 = SSD + i*dx

  x1 = SSD +(i+1)*dx

  r_x = +openmc.XPlane(x0) & -openmc.XPlane(x1)



                                  44
  r_y = +openmc.YPlane(-ld/2.0) & -openmc.YPlane(ld/2.0)

  r_z = +openmc.ZPlane(-ld/2.0) & -openmc.ZPlane(ld/2.0)



  cell = openmc.Cell(region=r_x & r_y & r_z)

  cell.fill = water2

  phantom_cells.append(cell)



r_x = +openmc.XPlane(SSD) & -openmc.XPlane(SSD+d)

r_y = +openmc.YPlane(-ld/2.0) & -openmc.YPlane(ld/2.0)

r_z = +openmc.ZPlane(-ld/2.0) & -openmc.ZPlane(ld/2.0)

r_phantally = r_x & r_y & r_z



r_y_wp= +openmc.YPlane(-PHANTOM_WIDTH/2.0)\

  & -openmc.YPlane(PHANTOM_WIDTH/2.0)

r_z_wp= +openmc.ZPlane(-PHANTOM_WIDTH/2.0)\

  & -openmc.ZPlane(PHANTOM_WIDTH/2.0)

r_wp= r_x & r_y_wp & r_z_wp

c_wp= openmc.Cell(region=r_wp& ~r_phantally)

c_wp.fill = water



r_x_air = +openmc.XPlane(-padd, boundary_type='vacuum')\

  & -openmc.XPlane(SSD+d+padd, boundary_type='vacuum')

r_y_air          =            +openmc.YPlane(-PHANTOM_WIDTH/2.0-padd,
boundary_type='vacuum')\

  & -openmc.YPlane(PHANTOM_WIDTH/2.0+padd, boundary_type='vacuum')

r_z_air          =            +openmc.ZPlane(-PHANTOM_WIDTH/2.0-padd,
boundary_type='vacuum')\

  & -openmc.ZPlane(PHANTOM_WIDTH/2.0+padd, boundary_type='vacuum')

r_air = r_x_air & r_y_air & r_z_air

c_air = openmc.Cell(region=r_air & ~r_wp)

c_air.fill = air



universe = openmc.Universe(cells= [c_air]+phantom_cells+ [c_wp])


                                  45
geometry = openmc.Geometry()

geometry.root_universe = universe

geometry.export_to_xml()

# }}}

plot= openmc.Plot()

plot.basis = 'yz'

plot.filename='yz_cal'

plot.origin = (110, 0, 0)

plot.width = (50., 50.)

plot.pixels=(1000,1000)

plot.color_by='material'

plot.colors={

    water:'blue',

    air:'green',

    water2:'black'

}

plot_file=openmc.Plots( [plot])

plot_file.export_to_xml()

openmc.plot_geometry()

plot.to_ipython_image()



plot.basis='xz'

plot.filename='xz_cal'

plot.width=(100,100)

plot.pixels=(1000,1000)

plot.origin=(100,0,0)

plot_file=openmc.Plots( [plot])

plot_file.export_to_xml()

openmc.plot_geometry()

plot.to_ipython_image()




                                  46
# {{{

batches= batches

inactive = inactive

particles = particles



particle_filter = openmc.ParticleFilter('photon')

# energy, dose = openmc.data.dose_coefficients('photon', 'AP')

energy, dose = openmc.data.dose_coefficients('photon', 'RLAT')

dose_filter = openmc.EnergyFunctionFilter(energy, dose)



#######    TALLIES      #########

tallies_file = openmc.Tallies()

cell_filter = openmc.CellFilter(phantom_cells)

tally = openmc.Tally(name='tally')

tally.filters = [cell_filter, particle_filter, dose_filter]

tally.scores = ['flux']



"""

#######    MESH TALLY       #########

tallysize=0.1

mesh = openmc.Mesh()

mesh.dimension = [1, 1, 400]

mesh.lower_left = [SSD, -tallysize/2, -FIELD_SIZE/2]#type: ignore

mesh.upper_right = [SSD+tallysize, tallysize/2, FIELD_SIZE/2]#type:
ignore

mesh_filter = openmc.MeshFilter(mesh)



tally01 = openmc.Tally(name="0 depth tally")

tally01.filters = [mesh_filter, particle_filter, dose_filter]

tally01.scores = ['flux']



meshdpp01 = openmc.Mesh()



                                    47
meshdpp01.dimension = [300, 1, 1]

meshdpp01.lower_left    =       [SSD,     -tallysize/2,     -tallysize/2]#type:
ignore

meshdpp01.upper_right       =    [SSD+d,     tallysize/2,   tallysize/2]#type:
ignore

meshdpp01_filter = openmc.MeshFilter(meshdpp01)



tallydpp01 = openmc.Tally(name="profile depth dose tally")

tallydpp01.filters          =      [meshdpp01_filter,         particle_filter,
dose_filter]

tallydpp01.scores = ['flux']



meshdpp5 = openmc.Mesh()

meshdpp5.dimension = [300, 1, 1]

meshdpp5.lower_left     =       [SSD,   -tallysize/2,       -tallysize/2]#type:
ignore

meshdpp5.upper_right    =       [SSD+d,      tallysize/2,   tallysize/2]#type:
ignore

meshdpp5_filter = openmc.MeshFilter(meshdpp5)



tallydpp5 = openmc.Tally(name="profile depth dose tally")

tallydpp5.filters = [meshdpp5_filter, particle_filter, dose_filter]

tallydpp5.scores = ['flux']



tallies_file.append(tallydpp01)

tallies_file.append(tallydpp5)

tallies_file.append(tally01)

"""

tallies_file.append(tally)

tallies_file.export_to_xml()



source = openmc.Source() #type: ignore

source.space = openmc.stats.Point((0,0,0))

phi = openmc.stats.Uniform(0, 2*pi)



                                        48
#mu = openmc.stats.Uniform(cos(atan2(l/2, SSD)), 1)

mu = openmc.stats.Uniform(cos(atan2(40/2, SSD)), 1)

source.angle                                                 =
openmc.stats.PolarAzimuthal(mu,phi,reference_uvw=(1,0,0))

source.energy = openmc.stats.Discrete( [10e6], [1]) #10MeV

source.particle = 'photon'




settings = openmc.Settings()

settings.batches = batches

settings.inactive = inactive

settings.particles = particles

settings.run_mode = 'fixed source'

settings.photon_transport = True

settings.export_to_xml()

# }}}



openmc.run()

                        Program Pembaca Kalibrasi
import openmc

import matplotlib.pyplot as plt

import numpy as np

from scipy.signal import savgol_filter

import matplotlib.ticker as mtick

##



sp = openmc.StatePoint('statepoint.5.h5')

##

print(sp.n_particles)



n = 300

d = 30



                                   49
tal = sp.tallies [1]

datay = tal.mean

# datax is linspace between 0 and 50

datax = np.linspace(0,d,n)

datay.shape = (n,)

# smooth datay

datay = np.convolve(datay, np.ones(10)/10, mode='same')

# find the index of the maximum value in datay

max_index = np.argmax(datay)

x_max = datax [max_index]

y_max = datay [datay.argmax()]

print(x_max,max_index,y_max)



y_max=datay [max_index]

plt.axvline(x=x_max, color='r')

plt.legend(loc='best')

plt.ylabel("Relative Dose (%)")

plt.xlabel("Position (cm)")

plt.xlim(0,30)

plt.ylim(0,105)

datay=datay/y_max*100

plt.plot(datax, datay)



tal = sp.tallies [1]

datay = tal.mean

datay=datay/y_max*100

n = len(datay)



x_smooth=datax

y_smooth = np.interp(x_smooth, datax, datay)

# print (f"datay =\n {datay}")

# print (f"ysmooth=\n{y_smooth}")



                                  50
# Apply Savitzky-Golay filter for smoothing

window_size = 200

poly_order =5

y_smooth = savgol_filter(y_smooth, window_size, poly_order)



max_index=np.argmax(y_smooth)

x_maxs = x_smooth [max_index]

y_maxs=y_smooth [max_index]

plt.plot(x_smooth, y_smooth)

plt.title(f'x_max = {x_max} cm \n xsmooth_max = {x_maxs} cm')

plt.savefig('pdd.png')

plt.show()

plt.savefig('pdd.png')

"""

tal = sp.tallies [2]

datay = tal.mean

# datax is linspace between 0 and 50

datax = np.linspace(0,d,n)

datay.shape = (n,)

# smooth datay

datay = np.convolve(datay, np.ones(10)/10, mode='same')

# find the index of the maximum value in datay

max_index = np.argmax(datay)

x_max = datax [max_index]

y_max = datay [datay.argmax()]

print(x_max,max_index,y_max)



y_max=datay [max_index]

#plt.axvline(x=x_max, color='r')

plt.legend(loc='best')

plt.ylabel("Relative Dose (%)")



                                   51
plt.xlabel("Position (cm)")

plt.xlim(-0,30)

plt.ylim(0,105)

datay=datay/y_max*100

plt.plot(datax, datay)



tal = sp.tallies [1]

datay = tal.mean

datay=datay/y_max*100

n = len(datay)



x_smooth=datax

y_smooth = np.interp(x_smooth, datax, datay)

# print (f"datay =\n {datay}")

# print (f"ysmooth=\n{y_smooth}")



# Apply Savitzky-Golay filter for smoothing

window_size = 200

poly_order =5

y_smooth = savgol_filter(y_smooth, window_size, poly_order)



max_index=np.argmax(y_smooth)

x_maxs = x_smooth [max_index]

y_maxs=y_smooth [max_index]

plt.plot(x_smooth, y_smooth)

# draw line at x_max

#plt.axvline(x=x_maxs, color='r')

# write x_max value on plot

plt.title(f'x_max = {x_max} cm \n xsmooth_max = {x_maxs} cm')

#print(f"Y Value on xmax={_max}")

plt.show()

plt.savefig('2.5 depth.png')



                                 52
def rounde(unrounded):

  roundede="{:.4e}".format(unrounded)

  return roundede



print(f"\nDosis = {rounde(y_max)}pSvcm3/src")

print(f"Dosis smoothen = {rounde(y_maxs)}pSvcm3/src\n")



print(f"s_rate=mu*volume_wp/phandosevalues") # mu=

mu=1e11#600 MU/min = 10 cGy/s = 1e11 pSv/s

volume_wp=(d/n)*6*6

wpdose=y_max

s_rate=mu*volume_wp/wpdose



print(f"s_rate={mu}*{volume_wp}/{rounde(wpdose)}={s_rate}")

#600cGy/min=36000cGy/h=36uSv/h

print(f"600 cgy/min = 36uSv/h")

print(f"\n36uSv/h = k * {y_max} pSvcm3/src/{volume_wp}cm3\n")

k=volume_wp/y_max*36

print(f"k      *      {y_max}          pSvcm3/src/{volume_wp}cm3   =
{k*y_max/volume_wp}uSv/h")

print(f"36 uSv/h = {k*y_max/volume_wp} uSv/h")

print(f"k = {k}")




print(f"k smoothen = {volume_wp/y_maxs*36}")



tally = sp.tallies [3]#2.5 depth {{{

import matplotlib.pyplot as plt



flux = tally.get_slice(scores= ['flux'])

data = tally.mean.flatten()



                                  53
x = np.linspace(-25, 25, len(data))



max_index=np.argmax(data)

x_max = x [max_index]

y_max = np.max(data)

print("ymax = ", y_max)

plt.axvline(x=x_max,color='r',label='peak')

yflat=data/y_max*100

#print(yflat)



fmt='%.0f%%' #changing into format

xticks = mtick.FormatStrFormatter(fmt)



#plt.yflat.set_major_formatter(FuncFormatter(lambda     y,     _:
'{:.0%}'.format(yflat)))

plt.plot(x, yflat,label="raw")



ysmooth=np.interp(x,x,yflat)

window_size=300

poly_order=10

start=100

end=400

area_tofilter=yflat [start:end]

filtered=savgol_filter(area_tofilter,window_size,poly_order)

ysmooth [start:end]=filtered

plt.plot(x,ysmooth,label="savgol filter")

plt.legend(loc='best')

plt.ylabel("Relative Dose (%)")

plt.xlabel("Position (cm)")

plt.xlim(-25,25)

plt.ylim(0,105)




                                  54
plt.title('2.5 depth.png')

plt.savefig('2.5 depth.png')

plt.show()

"""



                         Program Ruangan
import openmc #type: ignore

import matplotlib.pyplot as plt

from math import * #type: ignore



particle=int(input('Particle number (\'twas 1e7)\n= '))

SOURCE_SIZE=20

FIELD_SIZE=40

SSD=100



air=openmc.Material(name='Air')

air.set_density('g/cm3',0.001205)

air.add_nuclide('N14',0.7)

air.add_nuclide('O16',0.3)

#air.add_s_alpha_beta('c_H_in_Air')

air.add_element('C',0.002)

air.add_element('Fe',0.001)

air.add_element('Si',0.001)

air.add_element('Mn',0.001)



air2=openmc.Material(name='Air')

air2.set_density('g/cm3',0.001205)

air2.add_nuclide('N14',0.7)

air2.add_nuclide('O16',0.3)

#air.add_s_alpha_beta('c_H_in_Air')

air2.add_element('C',0.002)




                                   55
air2.add_element('Fe',0.001)

air2.add_element('Si',0.001)

air2.add_element('Mn',0.001)



water=openmc.Material(name='Water')

water.set_density('g/cm3',1.0)

water.add_nuclide('H1',2.0)

water.add_nuclide('O16',1.0)

water.add_s_alpha_beta('c_H_in_H2O')



soft=openmc.Material(name='Soft Tissue')

soft.set_density('g/cm3',1.0)

soft.add_element('H', 10.4472, percent_type='ao')#1

soft.add_element('C', 23.219, percent_type='ao')#6

soft.add_element('N', 2.388, percent_type='ao')#7

soft.add_element('O', 63.0238, percent_type='ao')#8

soft.add_element('Na', 0.113, percent_type='ao')#11

soft.add_element('Mg', 0.013, percent_type='ao')#12

soft.add_element('S', 0.199, percent_type='ao')#16

soft.add_element('Cl', 0.134, percent_type='ao')#17

soft.add_element('K', 0.199, percent_type='ao')#19

soft.add_element('Ca', 0.023, percent_type='ao')#20

#https://physics.nist.gov/cgi-bin/Star/compos.pl?matno=261



bpe=openmc.Material(name='Borate Polyethylene')

bpe.set_density('g/cm3',1.0)

bpe.add_element('H', 0.111, percent_type='ao')#1

bpe.add_element('C', 0.856, percent_type='ao')#6

bpe.add_element('B', 0.143, percent_type='ao')#5

bpe.add_element('O', 0.889, percent_type='ao')#8



lead=openmc.Material(name='Lead')



                                 56
lead.set_density('g/cm3',11.35)

lead.add_element('Pb',1.0)



concrete=openmc.Material(name='Concrete')

concrete.set_density('g/cm3',2.3)      #Harus   disesuaikan   dengan   uji
beton

concrete.add_element('H', 0.01, percent_type='ao')#1

concrete.add_element('C', 0.01, percent_type='ao')#6

concrete.add_element('O', 0.52, percent_type='ao')#8

concrete.add_element('Na', 0.01, percent_type='ao')#11

concrete.add_element('Mg', 0.01, percent_type='ao')#12

concrete.add_element('Al', 0.01, percent_type='ao')#13

concrete.add_element('Si', 0.25, percent_type='ao')#14

concrete.add_element('S', 0.01, percent_type='ao')#16

concrete.add_element('K', 0.01, percent_type='ao')#19

concrete.add_element('Ca', 0.01, percent_type='ao')#20

concrete.add_element('Fe', 0.01, percent_type='ao')#26

concrete.add_element('Pb', 0.01, percent_type='ao')#82



iron = openmc.Material(name="Iron")

iron.set_density('g/cm3',7.87) #Harus disesuaikan dengan uji beton

iron.add_element('Fe', 1.0)#1



materials=openmc.Materials(
[air,air2,air3,water,soft,bpe,lead,concrete,iron])

materials.export_to_xml()



################################################

rotationDegree=int(input("Harap masukkan sudut rotasi LINAC\n= "))

############# Geometry ########################

#x

t1=openmc.XPlane(632)

t2=openmc.XPlane(632-76.5)


                                  57
t3=openmc.XPlane(632-76.5-155)

t3fe=openmc.XPlane(632-76.5-155-235)

t4=openmc.XPlane(632-76.5-155-76.5)

t5=openmc.XPlane(632-76.5-155-76.5)

t6=openmc.XPlane(632-76.5-155-235)



b1=openmc.XPlane(-632)

b2=openmc.XPlane(-632+76.5)

b3=openmc.XPlane(-632+76.5+155.0)

b4=openmc.XPlane(-632+76.5+155.0+76.5)

b5=openmc.XPlane(-632+76.5+250.5)



#y #Di berkas 125, tapi ga make sense jadi diubah ke 1200 biar masuk
angkanya

u1=openmc.YPlane(190.0+250.0+120.0+185.0+81.0)

u2=openmc.YPlane(190.0+250.0+120.0+185.0)

ufe=openmc.YPlane(190.0+250.0+120.0+185.0-10)

u3=openmc.YPlane(190.0+250.0+120.0)

u4=openmc.YPlane(190.0+250.0)

u5=openmc.YPlane(190.0)



s1=openmc.YPlane(-190.0-185.0-128.0)

s2=openmc.YPlane(-190.0-185.0)

s3=openmc.YPlane(-190.0)



#z total tinggi = 6000, lantai 1 setebal 480



zm1=openmc.ZPlane(-300.0)

zmax=openmc.ZPlane(300.0)

z3=openmc.ZPlane(-300.0+48.0+124.0+186.0+117.0+125.0)#1250      ATO
2500???

z2=openmc.ZPlane(-300.0+48.0+124.0+186.0+117.0)

z1=openmc.ZPlane(-300.0+48.0+124.0+186.0)


                                 58
z0=openmc.ZPlane(-300.0+48.0)



#pintu utara, pintu barat, pintu selatan geometri nya

pu=openmc.YPlane(190.0+250.0+120.0+185.0+40.0)

#                   ^^^ asumsi pintu lebih lebar 40cm dibandingkan
lubang pintunya

pb0=b5

pb1=openmc.XPlane(-632.0+76.5+250.5-1) #Angkanya ini masih ngarang
karena gatau tebal pintu, ada kemungkinan formulanya di RHSPintu.py
salah

pb2=openmc.XPlane(-632.0+76.5+250.5-1-15)

pb3=openmc.XPlane(-632.0+76.5+250.5-1-15-1)

ps=u3




###############################################

dt1 = -t1 & +t2 & +s3 & -u5 & +z0 & -z2

dt2 = -t2 & +t3 & +s1 & -u1 & +z0 & -z2

dt3 = -t3 & +t4 & +s3 & -u5 & +z0 & -z2



db1 = +b1 & -b2 & +s3 & -u5 & +z0 & -z2

db2 = +b2 & -b3 & +s1 & -u3 & +z0 & -z2

db3 = +b3 & -b4 & +s3 & -u5 & +z0 & -z2



du1 = +b5 & -t3 & -u1 & +u2 & +z0 & -z2

du2 = +b3 & -t6 & -u3 & +u4 & +z0 & -z2



ds1 = +b3 & -t3 & +s1 & -s2 & +z0 & -z2



fe1 = -t3 & +t3fe & -u1 & +ufe & +z0 & -z2

datas= +b1 & -t1 & +s1 & -u1 & +z2 & -z3 #celing

datte= +b4 & -t4 & -u5 & +s3 & +z1 & -z2 #linac's middle wall

dbaw = +b1 & -t1 & +s1 & -u1 & +zm1 & -z0 #flooring



                                59
###############################################

#pintu

ppb = -pu & +ps & -pb0 & +pb1 & +z0 & -z2#pintu Pb

pbpe= -pu & +ps & -pb1 & +pb2 & +z0 & -z2#pintu BPE

ppb2= -pu & +ps & -pb2 & +pb3 & +z0 & -z2#pintu Pb



#Udara

#void1= -dt1 & +dt2 & -dt3 & +db1 & -db2 & +db3 & -du1 & +du2 & -
ds1 & +ppb & -pbpe & +ppb2 & +datas & -dbaw

#void1cell=openmc.Cell(fill=air,region=void1)



#Cell =



dt1cell=openmc.Cell(fill=concrete,region=dt1)

dt2cell=openmc.Cell(fill=concrete,region=dt2)

dt3cell=openmc.Cell(fill=concrete,region=dt3)

db1cell=openmc.Cell(fill=concrete,region=db1)

db2cell=openmc.Cell(fill=concrete,region=db2)

db3cell=openmc.Cell(fill=concrete,region=db3)

du1cell=openmc.Cell(fill=concrete,region=du1)

du2cell=openmc.Cell(fill=concrete,region=du2)

ds1cell=openmc.Cell(fill=concrete,region=ds1)



ppbcell=openmc.Cell(fill=lead,region=ppb)

pbpecell=openmc.Cell(fill=bpe,region=pbpe)

ppb2cell=openmc.Cell(fill=lead,region=ppb2)



datascell=openmc.Cell(fill=concrete,region=datas)

dattecell=openmc.Cell(fill=concrete,region=datte)

dbawcell=openmc.Cell(fill=concrete,region=dbaw)



fecell=openmc.Cell(fill=iron, region=fe1)



                                60
###############################################

#           Detektor/Tally       #



detd= 4.5

detde=2

#                Utara       #

deu1=openmc.YPlane (190.0+250.0+120.0+185.0+81.0+30.0)

deu1t=openmc.YPlane(190.0+250.0+120.0+185.0+81.0+30.0+10.8)
#+tebal detektor

deu1ts=openmc.YPlane(190.0+250.0+120.0+185.0+81.0+30.0+detde)
#+tebal detektor

deu2=openmc.YPlane (190.0+250.0+120.0+185.0+81.0+100.0)

deu2t=openmc.YPlane(190.0+250.0+120.0+185.0+81.0+100.0+10.8)

b5=openmc.XPlane(-632+76.5+250.5)

deu2ts=openmc.YPlane(190.0+250.0+120.0+185.0+81.0+100.0+detde)

deu3=openmc.YPlane (190.0+250.0+120.0+185.0+81.0+200.0)

deu3t=openmc.YPlane(190.0+250.0+120.0+185.0+81.0+200.0+10.8)

deu3ts=openmc.YPlane(190.0+250.0+120.0+185.0+81.0+200.0+detde)



deuz0=openmc.ZPlane(-300.0+48.0+100.0)#Tinggi     detektor,    default
untuk semua detektor kecuali atas

deuz1=openmc.ZPlane(-300.0+48.0+100.0+200.0)

deuz0s=openmc.ZPlane(-300.0+48.0+100.0-detd/2)#Tinggi         detektor,
default untuk semua detektor kecuali atas

deuz1s=openmc.ZPlane(-300.0+48.0+100.0+detd/2)

#deuz0s=openmc.ZPlane(-300.0+48.0+100.0-(150/2))#Tinggi       detektor,
default untuk semua detektor kecuali atas

#deuz1s=openmc.ZPlane(-300.0+48.0+100.0+(150/2))



deubb=openmc.XPlane(-632.0+76.5+250.5+100.0) #Koordinat x nya masih
ngasal

deubt=openmc.XPlane(-632.0+76.5+250.5+100.0+50.0)

deubbs=openmc.XPlane(-632.0+76.5+250.5+100.0-detd/2) #Koordinat x
nya masih ngasal


                                     61
deubts=openmc.XPlane(-632.0+76.5+250.5+100.0+detd/2)



deucb=openmc.XPlane(250.0) #koordinat x nya masih ngasal

deuct=openmc.XPlane(250.0+50.0)

deucbs=openmc.XPlane(250.0-detd/2) #koordinat x nya masih ngasal

deucts=openmc.XPlane(250.0+detd/2)



detb1= +deu1 & -deu1t & +deuz0 & -deuz1 & +deubb & -deubt #detektor
utara barat, x nya ngasal

detb2= +deu2 & -deu2t & +deuz0 & -deuz1 & +deubb & -deubt

detb3= +deu3 & -deu3t & +deuz0 & -deuz1 & +deubb & -deubt

dett1= +deu1 & -deu1t & +deuz0 & -deuz1 & +deucb & -deuct #detektor
utara timur, x nya ngasal

dett2= +deu2 & -deu2t & +deuz0 & -deuz1 & +deucb & -deuct

dett3= +deu3 & -deu3t & +deuz0 & -deuz1 & +deucb & -deuct



detb1s= +deu1 & -deu1ts & +deuz0s & -deuz1s & +deubbs & -deubts
#detektor utara barat, x nya ngasal

detb2s= +deu2 & -deu2ts & +deuz0s & -deuz1s & +deubbs & -deubts

detb3s= +deu3 & -deu3ts & +deuz0s & -deuz1s & +deubbs & -deubts

dett1s= +deu1 & -deu1ts & +deuz0s & -deuz1s & +deucbs & -deucts
#detektor utara timur, x nya ngasal

dett2s= +deu2 & -deu2ts & +deuz0s & -deuz1s & +deucbs & -deucts

dett3s= +deu3 & -deu3ts & +deuz0s & -deuz1s & +deucbs & -deucts



#Detektor

detub1cell=openmc.Cell(fill=air2,region=detb1) #sel detektor barat
1

detub2cell=openmc.Cell(fill=air2,region=detb2)

detub3cell=openmc.Cell(fill=air2,region=detb3)

detut1cell=openmc.Cell(fill=air2,region=dett1)

detut2cell=openmc.Cell(fill=air2,region=dett2)

detut3cell=openmc.Cell(fill=air2,region=dett3)




                                  62
detub1scell=openmc.Cell(fill=air2,region=detb1s)   #sel    detektor
barat 1

detub2scell=openmc.Cell(fill=air2,region=detb2s)

detub3scell=openmc.Cell(fill=air2,region=detb3s)

detut1scell=openmc.Cell(fill=air2,region=dett1s)

detut2scell=openmc.Cell(fill=air2,region=dett2s)

detut3scell=openmc.Cell(fill=air2,region=dett3s)




#             Timur         #

det1=openmc.XPlane(632.0+30.0)

det1t=openmc.XPlane(632.0+30.0+10.8)

det1ts=openmc.XPlane(632.0+30.0+detde)

det2=openmc.XPlane(632.0+100.0)

det2t=openmc.XPlane(632.0+100.0+10.8)

det2ts=openmc.XPlane(632.0+100.0+detde)

det3=openmc.XPlane(632.0+200.0)

det3t=openmc.XPlane(632.0+200.0+10.8)

det3ts=openmc.XPlane(632.0+200.0+detde)



detu=openmc.YPlane(25.0)

dets=openmc.YPlane(-25.0)

detus=openmc.YPlane(detd/2)

detss=openmc.YPlane(-detd/2)



dett1= +det1 & -det1t & +deuz0 & -deuz1 & -detu & +dets

dett2= +det2 & -det2t & +deuz0 & -deuz1 & -detu & +dets

dett3= +det3 & -det3t & +deuz0 & -deuz1 & -detu & +dets

dett3s= +det3 & -det3t & +deuz0 & -deuz1 & -detu & +dets

dett1s= +det1 & -det1ts & +deuz0s & -deuz1s & -detus & +detss

dett2s= +det2 & -det2ts & +deuz0s & -deuz1s & -detus & +detss

dett3s= +det3 & -det3ts & +deuz0s & -deuz1s & -detus & +detss



                                  63
dett1cell=openmc.Cell(fill=air2,region=dett1)

dett2cell=openmc.Cell(fill=air2,region=dett2)

dett3cell=openmc.Cell(fill=air2,region=dett3)

dett1scell=openmc.Cell(fill=air2,region=dett1)

dett2scell=openmc.Cell(fill=air2,region=dett2)

dett3scell=openmc.Cell(fill=air2,region=dett3)



#             Barat       #



deb1=openmc.XPlane(-632.0+76.5+250.5-1-15-30.0)

deb1t=openmc.XPlane(-632.0+76.5+250.5-1-15-30.0-10.8)

deb1ts=openmc.XPlane(-632.0+76.5+250.5-1-15-30.0-detde)

deb2=openmc.XPlane(-632.0+76.5+250.5-1-15-100.0)

deb2t=openmc.XPlane(-632.0+76.5+250.5-1-15-100.0-10.8)

deb2ts=openmc.XPlane(-632.0+76.5+250.5-1-15-100.0-detd)

deb3=openmc.XPlane(-632.0+76.5+250.5-1-15-200.0)

deb3t=openmc.XPlane(-632.0+76.5+250.5-1-15-200.0-10.8)

deb3ts=openmc.XPlane(-632.0+76.5+250.5-1-15-200.0-detde)



debu=openmc.YPlane(190.0+250.0+120.0+185.0-67.5)

debs=openmc.YPlane(190.0+250.0+120.0+185.0-67.5-50.0)

debus=openmc.YPlane(190.0+250.0+120.0+185.0-(67.5+detd/2))

debss=openmc.YPlane(190.0+250.0+120.0+185.0-(67.5-detd/2))



detb1= -deb1 & +deb1t & +deuz0 & -deuz1 & -debu & +debs

detb2= -deb2 & +deb2t & +deuz0 & -deuz1 & -debu & +debs

detb3= -deb3 & +deb3t & +deuz0 & -deuz1 & -debu & +debs

detb1s= -deb1 & +deb1ts & +deuz0s & -deuz1s & -debus & +debss

detb2s= -deb2 & +deb2ts & +deuz0s & -deuz1s & -debus & +debss

detb3s= -deb3 & +deb3ts & +deuz0s & -deuz1s & -debus & +debss




                                64
detb1cell=openmc.Cell(fill=air2,region=detb1)

detb2cell=openmc.Cell(fill=air2,region=detb2)

detb3cell=openmc.Cell(fill=air2,region=detb3)

detb1scell=openmc.Cell(fill=air2,region=detb1s)

detb2scell=openmc.Cell(fill=air2,region=detb2s)

detb3scell=openmc.Cell(fill=air2,region=detb3s)



#             Atas          #

deau=openmc.XPlane(25.0)

deas=openmc.XPlane(-25.0)

deaus=openmc.XPlane(detd/2)

deass=openmc.XPlane(-detd/2)



deat=openmc.YPlane(25.0)

deab=openmc.YPlane(-25.0)

deats=openmc.YPlane(detd/2)

deabs=openmc.YPlane(-detd/2)



dea1=openmc.ZPlane(300.0+50.0) #1250 ATO 2500???

dea1t=openmc.ZPlane(300.0+50.0+10.8) #1250 ATO 2500???

dea1ts=openmc.ZPlane(300.0+30.0+detde) #1250 ATO 2500???

dea2=openmc.ZPlane(300.0+100.0)

dea2t=openmc.ZPlane(300.0+100.0+10.8)

dea2ts=openmc.ZPlane(300.0+100.0+detde)

dea3=openmc.ZPlane(300.0+200.0)

dea3t=openmc.ZPlane(300.0+200.0+10.8)

dea3ts=openmc.ZPlane(300.0+200.0+detde)



deta1= +dea1 & -dea1t & -deau & +deas & +deab & -deat

deta2= +dea2 & -dea2t & -deau & +deas & +deab & -deat

deta3= +dea3 & -dea3t & -deau & +deas & +deab & -deat

deta1s= +dea1 & -dea1ts & -deaus & +deass & +deabs & -deats



                                  65
deta2s= +dea2 & -dea2ts & -deaus & +deass & +deabs & -deats

deta3s= +dea3 & -dea3ts & -deaus & +deass & +deabs & -deats



deta1cell=openmc.Cell(fill=air2,region=deta1)

deta2cell=openmc.Cell(fill=air2,region=deta2)

deta3cell=openmc.Cell(fill=air2,region=deta3)

deta1scell=openmc.Cell(fill=air2,region=deta1s)

deta2scell=openmc.Cell(fill=air2,region=deta2s)

deta3scell=openmc.Cell(fill=air2,region=deta3s)



#Water Phantom 10x10x5

#TODO: Water phantom dpp and lateral tallies, to get flux value and
relative comparison to the dose.

#make tally, search for the dose, search the corresponding flux,
use it as the conversion rate for searching dose(sv/h)



phantom_rotation=270 #phantom rotation

pr=phantom_rotation

detaxu=openmc.YPlane(5)

detaxs=openmc.YPlane(-5)



if pr==0 or pr==180:

  detaxt=openmc.XPlane(5)

  detaxb=openmc.XPlane(5)

  detaxza=openmc.ZPlane(-128+100+2.5)

  detaxzb=openmc.ZPlane(-128+100-2.5)

if pr==180:

  detaxt=openmc.XPlane(5)

  detaxb=openmc.XPlane(-5)

  detaxza=openmc.ZPlane(-128-100+2.5)

  detaxzb=openmc.ZPlane(-128-100-2.5)

elif pr==90 or pr==270:

  detaxza=openmc.XPlane(2.5)


                                66
  detaxzb=openmc.XPlane(-2.5)

  detaxt=openmc.ZPlane(-128+5)

  detaxb=openmc.ZPlane(-128-5)



else:

  print('Phantom Rotation Error, benarkan kode pr')



detax= -detaxu & +detaxs & -detaxt & +detaxb & -detaxza & +detaxzb
# type: ignore



detaxcell=openmc.Cell(fill=water,region=detax)



#Kotak Udara Pembatas

ymax=openmc.YPlane(1100,boundary_type='vacuum')

ymin=openmc.YPlane(-1100,boundary_type='vacuum')

xmax=openmc.XPlane(945,boundary_type='vacuum')

xmin=openmc.XPlane(-945,boundary_type='vacuum')

zmin=openmc.ZPlane(-550,boundary_type='vacuum')

zmaxx=openmc.ZPlane(550,boundary_type='vacuum')



#void1cell = openmc.Cell(fill=air, region= (-datascell.region) & (-
dt1cell.region) & (-dt2cell.region) & (-dt3cell.region) & (-
db1cell.region) & (-db2cell.region) & (-db3cell.region) & (-
du1cell.region) & (-du2cell.region) & (-ds1cell.region))



void1= +zmin & -zmaxx \

  & +ymin & -ymax & +xmin & -xmax\

  & ~dt1cell.region & ~dt2cell.region & ~dt3cell.region \

    & ~db1cell.region & ~db2cell.region & ~db3cell.region \

        & ~du1cell.region & ~du2cell.region & ~ds1cell.region\

        & ~ppbcell.region & ~pbpecell.region & ~ppb2cell.region\

        & ~datascell.region & ~dbawcell.region & ~dattecell.region\

        & ~detb1cell.region & ~detb2cell.region & ~detb3cell.region\




                                  67
      &     ~detub1cell.region          &   ~detub2cell.region   &
~detub3cell.region\

      &     ~detut1cell.region          &   ~detut2cell.region   &
~detut3cell.region\

      & ~dett1cell.region & ~dett2cell.region & ~dett3cell.region\

      & ~deta1cell.region & ~deta2cell.region & ~deta3cell.region\



void1cell = openmc.Cell(fill=air, region=void1)



univ=openmc.Universe(cells= [dt1cell,dt2cell,dt3cell,

              db1cell,db2cell,db3cell,

              du1cell,du2cell,ds1cell,

              ppbcell,pbpecell,ppb2cell,

              datascell,dbawcell,dattecell,

              void1cell,

              detb1cell,detb2cell,detb3cell,

              detub1cell,detub2cell,detub3cell,

              detut1cell,detut2cell,detut3cell,

              dett1cell,dett2cell,dett3cell,

              deta1cell,deta2cell,deta3cell,

              detb1scell,detb2scell,detb3scell,

              detub1scell,detub2scell,detub3scell,

              detut1scell,detut2scell,detut3scell,

              dett1scell,dett2scell,dett3scell,

              deta1scell,deta2scell,deta3scell,

              detaxcell,fecell])

geometry=openmc.Geometry(univ)

geometry.export_to_xml()



colors= {}

colors [lead]='black'

colors [bpe]='lightblue'

colors [concrete]='grey'


                                   68
colors [air]='white'

colors [air2]='blue'

ssh=SOURCE_SIZE/2

###############################################

#            Rotation

###############################################

def sposi(d,rot):

     u= (-sin(radians(rot)))

     v= 0

     w= (-cos(radians(rot))) #source position

     uvw = (u,v,w)

     xyz = ( d*(sin(radians(rot))) ), 0, -128+ ( d*(cos(radians(rot))
))

     xyz = xyz

     if rot==0 or rot==180:

    xyz1=   (   d*(sin(radians(rot)))         )+ssh,     ssh,   -128+   (
d*(cos(radians(rot)) )+0.1)

    xyz2=   (   d*(sin(radians(rot)))         )-ssh,    -ssh,   -128+   (
d*(cos(radians(rot)) ))

     else:

    xyz1=   (   d*(sin(radians(rot)))         )+0.1,     ssh,   -128+   (
d*(cos(radians(rot)) )+ssh)

    xyz2=    (   d*(sin(radians(rot)))          ),     -ssh,    -128+   (
d*(cos(radians(rot)) )-ssh)

     return uvw, xyz,xyz1,xyz2

     #asumsi tinggi pasien 75

###############################################

#       Input (linac distance,rotation)   #

linacuvw, linacxyz,linacxyzn1,linacxyzn2=sposi(SSD,rotationDegree)

###############################################

print("linacuvw,linacxyz,linacuvwn1,linacuvwn2",linacuvw,
linacxyz,linacxyzn1,linacxyzn2)



###############################################



                                   69
#       Penampil Geometri         #

###############################################

plot=openmc.Plot()

plot.basis='xy'

plot.origin=(0,200,0)

plot.width=(2000,2000)

plot.pixels=(2000,2000)

plot.filename='xy_room'

plot.colors={

    lead:'black',

    bpe:'lightblue',

    concrete:'grey',

    air:'white',

    air2:'blue'

}

plot.color_by='material'

plot_file=openmc.Plots( [plot])

plot_file.export_to_xml()

openmc.plot_geometry()

#!convert something.ppm something.png



plot.to_ipython_image()



plot.basis='yz'

plot.filename='yz_room'

plot.width=(2000,2000)

plot_file=openmc.Plots( [plot])

plot_file.export_to_xml()

openmc.plot_geometry()

plot.to_ipython_image()



plot.basis='xz'



                                  70
plot.filename='xz_room'

plot.pixels=(2000,2000)

plot.width=(2000,2000)

plot.origin=(0,0,0)

plot_file=openmc.Plots( [plot])

plot_file.export_to_xml()

openmc.plot_geometry()

plot.to_ipython_image()

"""

plt.rcParams.update({'font.size': 5})

univ.plot(width=(2500,2700),basis='xy',color_by='material',colors=
colors)

plt.savefig('xyRSHS.png',dpi=500, bbox_inches='tight')

plt.show()

univ.plot(width=(1400,1040),basis='xz',color_by='material',colors=
colors)

plt.savefig('xzRSHS.png',dpi=500, bbox_inches='tight')

plt.show()

univ.plot(width=(1800,1040),basis='yz',color_by='material',colors=
colors)

plt.savefig('yzRSHS.png',dpi=500, bbox_inches='tight')

plt.show()

"""



#Tidak terdapat library matplotlib pada server, sehingga penampil
geometri harus dimatikan untuk running server



###############################################

#         Plot Grid          #

###############################################

#ax.set_title('Distribusi Dosis Ruangan (uSv/hour)') #type: ignore

#univ.plot(width=(2000,2000),basis='xy',color_by='material',colors
=colors)




                                  71
#plt.savefig('DoseDistributionMap.png',dpi=500,
bbox_inches='tight')



###############################################

#         Setting            #

###############################################

settings=openmc.Settings()

source =openmc.Source()

"""

#source.space=openmc.stats.Points(xyz=)

source.space=openmc.stats.Point(xyz=linacxyz) # type: ignore

#phi2=openmc.stats.Isotropic() #isotropic ato uniform?

#phi1=openmc.stats.Monodirectional((0,0,1))

phi     =openmc.stats.Uniform(0.0,2*pi)     #     type:        ignore
#phi=distribution of the azimuthal angle in radians

#mu= distribution of the cosine of the polar angle



#tan theta = r/SAD=20/1000; theta = atan(20/100)=0.19739555984988;
cos theta=0.98058

mu=openmc.stats.Uniform(0.98058,1) # type: ignore #mu= distribution
of the cosine of the polar angle



source.angle                                                     =
openmc.stats.PolarAzimuthal(mu,phi,reference_uvw=linacuvw) # type:
ignore

source.energy = openmc.stats.Discrete( [10e6], [1]) #10MeV # type:
ignore

"""

#source.space=openmc.stats.Point(xyz=linacxyz) # type: ignore

#source.space = openmc.stats.Box((-FIELD_SIZE/2-d, -SOURCE_SIZE/2,
-SOURCE_SIZE/2),        (-FIELD_SIZE/2-d-t,         SOURCE_SIZE/2,
SOURCE_SIZE/2))

phi     =openmc.stats.Uniform(0.0,2*pi)     #     type:        ignore
#phi=distribution of the azimuthal angle in radians

mu          =         openmc.stats.Uniform(cos(atan2(((FIELD_SIZE-
SOURCE_SIZE)/2),SSD)), 1)



                                 72
source.space = openmc.stats.Box((linacxyzn1), (linacxyzn2))

##source.angle = openmc.stats.Monodirectional(linacuvw)

source.angle                                                     =
openmc.stats.PolarAzimuthal(mu,phi,reference_uvw=linacuvw) # type:
ignore

source.energy = openmc.stats.Discrete( [10e6], [1])



source.particle = 'photon'

#source.particle = 'neutron'

settings.source = source

settings.batches= 3

settings.particles = particle

#Asumsi       36e7       partikel      pada       mula,       pada
600MU=600cGy/m=6Gy/m=6Sv/m=6e6uSv/m=360e6uSv/h

settings.run_mode = 'fixed source'

settings.photon_transport = True

settings.export_to_xml()



###############################################

#         Tallies              #

###############################################

tally = openmc.Tallies()

#TODO: Change Tally size to smaller actual tally size value

#Tally Dose Distribution

mesh = openmc.RegularMesh() # type: ignore

mesh.dimension = [500, 500]

xlen = 2000;ylen = 2000

mesh.lower_left = [-xlen/2, -xlen/2]

mesh.upper_right = [ylen/2, ylen/2]

mesh_filter = openmc.MeshFilter(mesh)



tally1 = openmc.Tally(name = 'Room Dose Distribution')

tally1.scores = ['flux']



                                   73
particle1 = openmc.ParticleFilter('photon')



energy, dose = openmc.data.dose_coefficients('photon',     'RLAT')
#Data konve # type: ignore

dose_filter = openmc.EnergyFunctionFilter(energy, dose) #konvert
partikel energi tertentu ke deskripsi icrp116 partikelcm/src-
>pSvcm3/srcwphantom_cell,particle3,dose_filter



tally1.filters= [mesh_filter,particle1,dose_filter]

tally.append(tally1)



#Tally Detektor

filter_cell = openmc.CellFilter((detb1cell,detb2cell,detb3cell,\

              detub1cell,detub2cell,detub3cell,\

              detut1cell,detut2cell,detut3cell,\

              dett1cell,dett2cell,dett3cell,\

              deta1cell,deta2cell,deta3cell))

tally2 = openmc.Tally(name = 'flux')

particle2 = openmc.ParticleFilter('photon')

tally2.filters = [filter_cell, particle2, dose_filter]

tally2.scores = ['flux']

tally.append(tally2)



filter_cell_small                                                  =
openmc.CellFilter((detb1scell,detb2scell,detb3scell,\

              detub1scell,detub2scell,detub3scell,\

              detut1scell,detut2scell,detut3scell,\

              dett1scell,dett2scell,dett3scell,\

              deta1scell,deta2scell,deta3scell))

tally4 = openmc.Tally(name = 'flux detektor small')

tally4.filters = [filter_cell_small, particle2, dose_filter]

tally4.scores = ['flux']

tally.append(tally4)




                                74
energy2, dose2 = openmc.data.dose_coefficients('neutron',    'AP')
#Data konve # type: ignore

dose_filter = openmc.EnergyFunctionFilter(energy2, dose2) #konvert
partikel energi tertentu ke deskripsi icrp116 partikelcm/src-
>pSvcm3/srcwphantom_cell,particle3,dose_filter

particle3=openmc.ParticleFilter('neutron')

neutroncell = openmc.CellFilter((detb1cell,detb2cell,detb3cell))

tally3= openmc.Tally(name='neutron')

tally3.filters= [neutroncell,particle3,dose_filter]

tally3.scores= ['flux']

tally.append(tally3)



"""

#Tally Water Phantom

wphantom_cell=openmc.CellFilter(detaxcell)

tally3=openmc.Tally(name='wphantom')

particle3= openmc.ParticleFilter('photon')

#tally3.filters= [wphantom_cell,particle3]

#Energy_filter = openmc.EnergyFilter( [1e-3, 1e13])

tally3.filters=   [wphantom_cell,particle3,dose_filter]    #output
pSvcm3/src

tally3.scores = ['flux']

tally.append(tally3)

"""



tally.export_to_xml()

openmc.run()

                        Program Pembaca Ruangan


import openmc # type: ignore

import matplotlib.pyplot as plt

from matplotlib.colors import LogNorm



                                  75
import pandas as pd



sp = openmc.StatePoint('./statepoint.3.h5')



f=open("output.txt","w")

f.write(str(sp.tallies))

f.close()

print(sp.n_particles)

print(sp.tallies)

meshtally = sp.tallies [1]

print(sp.tallies [1])

print(sp.tallies [2])

#print(sp.tallies [3])



x=500#harus sama dengan resolusi pada file utama

y=500



conversion = 16368352439.27938

# dose * flux * src_rate * t / V = [pSv cm²] [p-cm/src] [src/sec]
[sec]/ [cm³]= [pSv]

# dose * cfac *t/V=pSv

# dose*cfac*60/V




v=(2000/x)*(2000/y)*5 #volume of room dose distribution



# {{{ ######## Pembuatan Visualisasi Distribusi Dosis
#################

dosevalues=meshtally.get_values() #Nilai perpixel dari grid
500x500

dosevalues.shape=(x,y)

#pSvcm3/src*(src/s)/cm3=pSv/s




                                 76
dosevalues = dosevalues*conversion/v #pSv/s = (pSv*cm3/src) *src/s
/cm3

dose=(dosevalues/1_000_000)*3600 #pSv/s -> uSv/hour

dose=dose [::-1,:]



GD=pd.DataFrame(dose)



GD.to_csv("gridTallyDose.csv")



fig, ax = plt.subplots()

cs = ax.imshow(dose, cmap='coolwarm', norm=LogNorm()) # type:
ignore

cb = plt.colorbar(cs)

ax.set_title('Distribusi Dosis Ruangan (uSv/hour)') #type: ignore

plt.savefig('RoomDoseDistribution.png',dpi=900 )

plt.axis('off')

#################################################################

# }}}



celltally = sp.tallies [2]

celldosevalues = celltally.get_values() #pSvcm3/src;dosevolume per
source

celldosestddev = celltally.std_dev

print(celltally)

celldosevalues.shape = celldosevalues.shape [0]

celldosestddev.shape = celldosestddev.shape [0]



smalltally = sp.tallies [2]

smalltallydose = smalltally.get_values()

smalltallydose.shape = smalltallydose.shape [0]

print("===========",smalltallydose,"===========")

vcell=10.8*50*200 #cm3

#conversion = 4092088109819844.5



                                   77
"""

dose_psvs=celldosevalues * conversion/ vcell

usvh_dose=(dose_psvs/1e6)*3600



usvh_stddev=(stddev_psvs/1e6)*3600



dose=usvh_dose

dosestddev=usvh_stddev

"""

dose= celldosevalues*conversion/vcell

dosestddev=celldosestddev*conversion/vcell



DF=pd.DataFrame(dose,dosestddev)



DF.to_csv("cellTallyDose.csv")



#dose=(dose/1e6)*3600 #pSv/s -> uSv/h 3.6e9

#dosestddev = (celldosestddev * s_rate / vcell) *(1e6/3600)

#k=2457897.1324533457

#dose=k*celldosevalues*600/vcell

#dosestddev = (k*celldosevalues*600/vcell) *(1e6/3600)



print(dose)

for v,s in zip(dose,dosestddev):

  f=open("output.txt","a")

  print(f'{v:.7e} +- {s:.7e}uSv/h')

  f.write(str(f'\n{v} +- {s} uSv/h'))

  f.close()



plt.show()

#dosevalues = dosevalues*s_rate/v #picosieverts/s




                                   78
"""

# plt.show()

plt.savefig('figlogdoseplot.png')

plt.show()

# plt.close()

# plt.clf()

"""



# plt.clf()




                                79
                                    LAMPIRAN B
                       Hasil Pengukuran Laju Dosis Commisioning




Dosis Background : 0,095 µSv/jam




                                         80
         LAMPIRAN C
Perhitungan Analitik Desain Bunker




               81
82
83
               LAMPIRAN D
Contoh Penggunaan Variasi Sudut Gantry LINAC




                    84
                             LAMPIRAN E
                   Program Pengubahan Fluks Ke Dosis

from pathlib import Path



import numpy as np



_FILES = (

    ('electron', 'electrons.txt'),

    ('helium', 'helium_ions.txt'),

    ('mu-', 'negative_muons.txt'),

    ('pi-', 'negative_pions.txt'),

    ('neutron', 'neutrons.txt'),

    ('photon', 'photons.txt'),

    ('photon kerma', 'photons_kerma.txt'),

    ('mu+', 'positive_muons.txt'),

    ('pi+', 'positive_pions.txt'),

    ('positron', 'positrons.txt'),

    ('proton', 'protons.txt')

)



_DOSE_ICRP116 = {}




def _load_dose_icrp116():

    """Load effective dose tables from text files"""

    for particle, filename in _FILES:

      path = Path(__file__).parent / filename

      data = np.loadtxt(path, skiprows=3, encoding='utf-8')

      data [:, 0]*= 1e6   # Change energies to eV

      _DOSE_ICRP116 [particle]= data




                                     85
 [docs]def dose_coefficients(particle, geometry='AP'):

  """Return effective dose conversion coefficients from ICRP-116



  This function provides fluence (and air kerma) to effective dose
conversion

  coefficients for various types of external exposures based on
values in

  `ICRP                       Publication                             116
<https://doi.org/10.1016/j.icrp.2011.10.001>`_.

  Corrected values found in a correigendum are used rather than the
values in

  theoriginal report.



  Parameters

  ----------

  particle :    {'neutron',   'photon',   'photon   kerma',   'electron',
'positron'}

      Incident particle

  geometry : {'AP', 'PA', 'LLAT', 'RLAT', 'ROT', 'ISO'}

    Irradiation geometry assumed. Refer to ICRP-116 (Section 3.2)
for the

      meaning of the options here.



  Returns

  -------

  energy : numpy.ndarray

      Energies at which dose conversion coefficients are given

  dose_coeffs : numpy.ndarray

      Effective dose coefficients in [pSv cm^2]at provided energies.
For

      'photon kerma', the coefficients are given in [Sv/Gy].



  """

  if not _DOSE_ICRP116:


                                     86
   _load_dose_icrp116()



 # Get all data for selected particle

 data = _DOSE_ICRP116.get(particle)

 if data is None:

   raise ValueError(f"{particle} has no effective dose data")



 # Determine index for selected geometry

 if particle in ('neutron', 'photon', 'proton', 'photon kerma'):

    index    =    ('AP',      'PA',   'LLAT',    'RLAT',   'ROT',
'ISO').index(geometry)

 else:

   index = ('AP', 'PA', 'ISO').index(geometry)



 # Pull out energy and dose from table

 energy = data [:, 0].copy()

 dose_coeffs = data [:, index + 1].copy()

 return energy, dose_coeffs




                                 87
              LAMPIRAN F
Contoh Tabel Konversi Fluks Dosis ICRP 116




                   88
                                  LAMPIRAN G
                       Program Pengubahan Fluks Ke Dosis

                  NSUB Sublibrary
            No.                                Short VII.1 VII.0 VI.8
                  Name Name

            1     0     Photonuclear           g      163    163    -

            2     3     Photo-atomic           photo 100     100    100

            3     4     Radioactive decay decay 3817 3838 979

            4     5     Spont. fis. yields s/fpy 9           9      9

            5     6     Atomic relaxation ard         100    100    100

            6     10    Neutron                n      423    393    328

            7     11    Neutron fis.yields n/fpy 31          31     31

            8     12    Thermal scattering tsl        21     20     15

            9     19    Standards              std    8      8      8

            10 113      Electro-atomic         e      100    100    100

            11 10010 Proton                    p      48     48     35

            12 10020 Deuteron                  d      5      5      2

            13 10030 Triton                    t      3      3      1

            14 20030 3He                       he3    2      2      1



1. The photonuclear sublibrary was carried over unchanged from ENDF/B-VII.0.
   It contains evaluated cross sections for 163 materials (all isotopes) mostly up to
   140 MeV. The sublibrary was supplied by Los Alamos National Laboratory
   (LANL) and it is largely based on the IAEA-coordinated collaboration
   completed in 2000.
2. The photo-atomic sublibrary was taken over from ENDF/B-VII.0=ENDF/B-
   VI.8. It contains data for photons from 10 eV up to 100 GeV interacting with
   atoms for 100 materials (all elements). The sublibrary was supplied by Lawrence
   Livermore National Laboratory (LLNL).
3. The decay data sublibrary has been re-evaluated and considerably improved by
   the Brookhaven National Laboratory (BNL).




                                         89
4. The spontaneous fission yields were taken over from ENDF/B-VII.0=ENDF/B-
   VI.8. The data were supplied by LANL.
5. The atomic relaxation sublibrary was taken over from ENDF/B-VII.0=ENDF/B-
   VI.8. It contains data for 100 materials (all elements) supplied by LLNL.
6. The neutron reaction sublibrary represents the heart of the ENDF/B-VII.1
   library. The sublibrary has been updated and extended, it contains 423 materials,
   including 422 isotopic and 1 elemental evaluation.. Altogether 234 materials
   have been changed in ENDF/B-VII.1 compared to ENDF/B-VII.0.
7. Neutron fission yields were reevaluated for 239Pu (fast and 14 MeV) by Los
   Alamos; others were taken over from ENDF/B-VII.0=ENDF/B-VI.8, having
   been supplied by LANL.
8. The thermal neutron scattering sublibrary was carried over unchanged from
   ENDF/B-VII.0. It contains thermal scattering-law data, largely supplied by
   LANL, with the addition of SiO2 in ENDF/B-VII.1 from ORNL.
9. The neutron cross section standards sublibrary was carried over from ENDF/B-
   VII.0 unchanged. Therefore, as for VII.0, the VII.0 standard cross sections were
   completely adopted by the VII.1 neutron reaction sublibrary except for the
   thermal cross section for 235U(n,f) where a slight difference occurs to satisfy
   thermal data testing, and some very small differences for 235U(n,f) and 238U(n,γ)
   in the keV–MeV region.
10. The electro-atomic sublibrary was taken over from ENDF/B-VII.0=ENDF/B-
    VI.8. It contains data for 100 materials (all elements) supplied by LLNL.
11. The proton-induced reactions were carried over from ENDF/B-VII.0 with only
    minor corrections. These were supplied by LANL and the data being mostly to
    150 MeV.
12. The deuteron-induced reactions were supplied by LANL, carried over
    unchanged from ENDF/B-VII.0. This sublibrary contains 5 evaluations.
13. The triton-induced reactions were supplied by LANL, carried over unchanged
    from ENDF/B-VII.0. This sublibrary contains 3 evaluations.
14. Reactions induced with 3He were supplied by LANL, carried over unchanged
    from ENDF/B-VII.0. This sublibrary contains 2 evaluations.
https://www.nndc.bnl.gov/endf-b7.1/
https://openmc.org/official-data-libraries/




                                         90
Lampiran: Histori alur persetujuan
No               Jabatan                             Nama                    Jenis             Tanggal Disetujui
 1   Dosen Pembimbing                  Ir. Anung Muharini, M.T., IPM.   Paraf           Selasa, 30 Juli 2024 15:02
     Ketua Program Studi Sarjana
 2                                     Dr. Ing. Ir. Sihana              Paraf           Selasa, 30 Juli 2024 16:27
     Teknik Nuklir
     Ketua Departemen Teknik Nuklir    Dr. Ir. Alexander Agung, S.T.,
 3                                                                      Tanda Tangan    Selasa, 30 Juli 2024 17:59
     dan Teknik Fisika                 M.Sc., IPU.
                                                                                                    Diajukan oleh Sukiyat



                   Dokumen ini telah melalui proses approval secara daring sebelum QR Code dibubuhkan.
                   Scan QR Code yang ada di setiap halaman dokumen ini untuk verifikasi.
