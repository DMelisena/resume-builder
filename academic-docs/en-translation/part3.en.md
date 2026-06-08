# CHAPTER V. RESULTS AND DISCUSSION

## V.1. OpenMC Simulation Results

First, calibration was performed using a water-phantom replica. The Dmax value from that simulation was then used as the conversion of the OpenMC output dose into a dose that can be compared with the dose constraint.

### V.1.1. Calibration of Dose to Simulation Dose Rate

Calibration was performed using a water-phantom replica located 100 cm from the source. The field size of the dose-calibration simulation was 30 cm x 30 cm.

The Dmax value in the calibration was then used as the equalization for LINAC irradiation, which has a value of 600 MU/minute or equivalent to 360 µSv/hour, which can be represented through Equation 4.4.

*Figure V.1. Percent Depth Dose (PDD) of the Water Phantom Calibration Simulation*

The PDD curve has a fairly significant difference compared with the shape in the simulation or real measurement, because the source used is a simple source. This source does not include components such as the Primary Collimator, Flattening Filter, Monitor Chamber, and Jaw as in a real LINAC head. This simulation also does not use a phase-space file in the form of a .phsp. The number of batches in this simulation is the same as the number of batches in the room simulation, namely 3 batches with 1,000,000,000 particles. It can be seen that the dose peak is at 1.1 and around 1.9 cm inside the water phantom, with a peak at 2.1 cm on the smoothed trendline curve.

*Figure V.2. Percent Depth Dose (PDD) of the Water Phantom Calibration Simulation at 10 batches*

In the calibration measurement using a larger number of batches, that curve shows the dose peak at a different distance. This occurs because the geometry used to produce the LINAC beam does not resemble the real LINAC geometry. The peak in the batch is approximately at a depth of 6.1 cm. This is quite far when compared with the experimental results or Monte Carlo simulation with the actual geometry.

### V.1.2. Geometry

The geometry was created using functions available in Python; the geometry was created on the xy, yz, and xz axes. Simply put, it can be described that the room consists of primary walls on both side faces and a corridor on one of the other sides. This is in accordance with the floor plan available in Figure V.3. In that geometry, the gray color means the concrete wall of the room. The yellow color represents the iron layer in the wall. There is also a tally detector illustrated in dark blue. The light blue color is the box source used to produce the photon radiation.

*Figure V.3. Geometry of the simulated LINAC room in the XY perception*

*Figure V.4. Geometry of the simulated LINAC room in the YZ perception*

*Figure V.5. Geometry of the simulated LINAC room in the XZ perception*

### V.1.3. Per-Angle Dose Distribution Map

*Figure V.6. Heatmap of the Default Simulation Dose Distribution*

It can be seen that in the original heatmap output in Figure V.6, there is no significant radiation around the room except from the primary wall that is directly struck by the LINAC radiation. This dose distribution is formed using a grid function spread throughout that bunker. It can be seen that significant dose occurs in accordance with the direction of irradiation of the LINAC head. Meanwhile, in its surroundings, the detected dose is not very significant. The simulation was run with 1,000,000,000 particles in 3 batches. The white color in the room means that the number of particles in that simulation is still insufficient and needs to be increased. This is because a larger number of particles will be able to produce more accurate results in areas of the room with too small a dose. In Figures V.6 through V.9, the geometry is combined with the heatmap so that interpretation can be done more easily.

Using the geometry created previously and the dose heatmap from the simulation, a visualization of the bunker dose distribution can be made. At the 0° dose, with the LINAC beam directed toward the floor, the radiation reflection spreads throughout the room. This makes the dose rate at this angle significantly larger than at the other irradiation angles. The dose at this angle is also more accurate, because each point receives the dose rate from various angles until all points around the bunker are filled.

*Figure V.7. Dose Distribution at gantry 0° (Bottom)*

