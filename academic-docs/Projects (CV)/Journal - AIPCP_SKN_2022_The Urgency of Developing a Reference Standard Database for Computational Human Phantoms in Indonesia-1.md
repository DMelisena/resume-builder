 The Urgency of Developing a Reference Standard Database
     for Computational Human Phantoms in Indonesia

         Francesca Putri b), Muhammad Arya Hanif c) and Sita Gandes Pinasti a)

 Department of Nuclear Engineering and Engineering Physics, Faculty of Engineering, Universitas Gadjah Mada,
               Jl. Grafika No.2, Senolowo, Sinduadi, Mlati, Sleman, Yogyakarta, 55281, Indonesia


                                   a)
                                        Corresponding author: sita.gandes.p@ugm.ac.id
                                                  b)
                                                     cesca.valen@gmail.com
                                               c)
                                                  aryasenaria@mail.ugm.ac.id

   Abstract. Computational Human Phantoms (CHPs) are made to replace the actual human body by mimicking the tissue’s
   characteristics to measure radiation dose safely. The development of CHP from the first ORNL model to 4D NCAT and
   XCAT explains that CHP is a high-demand research topic. In recent years, the way CHP that commonly used is by
   modifying the present computational model and changing the height, weight, and organ mass accordingly to the desired
   model. This method may be quick and effective, but it has a complex step. This paper will briefly explain why Indonesia
   must have a database for standard reference CHP and its urgency based on the vast applications in environmental
   radioactivity, radiation exposure in nuclear reactors, radiodiagnosis, and treatment planning in radiotherapy.


   Keywords: phantoms, computational modeling, Indonesia, radiation dosage, reference standards


                                                  INTRODUCTION
    The human body is made from various inhomogeneous tissues with various geometric shapes and densities.
Considering its characteristics, the radiation interaction in the human body is highly complex. Each internal organ
might receive different absorbed doses from the same radiation source. It is difficult and unattainable to do a direct
measurement. Phantoms are made to replace the natural human body by mimicking the tissue’s characteristics to
measure radiation dose safely.
    Phantoms vary from a simplified geometry to a complex one. Phantom can be divided into a computational
phantom and a physical phantom. The computational phantoms can be developed without the cost of manufacturing
[1] and are more flexible to modify. The constructions of computational phantoms need to consider the anatomy of
the body, radiosensitivity of each tissue, computational efficiency, and geometrical compatibility by using a Monte
Carlo code [2]. Simulation using CHP could simulate thousands and even millions of scenarios using different types
of source particle and energy.
    Nuclear technology applications such as radiotherapy in medicine field, TRIGA 2000, Kartini, Serba Guna G.A.
Siwabessy (RSG-GAS) nuclear reactor, and the impact on environmental radiation have vastly developed, especially
in Indonesia. Alongside any radioactive source, the terms as low as reasonably achievable (ALARA) must be
ensured in every personal. Especially during radiotherapy, only a specific absorbed dose is allowed to meet the
conjunction of the need to cure it and the increasing damage to other tissue. Usually, a reference CHP is used for
simulation. However, demographics in the world have significant differences among races, gender, and age. CHPs
are made based on reference man physical, which statistically represents the most common people in the country.
The impact on differences in characteristics of reference man will be discussed later in this paper.
   This paper summarizes the historical background of CHP, the latest development and research in Indonesia and
other countries, a brief explanation of why Indonesia must have a database for CHP, and an overview of CHPs
applications. According to the International Commission of Radiological Protection (ICRP) recommendation, for the
term phantom is used for experimental physical phantoms. In contrast, the term model is used to define a
computational model that is made on a computer [3].

                                     HISTORICAL BACKGROUND
    CHP development first started in 1960 by Oak Ridge National Laboratory (ORNL). The model was made by
adjusting simple shape such us elliptical cylinders and cones. It's made to represent a healthy Caucasian man living
in North America and Europe which was 70 kg in weight with 170 cm in height.
    In 1969, first homogeneous tissue composing a skeleton, a pair of lungs, and the remainder (soft tissue) is made
and called as "MIRD-5 Phantom". The attempt to develop the first realistic is made after a few years, but only made
available to the Space Radiation Dosimetry Community.
    In the mid 1970s, Poston and others managed to develop individualized pediatric phantoms of one year old, five
years old, ten years old and 15 years old. This model is not widely adopted due to its complex geomtic shapes. Its
then replaced with by Cristy and Eckerman's "family" of phantoms which also consist of a female adult. All
phantom composed of three tissue types which are: bone, soft tissue, and lung. The effort is continued by Stabin and
his collegues, introducing a pregnant woman at end of each trimester of pregnancy.
    In the 1980s, powerful computers open the path for creating Voxel phantom which is not consisting of reformed
