# SAFETY EVALUATION OF THE 10 MeV LINAC BUNKER AT RSUP Dr. HASAN SADIKIN USING THE OpenMC SIMULATION METHOD

**UNDERGRADUATE THESIS (SKRIPSI)**

Submitted in partial fulfillment of the requirements for the Degree of Bachelor in the Nuclear Engineering Study Program

Submitted by
**MUHAMMAD ARYA HANIF**
19/443954/TK/49150

To the
DEPARTMENT OF NUCLEAR ENGINEERING AND ENGINEERING PHYSICS
FACULTY OF ENGINEERING
UNIVERSITAS GADJAH MADA
YOGYAKARTA
2024

---

## STATEMENT OF ORIGINALITY (Plagiarism-Free Declaration)

I, the undersigned:

- Name: Muhammad Arya Hanif
- Student ID (NIM): 19/443954/TK/49150
- Year of enrollment: 2019
- Study Program: Nuclear Engineering
- Faculty: Engineering

declare that this scientific thesis document contains no part of any other scientific work that has been submitted to obtain an academic degree at any institution of higher education, and contains no work or opinion ever written or published by any other person or institution, except those cited in writing in this document and acknowledged in full in the list of references.

I therefore declare that this scientific document is free from elements of plagiarism, and should this thesis document later be proven to be a plagiarism of another author's work and/or to deliberately present work or opinion that is the result of another author's work, I am prepared to accept the applicable academic and/or legal sanctions.

Yogyakarta, 30 July 2024

Muhammad Arya Hanif
NIM. 19/443954/TK/49150

---

## PAGE OF RATIFICATION (Approval Page)

**UNDERGRADUATE THESIS**

SAFETY EVALUATION OF THE 10 MeV LINAC BUNKER AT RSUP Dr. HASAN SADIKIN USING THE OpenMC SIMULATION METHOD

- Student Name: Muhammad Arya Hanif
- Student Number: 19/443954/TK/49150
- Principal Supervisor: Ir. Anung Muharini, M.T., IPM.
- Co-Supervisor: Anisza Okselia, S.T., M.Si.

This thesis was defended before the Examination Committee on 23 July 2024.

- Session Chair: Ir. Anung Muharini, M.T., IPM.
- Principal Examiner: Ir. Susetyo Hario Putero, M.Eng.
- Examination Member: M. Arif Efendi, S.Si., M.Sc.

This thesis has been accepted and declared to meet the graduation requirements on 30 July 2024.

Head of the Department of Nuclear Engineering and Engineering Physics
Faculty of Engineering, UGM

Dr. Ir. Alexander Agung, S.T., M.Sc., IPU
NIP. 19720916 199803 1002

---

*This work is dedicated to my late grandfather.*

*"We play with the cards we're dealt." - Stan Edgar*

---

## PREFACE (Acknowledgments)

Praise and gratitude to God, for by His grace and mercy the author has been able to complete this thesis. The author is grateful for the opportunity to meet and befriend remarkable people during his studies, both from within and outside the Department. The author is very proud to have known them. This expression of thanks is offered to:

1. Ms. Ir. Anung Muharini, M.T., IPM., as Principal Supervisor of the Final Project, who has always patiently guided the author and taught valuable knowledge until the author could complete this thesis.
2. Ms. Anisza Okselia, S.T., M.Si., as Internship Supervisor and Second Final-Project Supervisor, who proposed the thesis topic and provided the data needed for the thesis.
3. Ms. Sita Gandes Pinasti, S.T., M.Sc., who was willing to provide consultation on the research problems the author encountered during the writing of the thesis.
4. The staff of RSUP Dr. Hasan Sadikin (Central General Hospital), who provided a place to carry out the internship and served as the basis of the author's thesis.
5. Mr. Dr. Ir. Alexander Agung, S.T., M.Sc., IPU, as Head of the Department of Nuclear Engineering and Engineering Physics.
6. All lecturers and the academic community of the Department of Nuclear Engineering and Engineering Physics, who provided knowledge and assistance so that the author could complete his studies.
7. Parents and family members who continuously provided financial and moral support.
8. Adi, Rayhan, Owen, Helmi, Zaky, Thian, Ryan, Levi, Cesca, Ismi, and other DTNTF friends who inspired and accompanied the author through college and play.
9. Ojan, Kresna, Almas, Rapi, Nanda, and Valen, my beloved close friends who have always accompanied the author since PPSMB.
10. Joe, Lesa, Karin, Alif, the boarding-house members, and the KKN subunit and unit who accompanied the author in the middle of nowhere, sampling community life, and who still accompany the author even after KKN ended.
11. Friends from SATUBUMI, Gamabunta, and other UGM event committees that served as a place for the author to grow through learning and organizational duties.
12. Friends whom the author cannot mention one by one, who accompanied the author throughout his college years.