The same cannot be said for irradiation at the other angles. It can be seen that the dose for irradiation at the other angles is not yet sufficiently comprehensive to fill the grid tally in that angle's simulation. A simple analytical calculation can prove that every point around the bunker should have a radiation dose. Meanwhile, based on these irradiation images, it can be seen that there are tallies that do not receive any dose at all. An increase in the number of particles is greatly needed at the other angles. The dose rate at 270° and 90° is only significant toward the other bunker, while at 180° the distribution is directed toward the inaccessible roof.

*Figure V.8. Dose Distribution at gantry 90°*

*Figure V.9. Dose Distribution at gantry 180° (Top)*

The dose rate at angles other than 0° shows empty points in that simulation. This can be remedied by increasing the number of particles by the amount of the order decrease in the dose rate around the bunker room. The dose rate around the room at those angles is on the order of -4, whereas at the order of -3 the radiation can already fill the simulation visualization. From this, it can be determined that the required increase in the number of particles is on the order of tens of times. This increase could be from 1x10¹⁰ up to 9x10¹⁰ particles. Using the computer specifications in this research, this could take 20 to 180 days. Therefore, an improvement in computer specifications needs to be made.

*Figure V.10. Dose Distribution at gantry 270°*

## V.2. Comparison of Dose Limits and Simulation Results

The dose rate obtained at the mounted tallies yielded the results shown in Table V.1. It can be seen that the dose is significantly larger at the 0° angle. This is what makes the grid tally appear full at that angle.

**Table V.1. Dose Rate Results Table**

| Point | Location | Distance to Wall (cm) | Simulation Dose Rate (μSv/hour) 0° | 90° | 180° | 270° |
|-------|----------|------|--------|--------|--------|--------|
| A | Front of Bunker Door | 30 | 5.71×10⁻³ | 1.31×10⁻³ | 2.15×10⁻³ | 2.00×10⁻⁴ |
| A | Front of Bunker Door | 100 | 3.35×10⁻³ | 9.10×10⁻⁴ | 0.00 | 6.37×10⁻⁴ |
| A | Front of Bunker Door | 200 | 1.20×10⁻² | 3.83×10⁻⁴ | 7.86×10⁻⁴ | 5.63×10⁻⁴ |
| B | LINAC Control Room | 30 | 2.07×10⁻² | 6.64×10⁻⁴ | 1.67×10⁻³ | 6.80×10⁻⁴ |
| B | LINAC Control Room | 100 | 4.00×10⁻² | 3.55×10⁻⁴ | 1.93×10⁻⁴ | 2.40×10⁻⁴ |
| B | LINAC Control Room | 200 | 5.32×10⁻² | 2.68×10⁻⁴ | 1.93×10⁻⁴ | 2.04×10⁻⁴ |
| C | TPS Room | 30 | 1.87×10⁻² | 6.64×10⁻⁴ | 1.55×10⁻⁴ | 0.00 |
| C | TPS Room | 100 | 2.90×10⁻² | 3.49×10⁻⁴ | 1.22×10⁻³ | 7.00×10⁻⁴ |
| C | TPS Room | 200 | 4.81×10⁻² | 5.66×10⁻⁴ | 1.23×10⁻³ | 6.93×10⁻⁴ |
| D | Bunker LINAC Precise | 30 | 5.47×10⁻² | 7.58×10⁻⁴ | 2.51×10⁻³ | 3.20×10⁻¹ |
| D | Bunker LINAC Precise | 100 | 6.37×10⁻² | 6.70×10⁻⁴ | 3.30×10⁻² | 2.48×10⁻¹ |
| D | Bunker LINAC Precise | 200 | 9.93×10⁻² | 3.76×10⁻⁴ | 1.81×10⁻⁴ | 2.20×10⁻¹ |

Based on the dose-rate measurement in Table V.1, it can be seen that the radiation dose does not always decrease the farther the detection is performed. This is because the radiation passing through the farthest detector can be done by radiation that does not arrive perpendicular to the wall. At 180° and 270°, there are detectors not passed by radiation at all.

