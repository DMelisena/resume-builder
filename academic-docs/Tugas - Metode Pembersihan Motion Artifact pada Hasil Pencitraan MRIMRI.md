Metode Pembersihan Motion Artifact pada Hasil Pencitraan
MRI

               Muhammad Arya Hanif a)
               Department of Nuclear Engineering and Engineering Physics, Faculty of Engineering,
               Universitas Gadjah Mada,


               Jl. Grafika No.2, Senolowo, Sinduadi, Mlati, Sleman, Yogyakarta, 55281, Indonesia


               a) aryasenaria@mail.ugm.ac.id

               Abstract. Magnetic resonance imaging (MRI) adalah sebuah alat yang sangat bermanfaat pada
               kemaslahatan manusia terutama dalam bidang kesehatan. Penggunaan MRI juga menjadi
               pilihan primadona karena tidak perlu mempertimbangkan dosis yang diterima oleh pasien.
               Tetapi seperti metode-metode lainnya, MRI juga memiliki kekurangan. Suaranya yang bising
               serta regulasi yang ketat terkadang menghasilkan pergerakan terutama pada pasien pediatri.
               Akan tetapi, kemarakan ini juga menghasilkan solusi yang beragam dengan kelebihan masing-
               masing. Dalam artikel ini, proses pengambilan citra, kekurangan, solusi umum dan khusus dari
               permasalahan motion artifact akan dibahasIntroduction



1. Pendahuluan
Artifak pada MRI merujuk pada pixel dalam hasil pencitraan MRI yang tidak representatif terhadap
anatomi sebenarnya dari objek yang dicitrakan. Terdapat sebuah pendekatan yang membaginya
menjadi 3 [1]. Kategori pertama adalah motion artifact, artifak ini disebabkan oleh pergerakan dari
jaringan pasien pada saat pengambilan gambar. Kategori kedua adalah Sequence/Protocol-related
artifacts, artifak ini didapatkan dari teknik pengukuran yang digunakan. Kategori artifak terakhir
adalah external artifacts. Artifak ini disebabkan oleh faktor eksternal seperti malfungsi pada MR
scanner, maupun faktor lain pada pasien ataupun scanner.




   Figure 1. Contoh motion artifact yang dihasilkan oleh kesalahan aliran. (a) zipper Artifact yang
  tercipta dari perbedaan kecepatan dengan teknik pengukuran pulse sequence, spin echo. (b) Aliran
                                  aorta memiliki beberapa Ghost [1]

Setiap pencintraan yang dihasilkan MRI memiliki artifak[2]. Beberapa artifak dapat membuat hasil
pencitraan tidak bisa dibaca serta menyerupai penyakit. Hal tersebut dapat membahayakan pasien
apabila kesalahan tersebut ditindaklanjuti dengan pengobatan yang tidak sesuai dikarenakan diagnosa
dari hasil pencitraan yang salah. Hal ini tentunya berbahaya apabila terjadi pada penyakit kanker yang
dapat membunuh sel-sel sehat. Perancangan radioterapi dengan citra berartifak dapat merugikan
pasien dengan matinya sel-sel sehat serta tidak selesainya pembunuhan sel kanker yang kemudian
dapat berujung pada pembesaran kembali serta metastase.Beberapa citra memiliki artifak yang tidak
dapat diperbaiki, melainkan hanya di perjelas, Beberapa lainnya dapat dibersihkan dan beberapa
lainnya dapat dihindari dari awal[2].




      Figure 2. Hasil pencitraan menggunakan seta tidak menggunakan kontras gadolinum [3]

Pembersihan artifak menggunakan algoritma pengolahan pixel hasil pencitraan diperlukan karena
meskipun MRI tidak menggunakan radiasi pengion, penelitian membuktikan bahwa pemakaian MRI
yang menggunakan gadolinium yang berulang-ulang dapat meninggalkan kadar gadolinium terutama
pada bagian dentate nuclei serta globus pallidus[4]. Dapat dilihat pada gambar 1 bahwa terjadi
pembengkakan pada bagian Basal Ganglia serta posterior Fossa pada pencitraan MRI terakhir
dibandingkan pencitraan pertama. Hal tersebut patut dihindari meskipun tidak ada bahaya yang
terbukti dari gadolinium[5]. Penggunaan kontras ini dilakukan karena telah terbukti dapat
memungkinkan perlakuan berupa pemisahan bagian awal maupun ablasi tanpa mengkontaminasi
struktur disekitarnya sehingga mengurangi resiko kembalinya tumor serta kerentanan [6]. Gadolinium
adalah bahan aktif yang secara alami merupakan metal langka berwarna perak yang dapat dimurnikan
dari bijih mineral [7].