Yogyakarta, 19 July 2023

Muhammad Arya Hanif

---

## LIST OF SYMBOLS AND ABBREVIATIONS

### Roman Symbols

| Symbol | Quantity | Unit |
|--------|----------|------|
| d_sec | Distance from isocenter to measurement point | cm |
| Ḋ | Dose Rate | Sieverts/hour |
| Da | Dose per fluence | Sieverts cm² |
| Ḋmax | Maximum Dose Rate | Sieverts/hour |
| Do | Output Dose of the OpenMC function | Sieverts |
| Dosk | Output Dose of the Calibration Cell | Sieverts |
| Ḋ | Dose Rate of the Linear Accelerator | MU/minute |
| DU | Dose based on angular utility | µSv/week |
| E | Energy | MeV |
| HVL | Half Value Layer | mm |
| S | Conversion Factor | - |
| SR | Source Rate | sources/second |
| T | Occupancy Factor | - |
| TVL | Tenth Value Layer | cm |
| T | Time | seconds |
| tw | Irradiation time to reach the workload | hours |
| U | Utility Factor | % |
| V | Volume | cm³ |
| W | Workload | Gy/week |
| X | Material thickness | m |

### Greek Symbols

| Symbol | Quantity | Unit |
|--------|----------|------|
| Φ | Simulation flux | Particle-cm / source |

### Subscripts

| Symbol | Description |
|--------|-------------|
| bo | Output |
| maks | Maximum |
| Sk | Calibration Cell |

### Abbreviations

| Abbreviation | Meaning |
|--------------|---------|
| AAPM TG | American Association of Physicists in Medicine Task Group |
| AC | Alternating Current |
| BAPETEN | Nuclear Energy Regulatory Agency (Badan Pengawas Tenaga Nuklir) |
| BNCT | Boron Neutron Capture Therapy |
| BPE | Boron Loaded Polyethylene |
| CPRG | Computational Reactor Physics Group |
| CSEWG | Cross Section Evaluation Working Group |
| Dr. | Doctor |
| ENDF | Evaluated Nuclear Data Library |
| FF | Flattening Filter |
| HVL | Half Value Layer |
| IAEA | International Atomic Energy Agency |
| KeV | Kilo electron Volt |
| LINAC | Linear Accelerator |
| MIT | Massachusetts Institute of Technology |
| MeV | Mega electron Volt |
| MV | Mega Volt |
| MU | Monitor Unit |
| NCRP | National Council on Radiation Protection & Measurements |
| NBD | Dose Limit Value (Nilai Batas Dosis) |
| RSUP | Central General Hospital (Rumah Sakit Umum Pusat) |
| SAD | Source to Axis Distance |
| TVL | Tenth Value Layer |
| UGM | Universitas Gadjah Mada |

---

## ABSTRACT (translated from the Indonesian INTISARI)

SAFETY EVALUATION OF THE 10 MeV LINAC BUNKER AT RSUP Dr. HASAN SADIKIN USING THE OpenMC SIMULATION METHOD

Muhammad Arya Hanif
19/443954/TK/49150

Submitted to the Department of Nuclear Engineering and Engineering Physics, Faculty of Engineering, Universitas Gadjah Mada on 12 July 2024, in partial fulfillment of the requirements for the Degree of Bachelor in the Nuclear Engineering Study Program.

This research was conducted to evaluate the safety of the LINAC Elekta Synergy radiotherapy bunker design built at RSUP Dr. Hasan Sadikin. Visualization of the dose distribution was performed to help interpret the dose distribution in the LINAC bunker.

The evaluation was carried out using Monte Carlo simulation through the OpenMC particle transport code version 0.13.1. Dose-rate measurements were performed at varying distances of 30, 100, and 200 cm from the bunker wall. The occupancy, utility, and workload factors were used to determine the applicable dose limit values at those points.

The dose rate around the room ranged from 8.28 × 10⁻³ to 0.208 µSv/week. This value is far smaller than the dose constraint enforced by BAPETEN in Regulation (Perka) No. 4 of 2013. This means that the bunker's safety already complies with the applicable standard. Dose-rate visualization was also carried out to help interpret the dose occurring at each dose-rate measurement point around the bunker.

Keywords: LINAC, OpenMC, Monte Carlo Simulation, Radiation Protection

Principal Supervisor: Ir. Anung Muharini, M.T., IPM.
Co-Supervisor: Anisza Okselia, S.T., M.Si.

---

## ABSTRACT (original English text)

SAFETY EVALUATION OF HASAN SADIKIN HOSPITAL'S 10 MeV LINAC BUNKER USING OpenMC SIMULATION METHOD