The dose produced is already very low, considering that the LINAC is only operated a few times each day. Using the workload assumption used to calculate the LINAC thickness, the total operating time of the LINAC can be calculated. This calculation is performed with the assumption that the maximum irradiation dose rate is used. The workload calculation can be computed comprehensively based on Table V.2. The workload calculation in the analytical calculation for the secondary wall is performed by considering the coefficient factor Q. This differs from the primary analytical calculation, which does not use that factor.

**Table V.2. Weekly Workload Calculation**

| Type of Irradiation | Number of Patients (people) | Dose per patient (Gy/patient) | Operating Days (days/week) | Total Dose (Gy/week) |
|---------------------|-------------|-------------|-------------|-------------|
| Conventional | 20 | 4 | 5 | 400 |
| IMRT | 50 | 4 | 5 | 1000 |
| VMAT | 10 | 4 | 5 | 200 |
| QA | 12 | 2 | 6 | 144 |
| **Total Workload (Gy/week)** | | | | **1744** |
| **LINAC Operating Time (hours/week)** | | | | **4.84** |

At each of those walls, the applicable dose limit is the workers' dose constraint. This is because every room around the bunker is a workers' room and cannot be entered by the general public. The dose constraint for radiation workers according to BAPETEN Regulation (Perka) No. 4 of 2013 is 200 μSv/week.

**Table V.3. Dose Rate at LINAC Irradiation 0°**

| Point | Location | Distance to Wall (cm) | Dose Rate (μSv/hour) | Dose Rate per week (μSv/week) | Utility Dose Rate (μSv/week) |
|-------|----------|------|--------|--------|--------|
| A | Front of Bunker Door | 30 | 5.71×10⁻³ | 2.77×10⁻² | 8.58×10⁻³ |
| A | Front of Bunker Door | 100 | 3.35×10⁻³ | 1.62×10⁻² | 5.03×10⁻³ |
| A | Front of Bunker Door | 200 | 1.20×10⁻² | 5.83×10⁻² | 1.81×10⁻² |
| B | LINAC Control Room | 30 | 2.07×10⁻² | 1.00×10⁻¹ | 3.11×10⁻² |
| B | LINAC Control Room | 100 | 4.00×10⁻² | 1.94×10⁻¹ | 6.00×10⁻² |
| B | LINAC Control Room | 200 | 5.32×10⁻² | 2.58×10⁻¹ | 8.00×10⁻² |
| C | TPS Room | 30 | 1.87×10⁻² | 9.07×10⁻² | 2.81×10⁻² |
| C | TPS Room | 100 | 2.90×10⁻² | 1.40×10⁻¹ | 4.35×10⁻² |
| C | TPS Room | 200 | 4.81×10⁻² | 2.33×10⁻¹ | 7.23×10⁻² |
| D | Bunker LINAC Precise | 30 | 5.47×10⁻² | 2.65×10⁻¹ | 8.21×10⁻² |
| D | Bunker LINAC Precise | 100 | 6.37×10⁻² | 3.08×10⁻¹ | 9.56×10⁻² |
| D | Bunker LINAC Precise | 200 | 9.93×10⁻² | 4.81×10⁻¹ | 1.49×10⁻¹ |

**Table V.4. Dose Rate at LINAC Irradiation 90°**

