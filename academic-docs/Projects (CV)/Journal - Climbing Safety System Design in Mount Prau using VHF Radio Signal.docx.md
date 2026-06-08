     Climbing Safety System Design in Mount Prau using VHF
                          Radio Signal
      Samuel Kristiyana1, a) Fazrin Raga Pakarti2, b) Rifqi Muhammad3, c) Muhammad
                                      Arya Hanif4, d)
                          1
                           Department of Electrical Engineering, Faculty of Industrial Technology
                                    Institut Sains & Teknologi of AKPRIND Yogyakarta
                               Jl. Kalisahak No. 28 Komp. Balapan, Yogyakarta, Indonesia
                               234
                                  Department of Nuclear Engineering and Engineering Physics
                                    Faculty of Engineering of Universitas Gadjah Mada
                                         Jl. Grafika 2, Yogyakarta 55281, Indonesia
a)
     yanaista@akprind.ac.id b) fazrinrp28@mail.ugm.ac.id c) rifqim43@mail.ugm.ac.id d) aryasenaria@mail.ugm.ac.id



      Abstract. An empirical experiment was conducted on the climbing safety system on Mount Prau using VHF radio
      signals. In the experiments carried out, the data obtained in the form of position and readability were then processed to
      obtain data on the distribution and signal strength along the hiking trail. From the research that has been done, the design
      of a climbing safety system needs to be made to make it safe and comfortable for mountain climbers. The main climbing
      safety system includes speed in handling accidents. To support this, a communication tool is needed which in this
      research was tested in the signal aspect. This research also revealed that the VHF radio signal along the Mount Prau
      hiking trail has good quality with an average signal strength of 41.3226 V/m. With the results of this research, it is
      possible to carry out further development to create a climbing safety system in the form of a fixed radio station,
      especially at each climbing post.


      Keywords: climbing, mountaineering, radio communication, safety system design, communication network

                                                      INTRODUCTION
    According to a survey held by Statista Research Department, the number of climbers in 2019 has risen
significantly by nearly 20 million, which is 66.44% from 2006. This has a positive impact on the community
because mountain climbing is a healthy activity, but it demands good physical form and health, so it requires good
preparation [1]. Unfortunately, there’s a lot of people that do not have the basic knowledge and skills in mountain
climbing. As a result, many climbers got lost and many accidents occurred. Considering that in the last five years,
80% of the population had not taken any applicable courses, such as basic first aid courses [1]. There are 30% of
deaths that are related to mountain activities in France are mountain climbing, with 26 as the average number of
victims per year from 2003 to 2012 [2].

    Based on the accident cases that happened, it can be seen that one of the preventive measures is quick first aid
response. When an accident occurs in a hiking trail, climbers who do not have the knowledge of first aid need help
from others, so they need to report the accident to the mountain administrator in the base camp which takes a lot of
time for the first aid and/or advanced help to arrive. Therefore, a communication network is needed so that the time
required to reach the base camp can be shortened so the climbers don’t need to go down to report an emergency or
ask for help.
    The communication which will be used is radio communications. For radio communications to occur, there must
be a transmitter that takes sound or data, converts it into a radio frequency (RF) signal, and transmits it through an
antenna. There must also be a receiver that receives the RF signal and converts it back into sound or data. Radios
that contain both a transmitter and a receiver are referred to as transceivers [3]. The RF which will be used in
communication networks is Very High Frequency (VHF). The wavelength of VHF is between 30 MHz - 300 MHz
and 150 km range. The advantages of using radio frequency communication in this situation are that it is easier and
faster to implement, more affordable, and has a wide range.

    Handheld-Transceiver (HT) will be used for this research to know how well radio signals behave in Prau
Mountain so it can see if this communication can be implemented or not. Afterward, a safety system will be
designed based on the research result. Other than that, if this system can be implemented, that system can also
function as a tool for the mountain ranger in communicating with mountain administrators for other reasons not only
for emergency conditions. This system hopefully could support local governments to promote mountain tourism
while giving more sense of comfort to the climbers by reducing the number of accidents with an available
communication network for emergency use.

                                                    METHOD
    Ideal climbing conditions have a high level of safety and an adequate safety system, where there is a system that
