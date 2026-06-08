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