| Point | Location | Distance to Wall (cm) | Dose Rate (μSv/hour) | Dose per week (μSv/week) | Utility Dose (μSv/week) |
|-------|----------|------|--------|--------|--------|
| A | Front of Bunker Door | 30 | 1.31×10⁻³ | 6.34×10⁻³ | 1.35×10⁻³ |
| A | Front of Bunker Door | 100 | 9.10×10⁻⁴ | 4.41×10⁻³ | 9.39×10⁻⁴ |
| A | Front of Bunker Door | 200 | 3.83×10⁻⁴ | 1.85×10⁻³ | 3.95×10⁻⁴ |
| B | LINAC Control Room | 30 | 6.64×10⁻⁴ | 3.22×10⁻³ | 6.86×10⁻⁴ |
| B | LINAC Control Room | 100 | 3.55×10⁻⁴ | 1.72×10⁻³ | 3.67×10⁻⁴ |
| B | LINAC Control Room | 200 | 2.68×10⁻⁴ | 1.30×10⁻³ | 2.76×10⁻⁴ |
| C | TPS Room | 30 | 6.64×10⁻⁴ | 3.22×10⁻³ | 6.86×10⁻⁴ |
| C | TPS Room | 100 | 3.49×10⁻⁴ | 1.69×10⁻³ | 3.60×10⁻⁴ |
| C | TPS Room | 200 | 5.66×10⁻⁴ | 2.74×10⁻³ | 5.84×10⁻⁴ |
| D | Bunker LINAC Precise | 30 | 7.58×10⁻⁴ | 3.67×10⁻³ | 7.82×10⁻⁴ |
| D | Bunker LINAC Precise | 100 | 6.70×10⁻⁴ | 3.24×10⁻³ | 6.91×10⁻⁴ |
| D | Bunker LINAC Precise | 200 | 3.76×10⁻⁴ | 1.82×10⁻³ | 3.88×10⁻⁴ |

**Table V.5. Dose Rate at LINAC Irradiation 180° (Top)**

| Point | Location | Distance to Wall (cm) | Dose Rate (μSv/hour) | Dose per week (μSv/week) | Utility Dose (μSv/week) |
|-------|----------|------|--------|--------|--------|
| A | Front of Bunker Door | 30 | 2.15×10⁻³ | 1.04×10⁻² | 2.74×10⁻³ |
| A | Front of Bunker Door | 100 | 0.00 | 0.00 | 0.00 |
| A | Front of Bunker Door | 200 | 7.86×10⁻⁴ | 3.81×10⁻³ | 1.00×10⁻³ |
| B | LINAC Control Room | 30 | 1.67×10⁻³ | 8.09×10⁻³ | 2.13×10⁻³ |
| B | LINAC Control Room | 100 | 1.93×10⁻⁴ | 9.33×10⁻⁴ | 2.45×10⁻⁴ |
| B | LINAC Control Room | 200 | 1.93×10⁻⁴ | 9.33×10⁻⁴ | 2.45×10⁻⁴ |
| C | TPS Room | 30 | 1.55×10⁻⁴ | 7.51×10⁻⁴ | 1.97×10⁻⁴ |
| C | TPS Room | 100 | 1.22×10⁻³ | 5.92×10⁻³ | 1.56×10⁻³ |
| C | TPS Room | 200 | 1.23×10⁻³ | 5.95×10⁻³ | 1.56×10⁻³ |
| D | Bunker LINAC Precise | 30 | 2.51×10⁻³ | 1.21×10⁻² | 3.19×10⁻³ |
| D | Bunker LINAC Precise | 100 | 3.30×10⁻² | 1.60×10⁻¹ | 4.20×10⁻² |
| D | Bunker LINAC Precise | 200 | 1.81×10⁻⁴ | 8.76×10⁻⁴ | 2.30×10⁻⁴ |

**Table V.6. Dose Rate at LINAC Irradiation 270°**