simple shape, but ones that is closer to realistic. The boost of CT and Magnetic Resonance (MR) imaging technique
made it possible to do so and not just the capability to show, but also modified due to it's digital format nature.
    The method could easily be breakdown into four step : (1) Getting a tomographic images (e.g., CT, MRI, or
anatomical photography) on the man's entire body; (2) Identify the organ to then could be input to having different
parameters; (3) Insert the parameter (e.g., soft tissue, hard bone, air, etc.) and the chemical composition of organs
and tissues; and (4) Register the segmented into a 3D for visualization and monte carlo calculations.




                                     Figure 1. Steps to create a voxel phantom [2]

    In the 2000s, however, CHP developed into several groups that managed to demonstrate the feasibility of
creating phantoms using the boundary representation (BREP) modeling technique which has include topological and
geometric information that explains the connectivity and position of objects in human anatomy. 4D NCAT phantom
offers a vast improvement by allowing a simulation of cardiac and respiratory motions and has widespread usage,
especially in nuclear medicine imaging research for evaluation and improving myocardial SPECT imaging. 4D
NCAT later evolved to XCAT phantom that is more detailed and realistic in anatomical and physiological. It is
suitable for higher-resolution imaging applications [2].

                     COMPUTATIONAL HUMAN PHANTOM DATABASE

                                 Reference Phantom in Other Countries
Many countries are developing a phantom database. In Asia, countries like Korea, Japan, and China have developed
CHP using the representation of their population [3]–[7].
              TABLE 1. Mean body weight and height of adult male reference from CHP in different countries
                           Korean          Japanese         Chinese      ICRPs Caucasian Man           Indonesia
      Body weight (kg)          67.8             65             65                 73                   55.73
      Body height (cm)          171             172.8          170                 176                  160.9

   Absorbed dose in a target is influenced by cumulated activity (𝐴̃) and S-value. It is described as below.

                                                  𝐷 = 𝐴̃ × 𝑆                                                       (1)

    Shape, size, and mass of the target regions contribute to the S-value [8]. Which may determine the accuracy of
the dose calculations. The Caucasian model and Indonesian model have different values on the median body weight
and height. For better accuracy, it is supposed to use the specific model with more accurate body model
representations. It needs to be stated that such a comparison didn’t include the variation of bone mass, density, and
volume that could differ. This comparison is only made to roughly describe the differences between adult man
references.

                             Computational Human Phantom in Indonesia
    Currently, there is no available reference man and phantom that could represent the common Indonesian man to
be used in the simulation. Anthropological data to select a man representation is also vital. The last study is done in
1996 by sampling 1,157 males and 1,108 people living in Java [7]. There is also research to create CHP to represent
Indonesian man. The ORNL model is used to replicate it closer to the Indonesian’s height and weight [9]. However,
the CHP used is already outdated compared to the 4D CHP.
    But making the reference man couldn’t be said as starting from scratch. Some reports such as Riskesdas and
PMK could make a rough estimation of how a reference man would be made. But considering the advancement in
the recent years, creating a model without a solid basis of statistical data is something that’s not going to be able to
fully benefit from the advancement.

                APPLICATIONS OF COMPUTATIONAL HUMAN PHANTOM

                                Applications in Environmental Radiation
    Environmental radiation exposure comes from naturally occurring radioactive materials (NORM) and
technology-enhanced naturally occurring radioactive materials (TENORM). TENORM exposure comes from
mining activity, oil and gas exploration, processing, and chemical processing of nuclear material. To ensure the
safety of the employee and the near-live public, a radioecological assessment must be done.
    In dosimetry, dose coefficient is a quantity which describe a tissue equivalent dose per unit acute intake. Dose
coefficient is different for each radionuclide. It could be determined by the type of radiation, radiation intensity,
energy emitted by radioactivity, and anatomical characteristic of the target. The dose coefficient incorporates the
transport of emitted radiation in the environment, human anatomy simulation, and the transport of radiation in the
body. The air kerma strength per unit of activity sourced from air and ground is calculated using simplified and
idealized exposure geometries, usually from semi-infinite volume source in the air or ground, and infinite plane
source in the ground.
    The result of the dosimetry calculation is then used to calculate the secondary source that located around the
computational phantom in the form of a slightly bigger cylinder using a photons with precise probability distribution
functions as derived from the initial gamma-ray ray fields, with respect to height, energy, and angle. These height-
dependent double differential gamma-ray fields were then incorporated into the organ dose calculation with the
CHP.

                      Applications to Radiation Exposures in Nuclear Reactors
   Two-dosimeter method is used to monitor personal dose which is also called as personal dose equivalent Hp(d).
Hp(10) or having 10mm depth below body surface is used to approximate the effective dose or EDE taken from
external exposure. But thiis would only work if the radiation is coming to the detector instead of passing through the
body and got annuated first before reaching the detector. That’s why two dosimeter is attached on the chest and back
of radiation worker.
    A simulation is then could be held to calculate the distribution of radiation dose. Effective and radiation doses to
organ/tissues and personal desimeter for external photon exposure could be made using PRDC. There is also EPRI
EDE calculator to search for the effective dose and EDE from the hot particles in skins.

                                           Applications in Medicine
                                                    Radiodiagnosis

    The largest source of man-made radiation exposure is coming from diagnostic medical examinations [2]. This