connects climbers, base camp, and rescue teams. To achieve this condition, the research was conducted on the safety
system on Mount Prau, by looking at it from a communication point of view. In this research an empirical method is
used, this method is implemented by signal testing from the base camp to the peak of Mount Prau. The tools used
are a pair of handheld-transceivers (HT), one of which uses a Larsen antenna and the other uses a super stick
antenna, and a global positioning system (GPS). Global positioning system (GPS) is a space-based radio navigation
system owned by the United States government and operated by the United States Air Force. It is a global
navigation satellite system that provides geolocation and time information to a GPS receiver anywhere on or near
the Earth where there is an unobstructed line of sight to four or more GPS satellites [4]. The method that will be
used is to communicate directly between HT and HT by using a frequency of 153.30 MHz which is the frequency
used by the Mount Prau administrator.

    There is an alternative method of using a repeater that is already installed on the mountain’s peak, but it’s used
by the local amateur radio satellite organization (ORARI) and is not available for the general public if there is no
permit. There is also an alternative additional method of sending simple coordination of Global Satellite Radio
Navigation Systems that could help to give a location, but it has a limited accuracy of 19 meters error using
NAVSTAR SRNS and 14 meters error using SRNS GLONASS SYSTEM. Those errors are deemed too big of an
error to be added as a feature. [5]
           FIGURE 1. Flowchart of Base Station                         FIGURE 2. Flowchart of Mobile Station

    Based on Figure 1 a handheld transceiver (HT) was prepared which was using a Larsen antenna placed at the
Base Station will stand by at the base camp and wait for messages from Mobile Station. If there is a message, then
Base Station will confirm that the message was received. Data such as waypoint, time, and signal rating scale were
recorded based on the message that was received. This is done repeatedly until the Mobile Station reaches the peak
of the mountain. Meanwhile, in Figure 2, an HT which was using a super stick antenna is carried when climbing
from the base camp to the peak of the mountain. The mobile station defines the first waypoint and then climbs the
mountain trail until reaches a 50-meter distance using GPS. This method continues until it reaches the peak of the
mountain. When there is no reply from the base station, the mobile station has to move somewhere around or use the
second method which is using a repeater. If there is still no reply, then still need to record data that there is no reply
or null data.

    Both stations use HT to send messages alternately to avoid stacking. If there is a process of transmitting from
two or more communication devices, it will cause a buildup or jump of signals on one frequency which results in the
closing of audio information in communication [6]. GPS is used to determine location coordinates and determine the
distance traveled when tracking. Prior to tracking, the coordinates of the place, the altitude of the base camp, and the
rating scale of messages sent between the mobile station and the base station are recorded. Testing the rating scale of
this message is done by sending a formatted message. This message is sent from the mobile station HT to the base
station HT. The message rating scale is recorded in the form of a quantity value from 1 to 5, based on the signal
rating scale based on the overall rating on the SINPO Codes from the International Telecommunications
Union-Radiocommunication Sector (ITU-R). SINPO is an acronym for several parameters that describe how well
the signal is used to convey messages through radio signals. However, in this research, only an overall rating was
used with a value of 1 being the lowest signal rating scale and a value of 5 being the highest signal rating scale, as
can be seen in Table 1.
                                            TABLE 1. SINPO signal reporting code [7]

     Rating Scale                S                    I                     N                 P                       O

                          Signal strength                        Degrading effect of                         Overall rating

                                                 Interference             Noise          Propagation
                                                                                         disturbance
           5             Excellent           Nil                  Nil                  Nil                  Excellent
           4             Good                Slight               Slight               Slight               Good
           3             Fair                Moderate             Moderate             Moderate             Fair
           2             Poor                Severe               Severe               Severe               Poor
           1             Barely audible      Extreme              Extreme              Extreme              Unusable

    Coordinate data and altitude data that have been obtained are processed into distance data that shows the distance