| Point | Location | Distance to Wall (cm) | Dose Rate (μSv/hour) | Dose per week (μSv/week) | Utility Dose (μSv/week) |
|-------|----------|------|--------|--------|--------|
| A | Front of Bunker Door | 30 | 2.00×10⁻⁴ | 9.67×10⁻⁴ | 2.06×10⁻⁴ |
| A | Front of Bunker Door | 100 | 6.37×10⁻⁴ | 3.09×10⁻³ | 6.57×10⁻⁴ |
| A | Front of Bunker Door | 200 | 5.63×10⁻⁴ | 2.73×10⁻³ | 5.81×10⁻⁴ |
| B | LINAC Control Room | 30 | 6.80×10⁻⁴ | 3.29×10⁻³ | 7.02×10⁻⁴ |
| B | LINAC Control Room | 100 | 2.40×10⁻⁴ | 1.16×10⁻³ | 2.48×10⁻⁴ |
| B | LINAC Control Room | 200 | 2.04×10⁻⁴ | 9.88×10⁻⁴ | 2.11×10⁻⁴ |
| C | TPS Room | 30 | 0.00 | 0.00 | 0.00 |
| C | TPS Room | 100 | 7.00×10⁻⁴ | 3.39×10⁻³ | 7.23×10⁻⁴ |
| C | TPS Room | 200 | 6.93×10⁻⁴ | 3.36×10⁻³ | 7.16×10⁻⁴ |
| D | Bunker LINAC Precise | 30 | 3.20×10⁻¹ | 1.55 | 3.30×10⁻¹ |
| D | Bunker LINAC Precise | 100 | 2.48×10⁻¹ | 1.20 | 2.56×10⁻¹ |
| D | Bunker LINAC Precise | 200 | 2.20×10⁻¹ | 1.07 | 2.27×10⁻¹ |

With the weekly LINAC operating time and the dose limit in accordance with the provisions of NCRP 151 and SRS 47, the safety of the bunker design can be assessed for compliance. That value is obtained by multiplying the total dose rate by the utility factor of each irradiation angle. Based on Table III.2, the utility is 31% at 0°, 21.3% at 90° and 270°, and 26.3% at 180°. The dose rate from the simulation at each angle is then multiplied by its respective utility so that it can then be summed to determine the expected worker dose at each studied point. This value is what can ultimately be compared to determine how small the dose received by workers at those points is compared with the applicable dose constraint. This is explained through Equation 4.7.

The dose rate from the measurement results at each angle is summed to find the dose rate on workers. The total of LINAC operation each week and the use of the occupancy factor to estimate the dose received by workers based on occupancy are shown in Table V.7.

**Table V.7. Total Expected Dose Rate on Workers in the Rooms**

| Point | Location | Occupancy Factor (T) | Distance to Wall (cm) | Total Dose (μSv/week) | Total Occupancy Dose (μSv/week) |
|-------|----------|------|------|--------|--------|
| A | Front of Bunker Door | 0.125 | 30 | 1.29×10⁻² | 1.61×10⁻³ |
| A | Front of Bunker Door | 0.125 | 100 | 6.62×10⁻³ | 8.28×10⁻⁴ |
| A | Front of Bunker Door | 0.125 | 200 | 2.01×10⁻² | 2.51×10⁻³ |
| B | LINAC Control Room | 1 | 30 | 3.46×10⁻² | 3.46×10⁻² |
| B | LINAC Control Room | 1 | 100 | 6.09×10⁻² | 6.09×10⁻² |
| B | LINAC Control Room | 1 | 200 | 8.07×10⁻² | 8.07×10⁻² |
| C | TPS Room | 1 | 30 | 2.90×10⁻² | 2.90×10⁻² |
| C | TPS Room | 1 | 100 | 4.62×10⁻² | 4.62×10⁻² |
| C | TPS Room | 1 | 200 | 7.52×10⁻² | 7.52×10⁻² |
| D | Bunker LINAC Precise | 0.5 | 30 | 4.16×10⁻¹ | 2.08×10⁻¹ |
| D | Bunker LINAC Precise | 0.5 | 100 | 3.94×10⁻¹ | 1.97×10⁻¹ |
| D | Bunker LINAC Precise | 0.5 | 200 | 3.77×10⁻¹ | 1.88×10⁻¹ |

