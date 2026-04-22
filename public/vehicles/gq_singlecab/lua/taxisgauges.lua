
local M = {}

local engtime = 0
local engtimer = 0
local particleAmount = 0
local ignkeySmoother = newExponentialSmoothing(6)
local oilPressureSmoother = newExponentialSmoothing(80)
local voltsSmoother = newExponentialSmoothing(7)
local fuelBaseSmoother = newExponentialSmoothing(120)

local function init()
   electrics.values.shiftlight = 0
end

local function reset()
   init()
end

local function updateGFX(dt)
   
  if powertrain.getDevice("mainEngine").ignitionCoef ~= 0 and electrics.values.rpm > 100 then electrics.values.ignkey = 2
  else electrics.values.ignkey = 0 end
  
	if electrics.values.rpm < 100 and powertrain.getDevice("mainEngine").ignitionCoef ~= 0 then electrics.values.ignkey = 1 end
 
 
  
    electrics.values.ignkey = ignkeySmoother:get(electrics.values['ignkey'])

   
	
   electrics.values.fuelBase = electrics.values.fuel

	--Oil Press Math
	
    if electrics.values.rpm > 500 and powertrain.getDevice("mainEngine").oilVolume > 2.5 then electrics.values.oilPressure = electrics.values.rpm  *0.0001000 * powertrain.getDevice("mainEngine").oilVolume / 0.05 + 55
	else electrics.values.oilPressure = electrics.values.rpm  *0.2 * powertrain.getDevice("mainEngine").oilVolume / 12.5 end
	

	 electrics.values.oilPressure = oilPressureSmoother:get(electrics.values['oilPressure'])
 
	 
    if electrics.values.ignkey < 1 then electrics.values.fuelBase = 0 end 
	electrics.values.fuelBase = fuelBaseSmoother:get(electrics.values['fuelBase'])
	
	--Voltage
	
    if electrics.values.ignkey > 1.5 then electrics.values.volts = 100
	else electrics.values.volts = 90 end
	if electrics.values.ignkey < 0.5 then electrics.values.volts = 85 end
	if powertrain.getDevice("mainEngine").starterEngagedCoef > 0 then electrics.values.volts = 80 end
	
	electrics.values.volts = voltsSmoother:get(electrics.values['volts'])
	
end


M.onInit = init
M.onReset = init
M.updateGFX = updateGFX

return M