happens because to get a good view that would actually be understandable and helpful, beam parameters needs to be
set. Such method is hard to optimize because:
    1. The quality of the resulted x-ray imaging chain contains many variable that affect the result such as : The
         anatomy variations, The detection system, scatter removal grid etc.
    2. The sole indicator, which is Effective dose could only be count using a whole=body computational phantom
         of delineated organs.
    3. The result of diagnostic X-ray is greatly counting on involving various body sites and tasks.
    4. An evaluation is needed after a quantitative image is made to determine whether the image has met the
         criteria or not.
    Utilizing repeated computerized observations on an imaging process using Monte Carlo can be repeated many
times. This research field mostly made 2,500,000 images in the process [2], which is unattainable using human
volunteers. Formulas to determine image quality analysis have also been made: observer computational system,
Hotelling Observer, Channelized and Laguerre-Gauss Hotelling Observers, etc. Such methods have allowed
researchers to understand the relationship between x-ray beam characteristic, detector efficiency, lesion
characteristics, patient dose, and lesion detection threshold. For example, it has been made clear that optimal X-ray
energy is on the range of to 65 KeV. This method minimized human labor with effective cost and time.

                                         Treatment Planning in Radiotherapy

    The use of phantom greatly helps create an adaptable Image-Guided Radiation Treatment Planning. The
treatment would be able to predict accurately and prepare for the intrafraction motion, primarily due to the patients
respiratory motion. Adaptive radiation therapy also helps to adapt to the patients setup uncertainty resulting in a
closer treatment delivered dose. The tool is necessary to simulate an extremely complex spatial and temporal
distribution. A motion-simulating, the phantom is a unique tool for investigating extremely complex spatial and
temporal distributions of radiation in the patient body. Radiation dosimetry using radiation transport simulations
using human phantom. It could also variate radiation fluence, energy deposition density, and dose per decay [10].

                             CONCLUSION AND FUTURE DIRECTIONS
    In recent years, the way CHP that commonly used is by modifying the present computational model and
changing the height, weight, and organ mass accordingly to the desired model. This method may be quick and
effective, but it has a complex step. CHP is one of the keys to some research topic of computational life science
applications that will benefit safety and efficacy assessments, including radioecological evaluations, the
development radiotherapy and biomedical devices, personalized medicine for treatment, and more accurate
calculation in personal dosimetry. In the future, CHPs will becoming more precise to the actual human body. For the
purpose to allowing more complex simulations, it is essential to achieve a sufficient population representations for a
first step in Indonesia. The more similarity the phantom represents one human body, the more excellent way to
enhance the nuclear safety system by simulating a possible exposure and predicting potential danger, and hazards.
    With a integration of accurate and realistic computer-generated models of human, distinct radiation sources and
distributions, transport of radiation through biological tissues, characteristics of the imaging system, and physics of
the image formation process will give more precise radiation dose distributions that are closer to those obtained from
clinical and experimental laboratory studies [11].
   To develop a standard reference CHP, anthropological research to obtain mean distribution data of human body
characteristics from specific gender, age, and health conditions must be held. After receiving the data, the volunteer
with the particular features needs to take its tomographic images and then construct a visualization CHP file format.
With the vast racial diversity in Indonesia, it is not accurate to use a reference CHP with only one type of race. It is
recommended for future research to develop a CHP reference from another race that lives in Indonesia.

                                                 REFERENCES
1.  C.K. McGarry, L.J. Grattan, A.M. Ivory, F. Leek, G.P. Liney, Y. Liu, P. Miloro, R. Rai, A. Robinson, A.J.
    Shih, B. Zeqiri, and C.H. Clark, Phys. Med. Biol. (2020).
2. X.G. Xu and K.F. Eckerman, editors, Handbook of Anatomical Models for Radiation Dosimetry (CRC
    Press/Taylor & Francis Group, Boca Raton, FL, 2010).
3. C.H. Clement and International Commission on Radiological Protection, editors, Adult Reference
    Computational Phantoms: Joint ICRP/ICRU Report (Elsevier, Amsterdam, 2009).
4. C.H. Kim, S.H. Choi, J.H. Jeong, C. Lee, and Chung, Physics in Medicine & Biology 53, 4093 (2008).
5. T. Nagaoka, S. Watanabe, K. Sakurai, E. Kunieda, S. Watanabe, M. Taki, and Y. Yamanaka, Phys. Med. Biol.
    49, 1 (2004).
6. L. Liu, Z. Zeng, J. Li, B. Zhang, R. Qiu, and J. Ma, Physics in Medicine and Biology 54, 6675 (2009).
7. M. Syaifudin, Z. Alatas, T. Rahardjo, and Mugiono, (1996).
8. D.L. Bailey and American Association of Physicists in Medicine, editors, Nuclear Medicine Physics: A
    Handbook for Teachers and Students (International Atomic Energy Agency, Vienna, 2014).
9. L. Miska, R. Safitri, I. Irwandi, and E. Yusibani, JRE 15, (2019).
10. K. Talaat, J. Xi, P. Baldez, and A. Hecht, Sci Rep 9, 17450 (2019).
11. H. Zaidi and B.M.W. Tsui, Proc. IEEE 97, 1938 (2009).