Muhammad Arya Hanif
19/443954/TK/49150

Submitted to the Department of Nuclear Engineering and Engineering Physics, Faculty of Engineering, Universitas Gadjah Mada on July 12, 2024, in partial fulfillment of the requirement for the Degree of Bachelor of Engineering in Nuclear Engineering.

This study will examine the safety of the LINAC Elekta Synergy bunker room at RSUP Dr. Hasan Sadikin. The safety examination will be conducted by comparing the radiation dose in the surrounding rooms with the dose limit enforced by BAPETEN. Visualization of the dose will be done to help the interpretation of the dose spread occurring in the bunker.

The examination is executed using Monte Carlo simulation provided by version 0.13.1 of the OpenMC particle transport code. This research was carried out by evaluating the surrounding rooms' dose at varying distances of 30, 100, and 200 cm to the bunker wall. Occupancy, utility, and workload factors will be used to determine the dose limit values that apply at each of these points.

The dose surrounding the room is detected in the range of 8.28 × 10⁻³ to 0.208 µSv/week. This is already much smaller than the implemented rule enforced by BAPETEN in Perka No. 3 of 2013. This means that the safety of the design is in accordance with the standard. Dose-rate visualization has also been carried out to help interpret the dose that occurs at each dose-rate measurement point around the bunker.

Keywords: LINAC, OpenMC, Monte Carlo Simulation, Radiation Protection

Supervisor: Ir. Anung Muharini, M.T., IPM.
Co-supervisor: Anisza Okselia, S.T., M.Si.

---

# CHAPTER I. INTRODUCTION

## I.1. Background

Radiotherapy is one of the three main methods for treating cancer. The three main methods are surgery as the physical method, chemotherapy as the chemical method, and radiotherapy as the physics-based method. There are 66 radiotherapy units in 44 cancer-treatment centers spread across 16 provinces in Indonesia [1]. This means there was a radiotherapy-unit density of 0.247 per million Indonesian inhabitants in that year. This is quite far from the target of 7 radiotherapy units per million inhabitants recommended by the International Atomic Energy Agency (IAEA) [2]. It also means that a large number of radiotherapy bunkers must be built to reach that target.

A radiotherapy bunker is a room intended to protect the general public and hospital workers from the radiation emitted by a radiotherapy facility. The Linear Accelerator (LINAC) Synergy bunker at RSUP Dr. Hasan Sadikin has gone through a series of design and verification stages before becoming operational. The regulation that must be considered is Article 41 of BAPETEN Chairman Regulation No. 4 of 2013 concerning dose constraints for radiation workers and the public [3]. Then, to meet that standard, nuclear organizations such as the IAEA and the National Council on Radiation Protection & Measurements (NCRP) have developed calculation methods to satisfy the previously established standards [4]. In addition, there is the NCRP Report No. 151 document, which serves as a guide for building radiotherapy safety facilities [5]. This regulation was created to facilitate the optimization of benefit against risk in the use of radiotherapy facilities. The optimization method can also be carried out using computer simulation to ensure that the dose rate around the bunker room complies with the applicable standard. A radiotherapy bunker design formed based on that regulation can then be checked using analytical calculations or dose-rate measurements after installation.

Analytical calculations are performed at points behind the constructed bunker wall. The wall thickness between the LINAC and that point is then compared with the minimum wall-thickness value of the bunker so that the dose rate can be lower than the dose constraint. After the bunker is built and the LINAC is installed in the room, irradiation at maximum dose is performed so that the dose rate in the surrounding buildings can be checked. Based on this examination, the dose rate on the bunker roof exceeded 5 µSv/hour. This is assessed as greater than the dose constraint set by BAPETEN in Perka No. 3 of 2013, which is 200 µSv/week. Moreover, the measurement results do not always show a lower dose rate at greater distances. This contradicts the inverse square law applied in the dose-rate calculation. Interpretation of that dose rate can be carried out by visualizing the dose-rate distribution in the room using computer simulation.

Computer simulation is a method that can be used to design instruments and the supporting facilities for the use of instruments that involve radiation. This is because building a prototype often involves components that are not inexpensive to make. In addition, the probabilistic and invisible nature of radiation makes checking parameters during instrument fabrication not as easy as for instruments with visible parameters. This makes simulation, with its ability to visualize radiation, capable of providing more complete data and flexibility in managing the produced data. Simulation can be used for facility planning, design research, parameter optimization, and so on [6]. One advantage of simulation is the visualization of dose distribution and particle movement. That advantage is something that neither analytical calculation nor direct measurement possesses. Despite this advantage, simulation accuracy depends heavily on how detailed the geometry and parameters defined in the simulation are. The visualization produced by the simulation can help interpret the dose distribution that occurs in a radiotherapy facility.