The dose delivered by the LINAC at those points is much smaller than its dose limit value of 200 μSv/week. This value is 961 to 242,000 times smaller than the applicable NBD. It should be noted that the dose target for each bunker is at the bunker wall, whereas the dose study is performed at distances of 30 cm, 100 cm, and 200 cm. These locations are the locations more likely to be occupied by radiation workers when irradiation is performed.

In the design of the bunker room, the addition of a thickness equal to the half value layer (HVL) is also performed after the minimum wall thickness is obtained. This is then followed by rounding up the dimensions of the concrete wall. Therefore, the inverse square law and the attenuation factor play a major role in the dose rate being many times smaller than its dose limit value.

In this simulation, the LINAC characteristics are a simplification of real LINAC irradiation. The accuracy of the simulation results can be improved by adding a flattening filter (FF), using a phase-space file, and increasing the number of particles.

---

# CHAPTER VI. CONCLUSIONS AND SUGGESTIONS

## VI.1. Conclusions

1. The simulated dose rate around the LINAC bunker ranges from 8.28×10⁻³ to 0.208 μSv/week. This value is far smaller than the dose constraint enforced by BAPETEN Regulation (Perka) No. 3 of 2013. This means that the bunker's safety already complies with the applicable standard.

2. A visualization of the dose-rate distribution in the bunker room was obtained to help interpret the dose occurring at each dose-rate measurement point around the bunker.

## VI.2. Suggestions

There are things that can be developed in carrying out this research. An improvement in the accuracy of the simulation results can be achieved by adding a flattening filter (FF), using a phase-space file, and increasing the number of particles. The use of a computer with higher specifications can also be employed in order to simulate a larger number of particles.

---

# REFERENCES

[1] P. D. S. O. P.O.R.I, "Program Kerja Perhimpunan Dokter Spesialis Onkologi Radiasi 2018-2021," pp. 1-24, 2018.

[2] COCIR, "Radiotherapy age profile & density," no. December, 2019.

[3] Badan Pengawas Tenaga Nuklir, "Peraturan Kepala Badan Pengawas Tenaga Nuklir Nomor 4 Tahun 2013 tentang Proteksi dan Keselamatan Radiasi Dalam Pemanfaatan Tenaga Nuklir," 2013.

[4] IAEA, "IAEA Safety Reports Series No. 47 - Radiation Protection in the Design of Radiotherapy Facilities," Saf. Reports Ser., vol. 47, p. 9, 2006, [Online]. Available: https://www-pub.iaea.org/MTCD/publications/PDF/Pub1223_web.pdf

[5] NCRP, "Structural Shielding Design and Evaluation for Megavoltage X and Gamma Ray Radiotherapy Facilities," Maryland, 2005.

[6] M.Yu. Tikhonchev, G.A. Shimansky, E.E. Lebedeva, V. V. Lichadeev, D. K. Ryazanov, and A.I. Tellin, "The Role of Computer Simulation in Nuclear Technologies Development," Res. Inst. At. React., 2000.

[7] A. S. Ferdiansyah, "Evaluasi Keselamatan Radiasi pada Dinding Gedung Linear Accelerator (LINAC) Versa HD di Rumah Sakit Umum Pusat Dr. Sardjito," Skripsi, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah Mada, 2022.

[8] Y. M. Dinata, "Pengukuran Paparan Radiasi di Luar Bungker LINAC Radiotherapy Rumah Sakit Dr. Sardjito Yogyakarta," Thesis, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah Mada, 2010.

[9] A. Rafi, "Desain Dinding Perisai Radiasi Ruangan Hot Laboratory pada Instalasi Kedokteran Nuklir Menggunakan Program Monte Carlo N-Particle Extended," Skripsi, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah Mada, 2018.

[10] N. K. T. Kusnaedi, "Analisis Ketebalan dan Material pada Perisai Radiasi Ruang Siklotron 30 MeV untuk BNCT menggunakan Program Particle and Heavy Ion Transport Code System (PHITS)," Skripsi, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah Mada, 2023.