between the mobile station that sends the message and the base station that confirms the message. On the mobile
station, a description of the surrounding terrain has been recorded. However, because almost all terrain tends to be
homogeneous, so the terrain description is negligible.

                                                RESULT AND DISCUSSION
    The empirical method is used to obtain position data and rating scale in this research. Position data is obtained in
the form of latitude, longitude, and altitude. In addition, signal rating scale data is also obtained. The signal rating
scale data is divided into two parts, namely the rating scale of the mobile station and the rating scale of the base
station. The mobile station scale rating is the rating scale received by the mobile station and the base station scale
rating is the rating scale received by the base station. All data are recorded and displayed in Table 2.
                   TABLE 2. Data of Signal Rating Scale, Coordinates, Elevation, and Distance Based on Research


                                                            Position                                 Rating Scale
                     Waypoin                                                       Distance
           No                                                                                     Mobile       Base
                        t            Latitude        Longitude         Altitude   from Base
                                                                                                  Station     Station
                                                                                  camp (m)
               1       T1            -7.20949         109.9253         2010.7        0              5             5
               2       T2            -7.20909         109.9251         2007.62     49.65            5             5
               3       T3            -7.20885         109.9246         2007.79     105.01           5             5
               4       T4             -7.2083         109.9246         2008.28     153.21           5             5
               5       T5            -7.20798         109.9249         2016.8      173.61           5             5
               6       T6            -7.20754         109.9251         2016.72     217.95           5             5
               7       T7            -7.20718         109.9255         2016.89     257.81           5             5
               8       T8            -7.20695         109.9258         2030.89     287.77           5             5
               9       T9            -7.20727         109.9262         2040.43     266.07           5             5
               1       T10
       0                             -7.20755         109.9264         2043.88     247.51           5             5
               1       T11
       1                             -7.20805         109.9267         2049.29     222.47           5             5
               1       T12
       2                             -7.20849         109.9268         2060.57     199.36           5             5
               1       T13
       3                             -7.2089          109.927          2062.72     198.68           5             5
               1       T14
       4                             -7.20908         109.9275         2063.9      246.94           5             5
    1   T15
5             -7.20932   109.9279   2069.42   287.44    5   5
    1   T16
6             -7.20945   109.9283   2075.63   330.98    5   5
    1   T17
7             -7.20945   109.9288   2081.7    386.13    4   5
    1   T18
8             -7.20957   109.9294   2085.11   452.38    5   5
    1   T19
9             -7.20907   109.9291   2131.06   421.79    5   5
    2   T20
0             -7.20866   109.929    2132.85   418.47    5   5
    2   T21
1             -7.20806   109.929    2137.8    438.05    5   5
    2   T22
2             -7.20766   109.9289   2200.48   446.23    4   5
    2   T23
3             -7.20724   109.9291   2206.65   488.18    5   5
    2   T24
4             -7.20696   109.9294   2213.02   532.65    5   5
    2   T25
5             -7.20675   109.9301   2178.79   610.91    5   5
    2   T26
6             -7.20626   109.9305   2195.86    676.8    5   5
    2   T27
7             -7.20619   109.9309   2201.05   718.53    5   5
    2   T28
8             -7.20574   109.931    2304.5     754.5    4   5
    2   T29
9             -7.20532   109.9312   2311.14   799.14    5   5
    3   T30
0             -7.20484   109.9315   2315.08   857.41    5   5
    3   T31
1             -7.20431   109.9317   2324.78   911.17    5   5
    3   T32
2             -7.20408   109.932    2363.7    952.98    5   5
    3   T33
3             -7.20372   109.9324   2448.99   1012.48   5   5
    3   T34
4             -7.20338   109.9328   2446.24   1070.58   4   5
    3   T35
5             -7.20329   109.9333   2474.11   1119.89   4   5
    3   T36
6             -7.20322   109.9337   2497.84   1159.64   4   5
    3   T37
7             -7.20277   109.9342   2513.48   1233.82   5   5
    3   T38
8             -7.20267   109.9347   2566.62   1284.68   3   3
    3   T39
