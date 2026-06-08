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