Selain itu, terkadang pengambilan citra sulit dikarena kondisi lain yang menghambat pasien untuk
mendapatkan pencitraan. Contohnya pasien pediatri sering kali perlu dipakaikan sedatif untuk
menghindari motion artifact dikarenakan umur pasien yang muda. Meskipun metode tersebut terbukti
dapat menghasilkan 87.3% gambar yang sempurna dan hanya 3.8% dengan rekomendasi pengulangan
pencitraan, metode ini terkadang memakan waktu lama serta perlu menggunakan sedatif yang
jumlahnya terbatas[8].

2. Prinsip Kerja
Berbeda dengan sinar X, Magnetic Ressonance Imaging (MRI) tidak menggunakan radiasi pengion
untuk mendapatkan suatu citra menggunakan radiasi pengion. MRI bekerja dengan menggunakan
frekuensi radio yang dihasilkan oleh proton hidrogen di dalam tubuh untuk membuat citra struktur
tubuh[9].Untuk menunjang prinsip kerja tersebut MRI membutuhkan 4 komponen utama. Komponen
tersebut diantaranya adalah Magnet, Gelombang Radio, Gradient coils dan Komputer[10].
Magnet digunakan untuk mengarahkan proton sesuai dengan medan magnet yang seragam dari setiap
sisi melintang MRI. Medan magnet tersebut disebut juga sebagai main magnetic field. Setelah terarah,
resonansi diciptakan dengan memberikan detakan RF di frekuensi tertentu. Magnetic Ressonance yang
dihasilkan oleh alat ini akan mengubah orientasi arah dari photon dengan frekuensi yang sama. Ketika
proton tersebut kembali menyelaraskan diri, sinyal RF tercipta dan kemudian ditangkap serta
digunakan untuk membuat k-value agar kemudian direkontstruksi.




           Figure 3. Ilustrasi erubahan arah pada proton yang disebabkan oleh magnet [9]

Resonansi yang tercipta dari gelombang RF dan magnet hanya terjadi pada proton dengan energi
frekuensi lamoryang sama dan kemudian menghasilkan eksitasi. Proses penyerapan dan pelepasan
energi secara bolak balik tersebut kemudian akan dilanjutkan dengan proses eksitasi dan relaksasi.
Relaksasi terjadi apabila sinyal radio dihentikan agar kemudian energi frekuensi yang lepas dideteksi
melalui induksi elektromagnetik pada kumparan penerima dan dapat disebut sebagai sinyal MRI atau
sinyal FID (Free Iduction Decay). Proses tersebut terjadi beberapa kali sebelum pencitraan dinyatakan
selesai.




        Figure 4. Ilustrasi (a)Posisi Komponen utama dan (b)sistem kerja sederhana MRI[10]

Magnet pada MRI terdiri dari lilitan yang disusun membentuk silinder dan dilapisi oleh helium cair di
dalam cryostat. Kabel yang dililit logam campuran niobium-titanium menjadi superkonduktor pada
temperatur dibawah 10 kelvin yang dicapai dengan perendaman menggunakan cairan helium.
Pendinginan lilitan dengan helium akan membantu arus listrik untuk menciptakan medan magnet dan
disebut juga sebagai “ramping up”. Pemanasan magnet akan menghilangkan sifat superkonduksi
(“quench”) yang juga akan mengeluarkan helium ke luar melalui sistem pipa dan berakhir pada
hilangnya medan magnet.
Lilitan Radiofrequency (RF) digunakan untuk mengirimkan sinyal serta menerima sinyal balik pasien.
Komponen ini adalah penentu utama SNR serta keseragaman sinyal. Sinyal RF akan digunakan untuk
mengubah arah poros magnetisasi agar kemudian responnya kembali ditangkap. RF dapat menjadi
transmitter, receiver serta kombinasi dari keduanya [10]. Medan magnet yang diciptakan oleh RF
melintang dari medan magnet utama. Energi ditransmisikan berupa panas dengan membuat medan
listrik yang berekasi dengan jaringan yang sudah konduktif.