9             -7.20249   109.935    2569.4    1323.22   3   3
    4   T40
0             -7.20196   109.9353   2574.82   1384.94   5   4
    4   T41
1             -7.20105   109.9352   2577.65   1439.97   4   4
    By using a method standardized by the International Telecommunication Union, the voice produced by the
handheld transceiver of signal rating scale from one point to the base camp which is also the first point that is
checked before the following 40 points before reaching the peak. Based on the overall SINPO score data that has
been obtained, the percentage of excellent signal overall at the base station reaches 90% of the 40 points examined,
5% is good, and 5% is fair. While on the mobile station the signal rating scale reaches 77.5% excellent with 17.5%
good and 5% fair. Both results are shown in Figure 3 and Figure 4. It can be seen that the signal from base camp to
the top of Mount Prau has a very good rating scale with only 2 waypoints having a rating of 3 on the mobile station
and base station while the rest have a rating above 3 which indicates that the creation of a radio communication
system in Mount Prau is an applicable option.
 FIGURE 3. Percentage of signal rating scale that received by   FIGURE 4. Percentage of signal rating scale that received by
                   mobile station (MS)                                             base station (BS)




                         FIGURE 5. Distribution of signal rating scale based on waypoint

     With the latitude, longitude, and altitude contained in the data that has been presented, the distance between the
point and the base camp point is sought. This can be solved using a simple Pythagorean by having the longitude and
latitude values converted to meters as in Equation (1). This can be done using a conversion simplification at the
value of the poles where 1 longitude and latitude can be converted to 111.32 km [8].

                                                                                                          2
                𝐷𝑖𝑠𝑡𝑎𝑛𝑐𝑒 =      (𝐵𝑎𝑠𝑒 𝑆𝑡𝑎𝑡𝑖𝑜𝑛 𝑃𝑜𝑖𝑛𝑡 (𝑥, 𝑦, 𝑧) − 𝑀𝑜𝑏𝑖𝑙𝑒 𝑆𝑡𝑎𝑡𝑖𝑜𝑛 𝑃𝑜𝑖𝑛𝑡(𝑥, 𝑦 , 𝑧))               (1)

   Based on Table 1 that shows the relationship between distance from base camp and signal rating scale, it can be
seen that there is a decrease in signal rating scale corresponding to the distance between the mobile station and the
base station, but the decline is still acceptable. In these conditions, the sound can still be deciphered. The signal
rating scale based on the quality of the voltage (E) can be quantized as microvolts per meter using the voltage gain
formula which is written as in Equation (2) [9].
                                                        20𝑙𝑜𝑔𝐸
                                                𝐺𝑎𝑖𝑛 = 50             (2)

    With the gain in decibels having a maximum value of 60, the overall value is converted from 5 to 60 dB which is
a perfect signal, 4 to 48 dB, 3 to 36 dB, and so on. By using the above formula, the following formula is generated
as in Equation (3).
                                                              𝐺𝑎𝑖𝑛

                                                  𝐸 = 5 ×10 20       (3)

                                            𝐺𝑎𝑖𝑛 = 𝑅𝑎𝑡𝑖𝑛𝑔 𝑆𝑐𝑎𝑙𝑒 ×12 𝑑𝐵 (4)

    Input the required data in table 1 into Equation (4) and Equation (3), it will get an average of quality of the
voltage (E) at the mobile station of 413222.58 µV/m and at the base station of 45888.5 µV/m, it can be seen that the
signal strength along the Mount Prau climbing trail has the potential to be used to support the mountain climbing
safety system that is being tested. However, at some waypoints, it still experiences fluctuations, as can be seen from
the signal rating scale which has decreased in Figure 5. Overall, from the experimental results that have been carried
out and the results of data processing carried out, the signal strength along the tracking path is capable of supporting
the climbing safety system design.

    At the time of data collection, the weather on the climbing trail tends to be good with a little cloud and light rain.