[11] A.R. Priadi, "Evaluasi Desain Ruangan Linear Accelerator (LINAC) 10 MV di Rumah Sakit JIH Yogyakarta Menggunakan OpenMC," Skripsi, Departemen Teknik Nuklir dan Teknik Fisika, Fakultas Teknik, Universitas Gadjah Mada, 2022.

[12] M. A. Efendi, A. Funsian, T. Chittrakarn, and T. Bhongsuwan, "Monte Carlo simulation using PRIMO code as a tool for checking the credibility of commissioning and quality assurance of 6 MV TrueBeam STx varian LINAC," Reports Pract. Oncol. Radiother., vol. 25, no. 1, pp. 125-132, 2020, doi: 10.1016/j.rpor.2019.12.021.

[13] N. Tsoulfanidis, Measurement and Detection of Radiation. Boca Raton: CRC Press, 2010. doi: 10.1201/9781439894651.

[14] Glenn F. Knoll, Radiation detection and measurement, 4th ed. Hoboken, N.J: JOHN WILEY, 2020. doi: 10.1134/S1063778819090060.

[15] J. E. Martin, Physics for Radiation Protection. Weinheim: Wiley, 2013. doi: 10.1002/9783527667062.

[16] K. S. Krane and W. G. Lynch, "Introductory Nuclear Physics," Phys. Today, vol. 42, no. 1, pp. 78-78, Jan. 1989, doi: 10.1063/1.2810884.

[17] H. Cember and J. E. Turner, "Introduction to Health Physics. Second Edition," Phys. Today, vol. 37, no. 9, pp. 78-79, Sep. 1984, doi: 10.1063/1.2916417.

[18] G. J. Kutcher et al., "Comprehensive QA for radiation oncology: Report of AAPM Radiation Therapy Committee Task Group 40," Med. Phys., vol. 21, no. 4, pp. 581-618, Apr. 1994, doi: 10.1118/1.597316.

[19] "Dokumen Perhitungan Tebal Dinding Penahan Radiasi Ruang Pesawat LINAC Elekta Synergy Instalasi Radioterapi RSUP Dr. Hasan Sadikin".

[20] A. W. Harto, Dasar-Dasar Fisika Akselerator. Sleman: UGM Press, 2023.

[21] M. Hossain, "Output trends, characteristics, and measurements of three megavoltage radiotherapy linear accelerators," J. Appl. Clin. Med. Phys., vol. 15, no. 4, pp. 137-151, Jul. 2014, doi: 10.1120/jacmp.v15i4.4783.

[22] F. Van den Heuvel, Q. Wu, and J. Cai, "In modern linacs monitor units should be defined in water at 10 cm depth rather than at d max," Med. Phys., vol. 45, no. 11, pp. 4789-4792, Nov. 2018, doi: 10.1002/mp.13015.

[23] Y. Zhang, Y. Feng, X. Ming, and J. Deng, "Energy Modulated Photon Radiotherapy: A Monte Carlo Feasibility Study," Biomed Res. Int., vol. 2016, pp. 1-16, 2016, doi: 10.1155/2016/7319843.

[24] M. Rianna, H. A. Sianturi, H. Lubis, A. Pelawi, T. Sembiring, and M. Situmorang, "Comparison of Energy Doses 10 Mv Distribution Using Percentage Depth Dose (Pdd) Method on Linac: Electa and Siemens," J. Nat., vol. 18, no. 2, pp. 85-88, 2018, doi: 10.24815/jn.v18i2.11133.

[25] Clement C. H. and Petoussi-Henss N., "ICRP Publication 116 Conversion Coefficients for Radiological Protection Quantities for External Radiation Exposures," Ann. ICRP, 2012, doi: 10.1016/0146-6453(81)90127-5.

[26] P. K. Romano, "Openmc.data.dose_coefficients." [Online]. Available: https://openmc.discourse.group/t/openmc-data-dose-coefficients/1634