3. Rekonstruksi Citra
Rekonstruksi digunakan untuk mengubah data k-space yang telah didapatkan menjadi sebuah gambar
yang dapat digunakan serta dipahami secara klinis[11]. K-space sendiri adalah perangkat penyimpanan
data yang dihasilkan oleh frekuensi spasial yang diciptakan dengan pengkodean spasial[2]. Nilai-nilai
K adalah berupa gelombang frekuensi yang disejajarkan agar kemudian membentuk k-space.




                                    Figure 5. Contoh K-field [2]

Data asli MRI bukan berupa gambar melainkan gelombang yang disimpan pada K-field. Rekonstruksi
gambar adalah pembentukan gambar menggunakan data mentah agar bisa digunakan untuk keperluan
klinis. Tahap-tahap yang perlu dilakukan diantaranya noise pre-whitening, interpolation untuk
membentuk pixel kotak, Pembersihan data mentah dari artifak Gibbs, transformasi Fourier yang
menghubungkan data mentah ke gambar dan yang terakhir adalah phased array coil combination[11].

Demi mempermudah menilai gambar yang diharapkan, 3 buah parameter ditentukan sebagai tolak
ukur kualitas hasil pencitraan diantaranya : Signal-to-noise ratio (SNR), pixel shape (point spread
function) dan artifak. Hal tersebut bukanlah sebagai penentu suatu hasil pencitraan lebih baik
dibandingkankan yang lain melainkan memberikan pengenalan dari kualitas citra yang beragam [11].

Noise dapat diumpamakan sebagai sinyal acak tambahan dengan rata-rata nol yang memiliki
amplitudo senilai dengan distribusi Gaussian serta standar deviasi yang ditentukan. (σ). Identifikasi
tersebut lah yang menjadi penentu utama dari nilai dari SNR suatu pencitraan. Secara sederhana, SNR
adalah nilai keberadaan pixel gambar berupa noise dibandingkan citra non-noise.
Point spread function digunakan untuk mengetahui resolusi dari gambar, dengan mengetahui nilai serta
frekuensi dari kebocoran pixel harsil pencitraan ke pencitraan lainnya. Besarnya nilai ini menandakan bahwa
gambar tersebut kabur.




                          Figure 6. Ilustrasi Sistem image reconstruction[11]


4. Metode Reduksi Artifak
Terdapat 4 metode yang biasa dipakai untuk memperbaiki ataupun mengurangi motion artifact[1].
Metode tersebut diantaranya adalah modifikasi parameter akuisisi, triggering/gating, kompensasi
aliran dan kompensasi berbasis radial.

Pengaplikasian artificial intelegence juga dapat digunakan dalam pembersihan artifak. Pembersihan
motion artifact menggunakan algoritma deep learning yaitu 3D convolutional neural network (CNN)
terbukti dapat meningkatkan rata-rata peak signal-to-noise-ratio dari 13 pasang gambar yang awalnya
sejumlah 31.7 menjadi 33.3 dB [12].




       Figure 7. Pembuatan sampel citra dengan motion artifact menggunakan citra bersih[13]
Metode-metode yang sebelumnya dipaparkan dapat dicoba efektifitasnya dengan pembuatan pseudo-
k-space data dengan membuat berbagai sampel motion artifact dengan pixel shift pada sampel MRI
utuh[13]. Hal ini menjadi cara mudah untuk mendapatkan sampel apabila akses ke hasil publik susah
didapatkan.

Terdapat langkah-langkah sederhana yang bisa dilakukan agar bisa menghindari Motion artifact.
Cushioning, vacuum devices, dan sedation dapat mengurangi pergerakan dengan bantuan ataupun
perhetnian gerak. Pertukaran pengkodean fase daserta frekuensi juga dapat mengurangi artifak yang
disebabkan oleh inter-view motion. Contohnya pada respirasi, terjadi pencitraan anterioranterior-
posteriorne yang dapat diuntungkan dari superior–superior-inferiorcoding. Pencitraan yang cepat juga
bisa menghindari pergerakan yang lebih lambat serta mengganggu pengkodean, yang mana dapat
berguna untuk aperiodic motion, mot inhomogeneous fields, dan motion-related banding[14].


5. Kesimpulan
MRI adalah sebuah modalitas yang apabila dimanfaatkan dengan benar dapat sangat bermanfaat
karena pengambilan gambarnya yang unik serta tidak perlu mempertimbangkan dosis radiasi seperti
pencitraan radiodiagnostik lainnya. Akan tetapi, MRI juga merupakan modalitas yang memiliki
banyak artifak. Akan tetapi, hal tersebut senantiasa didukung dengan metode-metode yang
mempermudah serta semakin efektif dalam menyelesaikan permasalahan tersebut. Maka dari itu,
penggunaan MRI perlu digunakan dengan keterampilan demi mendapatkan kerugian minimal dengan
manfaat maksimal