Factors such as climate are ignored in this research because altitude, humidity, and other factors depending on the
region where the system is applied are homogeneous. From the results of the research, the application of a climbing
safety system design for the Mount Prau climbing route has the capability to create a communication system to
support the climbing safety system. With the results of signal distribution and signal strength, it is possible to build a
fixed radio station on the hiking trail, especially at each climbing post.




          FIGURE 6. Block Diagram of Communication Device for Safety System in the Form of Modified HT

    Because this system is possible to make, the first thing that is proposed is the manufacture of a communication
device for the safety system in the form of a modified HT. The modification that will be made is to make the HT
fixed somewhere to be determined. For the electrical needs of the device, a solar panel electrical system will be used
with a solar charge controller and a battery so that the device can be used all the time. In order to use energy
efficiently, a directional antenna will be used so that no energy is wasted. In addition, modification of the shape of
the HT needs to be done so that it has weather resistance and security from theft. The modifications made are
adjusted as shown in the block diagram in Figure 6. Based on the results of the research, signal rating scale data
show that the proposed device placement could be placed at all waypoints. However, for efficiency, it is proposed
that the device should be placed at every climbing post where Post 1 is in between T18 and T19, Post 2 is at T25,
Post 3 is at T33, and at the peak of the mountain, which is at T41. Table 1 is showing that all waypoint that will be
proposed has at least 4 signal rating scale which indicates that the signal is good.
                                                 CONCLUSION
    From the research that has been done, the use of radio frequencies along the Mount Prau hiking trail can be
implemented with supporting tools such as modified handheld transceivers. Signal strength and distribution that
have been mapped can be used as an opening for further research for the design of climbing safety systems, one of
them being in the design and manufacture of fixed radio stations. That way, it is hoped that the climbing safety
system can be implemented optimally, especially to increase the accident emergency.

                                         ACKNOWLEDGEMENTS

    This research was supported by Satu Bumi Organization from Faculty of Engineering Universitas Gadjah Mada,
Yogyakarta, Indonesia. The completion of this paper cannot be separated from the participation and assistance from
various parties. Therefore, specifically through this section, the author would like to express gratitude and thanks to
Mr. Solichun as a Mount Prau administrator and other mountain rangers who have collaborated and supported in
carrying out this experiment to completion.

                                                   REFERENCES
1. Kogut KT, Rodewald LE. A field survey of the emergency preparedness of wilderness hikers. Journal of
         Wilderness Medicine. 1994 Jun 1;5(2):171–8.
2.Soule B, Lefèvre B, Boutroy E, Reynier V, Frédérique R, Corneloup J. Accidentology of mountain sports.
         Situation review & diagnosis. 2015.
3.Worley GH. Wilderness Communications. Wilderness & Environmental Medicine. 2011 Sep 1;22(3):262–9.
4. Kristiyana S, Susanto A, Sunarno S, Hidayat R. The Radio Frequency Source Position Finder Based on The
         Triangle-Centroid-Algorithm. IJITEE (International Journal of Information Technology and Electrical
         Engineering). 2017 Mar 7;1.
5. Zelentsova EV, Sukhorukov AV, Sukhorukova NA. Creation and development of space radio navigation systems,
         comparison of their accuracy. AIP Conference Proceedings. 2019 Nov 15;2171(1):190002.
6. Kristiyana S. SISTEM DETEKTOR ARAH SINYAL RF MENGGUNAKAN ANTENA DOPPLER. JURNAL
         TEKNOLOGI TECHNOSCIENTIA. 2015 Feb 2;7 No. 2:192–201.
7. RECOMMENDATION ITU-R SM.1135-0. In: International Telecommunication Union [Internet]. Geneva:
         International Telecommunication Union; 2011 [cited 2021 Nov 26]. Available from:
         https://www.itu.int/dms_pubrec/itu-r/rec/sm/R-REC-SM.1135-0-199510-I!!PDF-E.pdf
8. Britannica TE of E. latitude and longitude [Internet]. Encyclopedia Britannica. 2021 [cited 2021 Nov 26].
         Available from: https://www.britannica.com/science/latitude
9. Kraus JD. Antennas. 6th ed. India: McGraw-Hill; 2001.
