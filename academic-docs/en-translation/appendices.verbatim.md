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