6. Daftar Pustaka
[1] B. Dale, M. Brown and R. Semelka, MRI basic principles and applications, 5th ed. Chichester:
      Wiley Blackwell, 2015.
[2] C. Westbrook, C. Roth and J. Talbot, MRI in Practice, 5th ed. Somerset: John Wiley & Sons,
      2019.
[3] R. McDonald et al., "Intracranial Gadolinium Deposition after Contrast-enhanced MR
      Imaging", Radiology, vol. 275, no. 3, pp. 772-782, 2015. Available: 10.1148/radiol.15150025
[4] V. Gulani, F. Calamante, F. Shellock, E. Kanal and S. Reeder, "Gadolinium deposition in the
      brain: summary of evidence and recommendations", The Lancet Neurology, vol. 16, no. 7, pp.
      564-570, 2017. Available: 10.1016/s1474-4422(17)30158-8.
[5] S. Alonso Roca, A. Delgado Laguna, J. Arantzeta Lexarreta, B. Cajal Campo and S. Santamaría
      Jareño, "Screening in patients with increased risk of breast cancer (part 1): Pros and cons of
      MRI screening", Radiología (English Edition), vol. 62, no. 4, pp. 252-265, 2020. Available:
      10.1016/j.rxeng.2020.01.009.
[6] C. Costelloe, B. Amini and J. Madewell, "Risks and Benefits of Gadolinium-Based Contrast-
      Enhanced MRI", Seminars in Ultrasound, CT and MRI, vol. 41, no. 2, pp. 170-182, 2020.
      Available: 10.1053/j.sult.2019.12.005.
[7] C. Westbrook, Handbook of MRI technique, 4th ed. Chicester: John Wiley & Sons, Ltd., 2014
[8] B. Rudder, S. Easley, A. Robinson, J. Noel-MacDonnell and D. Nielsen, "Effects of an MRI Try
      Without program on patient access", Pediatric Radiology, vol. 49, no. 13, pp. 1712-1717, 2019.
      Available: 10.1007/s00247-019-04487-1
[9] R. Fosbinder and D. Orth, Essentials of radiologic science. Philadelphia, Pa.: Wolters Kluwer
      Health/Lippincott Williams & Wilkins, 2012.
[10] S. Serai, M. Ho, M. Artunduaga, S. Chan and G. Chavhan, "Components of a magnetic
      resonance imaging system and their relationship to safety and image quality", Pediatric
      Radiology, vol. 51, no. 5, pp. 716-723, 2021. Available: 10.1007/s00247-020-04894-9.
[11] M. Hansen and P. Kellman, "Image reconstruction: An overview for clinicians", Journal of
      Magnetic Resonance Imaging, vol. 41, no. 3, pp. 573-585, 2014. Available:
      10.1002/jmri.24687.
[12] B. Duffy et al., "Retrospective motion artifact correction of structural MRI images using deep
     learning improves the quality of cortical surface reconstructions", NeuroImage, vol. 230, p.
     117756, 2021. Available: 10.1016/j.neuroimage.2021.117756.
[13] H. Tsukamoto and I. Muro, "Development of Motion Artifact Generator for Deep Learning in
     Brain MRI", Japanese Journal of Radiological Technology, vol. 77, no. 5, pp. 463-470, 2021.
     Available: 10.6009/jjrt.2021_jsrt_77.5.463.
[14] L. Saba, IMAGE PRINCIPLES, NECK, AND THE BRAIN. Boca Raton: CRC PRESS, 2016

Sambutan
Pekerjaan ini sangat terbantu dengan terbukanya fasilitas perpustakaan teknik meskipun hanya sampai
jam 4. Penulis berharap agar sepulang KKN, fasilitas tersebut sudah dapat digunakan layaknya
sebelum pandemi apalagi kalau dikembangkan menjadi tidak memiliki jam tutup. Penulis juga
berharap SGLC sudah dapat dioperasikan serta dapat maksimal dalam menunjang keperluan
mahasiswa terutama pengerjaan tugas. Hal tersebut mengingat bahwa banyak kos mahasiswa yang
kurang nyaman digunakan untuk mengerjakan tugas serta alternatifnya yang mengeluarkan biaya yang
tidak sedikit.


Lampiran