## I.2. Problem Formulation

After the bunker design is created based on the existing regulation, the design will be simulated to determine the estimated dose received in each room around the LINAC. Based on that dose rate, it is possible to estimate how much dose is received by workers each week. Based on the above, the problem formulation to solve this matter is as follows:

1. What is the dose rate around the bunker room according to the OpenMC simulation?
2. What is the dose distribution in the LINAC bunker room?
3. Does the simulated dose rate meet the dose constraint?

## I.3. Research Objectives

1. To analyze the LINAC dose distribution in the bunker.
2. To determine the safety of the LINAC bunker.

## I.4. Research Benefits

To add input for the management of RSUP Dr. Hasan Sadikin for the radiation-safety management of health workers and the general public in the Synergy bunker room.

## I.5. Scope and Limitations

There are several limitations to this research, among them:

1. The detector uses a simple detection tally and does not replicate the actual detector design.
2. Irradiation uses a simplified LINAC geometry model with an energy of 10 MeV.
3. The Monte Carlo simulation uses OpenMC version 0.13.1.
4. The bunker design studied is the LINAC Synergy bunker design at RSUP Dr. Hasan Sadikin.
5. The simulation uses 1,000,000,000 particles with 3 batches.
6. The study is not performed on the top side or the southern side of the bunker.

---

# CHAPTER II. LITERATURE REVIEW

A LINAC bunker room requires different specifications compared with ordinary hospital rooms. This is because the primary radiation, secondary radiation, and the neutronics produced by high-energy photons require different thicknesses and materials compared with ordinary hospital rooms. Therefore, the placement and construction are quite costly. This makes the reuse of a radiotherapy bunker room cut significant costs. Despite such cost reduction, safety remains the priority in realizing a radiotherapy facility. Based on a study conducted by A.S. Ferdiansyah, the repurposing of a 6 MeV LINAC bunker to 10 MeV can be done by adding 2 cm of iron-oxide nanoparticles and boron carbide to the waiting room, roof, and archive room of the LINAC bunker at RSUP Dr. Sardjito. Iron oxide was chosen because it has high attenuation of fast neutrons, while boron carbide has high attenuation of thermal to epithermal neutron radiation [7].

Radiation-dose measurement outside the LINAC bunker room had also previously been performed by the vendor at RSUP Dr. Sardjito. That study found that the radiation dose did not reach 2 μSv/h across the entire area around the radiotherapy room, except in front of the door at 4.7 μSv/h. The measurement was performed at seven different points around the bunker room. Based on that research, in his thesis Y. M. Dinata suggested that the bunker door be thickened using lead [8].

The use of simulation to examine the dose rate around a hot-lab room has also been performed to study the economic factors of combinations of bunker wall materials. In his research, A. Rafi combined concrete, concrete with a 1 cm lead layer, and concrete with a 2 cm lead layer. The use of a lead layer can reduce the wall thickness by up to 5 cm at certain points. Lead lining can cost up to seven times more than using only concrete. This research concluded that the most optimal design in terms of radiation protection and economics is the hot-lab design without lead lining on the bunker wall [9].

Simulation has also been performed by N. K. T. Kusnaedi for designing a bunker room for a 30 MeV radiotherapy facility. That energy is produced by a cyclotron used in a Boron Neutron Capture Therapy (BNCT) facility. The maximum radiation-dose standard enforced by BAPETEN for radiotherapy facilities was successfully met in that bunker design. The required wall thickness was 100 cm to 350 cm of concrete and 100 cm to 250 cm of boron concrete and barite concrete [10].

OpenMC is one of the open-source codes used in designing radioactive facilities. Bunker safety evaluation using this photon and neutron transport simulation code had previously been performed on the bunker of Jogja International Hospital. In that study, the analytical and simulation results were compared. That research successfully determined that the bunker complied with BAPETEN safety standards based on both the OpenMC simulation and the analytical calculation. It was also found that the bunker required the addition of at least 92 millimeters of Boron Loaded Polyethylene (BPE) thickness [11].

Research to validate the credibility of Monte Carlo simulation results on a LINAC profile has also been performed by replicating Quality Assurance (QA) on a TrueBeam STx variant LINAC at Songklanagarind Hospital. This research, conducted by M.A. Efendi, used the PRIMO code to simulate the Percentage Depth Dose (PDD) and lateral profile using LINAC geometry. The simulation results were consistent with the experimental results, the Analytical Anisotropic Algorithm (AAA) calculation, and the golden beam provided by the manufacturer. PRIMO is a Monte Carlo code intended specifically for radiotherapy [12].
